import React, { useEffect } from 'react'

export const Title = (props) => {


  return (
    <div className='w-full h-28 border-y-4 border-yellow-600 bg-red-500 flex items-center justify-center'>
        <h2 className='text-white text-4xl flex'>
          <img className='w-12 mr-5' src={props.image}/>
          {props.title}
          <img className='w-12 ml-5' src={props.image}/>
        </h2>
    </div>
  )
}
