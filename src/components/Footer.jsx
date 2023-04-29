import React from "react";
import { FaLinkedinIn , FaGithub, FaInstagram, FaFacebook, FaTwitter} from "react-icons/fa";

const Footer = () => {
    return (
      <>
      <footer className="flex md:flex-row flex-column flex-wrap items-center justify-between py-0 md:px-6  bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500 fixed bottom-0  w-full">
        <div classname='footer-socials' >
        <span style={{"gap": "1rem", "cursor": "pointer", "display": "flex"}}> 
            <div>
                <a  href="https://www.linkedin.com/company/sccsbsaot"
                    target="_blank" rel="noreferrer">
                    <FaLinkedinIn className="icons"/>
                </a>
            </div>
            <div>
                <a 
                href="https://github.com/sccsbsaot"
                target="_blank" rel="noreferrer">
                <FaGithub className="icons"/>
                </a>
            </div>
            <div>
                <a
                href="https://instagram.com/sccsbsaot?igshid=ZDdkNTZiNTM="
                target="_blank" rel="noreferrer">
                <FaInstagram className="icons"/>
                </a>
            </div>
            <div>
                <a
                href="https://www.facebook.com/profile.php?id=100090904104316&mibextid=ZbWKwL"
                target="_blank" rel="noreferrer">
                <FaFacebook className="icons"/>
                </a>
            </div>
            <div>
                <a
                href="https://twitter.com/sccsbs"
                target="_blank" rel="noreferrer">
                <FaTwitter className="icons"/>    
                </a>
            </div>
            </span>
        </div>
        <div className='text-center px-3 '>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href="https://github.com/sccsbsaot"
                target="_blank" rel="noreferrer">
          SC_CSBS
        </a>
      </div>
      </footer>
      </>
    );
  };
  
  export default Footer;
  