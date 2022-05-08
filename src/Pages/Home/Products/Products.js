import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = () => {

    const [products, setProducts] = useState()
    useEffect(() => {
        axios.get('data.json')
            .then(response => {
                console.log(response.data);
                setProducts(response.data)
            })
    }, [])

    return (
        <div className='w-75 mx-auto'>
            <h1 className='text-center text-warning my-5'>Best Sellers</h1>
            <div className="row row-cols-1 row-cols-md-3 g-4 mx-auto">
                {
                    products && products.map(product => <Product key={product._id} product={product}></Product>)
                }

            </div>
        </div>
    );
};

export default Products;