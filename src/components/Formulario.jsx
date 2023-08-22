 import { useState, useEffect } from "react"
 import Error from "./Error";

const Formulario = ({ pacientes, setPacientes, paciente, setPaciente }) => {

  const [ nombre, setNombre ] = useState('');
  const [ propietario, setPropietario ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ fecha, setFecha ] = useState('');
  const [ sintomas, setSintomas ] = useState('');

  const [ error, setError ] = useState(false);

  useEffect(() => {
    if( Object.keys(paciente).length > 0){
      setNombre(paciente.nombre)
      setPropietario(paciente.propietario)
      setEmail(paciente.email)
      setFecha(paciente.fecha)
      setSintomas(paciente.sintomas)
    }
  }, [paciente])

  const generarId = () => {
    const fecha = Date.now().toString(36)
    const random = Math.random().toString(36).substring(2)

    return fecha + random
  }

  const handleSubmit = e => {
    e.preventDefault()

    //Valida el formulario
    if( [ nombre, propietario, email, fecha, sintomas ].includes('') ) {
      setError(true);
      return
    } 

    setError(false);

    //Crea el objeto de paciente
    const objetoPaciente = {
      nombre, 
      propietario, 
      email, 
      fecha, 
      sintomas,
    }

    if(paciente.id) {
      // 'Editando'
      objetoPaciente.id = paciente.id
      const pacientesActualizados = pacientes.map( pacienteState => pacienteState.id === paciente.id ? objetoPaciente : pacienteState)

      setPacientes(pacientesActualizados)
      setPaciente({})

    } else {
      ///Agrega el objeto paciente a el arreglo de pacientes
      objetoPaciente.id = generarId()
      setPacientes([ ...pacientes, objetoPaciente ])
    }   

    //Resetea el formulario
    setNombre('')
    setPropietario('')
    setEmail('')
    setFecha('')
    setSintomas('')
  }

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-center text-3xl">
        Seguimiento Pacientes
      </h2>
      <p className="font-bold text-center text-xl mt-5 mb-10">
        Agrega Pacientes y {""}
        <span className="text-indigo-600">Administralos</span>
      </p>

      <form 
          onSubmit={handleSubmit}
          className="bg-white py-10 px-5 shadow-md rounded-md mb-10">   

          { error && <Error><p>Todos los campos son obligatorios</p></Error> } 
              
        <div className="mb-5">
          <label 
            className="text-gray-700 block uppercase font-bold"
            htmlFor="mascota">
              Nombre Mascota
            </label>
          <input 
            id="mascota"
            type="text"
            placeholder="Nombre de la mascota"  
            className="w-full placeholder-gray-400 border-2 p-2 mt-2 rounded-md"
            value={nombre}
            onChange={ e => {setNombre(e.target.value)}}
          />
        </div>

        <div className="mb-5">
          <label 
            className="text-gray-700 block uppercase font-bold"
            htmlFor="propietario">
              Nombre Propietario
            </label>
          <input 
            id="propietario"
            type="text"
            placeholder="Nombre del Propietario"  
            className="w-full placeholder-gray-400 border-2 p-2 mt-2 rounded-md"
            value={propietario}
            onChange={ e => {setPropietario(e.target.value)}}
          />
        </div>

        <div className="mb-5">
          <label 
            className="text-gray-700 block uppercase font-bold"
            htmlFor="email">
              Email
            </label>
          <input 
            id="email"
            type="email"
            placeholder="Email contacto del propietario"  
            className="w-full placeholder-gray-400 border-2 p-2 mt-2 rounded-md"
            value={email}
            onChange={ e => {setEmail(e.target.value)}}
          />
        </div>

        <div className="mb-5">
          <label 
            className="text-gray-700 block uppercase font-bold"
            htmlFor="alta">
              Fecha de Alta
            </label>
          <input 
            id="alta"
            type="date"
            className="w-full placeholder-gray-400 border-2 p-2 mt-2 rounded-md"
            value={fecha}
            onChange={ e => {setFecha(e.target.value)}}
          />
        </div>

        <div className="mb-5">
          <label 
            className="text-gray-700 block uppercase font-bold"
            htmlFor="sintomas">
              Síntomas
            </label>
            <textarea 
              id="sintomas"
              placeholder="Describe los síntomas"
              className="w-full placeholder-gray-400 border-2 p-2 mt-2 rounded-md"
              value={sintomas}
              onChange={ e => {setSintomas(e.target.value)}}
            />        
        </div>

        <input 
          type="submit"
          className="text-white uppercase bg-indigo-600 hover:bg-indigo-800 cursor-pointer transition-all font-bold w-full p-3 rounded-md" 
          value={ paciente.id ? "Guardar Cambios" : "Agregar Paciente"}
        />
      </form>
    </div>
  )
}

export default Formulario