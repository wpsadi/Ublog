import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import { toast } from "react-toastify";

import Loader from "@/componnts/Loader/Loader";
import DashboardLayout from "@/layout/Dashboardlayout";
import { setIsJustLoggedOut } from "@/redux/slices/UserSlice";

function RequireSignin() {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  function ExecuteOnNoteLoggedIn() {
    if (user.isJustLoggedOut != true) {
      toast.error("Please Signin");
    }
    if (user.isJustLoggedOut == true) {
      dispatch(setIsJustLoggedOut());
    }
    return (
      <main className="grid min-h-full  place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className=" font-semibold text-transparent bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] bg-clip-text text-xl ">
            404
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/"
              className="rounded-md mainBgC px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </Link>
            {/* <a href="#" className="text-sm font-semibold text-gray-900">
          Contact support <span aria-hidden="true">&rarr;</span>
        </a> */}
          </div>
        </div>
      </main>
    );
  }

  return (
    <>
      <DashboardLayout>
        <header className="bg-white shadow">
          {user.isLoggedIn === null ? (
            <>
              <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <div className="flex justify-center">
                  <Loader loaderMessage={"Checking Account"} />
                </div>
              </div>
            </>
          ) : user.isLoggedIn !== null && user.isLoggedIn ? (
            <Outlet />
          ) : (ExecuteOnNoteLoggedIn())
          }
        </header>
      </DashboardLayout>
    </>
  );
}

export default RequireSignin;
