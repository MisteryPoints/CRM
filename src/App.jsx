import { useState } from 'react'  
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './layout/Layout' 
import EditClient from './pages/EditClient'
import Index from './pages/Index' 
import NewClient from './pages/NewClient'


function App() { 

  return (
    <BrowserRouter>
      <Routes>  
        <Route path='/client' element={<Layout/>}>
          <Route index element={<Index/>} />
          <Route path='new' element={<NewClient/>} />
          <Route path='edit/:id' element={<EditClient/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
