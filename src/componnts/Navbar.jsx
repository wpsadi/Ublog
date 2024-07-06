import "./navbar.css"

import { SiReaddotcv } from "react-icons/si";

function CustomNavbar(){



    return(<>
       {/* <!-- Navbar --> */}
    <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
                <div className="flex">
                    <div className="flex-shrink-0 flex items-center">
                    <div className="flex justify-center"><div className="ball-motionless mainBgC bg-blue-600 flex items-center justify-center text-white text-2xl"><SiReaddotcv /></div></div>
                        <a href="#" className="text-2xl font-bold text-transparent bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] bg-clip-text">Ublog</a>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                        <a href="#" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2    text-sm font-medium border-[#ff7e5f]">
                            Home
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium">
                            About
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium">
                            Services
                        </a>
                        <a href="#" className="text-gray-500 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium">
                            Contact
                        </a>
                    </div>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:items-center gap-2">
                    <button className="mainBgC text-white px-4 py-2 rounded-md ">
                        Sign In
                    </button>
                    <button className="mainBgC text-white px-4 py-2 rounded-md ">
                        Dashboard
                    </button>
                </div>
                
                <div className="-mr-2 flex items-center sm:hidden">
                    <button id="menu-btn"  onClick={() => {
        const menu = document.getElementById('mobile-menu');
        menu.classList.toggle('max-h-0');
        menu.classList.toggle('max-h-screen');
    }} className="inline-flex items-center justify-center p-2 rounded-md twxt-white      hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-00 focus:text-gray-500 mainBgC">
                        <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        {/* <!-- Mobile menu --> */}
        <div id="mobile-menu" className="sm:hidden transition-max-height max-h-0 overflow-hidden">
            <div className="pt-2 pb-3 space-y-1">
                <a href="#" className="bg-blue-50 border-[#ff7e5f] text-[#ff7e5f] block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                    Home
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                    About
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                    Services
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">
                    Contact
                </a>
            </div>
            <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="px-4 flex flex-col gap-2">
                    <button className="w-full  text-white px-4 py-2 rounded-md mainBgC ">
                        Sign In
                    </button>
                    <button className="mainBgC text-white px-4 py-2 rounded-md mainBgC ">
                        Dashboard
                    </button>
                </div>
            </div>
        </div>
    </nav>

    </>)
}

export default CustomNavbar