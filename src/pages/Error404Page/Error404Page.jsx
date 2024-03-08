import './error.module.css'

function Error404Page() {

  return (
    <>
      <div className='contenedor'>
        <div className='error'>
          <div className='texto'>
            <h1>¡Ups! <br /> 
            Page not Found</h1>
            <h1> Volver</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Error404Page;
