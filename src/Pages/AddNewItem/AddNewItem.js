import axios from 'axios';
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../firebase.init';

const AddNewItem = () => {

    const [user, loading, error] = useAuthState(auth);
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post(`http://localhost:5000/products`, data)
            .then(response => {
                console.log(response);
                const { data } = response;
                if (data.insertedId) {
                    alert('Your product is added')
                }
            })
    };

    return (
        <div className='w-50 mx-auto'>
            <h1 style={{ color: 'orange' }} className='text-center my-4'>AddNewItem</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3' placeholder='Name'  {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-3' value={user.email} type={'email'} placeholder='email'  {...register("email")} readOnly />
                <input className='mb-3' placeholder='details' {...register("details")} />
                <input className='mb-3' type="number" placeholder='quantity' {...register("quantity")} />
                <input className='mb-3' type="number" placeholder='price' {...register("price")} />
                <input className='mb-3' type="text" placeholder='Supplier Name' {...register("supplierName")} />
                <input className='mb-3' type="text" placeholder='Photo url' {...register("img")} />
                <input className='mb-3 w-25 mx-auto btn btn-success' type="submit" value={'Add Product'} />
            </form>
        </div>
    );
};

export default AddNewItem;