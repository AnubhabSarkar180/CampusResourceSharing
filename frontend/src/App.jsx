import { useState, useEffect } from 'react'
import AddProductForm from './AddProductForm';
import './App.css'

function App() {
 const [products, setProducts] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);

 useEffect(() => {
  async function fetchProducts(){
    try{
      const response = await fetch('http://localhost:3000/api/products');
      if(!response.ok)
      {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    }catch(err){
    console.error("Error fetching products:", err);
    setError(err.message);
    setLoading(false);
    
  }
  }
 fetchProducts();
 }, []);

 const handleProductAdded = (newProduct) => {
  setProducts((prevProducts) => [newProduct, ...prevProducts]);
 }
 if (loading) return <div><h2>Loading...</h2></div>;
 if (error) return <div><h2>Error: {error}</h2></div>;

 return(
  <div>
    <h1>
      Campus Resource Portal
    </h1>
    <AddProductForm onProductAdded={handleProductAdded} />
    {products.length === 0 ? (<h2>
      No Products Found
    </h2>): (
        <div>
          {products.map(product => (
            <div>
              <h3>{product.title || product.name}</h3>
              <p>
                <strong>Price:</strong> ₹{product.price}
              </p>
              <p>Product Description: {product.description}</p>
              {product.category && <small>Category: {product.category}</small>}
             </div>
          ))}

        </div>
    )}
  </div>
 );
  
}

export default App
