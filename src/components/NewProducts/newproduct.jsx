import { useState } from "react";
import ProductForm from "./productform";
import AddProduct from "./AddProduct";

const NewProduct = (props) => {
    
    const [isOpen, setIsOpen] = useState(false);

    return ( 
        <div className="new-product-wrapper">
            {isOpen ? <ProductForm setIsOpen ={setIsOpen} isOpen={isOpen} setProducts={props.setProducts} products = {props.products} /> : <AddProduct setIsOpen ={setIsOpen} isOpen={isOpen} /> }
        </div>
     );
}
 
export default NewProduct;