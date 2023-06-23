import { Refresh } from '@mui/icons-material';
import { Box, Breadcrumbs, Button, Link } from '@mui/material';
import { light } from '@mui/material/styles/createPalette';
import { Breadcrumb, Container, NavLink } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';



    const Menu = ({usuarioLogueado, setUsuarioLogueado}) => {
        const navegacion = useNavigate();
      
        const logout = ()=>{
          sessionStorage.removeItem('usuario');
          
          
          navegacion('/')
          navegacion(0)
          
        }
        console.log(usuarioLogueado)

    return (
    <>
    
    <Box sx={{backgroundColor:'#0091ea', padding:'20px', display:'flex', justifyContent: 'space-between'}}>
        <Breadcrumbs>
        <Link underline='none' color="inherit" href='/' sx={{color:'white'}}>Recetas De Cocina RollingCode</Link>

        </Breadcrumbs>
        <Breadcrumbs>
        <Link underline='hover' color="inherit" href='/' sx={{color:'white'}}>Inicio</Link>
        {(!usuarioLogueado.nombreUsuario)?<Link underline='hover' color="inherit" href='/login' sx={{color:'white'}}>Login</Link>: null}
        {(!usuarioLogueado.nombreUsuario)?
        <Link underline='hover' color="inherit" href='/registro' sx={{color:'white'}}>Registro</Link>: null}
        {(usuarioLogueado.nombreUsuario)?
        <Link underline='hover' color="inherit" href='/administrador' sx={{color:'white'}}>Administrador</Link>
        : null}
        {(usuarioLogueado.nombreUsuario)?
        <Button onClick={()=>logout()} variant='contained' color='warning'>Logout</Button>:null}

        </Breadcrumbs>
        
    </Box>
    </>
    );
};

export default Menu;