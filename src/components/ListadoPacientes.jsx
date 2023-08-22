import Paciente from "./Paciente"

const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

  return (    

    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

      {pacientes && pacientes.length ? (
        <>
          <h2 className="text-center font-black text-3xl">Desde Listado Pacientes</h2>
          <p className="mt-5 mb-10 text-xl text-center font-bold">
            Administra tus {''}
            <span className="text-indigo-600">Pacientes y Citas</span>
          </p>
    
    
          { pacientes.map( ( paciente ) => 
              <Paciente
                key={paciente.id}
                paciente={paciente}
                setPaciente={setPaciente}
                eliminarPaciente={eliminarPaciente}
              /> 
          )}
        </>
      ) : (
        <>
          <h2 className="text-center font-black text-3xl">Aún No Hay Pacientes</h2>
          <p className="mt-5 mb-10 text-xl text-center font-bold">
            Comienza agregando tus pacientes {''}
            <span className="text-indigo-600">y aparecerán aquí</span>
          </p>
        </>        
      )}      
          
    </div>
  )
}

export default ListadoPacientes