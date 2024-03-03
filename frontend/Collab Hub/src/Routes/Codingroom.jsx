import React from 'react';
import Header from '../Components/Header';

function callClick() {
    window.location.href = "http://localhost:5173";
}

function Codingroom() {
    return (
        <div>
            <Header />
            {/* Call callClick function inside an arrow function */}
            <h1 onClick={() => callClick()}>Coding Page</h1>
        </div>
    );
}

export default Codingroom;
