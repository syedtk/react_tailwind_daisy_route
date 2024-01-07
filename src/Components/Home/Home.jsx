import React from 'react';

const Home = () => {
    return (
        <div className='container mx-auto text-center margin-auto '>
            <ul className="steps steps-vertical">
                <li className="step step-primary">Register</li>
                <li className="step step-primary">Choose plan</li>
                <li className="step">Purchase</li>
                <li className="step">Receive Product</li>
            </ul>
        </div>
    );
};

export default Home;