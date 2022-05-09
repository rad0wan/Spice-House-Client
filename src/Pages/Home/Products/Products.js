import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Product from '../Product/Product';

const Products = () => {

    const [products, setProducts] = useState()
    useEffect(() => {
        axios.get('http://localhost:5000/products')
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
                    products && products.slice(0, 6).map(product => <Product key={product._id} product={product}></Product>)
                }

            </div>
            <div className='w-100 d-flex justify-content-center align-items-center'>
                <button className='btn btn-warning mt-5'><Link className='text-decoration-none text-black' to='/manageInventory'>Manage Inventory</Link></button>
            </div>
        </div>
    );
};

export default Products;