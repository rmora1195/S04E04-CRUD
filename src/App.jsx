
import { useEffect, useState } from 'react'
import useFetch from './hooks/useFetch'
import Layout from './layouts/Layout'
import AddEdit from './components/AddEdit'
import UserList from './components/UserList'
import Modal from './components/Modal'
import './generalStyles/header.css'


const baseUrl = 'https://users-crud-api-81io.onrender.com/api/v1';


function App (){
  const [users, setUsers, loading ] = useFetch()
  const [isOpen, setIsOpen] = useState(false)
  const [currentChild, setCurrentChild] = useState(null)
  
  useEffect(()=>{
    readUsers()
  },[])

 
 
 //Create user
  const createUser = (dataForm)=>{
    setUsers({
      url: `${baseUrl}/users`,
      method: 'POST',
      body: dataForm
  })
  setIsOpen(false)
}

  //read all users
  const readUsers = ()=>{
    setUsers({url: `${baseUrl}/users` })
  }

  //updateUsers

  const updateUser = (dataForm, userId) =>{
    setUsers({
      url:`${baseUrl}/users/${userId}`,
      method:'PATCH',
      body: dataForm,

    })
    setIsOpen(false)
  }

  const deleteUser = (userId) => {
    setUsers({
      url:`${baseUrl}/users/${userId}`,
      method: 'DELETE',
    })
  }

    //handlerOpenModal  
    const openAdd = ()  => {

        setIsOpen(true)
        setCurrentChild(<AddEdit onSave={createUser}/>)

}

const openEdit = (user) => {
  setIsOpen(true)
  setCurrentChild(<AddEdit user={user} onSave={updateUser} />)
}



   return(
    <Layout>
      <header className='header'>
        <div className='header__container'>
          <h1 className='header__title'>Usuarios</h1>
          
          <div className='header__button'>
          <button className='header__button' type='button' onClick={openAdd}>Agregar Usuario</button>
          </div>
          </div>
          </header>

          
           
          
          

          < main className='container'>
            {
              loading ? (
                <h2>Cargando...</h2>
              ) : (
                <UserList users={users} openEdit={openEdit} 
                deleteUser= {deleteUser}
                />
                  
                )}

          </main>
      
          <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
          
          {currentChild}
          
          </Modal>
      </Layout>
  )

}

export default App 