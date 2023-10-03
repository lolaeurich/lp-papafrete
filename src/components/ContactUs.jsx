import React from "react";

const ContactUs = () => {
    return(
        <>
        <section className="bg-cyan-950 flex flex-row w-full h-96 max-w-5xl">
            <div className="flex flex-col basis-1/3 pt-8">
                <div className="flex flex-col basis-2/3 content-center items-center px-8">
                    <h2 className="text-3xl text-white font-semibold mb-8 pr-4">Fale <span className="bg-gradient-to-r from-yellow-200 via-yellow-400 to-yellow-600 bg-[length:100%_4px] bg-no-repeat bg-bottom">conosco!</span></h2>
                    <p className="text-xs text-white">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Pellentesque lacinia sed dolor sed varius. 
                    Mauris vel sem vitae ante blandit sodales.<br/>
                    <br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Pellentesque lacinia sed dolor sed varius. 
                    Mauris vel sem vitae ante blandit sodales.<br/>
                    <br/>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    </p>
                </div>
                <div className="flex flex-row basis-1/3 content-center items-center justify-around px-8">
                    <img src="/assets/facebook.png" alt="" className="w-8 h-8 rounded-[50%] animate-bounce shadow-md shadow-yellow-600"></img>
                    <img src="/assets/tt.png" alt="" className="w-8 h-8 rounded-[50%] animate-bounce shadow-md shadow-yellow-600"></img>
                    <img src="/assets/instagram.png" alt="" className="w-8 h-8 rounded-[50%] animate-bounce shadow-md shadow-yellow-600"></img>
                </div>
            </div>
            <div className="flex relative justify-end basis-2/3 py-4 px-4">
                <div className="bg-white z-0 absolute flex-col rounded-lg h-80 w-96">
                    <div className="flex justify-center pl-28">
                        <img src="/assets/contactform.png" alt="" className="w-60 h-50 mt-4"></img>
                    </div>
                    <div className="flex flex-col basis-1/2 gap-2">
                        <div className="flex justify-center pl-24">
                            <img src="/assets/location.png" alt="" className="h-4 w-4"></img>
                                <p className="text-sm"> Av. Etc e Tal, n° 123 - Centro</p>
                        </div>
                        <div className="flex justify-center pl-16">
                            <img src="/assets/email.png" alt="" className="h-4 w-4"></img>
                            <p className="text-sm"> papafrete@gmail.com</p>
                        </div>
                        <div className="flex justify-center pl-2">
                            <img src="/assets/call.png" alt="" className="h-4 w-4"></img>
                            <p className="text-sm"> 41 0000-0000</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center content-center items-center z-30 bg-slate-200 rounded-lg h-[90%] w-96 mr-[270px] mt-8">
                    <h2 className="text-xl font-semibold mb-1">Em que podemos ajudar?</h2>
                    <p className="text-sm mb-4">We are here for you! How can we help you?</p>
                    <form className="flex flex-col mb-">
                        <input className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Nome" name="nome"></input>
                        <input className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="E-mail" name="email"></input>
                        <textarea className="shadow mb-4 resize-none appearance-none border rounded w-full h-16 py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" type="textearea" placeholder="Mensagem" name="mensagem"></textarea>
                    </form>
                    <button className="bg-yellow-500 hover:bg-white text-black font-semibold hover:text-black py-1 px-6 text-base rounded-md">Enviar</button>
                </div>
            </div>
        </section>
        </>
    )
}

export default ContactUs