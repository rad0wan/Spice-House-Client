import axios from 'axios';
import React from 'react';
import useProducts from '../../hooks/useProducts';

const TableDetails = ({ product }) => {
    const [products, setProducts] = useProducts()
    const { name, quantity, _id } = product;

    const handleDelete = (id) => {
        console.log(id);
        const proceed = window.confirm('are you sure?')
        if (proceed) {
            const url = `https://desolate-caverns-29580.herokuapp.com/inventory/${id}`
            axios.delete(url)
                .then(response => {
                    const remaining = products.filter(product => product._id !== id)
                    setProducts(remaining)
                    alert('Delete successful')
                    console.log(response, remaining);
                    console.log(products);
                })
        }
    }

    return (
        <tr>
            <th scope="row">{_id}</th>
            <td>{name}</td>
            <td>{quantity}</td>
            <td><button onClick={() => { handleDelete(_id) }} className='btn btn-danger'>Delete</button></td>
        </tr>
    );
};

export default TableDetails;