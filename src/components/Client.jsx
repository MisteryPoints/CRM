import React from 'react'
import { useNavigate } from 'react-router-dom'

const Client = ({ client }) => {
    const navigate = useNavigate()

    const { name, business, email, tel, notes, id } = client

    return (
        <tr className=' border-b border-gray-300 hover:bg-gray-50'>
            <td className='p-3 text-center'>{name}</td>
            <td className='p-3 border-l border-gray-100 text-center'>
                <p><span className='text-gray-800 uppercase font-bold'>Email:  </span>{email}</p>
                <p><span className='text-gray-800 uppercase font-bold'>Tel:  </span>{tel}</p>
            </td>
            <td className='p-3 border-l border-gray-100 text-center'>{business}</td>
            <td className='p-3 border-l border-gray-100 text-center'>
                <button type='button' className='bg-yellow-500 hover:bg-yellow-600 block w-full text-white p-2 uppercase font-bold text-xs rounded-md'
                onClick={() => navigate(`/client/${id}`)} >Ver Cliente</button>
                <button type='button' className='bg-blue-600 hover:bg-blue-700 block w-full text-white p-2 uppercase font-bold text-xs mt-2 rounded-md'>Editar</button>
                <button type='button' className='bg-red-600 hover:bg-red-700 block w-full text-white p-2 uppercase font-bold text-xs mt-2 rounded-md'>Eliminar</button>
            </td>
        </tr>
    )
}

export default Client