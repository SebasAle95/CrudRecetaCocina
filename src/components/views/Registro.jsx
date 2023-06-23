import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { registrarUsuario } from "../../api/requestmaker";
import { useNavigate } from "react-router-dom";




const Registro = () => {
    const [nombreUsuario, setNombreUsuario] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const { register, handleSubmit, formState: {errors}, reset} = useForm();
    const onSubmit = async ()=>{
        const usuario={nombreUsuario,email,password} 
        await registrarUsuario(usuario)
        sessionStorage.setItem('usuario', JSON.stringify(usuario))
        navigate('/administrador')
        navigate(0)
    }

    const onFieldChange= (field, evt)=>{
        let value = evt.target.value
        if(field==='nombreUsuario'){
            setNombreUsuario(value);
        }
        if(field==='email'){
            setEmail(value);
        }
        if(field==='password'){
            setPassword(value);
        }
        
    }

  return (
    <div className="mt-5 mainSection">
      <h3 className="text-center">Registro</h3>
      <div className="row justify-content-center">
        <div className="col-12 col-sm-8 col-md-6 col-xl-4">
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-2">
              <Form.Control
                type="text"
                placeholder="Ingrese un nombre de usuario" onChange={(evt)=>onFieldChange('nombreUsuario', evt)}
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Control placeholder="Ingrese un email" onChange={(evt)=>onFieldChange('email',evt)}/>
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Control type="password" placeholder="Ingrese un password" onChange={(evt)=>onFieldChange('password',evt)} />
            </Form.Group>
            <div className="row">
              <Button
                className="btn btn-dark btn-lg btn-block mb-2"
                type="submit"
              >
                Registrar
              </Button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Registro;
