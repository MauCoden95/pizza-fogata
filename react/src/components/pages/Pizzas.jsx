import React, { useEffect, useState } from 'react'

import { Header } from '../parts-website/Header'
import { Footer } from '../parts-website/Footer'
import { Title } from '../parts-website/Title'
import axios from 'axios'


export const Pizzas = () => {

  const [pizzas, setPizzas] = useState([]);


  const [selectedItemsBigPizza, setSelectedItemsBigPizza] = useState({});
  const [selectedItemsSmallPizza, setSelectedItemsSmallPizza] = useState({});
  const [selectedItemsPortionPizza, setSelectedItemsPortionPizza] = useState({});
  const [userLogged, setUserLogged] = useState(false);


  const handleDecrementBigPizza = (productId) => {
    setSelectedItemsBigPizza((prevItems) => ({
      ...prevItems,
      [productId]: Math.max((prevItems[productId] || 0) - 1, 0),
    }));
  };

  const handleIncrementBigPizza = (productId) => {
    setSelectedItemsBigPizza((prevItems) => ({
      ...prevItems,
      [productId]: (prevItems[productId] || 0) + 1,
    }));
  };

  const handleDecrementSmallPizza = (productId) => {
    setSelectedItemsSmallPizza((prevItems) => ({
      ...prevItems,
      [productId]: Math.max((prevItems[productId] || 0) - 1, 0),
    }));
  };

  const handleIncrementSmallPizza = (productId) => {
    setSelectedItemsSmallPizza((prevItems) => ({
      ...prevItems,
      [productId]: (prevItems[productId] || 0) + 1,
    }));
  };

  const handleDecrementPortionPizza = (productId) => {
    setSelectedItemsPortionPizza((prevItems) => ({
      ...prevItems,
      [productId]: Math.max((prevItems[productId] || 0) - 1, 0),
    }));
  };

  const handleIncrementPortionPizza = (productId) => {
    setSelectedItemsPortionPizza((prevItems) => ({
      ...prevItems,
      [productId]: (prevItems[productId] || 0) + 1,
    }));
  };



  useEffect(() => {
    axios.get('http://localhost:5000/pizzas')
      .then(response => {
        setPizzas(response.data);
      })
      .catch(error => {
        console.error('Error al hacer la solicitud:', error);
      });

      const userDataString = localStorage.getItem('userData');

      if (userDataString) {
        const userData = JSON.parse(userDataString);
        console.log("DATOS: ",userData);
        setUserLogged(true);
      }
  }, []);

  const title = "Pizzas";
  const img = "http://localhost:5173/img/Muzzarella.png";

  //Agregar al carrito
  const addToCart = (product) => {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const existingProductIndex = cart.findIndex(
      (item) => item.product === product.name && item.type === product.type
    );

    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += product.quantity;
    } else {
      cart.push({
        product: product.name,
        type: product.type,
        quantity: product.quantity
      });
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    console.log(localStorage.getItem('cart'));
  };

  return (
    <div>
      <Header />
      <Title title={title} image={img} />
      <div className='block w-full h-full'>
      <div className='w-full h-full'>
          <h3 className='text-center text-3xl mb-3 py-3 bg-white'>Pizzas</h3>
          <div className="w-full min-h-0 md:auto pb-12 overflow-hidden grid grid-cols-2 lg:grid-cols-3 md:gap-10 self-center justify-items-center">
            {pizzas.map((element) => (
              <div className="w-2/4 md:w-3/5 h-auto md:mt-12 md:mt-0" key={element.id}>
                <img className='w-52 md:w-28 m-auto object-cover' src={`http://localhost:5173/img/${element.image}`} alt="Producto" />
                <h3 className='text-center text-xl md:text-2xl mb-4 text-red-500 mb-1'>{element.name}</h3>
                <div className='w-full min-h-0 flex flex-col md:flex-row justify-between'>
                  <h4 className='text-xs md:text-sm text-center mb-5 md:mb-0'>
                    Grande: <span className='block mb-1'>{element.price_big} $</span>
                    <div>
                      <button onClick={() => handleDecrementBigPizza(element.id)} className='w-5 rounded mx-1 p-1 bg-gray-500 hover:bg-gray-900 hover:text-white'>-</button>
                      <span className='mx-1'>{selectedItemsBigPizza[element.id] || 0}</span>
                      <button onClick={() => handleIncrementBigPizza(element.id)} className='w-5 rounded mx-1 p-1 bg-gray-500 hover:bg-gray-900 hover:text-white'>+</button>
                    </div>
                  </h4>

                  <h4 className='text-xs md:text-sm text-center mb-5 md:mb-0'>
                    Chica: <span className='block mb-1'>{element.price_small} $</span>
                    <div>
                      <button onClick={() => handleDecrementSmallPizza(element.id)} className='w-5 rounded mx-1 p-1 bg-gray-500 hover:bg-gray-900 hover:text-white'>-</button>
                      <span className='mx-1'>{selectedItemsSmallPizza[element.id] || 0}</span>
                      <button onClick={() => handleIncrementSmallPizza(element.id)} className='w-5 rounded mx-1 p-1 bg-gray-500 hover:bg-gray-900 hover:text-white'>+</button>
                    </div>
                  </h4>

                  <h4 className='text-xs md:text-sm text-center mb-5 md:mb-0'>
                    Porcion: <span className='block mb-1'>{element.portion} $</span>
                    <div>
                      <button onClick={() => handleDecrementPortionPizza(element.id)} className='w-5 rounded mx-1 p-1 bg-gray-500 hover:bg-gray-900 hover:text-white'>-</button>
                      <span className='mx-1'>{selectedItemsPortionPizza[element.id] || 0}</span>
                      <button onClick={() => handleIncrementPortionPizza(element.id)} className='w-5 rounded mx-1 p-1 bg-gray-500 hover:bg-gray-900 hover:text-white'>+</button>
                    </div>
                  </h4>
                </div>
                { userLogged == true ? <button className='block w-full py-2 my-3 rounded-md bg-red-500 hover:bg-red-950 duration-300 text-white'>Añadir <i class="fas fa-shopping-cart"></i></button> : '' }
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
