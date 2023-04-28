import logo from "../assets/title3-removebg-preview.png";
import sclogo from "../assets/sc-logo_light_transperent.png"


const Header = () => {
  return (
    <>
    <header className="flex flex-row flex-wrap items-center justify-between py-1 px-6  bg-gradient-to-r from-indigo-500 via-violet-500 to-purple-500">
      <img src={logo} width="200vh" height="200vh"  alt="Mogojastro Logo" />
      <h2 className="text-2xl text-center md:text-3xl text-gray-300 font-inter font-bold "><span style={{"font-family": 'Special Elite',}}>Mogojastro</span> Registration Form </h2>
      <img src={sclogo} width="200vh" height="200vh" alt="Student Chapter Logo" />
    </header>
    </>
  );
};

export default Header;
