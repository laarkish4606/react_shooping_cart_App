import CartComponents from "../components/CartComponents"
import PaymentMethod from "../components/paymentMethod"

const Cart=()=>{
   
    return (
       <div className="cart-container">
        <CartComponents/>
        <PaymentMethod />

       </div>

    )
}
export default Cart