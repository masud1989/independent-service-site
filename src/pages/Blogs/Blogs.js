import React from 'react';

const Blogs = () => {
    return (
        <div className='container mx-auto'>
            <h1 className='bg-light text-danger text-center mt-10'>Questions and Answers</h1>
            <div className="bg-light mt-5 text-justify">
                <h3 className='text-success fw-bold text-left'>Q-1: Difference between authorization and authentication?</h3>
                <p className='text-justify'> 
                Ans: It is very Simply put, authentication is the process of verifying who someone is, whereas authorization is the process of verifying what specific applications, files, and data a user has access to. The situation is like that of an airline that needs to determine which people can come on board. For example, the process of verifying and confirming employees ID and passwords in an organization is called authentication, but determining which employee has access to which floor is called authorization. Let's say you are traveling and you're about to board a flight.
                </p>
                <h3 className='text-success fw-bold text-left'>Q-2: Why are you using firebase?</h3>
                <p className='text-justify'> 
                Ans: The Firebase Realtime Database lets you build rich, collaborative applications by allowing secure access to the database directly from client-side code. Data is persisted locally, and even while offline, realtime events continue to fire, giving the end user a responsive experience. Having an app for your business is becoming more important, especially depending on your industry. The fact is that many users like to know that they can gain access to everything they need to interact with your business on a mobile app rather than having to use a mobile page on their smartphone or tablet.

If you have designed a business app, or are looking to design one, then Google’s Firebase is absolutely essential, and in our opinion as a marketing agency, the best out there
                </p>
                <h3 className='text-success fw-bold text-left'>Q-3: What other services does firebase provide other than authentication?</h3>
                <h3 className='text-justify'> 
                Ans: There are many services which Firebase provides than authentication, Most useful of them are as bellow:

                </h3>
                <h4>1. Cloud Firestore</h4>
                <h4>2. CCloud Functions</h4>
                <h4>3. Hosting</h4>
                <h4>4. Cloud Storage</h4>
                <h4>5. Google Analytics</h4>
                <h4>6. Predictions</h4>
                <h4>7.Cloud Messaging</h4>
                <h4>8. Dynamic Links</h4>
                <h4>9. Remote Config</h4>
            </div>
        </div>
    );
};

export default Blogs;


// https://github.com/programming-hero-web-course-4/independent-service-provider-masud1989.git