"use client"

import Image from "next/image";
import Link from "next/link";

const ProductDetails= async({params})=>{
    const {id} = params;
    console.log(params);
        const data = await fetch(`https://fakestoreapi.com/products/${id}`);
        const res = await data.json();
        return(
        <div className="flex-col">
        <div className="product-info-con">
        <div>
        <h3>{res.title.slice(0,45)}</h3>
        <h3>{res.category}</h3>
        <h4>{res.price}$</h4>
        </div>

        <div>
            <Image src={res.image} width='200' height='300'/>
        </div>
        </div>

        <div>
        <Link href='/' className='card-btn mt-5 p-3 cart-btn'>Add To Cart</Link>
        </div>
    </div>
        );

      
      
}
export default ProductDetails;
