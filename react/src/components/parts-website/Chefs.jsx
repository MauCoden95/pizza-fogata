import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

export const Chefs = () => {
    return (
        <section className='w-full min-h-0 mb-40 mt-20'>
            <div className='w-11/12 min-h-0 m-auto'>
                <h2 className='text-center text-red-500 text-4xl my-14'>Nuestros cocineros</h2>
                <div className='w-full flex flex-col sm:flex-row justify-evenly'>
                    <div className='w-5/6 sm:w-2/5 h-full m-auto'>
                        <p className='text-justify'>
                            Sumérgete en el mundo de Pizza Fogata y conoce a nuestros talentosos cocineros. Cada uno aporta su pasión única, combinando habilidad artesanal y amor por la autenticidad. Descubre las historias detrás de cada pizza, donde la tradición se fusiona con la innovación en manos de estos maestros culinarios excepcionales.
                        </p>

                        <p className='text-justify mt-12'>
                            Te presentamos a los artífices detrás de cada obra maestra de Pizza Fogata. Desde expertos en masas perfectamente fermentadas hasta creadores de combinaciones audaces, cada chef comparte la misma dedicación por ofrecer experiencias gastronómicas inolvidables.
                        </p>
                    </div>

                    <div className='w-full mt-10 md:mt-0 sm:w-2/5 h-full'>
                        <Swiper
                            slidesPerView={1}
                            pagination={{
                                clickable: true,
                            }}
                            modules={[Pagination]}
                            className="mySwiper w-full"
                        >
                            <SwiperSlide>
                                <h3 className='text-center text-2xl'>Luciana Gómez</h3>
                                <img className='w-4/6 m-auto mb-5' src="http://localhost:5173/img/Luciana.png" alt="Cocinera" />
                                <div className='w-3/6 m-auto mb-10 flex justify-between'>
                                    <a href=""><i class="fab fa-facebook duration-300 text-3xl text-gray-500 hover:text-red-500"></i></a>
                                    <a href=""><i class="fab fa-linkedin duration-300 text-3xl text-gray-500 hover:text-red-500"></i></a>
                                    <a href=""><i class="fab fa-twitter-square duration-300 text-3xl text-gray-500 hover:text-red-500"></i></a>
                                    <a href=""><i class="fab fa-instagram-square duration-300 text-3xl text-gray-500 hover:text-red-500"></i></a>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <h3 className='text-center text-2xl'>Enrique Adamel</h3>
                                <img className='w-4/6 m-auto mb-5' src="http://localhost:5173/img/Enrique.png" alt="Cocinero" />
                                <div className='w-3/6 m-auto mb-10 flex justify-between'>
                                    <a href=""><i class="fab fa-facebook duration-300 text-3xl text-gray-500 hover:text-red-500"></i></a>
                                    <a href=""><i class="fab fa-linkedin duration-300 text-3xl text-gray-500 hover:text-red-500"></i></a>
                                    <a href=""><i class="fab fa-twitter-square duration-300 text-3xl text-gray-500 hover:text-red-500"></i></a>
                                    <a href=""><i class="fab fa-instagram-square duration-300 text-3xl text-gray-500 hover:text-red-500"></i></a>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <h3 className='text-center text-2xl'>Fernando Suarez</h3>
                                <img className='w-4/6 m-auto mb-5' src="http://localhost:5173/img/Fernando.png" alt="Cocinero" />
                                <div className='w-3/6 m-auto mb-10 flex justify-between'>
                                    <a href=""><i class="fab fa-facebook duration-300 text-3xl text-gray-500 hover:text-red-500"></i></a>
                                    <a href=""><i class="fab fa-linkedin duration-300 text-3xl text-gray-500 hover:text-red-500"></i></a>
                                    <a href=""><i class="fab fa-twitter-square duration-300 text-3xl text-gray-500 hover:text-red-500"></i></a>
                                    <a href=""><i class="fab fa-instagram-square duration-300 text-3xl text-gray-500 hover:text-red-500"></i></a>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <h3 className='text-center text-2xl'>Lautaro García</h3>
                                <img className='w-4/6 m-auto mb-5' src="http://localhost:5173/img/Lautaro.png" alt="Cocinero" />
                                <div className='w-3/6 m-auto mb-10 flex justify-between'>
                                    <a href=""><i class="fab fa-facebook duration-300 text-3xl text-gray-500 hover:text-red-500"></i></a>
                                    <a href=""><i class="fab fa-linkedin duration-300 text-3xl text-gray-500 hover:text-red-500"></i></a>
                                    <a href=""><i class="fab fa-twitter-square duration-300 text-3xl text-gray-500 hover:text-red-500"></i></a>
                                    <a href=""><i class="fab fa-instagram-square duration-300 text-3xl text-gray-500 hover:text-red-500"></i></a>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <h3 className='text-center text-2xl'>Octavio Álvarez</h3>
                                <img className='w-4/6 m-auto mb-5' src="http://localhost:5173/img/Octavio.png" alt="Cocinero" />
                                <div className='w-3/6 m-auto mb-10 flex justify-between'>
                                    <a href=""><i class="fab fa-facebook duration-300 text-3xl text-gray-500 hover:text-red-500"></i></a>
                                    <a href=""><i class="fab fa-linkedin duration-300 text-3xl text-gray-500 hover:text-red-500"></i></a>
                                    <a href=""><i class="fab fa-twitter-square duration-300 text-3xl text-gray-500 hover:text-red-500"></i></a>
                                    <a href=""><i class="fab fa-instagram-square duration-300 text-3xl text-gray-500 hover:text-red-500"></i></a>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>

                </div>


            </div>
        </section>
    )
}
