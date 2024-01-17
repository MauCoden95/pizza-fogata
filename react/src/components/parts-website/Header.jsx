import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../../assets/css/styles.css'


export const Header = () => {

  const [userData, setUserData] = useState(null);
  const [showOptions, setOptions] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [cartItems, setCartItems] = useState(JSON.parse(localStorage.getItem('cart')) || []);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const userDataString = localStorage.getItem('userData');

    if (userDataString) {
      const parsedUserData = JSON.parse(userDataString);
      setUserData(parsedUserData);
      console.log("DATOS: ", parsedUserData?.name);
    }



    //Carrito
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cart);
    console.log(cart);
  }, []);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(cart);

    const totalPrice = cartItems.reduce((sum, item) => {
      return sum + item.price;
    }, 0);
    setTotalPrice(totalPrice);
  }, [cartItems])

  const handleLogout = () => {
    localStorage.removeItem('userData');
    localStorage.removeItem('cart');
    location.reload();
  }


  const toggleOptions = () => {
    setOptions(!showOptions);
  }

  const toggleNavbar = () => {
    setShowNav(!showNav);
  }

  const toggleCart = () => {
    setShowCart(!showCart);
  }



  const [totalPrice, setTotalPrice] = useState(0);



  return (
    <div className='relative'>
      <div className={`${showCart ? 'cart_show' : 'cart_hidden'} w-screen h-screen flex items-center justify-center`}>
        <button onClick={toggleCart} className='absolute top-0 right-5 text-7xl text-white'>
          <i class="fas fa-times"></i>
        </button>

        <div className='w-5/6 h-auto rounded-md bg-white flex justify-center'>
          <div className='w-3/5 min-h-0 p-8'>
            <div className='w-full pb-5 mb-12 border-b-2 border-gray-400 flex items-center justify-between'>
              <h2 className='text-3xl'>Carrito de compras</h2>
              <span className='text-xl'>{cartItems.length} Items</span>
            </div>
            {
              cartItems.length == 0 ? <h2 className='text-2xl'>No hay productos en el carrito</h2> : <table className='w-full'>
                <thead>
                  <tr>
                    <th className='text-center'>Producto</th>
                    <th className='text-center'>Tipo</th>
                    <th className='text-center'>Cantidad</th>
                    <th className='text-center'>Precio</th>
                    <th className='text-center'>Imagen</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, index) => (
                    <tr key={index}>
                      <td className='text-center'>{item.product}</td>
                      <td className='text-center'>{item.type}</td>
                      <td className='text-center'>{item.quantity}</td>
                      <td className='text-center'>{item.price}</td>
                      <td className=''><img className='w-16 m-auto' src={`http://localhost:5173/img/${item.img}`} alt="Logo" /></td>
                      <td className='text-center'><button className='fas fa-trash text-red-500 hover:text-red-800 text-3xl'></button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            }
          </div>

          <div className='w-2/5 h-full p-8 bg-gray-200'>
            <h2 className='w-full pb-5 border-b-2 border-gray-400 text-3xl'>Resumen</h2>
            <h3 className='w-full pb-5 text-base mt-6 flex justify-between'><span>Items {cartItems.length}</span> <span className='font-bold'>{totalPrice} $</span></h3>
            <h2 className='w-full pb-2 border-b-2 mt-4 border-gray-400 text-xl'>Pago</h2>
            <select className='w-full mt-5 p-2' id="metodo_pago" name="metodo_pago">
              <option value="efectivo">Efectivo</option>
              <option value="tarjeta">Tarjeta</option>
            </select>

            <div className='mt-5'>
                <i class="fab fa-cc-mastercard text-3xl"><i class="fab fa-cc-paypal text-3xl ml-2"></i><i class="fab fa-cc-amex text-3xl ml-2"></i></i><i class="fab fa-cc-visa text-3xl ml-2"></i><i class="fas fa-credit-card text-3xl ml-2"></i>
            </div>

            <h2 className='w-full pb-2 border-b-2 mt-8 border-gray-400 text-xl'>Entrega</h2>
            <select className='w-full mt-5 p-2' id="metodo_pago" name="metodo_pago">
              <option value="domicilio">A domicilio</option>
              <option value="local">En el local</option>
            </select>


            <div className='w-full mt-8 mb-5 border-t-2 border-gray-800'></div>
            <button className='w-full text-white bg-red-600 hover:bg-red-400 p-3 duration-500'>Comprar</button>
          </div>

        </div>
      </div>
      <div className="w-full h-10 bg-red-700">
        <div className='relative w-5/6 md:w-11/12 h-full m-auto text-white flex items-center justify-end'>
          {userData ? (
            <div className='w-auto flex'>
              <button onClick={toggleCart}>Mi carrito <span>({cartItems.length})</span> <i class="fas fa-shopping-cart mr-6"></i></button>
              <h2 className='text-center cursor-pointer' onClick={toggleOptions}>Bienvenido, {userData.name} <span className='fas fa-user'></span> </h2>
              {/* <a onClick={handleLogout} className='cursor-pointer hover:text-underline'>Cerrar Sesión</a> */}
              <div className={`${showOptions ? 'block' : 'hidden'}  absolute top-full right-3 w-52 h-auto duration-300 z-40 bg-white border-2 border-red-500`}>
                <Link to="http://localhost:5173/configuracion" className='block py-3 w-full duration-300 hover:bg-red-500 hover:text-white text-center text-red-600 cursor-pointer hover:text-underline'><i class="fas fa-cog"></i> Configuración</Link>
                <a onClick={handleLogout} className='block py-3 w-full duration-300 hover:bg-red-500 hover:text-white text-center text-red-600 cursor-pointer hover:text-underline'><i class="fas fa-sign-out-alt"></i> Cerrar Sesión</a>
              </div>
            </div>
          ) : (
            <div>
              <Link to="http://localhost:5173/login" className='text-sm lg:text-base mr-2 hover:underline'> Login</Link>|
              <Link to="http://localhost:5173/registro" className='text-sm lg:text-base ml-2 hover:underline'>Registro</Link>
            </div>
          )}
        </div>


      </div>
      <header className="w-full h-28 bg-orange-200">
        <div className='relative w-5/6 md:w-11/12 h-full m-auto flex justify-between'>
          <Link to="http://localhost:5173/">
            <img className='w-28' src="http://localhost:5173/img/Logo.png" alt="Logo" />
          </Link>
          <button onClick={toggleNavbar} className='block md:hidden'><i class="fas fa-pizza-slice text-4xl text-red-500"></i></button>
          <nav className='absolute top-full z-40 md:z-10 md:relative md:top-1/3  md:block w-full md:w-3/5 h-full'>
            <ul className={`${showNav ? 'nav_hidden' : 'nav_show'} w-full h-auto flex flex-col md:flex-row items-center justify-between bg-orange-200`}>
              <li className='text-red-500 px-2 py-2.5 md:py-1 rounded-md duration-300 cursor-pointer hover:text-white lg:hover:bg-red-500 text-sm lg:text-xl'><Link to="http://localhost:5173/pizzas">Pizzas</Link></li>
              <li className='text-red-500 px-2 py-2.5 md:py-1 rounded-md duration-300 cursor-pointer hover:text-white lg:hover:bg-red-500 text-sm lg:text-xl'><Link to="http://localhost:5173/empanadas">Empanadas</Link></li>
              <li className='text-red-500 px-2 py-2.5 md:py-1 rounded-md duration-300 cursor-pointer hover:text-white lg:hover:bg-red-500 text-sm lg:text-xl'><Link to="http://localhost:5173/bebidas">Bebidas</Link></li>
              <li className='text-red-500 px-2 py-2.5 md:py-1 rounded-md duration-300 cursor-pointer hover:text-white lg:hover:bg-red-500 text-sm lg:text-xl'><Link to="http://localhost:5173/minutas">Minutas</Link></li>
              <li className='text-red-500 px-2 py-2.5 md:py-1 rounded-md duration-300 cursor-pointer hover:text-white lg:hover:bg-red-500 text-sm lg:text-xl'><Link to="http://localhost:5173/postres">Postres</Link></li>
              <li className='text-red-500 px-2 py-2.5 md:py-1 rounded-md duration-300 cursor-pointer hover:text-white lg:hover:bg-red-500 text-sm lg:text-xl'><a href="#contact">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </header>




    </div>
  )
}
