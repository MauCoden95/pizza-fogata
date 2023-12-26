import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Menu = () => {
  const [pizzas, setPizzas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/pizzas')
      .then(response => {
        setPizzas(response.data);
        console.log(pizzas);
      })
      .catch(error => {
        console.error('Error al hacer la solicitud:', error);
      });
  }, []);

  return (
    <section className='w-full min-h-0 bg-orange-100'>
      <h2 className='w-full h-16 text-center text-white text-4xl bg-red-500 leading-relaxed'> Menú</h2>
      <div className='w-full min-h-0 flex flex-col'>
        <div className='w-full h-full flex'>
          <button className='w-full h-16 text-xl text-yellow-900 bg-yellow-500 hover:bg-yellow-200 duration-300 border-b-2 border-t-2 border-yellow-950'>Pizzas <i class="fas fa-pizza-slice"></i></button>
          <button className='w-full h-16 text-xl text-yellow-900 bg-yellow-500 hover:bg-yellow-200 duration-300 border-b-2 border-t-2 border-yellow-950'>Empanadas <i class="fas fa-lemon"></i></button>
          <button className='w-full h-16 text-xl text-yellow-900 bg-yellow-500 hover:bg-yellow-200 duration-300 border-b-2 border-t-2 border-yellow-950'>Minutas <i class="fas fa-hamburger"></i></button>
          <button className='w-full h-16 text-xl text-yellow-900 bg-yellow-500 hover:bg-yellow-200 duration-300 border-b-2 border-t-2 border-yellow-950'>Bebidas <i class="fas fa-hamburger"></i></button>
          <button className='w-full h-16 text-xl text-yellow-900 bg-yellow-500 hover:bg-yellow-200 duration-300 border-b-2 border-t-2 border-yellow-950'>Postres <i class="fas fa-cookie"></i></button>
        </div>

        <div className='w-full h-full'>
          <h3 className='text-center text-3xl mb-3 py-3 bg-white'>Pizzas</h3>
          <div className="w-full h-[35rem] pb-12 overflow-hidden grid gap-10 self-center justify-items-center grid-cols-3">
            {pizzas.map((element) => (
              <div className="w-3/5 h-auto" key={element.id}>
                <img className='w-28 m-auto object-cover' src={`http://localhost:5173/img/${element.image}`} alt="Producto" />
                <h3 className='text-center text-xl text-red-500 mb-1'>{element.name}</h3>
                <div className='w-full min-h-0 flex justify-between'> 
                    <h4 className='text-xs text-center'>
                        Grande: <span className='block mb-1'>{element.price_big} $</span>
                        <div>
                          <button className='w-5 rounded mx-1 p-1 bg-gray-500 hover:bg-gray-900 hover:text-white'>-</button>
                          <button className='w-5 rounded mx-1 p-1 bg-gray-500 hover:bg-gray-900 hover:text-white'>+</button>
                        </div>
                    </h4>

                    <h4 className='text-xs text-center'>
                        Chica: <span className='block mb-1'>{element.price_small} $</span>
                        <div>
                          <button className='w-5 rounded mx-1 p-1 bg-gray-500 hover:bg-gray-900 hover:text-white'>-</button>
                          <button className='w-5 rounded mx-1 p-1 bg-gray-500 hover:bg-gray-900 hover:text-white'>+</button>
                        </div>
                    </h4>

                    <h4 className='text-xs text-center'>
                        Porcion: <span className='block'>{element.portion} $</span>
                        <div>
                          <button className='w-5 rounded mx-1 p-1 bg-gray-500 hover:bg-gray-900 hover:text-white'>-</button>
                          <button className='w-5 rounded mx-1 p-1 bg-gray-500 hover:bg-gray-900 hover:text-white'>+</button>
                        </div>
                    </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
