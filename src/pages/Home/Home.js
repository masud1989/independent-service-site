import React from 'react';
import MultiCarousel from '../MultiCarousel/MultiCarousel';
import Services from '../Services/Services';
import Slider from '../Slider/Slider';
import Students from './Students/Students';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Services></Services>
            <Students></Students>
        </div>
    );
};

export default Home;