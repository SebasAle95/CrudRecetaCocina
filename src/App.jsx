import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './components/common/Footer'
import Menu from './components/common/Menu'
import Inicio from './components/views/Inicio'
import CrearReceta from './components/views/CrearReceta'
import Administrador from './components/views/Administrador'
import EditarReceta from './components/views/EditarReceta'
import Login from './components/views/Login'
import { useState } from 'react'
import Registro from './components/views/Registro'


function App() {
 
  const usuario = JSON.parse(sessionStorage.getItem('usuario')) || {}
  const [usuarioLogueado, SetUsuarioLogueado] = useState({});

  return (
    <>
    <BrowserRouter>
    <Menu usuarioLogueado={usuario} SetUsuarioLogueado={SetUsuarioLogueado}></Menu>
      <Routes>
        <Route path='/'Component={Inicio}/>
        <Route path='/add'Component={CrearReceta}/>
        <Route path='/administrador'Component={Administrador}/>
        <Route path='/edit/:id' Component={EditarReceta}/>
        <Route path='/login' element={<Login setUsuarioLogueado={SetUsuarioLogueado}></Login>}/>
        <Route path='/registro' Component={Registro}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
