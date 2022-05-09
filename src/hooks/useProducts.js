import axios from 'axios';
import { useEffect, useState } from 'react';

const useProducts = () => {
    const [products, setProducts] = useState('')
    useEffect(() => {
        axios.get('http://localhost:5000/products')
            .then(response => {
                console.log(response.data);
                setProducts(response.data)
            })
    }, [])
    return [products, setProducts]
};

export default useProducts;