import { Link } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import { useAuth } from "../components/context/AuthContext";
export default function UserSettings() {
  const auth = useAuth();
  const gap = "gap-4";
  return (
    <>
      <section className="container mx-auto px-2 md:px-8">
        <Navbar className="" />
        <Link to={"/"} className="text-4xl font-bold flex items-center gap-4 cursor-pointer hover:text-primary transition-all active:scale-90 origin-left">
          <svg className="scale-125" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M15 6L9 12L15 18" stroke="currentColor" stroke-width="2"/>
          </svg>
          <span>
            User Settings
          </span>
        </Link>
      </section>
    </>
  );
}
