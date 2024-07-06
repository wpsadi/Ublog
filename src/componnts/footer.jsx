import "./footer.css"

import { IoIosCloseCircle } from "react-icons/io";
function Footer(){
    return (<>
        {/* <!-- Footer --> */}
    <div className="footer show mainBgC">
        <div className="footer-content px-4 sm:px-6 lg:px-8 flex flex-col items-center gap-2">
        <div className="cross-button absolute top-2 text-3xl right-4" onClick={()=>{
            document.querySelector('.footer').classList.toggle('show');
        }}>
    <IoIosCloseCircle />
                        </div>
            <h2 className="leading-3">Get in Touch</h2>
            <p className="leading-4">Feel free to contact us for any inquiries or collaborations.</p>
            <a href="#" className="hover:bg-white hover:text-white">Contact Us</a>
        </div>
    </div></>)
}

export default Footer