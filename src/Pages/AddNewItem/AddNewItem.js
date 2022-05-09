import React from 'react';
import { useForm } from 'react-hook-form';

const AddNewItem = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className='w-50 mx-auto'>
            <h1 style={{ color: 'orange' }} className='text-center my-4'>AddNewItem</h1>
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-3' placeholder='Name'  {...register("name", { required: true, maxLength: 20 })} />
                <input className='mb-3' placeholder='details' {...register("details")} />
                <input className='mb-3' type="number" placeholder='quantity' {...register("quantity")} />
                <input className='mb-3' type="number" placeholder='price' {...register("price")} />
                <input className='mb-3' type="text" placeholder='Supplier Name' {...register("supplierName")} />
                <input className='mb-3 w-25 mx-auto' type="submit" value={'Add Product'} />
            </form>
        </div>
    );
};

export default AddNewItem;