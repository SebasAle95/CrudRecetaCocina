import { Alert, Box, Button, Paper, Snackbar, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { crearRecetas } from '../../api/requestmaker';

const CrearReceta = () => {
    const [titulo, setTitulo] = useState ('')
    const [descripcion, setDescripcion] = useState ('')
    const [url_img, setUrl_img] = useState ('')
    const [receta, setReceta] = useState ('')
    const [fecha, setFecha] = useState ('')
    const navigate= useNavigate()
    const [open, setOpen] = useState(false)

    const onFieldChange= (field, evt)=>{
        let value = evt.target.value
        if(field==='titulo'){
            setTitulo(value);
        }
        if(field==='descripcion'){
            setDescripcion(value);
        }
        if(field==='url_img'){
            setUrl_img(value);
        }
        if(field==='receta'){
            setReceta(value);
        }
        if(field==='fecha'){
            setFecha(value);
        }
        console.log(titulo,descripcion,fecha,url_img,receta)
    }

    const onAddClick = async ()=>{
        const recetasCreada = {
            titulo,descripcion,fecha,url_img,receta
        }
        await crearRecetas(recetasCreada)
        setOpen(true)
        setTimeout(() => {
            navigate('/')
        }, 3000);
    }
    const onCancelClick=()=>{
        navigate(-1)
    }

    const handleClose = ()=> {
        setOpen(!open)
    }

    return (
        
        <>
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
        Creada la receta Exitosamente!
        </Alert>
        </Snackbar>
            <Paper>
                <Box>
                    <TextField label='titulo' placeholder='ingrese el titulo' value={titulo} onChange={(evt)=>onFieldChange('titulo', evt)}></TextField>
                    <TextField label='descripcion' placeholder='ingrese la descripcion' value={descripcion} onChange={(evt)=>onFieldChange('descripcion', evt)}></TextField>
                    <TextField label='fecha' placeholder='ingrese la fecha' value={fecha} type='date' onChange={(evt)=>onFieldChange('fecha', evt)}></TextField>
                    <TextField label='receta' placeholder='ingrese la receta' value={receta} onChange={(evt)=>onFieldChange('receta', evt)}></TextField>
                    <TextField label='url_img' placeholder='ingrese la imagen' value={url_img} onChange={(evt)=>onFieldChange('url_img', evt)}></TextField>
                </Box>
                <Box>
                    <Button sx={{}} onClick={onAddClick}>Guardar</Button>
                    <Button sx={{}} onClick={onCancelClick}>Cancelar</Button>
                </Box>
            </Paper> 
        </>
    );
};

export default CrearReceta;