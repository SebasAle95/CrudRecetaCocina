//llamar la variable de entorno 
const URL_usuario = import.meta.env.VITE_API_USUARIO;
const URL_recetas = import.meta.env.VITE_API_RECETAS;

/*
get devuelven una lista de elementos, puede devolver un elementos
POST PERMITE AGREGAR ELEMENTOS
PUT / PATCH  PERMITEN Modificar elementos
DELETE permiten eliminar un elementos.
*/


export const login = async (usuario)=>{
    try {
        //pedir a la api la lista de usuario
        const respuesta = await fetch(URL_usuario);
        const listaUsuario = await respuesta.json();

        //buscar si en la lista usuario existe el mail 
        const usuarioBuscado = listaUsuario.find((itemUsuario)=> itemUsuario.email === usuario.email);
        if(usuarioBuscado){
            //si encontro el mail
            if(usuarioBuscado.password === usuario.password){
                sessionStorage
                return usuarioBuscado
            }else {
                console.log('el password es incorrecto')
                return null
            }
        }else{
            //no encontro el mail
            console.log('el mail no existe')
            return null
        }
    }catch(error){
        console.log(error)
    }
}

export const obtenerRecetas = async ()=>{
    try{
        const respuesta = await fetch(URL_recetas)
        const listaRecetas = await respuesta.json();
        return listaRecetas;
    }catch (error){
        console.log(error)
    }
    
}
export const crearRecetas = async (receta)=>{
    try{
        const respuesta = await fetch(URL_recetas,{
            method:"POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(receta)
        })
        
        const recetas = await respuesta.json();
        return recetas;
    }catch (error){
        console.log(error)
    }
}
export const registrarUsuario = async (usuario)=>{
    try{
        const respuesta = await fetch(URL_usuario,{
            method:"POST",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(usuario)
        })
        
        const usuarios = await respuesta.json();
        return usuarios;
    }catch (error){
        console.log(error)
    }
}


export const EliminarReceta = async (id)=>{
    try{
        const respuesta = await fetch(`${URL_recetas}/${id}`,{
            method:"DELETE",
            
        })
        
        const recetas = await respuesta.json();
        return recetas;
    }catch (error){
        console.log(error)
    }
}
export const ObtenerRecetaById = async (id)=>{
    try{
        const respuesta = await fetch(`${URL_recetas}/${id}`)
        
        const recetas = await respuesta.json();
        return recetas;
    }catch (error){
        console.log(error)
    }
}

export const modificarRecetas = async (id,receta)=>{
    try{
        const respuesta = await fetch(`${URL_recetas}/${id}`,{
            method:"PUT",
            headers: {
                "Content-Type":"application/json"
            },
            body: JSON.stringify(receta)
        })
        
        const recetas = await respuesta.json();
        return recetas;
    }catch (error){
        console.log(error)
    }
}


