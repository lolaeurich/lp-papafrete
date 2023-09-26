import React from "react"
import mapa from "/src/assets/mapa.png"
import comentarios from "/src/assets/comentarios.png"

const Comments = () => {
    return(
        <>
        <section className="flex justify-center items-center py-4 w-full drop-shadow-md bg-gray-200 h-96">
           <div className="container flex justify-center align-center">
                <div className="relative direction-column basis-1/2">
                    <img src={mapa} alt="" className={'absolute w-10/12 h-80'}></img>
                    <img src={comentarios} alt="" className={"absolute w-10/12 h-10/12"} style={{
                        transform: "translate(-50%, 0)",
                        // top: "50%",
                        left: "50%"
                    }}></img>
                </div>
                <div className="direction-column basis-1/2 pl-8 pt-8 content-center items-center">
                    <h1 className="mb-5 text-3xl font-bold">O que nossos usuários dizem?</h1>
                    <p className="text-sm font-normal">
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
