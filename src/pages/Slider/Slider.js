import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import slide1 from './../../images/slider/slide1.jpg';
import slide2 from './../../images/slider/slide2.jpg';
import slide3 from './../../images/slider/slide3.jpg';

const Slider = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
    return (
        <div>
            <Carousel variant="dark">
                <Carousel.Item>
                <img style={{height:'400px'}}
                    className="d-block w-100"
                    src={slide1}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h5>I am Ready to Serve You</h5>
                    <p>Hardware Maintenance and TroubleShooting Training</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{height:'400px'}}
                    className="d-block w-100 "
                    src={slide2}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h5>Get Service from me </h5>
                    <p>Network Maintenance and TroubleShooting Training</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img style={{height:'400px'}}
                    className="d-block w-100"
                    src={slide3}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h5>Ready to Serve you</h5>
                    <p>Software and Internet use Training</p>
                    </Carousel.Caption>
                </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Slider;