import "./products.css";
import "./productitem.css";
import ProductInfo from "./productInfo";
import { useState } from "react";
import Counter from "./Counter";


const ProductItem = ({ product , products, setProducts }) => {
  const { imageUrl, productName, productPrice } = product;
  
  const [title, setTitle] = useState(productName);

  const [counter, setCounter] = useState(Number(productPrice));

  const onClickHandler = () => {
    setTitle("Güncellendi");
    setTimeout(() => {
     setTitle(productName);
    }, 2000);
  };

  const deleteHandler = () => {
    setProducts(products.filter((item) => item.id !== product.id));
  }

  return (
    <div className="product-item">
      <div className="product-image">
        <img src={imageUrl} className="img" alt="" />
      </div>

      <ProductInfo>
        <h2>{title}</h2>

        <Counter
          productPrice={productPrice}
          counter={counter}
          setCounter={setCounter}
        >
          <span>{counter}₺</span>
        </Counter>
        
        <br />
        <button onClick={onClickHandler}>Güncelle</button>
        <button className="btn-delete" onClick={deleteHandler}>Sil</button>
      </ProductInfo>
    </div>
  );
};

export default ProductItem;
