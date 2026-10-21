import { useEffect, useState } from "react";
import { collection,getDocs,addDoc,doc,updateDoc,deleteDoc } from "firebase/firestore";
import app from "./firebase";
import { getFirestore } from "firebase/firestore";


const db = getFirestore(app);

function Clothing(){

    const [search,setSearch] = useState("");
    const [category,setCategory] = useState("All");

    const [loading,setLoading] = useState(true);
    const [error,setError] = useState("");
    const [saveError,setSaveError] = useState("");
    const [saving,setSaving] = useState(false);

    const [product,setProduct] = useState(()=>{
        const saveProduct = localStorage.getItem("products")

         return saveProduct? JSON.parse(saveProduct)
            :
            [{
                id:1,
                img:"https://www.mrporter.com/variants/images/1647597313248143/in/w2000_q60.jpg",
                name:"Som",
                category:"hoodie"
            }]
        }
    )

    const [editing,setEditing] = useState(false);
    const [currentProduct,setCurrentProduct] = useState({
        id:null,
        img:'',
        name:'',
        category:"other",
    })

    useEffect(()=>{
        localStorage.setItem("products",JSON.stringify(product));
    },[product])

    useEffect(()=>{
        
        const getProducts = async () =>{
        try {
            
            setLoading(true);
            setError("");

            const quarySnapshot = await getDocs(
                collection(db,"products")
            ) ; 

            const productsData = quarySnapshot.docs.map((doc)=>({
                id: doc.id,
                img: doc.data().Image,
                name: doc.data().Name,
                category: (doc.data().Category || "Other").trim().toLowerCase()
            }));
            setProduct(productsData);
        
        } catch (error) {
            console.error(error);
            setError("Fail to load products.")
        }finally{
            setLoading(false);
        }
        };
        
        getProducts();
    },[db]);

    const handleAdd=()=>{
        setCurrentProduct({id:null,img:'',name:'',category:"other"});
        setEditing(true);
    }

    const handleSave= async()=>{
        setSaveError("");
        

        if(!currentProduct.img || !currentProduct.name.trim()){
            setSaveError("Please enter product image and name.");
            return;
        }

        try {
            setSaving(true);
            if(currentProduct.id === null){
            const newProduct = {
                
                Image: currentProduct.img,
                Name: currentProduct.name,
                Category: currentProduct.category
            };

            const docRef = await addDoc(
                collection(db,"products"),
                newProduct
            );

            setProduct(prev=>[{
                id:docRef.id,
                img:currentProduct.img,
                name:currentProduct.name,
                category:currentProduct.category
            },
            ...prev
        ]);
        }
        else {
           const productRef = doc(
            db,
            "products",
            currentProduct.id
           );

           await updateDoc(productRef,{
            Image:currentProduct.img,
            Name:currentProduct.name,
            Category:currentProduct.category
           }); 

           setProduct(prev=>
            prev.map(p=>
                p.id === currentProduct.id ?
                {
                    id:currentProduct.id,
                    img: currentProduct.img,
                    name: currentProduct.name,
                    category: currentProduct.category
                }: p
            )
           )

        }
        setEditing(false)
        } catch (error) {
            console.error(error);
            setSaveError("Fail to save product.");
        }
        finally{
            setSaving(false);
        }
        
    };

    const handleDelete=async(id)=>{
        if(!window.confirm("Are u sure to remove this product?")){
          return;
        }

        try {
            const productRef = doc(db,"products",id);

            await deleteDoc(productRef);

            setProduct(prev=> prev.filter(p=> p.id !== id ))
        } catch (error) {
            console.error(error);
            alert("Fail to delete product.");
        }
    }

    const handleEdit=(p)=>{
        setCurrentProduct({...p,
            category:p.category || "Other"        });
        setEditing(true);
    }

    const filterProduct = product.filter((p)=>
        {const matchSearch = p.name
        .toLowerCase()
        .includes(search.toLowerCase());

        const matchCategory =
            category === "All" || p.category === category ;

            return matchSearch && matchCategory;
        }
    ) ;

    return(
        <div className="min-h-screen bg-white px-5 py-10 sm:px-8 lg:px-12 ">

            <header className="mx-auto max-w-7xl border-b border-neutral-200 pb-8">
                <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between ">
                    <div>
                        <p className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-500 ">
                            CURATED ESSENTIALS
                        </p>
                        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-950 sm:text-5xl">
                            CLOTHING STUDIO 
                        </h1>
                        <p className="mt-2 text-sm text-neutral-500 ">
                            Modern essential . Timeless style .
                        </p>
                    </div>

                    <input type="text" onChange={(e)=>setSearch(e.target.value)} value={search} placeholder="Search" className="w-full max-w-xs  rounded-xl  border p-3 mb-4"/>

                    {!editing && (
                    
                        <button onClick={()=>handleAdd()} className="rounded-full bg-neutral-950 text-sm px-6 py-3 font-medium text-white transition hover:bg-neutral-700 ">+ Add Product</button>
                    
                    )}
                </div>
            </header>

            <div className="mx-auto mt-8 flex  max-w-7xl items-center gap-4">

                <span className="text-xs font-medium uppercase tracking-widest text-neutral-500 ">
                    Filter
                </span>

                <select value={category} onChange={(e)=>setCategory(e.target.value)} className="rounded-full  max-w-xs border border-neutral-300 bg-white  px-5 py-3 text-sm outline-none transition focus:border-neutral-950">
                    <option value="All">All Category</option>
                    <option value="shirt">Shirt</option>
                    <option value="hoodie">Hoodie</option>
                    <option value="tshirt">T-shirt</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <div>
                
                {!editing? 
                (
                    <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {loading?
                        (
                            <div className="col-span-full p-10 text-center">
                                loading products...
                            </div>
                        )
                        :error?(
                            <div className="col-span-full rounded-2xl border border-red-200 bg-red-50 p-8 text-center">
                                <p className="font-medium text-red-700">
                                    Unable to load products
                                </p>
                                <p className="mt-2 text-sm text-red-600">
                                    {error}
                                </p>
                                <p className="mt-3 text-xs text-red-500">
                                    Please check your connection and try again.
                                </p>
                            </div>
                        ):

                        filterProduct.length=== 0?
                                (
                                   <div className="col-span-full rounded-2xl border border-dashed border-neutral-300 px-6 py-20 text-center">
                                        <p className="text-lg font-medium text-neutral-950">
                                            No products found
                                        </p>
                                        <p className="mt-2 text-sm text-neutral-500">
                                            Try another search or category.
                                        </p>
                                        <button
                                            onClick={() => {
                                                setSearch("");
                                                setCategory("All");
                                            }}
                                            className="mt-5 rounded-full border border-neutral-300 px-5 py-2 text-sm font-medium transition hover:bg-neutral-100"
                                        >
                                            Clear filters
                                        </button>
                                    </div>
                                )
                                :
                                (
                                    <>
                                    
                                        {filterProduct.map((p)=>(
                                            <div key={p.id} className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white  transition duration-300 hover:-translate-y-1 hover:border-neutral-400 hover:shadow-xl ">
                                                
                                                {p.img && (
                                                    <div className="overflow-hidden bg-neutral-100">
                                                        <img src={p.img} alt={p.name} className="h-72 w-full object-cover transition duration-500 group-hover:scale-105" />
                                                    </div>
                                                )}


                                                <div className="p-5">
                                                    <p className="text-xs font-medium uppercase tracking-[0.2em] text-neutral-500">
                                                        {p.category}
                                                    </p>
                                                    <h3 className="mt-2 text-lg font-medium tracking-tight text-neutral-950">{p.name}</h3>

                                                    <div className="mt-4 flex gap-3">
                                                    <button onClick={()=>handleEdit(p)} className="flex-1 rounded-lg border border-neutral-300 px-4 py-2 text-sm font-medium transition hover:bg-neutral-100">Edit</button>
                                                    <button onClick={()=>handleDelete(p.id)} className="flex-1 rounded-lg bg-neutral-950 px-4 py-2 text-sm font-medium text-white transition hover:bg-neutral-700">Delete</button>
                                                </div>
                                                </div>
                                            </div>
                                        )
                                    )}
                                   
                                    </>
                                )}

                    
                    </div>
                )
                :
                (
                    <div className="mx-auto mt-10 max-w-xl rounded-3xl border border-neutral-200 bg-white p-6 shadow-sm sm:p-10">
                        <div className="mb-8">
                            <p className="text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
                                CLOTHING STUDIO
                            </p>

                            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-neutral-950">
                                {currentProduct.id ? "Edit Product" : "Add Product"}
                            </h2>

                            <p className="mt-2 text-sm text-neutral-500">
                                Update your collection with care.
                            </p>
                        </div>
                        
                        <div>
                            {saveError && (
                                <p className="mt-3 text-sm text-red-600 ">
                                    {saveError}
                                </p>
                            )}
                            <input type="text" placeholder="paste image url" value={currentProduct.img} onChange={(e)=>setCurrentProduct({...currentProduct,img:e.target.value})} className="mt-2 w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-neutral-400 focus:border-neutral-950 focus:ring-1 focus:ring-neutral-950"/>
                            <input type="text" placeholder="Enter Product Name" value={currentProduct.name} onChange={(e)=> setCurrentProduct({...currentProduct,name:e.target.value})} className="mt-2 w-full rounded-xl border border-neutral-300 bg-white px-4 py-3 text-sm outline-none transition placeholder:text-neutral-400 focus:border-neutral-950 focus:ring-1 focus:ring-neutral-950"/>
                            <select value={currentProduct.category} onChange={(e)=>setCurrentProduct({...currentProduct,category:e.target.value})} className="mt-2 w-full rounded-lg border border-gray-300 px-4 py-3">
                                <option value="shirt">Shirt</option>
                                <option value="hoodie">Hoodie</option>
                                <option value="tshirt">T-shirt</option>
                                <option value="other">other</option>
                            </select>
                        </div>
                        <div className="mt-6 flex gap-3">
                            <button onClick={handleSave} disabled={saving} className="flex-1 rounded-full bg-neutral-950 px-4 py-3 text-sm font-medium text-white transition hover:bg-neutral-700 disabled:cursor-not-allowed disabled:opacity-50">{saving? "Saving...": "Save"}</button>
                            <button onClick={()=>setEditing(false)} className="flex-1 rounded-full border border-neutral-300 px-4 py-3 text-sm font-medium text-neutral-950 transition hover:bg-neutral-100">Cancel</button>
                        </div>
                    </div>
                )
                 
                }
            </div>
        </div>
    )
}
export default Clothing;