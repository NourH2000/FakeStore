import React, { useState, useEffect, useContext } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";
import { CardContext } from "../Contexts/CardContext";
import Details from "./Details";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const globaState = useContext(CardContext);
  const basket = globaState.state;

  /* **the popup  ** */
  // Infromation
  const [prod, setProd] = useState("");
  const updateProd = (Newprod) => {
    setProd(Newprod);
    setShow(true);
  };
  // open the popup state
  const [show, setShow] = useState(false);
  const updateShow = () => {
    setShow(!show);
  };
  /* ** ** */

  const fetchProducts = async () => {
    axios({
      url: "https://fakestoreapi.com/products",
      method: "GET",
    })
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log("there is an error");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  // get all product
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className=" relative w-full h-full flex justify-center px-12 lg:px-10 xl:px-32 ">
      <div className=" w-full h-full p-2 grid  grid-cols-1  md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4   ">
        {loading ? (
          <>loading</>
        ) : (
          products.map((product) => {
            return (
              <ProductCard
                product={product}
                key={product.id}
                updateProd={updateProd}
              />
            );
          })
        )}
      </div>
      <Details show={show} prod={prod} close={updateShow} />
    </div>
  );
};

export default Products;
