import React from 'react'

export const About = () => {
    return (
        <section className='w-full min-h-0 bg-orange-200 p-1'>
            <div className='w-11/12 min-h-0 m-auto'>
                <h2 className='text-5xl text-center text-red-500 my-12'>Nosotros</h2>
                <div className='w-full min-h-0 flex flex-col md:flex-row items-center justify-evenly'>
                    <p className='w-5/6 md:w-2/5 text-justify'>
                        En Fogata, fusionamos la tradición italiana con la creatividad contemporánea para ofrecerte una experiencia única de pizza. Cada creación es una oda al sabor auténtico, utilizando ingredientes frescos y cuidadosamente seleccionados. Nos apasiona llevar la excelencia a tu mesa, donde cada mordisco es una explosión de sabores que te transporta a las calles de Nápoles. Únete a nosotros para descubrir el arte de la pizza, donde la calidad se encuentra con la innovación, y cada visita es un viaje culinario incomparable.
                    </p>

                    <img className='w-full md:w-2/5' src="http://localhost:5173/img/Logo.png" alt="About1" />
                </div>

                <div className='w-full min-h-0 mb-5 flex flex-col md:flex-row items-center justify-evenly'>
                    <img className='w-full md:w-2/5' src="http://localhost:5173/img/About2.png" alt="About2" />
                    <p className='w-5/6 md:w-2/5 text-justify'>
                         En el corazón de Fogata, la pizza es más que una comida; es una experiencia gustativa que celebra la autenticidad y el deleite. Inspirados por la rica herencia italiana, hemos perfeccionado el equilibrio de sabores en cada creación, utilizando ingredientes frescos y técnicas artesanales. Desde nuestras masas cuidadosamente fermentadas hasta la mezcla armoniosa de ingredientes, cada pizza cuenta una historia de pasión y dedicación. Únete a nosotros en este viaje culinario, donde la tradición se encuentra con la innovación, y cada bocado es un homenaje a la perfección gastronómica.
                    </p>
                </div>
            </div>
        </section>
    )
}
