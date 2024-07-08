import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

import { setActiveDashNavItem } from "@/redux/slices/DashNav";
import { UpdateUserName } from "@/redux/slices/UserSlice";

function UserProfilePage() {
    const user = useSelector(state=>state.user)
    const [UserName,setUserName] = useState(user.name)
    console.log(user)
    const navigate = useNavigate()
    const [active,setActive] = useState(false)
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      setActiveDashNavItem({
        name: "",
      })
    );
  }, [dispatch]);
  return (
    <>
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            User Profile
          </h1>
        </div>
      </header>
      <main>
        <section className="bg-white  antialiased dark:bg-gray-900 pb-3">
          <div className="mx-auto max-w-screen-xl px-4 2xl:px-16">
            <div className=" sm:mt-8 lg:flex lg:items-start lg:gap-12 xl:gap-16">
              <div className="min-w-0 flex-1 space-y-8">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Account No: <div className="font-mono italic inline ">&quot;{user.$id}&quot;</div>
                  </h2>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 pb-8    ">
                    <div>
                      <label
                        htmlFor="your_name"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        {" "}
                        Your name{" "}
                      </label>
                      <input
                        type="text"
                        id="your_name"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                        placeholder="Bonnie Green"
                        required
                        onInputCapture={(evt)=>{
                          setUserName(evt.target.value)
                        }}
                        defaultValue={user.name}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="your_email"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        {" "}
                        Your email{" "}
                      </label>
                      <input
                        type="email"
                        disabled
                        id="your_email"
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                        placeholder="name@flowbite.com"
                        required
                        defaultValue={`${user.email} ${(()=>{
                            if(user.emailVerification){
                                return "(Verified)"
                            }else{
                                return "(Not Verified)"
                            }
                        })()}`}
                      />
                    </div>

                  

                 

                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        onClick={async ()=>{
                          if (active==true){
                            toast.error("Previous request in queue")
                            return
                          
                          }
                            setActive(true)
                            await dispatch(UpdateUserName(UserName))
                            setActive(false)
                        }}
                        className="flex mainBgC w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                      >
                        Save 
                      </button>
                    </div>
                  </div>
                </div>

               
              </div>

              <div className="min-w-0 flex-1 space-y-8">
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                    Subscription Status 
                  </h2>

                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
       

                    <div>
                      <label
                        htmlFor="your_email"
                        className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                      >
                        {" "}
                        Plan Type{" "}
                      </label>
                      <input
                        type="text"
                        disabled
                        className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                        
                        required
                        defaultValue="Basic"
                      />
                    </div>

                  

                 

                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        onClick={()=>{
                            navigate("/service")
                        }}
                        className="flex mainBgC w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                      >
                        Upgrade
                      </button>
                    </div>
                  </div>
                </div>

               
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
export default UserProfilePage;
