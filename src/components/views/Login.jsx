
import { Form, Button, Container, Card } from "react-bootstrap";
import { login } from "../../api/requestmaker"; 
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


const Login = ({setUsuarioLogueado}) => {

  const { register, handleSubmit, formState: {errors}, reset} = useForm();
  const navigate = useNavigate()

  

  const onSubmit = (usuario)=>{
    login(usuario).then((respuesta)=>{
      console.log(respuesta)
      if(respuesta){
        //guardar el usuario en session o localstorage.
        sessionStorage.setItem('usuario', JSON.stringify(respuesta))
        navigate('/administrador')
        setUsuarioLogueado(respuesta);
      }else{
        //mostrar un msj de error

      }
    })
  }

  return (
    <Container className="mainSection">
      <Card className="my-5">
        <Card.Header as="h5">Login</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Ingrese un email"
               { ...register('email',{
                required: 'El mail es un dato obligatorio'
               })}
              />
             <Form.Text className="text-danger">
              {errors.email?.message}
             </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                {
                  ...register('password',{
                    required: 'El password es un dato obligatorio'
                  })
                }
               
              />
            
            </Form.Group>
            <Button variant="primary" type="submit">
              Ingresar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Login;


