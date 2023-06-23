import React from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import { Footer } from "../../components/footer";
import "./shop.css";
import Newsletter from "../../components/newsletter";


export const Shop = () => {
  return (
   
    <div className="shop">
    
<div >
<img  width="100%" height="700"   src="https://res.cloudinary.com/dgmrua3dm/image/upload/v1687010115/banner_dnqrqg.jpg" />
</div>

      <div className="shopTitle">
        <h1>Optimize Tech Shop</h1>
        <h4>Latests Products</h4>
      </div>

      <div className="products">
        {PRODUCTS.map((product) => (
          <Product data={product} />
        ))}
      </div>
     <Newsletter/>
<Footer/>
    </div> 
  );
};
