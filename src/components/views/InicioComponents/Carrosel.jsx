import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel';

const Carrosel = () => {
    return (
        <div>
           <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://i.blogs.es/b82224/recetas-vuelta-oficina/1366_2000.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Recetas de cocina</h3>
          <p>Muestra una gran variedad de recetas de cocina</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cloudfront-us-east-1.images.arcpublishing.com/infobae/CCNPXH42ABDLNKAJKMXYSFIYTU.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://i.blogs.es/87930e/comidas-ricas/1366_2000.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> 
        </div>
    );
};

export default Carrosel;