import axios from 'axios';
import { useEffect, useState } from 'react';

const useProducts = () => {
    const [products, setProducts] = useState('')
    useEffect(() => {
        axios.get('https://desolate-caverns-29580.herokuapp.com/products')
            .then(response => {
                console.log(response.data);
                setProducts(response.data)
            })
    }, [])
    return [products, setProducts]
};

export default useProducts;