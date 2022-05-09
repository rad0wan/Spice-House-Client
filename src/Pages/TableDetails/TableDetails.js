import axios from 'axios';
import React from 'react';

const TableDetails = ({ product }) => {
    const { name, quantity, _id } = product;

    const handleDelete = (id) => {
        const proceed = window.confirm('are you sure?')
        if (proceed) {
            const url = `http://localhost:3000/inventory/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
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