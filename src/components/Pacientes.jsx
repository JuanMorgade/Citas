//import { useEffect } from "react"
import React from 'react'
import Swal from'sweetalert2';

const Pacientes = ({paciente, setPaciente, eliminarPaciente}) => {
  const {nombre, propietario, email, fecha, sintomas, id} = paciente
  const handleEliminar = ()=>{
    Swal.fire({
      title: 'Esta Seguro?',
      text: "No podras Revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, deseo Eliminarlo!'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminado!',
          `Los datos del Paciente: ${nombre} Cuyo Dueño es: ${propietario}.`,
          'success'
        )
        eliminarPaciente(id)
      }
    })
  }
  return (
    <div className='mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl'>
          <p className='font-bold mb-3 text-gray-700 uppercase'>
            Nombre: {''}
            <span className='font-normal normal-case'>{nombre}</span>
          </p>

          <p className='font-bold mb-3 text-gray-700 uppercase'>
            Propietario: {''}
            <span className='font-normal normal-case'>{propietario}</span>
          </p>

          <p className='font-bold mb-3 text-gray-700 uppercase'>
            Email: {''}
            <span className='font-normal normal-case'>{email}</span>
          </p>

          <p className='font-bold mb-3 text-gray-700 uppercase'>
            Fecha Alta: {''}
            <span className='font-normal normal-case'>{fecha}</span>
          </p>

          <p className='font-bold mb-3 text-gray-700 uppercase'>
            Sintomas: {''}
            <span className='font-normal normal-case'>{sintomas}</span>
          </p>

          <div className='md:flex md:justify-end md:gap-3 mt-10'>
            <button className='py-2 px-10 bg-indigo-600 hover:bg-indigo-800 text-white font-bold uppercase rounded-lg mb-2' type='button' onClick={() => setPaciente(paciente)} >
              Editar
            </button>

            <button onClick={handleEliminar} className='py-2 px-10 bg-red-600 hover:bg-red-800 text-white font-bold uppercase rounded-lg mb-2' type='button'>
              Eliminar
            </button>
          </div>
        </div>
  )
}

export default Pacientes