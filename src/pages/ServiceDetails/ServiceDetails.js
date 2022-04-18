import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {ServiceId} = useParams();
    return (
        <div>
            <h1>This is details of </h1>
            <h1>This is details of ID No: {ServiceId}</h1>
            <div className="text-center mt-20">
                <Link to='/checkout'>
                    <button className='btn btn-danger'>Proceed Next </button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetails;