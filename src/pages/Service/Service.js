import React from 'react';
import { Button, Card, CardGroup } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './Service.css'

const Service = ({service}) => {
    const {id, name, img, description, fees } = service;
    const navigate = useNavigate();

    return (
        <div className="service">
            <img src={img} alt={description}/>
            <h3>{name}</h3>
            <p>Price: {fees}</p>
            <p>{description}</p>
            <button className='btn btn-danger'>Hire Me</button>
        </div>
    );
};

export default Service;