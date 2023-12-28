import React from 'react';
import Experience from "./experience";
import Skill from "./skills";
import './EX2.css'

const PersonalInfo = () => {
    const experiences = ["exp 1", "exp 2", "exp 3", "exp 4", "exp 5"]
    const skills = ["C++", "HTML", "CSS", "JavaScript", "React"]

    return (
        <div className="ex2">
            <h1>Денис Чернета</h1>
            <h2>+38(066)051.94.04</h2>
            <h2>Львів</h2>
            <hr/>
            <Experience {...{experiences}}/>
            <hr/>
            <Skill {...{skills}}/>
        </div>
    );
};

export default PersonalInfo;
