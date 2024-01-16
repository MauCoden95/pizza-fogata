import { React, useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';



export const LoginAdmin = () => {

    const navigate = useNavigate();

    const [loginError, setLoginError] = useState('');

    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        

        if (formData.username == '' || formData.password == '') {
            //setLoginError('Error, campos del formulario vacíos');
            Swal.fire("Error, campos vacíos", "", "error");
            console.error("Error, campos del formulario vacíos");
        } else {
            axios.post('http://localhost:5000/login-admin', formData)
                .then(response => {
                    localStorage.setItem('userDataAdmin', JSON.stringify(response.data[0]));
                    //setLoginError('');
                    navigate('/dashboard');
                    
                })
                .catch(error => {
                    //setLoginError("Error, usuario y/o contraseña incorrectos");
                    Swal.fire("Error, usuario y/o contraseña incorrectos", "", "error");
                    console.error("Error, usuario y/o contraseña incorrectos");
                });

        }


    };




    return (
        <div className='w-screen h-screen flex items-center justify-center'>
            <div className='w-4/5 h-auto flex items-center justify-evenly'>
                <img className='w-96' src="http://localhost:5173/img/Logo.png" alt="Logo" />
                <form onSubmit={handleSubmit} className='form w-2/4 h-auto py-4 bg-orange-50 rounded-xl' action="" method="post">
                    <h1 className='text-center text-3xl my-5'>Login Administrador</h1>

                    {loginError == '' ? (
                        <span className='hidden w-full text-center m-auto text-white p-2 rounded-md'>{loginError}</span>
                    ) : (
                        <span className='block w-full text-center m-auto text-white bg-red-500 p-2 rounded-md'>{loginError}</span>
                    )

                    }
                    <input id="username" name='username' value={formData.username} onChange={handleChange} className='block w-5/6 m-auto p-2 my-3 rounded-lg' type="text" placeholder='Usuario...' />
                    <input id="password" name='password' value={formData.password} onChange={handleChange} className='block w-5/6 m-auto p-2 my-3 rounded-lg' type="password" placeholder='Contraseña' />
                    <button className='block w-5/6 m-auto bg-red-700 hover:bg-red-500 text-white p-2 my-6 rounded-lg'>Ingresar</button>
                </form>
            </div>
        </div>
    )
}
