import { useState } from "react";
import logo from '/footer-logo.png'
import { GrLogout } from "react-icons/gr";
import { AiOutlineBars } from "react-icons/ai";
import GuestMenu from "../Menu/GuestMenu";
import ModeratorMenu from "../Menu/ModeratorMenu";
import AdminMenu from "../Menu/AdminMenu";
import useRole from "../../Hooks/useRole";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";
const Sidebar = () => {
  const { logOut } = useAuth();
  const [isActive, setActive] = useState(false);
  const [role] = useRole();

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      {/* Small Screen Navbar */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <Link to={"/"}>
              <img src={logo} className="max-w-[150px]" alt="logo" />
            </Link>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>
      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-68 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
            <div className="w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-rose-100 mx-auto">
              <Link to={"/"}>
                <img src={logo} className="max-w-[150px]" alt="logo" />
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
              {/* guest Menu Items */}
              {role === "guest" && <GuestMenu></GuestMenu>}

              {/* moderator Menu Items */}
              {role === "moderator" && <ModeratorMenu></ModeratorMenu>}
              {/* admin Menu Items */}
              {role === "admin" && <AdminMenu></AdminMenu>}
            </nav>
          </div>
        </div>
        <div>
          <hr />
          <button
            onClick={logOut}
            className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" />

            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
