import React from "react"
import mapa from "/src/assets/mapa.png"
import comentarios from "/src/assets/comentarios.png"

const Comments = () => {
    return(
        <>
        <section className="bg-gray-200 drop-shadow-md w-full h-[500px]">
           <div className="container flex flex-row justify-between align-center">
            <div className="relative basis-1/2">
                <img src={mapa} alt="" className={'z-0 w-full h-[480px] right-6 pt-3'}></img>
             <div className="absolute top-16 left-10 w-full h-[450px]">   
                <img src={comentarios} alt="" className={"pr-10"}></img>
             </div>   
            </div>
            <div className="direction-column basis-1/2 pl-12 pb-12 pt-20 content-center items-center">
                <h1 className="mb-5 text-3xl font-bold">O que nossos usuários dizem?</h1>
                <p className="mb-3 text-base font-normal">
                    Lorem ipsum dolor sit amet, 
                    consectetur adipisicing elit.
                    Ab accusamus, aliquid assumenda atque.<br/>
                    <br/>
                    Lorem ipsum dolor sit amet, 
                    consectetur adipisicing elit.
                    Ab accusamus, aliquid assumenda atque.<br/>
                    <br/>
                    Lorem ipsum dolor sit amet, 
                    consectetur adipisicing elit.
                    Ab accusamus, aliquid assumenda atque.<br/>
                    <br/>
                    Lorem ipsum dolor sit amet, 
                    consectetur adipisicing elit.
                    Ab accusamus, aliquid assumenda atque.<br/>
                </p>
            </div>
           </div>
        </section>
        </>
    )
}

export default Comments
