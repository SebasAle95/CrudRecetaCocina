import React, { useEffect, useState } from 'react';
import Menu from '../common/Menu';
import Footer from '../common/Footer';
import Carrosel from './InicioComponents/Carrosel';
import MyCard from './InicioComponents/MyCard';
import { Alert, Box, Paper, Snackbar } from '@mui/material';
import { Height } from '@mui/icons-material';
import { obtenerRecetas } from '../../api/requestmaker';

//crear un metodo q se ejecute dentro del return y en la implementacion del metodo lea la base de datos 
//obtenga la lista y renderize los componentes "mycard" con las props de la lista obtenida


const Inicio = () => {
    const [listaRecetas, setListaRecetas] = useState([]);
    const [open, setOpen]= useState(false)

    useEffect(()=>{
        obtenerRecetas().then((respuesta)=>{
          if(respuesta){
            setListaRecetas(respuesta)
          }else {
            Swal.fire('ocurrio un error', 'intente realizar esta operacion en unos minutos', 'error')
          }
        })
      }, [])
      
      const handleClose = ()=>{
        setOpen(!open)
      }

        const renderizarcard = ()=>{
            return listaRecetas.map((receta)=>{
                return (
                    <MyCard key={receta.id} titulo={receta.titulo} descripcion={receta.descripcion} fecha={receta.fecha} url_img={receta.url_img} receta={receta.receta}/>
                )
            } )
        }
    return (
        <div>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Error!
            </Alert>
            </Snackbar>


            
            <Carrosel></Carrosel>
            <Paper elevation={5} sx={{display:'flex', flexDirection:'row', justifyContent:'space-between', margin:'20px', padding:'20px', height:'100%'}}>
            {renderizarcard()}

            
            </Paper>
            <Footer></Footer>
        </div>
    );
};

export default Inicio;