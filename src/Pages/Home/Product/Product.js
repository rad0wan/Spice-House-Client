import React from 'react';

const Product = ({ product }) => {
    console.log(product);
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
                <button className='btn btn-success w-50 mx-auto mb-3'>Update</button>
            </div>
        </div>
    );
};

export default Product;