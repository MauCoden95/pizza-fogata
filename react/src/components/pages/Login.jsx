import { React, useState } from 'react'
import { Header } from '../parts-website/Header'
import { Footer } from '../parts-website/Footer'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export const Login = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleSubmit = (e) => {
        e.preventDefault();


        axios.post('http://localhost:5000/login', formData)
            .then(response => {
                navigate('/');
                console.log(response.data[0]);
            })
            .catch(error => {
                //console.log("LOGIN INCORRECTO");
                
                console.error('Error en la petición:', error);
            });

        axios.get('http://localhost:5000/profile', { withCredentials: true })
            .then(response => {
                console.log(response.data);
            })
            .catch(error => {
                console.error('Error:', error);
            });



    };

    return (
        <div>
            <Header />
            <h1 className='text-center text-4xl my-12'>Login</h1>
            <form className='w-3/6 min-h-0 m-auto' action="" onSubmit={handleSubmit} method="post">
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
                    type='password'
                    placeholder='Contraseña...'
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                />
                <input className='w-full p-2 rounded-xl text-white mb-10 bg-red-500 hover:bg-red-800 duration-300 cursor-pointer' type="submit" value='Contraseña' />
            </form>
            <Footer />
        </div>
    )
}
