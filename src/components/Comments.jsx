import React from "react"
// import mapa from "/src/assets/mapa.png"
// import comentarios from "/src/assets/comentarios.png"

const Comments = () => {
    return(
        <>
        <section className="flex justify-center items-center lg:py-4 lg:w-full drop-shadow-md bg-gray-200 lg:h-96">
           <div className="container flex justify-center align-center">
                <div className="relative direction-column basis-1/2 h-fit">
                    <img src="/assets/mapa.png" alt="" className={'absolute w-10/12 h-80'}></img>
                    <img src="/assets/comentarios.png" alt="" className={"absolute w-10/12 h-8/12"} style={{
                        transform: "translate(-50%, 0)",
                        left: "50%"
                    }}></img>
                </div>
                <div className="direction-column basis-1/2 pl-8 pt-4 content-center items-center">
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
