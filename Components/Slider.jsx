import Carousel from 'react-bootstrap/Carousel';
import slide2 from '../public/slide2.png'
import slide3 from '../public/slide3.png'
import Image from 'next/image';


const Slider= () =>{
  return (
    <div className='slider-con'>
    <Carousel>
      <Carousel.Item>
        <Image
          className="d-block w-100 slider-img"
          src={slide3}
          alt="First slide"
          
        />
  
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100 slider-img"
          src={slide2}
          alt="Second slide"
        />

      
      </Carousel.Item>
      <Carousel.Item>
        <Image
          className="d-block w-100 slider-img"
          src={slide3}
          alt="Third slide"
        />

        <Carousel.Caption >
   
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Slider;