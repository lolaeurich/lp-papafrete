import React from "react"
import heroimage from "/src/assets/heroimage.png"

const Hero = () => {
    return (
        <>
        <section className="bg-white h-[420px] max-w-full">
            <div className="container flex flex-row justify-between align-center">
                <div className="direction-column basis-1/2 pl-12 pb-12 pt-12 content-center items-center">
                    <p className="mb-1 text-black text-xl font-medium">Em todos os cantos do país</p>
                    <h1 className="mb-5 text-yellow-500 text-5xl font-bold">
                        Quer enviar?<br/>
                        Quer transportar?<br/>
                        <p className="text-5xl text-black"><span className="text-5xl text-black bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-[length:100%_6px] bg-no-repeat bg-bottom">Nós</span> ajudamos!</p>
                    </h1>
                    <p className="mb-3 text-lg font-normal"> Lorem ipsum dolor sit amet, 
                    consectetur adipisicing elit.
                    Ab accusamus, aliquid assumenda atque
                    </p>
                    <button className="bg-yellow-500 hover:bg-white text-black font-semibold hover:text-black py-2 px-6 text-l rounded-xl">
                        Cadastre-se
                    </button>
                </div>
                <div className="basis-1/2">
                    <img src={heroimage} alt="" className={'w-full right-6 pt-3'}/>
                </div>
            </div>
        </section>
        </>
    )
}

export default Hero