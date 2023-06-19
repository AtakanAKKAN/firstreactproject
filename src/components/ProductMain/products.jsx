import ProductItem from "./productitem";
import "./products.css";
import "./productitem.css";
import { productData } from "../../productData";
import NewProduct from "../NewProducts/newproduct";
import { useState } from "react";

const Products = () => {

  const [products, setProducts] = useState(productData);

  console.log(products)

  return (
    <div className="product-wrapper">
      <NewProduct setProducts={setProducts} products = {products} />
      <h1>Products</h1>
      <div className="products">
        {products.length === 0 ? <p>Hiç Ürün Yok.</p> : products.map((product) => (
          <ProductItem key={product.productName} product={product} setProducts={setProducts} products = {products} />
        )) }
      </div>
    </div>
  );
};

export default Products;
