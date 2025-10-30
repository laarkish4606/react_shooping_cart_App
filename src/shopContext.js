import { createContext, useContext,useReducer } from "react";
import shopReducer, { initialState } from "./shopReducer";

 const ShopContext=createContext(initialState);

 export const ShopProvider=({children})=>{
    const[state,dispatch]=useReducer(shopReducer,initialState)

    const addToCart=(product)=>{
    const updatedproduct=state.products.concat(product)
     calculate(updatedproduct)
        dispatch({
            type: "ADD_TO_CART",
            payload:{
                products:updatedproduct
            }
        });
        
    };

    const removeFromCart=(product)=>{
        const updatedproduct=state.products.filter(p =>p.id !==product.id)
        calculate(updatedproduct)
       dispatch({
        type:"REMOVE_FROM_CART",
        payload:{
            products:updatedproduct
        }
       })
    }
    const calculate =(products)=>{
        let total=0;
        products.forEach(prod => {
            total += prod.price
        });
        dispatch({
        type:"CALCULATE_TOTAL_PRICE",
       payload:total
    })
    }
    

    const values = {
            products:state.products,
            total:state.total,
            addToCart,
            removeFromCart
        };

        
        return<ShopContext.Provider value={values}>
            {children}
        </ShopContext.Provider>

}
const useShop = () => {
  const context = useContext(ShopContext);
  if (context === undefined) {
    throw new Error("useShop must be used within a ShopProvider");
  }
  return context;
};

export default useShop