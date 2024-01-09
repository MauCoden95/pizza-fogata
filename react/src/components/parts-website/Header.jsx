import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import '../../assets/css/styles.css'


export const Header = () => {

  const [userData, setUserData] = useState(null);
  const [showOptions, setOptions] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [cartItems, setCartItems] = useState([]);

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

  const handleLogout = () => {
    localStorage.removeItem('userData');
    location.reload();
  }


  const toggleOptions = () => {
    setOptions(!showOptions);
  }

  const toggleNavbar = () => {
    setShowNav(!showNav);
  }

  return (
    <div>
      <div className="w-full h-10 bg-red-700">
        <div className='relative w-5/6 md:w-11/12 h-full m-auto text-white flex items-center justify-end'>
          {userData ? (
            <div className='w-auto flex'>
              <h3>Mi carrito <span>({cartItems.length})</span> <i class="fas fa-shopping-cart mr-6"></i></h3>
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
            <ul className={`${ showNav ? 'nav_hidden' : 'nav_show'} w-full h-auto flex flex-col md:flex-row items-center justify-between bg-orange-200`}>
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
