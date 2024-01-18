import { React, useState } from 'react'
import { Header } from '../parts-website/Header'
import { Footer } from '../parts-website/Footer'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

export const Login = () => {

    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    const [loginError, setLoginError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleSubmit = (e) => {
        e.preventDefault();


        if (formData.email == '' || formData.password == '') {
            Swal.fire("Error, campos del formulario vacíos", "", "error");
            //setLoginError('Error, campos del formulario vacíos');
        } else {
            axios.post('http://localhost:5000/login', formData)
                .then(response => {
                    localStorage.setItem('userData', JSON.stringify(response.data[0]));
                    setLoginError('');
                    navigate('/');
                })
                .catch(error => {
                    Swal.fire("Error, usuario y/o contraseña incorrectos", "", "error");
                    //setLoginError("Error, email y/o contraseña incorrectos");
                    console.error("Error, email y/o contraseña incorrectos");
                });

        }








    };

    return (
        <div>
            <Header />
            <h1 className='text-center text-4xl my-12'>Login</h1>
            <form className='w-3/6 min-h-0 m-auto' action="" onSubmit={handleSubmit} method="post">
                {loginError == '' ? (
                    <span className='hidden w-full text-center m-auto text-white p-2 rounded-md'>{loginError}</span>
                ) : (
                    <span className='block w-full text-center m-auto text-white bg-red-500 p-2 rounded-md'>{loginError}</span>
                )

                }
                <div>
                    <input
                        className='w-full p-2 rounded-xl mt-5 mb-10'
                        type='text'
                        placeholder='Correo electrónico...'
                        name='email'
                        value={formData.email}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <input
                        className='w-full p-2 rounded-xl mb-10'
                        type='password'
                        placeholder='Contraseña...'
                        name='password'
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <input className='w-full p-2 rounded-xl text-white mb-10 bg-red-500 hover:bg-red-800 duration-300 cursor-pointer' type="submit" value='Contraseña' />
            </form>
            <Footer />
        </div>
    )
}