import logo from "../assets/title3-removebg-preview.png";
import sclogo from "../assets/sc-logo_light_transperent.png"
import mixed from "../assets/Untitled.png"


const Header = () => {
  return (
    <>
    <header className="flex md:flex-row flex-col flex-wrap items-center justify-between py-1 px-6 w-full bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500">
      {/* width="200vh" height="200vh"  md:visible invisible */}
      <img src={logo} className="md:w-[20vw] md:h-[12vh] w-1/2 h-1/2 md:visible max-md:hidden "  alt="Mogojastro Logo" />
      <img src={mixed} className=" w-[70%] h-1/2 max-md:visible md:hidden"  alt="Mogojastro Logo" />
      <h2 className="text-2xl text-center md:text-3xl text-gray-300 font-inter font-bold ">Registration Form </h2>
      <img src={sclogo} className="md:w-[20vw] md:h-[12vh] w-2/5 h-2/5 md:visible max-md:hidden" alt="Student Chapter Logo" />
    </header>
    </>
  );
};

export default Header;
