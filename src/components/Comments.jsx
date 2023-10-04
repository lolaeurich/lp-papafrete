import React from "react"
// import mapa from "/src/assets/mapa.png"
// import comentarios from "/src/assets/comentarios.png"

const Comments = () => {
    return(
        <>
        <section className="flex justify-center items-center lg:py-4 lg:w-full drop-shadow-md bg-gray-200 lg:h-96 max-w-screen-2xl xl:h-[496px]">
           <div className="container flex justify-center align-center xl:h-[460px]">
                <div className="relative direction-column basis-1/2 xl:h-full max-w-screen-2xl">
                    <img src="/assets/mapa.png" alt="" className={'absolute w-10/12 h-80 xl:h-full xl:w-11/12 max-w-screen-2xl'}></img>
                    <img src="/assets/comentarios.png" alt="" className={"absolute w-10/12 h-8/12 xl:w-11/12 xl:h-5/6 xl:pr-4 xl:pt-12 max-w-screen-2xl"} style={{
                        transform: "translate(-50%, 0)",
                        left: "50%"
                    }}></img>
                </div>
                <div className="direction-column basis-1/2 pl-8 pt-4 content-center items-center xl:pt-8">
                    <h1 className="mb-5 text-3xl font-bold xl:text-4xl">O que nossos usuários dizem?</h1>
                    <p className="text-sm font-normal xl:text-xl">
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
