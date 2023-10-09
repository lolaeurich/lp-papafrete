import React, { useState } from "react"
// import PopUp from "./PopUp";


const Navbar = () => {

  // const [openPopup, setOpenPopup] = useState(false);

  // const HandleRemovePopUp = () => setOpenPopup(false);

  return (
     <div id="nav" className="w-16 drop-shadow-md max-w-screen-2xl">
        <div className="flex items-center justify-between bg-white py-4 px-16 md:px-16">
          <div className="cursor-pointer">
            <img className={'h-28 md:h-7 lg:h-14 xl:h-18'} src="/assets/logonova.png" alt=""/>
          </div>
          <div className="md:flex md:items-center space-x-5 md:ml-4 uppercase cursor-pointer">
            <button className="bg-white border-solid border-2 border-yellow-400 shadow-md shadow-gray-600/40 hover:bg-yellow-500 text-black font-normal hover:text-white rounded-xl text-3xl py-3 px-4 md:py-1 md:px-8 md:text-sm  xl:text-xl">Login</button>
            <button  className="bg-yellow-500 shadow-md shadow-gray-600/40 hover:bg-white text-black font-normal hover:text-black rounded-xl text-3xl py-3 px-4 md:py-1 md:px-3 md:text-sm xl:text-xl">Cadastre-se</button>
          </div>
          {/* <PopUp openPopUp={openPopup} closePopUp={HandleRemovePopUp} /> */}
        </div>
     </div>

  );
};

export default Navbar;

