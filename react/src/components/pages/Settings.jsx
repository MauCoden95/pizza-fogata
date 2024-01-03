import React, { useEffect, useState } from 'react'
import { Header } from '../parts-website/Header'
import { Footer } from '../parts-website/Footer'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const Settings = () => {

    const navigate = useNavigate();
    const [userData, setUserData] = useState(null);

    const [editSuccess, setEditSuccess] = useState('');
    const [editFailed, setEditFailed] = useState('');
    const [userId, setUserId] = useState('');
    const [deleteSuccess, setDeleteSuccess] = useState('');
    const [deleteFailed, setDeleteFailed] = useState('');


    const [formData, setFormData] = useState({
        address: '',
        phone: 0,
        password: '',
        confirmPassword: '',
    });

    const [formDataDelete, setFormDataDelete] = useState({
        password: '',
        confirmPassword: '',
    });

    useEffect(() => {
        const userDataString = localStorage.getItem('userData');

        if (userDataString) {
            const parsedUserData = JSON.parse(userDataString);
            setUserData(parsedUserData);
            setUserId(parsedUserData.id);
        } else {
            navigate('/');
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleSubmit = (e) => {
        e.preventDefault();




        if (formData.address == '' || formData.phone == '' || formData.password == '' || formData.confirmPassword == '') {
            setEditFailed("Error, campos vacíos");
            setEditSuccess('');
        } else {


            if (formData.password === formData.confirmPassword) {
                axios.put(`http://localhost:5000/update/${userId}`, formData)
                    .then(response => {
                        setEditFailed("");
                        setEditSuccess('Datos actualizados con exito!!!');
                        console.log('Respuesta exitosa:', response.data);
                    })
                    .catch(error => {
                        setEditSuccess('');
                        setEditFailed("No se pudo editar el usuario");
                        console.error('Error en la petición:', error);
                    });
            } else {
                setEditSuccess('');
                setEditFailed("Error, las contraseñas no coinciden");
            }

        }




    };


    const handleChangeDelete = (e) => {
        const { name, value } = e.target;
        setFormDataDelete({ ...formDataDelete, [name]: value });
    };



    const handleDelete = (e) => {
        e.preventDefault();

        if (formDataDelete.password == '' || formDataDelete.confirmPassword == '') {
            setDeleteSuccess('');
            setDeleteFailed("Error, campos vacíos");
        } else {
            if (formDataDelete.password === formDataDelete.confirmPassword) {
                console.log(formDataDelete);
                axios.delete(`http://localhost:5000/delete_user/${userId}`, formData)
                    .then(response => {
                        localStorage.removeItem('userData');
                        navigate('/');
                        console.log('Respuesta exitosa:', response.data);
                    })
                    .catch(error => {
                        setDeleteSuccess('');
                        setDeleteFailed("No se pudo editar el usuario");
                        console.error('Error en la petición:', error);
                    });
            } else {
                setDeleteSuccess('');
                setDeleteFailed("Error, las contraseñas no coinciden");
            }
        }


    };


    return (
        <div>
            <Header />
            <h1 className='text-center text-4xl my-12'>Actualizar datos</h1>
            <form
                className='w-3/6 min-h-0 m-auto'
                action=''
                method='post'
                onSubmit={handleSubmit}
            >
                {editSuccess == '' ? (
                    <span className='hidden w-full text-center m-auto text-white p-2 mb-5 rounded-md'>{editSuccess}</span>
                ) : (
                    <span className='block w-full text-center m-auto text-white mb-5 bg-green-700 p-2 rounded-md'>{editSuccess}</span>
                )
                }
                {editFailed == '' ? (
                    <span className='hidden w-full text-center m-auto text-white p-2 mb-5 rounded-md'>{editFailed}</span>
                ) : (
                    <span className='block w-full text-center m-auto text-white mb-5 bg-red-500 p-2 rounded-md'>{editFailed}</span>
                )
                }
                <input
                    className='w-full p-2 rounded-xl mb-10'
                    type='text'
                    placeholder={'Dirección...'}
                    name='address'
                    value={formData.address}
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
                    value='Actualizar'
                />
            </form>


            <h1 className='text-center text-4xl my-12'>Eliminar cuenta</h1>
            <form
                className='w-3/6 min-h-0 m-auto'
                action=''
                method='delete'
                onSubmit={handleDelete}
            >
                {deleteSuccess == '' ? (
                    <span className='hidden w-full text-center m-auto text-white p-2 mb-5 rounded-md'>{deleteSuccess}</span>
                ) : (
                    <span className='block w-full text-center m-auto text-white mb-5 bg-green-700 p-2 rounded-md'>{deleteSuccess}</span>
                )
                }
                {deleteFailed == '' ? (
                    <span className='hidden w-full text-center m-auto text-white p-2 mb-5 rounded-md'>{deleteFailed}</span>
                ) : (
                    <span className='block w-full text-center m-auto text-white mb-5 bg-red-500 p-2 rounded-md'>{deleteFailed}</span>
                )
                }

                <input
                    className='w-full p-2 rounded-xl mb-10'
                    type='password'
                    placeholder='Contraseña...'
                    name='password'
                    value={formDataDelete.password}
                    onChange={handleChangeDelete}
                />


                <input
                    className='w-full p-2 rounded-xl mb-10'
                    type='password'
                    placeholder='Confirmar contraseña...'
                    name='confirmPassword'
                    value={formDataDelete.confirmPassword}
                    onChange={handleChangeDelete}
                />

                <input
                    className='w-full p-2 rounded-xl text-white mb-10 bg-red-500 hover:bg-red-800 duration-300 cursor-pointer'
                    type='submit'
                    value='Eliminar cuenta'
                />
            </form>
            <Footer />




        </div>
    )
}
