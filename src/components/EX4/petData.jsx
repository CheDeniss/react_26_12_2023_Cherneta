import React from 'react';

const PetData = (props) => {
    return (
        <div>
            <h2>Ім'я: {props.name}</h2>
            <p>Вид: {props.type}</p>
            <p>Вік: {props.age} р.</p>
            <p>Опис: {props.description}</p>
        </div>
    );
};

export default PetData;
