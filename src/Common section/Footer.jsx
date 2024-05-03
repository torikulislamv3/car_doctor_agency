import { AiOutlineGoogle } from "react-icons/ai";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { IoLogoLinkedin } from "react-icons/io5";

const Footer = () => {
    return (
        <div className="interFont mx-10">
         <footer className="footer p-10 bg-[#151515] text-base-content">
  <aside>
    <img className="w-[70px]" src="/public/logo.svg" alt="logo" />

    <p className="text-[#FFFFFF] text-[12px]">
    Edwin Diaz is a software and web <br />
     technologies engineer, a life coach <br />
      trainer who is also a serial .
    </p>
    <div>
      <button className="rounded-full mr-2 p-2 bg-[#737373]">
        <AiOutlineGoogle className="text-[#FFFFFF]"></AiOutlineGoogle>
        </button>
      <button className="rounded-full mr-2 p-2 bg-[#737373]">
        <FiTwitter className="text-[#FFFFFF]"></FiTwitter>
        </button>
      <button className="rounded-full mr-2 p-2 bg-[#737373]">
        <FaInstagram className="text-[#FFFFFF]"></FaInstagram>
        </button>
      <button className="rounded-full p-2 bg-[#737373]">
        <IoLogoLinkedin className="text-[#FFFFFF]"></IoLogoLinkedin>
        </button>
    </div>
    
  </aside> 
  <nav>
    <h6 className="footer-title font-semibold text-[18px] text-[#FFFFFF]">About</h6> 
    <a className="link link-hover text-[#FFFFFF] text-[14px] mb-3">Home</a>
    <a className="link link-hover text-[#FFFFFF] text-[14px] mb-3">Service</a>
    <a className="link link-hover text-[#FFFFFF] text-[14px]">Contact</a>
    
  </nav> 
  <nav>
    <h6 className="footer-title font-semibold text-[18px] text-[#FFFFFF]">Company</h6> 
    <a className="link link-hover text-[#FFFFFF] text-[14px] mb-3">Why Car Doctor</a>
    <a className="link link-hover text-[#FFFFFF] text-[14px] mb-3">About</a>
    
  </nav> 
  <nav>
    <h6 className="footer-title font-semibold text-[18px] text-[#FFFFFF]">Support</h6> 
    <a className="link link-hover text-[#FFFFFF] text-[14px] mb-3">Support Center</a>
    <a className="link link-hover text-[#FFFFFF] text-[14px] mb-3">Feedback</a>
    <a className="link link-hover text-[#FFFFFF] text-[14px] mb-3">Accesbility</a>
  </nav>
</footer>
        </div>
    );
};

export default Footer;