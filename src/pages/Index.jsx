import { useEffect, useState } from 'react'
import Client from '../components/Client'
import Spinner from '../components/Spinner'

const Index = () => {

  const [clients, setClients] = useState([])
  const [ charging, setCharging ] = useState(false)

  useEffect(() => {
    setCharging(!charging)
    const getClient = async () => {
      try {
        const url = import.meta.env.VITE_API_URL
        const response = await fetch(url)
        const result = await response.json()
        setClients(result)
      } catch (error) {
        console.log(error)
      }
      setCharging(false)
    }
    getClient()
  }, [])

  const handleDelete = async id => {
    const confirmed = confirm('¿Deseas eliminar este Cliente?')
    if (confirmed) {
      try {
        const url = `${import.meta.env.VITE_API_URL}/${id}`
        const response = await fetch(url, {
          method: 'DELETE'
        })
        await response.json()
        //Peor Performance de actualizar los registros del State.
        //location.reload()
        //Mejor Performance en tiempo real y sin modificar el array original.
        const arrayClients = clients.filter( client => client.id !== id)
        setClients(arrayClients)
      } catch (error) {
        console.log(error)
      }
    }
  }
  
 
  return (
    <>
      {charging ? <Spinner/> : (
        <>
          <h1 className=' font-black text-4xl text-blue-900'>Clientes</h1>
          <p className='mt-3'>Administra tus pacientes</p>
          <table className='w-full mt-5 table-auto shadow bg-white rounded-lg'>
            <thead className='bg-blue-800 text-white'>
              <tr>
                <th className='p-2'>Nombre</th>
                <th className='p-2'>Contacto</th>
                <th className='p-2'>Empresa</th>
                <th className='p-2'>Acciones</th>
              </tr>
            </thead>
        
            <tbody>
              {clients.map( client => (
                <Client key={client.id} client={client} handleDelete={handleDelete}/>
              ))}
            </tbody>
          </table>
        </>
      )}
    </>
  )
}

export default Index