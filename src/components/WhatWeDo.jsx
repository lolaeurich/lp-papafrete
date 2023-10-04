import React from "react"

const WhatWeDo = () => {
    return (
        <>
        <section className="bg-cyan-950 w-full h-full flex-col justify-around py-8 xl:h-[550px] xl:max-w-screen-2xl">
            <div className="flex flex-col justify-center content-center items-center xl:mb-4">
                <h1 className="text-white text-3xl ">O Que Podemos Fazer</h1>
                <p className="text-white text-xl">Pelo Seu Negó<span className="text-white text-l bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-[length:100%_2.5px] bg-no-repeat bg-bottom">cioㅤ</span></p>
            </div>
            <div className="container flex justify-center items-center py-8 mb-4 xl:max-w-full">
                <div className="flex justify-around align-center w-full h-60 xl:h-64">
                    <div className="bg-white w-48 flex flex-col justify-around items-center px-4 rounded-md shadow-lg shadow-yellow-600 hover:scale-105">
                        <img src="/assets/apartment.png" alt="" className="w-8 h-8"></img>
                        <h2 className="text-lg font-semibold">Lorem & Ipsum</h2>
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur elit. Pellentesque lacinia sed dolor sed varius. Mauris vel sem vitae ante blandit sodales.</p>
                    </div>
                    <div className="bg-white w-48 flex flex-col justify-around items-center px-4 rounded-md shadow-lg shadow-yellow-600 hover:scale-105">
                        <img src="/assets/apartment.png" alt="" className="w-8 h-8"></img>
                        <h2 className="text-lg font-semibold">Lorem & Ipsum</h2>
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur elit. Pellentesque lacinia sed dolor sed varius. Mauris vel sem vitae ante blandit sodales.</p>
                    </div>
                    <div className="bg-white w-48 flex flex-col justify-around items-center px-4 rounded-md shadow-lg shadow-yellow-600 hover:scale-105">
                        <img src="/assets/apartment.png" alt="" className="w-8 h-8"></img>
                        <h2 className="text-lg font-semibold">Lorem & Ipsum</h2>
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur elit. Pellentesque lacinia sed dolor sed varius. Mauris vel sem vitae ante blandit sodales.</p>
                    </div>
                    <div className="bg-white w-48 flex flex-col justify-around items-center px-4 rounded-md shadow-lg shadow-yellow-600 hover:scale-105">
                        <img src="/assets/apartment.png" alt="" className="w-8 h-8"></img>
                        <h2 className="text-lg font-semibold">Lorem & Ipsum</h2>
                        <p className="text-sm">Lorem ipsum dolor sit amet, consectetur elit. Pellentesque lacinia sed dolor sed varius. Mauris vel sem vitae ante blandit sodales.</p>
                    </div>
                </div>
            </div>  
                <div className="flex justify-around align-center xl:mt-10">
                    <button className="bg-yellow-500 hover:bg-white font-bold hover:text-black py-2 px-6 text-l rounded-lg">
                            Conheça Nossos Planos
                    </button>
                </div>  
        </section>
        </>
    )
}

export default WhatWeDo