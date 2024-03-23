/* eslint-disable react/prop-types */
import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import useGetUserRole from "../../hooks/useGetUserRole";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const superAdmin = useGetUserRole();
  const admin = superAdmin === "Super_Admin";
  const admin0 = superAdmin === "Admin";
  const navigate = useNavigate();

  const isDarkTheme = true;

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#311A36] hover:text-[#311A36] hover:font-bold underline font-bold"
              : "font-bold hover:text-[#8A8B8C] hover:font-bold  text-[#8A8B8C]"
          }
        >
          HOME
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/aboutUs"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#311A36] hover:text-[#311A36] hover:font-bold underline font-bold"
              : "font-bold hover:text-[#8A8B8C] hover:font-bold  text-[#8A8B8C]"
          }
        >
          ABOUT US
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/ourWorks"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-[#311A36] hover:text-[#311A36] hover:font-bold underline font-bold"
              : "font-bold hover:text-[#8A8B8C] hover:font-bold  text-[#8A8B8C]"
          }
        >
          OUR WORKS
        </NavLink>
      </li>
      {admin || admin0 ? (
        <li>
          <NavLink
            to="/owner_dashboard/allDemos"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-[#311A36] hover:text-[#311A36] hover:font-bold underline font-bold"
                : "font-bold hover:text-[#8A8B8C] hover:font-bold  text-[#8A8B8C]"
            }
          >
            DASHBOARD
          </NavLink>
        </li>
      ) : (
        ""
      )}
    </>
  );
  const handleLogout = () => {
    logOut();
    navigate("/login");
  };

  return (
    <div
      className={`md:pl-5 navbar z-50  
        "bg-white opacity-95"
        w-full flex justify-center bg-gradient-to-b from-[#c2c1c9] to-[#f2f2f2]`}
    >
      <div className="md:hidden w-full md:w-1/4">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-outline border-none hover:bg-transparent lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-5 w-5 z-50 ${
                isDarkTheme ? "text-[#a6adbb]" : "text-[#8A8B8C]"
              }`}
              fill="none"
              viewBox="0 0 20 20"
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
            className="menu menu-sm absolute dropdown-content mt-3 z-[50] p-2 shadow bg-[#0B0633] bg-opacity-60 rounded-md w-52 text-[#fff]"
          >
            {navLinks}
          </ul>
        </div>
        <div className="flex items-center gap-2">
        </div>
      </div>
      <div className="">
        <div className=" hidden lg:flex justify-center items-center">
          <ul className="menu menu-horizontal text-black">{navLinks}</ul>
        </div>
        <div className="dropdown dropdown-end flex items-center ">
          {user ? (
            <>
              <div className="dropdown z-10 dropdown-bottom dropdown-end">
                <figure tabIndex={0}>
                  <img
                    src={user?.photoURL}
                    className="h-[35px] md:h-[40px] w-[40px] rounded-full"
                    alt={user?.name ? user?.name : "Not Found"}
                  />
                </figure>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[1] menu p-2 shadow rounded-box w-52 bg-[#0B0633] bg-opacity-60"
                >
                  <li>
                    <a className="text-[#fff]">
                      {user?.name ? user?.name : "No name available"}
                    </a>
                  </li>
                  <li>
                    <a>
                      <button
                        onClick={handleLogout}
                        className=" btn-sm border-none btn-outline rounded-md font-semibold uppercase hover:bg-transparent  text-[#fff]"
                      >
                        Logout
                      </button>
                    </a>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
