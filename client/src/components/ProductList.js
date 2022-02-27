import axios from "axios";
import React, { useState, useEffect} from "react";

const ProductList = (props) => {
    const { submissionBoolean } = props;
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/products")
        .then(response => {
            console.log(response.data);
            setProducts(response.data);
        })
        .catch(err => console.log(err));
    }, [submissionBoolean]);
    return (
    <>
        <h1>All Products</h1>
        {products.map((product, index) =>(
            <p key={index}>{product.title}</p>
        ))}
    
    </>
    );
}

export default ProductList;