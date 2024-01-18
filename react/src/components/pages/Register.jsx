import { React, useState } from 'react'
import { Header } from '../parts-website/Header'
import { Footer } from '../parts-website/Footer'
import axios from 'axios';

import Swal from 'sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

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

    const [registerSuccess, setRegisterSuccess] = useState('');
    const [registerFailed, setRegisterFailed] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleSubmit = (e) => {
        e.preventDefault();


        if (formData.name == '' || formData.address == '' || formData.email == '' || formData.dni == '' || formData.phone == '' || formData.password == '' || formData.confirmPassword == '') {
            // setRegisterFailed("Error, campos vacíos");
            // setRegisterSuccess('');
            Swal.fire("Error, campos vacíos", "", "error");
        }else{
            if(formData.password.length < 8 || formData.confirmPassword.length < 8) {
                // setRegisterSuccess('');
                // setRegisterFailed("Error, las contraseñas no pueden tener menos de 8 caracteres");
                Swal.fire("Error, las contraseñas no pueden tener menos de 8 caracteres", "", "error");
            }else{
                if (formData.password === formData.confirmPassword) {
                    axios.post('http://localhost:5000/register', formData)
                        .then(response => {
                            // setRegisterFailed("");
                            // setRegisterSuccess('Nuevo usuario registrado con exito!!!');
                            Swal.fire("Nuevo usuario registrado con exito!!!", "", "success");
                            console.log('Respuesta exitosa:', response.data);
                        })
                        .catch(error => {
                            // setRegisterSuccess('');
                            // setRegisterFailed("No se pudo registrar el usuario");
                            Swal.fire("No se pudo registrar el usuario", "", "error");
                            console.error('Error en la petición:', error);
                        });
                } else {
                    Swal.fire("Error, las contraseñas no coinciden", "", "error");
                    //setRegisterFailed("Error, las contraseñas no coinciden");
                }
            }
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
                {registerSuccess == '' ? (
                    <span className='hidden w-full text-center m-auto text-white p-2 mb-5 rounded-md'>{registerSuccess}</span>
                ) : (
                    <span className='block w-full text-center m-auto text-white mb-5 bg-green-700 p-2 rounded-md'>{registerSuccess}</span>
                )
                }
                {registerFailed == '' ? (
                    <span className='hidden w-full text-center m-auto text-white p-2 mb-5 rounded-md'>{registerFailed}</span>
                ) : (
                    <span className='block w-full text-center m-auto text-white mb-5 bg-red-500 p-2 rounded-md'>{registerFailed}</span>
                )
                }
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
