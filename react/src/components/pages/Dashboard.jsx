import { React, useEffect, useState } from 'react'
import axios from 'axios'
import { format, parse } from 'date-fns'
// import esARLocale from 'date-fns/locale/es-AR'
import { useNavigate } from 'react-router-dom';
import '../../assets/css/styles.css'



export const Dashboard = () => {

    const [userNameAdmin, setUserNameAdmin] = useState('');
    const [userIdAdmin, setUserIdAdmin] = useState('');
    const [dateNow, setDate] = useState('');
    const [visible, setVisible] = useState(1);
    const [editFailed, setEditFailed] = useState('');
    const [editSuccess, setEditSuccess] = useState('');
    const [admins, setAdmins] = useState([]);
    const [create, setCreate] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const userDataStringAdmin = localStorage.getItem('userDataAdmin');



        if (userDataStringAdmin) {
            const parsedUserDataAdmin = JSON.parse(userDataStringAdmin);
            setUserNameAdmin(parsedUserDataAdmin.username);
            setUserIdAdmin(parsedUserDataAdmin.id);


        } else {
            navigate('/login-admin');
        }

        axios.get(`http://localhost:5000/admins`)
            .then(response => {
                setAdmins(response.data);

            })



        // const obtenerFechaActual = () => {
        //   const date = new Date();
        //   const dateFormat = 'EEEE dd \'de\' MMMM \'de\' yyyy';
        //   const dateFormated = format(date, dateFormat, { locale: esARLocale }); 

        //   setDate(dateFormated);
        // };

        // obtenerFechaActual();
    }, []);

    useEffect(() => {
        axios.get(`http://localhost:5000/admins`)
            .then(response => {
                setAdmins(response.data);

            })


    }, [admins]);

    const [formData, setFormData] = useState({
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };


    const handleSubmit = (e) => {
        e.preventDefault();




        if (formData.password == '' || formData.confirmPassword == '') {
            setEditFailed("Error, campos vacíos");
            setEditSuccess('');
        } else {


            if (formData.password === formData.confirmPassword) {
                axios.put(`http://localhost:5000/update-admin/${userIdAdmin}`, formData)
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


    const handleLogout = () => {
        localStorage.removeItem('userDataAdmin');
        navigate('/login-admin');
    }


    //Crear administrador
    const toggleCreate = () => {
        setCreate(!create);
    }

    const [formDataCreate, setFormDataCreate] = useState({
        username: ''
    });

    const handleChangeCreate = (e) => {
        const { name, value } = e.target;
        setFormDataCreate({ ...formDataCreate, [name]: value });
    };

    const handleSubmitCreate = (e) => {
        e.preventDefault();

      

        axios.post(`http://localhost:5000/create-admin/`, formDataCreate)
            .then(response => {
                // setEditFailed("");
                // setEditSuccess('Datos actualizados con exito!!!');
                console.log('Usuario admin creado con exito!!!');
            })
            .catch(error => {
                // setEditSuccess('');
                // setEditFailed("No se pudo editar el usuario");
                console.error('Error en la petición:', error);
            });

    };


    return (
        <div className='w-screen h-screen'>
            <header className='header-admin w-full h-[15vh] bg-white'>
                <div className='relative w-5/6 md:w-11/12 h-full m-auto flex justify-between'>
                    <img className='w-28' src="http://localhost:5173/img/Logo.png" alt="Logo" />



                    <div className='w-2/6 flex items-center justify-end text-2xl'>
                        Hola, {userNameAdmin}
                    </div>
                </div>
            </header>

            <div className='w-full h-[85vh] flex'>
                <div className='relative w-1/6 h-full bg-red-600 flex items-center justify-center'>
                    <ul className='w-full h-auto'>
                        <li onClick={() => setVisible(1)} className='w-full py-4 duration-300 text-center text-white cursor-pointer hover:bg-yellow-500 hover:text-red-500'>Inicio</li>
                        <li onClick={() => setVisible(2)} className='w-full py-4 duration-300 text-center text-white cursor-pointer hover:bg-yellow-500 hover:text-red-500'>Usuario</li>
                        <li onClick={() => setVisible(3)} className='w-full py-4 duration-300 text-center text-white cursor-pointer hover:bg-yellow-500 hover:text-red-500'>Administradores</li>
                        <li className='w-full py-4 duration-300 text-center text-white cursor-pointer hover:bg-yellow-500 hover:text-red-500'>Productos</li>
                        <li className='w-full py-4 duration-300 text-center text-white cursor-pointer hover:bg-yellow-500 hover:text-red-500'>Acerca de</li>
                    </ul>

                    <button onClick={handleLogout} className='absolute bottom-5 duration-300 text-white hover:text-yellow-500 text-4xl'><i class="fas fa-sign-out-alt"></i></button>
                </div>

                <div className={`${visible == 1 ? 'block' : 'hidden'} w-5/6 h-full`}>
                    <img className='w-96 m-auto mt-6' src="http://localhost:5173/img/Logo.png" alt="Logo" />
                    <h2 className='text-center text-4xl'>Jueves, 11 de Enero del 2024 - 12:00</h2>
                </div>

                <div className={`${visible == 2 ? 'block' : 'hidden'} w-5/6 h-full`}>
                    <h1 className='text-center text-4xl my-12'>Actualizar datos</h1>
                    <form
                        className='w-4/6 min-h-0 m-auto'
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

                </div>

                <div className={`relative ${visible == 3 ? 'block' : 'hidden'} w-5/6 h-full flex items-center justify-center`}>
                    <div className={`${create ? 'block' : 'hidden'} absolute w-full h-full form_create_admin flex items-center justify-center`}>
                        <button onClick={toggleCreate}><i className='absolute top-3 right-3 fas fa-times text-white text-6xl'></i></button>

                        <form onSubmit={handleSubmitCreate} method='post' className='w-3/6 h-auto p-7 bg-white rounded-md'>
                            <input className='w-full p-2 m-auto border-2 border-gray-700 rounded-md' type="text" placeholder='Usuario...' name="username" value={formDataCreate.username} onChange={handleChangeCreate} id="username" />
                            <input className='w-full m-auto mt-5 cursor-pointer bg-green-500 hover:bg-green-800 p-2 rounded-md' type="submit" value="Crear" />
                        </form>
                    </div>

                    <div className='absolute top-5 left-5 w-1/5 h-24 p-5 bg-red-200 rounded-md'>
                        <h3 className='text-center'>Administradores</h3>
                        <h5 className='text-center mt-2 text-2xl'>{admins.length}</h5>
                    </div>

                    <div onClick={toggleCreate} className='cursor-pointer absolute top-5 right-5 w-1/5 h-24 p-5 bg-green-200 hover:bg-green-500 rounded-md'>
                        <h3 className='text-center'>Crear administrador</h3>
                        <h5 className='text-center mt-2 text-2xl'><i className='fas fa-plus'></i></h5>
                    </div>

                    <div class="w-3/6 bg-white rounded-md">
                        <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                                <div class="overflow-hidden">
                                    <table class="min-w-full text-left text-sm font-light">
                                        <thead class="border-b font-medium dark:border-neutral-500">
                                            <tr>
                                                <th scope="col" class="px-6 py-4">#</th>
                                                <th scope="col" class="px-6 py-4 text-center">Usuario Administrador</th>
                                                <th scope="col" class="px-6 py-4 text-center">Acciones</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {admins.map((element) => (
                                                <tr class="">
                                                    <td class="whitespace-nowrap px-6 py-4 font-medium">{element.id}</td>
                                                    <td class="whitespace-nowrap px-6 py-4 text-center text-xl">{element.username}</td>
                                                    <th scope="col" class="px-6 py-4 text-center">
                                                        <button><i className='text-2xl text-red-600 hover:text-red-400 fas fa-trash'></i></button>
                                                    </th>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
