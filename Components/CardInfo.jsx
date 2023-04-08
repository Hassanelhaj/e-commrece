import { Add } from '@/redux/Slices/CartSlice';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import CartBtns from './CartBtns';


const CardInfo = ({data,cart})=>{
  const despach = useDispatch();
  const AddIteam = (iteam)=>{
    despach(Add(iteam));
    console.log('buying');


  }
 
    return (
        <Card className='card-con' >
        <Link href ={`/${data.id}`}>
        
          <Card.Img variant="top" src={data.image} className='poster'/>
          </Link>

          <Card.Body className='card-info'>
          <center>
        <Link href ={`/${data.id}`}>

            <h4>{data.title.slice(0,20)}</h4>
            {/* <Card.Text> */}
    
            <h4> {data.category}</h4>
            <h5> {data.price}$</h5>
          </Link>


            {/* </Card.Text> */}
          {cart == true ? <CartBtns/>:
          <Button className='card-btn' onClick={()=>{AddIteam(data)}}>Add To Cart</Button>
          
          }
            </center>
          </Card.Body>
   
        </Card>
      );

}
export default CardInfo;