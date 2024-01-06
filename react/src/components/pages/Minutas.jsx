import React from 'react'
import { useState, useEffect } from 'react'


import { Header } from '../parts-website/Header'
import { Footer } from '../parts-website/Footer'
import { Title } from '../parts-website/Title'
import axios from 'axios'

export const Minutas = () => {

    const [minutas, setMinutas] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/minutas')
            .then(response => {
                setMinutas(response.data);
            })
            .catch(error => {
                console.error('Error al hacer la solicitud:', error);
            });
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


    return (
        <div>
            <Header />
            <Title title={title} image={img} />
            <div className='block w-full h-full'>
                <div className="w-full h-[35rem] pb-12 overflow-hidden grid gap-10 self-center justify-items-center grid-cols-3">
                    {minutas.map((element) => (
                        <div className="w-3/5 h-auto" key={element.id}>
                            <img className='w-28 m-auto object-cover' src={`http://localhost:5173/img/${element.image}`} alt="Producto" />
                            <h3 className='text-center text-2xl text-red-500 mb-1'>{element.name}</h3>
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
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    )
}
