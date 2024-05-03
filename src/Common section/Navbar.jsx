import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingBag } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = <>
  <NavLink to="/"><p className="mr-5">Home</p></NavLink>
  <NavLink to="/about"><p className="mr-5">About</p></NavLink>
  <NavLink to="/service"><p className="mr-5">Service</p></NavLink>
  <NavLink to="/blog"><p className="mr-5">Blog</p></NavLink>
  <NavLink to="/contact"><p className="">Contact</p></NavLink>
  </>
    return (
        <div className="navbar bg-base-100 px-10 mt-2 interFont font-semibold text-[18px]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-orange-200 rounded-box w-52">
              {links}
            </ul>
          </div>
          <img className="w-[80px]" src="/public/logo.svg" alt="Logo" />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
           {links}
          </ul>
        </div>
        <div className="navbar-end">
          <p className="mr-4">
            <MdOutlineShoppingBag></MdOutlineShoppingBag>
          </p>
          <p className="mr-4">
            <IoSearch></IoSearch>
          </p>
          <button className="appointment border rounded-md text-[#FF3811] p-1 text-[16px] hover:bg-orange-200">Appointment</button>
        </div>
      </div>
    );
};

export default Navbar;