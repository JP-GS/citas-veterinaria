
const Paciente = ({paciente, setPaciente, eliminarPaciente}) => {

  const { nombre, propietario, email, fecha, sintomas, id } = paciente

  const handleEliminar = () => {
    const respuesta = confirm('¿Realmente, deseas eliminar el paciente?')

    if(respuesta) {
      eliminarPaciente(id)
    }
  }
  return (
    <div className="bg-white shadow-md rounded-md mx-5 my-10 px-5 py-10">
        <p className="font-bold uppercase mb-3">
          Nombre: {''}
            <span className="font-normal normal-case">{nombre}</span>
        </p>

        <p className="font-bold uppercase mb-3">
          Propietario: {''}
            <span className="font-normal normal-case">{propietario}</span>
        </p>

        <p className="font-bold uppercase mb-3">
          Email: {''}
            <span className="font-normal normal-case">{email}</span>
        </p>

        <p className="font-bold uppercase mb-3">
          Fecha Alta: {''}
            <span className="font-normal normal-case">{fecha}</span>
        </p>

        <p className="font-bold uppercase mb-3">
          Síntomas: {''}
            <span className="font-normal normal-case">{sintomas}</span>
        </p>

        <div className="flex justify-between mt-10">
            <button
              type="button"
              className="uppercase font-bold text-white bg-indigo-600 hover:bg-indigo-700 rounded-md py-3 px-10"
              onClick={() => {setPaciente(paciente)}}
            >Editar</button>

            <button
              type="button"
              className="uppercase font-bold text-white bg-red-600 hover:bg-red-700 rounded-md py-3 px-10"
              onClick={handleEliminar}
            >Eliminar</button>
        </div>
      </div>
  )
}

export default Paciente