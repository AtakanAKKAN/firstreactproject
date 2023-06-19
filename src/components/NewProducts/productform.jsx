import { useState } from "react";
import "./ProductForm.css";

const ProductForm = (props) => {

    //  const [productData, setProductData] = useState({
    //      productName: "",
    //      productPrice: 0,
    //      imageUrl: "",
    //  }); 
    
    const [productName, setProductName] = useState("");
    const [productPrice, setProductPrice] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    //  const titleChangeHandler = (event) => {
    //   setProductData((prevState) => {
    //   return {...prevState, productName: event.target.value}
    
    // })}
 
    const titleChangeHandler = (event) => {setProductName(event.target.value);}
    const priceChangeHandler = (event) => {setProductPrice(event.target.value);}
    const imageChangeHandler = (event) => {setImageUrl(event.target.value);}

    const submitHandler = (event) => {
        event.preventDefault();
        const newProductData = {
            id: props.products.length +1 ,
            productName,
            productPrice,
            imageUrl,
        };

        props.setProducts((prevState) => [...prevState, newProductData])
        console.log(newProductData)
        setImageUrl("")
        setProductName("")
        setProductPrice("")
    };

    return ( 
        <form action="" className="product-form" onSubmit={submitHandler}>
            <div className="product-form-input">
                <label>Ürün Adı: {productName}</label>
                <input type="text"  placeholder="Ürün Adı Giriniz..." 
                onChange={titleChangeHandler}
                value={productName}
                />
            </div>
            <div className="product-form-input">
                <label>Ürün Fiyatı: {productPrice}₺</label>
                <input type="number"  placeholder="Ürün Fiyatı Giriniz..." 
                onChange={priceChangeHandler}
                value={productPrice}
                />
            </div>
            <div className="product-form-input">
                <label>Ürün Görseli: </label>
                <input type="text"  placeholder="Ürün Görseli Giriniz..." 
                onChange={imageChangeHandler}
                value={imageUrl}
                />
                <img src={imageUrl} alt="" className="form-img" />
            </div>
            <button className="product-form-button">Ürün Ekle</button>
            <button onClick={() => props.setIsOpen(!props.isOpen)} className="product-form-button cancel" type="button">Vazgeç</button>
        </form>
     );
}
 
export default ProductForm;