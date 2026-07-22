import { useState,useEffect } from "react";

function Inventory({user}){

    const [product,setProduct] = useState([
        {id:1,name:"T-Shirt",price: 30000,quantity:7,totalPri:210000},
    ]);
    const [isEditing,setIsEditing] = useState(false);
    const [currentProduct,setCurrentProduct] = useState({id:null,name: '',price:'',quantity:''});

    const isAdmin = user?.role?.toLowerCase() === "admin";
    //const isAdmin = true;

    const handleAdd= ()=>{
        if(!isAdmin)return;
        setCurrentProduct({id:null,name:'',price:'',quantity:''});
        setIsEditing(true);
    };

    const handleSave= ()=>{
        if(!isAdmin)return;
        if(!currentProduct.name || !currentProduct.price || !currentProduct.quantity){
            alert("Please fill all Data!");
            return;
        }

        const totalPrice = currentProduct.price * currentProduct.quantity;

        if(currentProduct.id === null){
            const newProduct = {
                id:Date.now(),
                ...currentProduct,
                totalPri : totalPrice
            };
            setProduct([...product,newProduct]);
        }
        else
        {
            setProduct(product.map(p=>p.id === currentProduct.id? {...currentProduct,totalPri}: p));
        }
        setIsEditing(false);
    };

    const handleEdit=(product)=>{
        if(!isAdmin)return;
        setCurrentProduct(product);
        setIsEditing(true);
    }

    const handleDelete=(id)=>{
        if(!isAdmin)return;
        if(window.confirm("Are U Sure to Delete!")){
            setProduct(product.filter(p=>p.id !=id));
        }
    }

    return(
        <div style={{ color: "#ffffff", padding: "10px" }}>
            <h2 style={{ textAlign: "center" }}>Inventory</h2>

            {isEditing && isAdmin && (
                <div style={{ border: "1px solid #555", padding: "15px", marginBottom: "20px", borderRadius: "5px", background: "#222" }}>
                    <h3 style={{ marginTop: 0 }}>{currentProduct.id?"Edit":"Add New"}</h3>
                    <input type="text" placeholder="name" value={currentProduct.name} onChange={(e)=>setCurrentProduct({...currentProduct,name:e.target.value})}/>
                    <input type="number" placeholder="price" value={currentProduct.price} onChange={(e)=>setCurrentProduct({...currentProduct,price:parseInt(e.target.value)})}/>
                    <input type="number" placeholder="quantity" value={currentProduct.quantity} onChange={(e)=>setCurrentProduct({...currentProduct,quantity:parseInt(e.target.value)  })}/>
                    <button onClick={handleSave} style={{ padding: "5px 10px", background: "#4CAF50", color: "white", border: "none", cursor: "pointer", marginRight: "5px" }}>save</button>
                    <button onClick={()=>{setIsEditing(false)}} style={{ padding: "5px 10px", background: "#f44336", color: "white", border: "none", cursor: "pointer" }}>cancel</button>
                </div>
            )}

            {isAdmin && (
                <button onClick={handleAdd} style={{ marginBottom: "15px", padding: "8px 15px", background: "#008CBA", color: "white", border: "none", cursor: "pointer", borderRadius: "4px" }}>Add +</button>
            )}

            <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "10px", border: "1px solid #444" }}>
                <thead>
                    <tr style={{ background: "#222", textAlign: "left" }}>
                        <th style={{ padding: "12px", border: "1px solid #444" }}>Id</th>
                        <th style={{ padding: "12px", border: "1px solid #444" }}>Name</th>
                        <th style={{ padding: "12px", border: "1px solid #444" }}>Price</th>
                        <th style={{ padding: "12px", border: "1px solid #444" }}>Quantity</th>
                        <th style={{ padding: "12px", border: "1px solid #444" }}>Total</th>

                        {isAdmin && <th style={{ padding: "12px", border: "1px solid #444" }}>Action</th>}
                    </tr>
                </thead>
                <tbody>
                    {product.map((product)=>(
                        <tr key={product.id}>
                                <td style={{ padding: "12px", border: "1px solid #444" }}>{product.id}</td>
                                <td style={{ padding: "12px", border: "1px solid #444" }}>{product.name}</td>
                                <td style={{ padding: "12px", border: "1px solid #444" }}>{product.price.toLocaleString()}</td>
                                <td style={{ padding: "12px", border: "1px solid #444" }}>{product.quantity}</td>
                                <td style={{ padding: "12px", border: "1px solid #444" }}>{product.totalPri.toLocaleString()}</td>

                                {isAdmin && (
                                    <td style={{ padding: "12px", border: "1px solid #444" }}>
                                        <button onClick={()=>handleEdit(product)}>Update</button>
                                        <button onClick={()=>handleDelete(product.id)}>Delete</button>
                                    </td>
                                )}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Inventory;