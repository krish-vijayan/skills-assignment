import data from './about-me';
import React, { useState } from 'react';

function Name() {
    const [name, setName] = useState('');
    var toggle = false;
    const settingName = () => {
        if (toggle) {
            setName(null);
            toggle = false;
        } else {
            setName(data.name);
            toggle = true;
        }
    }

    return (
        <div className="Name-button">
            <button className="content-button" onClick={settingName}>Name</button>
            <h1 className="content Name">{name}</h1>
        </div>
    );
}

function Interests() {
    const [interest, setInterest] = useState('');
    var toggle = false;

    const settingInterest = () => {
        if (toggle) {
            setInterest(null);
            toggle = false;
        } else {
            setInterest(data.interests);
            toggle = true;
        }
    }

    return (
        <div className="Interests-button">
            <button className="content-button" onClick={settingInterest}>Interests</button>
            <h1 className="content Interests">{interest}</h1>
        </div>
    );
}


function School() {
    const [ school, setSchool ] = useState('');
    var toggle = false;

    const settingSchool = () => {
        if (toggle) {
            setSchool(null);
            toggle = false;
        } else {
            setSchool(data.school);
            toggle = true;
        } 
    }

    return (
        <div className="School-button">
            <button className="content-button" onClick={settingSchool}>School</button>
            <h1 className="School" alt="University of Waterloo">{school}</h1> 
        </div>
    );
}

function Program() {
    const [program, setProgram] = useState('');
    var toggle = false;

    const settingProgram = () => {
        if (toggle) {
            setProgram(null);
            toggle = false;
        } else {
            setProgram(data.program);
            toggle = true;
        }
    }
    return (
        <div className="Program-button">
            <button className="content-button" onClick={settingProgram}>Program</button>
            <h1 className="content Program">{program}</h1>
        </div>
    );
}


function LinkedIn() {
    return (
        <div className="LinkedIn">
            <a target=" blank" href={data.linkedin}>
                <img style={{width: 150, height: 150}} 
                alt="linkedin" src={require('../images/linkedIn_logo.png')}></img>
            </a>
        </div>
    );
}

function GitHub() {
    return (
        <div className="GitHub">
            <a target=" blank" href={data.github}>
                <img style={{width: 150, height: 150}}
                alt="github" src={require('../images/github_logo.png')}></img>
            </a>
        </div>
    );
}

export { Name, School, Interests, Program, LinkedIn, GitHub };
