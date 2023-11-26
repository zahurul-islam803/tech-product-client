import { AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const DropdownMenu = () => {
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative pr-4">
      {/* Dropdown btn */}
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition"
      >
        <AiOutlineMenu />
        <div className="hidden md:block">
          {/* Avatar */}
        {
          user &&   <img
            className="rounded-full"
            referrerPolicy="no-referrer"
            src={user.photoURL}
            alt="profile"
            height="30"
            width="30"
          />
        }
        </div>
      </div>

      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-[10vw] bg-[#4a7eb9] overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            {user ? (
              <>
                <button
                  disabled
                  className="px-4 py-3 hover:bg-[#55ade3] transition font-semibold"
                >
                  {user?.displayName}
                </button>
                <Link
                  to="/dashboard"
                  className="px-4 py-3 hover:bg-[#55ade3] transition font-semibold"
                >
                  Dashboard
                </Link>
                <div
                  onClick={logOut()}
                  className="px-4 py-3 hover:bg-[#55ade3] transition font-semibold cursor-pointer"
                >
                  LogOut
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="px-4 py-3 hover:bg-[#55ade3] transition font-semibold"
                >
                  Login
                </Link>
                <Link
                  to="/registration"
                  className="px-4 py-3 hover:bg-[#55ade3] transition font-semibold"
                >
                  Register
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
