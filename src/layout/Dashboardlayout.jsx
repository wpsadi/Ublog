import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { LogOutUserDash } from "@/redux/slices/UserSlice";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

// eslint-disable-next-line react/prop-types
function DashboardLayout({ children }) {
  const userData = useSelector((state) => state.user);
  const navigation = useSelector((state)=>state.dash);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const userNavigation = [
    { name: "Your Profile", href: "/user" },
    { name: "Settings", href: "#" },
  ];
  return (
    <>
      <div className="h-full">
        <Disclosure
          as="nav"
          className="bg-gradient-to-l from-[#ff7e5f] to-[#534d48]"
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Link
                    to="/dashboard"
                    className="text-2xl font-bold text-transparent bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] bg-clip-text"
                  >
                    Ublog
                  </Link>
                </div>
                <div className="hidden md:block">
                  <div className="ml-10 flex items-baseline space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        aria-current={item.current ? "page" : undefined}
                        className={classNames(
                          item.current
                            ? "bg-gray-900 text-white"
                            : "text-gray-300 hover:bg-gray-700 hover:text-white",
                          "rounded-md px-3 py-2 text-sm font-medium"
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <button
                    type="button"
                    className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="absolute -inset-1.5" />
                    <span className="sr-only">View notifications</span>
                    <BellIcon aria-hidden="true" className="h-6 w-6" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <MenuButton className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="absolute -inset-1.5" />
                        <span className="sr-only">Open user menu</span>
                        {userData.isLoggedIn ? (
                          <img
                            alt=""
                            src={userData.avatar}
                            className="h-8 w-8 rounded-full"
                          />
                        ) : (
                          <div className="rounded-full bg-slate-700 h-8 w-8 animate-pulse"></div>
                        )}
                      </MenuButton>
                    </div>
                    <MenuItems
                      transition
                      className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
                    >
                      {userNavigation.map((item) => (
                        <MenuItem key={item.name}>
                          <Link
                            to={item.href}
                            className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                          >
                            {item.name}
                          </Link>
                        </MenuItem>
                      ))}
                      <MenuItem key={"signout"}>
                        <div
                          onClick={async () => {
                            await dispatch(LogOutUserDash());
                            await navigate("/");
                          }}
                          className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                        >
                          Sign Out
                        </div>
                      </MenuItem>
                    </MenuItems>
                  </Menu>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon
                    aria-hidden="true"
                    className="block h-6 w-6 group-data-[open]:hidden"
                  />
                  <XMarkIcon
                    aria-hidden="true"
                    className="hidden h-6 w-6 group-data-[open]:block"
                  />
                </DisclosureButton>
              </div>
            </div>
          </div>

          <DisclosurePanel className="md:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              {navigation.map((item) => (
                <DisclosureButton
                  key={item.name}
                  as="a"
                  onClick={()=>{
                    navigate(item.href)
                  
                  }}
                  aria-current={item.current ? "page" : undefined}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                >
                  {item.name}
                </DisclosureButton>
              ))}
            </div>
            <div className="border-t border-gray-700 pb-3 pt-4">
              <div className="flex items-center px-5">
                <div className="flex-shrink-0">
                {userData.isLoggedIn ? (
                          <img
                            alt=""
                            src={userData.avatar}
                            className="h-10 w-10 rounded-full"
                          />
                        ) : (
                          <div className="rounded-full bg-slate-700 h-10 w-10 animate-pulse"></div>
                        )}
                </div>
                <div className="ml-3">
                  <div className="text-base font-medium leading-none text-white">
                    {userData.name}
                  </div>
                  <div className="text-sm font-medium leading-none text-gray-400">
                    {userData.email}
                  </div>
                </div>
                <button
                  type="button"
                  className="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  <BellIcon aria-hidden="true" className="h-6 w-6" />
                </button>
              </div>
              <div className="mt-3 space-y-1 px-2">
                {userNavigation.map((item) => (
                  <DisclosureButton
                    key={item.name}
                    as="a"
                    onClick={()=>{
                      navigate(item.href)
                    }}
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                  >
                    {item.name}
                  </DisclosureButton>
                ))}

                <div
                  onClick={async () => {
                    await navigate("/");
                    await dispatch(LogOutUserDash());
                    
                  }}
                >
                  <DisclosureButton
                    as="a"
                    className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                  >
                    Sign Out
                  </DisclosureButton>
                </div>
              </div>
            </div>
          </DisclosurePanel>
        </Disclosure>

        <div>{children}</div>
      </div>
    </>
  );
}

export default DashboardLayout;
