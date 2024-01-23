import { Link } from "react-router-dom";
import Button from "../components/common/Button";
import Input from "../components/common/Input";
import { useState, FormEvent } from "react";
import { useAuth } from "../components/context/AuthContext";

export default function SignUpPage() {
  const auth = useAuth();
  const [name, setName] = useState<InputState>({ value: "", hasError: false });
  const [email, setEmail] = useState<InputState>({ value: "", hasError: false });
  const [password, setPassword] = useState<InputState>({ value: "", hasError: false });
  const [confirmPassword, setConfirmPassword] = useState<InputState>({ value: "", hasError: false });
  const [username, setUsername] = useState<InputState>({ value: "", hasError: false });

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    let hasError = false;

    //Pattern matching
    if (!email.value.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
      setEmail((prev) => ({ ...prev, hasError: true }));
      hasError = true;
    }

    if (!name.value.match(/[\S\s]+[\S]+/)) {
      setName((prev) => ({ ...prev, hasError: true }));
      hasError = true;
    }
    if (!password.value.match(/[\S\s]+[\S]+/)) {
      setPassword((prev) => ({ ...prev, hasError: true }));
      hasError = true;
    }
    if (!confirmPassword.value.match(/[\S\s]+[\S]+/)) {
      setConfirmPassword((prev) => ({ ...prev, hasError: true }));
      hasError = true;
    }
    if (!username.value.match(/[\S\s]+[\S]+/)) {
      setUsername((prev) => ({ ...prev, hasError: true }));
      hasError = true;
    }

    if (confirmPassword.value != password.value) {
      setPassword((prev) => ({ ...prev, hasError: true }));
      setConfirmPassword((prev) => ({ ...prev, hasError: true }));
      hasError = true;
    }

    if (hasError) return;

    auth?.APIFunctions.SignUp(email.value, password.value, name.value, username.value);
  }

  return (
    // <section className="min-h-screen mx-auto container flex flex-col justify-center items-center">
    <section className="min-h-screen flex">
      <div className="bg-primary grow pattern">

      </div>
      <div className="flex flex-col justify-center items-center gap-8 h-screen w-full md:w-128">
        <h1 className="text-2xl md:text-4xl font-bold">Create an account</h1>
        <form onSubmit={handleSubmit} action=''  className="p-2 md:p-8 flex flex-col gap-4 w-full">
          <div className="flex flex-wrap gap-4">
            <Input
              className="w-48 grow"
              placeHolder="Enter Your Username"
              value={username.value}
              hasError={username.hasError}
              onChange={(e) => setUsername({ value: e.target.value, hasError: false })}
            >Username</Input>
            <Input
              className="w-48 grow"
              placeHolder="Enter Your Name"
              value={name.value}
              hasError={name.hasError}
              onChange={(e) => setName({ value: e.target.value, hasError: false })}
            >
              Display Name
            </Input>
          </div>
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
          <Input
            className="w-full"
            placeHolder="Enter Your Password"
            type="password"
            value={confirmPassword.value}
            hasError={confirmPassword.hasError}
            onChange={(e) => setConfirmPassword({ value: e.target.value, hasError: false })}
          >
            Confirm Password
          </Input>
          <Button className="mt-8" color="primary">Create Account</Button>
          <h1 className="text-center text-text/70">Already have an account? <Link className="text-accent" to='/signin'>Sign in</Link></h1>
        </form>
      </div>
    </section>
  )
}