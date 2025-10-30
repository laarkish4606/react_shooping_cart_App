import useShop from "../shopContext";

const CartComponents=()=>{ 
     const {products,removeFromCart,total}=useShop();
     
   return(
    <div className="card-products">
        <h1>card products</h1>
        {products.map((product)=>(
            
                  <div className="product-card">
                    <div className="product-title">
                        <img src={product.urlImage} alt="" />
                        <span>{product.Name}</span> 
                    </div>
                    <h5>${product.price}</h5>
                    <span className="delete" onClick={()=>removeFromCart(product)}>delete</span>
                </div>
               
              
            ))}
            
        <div className="total-price">
            <h5>total-price ${total}</h5>
        </div>
    </div>
   )
 
   

}
export default CartComponents;