import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Menu from '../common/Menu';
import Footer from '../common/Footer';
import { EliminarReceta, obtenerRecetas } from '../../api/requestmaker';
import { Button, IconButton, Typography } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { Navigate, useNavigate } from 'react-router-dom';


const Administrador = ()=> {
    const [listaRecetas, setListaRecetas] = useState([])
    const navigate = useNavigate()
    useEffect(()=>{
        obtenerRecetas().then((respuesta)=>{
          if(respuesta){
            setListaRecetas(respuesta)
          }else {
            setOpen=(true)
          }
        })
      }, [])

        const handleEdit = (receta)=>{
            navigate(`/edit/${receta.id}`)
        }
        const handleEliminar = (receta)=>{
            EliminarReceta(receta.id)
            navigate(0)
        }
        const handleAddClick = ()=>{
            navigate('/add')
        }
  return (
    <>

    
    
    <Typography variant="h3" gutterBottom align='center' padding={'50px'}>
        Recetas
        <hr/>
      </Typography>
      <Button sx={{alignSelf:'flex-start', marginLeft:'30px'}} variant='contained' onClick={()=>handleAddClick()}>Agregar Recetas</Button>
      <Paper elevation={5} sx={{margin:'30px'}}>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align='center'>Titulo</TableCell>
            <TableCell align="center">fecha</TableCell>
            <TableCell align="center">Descripcion</TableCell>
            <TableCell align="center">Receta</TableCell>
            <TableCell align='center'>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {listaRecetas.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align='center'>
                {row.titulo}
              </TableCell>
              <TableCell align="center">{row.fecha}</TableCell>
              <TableCell align="center">{row.descripcion}</TableCell>
              <TableCell align="center">{row.receta}</TableCell>
              <TableCell align='center'>
                <div>
                    <IconButton onClick={()=> handleEdit (row)}> <Edit /> </IconButton>
                    <IconButton onClick={()=> handleEliminar (row)}> <Delete/></IconButton>
                </div>
              </TableCell>
            </TableRow>

          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Paper>
    <Footer></Footer>
    </>
  );
}

export default Administrador;
