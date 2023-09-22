import { NavLink } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
    const links = <>
         <li><NavLink to='/'>Statistics</NavLink></li>
         <li><NavLink to='/appliedJobs'>Applied Jobs</NavLink></li>
         <li><NavLink to='blog'>Blog</NavLink></li>
      
      </>
  return (
    <section className="container">
         <div className="navbar py-6 bg-base-100 text-xl font-bold">
    <div className="navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          {links}
        </ul>
      </div>
      <li className="cursor-pointer normal-case text-3xl list-none"><NavLink to='/'>CareerHub</NavLink></li>
    </div>
    <div className="navbar-center hidden lg:flex ">
      <ul className="menu menu-horizontal px-1 ">
       {links}
      </ul>
    </div>
    <div className="navbar-end text-xl ">
      <button className="btn capitalize btn-bg">Star Applying</button>
    </div>
  </div>
    </section>
  );
};

export default Navbar;
