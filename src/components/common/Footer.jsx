import { Box } from "@mui/material";

const Footer = () => {
    return (
        <Box sx={{position:'initial', bottom:'20px'}}>
        <footer className="bg-dark text-light py-4 text-center  " >
        <p>&copy; Todos los derechos reservados</p>
      </footer>
      </Box>
    );
};

export default Footer;