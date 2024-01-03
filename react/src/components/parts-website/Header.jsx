import { React, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';


export const Header = () => {

  const [userData, setUserData] = useState(null);
  const [showOptions, setOptions] = useState(false);

  useEffect(() => {
    const userDataString = localStorage.getItem('userData');

    if (userDataString) {
      const parsedUserData = JSON.parse(userDataString);
      setUserData(parsedUserData);
      console.log("DATOS: ", parsedUserData?.name);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('userData');
    location.reload();
  }


  const toggleOptions = () => {
    setOptions(!showOptions);
  }


  return (
    <div>
      <div className="w-full h-10 bg-red-700">
        <div className='relative w-11/12 h-full m-auto text-white flex items-center justify-end'>
          {userData ? (
            <div className='w-auto flex'>
              <h3>Mi carrito <span>(0)</span> <i class="fas fa-shopping-cart mr-6"></i></h3>
              <h2 className='text-center cursor-pointer' onClick={toggleOptions}>Bienvenido, {userData.name} <span className='fas fa-user'></span> </h2>
              {/* <a onClick={handleLogout} className='cursor-pointer hover:text-underline'>Cerrar Sesión</a> */}
              <div className={`${showOptions ? 'block' : 'hidden'}  absolute top-full right-3 w-52 h-auto duration-300 z-40 bg-white border-2 border-red-500`}>
                <Link to="http://localhost:5173/configuracion" className='block py-3 w-full duration-300 hover:bg-red-500 hover:text-white text-center text-red-600 cursor-pointer hover:text-underline'><i class="fas fa-cog"></i> Configuración</Link>
                <a onClick={handleLogout} className='block py-3 w-full duration-300 hover:bg-red-500 hover:text-white text-center text-red-600 cursor-pointer hover:text-underline'><i class="fas fa-sign-out-alt"></i> Cerrar Sesión</a>
              </div>
            </div>
          ) : (
            <div>
              <Link to="http://localhost:5173/login" className='mr-2 hover:underline'> Login</Link>|
              <Link to="http://localhost:5173/registro" className='ml-2 hover:underline'>Registro</Link>
            </div>
          )}
        </div>


      </div>
      <header className="w-full h-28 bg-orange-200">
        <div className='w-11/12 h-full m-auto flex justify-between'>
          <Link to="http://localhost:5173/">
            <img className='w-28' src="http://localhost:5173/img/Logo.png" alt="Logo" />
          </Link>
          <nav className='w-3/5 h-full'>
            <ul className='w-full h-full flex items-center justify-between'>
              <li className='text-red-500 px-2 py-1 rounded-md duration-300 cursor-pointer hover:text-white hover:bg-red-500 text-xl'><Link to="http://localhost:5173/pizzas">Pizzas</Link></li>
              <li className='text-red-500 px-2 py-1 rounded-md duration-300 cursor-pointer hover:text-white hover:bg-red-500 text-xl'><Link to="http://localhost:5173/empanadas">Empanadas</Link></li>
              <li className='text-red-500 px-2 py-1 rounded-md duration-300 cursor-pointer hover:text-white hover:bg-red-500 text-xl'><Link to="http://localhost:5173/bebidas">Bebidas</Link></li>
              <li className='text-red-500 px-2 py-1 rounded-md duration-300 cursor-pointer hover:text-white hover:bg-red-500 text-xl'><Link to="http://localhost:5173/minutas">Minutas</Link></li>
              <li className='text-red-500 px-2 py-1 rounded-md duration-300 cursor-pointer hover:text-white hover:bg-red-500 text-xl'><Link to="http://localhost:5173/postres">Postres</Link></li>
              <li className='text-red-500 px-2 py-1 rounded-md duration-300 cursor-pointer hover:text-white hover:bg-red-500 text-xl'><a href="#contact">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  )
}
