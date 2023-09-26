import React from "react"
// import logonova from "/src/assets/logonova.png"

const Navbar = () => {
  return (
     <div className="drop-shadow-md w-full">
        <div className="md:flex items-center justify-between bg-white py-4 md:px-16 px-7">
          <div className="cursor-pointer">
            <img className={'h-7 lg:h-14'} src="/assets/logonova.png" alt=""/>
          </div>
          <div className="md:flex md:items-center space-x-5 md:ml-4 uppercase cursor-pointer">
            <button className="bg-white border-solid border-2 border-yellow-400 shadow-md shadow-gray-600/40 hover:bg-yellow-500 text-black font-normal text-base hover:text-white py-1 px-8 text-sm rounded-xl ">Login</button>
            <button className="bg-yellow-500 shadow-md shadow-gray-600/40 hover:bg-white text-black font-normal hover:text-black py-1 px-3 text-sm rounded-xl">Cadastre-se</button>
          </div>
        </div>
     </div>

  );
};

export default Navbar;

