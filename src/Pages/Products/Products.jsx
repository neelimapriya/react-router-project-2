import { data } from 'autoprefixer';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCart from './ProductCart';

const Products = () => {

    const {products} =useLoaderData()
    console.log(products.products)

    // const [products,setProducts]=useState([])
    // useEffect(()=>{
    //     fetch('https://dummyjson.com/products')
    //     .then(res=>res.json())
    //     .then(data=>setProducts(data.products))
    // },[])
    // console.log(products)

    return (
        <div className='grid grid-cols-3 gap-5 p-5'>
            {products?.map(product=><ProductCart key={product.id} product={product}></ProductCart>)}
        </div>
    );
};

export default Products;