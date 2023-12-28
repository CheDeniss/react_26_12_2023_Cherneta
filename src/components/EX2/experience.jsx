import React from 'react';

const Experience = ({experiences}) => {

    return (
        <div>
            <h3>Досвід роботи:</h3>
            <ul>
               {experiences.map((item, ind) => (
                    <li key={ind}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Experience;
