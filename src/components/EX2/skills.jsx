import React from 'react';

const Skill = ({skills}) => {

    return (
        <div>
            <h3>Навички:</h3>
            <ul>
                {skills.map((item, ind) => (
                    <li key={ind}>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Skill;
