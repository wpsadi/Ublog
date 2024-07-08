import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setActiveDashNavItem } from "@/redux/slices/DashNav";


function DashboardPage(){
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(setActiveDashNavItem({
            name:"Dashboard"
        }))
    },[dispatch])
    return (<>

    <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">
              Dashboard
            </h1>
          </div>
        </header>
        <main>

        </main>
    </>)
}
export default DashboardPage;