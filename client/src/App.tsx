import { Route, Routes } from "react-router"
import LandingPage from "./components/pages/LandingPage"
import SignInPage from "./components/pages/SignInPage"
import SignUpPage from "./components/pages/SignUpPage"
import { useAuth } from "./components/context/AuthContext"
import Dashboard from "./components/pages/Dashboard"

function App() {
  const auth = useAuth();
  return(
    <>
      {
        (!auth?.isAuthorized)?(
          <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/signin" element={<SignInPage/>} />
            <Route path="/signup" element={<SignUpPage/>} />
            <Route path="/*" element={<h1>404</h1>} />
          </Routes>
        ):(
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/landing" element={<LandingPage/>} />
            <Route path="/*" element={<h1>404</h1>} />
          </Routes>
        )
      }
    </>
  )
}

export default App
