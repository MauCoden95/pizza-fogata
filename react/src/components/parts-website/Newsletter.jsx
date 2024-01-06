import React from 'react'

export const Newsletter = () => {
    return (
        <section className='relative w-full min-h-0 bg-red-600 overflow-hidden'>
            <img className='absolute -left-52 -top-28 w-[25rem] md:w-[40rem]' src="http://localhost:5173/img/About2.png" alt="Logo" />
            <div className='w-11/12 h-60 sm:h-56 md:h-72 m-auto flex justify-end'>
                <div className='w-3/5 h-full flex flex-col items-center justify-evenly'>
                    <h2 className='text-center text-base sm:text-2xl md:text-4xl text-yellow-500'>Newsletter</h2>
                    <p className='text-xs sm:text-sm md:text-base text-justify text-white'>
                        ¡Descubre el sabor inigualable de Fogata! Únete a nuestra familia y sé el primero en conocer nuestras irresistibles ofertas, eventos especiales y creaciones de pizza que te dejarán sin palabras. Suscríbete ahora y déjate llevar por una experiencia culinaria única. ¡Te esperamos para compartir contigo el arte de la auténtica pizza!</p>
                    <div className='hidden sm:block w-full flex'>
                        <input className='w-5/6 p-1 md:p-3' type="text" name="" placeholder='Ingrese su email...'/>
                        <button className='w-1/6 md:h-full text-xs md:text-base bg-yellow-400 hover:bg-yellow-600'>Suscribirse</button>
                    </div>

                    <div className='block sm:hidden w-full flex'>
                        <input className='w-5/6 p-1 md:p-3' type="text" name="" placeholder='Ingrese su email...'/>
                        <button className='w-1/6 text-base bg-yellow-400 hover:bg-yellow-600'>+</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
