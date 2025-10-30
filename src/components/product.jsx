
import { useEffect, useState } from "react";
import useShop from "../shopContext";

const Product =({product})=>{
    const [isIncart,setIsIncart]=useState()
   const{addToCart,removeFromCart,products}=useShop();
   
   useEffect(()=>{
    const isIncart=products.filter(pro=> pro.id==product.id);
    if(isIncart.length >0){
        setIsIncart(true)
    }else{
        setIsIncart(false)
    }
  

   },[products])


   //evenhanadling of cliking cart button
    const addtocarHandaler=()=>{
        if(isIncart ){
            removeFromCart(product)
        }else{
            addToCart(product)
        }
        // console.log(products);
    }
    //displaying products
    
    return (
        <div className="card" style={{
            minHeight:"100%",
            background:`linear-gradient(rgba(0,0,0,0.1),rgba(0,0,0,0.1)),url(${product.urlImage})`,
            backgroundSize:"cover",
            backgroundRepeat:"no-repeat"
        }}>
            <div className="info">
                <span>{product.Name}</span>
                <span>${product.price}</span>
            </div>
            <button className={`btn ${isIncart ? "btn-secondary":"btn-primary"}`} 
            onClick={addtocarHandaler}>
                {isIncart ? "-":"+"}
                </button>
        </div>
    )
}
export default Product