import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TableDetails from '../TableDetails/TableDetails';

const ManageInventory = () => {

    const [products, setProducts] = useState()
    useEffect(() => {
        axios.get('http://localhost:5000/products')
            .then(response => {
                console.log(response.data);
                setProducts(response.data)
            })
    }, [])

    return (
        <div>
            <h1>ManageInventory</h1>
            <table className="table">
                {
                    products && products.map(product => <TableDetails class="table"> key={product._id} product={product}</TableDetails>)
                }

            </table>
            <div className='w-100 d-flex justify-content-center align-items-center'>
                <button className='btn btn-warning mt-5'><Link to='/'>Add New Item</Link></button>
            </div>
        </div>
    );
};

export default ManageInventory;