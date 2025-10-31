import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/home"
import About from "./pages/about"
import Contact from "./pages/contact"
import Cart from "./pages/cart"
import { useState } from "react";
import Footer from "./components/Footer";


const App =()=>{
    const[carts,setCarts]=useState(5)
    return (
        <div className="continer">
            <Header carts={carts}/>
        <Routes>
            
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About />}/>
            <Route path="contact" element={<Contact />}/>
            <Route path="cart" element={<Cart setCarts={setCarts} />}/>
        </Routes>
         <Footer/>
        </div>
    )
}



export default App;