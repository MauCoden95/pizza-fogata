import { React, useState } from 'react'
import { Header } from '../parts-website/Header'
import { Footer } from '../parts-website/Footer'
import axios from 'axios';

export const Register = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        dni: 0,
        phone: 0,
        password: '',
        confirmPassword: '',
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password === formData.confirmPassword) {
            axios.post('http://localhost:5000/register', formData)
                .then(response => {
                    console.log('Respuesta exitosa:', response.data);
                })
                .catch(error => {
                    console.error('Error en la petición:', error);
                });
        } else {
            console.log("NO SON IGUALES");
        }

       
    };


    return (
        <div>
            <Header />
            <h1 className='text-center text-4xl my-12'>Registro</h1>
            <form
                className='w-3/6 min-h-0 m-auto'
                action=''
                method='post'
                onSubmit={handleSubmit}
            >

                <input
                    className='w-full p-2 rounded-xl mb-10'
                    type='text'
                    placeholder='Nombre...'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                />

                <input
                    className='w-full p-2 rounded-xl mb-10'
                    type='text'
                    placeholder='Correo electrónico...'
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                />

                <input
                    className='w-full p-2 rounded-xl mb-10'
                    type='text'
                    placeholder='Dirección...'
                    name='address'
                    value={formData.address}
                    onChange={handleChange}
                />

                <input
                    className='w-full p-2 rounded-xl mb-10'
                    type='text'
                    placeholder='Dni...'
                    name='dni'
                    value={formData.dni}
                    onChange={handleChange}
                />

                <input
                    className='w-full p-2 rounded-xl mb-10'
                    type='text'
                    placeholder='Teléfono...'
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                />

                <input
                    className='w-full p-2 rounded-xl mb-10'
                    type='password'
                    placeholder='Contraseña...'
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                />


                <input
                    className='w-full p-2 rounded-xl mb-10'
                    type='password'
                    placeholder='Confirmar contraseña...'
                    name='confirmPassword'
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />

                <input
                    className='w-full p-2 rounded-xl text-white mb-10 bg-red-500 hover:bg-red-800 duration-300 cursor-pointer'
                    type='submit'
                    value='Registrar'
                />
            </form>
            <Footer />



            <Footer />
        </div>
    )
}
