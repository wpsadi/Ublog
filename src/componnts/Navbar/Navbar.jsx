import "./navbar.css";

import { SiReaddotcv } from "react-icons/si";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CustomNavbar() {
  // const dispatch = useDispatch()
  const navData = useSelector((state) => state.nav);
  const user = useSelector((state) => state.user);
  return (
    <>
      {/* <!-- Navbar --> */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <div className="flex justify-center">
                  <div className="ball-motionless mainBgC bg-blue-600 flex items-center justify-center text-white text-2xl">
                    <SiReaddotcv />
                  </div>
                </div>
                <Link
                  to="/"
                  href="#"
                  className="text-2xl font-bold text-transparent bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] bg-clip-text"
                >
                  Ublog
                </Link>
              </div>
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                {navData.map((item) =>
                  item.active ? (
                    <Link
                      to={item.link}
                      key={item.id}
                      className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2    text-sm font-medium border-[#ff7e5f]"
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <Link
                      to={item.link}
                      key={item.id}
                      className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium"
                    >
                      {item.name}
                    </Link>
                  )
                )}
              </div>
            </div>
            <div className="hidden sm:ml-6 sm:flex sm:items-center gap-2">
              {user.isLoggedIn ? (
                <Link to="/dashboard" className="mainBgC text-white px-4 py-2 rounded-md ">
                  Dashboard
                </Link>
              ) : (
                <Link
                  to="/signin"
                  className="mainBgC text-white px-4 py-2 rounded-md "
                >
                  Sign In
                </Link>
              )}
            </div>

            <div className="-mr-2 flex items-center sm:hidden">
              <button
                id="menu-btn"
                onClick={() => {
                  const menu = document.getElementById("mobile-menu");
                  menu.classList.toggle("max-h-0");
                  menu.classList.toggle("max-h-screen");
                }}
                className="inline-flex items-center justify-center p-2 rounded-md twxt-white      hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-00 focus:text-gray-500 mainBgC"
              >
                <svg
                  className="h-6 w-6"
                  stroke="currentColor"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* <!-- Mobile menu --> */}
        <div
          id="mobile-menu"
          className="sm:hidden transition-max-height max-h-0 overflow-hidden"
        >
          <div className="pt-2 pb-3 space-y-1">
            {navData.map((item) =>
              item.active ? (
                <Link
                  to={item.link}
                  key={item.id}
                  className="bg-blue-50 border-[#ff7e5f] text-[#ff7e5f] block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  {item.name}
                </Link>
              ) : (
                <Link
                  to={item.link}
                  key={item.id}
                  className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium"
                >
                  {item.name}
                </Link>
              )
            )}
          </div>
          <div className="pt-4 pb-3 border-t border-gray-200">
            <div className="px-4 flex flex-col gap-2">
              <Link
                to="/signin"
                className="w-full  text-white px-4 py-2 rounded-md mainBgC "
              >
                Sign In
              </Link>
              <Link to="/dashboard"  className="mainBgC text-white px-4 py-2 rounded-md mainBgC ">
                Dashboard
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default CustomNavbar;
