import React, {useState, useEffect} from 'react';


function TitlePage(){
    const [ name, setName ] = useState('');

    return (
        <div className="Title-page">
            <h1 className="Title">Group 198 Introductions</h1>
           
                <button className=" grow glow-button-title Title-krish" >Krish</button>
                <button className=" grow glow-button-title Title-brandon">Brandon</button>
                <button className=" grow glow-button-title Title-serena">Serena</button>
                <button className=" grow glow-button-title Title-taeyun">Taeyun</button>
                <button className=" grow glow-button-title Title-parsh">Parsh</button>

               
        </div>    
    );
}

export default TitlePage;