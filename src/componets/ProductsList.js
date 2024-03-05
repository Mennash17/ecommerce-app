import React, { useEffect, useState } from "react";
import Product from "./Product";

function ProductsList() {

    const api_url = "https://fakestoreapi.com/products";
    let [products, setProduct] = useState([])
  let [categories, setcategories] = useState([]);
  

  const  get_all_products_from_api = () => {
      fetch(api_url)
        .then((response) => response.json())
        .then((data) => setProduct(data));
  }
   
  const get_categories_from_api = () => {
    fetch(`${api_url}/categories`)
      .then((res) => res.json())
      .then((data) => setcategories(data));  
    
  }
  useEffect(() => {

      get_all_products_from_api()
      get_categories_from_api()
    }, [])
  
  const get_category_of_products = (category_name) => {
    
      fetch(`${api_url}/category/${category_name}`)
        .then((res) => res.json())
        .then((data) => setProduct(data));
    }
  
  return (
    <>
      <h2 className="text-center p-5">our products</h2>

      <div className="container">
        <button className="btn btn-primary" onClick={()=>{get_all_products_from_api()}}>
          All
        </button>
      {categories.map(category => {
        return (
          <button
            className="btn btn-primary"
            style={{"margin" : "0px 20px"}}
            key={category}
            onClick={() => {
              get_category_of_products(category);
            }}
          >
            {" "}
            {category}{" "}
          </button>
        );
      })}
              <div className="row">
                  
                  {products.map(product => {
                      return (
                        <div className="col-4" key={product.id}>
                          <Product product={product} showBtn={true} />
                        </div>
                      );
                    } )}
        </div>
      </div>
    </>
  );
}

export default ProductsList;
