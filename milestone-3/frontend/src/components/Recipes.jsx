import React from "react";
import './recipes.css';
import React, {useState, useEffect} from 'react';


export default function Recipe(props) {
    const [ingredient, setNewIngredient] = React.useState('');
    const [instruction, setNewInstruction] = React.useState('');
    const [ingredient, setNewIngredient] = useState('');
    const [image, setImage] = useState('');
    return(
        <div className ="all">
            <div id = "item1">
                <h2>
                <a href = "/Users/nicsl/Desktop/HACK4IMPACT/bootcamp-project-2021/Recipes/fried-rice.html"> {props.name} </a>
                </h2>
                
                <p class = "description"><img id = {props.id} src = {props.imgsrc}  alt = "missing" width = "150px"/>
                {props.description}</p>
            </div>
        </div>
    
);
}