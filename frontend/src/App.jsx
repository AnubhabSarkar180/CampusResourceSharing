import { useState, useEffect } from 'react'
import AddProductForm from './AddProductForm';
import NavBar from './components/Navbar';
import Searchbar from './components/Searchbar';
import Category from './components/Category';
import ItemCards from './components/ItemCards';
// import './App.css'

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
 //if (loading) return <div><h2>Loading...</h2></div>;
 //if (error) return <div><h2>Error: {error}</h2></div>;

 return(
  <div className="min-h-screen bg-slate-50 text-slate-900 roboto ">
    <NavBar/>
     <Searchbar />
     <h1 className="text-4xl font-semibold text-left m-4 p-3">Browse By Category</h1>
      <Category />
      <h1 className="text-4xl font-semibold text-left m-4 p-3">Recently Shared</h1>
      <div className="flex justify-around pb-3">
      <ItemCards />
      <ItemCards />
      <ItemCards />
      <ItemCards />
      </div>
    <AddProductForm onProductAdded={handleProductAdded} />
    <div className="text-center mt-5">
      <h2 className="text-lg font-semibold mb-2 text-center">Available Products</h2>
    </div>  
    {loading && (
      <div><h2>Loading...</h2></div>
    )}
    {error && (
      <div><h2>Error: {error}</h2></div>
    )}
    {!loading && !error && products.length ===0 && (
      <div><h2>No products available.</h2></div>
    )}
    {!loading && !error && products.length > 0 && (
      <div>
        {products.map(product => (
          <div key={product._id}>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Pric: ${product.price}</p>
            <p>Category: ${product.category}</p>
          </div>
        ))}
        </div>
    )}
  </div>
 );
  
}

export default App
