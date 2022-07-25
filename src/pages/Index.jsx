import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Index = () => {

  const [clients, setClients] = useState([])

  useEffect(() => { 
    const getClient = async () => {
      try {
        const url = 'https://misterypoints-crm-pjq4r6qxp36jrx-3000.githubpreview.dev/clients'
        const response = await fetch(url)
        const result = await response.json()
        setClients(result)
      } catch (error) {
        console.log(error)
      }
    }
    getClient()
  }, [])
  
 
  return (
    <div>Index</div>
  )
}

export default Index