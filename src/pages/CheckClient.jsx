import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const CheckClient = () => {

    const [ client, setClient ] = useState({})
    const  { id } = useParams()

    useEffect(() => {
        const getClient = async () => {
            try {
                const url = `http://localhost:3000/clients/${id}`
                const response = await fetch(url)
                const result = await response.json()
                setClient(result)
            } catch (error) {
                console.log(error)
            }
        }
        getClient()
    }, [])

    return (
        <div>
            <p className=' text-gray-700 text-2xl'>
                <span className='uppercase font-bold'>Cliente: </span> {client.name}
            </p>
        </div>
    )
}

export default CheckClient