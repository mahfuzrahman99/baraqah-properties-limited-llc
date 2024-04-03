import { Link, NavLink, Outlet } from "react-router-dom";
import useGetUserRole from "../../hooks/useGetUserRole";
import { useState } from "react"; // Import useState hook

const OwnerDashboard = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State to manage drawer open/close

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen); // Toggle drawer state
  };

  const isSuperAdmin = useGetUserRole();
  console.log(isSuperAdmin);

  // Function to close drawer
  const closeDrawer = () => {
    setIsDrawerOpen(false);
  };

  return (
    <div>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" checked={isDrawerOpen} onChange={toggleDrawer} />
        <div className="drawer-content">
          {/* Page content here */}
          <div className="flex justify-between">
            <div className="w-64 min-h-screen hidden md:block bg-[#a9a3cf]">
              <ul className="menu p-4 fixed">
                <li>
                  <NavLink
                    to="/owner_Dashboard/allDemos"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#311A36] hover:text-[#190b1c] hover:font-bold font-bold "
                        : "font-bold hover:text-[#fafafa] hover:font-bold  text-[#fafafa]"
                    }
                  >
                    ALL DEMOS
                  </NavLink>
                </li>
                {isSuperAdmin === "Super_Admin" ? (
                  <li>
                    <NavLink
                      to="/owner_Dashboard/allUsers"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "text-[#311A36] hover:text-[#190b1c] hover:font-bold font-bold "
                          : "font-bold hover:text-[#fafafa] hover:font-bold  text-[#fafafa]"
                      }
                    >
                      ALL USERS
                    </NavLink>
                  </li>
                ) : (
                  ""
                )}
                <div className="divider"></div>
                <li>
                  <Link
                    to="/"
                    className="font-bold hover:text-[#fafafa] hover:font-bold  text-[#fafafa]"
                    onClick={closeDrawer} // Close drawer when link is clicked
                  >
                    HOME
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex-1 bg-[#F6F6F6] overflow-x-auto">
              <Outlet />
            </div>
          </div>
          <label
            htmlFor="my-drawer"
            className="btn md:hidden bg-[#a9a3cf] w-full drawer-button"
          >
            OPEN DRAWER
          </label>
        </div>
        <div className="drawer-side" onClick={closeDrawer}>
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="">
            {/* Sidebar content here */}
            <div className="w-50 min-h-screen md:hidden bg-[#a9a3cf]">
              <ul className="menu p-4">
                <li>
                  <NavLink
                    to="/owner_Dashboard/allDemos"
                    className={({ isActive, isPending }) =>
                      isPending
                        ? "pending"
                        : isActive
                        ? "text-[#311A36] hover:text-[#190b1c] hover:font-bold font-bold "
                        : "font-bold hover:text-[#fafafa] hover:font-bold  text-[#fafafa]"
                    }
                  >
                    ALL DEMOS
                  </NavLink>
                </li>
                {isSuperAdmin === "Super_Admin" ? (
                  <li>
                    <NavLink
                      to="/owner_Dashboard/allUsers"
                      className={({ isActive, isPending }) =>
                        isPending
                          ? "pending"
                          : isActive
                          ? "text-[#311A36] hover:text-[#190b1c] hover:font-bold font-bold "
                          : "font-bold hover:text-[#fafafa] hover:font-bold  text-[#fafafa]"
                      }
                    >
                      ALL USERS
                    </NavLink>
                  </li>
                ) : (
                  ""
                )}
                <div className="divider"></div>
                <li>
                  <Link
                    to="/"
                    className="font-bold hover:text-[#fafafa] hover:font-bold  text-[#fafafa]"
                    onClick={closeDrawer} // Close drawer when link is clicked
                  >
                    HOME
                  </Link>
                </li>
              </ul>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default OwnerDashboard;
