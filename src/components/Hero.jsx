import React from "react"
// import heroimage from "/src/assets/heroimage.png"

const Hero = () => {
    return (
        <>
        <section className="bg-white py-8 lg:h-96 xl:h-[496px] max-w-screen-2xl">
            <div className="container flex flex-row max-w-screen-2xl xl:h-[460px]">
                <div className="direction-column basis-1/2 pl-12 content-center items-center max-w-screen-2xl xl:pt-10">
                    <p className="mb-1 text-black text-xl font-medium xl:text-2xl">Em todos os cantos do país</p>
                    <h1 className="mb-5 text-yellow-500 text-5xl font-bold xl:text-6xl">
                        Quer enviar?<br/>
                        Quer transportar?<br/>
                        <p className="text-5xl text-black xl:text-6xl xl:mb-6"><span className="text-5xl text-black bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-[length:100%_6px] bg-no-repeat bg-bottom xl:text-6xl">Nós</span> ajudamos!</p>
                    </h1>
                    <p className="mb-3 text-lg font-normal xl:text-xl xl:mb-6"> Lorem ipsum dolor sit amet, 
                    consectetur adipisicing elit.
                    Ab accusamus, aliquid assumenda atque
                    </p>
                    <button className="bg-yellow-500 hover:bg-white text-black font-semibold hover:text-black py-2 px-6 text-l rounded-xl xl:text-2xl">
                        Cadastre-se
                    </button>
                </div>
                <div className="basis-1/2 pl-20 xl:pl-0">
                    <img src="/assets/heroimage.png" alt="" className={'w-11/12 h-11/12 right-6 xl:h-full'}/>
                </div>
            </div>
        </section>
        </>
    )
}

export default Hero