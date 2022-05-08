import React from 'react';
import { useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id } = product;
    const navigate = useNavigate()

    const handleUpdate = (id) => {
        navigate(`/inventory/${_id}`)
    }

    return (
        <div className="col">
            <div className="card h-100">
                <img src={product.img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.details}</p>
                    <p className="card-text">Quantity: {product.quantity}</p>
                    <p className="card-text">Price: {product.price}</p>
                    <p className="card-text">Supplier Name: {product.supplierName}</p>
                </div>
                <button onClick={(_id) => { handleUpdate() }} className='btn btn-success w-50 mx-auto mb-3'>Update</button>
            </div>
        </div >
    );
};

export default Product;