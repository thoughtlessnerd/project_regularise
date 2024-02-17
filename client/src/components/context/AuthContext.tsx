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
    isOffline:boolean,
    APIFunctions:
    {
        SignIn:(email:string,password:string)=>Promise<boolean>,
        SignUp:(email:string,password:string,name:string,username:string)=>Promise<boolean>,
        ReSignin:()=>Promise<boolean>,
        SignOut:()=>void,
        PostRequest:(url:string,body:any,needsToken:boolean)=>Promise<any>,
        DeleteRequest:(url:string,body:any,needsToken:boolean)=>Promise<any>,
        GetRequest:(url:string,needsToken:boolean)=>Promise<any>,
        PatchRequest:(url:string,body:any,needsToken:boolean)=>Promise<any>,
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
    const [userdata,setUserdata] = useState<UserdataType>({name:"",token:"",username:"",email:""});
    const [isOffline,setIsOffline] = useState(false);

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
        DeleteRequest,
        PatchRequest,
        ReSignin
    };

    const value = {
        userdata,
        isAuthorized,//is signed in
        isOffline,//is offline in
        APIFunctions,
    }

    return  <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>

    async function saveLoginInfo(response:AuthResponseType)
    {
        setUserdata(prev=>({...prev,...response.data}));
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
    async function ReSignin():Promise<boolean>
    {
        try
        {
            const response:AuthResponseType = await GetRequest('/user',true);
            if(response.status == 200)
            {
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
    async function GetRequest(url:string,sendToken:boolean)
    {
        let response:AuthResponseType = {status:0,data:null};
        if(isOffline)
        {
            toast.dismiss();
            toast.error("You are offline", {
                position: "bottom-right",
            });
            return response;
        }
        try
        {
            if(sendToken)
            {
                response = await axios.get(url,{headers:{authorization: `${userdata?.token}`}})
            }
            else
            {
                response = await axios.get(url);
            }
        }
        catch(e:any)
        {
            return HandleErrors(e);
        }
        return response;
    }
    async function PostRequest(url:string,body:any,needsToken:boolean)
    {
        let response:AuthResponseType = {status:0,data:null};
        if(isOffline)
        {
            toast.dismiss();
            toast.error("You are offline", {
                position: "bottom-right",
            });
            return response;
        }

        try
        {
            if(needsToken && isAuthorized)
            {
                response = await axios.post(url,body,{headers:{authorization: `${userdata?.token}`}},);
            }
            else
            {
                response = await axios.post(url,body);
            }   
        }
        catch(e:any)
        {
            return HandleErrors(e);
        }
        return response;
    }
    async function DeleteRequest(url:string,body:any,needsToken:boolean)
    {
        let response:AuthResponseType = {status:0,data:null};
        if(isOffline)
        {
            toast.dismiss();
            toast.error("You are offline", {
                position: "bottom-right",
            });
            return response;
        }

        try
        {
            if(needsToken && isAuthorized)
            {
                response = await axios.delete(url,{headers:{authorization: `${userdata?.token}`},data:body})
            }
            else
            {
                response = await axios.delete(url,{data:body});
            }   
        }
        catch(e:any)
        {
            return HandleErrors(e);
        }
        return response;
    }
    async function PatchRequest(url:string,body:any,needsToken:boolean)
    {
        let response:AuthResponseType = {status:0,data:null};
        if(isOffline)
        {
            toast.dismiss();
            toast.error("You are offline", {
                position: "bottom-right",
            });
            return response;
        }

        try
        {
            if(needsToken && isAuthorized)
            {
                response = await axios.patch(url,body,{headers:{authorization: `${userdata?.token}`}},);
            }
            else
            {
                response = await axios.patch(url,body);
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
        console.log(e);
        if(e?.code == "ERR_NETWORK" && !isOffline)
        {
            toast.dismiss();
            toast.error("Server Error", {
                position: "bottom-right",
            });
            setIsOffline(true);
        }
        if(e?.response?.status == 401)
        {
            toast.dismiss();
            if(!userdata?.token)return e.response;
            toast.error("You have been signed out", {
                position: "bottom-right",
            });
            SignOut();
        }
        if(e?.response?.data?.error)
        {
            toast.error(e.response.data.error, {
                position: "bottom-right",
            });
        }
        return {status:e?.response?.status,data:null};
    }

}
