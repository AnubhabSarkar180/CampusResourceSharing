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
    <div>
        <h2>
            Post a New Campus Resource
        </h2>
        {formError && <div style={{color: 'red'}}>Error: {formError}</div>}

        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Product Name:
                </label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required /> <br></br>
                <label>Product Price (₹):</label>
                <input type="text" name="price" value={formData.price} onChange={handleChange} required /><br></br>
                <label>Product Description:</label>
                <input type="text" name="description" value={formData.description} onChange={handleChange} /><br></br>
                <label>Category:</label>
                <input type="text" name="category" value={formData.category} onChange={handleChange} required />
            </div>
            <button type="submit" disabled={submitting}>
                {submitting ? "Adding..." : "Add Product"}
            </button>
        </form>
    </div>
);
}

export default AddProductForm;

