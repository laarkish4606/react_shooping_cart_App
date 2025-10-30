 import Product from "./product"
 const products=[
    {
        id:1,
        Name: "Laptop",
        urlImage:"https://images.unsplash.com/photo-1541807084-5c52b6b3adef?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387",
        price:200
    },
    {
        id:2,
        Name: "Pizza",
        urlImage: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1981",
        price:300
    },
    {
        id:3,
        Name: "Bargar",
        urlImage:"https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
        price:150
    },
    {
        id:4,
        Name: "canjeero",
        urlImage:"https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=60&w=600",
        price:130
    },
    {
        id:5,
        Name: "federesh food",
        urlImage:"https://images.unsplash.com/photo-1498837167922-ddd27525d352?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
        price:170
    },
    {
        id:6,
        Name: "Pizza",
        urlImage:"https://images.unsplash.com/photo-1467003909585-2f8a72700288?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
        price:210
    }
]

const Products =()=>{
    return (
        <div className="grid">
       { products.map(product=>
           
           <Product key={product.id} product={product}/>
           
        )}
        </div>
    )
}
export default Products