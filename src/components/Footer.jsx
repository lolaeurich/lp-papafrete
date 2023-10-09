import React from "react";

const Footer = () => {
    return(
        <>
        <section className="triangle w-full h-8 bg-cyan-950 max-w-screen-2xl"></section>
        <section className="full-height flex bg-yellow-500 h-96 lg:w-full max-w-screen-2xl">
            <div className="flex h-full w-full">
                <div className="flex basis-1/3 flex-col pt-8 mt-4 justify-around">
                    <div className="flex flex-row justify-center">
                        <h2 className="font-bold xl:text-xl xl:pr-12">Sobre a PAPA FRETE</h2>
                    </div>
                    <div className="flex flex-col justify-center">
                        <ul className="flex-col pl-28 list-disc xl:text-lg xl:pl-32 xl:pb-4">
                            <li className="">Quem somos</li>
                            <li>Comno funciona</li>
                            <li>Planos para motoristas</li>
                            <li>Planos para empresas</li>
                            <li>Perguntas frequentes</li>
                            <li>Contato</li>
                            <li>Termos de uso</li>
                            <li>Política de privacidade</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col basis-1/3 pt-8 mt-4 px-8 justify-center content-center">
                    <div className="flex justify-around mb-4">
                        <img src="/assets/icon1.png" alt="" className="h-8 w-8 xl:h-12 xl:w-12"></img>
                        <img src="/assets/icon1.png" alt="" className="h-8 w-8 xl:h-12 xl:w-12"></img>
                        <img src="/assets/icon1.png" alt="" className="h-8 w-8 xl:h-12 xl:w-12"></img>
                        <img src="/assets/icon1.png" alt="" className="h-8 w-8 xl:h-12 xl:w-12"></img>
                    </div>
                    <div className="flex flex-col">
                        <p>Lorem ipsum dolor sit amet,
                            consec tetur adipiscing elit,
                            sed do eiusmod.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col basis-1/3 pt-8 mt-4 px-8 justify-center content-center xl:mb-12">
                    <div className="flex flex-col justify-start">
                        <h3 className="text-l font-semibold mb-4 xl:text-xl">Assine nossa newsletter</h3>
                        <form className="">
                        <input className="shadow mb-4 appearance-none border rounded w-60 py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="E-mail" name="email"></input>
                        </form>
                        <button className="bg-white hover:bg-cyan-950 text-black font-semibold hover:text-white py-1 px-4 text-base rounded-md h-8 w-24">Assinar</button>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Footer



     