import React from 'react';
import Atoz from '../Atoz/Atoz';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import WhyUs from '../WhyUs/WhyUs';

const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <Products></Products>
            <Atoz></Atoz>
            <WhyUs></WhyUs>
        </div>
    );
};

export default Home;