import { Route, Routes } from "react-router";
import LandingPage from "./pages/LandingPage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import { useAuth } from "./components/context/AuthContext";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useModal } from "./components/context/ModalContext";
import { registerSW } from "virtual:pwa-register";

function App() {
  const auth = useAuth();

  const modal = useModal();

  const updateSW = registerSW({
    onNeedRefresh() {
      modal
        ?.CreateModal(
          "New content available",
          "Please refresh to get the latest content",
          "Refresh",
          "Cancel"
        )
        .then((res) => {
          if (res) {
            updateSW(true);
          }
        });
    },
  });

  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />

      {!auth?.isAuthorized ? (
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/*" element={<h1>404</h1>} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/*" element={<h1>404</h1>} />
        </Routes>
      )}
    </>
  );
}

export default App;
