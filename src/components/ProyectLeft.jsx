import imgGithub from '../img/github.png'
import imgWebSite from '../img/website.png'


export const ProyectLeft = ({title, proyectImg, description}) => {
  return (
        <div className='md:flex items-center bg-white rounded-lg shadow-2xl mt-5 md:ml-5 p-10 '>
    
            <div className='mb-10 md:w-1/2'>
                <h1 className='font-bold text-3xl mb-5'>{title}</h1>

                <div className="shadow-lg">
                    <img 
                        src={proyectImg} 
                        alt="imagen-Proyect" 
                        className='rounded-2xl border border-black w-full h-full '
                    />
                </div>
                <div className="mt-5 flex justify-center ">

                    <img 
                        src={imgGithub} 
                        alt="imagen-Proyect" 
                        className='rounded-2xl border border-black w-10 h-10 '
                    />

                    <img 
                        src={imgWebSite} 
                        alt="imagen-Proyect" 
                        className='ml-5 rounded-2xl border border-black w-10 h-10 '
                    />
                </div>
            </div>
    
            <div className='md:w-1/2 pl-5 text-center text-gray-600 py-3 rounded-md '>
                <p>{description}</p>
            </div>

        </div>    
  )
}
