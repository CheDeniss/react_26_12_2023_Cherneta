import React from 'react';
import PetData from "./petData.jsx";
import './EX4.css'

const PetInfo = () => {
    const petDataObj = {
        name: 'Барсік',
        type: 'Кіт',
        age: 3,
        description: 'Ласкавий, грайливий і потішний',
    }

    return (
        <div className='ex4'>
            <h1>Домашній улюбленець:</h1>
            <PetData {...petDataObj}/>
        </div>
    );
};

export default PetInfo;
