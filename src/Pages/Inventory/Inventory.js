import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Inventory = () => {
    const [product, setProduct] = useState({})
    let quantity1 = product?.quantity;
    const [quantity, setQuantity] = useState(quantity1)
    const { id } = useParams();
    console.log(id);
    useEffect(() => {
        axios.get(`https://desolate-caverns-29580.herokuapp.com/inventory/${id}`)
            .then(response => setProduct(response.data))
    }, [])

    const handleDelivery = () => {
        let quantity = product.quantity;
        quantity = quantity - 1;
        console.log(product.quantity);
        console.log(quantity);
        setQuantity(quantity);

    }

    useEffect(() => {
        const quan = { quantity: `${quantity}` };
        axios.put(`https://desolate-caverns-29580.herokuapp.com/inventory/${id}`, quan)
            .then(response => {
                setQuantity(response.data.updatedAt)
            });

        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }, [quantity]);

    return (
        <div className="card mb-3" >
            <div className="row g-0">
                <div className="col-md-4">
                    <img src={product?.img} className="img-fluid rounded-start" alt="..." />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title">{product?.name}</h5>
                        <p className="card-text">{product?.details}</p>
                        <p className="card-text">Quantity: {quantity}</p>
                        <p className="card-text">Price: {product?.price}</p>
                        <p className="card-text">Supplier Name: {product?.supplierName}</p>
                        <button onClick={handleDelivery} className='btn btn-success'>Delivered</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Inventory;