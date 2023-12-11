import Header from "./components/Header"
import { Description } from "./components/Description"
import { Perfil } from "./components/Perfil"
import { ProyectLeft } from "./components/ProyectLeft"
import { ProyectRight } from "./components/ProyectRight"

// prueba con el componente proyect
import proyectImg from '../src/img/01-capturaProyect.png'
import { Stacks } from "./components/Stacks"

// 
import {tecnologias} from "./utilities/tecnologias"
import {proyectos} from "./utilities/proyectos"

function App() {

  return (
    <>
      <header>
        <Header>portfolio francisco</Header>

        <div className="m-5 md:flex">
          <Perfil />
          <Description />
        </div>

      </header>

      <main>

        <Header> my proyects</Header>
        <section className=" bg-slate-200 ">
          {
            proyectos.map( (proyecto, index) => (
              <ProyectLeft 
                key={index}
                proyecto={proyecto}
              />
            ))
          }
          {/* <ProyectLeft
            title={'Seguimiento para veterinaria'}
            description={'Mi Mi experiencia en HTML, CSS y JavaScript me permite desarrollar sitios web responsive y optimizados para diferentes dispositivos. Además, tengo experiencia trabajando con frameworks y librerías frontend como React, TailwindCss, Boostrap'}
            proyectImg={proyectImg}
          /> */}
        </section>

        <Header> Stack</Header>
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 my-5">

          {
            tecnologias.map( (lenguaje, index) => (
              <Stacks 
                key={index}
                lenguaje={lenguaje}
              />
            ))
          }
        </section>



      </main>

      <footer className="bg-slate-600 text-white">

        <div className="py-5 text-center">
          <p>Realizado por <span className="text-2xl ">Francisco Villavicencio</span> </p>
        </div>
      </footer>
    </>
  )
}

export default App
