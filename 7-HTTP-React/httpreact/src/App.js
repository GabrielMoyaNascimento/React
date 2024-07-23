import './App.css';

import { useState, useEffect} from 'react';
import { useFetch } from './hooks/useFetch';

const url = "http://localhost:3000/products"

function App() {
  const [products, setProducts] = useState([])

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  // //Getting data
  // useEffect(() => {
  //   async function fetchData() {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     setProducts(data);
      
  //   };
  //   fetchData();
  // }, []);

  //custom hook
  const {data: items, httpConfig, loading} = useFetch(url);


  //adding products
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const product = {
      name,
      price
    };

    // const res = await fetch(url,
    //   {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(product)
    //   }
    // );

    // // Dynamic loading
    // const addedProduct = await res.json();

    // setProducts((prevProducts) => [...prevProducts, addedProduct])

    //Refactoring
    httpConfig(product, "POST");

    setName("");
    setPrice("");

  };

  return (
    <div className="App">
      <h1>Products List</h1>
      {/* Loading data*/}
      {loading && <p>Loading data...</p>}
      {!loading && 
        <ul>
          {items && items.map(product => (
            <li key={product.id}>{product.name} - ${product.price}</li>
          ))} 
        </ul>
      }
      <div className="add-product">
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" value={name} name="name" onChange={(e) => setName(e.target.value)} />
          </label>
          <label>
            Price:
            <input type="number" value={price} name="price" onChange={(e) => setPrice(e.target.value)} />
          </label>
          <button type="submit">Add Product</button>
        </form>
      </div>
    </div>
  );
}

export default App;
