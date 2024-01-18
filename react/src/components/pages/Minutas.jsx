import React from 'react'
import { useState, useEffect } from 'react'


import { Header } from '../parts-website/Header'
import { Footer } from '../parts-website/Footer'
import { Title } from '../parts-website/Title'
import axios from 'axios'

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

export const Minutas = () => {

    const [minutas, setMinutas] = useState([]);
    const [userLogged, setUserLogged] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:5000/minutas')
            .then(response => {
                setMinutas(response.data);
            })
            .catch(error => {
                console.error('Error al hacer la solicitud:', error);
            });


        const userDataString = localStorage.getItem('userData');

        if (userDataString) {
            const userData = JSON.parse(userDataString);
            console.log("DATOS: ", userData);
            setUserLogged(true);
        }
    }, []);

    const title = "Minutas";
    const img = "http://localhost:5173/img/Hamburguesa.png";

    const [selectedItems, setSelectedItems] = useState({});

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

        Swal.fire("Producto agregado al carrito", "", "success");
        localStorage.setItem('cart', JSON.stringify(cart));

        console.log(localStorage.getItem('cart'));
    };


    


    return (
        <div>
            <Header />
            <Title title={title} image={img} />
            <div className='block w-full h-full'>
                <div className="w-full h-[35rem] pb-12 overflow-hidden grid gap-10 self-center justify-items-center grid-cols-3">
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
            <Footer />
        </div>
    )
}
