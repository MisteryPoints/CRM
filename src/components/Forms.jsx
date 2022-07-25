import React from 'react'
import { Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'

const Forms = () => {

  const newClientSchema = Yup.object().shape({
    name: Yup.string().required('El nombre del cliente es Obligatorio'),
    business:'',
    email:'',
    tel:'',
    notes:''
  })


  const handleSubmit = (values) => {
      newClientSchema(values)
  }

  return (
    <div className='bg-white mt-10 px-5 py-10 rounded-xl shadow-md md:w-3/4 mx-auto'>
        <h1 className='text-gray-600 font-bold text-xl uppercase text-center'> Agregar Cliente </h1>
        
        <Formik
          initialValues={{
            name:'',
            business:'',
            email:'',
            tel:'',
            notes:''
          }}
          onSubmit={(values)  => {
            handleSubmit(values)
          }}
          validationSchema={newClientSchema}
        >

          {({errors}) => {

            return  (
          <Form>
            <div className='mb-4'>
              <label htmlFor='name' className='text-gray-800'>Nombre:</label>
              <Field type='text' id='name' className='mt-2 block w-full p-3 bg-gray-50' placeholder='Nombre del Cliente' name='name'/>
              <ErrorMessage name='name' className='bg-red-200 text-red-700 rounded-xl '/>
            </div>
            
            <div className='mb-4'>
              <label htmlFor='business' className='text-gray-800'>Empresa:</label>
              <Field type='text' id='business' className='mt-2 block w-full p-3 bg-gray-50' placeholder='Empresa del Cliente' name='business'/>
            </div>

            <div className='mb-4'>
              <label htmlFor='email' className='text-gray-800'>Email:</label>
              <Field type='email' id='email' className='mt-2 block w-full p-3 bg-gray-50' placeholder='Email del Cliente' name='email'/>
            </div>

            <div className='mb-4'>
              <label htmlFor='tel' className='text-gray-800'>Teléfono:</label>
              <Field type='tel' id='tel' className='mt-2 block w-full p-3 bg-gray-50' placeholder='Teléfono del Cliente' name='tel'/>
            </div>

            <div className='mb-4'>
              <label htmlFor='notes' className='text-gray-800'>Notas:</label>
              <Field as='textarea' type='text' id='notes' className='mt-2 block w-full p-3 bg-gray-50 h-40' placeholder='Notas del Cliente' name='notes'/>
            </div>

            <input type="submit" value='Agregar Cliente' className='mt-5 w-full bg-blue-800 p-3 text-white uppercase font-bold text-lg cursor-pointer hover:bg-blue-900 rounded-lg' />
          </Form>
          )}
            }
        </Formik>
    </div>
  )
}

export default Forms