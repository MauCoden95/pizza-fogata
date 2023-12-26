import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Menu = () => {
  const [pizzas, setPizzas] = useState([]);
  const [empanadas, setEmpanadas] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [minutas, setMinutas] = useState([]);
  const [postres, setPostres] = useState([]);
  const [visible,setVisible] = useState(1);


  const visiblePizzas = () => {
    setVisible(1);
  }

  const visibleEmpanadas = () => {
    setVisible(2);
  }

  const visibleBebidas = () => {
    setVisible(3);
  }

  const visibleMinutas = () => {
    setVisible(4);
  }

  const visiblePostres = () => {
    setVisible(5);
  }


  useEffect(() => {
    axios.get('http://localhost:5000/pizzas')
      .then(response => {
        setPizzas(response.data);
        console.log(pizzas);
      })
      .catch(error => {
        console.error('Error al hacer la solicitud:', error);
      });


      axios.get('http://localhost:5000/empanadas')
      .then(response => {
        setEmpanadas(response.data);
        console.log(empanadas);
      })
      .catch(error => {
        console.error('Error al hacer la solicitud:', error);
      });


      axios.get('http://localhost:5000/bebidas')
      .then(response => {
        setDrinks(response.data);
        console.log(drinks);
      })
      .catch(error => {
        console.error('Error al hacer la solicitud:', error);
      });


      axios.get('http://localhost:5000/minutas')
      .then(response => {
        setMinutas(response.data);
        console.log(minutas);
      })
      .catch(error => {
        console.error('Error al hacer la solicitud:', error);
      });


      axios.get('http://localhost:5000/postres')
      .then(response => {
        setPostres(response.data);
        console.log(postres);
      })
      .catch(error => {
        console.error('Error al hacer la solicitud:', error);
      });
  }, []);

  return (
    <section id="menu" className='w-full min-h-0 bg-orange-100'>
      <h2 className='w-full h-16 text-center text-white text-4xl bg-red-500 leading-relaxed'> Menú</h2>
      <div className='w-full min-h-0 flex flex-col'>
        <div className='w-full h-full flex'>
          <button onClick={visiblePizzas} className='w-full h-16 text-xl text-yellow-900 bg-yellow-500 hover:bg-yellow-200 duration-300 border-b-2 border-t-2 border-yellow-950'>Pizzas <i class="fas fa-pizza-slice"></i></button>
          <button onClick={visibleEmpanadas} className='w-full h-16 text-xl text-yellow-900 bg-yellow-500 hover:bg-yellow-200 duration-300 border-b-2 border-t-2 border-yellow-950'>Empanadas <i class="fas fa-lemon"></i></button>
          <button onClick={visibleBebidas} className='w-full h-16 text-xl text-yellow-900 bg-yellow-500 hover:bg-yellow-200 duration-300 border-b-2 border-t-2 border-yellow-950'>Bebidas <i class="fas fa-glass-whiskey"></i></button>
          <button onClick={visibleMinutas} className='w-full h-16 text-xl text-yellow-900 bg-yellow-500 hover:bg-yellow-200 duration-300 border-b-2 border-t-2 border-yellow-950'>Minutas <i class="fas fa-hamburger"></i></button>
          <button onClick={visiblePostres} className='w-full h-16 text-xl text-yellow-900 bg-yellow-500 hover:bg-yellow-200 duration-300 border-b-2 border-t-2 border-yellow-950'>Postres <i class="fas fa-cookie"></i></button>
        </div>

        <div className={`${visible == 1 ? 'block' : 'hidden'} w-full h-full`}>
          <h3 className='text-center text-3xl mb-3 py-3 bg-white'>Pizzas</h3>
          <div className="w-full h-[35rem] pb-12 overflow-hidden grid gap-10 self-center justify-items-center grid-cols-3">
            {pizzas.map((element) => (
              <div className="w-3/5 h-auto" key={element.id}>
                <img className='w-28 m-auto object-cover' src={`http://localhost:5173/img/${element.image}`} alt="Producto" />
                <h3 className='text-center text-2xl mb-4 text-red-500 mb-1'>{element.name}</h3>
                <div className='w-full min-h-0 flex justify-between'> 
                    <h4 className='text-sm text-center'>
                        Grande: <span className='block mb-1'>{element.price_big} $</span>
                        <div>
                          <button className='w-5 rounded mx-1 p-1 bg-gray-500 hover:bg-gray-900 hover:text-white'>-</button>
                          <button className='w-5 rounded mx-1 p-1 bg-gray-500 hover:bg-gray-900 hover:text-white'>+</button>
                        </div>
                    </h4>

                    <h4 className='text-sm text-center'>
                        Chica: <span className='block mb-1'>{element.price_small} $</span>
                        <div>
                          <button className='w-5 rounded mx-1 p-1 bg-gray-500 hover:bg-gray-900 hover:text-white'>-</button>
                          <button className='w-5 rounded mx-1 p-1 bg-gray-500 hover:bg-gray-900 hover:text-white'>+</button>
                        </div>
                    </h4>

                    <h4 className='text-sm text-center'>
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





        <div className={`${visible == 2 ? 'block' : 'hidden'} w-full h-full`}>
          <h3 className='text-center text-3xl mb-3 py-3 bg-white'>Empanadas</h3>
          <div className="w-full h-[35rem] pb-12 overflow-hidden grid gap-10 self-center justify-items-center grid-cols-3">
            {empanadas.map((element) => (
              <div className="w-3/5 h-auto" key={element.id}>
                <img className='w-28 m-auto object-cover' src={`http://localhost:5173/img/${element.image}`} alt="Producto" />
                <h3 className='text-center text-2xl mb-4 text-red-500 mb-1'>{element.name}</h3>
                <div className='w-full min-h-0 flex justify-evenly'> 
                    <h4 className='text-sm text-center'>
                        Docena: <span className='block mb-1'>{element.price_big} $</span>
                        <div>
                          <button className='w-5 rounded mx-1 p-1 bg-gray-500 hover:bg-gray-900 hover:text-white'>-</button>
                          <button className='w-5 rounded mx-1 p-1 bg-gray-500 hover:bg-gray-900 hover:text-white'>+</button>
                        </div>
                    </h4>

                    <h4 className='text-sm text-center'>
                        Unidad: <span className='block mb-1'>{element.price_small} $</span>
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






        <div className={`${visible == 3 ? 'block' : 'hidden'} w-full h-full`}>
          <h3 className='text-center text-3xl mb-3 py-3 bg-white'>Bebidas</h3>
          <div className="w-full h-[35rem] pb-12 overflow-hidden grid gap-10 self-center justify-items-center grid-cols-3">
            {drinks.map((element) => (
              <div className="w-3/5 h-auto" key={element.id}>
                <img className='w-28 m-auto object-cover' src={`http://localhost:5173/img/${element.image}`} alt="Producto" />
                <h3 className='text-center text-2xl text-red-500 mb-1'>{element.name}</h3>
                <div className='w-full min-h-0 flex justify-center'> 
                    <h4 className='text-sm text-center'>
                        <span className='block mb-1'>{element.price_big} $</span>
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






        <div className={`${visible == 4 ? 'block' : 'hidden'} w-full h-full`}>
          <h3 className='text-center text-3xl mb-3 py-3 bg-white'>Minutas</h3>
          <div className="w-full h-[35rem] pb-12 overflow-hidden grid gap-10 self-center justify-items-center grid-cols-3">
            {minutas.map((element) => (
              <div className="w-3/5 h-auto" key={element.id}>
                <img className='w-28 m-auto object-cover' src={`http://localhost:5173/img/${element.image}`} alt="Producto" />
                <h3 className='text-center text-2xl text-red-500 mb-1'>{element.name}</h3>
                <div className='w-full min-h-0 flex justify-center'> 
                    <h4 className='text-sm text-center'>
                        <span className='block mb-1'>{element.price_big} $</span>
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





        <div className={`${visible == 5 ? 'block' : 'hidden'} w-full h-full`}>
          <h3 className='text-center text-3xl mb-3 py-3 bg-white'>Postres</h3>
          <div className="w-full h-[35rem] pb-12 overflow-hidden grid gap-10 self-center justify-items-center grid-cols-3">
            {postres.map((element) => (
              <div className="w-3/5 h-auto" key={element.id}>
                <img className='w-28 m-auto object-cover' src={`http://localhost:5173/img/${element.image}`} alt="Producto" />
                <h3 className='text-center text-2xl text-red-500 mb-1'>{element.name}</h3>
                <div className='w-full min-h-0 flex justify-center'> 
                    <h4 className='text-sm text-center'>
                        <span className='block mb-1'>{element.price_big} $</span>
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
