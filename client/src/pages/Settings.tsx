import { Link } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import { useAuth } from "../components/context/AuthContext";
import Input from "../components/common/Input";
import { ChangeEventHandler, FormEventHandler, useEffect, useState } from "react";
import Button from "../components/common/Button";
import FileInput from "../components/common/FileInput";
import { toast } from "react-toastify";
export default function Settings() {
  const auth = useAuth();
  const [base64Image, setBase64Image] = useState<string | null>(null);
  const [inputState, setInputState] = useState({
    username: '',
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    previousPassword: '',
  });
  const [errorState, setErrorState] = useState({
    username: false,
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
    previousPassword: false,
  });

  useEffect(() => {
    if (!auth?.userdata) return;
    setInputState({
      name: auth.userdata.name,
      username: auth.userdata.username,
      email: auth.userdata.email,
      password: '',
      confirmPassword: '',
      previousPassword: '',
    })
  }, [auth?.userdata])

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    const { name, value } = event.target;
    setErrorState(prev=>({
      ...prev,
      [name]:false
    }))
    setInputState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
  };

  const handleFileLoad = (file: File) => {
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const base64Data = reader.result as string;
        setBase64Image(base64Data);
      };
    }
  };

  const handleSubmitImage: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    let response = await auth?.APIFunctions.PostRequest('/image', { image: base64Image }, true);
    if (response.status == 200) {
      toast.success(response.data.message, {
        position: "bottom-right",
      });
    }
    else if (response.status == 400) {
      toast.error(response.data.message, {
        position: "bottom-right",
      });
    }
    else if (response.status == 413) {
      toast.error("Image size too large", {
        position: "bottom-right",
      });
    }
  };

  const handleUserdataUpdate: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    toast.dismiss()
    let hasError = false;

    //Pattern matching
    if (!inputState.email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      setErrorState((prev) => ({ ...prev, "email": true }));
      toast.error("Please enter a valid email address", {
        position: "bottom-right",
      });
      hasError = true;
    }

    if (!inputState.name.match(/[\S\s]+[\S]+/)) {
      setErrorState((prev) => ({ ...prev, "name": true }));
      toast.error("Please enter a valid name", {
        position: "bottom-right",
      });
      hasError = true;
    }
    if (!inputState.username.match(/[\S\s]+[\S]+/)) {
      setErrorState((prev) => ({ ...prev, "username": true }));
      toast.error("Please enter a valid username", {
        position: "bottom-right",
      });
      hasError = true;
    }

    if (hasError) return;

    let response = await auth?.APIFunctions.PatchRequest('/user',{
      name: inputState.name,
      email: inputState.email,
      username: inputState.username,
    },true);
    if(response.status == 200)
    {
      toast.success(response.data.message, {
        position: "bottom-right",
      });
      auth?.APIFunctions.RefetchUserdata();
    }
  }
  const handlePasswordUpdate: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    toast.dismiss()
    let hasError = false;

    //Pattern matching
    if (!inputState.password.match(/[\S\s]+[\S]+/)) {
      setErrorState((prev) => ({ ...prev, "password": true }));
      toast.error("Please enter a valid password", {
        position: "bottom-right",
      });
      hasError = true;
    }
    if (!inputState.previousPassword.match(/[\S\s]+[\S]+/)) {
      setErrorState((prev) => ({ ...prev, "previousPassword": true }));
      toast.error("Please enter a valid password", {
        position: "bottom-right",
      });
      hasError = true;
    }
    if (!inputState.confirmPassword.match(/[\S\s]+[\S]+/)) {
      setErrorState((prev) => ({ ...prev, "confirmPassword": true }));
      toast.error("Please enter a valid password", {
        position: "bottom-right",
      });
      hasError = true;
    }
    if (inputState.confirmPassword != inputState.password) {
      setErrorState((prev) => ({ ...prev, "password": true }));
      setErrorState((prev) => ({ ...prev, "confirmPassword": true }));
      toast.error("The Passwords do no match", {
        position: "bottom-right",
      });
      hasError = true;
    }

    if (hasError) return;

    let response = await auth?.APIFunctions.PatchRequest('/user/password',{
        oldPassword: inputState.previousPassword,
        newPassword: inputState.password,
    },true);
    if(response.status == 200)
    {
      toast.success(response.data.message, {
        position: "bottom-right",
      });
    }
  }

  return (
    <>
      <section className="container mx-auto px-2 md:px-8">
        <Navbar className="" />
        <Link to={"/"} className="text-3xl font-bold flex items-center gap-4 cursor-pointer hover:text-primary transition-all active:scale-90 origin-left">
          <svg className="scale-125" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth="2" />
          </svg>
          <span>
            Back to Dashboard
          </span>
        </Link>
        <div className="flex gap-4 mt-8 flex-wrap">
          <form onSubmit={handleSubmitImage} className="flex gap-4 flex-col w-full grow lg:w-96 justify-between p-4 card">
            <FileInput onChange={handleFileLoad} />
            {base64Image && <img src={base64Image} alt="" className="aspect-square w-full object-cover" />}
            <Button className="mt-4" color={"primary"}>Save Changes</Button>
          </form>
          <form onSubmit={handleUserdataUpdate} className="flex gap-4 flex-col w-full grow lg:w-96 justify-between p-4 card">
            <div className="flex flex-col gap-4">
              <Input name="username" onChange={handleInputChange} className="w-full grow" hasError={errorState.username} value={inputState.username} type="text">Username</Input>
              <Input name="name" onChange={handleInputChange} className="w-full grow" hasError={errorState.name} value={inputState.name} type="text">Name</Input>
              <Input name="email" onChange={handleInputChange} className="w-full grow" hasError={errorState.email} value={inputState.email} type="text">Email</Input>
            </div>
            <Button className="mt-4" color={"primary"}>Save Changes</Button>
          </form>
          <form onSubmit={handlePasswordUpdate} className="flex gap-4 flex-col w-full grow lg:w-96 justify-between p-4 card">
            <div className="flex flex-col gap-4">
              <Input name="previousPassword" onChange={handleInputChange} className="w-full grow" hasError={errorState.previousPassword} value={inputState.previousPassword} type="password">Previous Password</Input>
              <Input name="password" onChange={handleInputChange} className="w-full grow" hasError={errorState.password} value={inputState.password} type="password">Password</Input>
              <Input name="confirmPassword" onChange={handleInputChange} className="w-full grow" hasError={errorState.confirmPassword} value={inputState.confirmPassword} type="password">Confirm Password</Input>
            </div>
            <Button className="mt-4" color={"primary"}>Save Changes</Button>
          </form>
        </div>
      </section>
    </>
  );
}
