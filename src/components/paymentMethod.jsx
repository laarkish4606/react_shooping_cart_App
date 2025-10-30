import { useState } from "react"

const PaymentMethod=()=>{
    //initial statements for selecting one of paymen method
    const initialPaymen= {
        EBirr:false,
        ESahal:false,
        EKaafi:false
    }
    

    const [PaymentMethod,setPaymentMethod]=useState(false)
    
   return(
     <div className="hh">
        <h1>pay with</h1>
        <div className="payment-cards">
        <div className={`payment-card ${PaymentMethod.EBirr && "selected"}`} onClick={()=>setPaymentMethod({...initialPaymen,EBirr:true})}>  
                <h3>E-Birr</h3>
        </div>
        <div className={`payment-card ${PaymentMethod.ESahal && "selected"}`} onClick={()=>setPaymentMethod({...initialPaymen,ESahal:true})}>
           
                <h3>E-Sahal</h3>
           
        </div>
        <div className={`payment-card ${PaymentMethod.EKaafi && "selected"}`}onClick={()=>setPaymentMethod({...initialPaymen,EKaafi:true})}>
           
                <h3>E-Kaafi</h3>
          
        </div>
        <form>
            <input type="text" placeholder="+2519...." className="number" />
           
        </form>
         <button className="bt">proceed</button>
        </div>
        
    </div>
   )
}
export default PaymentMethod