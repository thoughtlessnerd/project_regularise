import { Route, Routes } from "react-router"
import LandingPage from "./pages/LandingPage"
import SignInPage from "./pages/SignInPage"
import SignUpPage from "./pages/SignUpPage"
import { useAuth } from "./components/context/AuthContext"
import Dashboard from "./pages/Dashboard"
import { ModalProvier } from "./components/context/ModalContext"
import UserSettings from "./pages/UserSettings"

function App() {
  const auth = useAuth();
  return(
    <>
      <ModalProvier>
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
              <Route path="/settings" element={<UserSettings/>} />
              <Route path="/*" element={<h1>404</h1>} />
            </Routes>
          )
        }
      </ModalProvier>
    </>
  )
}

export default App
