import React from "react";
import { FaLinkedinIn , FaGithub, FaInstagram, FaFacebook, FaTwitter} from "react-icons/fa";

const Footer = () => {
    return (
      <>
      <footer className="flex flex-row flex-wrap items-center justify-between py-1 px-6  bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500">
        <div classname='footer-socials' >
        <span style={{"gap": "1rem", "cursor": "pointer", "display": "flex"}}> 
            <div>
                <a
                    href="https://www.linkedin.com/company/sccsbsaot"
                    target="_blank">
                    <FaLinkedinIn className="icons"/>
                </a>
            </div>
            <div>
                <a 
                href="https://github.com/sccsbsaot"
                target="_blank">
                <FaGithub className="icons"/>
                </a>
            </div>
            <div>
                <a
                href="https://instagram.com/sccsbsaot?igshid=ZDdkNTZiNTM="
                target="_blank">
                <FaInstagram className="icons"/>
                </a>
            </div>
            <div>
                <a
                href="https://www.facebook.com/profile.php?id=100090904104316&mibextid=ZbWKwL"
                target="_blank">
                <FaFacebook className="icons"/>
                </a>
            </div>
            <div>
                <a
                href="https://twitter.com/sccsbs"
                target="_blank">
                <FaTwitter className="icons"/>    
                </a>
            </div>
            </span>
        </div>
        <div className='text-center px-3'>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark'>
          SC_CSBS
        </a>
      </div>
      </footer>
      </>
    );
  };
  
  export default Footer;
  