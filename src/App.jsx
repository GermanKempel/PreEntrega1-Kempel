import "./App.css";
import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import ItemListContainer from "./components/ItemListContainer";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import ItemDetailContainer from "./components/ItemDetailContainer";

function App() {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  // const [categories, setCategories] = useState([]);

  // const getCategories = () => {
  //   axios
  //     .get("https://fakestoreapi.com/products/categories")
  //     .then((response) => {
  //       setCategories(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  // useEffect(() => {
  //   getCategories();
  // }, []);

  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>

      <div>
        <Routes>
          <Route
            path="/"
            element={
              <ItemListContainer
                greeting="Bienvenido a nuestro Outlet"
                products={products}
              />
            }
          />
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route path="/item/:itemId" element={<ItemDetailContainer />} />
          <Route path="/itemDetail/:itemId" element={<ItemDetailContainer />} />
          <Route path="*" element={<h1>404: Not Found</h1>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
