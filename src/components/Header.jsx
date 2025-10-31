import useShop from "../shopContext";
import "../Style.css";
import { Link } from "react-router-dom";
const Header=({})=>{
    const{products}=useShop()
    return(
        <div className="menu">
            <Link className="log" to="/">React App</Link>
            <div className="menu-items">
                <Link to="/">Home</Link>
                <Link to="/About">About</Link>
                <Link to="/Contact">Contact</Link>
                <Link to="/Cart">Cart</Link>
            </div>
            <Link className="cart1" to="/Cart"><span className="cart">{products.length}</span></Link>
         
           
        </div>
    )
}
export default Header;