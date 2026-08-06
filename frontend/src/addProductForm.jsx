import { useState } from "react";

function AddProductForm({onProductAdded}) {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    description: "",
    category: "",
  });
const [submitting ,setSubmitting] = useState(false);
const [formError , setFormError] = useState(null);

const handleChange = (e) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });
}

const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setFormError(null);
    try{
        const response = await fetch('http://localhost:3000/api/products',{
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({...formData, price : Number(formData.price)})
        });

        if(!response.ok)
        {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const newProduct = await response.json();
        if (typeof onProductAdded === 'function') {
            onProductAdded(newProduct);
        } else {
            console.error("onProductAdded prop was not passed as a function to AddProductForm");
        }
        setFormData({name: '', price: '', description: '', category: ''});
    }catch(err){
        console.error("Error adding product:", err);
        setFormError(err.message);
    }finally{
        setSubmitting(false);
    }
};

return(
    <div >
        <div className=" text-center max-w-lg mx-auto mt-5 p-2 border border-slate-200 rounded-xl hover:shadow-sm transition-shadow duration-300ms cursor-pointer bg-white">
        <h2 className="text-lg font-semibold mb-2 text-center">
            Post a New Campus Resource
        </h2>
        {formError && <div style={{color: 'red'}}>Error: {formError}</div>}

        <form onSubmit={handleSubmit}>
            <div>
                <label className= "font-medium text-gray-700 p-1.5">
                    Product Name: 
                </label>
                <input className="border-2 border-slate-700 rounded  px-4" type="text" name="name" value={formData.name} onChange={handleChange} required /> <br></br>
                <label className="font-medium text-gray-700 p-1.5">Product Price (₹): </label>
                <input className="border-2 border-slate-700 rounded  px-4" type="text" name="price" value={formData.price} onChange={handleChange} required /><br></br>
                <label className="font-medium text-gray-700 p-1.5">Product Description:</label>
                <input className="border-2 border-slate-700 rounded  px-4" type="text" name="description" value={formData.description} onChange={handleChange} /><br></br>
                <label className="font-medium text-gray-800 p-1.5">Category:</label>
                <input className="border-2 border-slate-700 rounded  px-4" type="text" name="category" value={formData.category} onChange={handleChange} required />
            </div>
            <button className="font-medium  text-white p-2 m-4 rounded-lg bg-indigo-500 hover:shadow-md hover:brightness-110 hover:cursor-pointer" type="submit" disabled={submitting}>
                {submitting ? "Adding..." : "Add Product"}
            </button>
        </form>
        </div>
    </div>
);
}

export default AddProductForm;

