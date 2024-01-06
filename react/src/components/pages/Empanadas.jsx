import React from 'react'
import { useState, useEffect } from 'react'


import { Header } from '../parts-website/Header'
import { Footer } from '../parts-website/Footer'
import { Title } from '../parts-website/Title'
import axios from 'axios'

export const Empanadas = () => {

    const [empanadas, setEmpanadas] = useState([]);
    const [selectedItemsDozenEmpanada, setSelectedItemsDozenEmpanada] = useState({});
    const [selectedItemsUnitEmpanada, setSelectedItemsUnitEmpanada] = useState({});

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

    useEffect(() => {
        console.log("-----------------------------------------------------")
        axios.get('http://localhost:5000/empanadas')
            .then(response => {
                setEmpanadas(response.data);
            })
            .catch(error => {
                console.error('Error al hacer la solicitud:', error);
            });
    }, []);

    const title = "Empanadas";
    const img = "http://localhost:5173/img/Empanada.png";



    return (
        <div>
            <Header />
            <Title title={title} image={img} />
            <div className='block w-full h-full'>
                <div className="w-full h-[35rem] pb-12 overflow-hidden grid gap-10 self-center justify-items-center grid-cols-3">
                    {empanadas.map((element) => (
                        <div className="w-3/5 h-auto" key={element.id}>
                            <img className='w-28 m-auto object-cover' src={`http://localhost:5173/img/${element.image}`} alt="Producto" />
                            <h3 className='text-center text-2xl mb-4 text-red-500 mb-1'>{element.name}</h3>
                            <div className='w-full min-h-0 flex justify-evenly'>
                                <h4 className='text-sm text-center'>
                                    Docena: <span className='block mb-1'>{element.price_big} $</span>
                                    <div>
                                        <button onClick={() => handleDecrementDozenEmpanada(element.id)} className='w-5 rounded mx-1 p-1 bg-gray-500 hover:bg-gray-900 hover:text-white'>-</button>
                                        <span className='mx-1'>{selectedItemsDozenEmpanada[element.id] || 0}</span>
                                        <button onClick={() => handleIncrementDozenEmpanada(element.id)} className='w-5 rounded mx-1 p-1 bg-gray-500 hover:bg-gray-900 hover:text-white'>+</button>
                                    </div>
                                </h4>

                                <h4 className='text-sm text-center'>
                                    Unidad: <span className='block mb-1'>{element.price_small} $</span>
                                    <div>
                                        <button onClick={() => handleDecrementUnitEmpanada(element.id)} className='w-5 rounded mx-1 p-1 bg-gray-500 hover:bg-gray-900 hover:text-white'>-</button>
                                        <span className='mx-1'>{selectedItemsUnitEmpanada[element.id] || 0}</span>
                                        <button onClick={() => handleIncrementUnitEmpanada(element.id)} className='w-5 rounded mx-1 p-1 bg-gray-500 hover:bg-gray-900 hover:text-white'>+</button>
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
