import React, { useState , useContext, useEffect } from "react";
import axios from '../../axios';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

type UserdataType = {
    token:string,
    username:string,
    name:string,
    email:string,
} | null;

type AuthContextType = {
    userdata:UserdataType,
    isAuthorized:boolean,
    APIFunctions:
    {
        SignIn:(email:string,password:string)=>Promise<boolean>,
        SignUp:(email:string,password:string,name:string,username:string)=>Promise<boolean>,
        SignOut:()=>void,
        PostRequest:(url:string,body:any,needsToken:boolean,params?:any)=>Promise<any>,
        DeleteRequest:(url:string,body:any,needsToken:boolean,params?:any)=>Promise<any>,
        GetRequest:(url:string,needsToken:boolean,params?:any)=>Promise<any>
    },
}

const AuthContext = React.createContext<AuthContextType | null>(null);

export function useAuth()
{
    return useContext(AuthContext);
}

export function AuthProvier(props:{children:React.ReactNode})
{
    const navigator = useNavigate();
    const [isAuthorized,setIsAuthorized] = useState(false);
    const [profileImage,setprofileImage] = useState("");
    const [userdata,setUserdata] = useState<UserdataType>({name:"",token:"",username:"",email:""});

    useEffect(()=>{
        let local = localStorage.getItem("userdata");
        if(local)
        {
            const userdata = JSON.parse(local);
            //TODO Token Validation
            setUserdata(userdata);
            setIsAuthorized(true);
        }
    },[])

    const APIFunctions = {
        SignIn,
        SignUp,
        SignOut,
        PostRequest,
        GetRequest,
        DeleteRequest
    };

    const value = {
        userdata,
        isAuthorized,//is signed in
        APIFunctions,
        profileImage
    }

    return  <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>

    async function saveLoginInfo(response:AuthResponseType)
    {
        setUserdata(response.data);
        setIsAuthorized(true);
        localStorage.setItem("userdata",JSON.stringify(response.data));
        navigator('/');
    }

    async function SignIn(email:string,password:string):Promise<boolean>
    {
        try
        {
            const response:AuthResponseType = await PostRequest("/user/signin",{email,password},false);
            
            if(response.status == 200)
            {
                saveLoginInfo(response.data);
                toast.success('Signed In Successfully', {
                    position: "bottom-right",
                });
                return true;
            }
        }
        catch(e)
        {
            return false;
        }
        return false;
    }
    async function SignUp(email:string,password:string,name:string,username:string):Promise<boolean>
    {
        try
        {
            const response:AuthResponseType = await PostRequest("/user/signup",{email,password,username,name},false);
            if(response.status == 201)
            {
                // alert("Account Created TODO Toast Here");
                toast.success('Account Created Successfully', {
                    position: "bottom-right",
                });
                saveLoginInfo(response.data);
                return true;
            }
        }
        catch(e)
        {
            return false;
        }
        return false;
    }
    async function SignOut()
    {
        setUserdata(null);
        setIsAuthorized(false);
        localStorage.removeItem("userdata");
        toast.success('Signed Out Successfully', {
            position: "bottom-right",
        });
        //TODO DeAuth
        navigator('/');
    }
    async function GetRequest(url:string,sendToken:boolean,params?:any)
    {
        let response:AuthResponseType;
        try
        {
            if(sendToken)
            {
                response = await axios.get(url,{headers:{authorization: `${userdata?.token}`},params:params})
            }
            else
            {
                response = await axios.get(url,{params:params});
            }
        }
        catch(e:any)
        {
            return HandleErrors(e);
        }
        return response;
    }
    async function PostRequest(url:string,body:any,needsToken:boolean,params?:any)
    {
        let response:AuthResponseType;

        try
        {
            if(needsToken && isAuthorized)
            {
                response = await axios.post(url,body,{headers:{authorization: `${userdata?.token}`},params:params});
            }
            else
            {
                response = await axios.post(url,body,{params:params});
            }   
        }
        catch(e:any)
        {
            return HandleErrors(e);
        }
        return response;
    }
    async function DeleteRequest(url:string,body:any,needsToken:boolean,params?:any)
    {
        let response:AuthResponseType;

        try
        {
            if(needsToken && isAuthorized)
            {
                response = await axios.delete(url,{headers:{authorization: `${userdata?.token}`},data:body})
            }
            else
            {
                response = await axios.post(url,body,{params:params});
            }   
        }
        catch(e:any)
        {
            return HandleErrors(e);
        }
        return response;
    }

    function HandleErrors(e:any):AuthResponseType
    {
        console.error(e.response);
        if(e.response.data.error)
        {
            toast.error(e.response.data.error, {
                position: "bottom-right",
            });
        }
        return e.response;
    }

}
