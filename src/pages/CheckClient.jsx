import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'

const CheckClient = () => {

    const [ client, setClient ] = useState({})
    const [ charging, setCharging ] = useState(false)

    const  { id } = useParams()

    useEffect(() => {
        setCharging(!charging)
        const getClient = async () => {
            try {
                // const url = `https://misterypoints-crm-pjq4r6qxp36jrx-3000.githubpreview.dev/clients/${id}`
                const url = `http://localhost:3000/clients/${id}`
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
        <div>
            {charging ? <Spinner/> : Object.keys(client).length !== 0 ?  (
            <>
                <h1 className='font-black text-4xl text-blue-900'>Ver Cliente: {client.name}</h1>
                <p className='mt-3'>Información del cliente: </p>
                
                {client.name && (
                    <p className=' text-gray-600 text-4xl mt-10'>
                        <span className=' text-gray-800 uppercase font-bold'>Cliente: </span> {client.name}
                    </p>
                )}
                {client.email && (
                    <p className=' text-gray-600 text-2xl mt-4'>
                        <span className=' text-gray-800 uppercase font-bold'>Email: </span> {client.email}
                    </p>
                )}
                {client.tel && (
                    <p className=' text-gray-600 text-2xl mt-4'>
                        <span className=' text-gray-800 uppercase font-bold'>Teléfono: </span> {client.tel}
                    </p>
                )}
                {client.business && (
                    <p className=' text-gray-600 text-2xl mt-4'>
                        <span className=' text-gray-800 uppercase font-bold'>Empresa: </span> {client.business}
                    </p>
                )}
                {client.notes && (
                    <p className=' text-gray-600 text-2xl mt-4'>
                        <span className=' text-gray-800 uppercase font-bold'>Notas: </span> {client.notes}
                    </p>
                )}
            </>
            ) : (
                <h1 className='font-black text-4xl text-red-600'>No existe este cliente.</h1>
                ) 
            }
            
        </div> 
    )
}

export default CheckClient