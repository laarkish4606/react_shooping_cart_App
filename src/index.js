import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ShopContext } from "./shopContext";
import { ShopProvider } from "./shopContext";



const container=document.getElementById("root");
const root=createRoot(container);
root.render(
<div>
    <ShopProvider>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    </ShopProvider>
   
</div>
)