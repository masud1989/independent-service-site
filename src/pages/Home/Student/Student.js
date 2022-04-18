import React from 'react';

const Student = ({student}) => {
    const {name, img} = student;
    return (
        <div className="col-sm-12 col-md-4 col-lg-3 mt-3 mx-3 ">
        <div class="card p-2" style={{width: "18rem"}}>
        <img style={{height:'200px'}} src={img} class="card-img-top" alt="..."/>
        <div class="card-body">
            <h5 class="card-title text-success">{name}</h5>
            <p class="card-text">Yes, He is the best Trainer</p>
            <a href="#" class="btn btn-danger">Contact </a>
        </div>
    </div>
    </div>
    );
};

export default Student;