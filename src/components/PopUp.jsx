import React from "react";

const PopUp = ({ openPopUp, closePopUp }) => {

    const handlelosePopUp = (e) => {
      if (e.target.id === 'ModelContainer') {
        closePopUp();
      }
    }

if (openPopUp !== true) return null

return (
  <div
    id='ModelContainer'
    onClick={handlelosePopUp}
    className='fixed inset-0 pt-32 flex justify-center items-center bg-opacity-20 backdrop-blur-sm'>
    <div 
      className='pt-20 bg-white w-10/12 md:w-1/2 lg:w-[60%] h-96 shadow-inner border-e-emerald-600 rounded-lg py-12'>
      <div
        className='w-full pt-32 justify-center items-center'>
        <h2
          className='font-semibold py-3 text-center text-5xl text-yellow-500 animate-pulse'>
            Em Breve...
        </h2>
      </div>
    </div>
  </div>
)
}

export default PopUp

