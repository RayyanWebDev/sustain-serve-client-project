import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("Logged Out ");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const NavLists = (
    <>
      <div className="lg:flex gap-2 ">
        <ul>
          <li>
            <NavLink to="/">HOME</NavLink>
          </li>
        </ul>

        <ul>
          <li>
            <NavLink to="/available">Available Foods</NavLink>
          </li>
        </ul>

        <ul>
          <li>
            <NavLink to="/addFood">Add Food</NavLink>
          </li>
        </ul>
        <ul>
          <li>
            <NavLink to="/ManageMyFoods">Manage My Foods</NavLink>
          </li>
        </ul>
        <ul className="mr-40">
          <li>
            <NavLink to="/MyFoodRequest">My Food Request</NavLink>
          </li>
        </ul>

        <ul>
          <li className="">
            <NavLink to="/SignUp">SIGN UP</NavLink>
          </li>
        </ul>
      </div>
    </>
  );
  return (
    <>
      <div>
        <div className="navbar bg-base-100 mt-4 mb-6">
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
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>{NavLists}</li>
              </ul>
            </div>

            <img
              className="w-20"
              src="https://i.ibb.co/VQLh61Y/download-image-1699230679889.png"
              alt=""
            />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>{NavLists}</li>
            </ul>
          </div>
          <div>
            {user ? (
              <>
                <span>{user.displayName}</span>
                <img className="rounded" src={user.photoURL} alt="" />
                <button className="sign-out-button" onClick={handleLogOut}>
                  Sign Out
                </button>
              </>
            ) : (
              <Link to="/SignIn">
                <button className="w-24"></button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
