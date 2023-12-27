import React from 'react'

export const Contact = () => {
  return (
    <section id="contact" className='w-full min-h-0 bg-orange-100 my-12'>
        <div className='w-11/12 min-h-0 m-auto border-2 rounded-xl border-red-500'>
            <h2 className='text-center text-red-500 text-4xl my-8'>Contacto</h2>
            <div className='w-full min-h-0 p-7 flex justify-evenly'>
                <form className='w-2/5' action="" method="post">
                    <div className='w-full h-24 flex items-center justify-between'>
                        <span className='text-xs text-red-500'>
                            <i class="block text-3xl text-center fas fa-thumbtack"></i>
                            Av. Lorem Ipsum 7461 - CABA
                        </span>

                        <span className='text-xs text-red-500'>
                            <i class="block text-3xl text-center fab fa-whatsapp-square"></i>
                            (+54 11) 4999-9999
                        </span>

                        <span className='text-xs text-red-500'>
                            <i class="block text-3xl text-center fas fa-envelope"></i>
                            pizzasfogata@email.com
                        </span>
                    </div>

                    <input className='w-full outline-none bg-transparent border-b-2 border-red-500 p-2' placeholder='Nombre' type="text" name="" id="" />
                    <input className='w-full my-5 outline-none bg-transparent border-b-2 border-red-500 p-2' placeholder='Email' type="email" name="" id="" />
                    <input className='w-full my-5 outline-none bg-transparent border-b-2 border-red-500 p-2' placeholder='Teléfono' type="number" name="" id="" />
                    <textarea className='w-full my-5 outline-none bg-transparent border-b-2 border-red-500 p-2' placeholder='Escriba su mensaje...' name="" id="" cols="30" rows="5"></textarea>
                    <input className='w-full my-5 text-xl outline-none bg-red-500 hover:bg-red-300 duration-300 cursor-pointer p-2' value='Enviar' type="submit" name="" id="" />
                </form>

                <iframe className='w-2/5 h-[25rem]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3284.0167135736474!2d-58.384145324985624!3d-34.60373887295423!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4aa9f0a6da5edb%3A0x11bead4e234e558b!2sObelisco!5e0!3m2!1ses-419!2sar!4v1703636447240!5m2!1ses-419!2sar" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            </div>
        </div>
    </section>
  )
}
