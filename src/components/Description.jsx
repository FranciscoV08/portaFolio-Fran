import React from 'react'

export const Description = () => {
  return (
    <div className=' flex flex-col bg-white rounded-lg shadow-2xl mt-5 md:ml-5 p-10 md:w-2/4'>

        <div className='mb-10 '>
            <h1 className='font-bold text-3xl mb-5'>Frontend Developer React</h1>
            <p className='mb-5'>Mi Mi experiencia en HTML, CSS y JavaScript me permite desarrollar sitios web responsive y optimizados para diferentes dispositivos. Además, tengo experiencia trabajando con frameworks y librerías frontend como  React, TailwindCss, Boostrap</p>
        </div>

        <div className='w-2/3 bg-gray-700 text-center text-white py-3 rounded-md cursor-pointer '>
            <button>Conectar</button>
        </div>
    </div>
  ) 
}
