import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const Menu = () => {
  const [pizzas, setPizzas] = useState([]);
  const [empanadas, setEmpanadas] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [minutas, setMinutas] = useState([]);
  const [postres, setPostres] = useState([]);
  const [visible, setVisible] = useState(1);
  const [selectedItemsBigPizza, setSelectedItemsBigPizza] = useState({});
  const [selectedItemsSmallPizza, setSelectedItemsSmallPizza] = useState({});
  const [selectedItemsPortionPizza, setSelectedItemsPortionPizza] = useState({});
  const [selectedItemsDozenEmpanada, setSelectedItemsDozenEmpanada] = useState({});
  const [selectedItemsUnitEmpanada, setSelectedItemsUnitEmpanada] = useState({});
  const [selectedItems, setSelectedItems] = useState({});
  const [userLogged, setUserLogged] = useState(false);




  useEffect(() => {
    const userDataString = localStorage.getItem('userData');

    if (userDataString) {
      const userData = JSON.parse(userDataString);
      console.log("DATOS: ", userData);
      setUserLogged(true);
    }

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






  const handleDecrement = (productId) => {
    setSelectedItems((prevItems) => ({
      ...prevItems,
      [productId]: Math.max((prevItems[productId] || 0) - 1, 0),
    }));
  };

  const handleIncrement = (productId) => {
    setSelectedItems((prevItems) => ({
      ...prevItems,
      [productId]: (prevItems[productId] || 0) + 1,
    }));
  };

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

  const handleDecrementDozenEmpanada = (productId) => {
    setSelectedItemsDozenEmpanada((prevItems) => ({
      ...prevItems,
      [productId]: Math.max((prevItems[productId] || 0) - 1, 0),
    }));
  };

  const handleIncrementDozenEmpanada = (productId) => {
    setSelectedItemsDozenEmpanada((prevItems) => ({
      ...prevItems,
      [productId]: (prevItems[productId] || 0) + 1,
    }));
  };

  const handleDecrementUnitEmpanada = (productId) => {
    setSelectedItemsUnitEmpanada((prevItems) => ({
      ...prevItems,
      [productId]: Math.max((prevItems[productId] || 0) - 1, 0),
    }));
  };

  const handleIncrementUnitEmpanada = (productId) => {
    setSelectedItemsUnitEmpanada((prevItems) => ({
      ...prevItems,
      [productId]: (prevItems[productId] || 0) + 1,
    }));
  };





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
        quantity: product.quantity,
        price: product.price,
        img: product.img
      });
    }

    localStorage.setItem('cart', JSON.stringify(cart));

    console.log(localStorage.getItem('cart'));
  };


  return (
    <section id="menu" className='w-full min-h-0 bg-orange-100'>
      <h2 className='w-full h-16 text-center text-white text-4xl bg-red-500 leading-relaxed'> Menú</h2>
      <div className='w-full min-h-0 flex flex-col'>
        <div className='w-full h-full grid grid-cols-2 grid-rows-2 md:flex '>
          <button onClick={() => setVisible(1)} className='w-full h-16 text-xl text-yellow-900 bg-yellow-500 hover:bg-yellow-200 duration-300 border-b-2 border-t-2 border-yellow-950'>Pizzas <i class="fas fa-pizza-slice"></i></button>
          <button onClick={() => setVisible(2)} className='w-full h-16 text-xl text-yellow-900 bg-yellow-500 hover:bg-yellow-200 duration-300 border-b-2 border-t-2 border-yellow-950'>Empanadas <i class="fas fa-lemon"></i></button>
          <button onClick={() => setVisible(3)} className='w-full h-16 text-xl text-yellow-900 bg-yellow-500 hover:bg-yellow-200 duration-300 border-b-2 border-t-2 border-yellow-950'>Bebidas <i class="fas fa-glass-whiskey"></i></button>
          <button onClick={() => setVisible(4)} className='w-full h-16 text-xl text-yellow-900 bg-yellow-500 hover:bg-yellow-200 duration-300 border-b-2 border-t-2 border-yellow-950'>Minutas <i class="fas fa-hamburger"></i></button>
          <button onClick={() => setVisible(5)} className='col-span-2 w-full h-16 text-xl text-yellow-900 bg-yellow-500 hover:bg-yellow-200 duration-300 border-b-2 border-t-2 border-yellow-950'>Postres <i class="fas fa-cookie"></i></button>
        </div>

        <div className={`${visible == 1 ? 'block' : 'hidden'} w-full h-full`}>
          <h3 className='text-center text-3xl mb-3 py-3 bg-white'>Pizzas</h3>
          <div className="w-full min-h-0 md:auto pb-12 overflow-hidden grid grid-cols-2 lg:grid-cols-3 md:gap-10 self-center justify-items-center">
            {pizzas.map((element) => (
              <div className="w-2/4 md:w-3/5 h-auto md:mt-0" key={element.id}>
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

                    {userLogged == true ? <button onClick={() =>
                      addToCart({
                        name: element.name,
                        type: 'Pizza Grande',
                        quantity: selectedItemsBigPizza[element.id] || 0,
                        price: selectedItemsBigPizza[element.id] * element.price_big,
                        img: element.image
                      })
                    } className='block w-full py-2 my-3 rounded-md bg-red-500 hover:bg-red-950 duration-300 text-white'>Añadir <i class="fas fa-shopping-cart"></i></button> : ''}
                  </h4>

                  <h4 className='text-xs md:text-sm text-center mb-5 md:mb-0'>
                    Chica: <span className='block mb-1'>{element.price_small} $</span>
                    <div>
                      <button onClick={() => handleDecrementSmallPizza(element.id)} className='w-5 rounded mx-1 p-1 bg-gray-500 hover:bg-gray-900 hover:text-white'>-</button>
                      <span className='mx-1'>{selectedItemsSmallPizza[element.id] || 0}</span>
                      <button onClick={() => handleIncrementSmallPizza(element.id)} className='w-5 rounded mx-1 p-1 bg-gray-500 hover:bg-gray-900 hover:text-white'>+</button>
                    </div>
                    {userLogged == true ? <button onClick={() =>
                      addToCart({
                        name: element.name,
                        type: 'Pizza Chica',
                        quantity: selectedItemsSmallPizza[element.id] || 0,
                        price: selectedItemsSmallPizza[element.id] * element.price_small,
                        img: element.img
                      })
                    } className='block w-full py-2 my-3 rounded-md bg-red-500 hover:bg-red-950 duration-300 text-white'>Añadir <i class="fas fa-shopping-cart"></i></button> : ''}
                  </h4>

                  <h4 className='text-xs md:text-sm text-center mb-5 md:mb-0'>
                    Porcion: <span className='block mb-1'>{element.portion} $</span>
                    <div>
                      <button onClick={() => handleDecrementPortionPizza(element.id)} className='w-5 rounded mx-1 p-1 bg-gray-500 hover:bg-gray-900 hover:text-white'>-</button>
                      <span className='mx-1'>{selectedItemsPortionPizza[element.id] || 0}</span>
                      <button onClick={() => handleIncrementPortionPizza(element.id)} className='w-5 rounded mx-1 p-1 bg-gray-500 hover:bg-gray-900 hover:text-white'>+</button>
                    </div>
                    {userLogged == true ? <button onClick={() =>
                      addToCart({
                        name: element.name,
                        type: 'Porción',
                        quantity: selectedItemsPortionPizza[element.id] || 0,
                        price: selectedItemsPortionPizza[element.id] * element.portion,
                        img: element.image
                      })
                    } className='block w-full py-2 my-3 rounded-md bg-red-500 hover:bg-red-950 duration-300 text-white'>Añadir <i class="fas fa-shopping-cart"></i></button> : ''}
                  </h4>
                </div>

              </div>
            ))}
          </div>
        </div>





        <div className={`${visible == 2 ? 'block' : 'hidden'} w-full h-full`}>
          <h3 className='text-center text-3xl mb-3 py-3 bg-white'>Empanadas</h3>
          <div className="w-full min-h-0 md:h-auto pb-12 overflow-hidden grid grid-cols-2 md:grid-cols-3 md:gap-10 self-center justify-items-center">
            {empanadas.map((element) => (
              <div className="w-3/5 h-auto mb-12 md:mb-0" key={element.id}>
                <img className='w-28 m-auto object-cover' src={`http://localhost:5173/img/${element.image}`} alt="Producto" />
                <h3 className='text-center text-base md:text-2xl mb-4 text-red-500 mb-1'>{element.name}</h3>
                <div className='w-full min-h-0 flex justify-evenly'>
                  <h4 className='text-sm text-center'>
                    Docena: <span className='block mb-1'>{element.price_big} $</span>
                    <div>
                      <button onClick={() => handleDecrementDozenEmpanada(element.id)} className='w-5 rounded mx-1 p-1 bg-gray-500 hover:bg-gray-900 hover:text-white'>-</button>
                      <span className='mx-1'>{selectedItemsDozenEmpanada[element.id] || 0}</span>
                      <button onClick={() => handleIncrementDozenEmpanada(element.id)} className='w-5 rounded mx-1 p-1 bg-gray-500 hover:bg-gray-900 hover:text-white'>+</button>
                    </div>
                    {userLogged == true ? <button onClick={() =>
                      addToCart({
                        name: element.name,
                        type: 'Docena',
                        quantity: selectedItemsDozenEmpanada[element.id] || 0,
                        price: selectedItemsDozenEmpanada[element.id] * element.price_big,
                        img: element.image
                      })
                    } className='block w-full py-2 my-3 rounded-md bg-red-500 hover:bg-red-950 duration-300 text-white'>Añadir <i class="fas fa-shopping-cart"></i></button> : ''}
                  </h4>

                  <h4 className='text-sm text-center'>
                    Unidad: <span className='block mb-1'>{element.price_small} $</span>
                    <div>
                      <button onClick={() => handleDecrementUnitEmpanada(element.id)} className='w-5 rounded mx-1 p-1 bg-gray-500 hover:bg-gray-900 hover:text-white'>-</button>
                      <span className='mx-1'>{selectedItemsUnitEmpanada[element.id] || 0}</span>
                      <button onClick={() => handleIncrementUnitEmpanada(element.id)} className='w-5 rounded mx-1 p-1 bg-gray-500 hover:bg-gray-900 hover:text-white'>+</button>
                    </div>
                    {userLogged == true ? <button onClick={() =>
                      addToCart({
                        name: element.name,
                        type: 'Unidad',
                        quantity: selectedItemsUnitEmpanada[element.id] || 0,
                        price: selectedItemsUnitEmpanada[element.id] * element.price_small,
                        img: element.image
                      })
                    } className='block w-full py-2 my-3 rounded-md bg-red-500 hover:bg-red-950 duration-300 text-white'>Añadir <i class="fas fa-shopping-cart"></i></button> : ''}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>






        <div className={`${visible == 3 ? 'block' : 'hidden'} w-full h-full`}>
          <h3 className='text-center text-3xl mb-3 py-3 bg-white'>Bebidas</h3>
          <div className="w-full min-h-0 md:h-[35rem] pb-12 overflow-hidden grid grid-cols-2 md:grid-cols-3 md:gap-10 self-center justify-items-center">
            {drinks.map((element) => (
              <div className="w-3/5 h-auto mb-12 md:mb-0" key={element.id}>
                <img className='w-28 m-auto object-cover' src={`http://localhost:5173/img/${element.image}`} alt="Producto" />
                <h3 className='text-center text-base md:text-2xl mb-4 text-red-500 mb-1'>{element.name}</h3>
                <div className='w-full min-h-0 flex justify-center'>
                  <h4 className='text-sm text-center'>
                    <span className='block mb-1'>{element.price_big} $</span>
                    <div>
                      <button onClick={() => handleDecrement(element.id)} className='w-5 rounded mx-1 p-1 bg-gray-500 hover:bg-gray-900 hover:text-white'>-</button>
                      <span className='mx-1'>{selectedItems[element.id] || 0}</span>
                      <button onClick={() => handleIncrement(element.id)} className='w-5 rounded mx-1 p-1 bg-gray-500 hover:bg-gray-900 hover:text-white'>+</button>
                    </div>
                  </h4>
                </div>
                {userLogged == true ? <button onClick={() =>
                  addToCart({
                    name: element.name,
                    type: 'Bebidas',
                    quantity: selectedItems[element.id] || 0,
                    price: selectedItems[element.id] * element.price_big,
                    img: element.image
                  })
                } className='block w-full py-2 my-3 rounded-md bg-red-500 hover:bg-red-950 duration-300 text-white'>Añadir <i class="fas fa-shopping-cart"></i></button> : ''}
              </div>
            ))}
          </div>
        </div>



        <div className={`${visible == 4 ? 'block' : 'hidden'} w-full h-full`}>
          <h3 className='text-center text-3xl mb-3 py-3 bg-white'>Minutas</h3>
          <div className="w-full min-h-0 md:h-[35rem] pb-12 overflow-hidden grid grid-cols-2 md:grid-cols-3 md:gap-10 self-center justify-items-center">
            {minutas.map((element) => (
              <div className="w-3/5 h-auto mb-12 md:mb-0" key={element.id}>
                <img className='w-28 m-auto object-cover' src={`http://localhost:5173/img/${element.image}`} alt="Producto" />
                <h3 className='text-center text-base md:text-2xl mb-4 text-red-500 mb-1'>{element.name}</h3>
                <div className='w-full min-h-0 flex justify-center'>
                  <h4 className='text-sm text-center'>
                    <span className='block mb-1'>{element.price_big} $</span>
                    <div>
                      <button onClick={() => handleDecrement(element.id)} className='w-5 rounded mx-1 p-1 bg-gray-500 hover:bg-gray-900 hover:text-white'>-</button>
                      <span className='mx-1'>{selectedItems[element.id] || 0}</span>
                      <button onClick={() => handleIncrement(element.id)} className='w-5 rounded mx-1 p-1 bg-gray-500 hover:bg-gray-900 hover:text-white'>+</button>
                    </div>
                  </h4>
                </div>
                {userLogged == true ? <button onClick={() =>
                  addToCart({
                    name: element.name,
                    type: 'Minutas',
                    quantity: selectedItems[element.id] || 0,
                    price: selectedItems[element.id] * element.price_big,
                    img: element.image
                  })
                } className='block w-full py-2 my-3 rounded-md bg-red-500 hover:bg-red-950 duration-300 text-white'>Añadir <i class="fas fa-shopping-cart"></i></button> : ''}
              </div>
            ))}
          </div>
        </div>









        <div className={`${visible == 5 ? 'block' : 'hidden'} w-full h-full`}>
          <h3 className='text-center text-3xl mb-3 py-3 bg-white'>Postres</h3>
          <div className="w-full min-h-0 md:h-auto pb-12 overflow-hidden grid grid-cols-2 md:grid-cols-3 md:gap-10 self-center justify-items-center">
            {postres.map((element) => (
              <div className="w-3/5 h-auto mb-12 md:mb-0" key={element.id}>
                <img className='w-28 m-auto object-cover' src={`http://localhost:5173/img/${element.image}`} alt="Producto" />
                <h3 className='text-center text-base md:text-2xl mb-4 text-red-500 mb-1'>{element.name}</h3>
                <div className='w-full min-h-0 flex justify-center'>
                  <h4 className='text-sm text-center'>
                    <span className='block mb-1'>{element.price_big} $</span>
                    <div>
                      <button onClick={() => handleDecrement(element.id)} className='w-5 rounded mx-1 p-1 bg-gray-500 hover:bg-gray-900 hover:text-white'>-</button>
                      <span className='mx-1'>{selectedItems[element.id] || 0}</span>
                      <button onClick={() => handleIncrement(element.id)} className='w-5 rounded mx-1 p-1 bg-gray-500 hover:bg-gray-900 hover:text-white'>+</button>
                    </div>
                  </h4>
                </div>
                {userLogged == true ? <button onClick={() =>
                  addToCart({
                    name: element.name,
                    type: 'Postres',
                    quantity: selectedItems[element.id] || 0,
                    price: selectedItems[element.id] * element.price_big,
                    img: element.image
                  })
                } className='block w-full py-2 my-3 rounded-md bg-red-500 hover:bg-red-950 duration-300 text-white'>Añadir <i class="fas fa-shopping-cart"></i></button> : ''}
              </div>
            ))}
          </div>
        </div>
      </div>


    </section>
  )
}
