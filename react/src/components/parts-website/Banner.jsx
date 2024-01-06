import React from 'react'

export const Banner = () => {
  return (
    <section className='relative w-full h-[35rem] md:h-[31rem] flex flex-col md:flex-row items-center justify-evenly'>
        <img className='absolute z-10 top-0 bottom-0 left-0 right-0 w-full h-full' src="http://localhost:5173/img/Banner.jpg" alt="Banner" />      
        <img className='w-[18rem] md:w-[30rem] lg:w-[35rem] z-30 scale-up-center' src="http://localhost:5173/img/About1.png" alt="Pizza" />
        <div className='w-5/6 md:w-2/5 h-full z-30 p-5 flex flex-col items-center justify-evenly scale-up-vertical-top'>
            <h1 className='text-3xl lg:text-5xl md:mt-8 text-yellow-600'>Somos Pizza Fogata</h1>
            <h2 className='text-sm lg:text-base text-center bg-red-800 text-white p-2 rounded-xl'>"Pizza Fogata: Auténtica pasión, sabores que enamoran en cada bocado."</h2>
            <a className='text-xs lg:text-base bg-white md:mb-8 hover:bg-gray-400 duration-300 rounded-full py-3 px-5' href="#menu">¡Ordenar Ya!</a>
        </div>
    </section>
  )
}
