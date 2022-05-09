import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }
    return (
        <div>
            <Carousel activeIndex={index} onSelect={handleSelect}>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.shopify.com/s/files/1/0148/1945/9126/files/Floral_Desktop_x550.jpg?v=1651525801"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>MAKE YOUR COOKING BLOSSOM</h3>
                        <p>Essential Spring
                            Floral Flavors</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.shopify.com/s/files/1/0148/1945/9126/files/Spices_A-Z_Optimized_1296x.png?v=1573168212"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3> Green Pea Falafel</h3>
                        <p>A unique take on a classic Middle Eastern falafel! </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.shopify.com/s/files/1/0564/3904/6331/files/spring-savings_banner_1200x560_crop_center.jpg?v=1651347794"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Cooking made simple</h3>
                        <p>
                            With Spice 'n Easy, cooking is as simple as 1, 2, 3!
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Banner;