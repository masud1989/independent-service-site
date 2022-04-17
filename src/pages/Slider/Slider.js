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
                    <h5>First slide label</h5>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img style={{height:'400px'}}
                    className="d-block w-100 "
                    src={slide2}
                    alt="Second slide"
                    />
                    <Carousel.Caption>
                    <h5>Second slide label</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img style={{height:'400px'}}
                    className="d-block w-100"
                    src={slide3}
                    alt="Third slide"
                    />
                    <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                <img style={{height:'400px'}}
                    className="d-block w-100"
                    src={slide1}
                    alt="Fourth slide"
                    />
                    <Carousel.Caption>
                    <h5>Third slide label</h5>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
</Carousel>
        </div>
    );
};

export default Slider;