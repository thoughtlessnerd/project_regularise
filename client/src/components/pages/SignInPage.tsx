import { Link } from "react-router-dom";
import Button from "../common/Button";
import Input from "../common/Input";
import { useState, FormEvent } from "react";
import { useAuth } from "../context/AuthContext";

export default function SignInPage() {
  const auth = useAuth();
  const [email, setEmail] = useState<InputState>({ value: "", hasError: false });
  const [password, setPassword] = useState<InputState>({ value: "", hasError: false });

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    let hasError = false;

    //Pattern matching
    if (!email.value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      setEmail((prev) => ({ ...prev, hasError: true }));
      hasError = true;
    }

    if (!password.value.match(/[\S\s]+[\S]+/)) {
      setPassword((prev) => ({ ...prev, hasError: true }));
      hasError = true;
    }

    if (hasError) return;

    auth?.APIFunctions.SignIn(email.value, password.value);
  }

  return (
    // <section className="min-h-screen mx-auto container flex flex-col justify-center items-center">
    <section className="min-h-screen flex">
      <div className="bg-primary grow pattern">

      </div>
      <div className="flex flex-col justify-center items-center gap-8 h-screen w-full md:w-128">
        <h1 className="text-2xl md:text-4xl font-bold">Sign in to your account</h1>
        <form onSubmit={handleSubmit} action=''  className="p-2 md:p-8 flex flex-col gap-4 w-full">
          <Input
            className="w-full"
            placeHolder="example@website.com"
            value={email.value}
            hasError={email.hasError}
            onChange={(e) => setEmail({ value: e.target.value, hasError: false })}
          >
            Email
          </Input>
          <Input
            className="w-full"
            placeHolder="Enter Your Password"
            type="password"
            value={password.value}
            hasError={password.hasError}
            onChange={(e) => setPassword({ value: e.target.value, hasError: false })}
          >
            Password
          </Input>
          <Button className="mt-8" color="primary">Sign in</Button>
          <h1 className="text-center text-text/70">Don't have an account? <Link className="text-accent" to='/signup'>Sign up</Link></h1>
        </form>
      </div>
    </section>
  )
}