import data from './about-me';
import React, { useState } from 'react';

function Test() {
    const [style, setStyle] = useState({display: 'none'});

    return (
        <div className="test">
            <div style={{border: '1px solid gray', width: 300, height: 300, padding: 10, margin: 100}}
                 onMouseEnter={e => {
                     setStyle({display: 'block'});
                 }}
                 onMouseLeave={e => {
                     setStyle({display: 'none'})
                 }}
            >
                <button style={style}>Click</button>
            </div>
        </div>
    );
}


function Photo() {
    const [photo, setPhoto] = useState('');

    const settingPhoto = () => {
        setPhoto(data.photo);
    }

    return (
        <div className="Photo">
            <button className="glow-button" onClick={settingPhoto}>Photo</button>
            <img style={{width: 250, height: 250}} alt="pfp" src={photo}></img>
        </div>
    );
}

function Name() {
    const [name, setName] = useState('');

    const settingName = () => {
        setName(data.name);
    }

    return (
        <div className="Name">
            <button className="glow-button" onClick={settingName}>Name</button>
            <h1 class="Name">{name}</h1>
        </div>
    );
}

function School() {
    const [school, setSchool] = useState('');

    const settingSchool = () => {
        setSchool(data.school);
    }
    return (
        <div className="School">
            <button className=" glow-button" onClick={settingSchool}>School</button>
            <img style={{width: 250, height: 250}} alt="University of Waterloo" src={school}></img>
        </div>
    );
}

function Program() {
    const [program, setProgram] = useState('');

    const settingProgram = () => {
        setProgram(data.program);
    }
    return (
        <div className="Program">
            <button className="glow-button" onClick={settingProgram}>Program</button>
            <h1>{program}</h1>
        </div>
    );
}


function Interests() {
    const [interest, setInterest] = useState('');
    const settingInterest = () => {
        setInterest(data.interests);
    }

    return (
        <div className="Interests">
            <button className="glow-button" onClick={settingInterest}>Interests</button>
            <h1>{interest}</h1>
        </div>
    );
}

function LinkedIn() {
    return (
        <div className="LinkedIn">
            <a target=" blank" href={data.linkedin}>
                <img style={{width: 250, height: 250}} 
                alt="linkedin" src={require('../images/linkedIn_logo.png')}></img>
            </a>
        </div>
    );
}

function GitHub() {
    return (
        <div className="GitHub">
            <a target=" blank" href={data.github}>
                <img style={{width: 250, height: 250}}
                alt="github" src={require('../images/github_logo.png')}></img>
            </a>
        </div>
    );
}

export { Test, Name, Photo, School, Interests, Program, LinkedIn, GitHub };
