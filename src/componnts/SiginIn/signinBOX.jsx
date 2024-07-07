import { FaGoogle } from "react-icons/fa";
import { useSelector } from "react-redux";

import { GoogleOauth } from "@/Appwrite/User/GoogleAuth.js";
function SignInBox() {
  const user = useSelector((state) => state.user);
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-transparent bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] bg-clip-text">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="max-w-sm mx-auto flex justify-center items-center">
            {user.isLoggedIn === null ? (
              <button className="text-white mainBgC bg-blue-700 hover:bg-blue-800   font-medium rounded-lg text-lg     w-full sm:w-auto px-5 py-2.5 text-center border-black  border-2 border-solid flex items-center gap-3 justify-center">
                Loading ...
              </button>
            ) : user.isLoggedIn ? (
              <button className="text-white mainBgC bg-blue-700 hover:bg-blue-800   font-medium rounded-lg text-lg     w-full sm:w-auto px-5 py-2.5 text-center border-black  border-2 border-solid flex items-center gap-3 justify-center">
                Already Signed In
              </button>
            ) : (
              <button
                onClick={() => {
                  GoogleOauth();
                }}
                className="text-white mainBgC bg-blue-700 hover:bg-blue-800   font-medium rounded-lg text-lg     w-full sm:w-auto px-5 py-2.5 text-center border-black  border-2 border-solid flex items-center gap-3 justify-center"
              >
                Continue with Google{" "}
                <FaGoogle className="inline scale-[1.5]  sm:scale-[1]" />
              </button>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default SignInBox;
