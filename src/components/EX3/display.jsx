import React from 'react';
import Clock from "./clock.jsx";
import './EX3.css'

const ShowTime = () => {
    return (
        <div className="ex3">
            <h1>Поточний час:</h1>
            <Clock/>
        </div>
    );
};

export default ShowTime;
