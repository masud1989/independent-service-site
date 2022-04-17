import React from 'react';
import Services from '../Services/Services';
import Footer from '../shared/Footer/Footer';
import Header from '../shared/Header/Header';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Slider></Slider>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;