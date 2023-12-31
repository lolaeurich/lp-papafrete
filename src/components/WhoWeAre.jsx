import React from "react";


const WhoWeAre = () => {

    return(
        <>
        <section className="container bg-white flex flex-row w-full h-96 max-w-screen-2xl xl:h-[550px]">
            <div className="basis-1/2 py-4 px-8 w-full h-96 xl:h-[550px] xl:py-0">
                <img src="/assets/quemsomos.png" className="w-10/12 h-10/12 max-h-2xl"></img>
            </div>
            <div className="flex flex-col basis-1/2 content-start items-start py-8 px-8 w-full h-96 xl:h-[550px] xl:py-10">
                <h2 className="text-3xl font-semibold mb-2 xl:text-5xl">Quem Somos</h2>
                <h3 className="text-1xl font-normal mb-2 xl:text-3xl xl:mb-4">LOREM IPSUM</h3>
                <a className="text-sm font-light mb-4 xl:text-xl xl:mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Pellentesque lacinia sed dolor sed varius. 
                Mauris vel sem vitae ante blandit sodales.<br/>
                <br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Pellentesque lacinia sed dolor sed varius. 
                Mauris vel sem vitae ante blandit sodales.<br/>
                <br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Pellentesque lacinia sed dolor sed varius. 
                Mauris vel sem vitae ante blandit sodales.<br/>
                </a>
                <button className="bg-yellow-500 hover:bg-white text-black font-semibold hover:text-black py-2 px-6 text-l rounded-xl xl:text-xl">Junte-se a nós!</button>
            </div>
        </section>
        </>
    )
}

export default WhoWeAre