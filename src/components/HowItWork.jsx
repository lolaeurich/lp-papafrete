import React from "react";

const HowItWork = () => {
    return(
        <>
        <section className="bg-gray-200 w-full h-full flex-col justify-around py-8 max-w-screen-2xl xl:h-[570px]">
            <div className="flex flex-col justify-start pl-12 w-1/2 mb-8">
                <h2 className="text-2xl font-semibold mb-3 xl:text-3xl">Como funciona a <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-[length:100%_5px] bg-no-repeat bg-bottom"><span className="text-yellow-500 italic">PAPA </span>FRETE?</span></h2>
                <p className="text-sm font-md xl:text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lacinia sed dolor sed varius. Mauris vel sem vitae ante blandit sodales.</p>
            </div>
            <div className="flex justify-center h-auto max-w-full xl:pt-0">
                <img src="/assets/hiw.png" alt="" className="h-80 w-auto xl:w-11/12 xl:h-96 xl:px-20 "></img>
            </div>
        </section>
        </>
    )
}

export default HowItWork