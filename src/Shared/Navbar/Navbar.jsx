import { Link } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
import useAuth from "../../Hooks/useAuth";

const Navbar = () => {
  const {user} = useAuth();
 const navOptions = (
   <>
     <li>
       <Link to={"/"}>Home</Link>
     </li>
     <li>
       <Link to={"/products"}>Products</Link>
     </li>
     {!user && (
       <li>
         <Link to={"/registration"}>Registration</Link>
       </li>
     )}
   </>
 );
 return (
   <>
     <div className="navbar fixed z-10 bg-opacity-10 bg-blue-800 text-white">
       <div className="navbar-start">
         <div className="dropdown">
           <label tabIndex={0} className="btn btn-ghost lg:hidden">
             <svg
               xmlns="http://www.w3.org/2000/svg"
               className="h-5 w-5"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
             >
               <path
                 strokeLinecap="round"
                 strokeLinejoin="round"
                 strokeWidth="2"
                 d="M4 6h16M4 12h8m-8 6h16"
               />
             </svg>
           </label>
           <ul
             tabIndex={0}
             className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52"
           >
             {navOptions}
           </ul>
         </div>
         <Link to={"/"}>
           <button className="btn btn-ghost normal-case text-xl">
             Tech Haven
           </button>
         </Link>
       </div>
       <div className="navbar-center hidden lg:flex">
         <ul className="menu menu-horizontal px-1">{navOptions}</ul>
       </div>
       <div className="navbar-end">
         <DropdownMenu></DropdownMenu>
        </div>
     </div>
   </>
 );
};

export default Navbar;