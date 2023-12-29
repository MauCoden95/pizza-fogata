import React from 'react'
import { useState, useEffect } from 'react'


import { Header } from '../parts-website/Header'
import { Footer } from '../parts-website/Footer'
import { Title } from '../parts-website/Title'
import axios from 'axios'

export const Bebidas = () => {

    const [drinks, setDrinks] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/bebidas')
            .then(response => {
                setDrinks(response.data);
            })
            .catch(error => {
                console.error('Error al hacer la solicitud:', error);
            });
    }, []);

    const title = "Bebidas";
    const img = "http://localhost:5173/img/Gaseosa.png";



    return (
        <div>
            <Header />
            <Title title={title} image={img} />
            <div className='block w-full h-full'>
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
            <Footer />
        </div>
    )
}
