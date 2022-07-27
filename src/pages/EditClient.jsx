import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Forms from '../components/Forms'
import Spinner from '../components/Spinner'

const EditClient = () => {
  
  const [ client, setClient ] = useState({})
  const [ charging, setCharging ] = useState(false)

  const  { id } = useParams()

  useEffect(() => {
      setCharging(true)
      const getClient = async () => {
          try {
              const url = `${import.meta.env.VITE_API_URL}/${id}`
              const response = await fetch(url)
              const result = await response.json()
              setClient(result)
          } catch (error) {
              console.log(error)
          }
        setCharging(false)
      }
      getClient()
  }, [])


  return (
    <>
      {charging ?  <Spinner/> : (
        <>
          {client?.name ? (
            <>
              <h1 className='font-black text-4xl text-blue-900'>Editar Cliente</h1>
              <p className='mt-3'>Llena los siguientes campos para editar los datos del cliente</p>
              
              <Forms client={client}/>
            </>
          ) : (<p className='font-bold text-2xl text-red-600'>ID del Cliente no valido</p>)}
        </>
      )}
    </>
  )
}

export default EditClient