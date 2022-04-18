import React from 'react';
import me from './../../images/me.jpg';

const About = () => {
    return (
       
            <div className="container">
	<div className="row">
		<div className="col-lg-6 col-sm-12">

            <div className="card hovercard">
                <div className="cardheader">

                </div>
                <div className="avatar">
                    <img src={me} alt=""/>
                </div>
                <div className="info">
                    <div className="title">
                        <a target="_blank" href="#">I am Md. Masud Rana</a>
                    </div>
                    <div className="title">
                        B.Sc in CSE 
                    </div>
                    <div className="desc">Professional IT Trainer</div>
                    <div className="desc">Website Designer</div>
                    <div className="desc">Website Developer</div>
                    <div className="desc">IT Consultant</div>
                </div>
                <div className="bottom">
                <a className="btn btn-info btn-sm mx-2" rel="publisher">
                       Twiter
                    </a>
                    <a className="btn btn-primary btn-sm mx-2" rel="publisher">
                       Facebook
                    </a>
                    <a className="btn btn-success btn-sm mx-2" rel="publisher">
                       Google
                    </a>
                    
                </div>
            </div>

        </div>

	</div>
</div>
        
    );
};

export default About;