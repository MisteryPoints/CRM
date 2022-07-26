import React from 'react'
import { useNavigate } from 'react-router-dom'

const Client = ({ client }) => {
    const navigate = useNavigate()

    const { name, business, email, tel, notes, id } = client

    return (
        <tr className=' border-b border-gray-300 hover:bg-gray-50'>
            <td className='p-3 text-center'>{name}</td>
            <td className='p-3 border-l border-gray-100 text-center '>
                <p><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="gray" color='rgb(2,0,36)' viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                <span className='text-gray-800 uppercase font-bold'>Email:  </span>{email}</p>
                <p><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" fill="gray" color='rgb(2,0,36)' viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                <span className='text-gray-800 uppercase font-bold'>Tel:  </span>{tel}</p>
            </td>
            <td className='p-3 border-l border-gray-100 text-center'>{business}</td>
            <td className='p-3 border-l border-gray-100 text-center'>
                <button type='button' className='bg-yellow-500 hover:bg-yellow-600 block w-full text-white p-2 uppercase font-bold text-xs rounded-md'
                onClick={() => navigate(`/client/${id}`)} >Ver Cliente</button>
                <button type='button' className='bg-blue-600 hover:bg-blue-700 block w-full text-white p-2 uppercase font-bold text-xs mt-2 rounded-md'
                onClick={() => navigate(`/client/edit/${id}`)}>Editar</button>
                <button type='button' className='bg-red-600 hover:bg-red-700 block w-full text-white p-2 uppercase font-bold text-xs mt-2 rounded-md'>Eliminar</button>
            </td>
        </tr>
    )
}

export default Client