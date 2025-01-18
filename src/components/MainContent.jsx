import "./maincontent.css"
import list from "./list.js"
import "./input.css"
import { useState } from "react"




export default function MainContent(){
    const listEl=list.map((x)=>{
        return <li key={list.indexOf(x)+1}>{x}</li>
    })

    let [ulElements,setUlElements]=useState([listEl])
    console.log(ulElements)


    function formSubmitted(formData){
        const newIngredient = formData.get("ingredient")
        setUlElements(
            (ulElements)=>{return [...ulElements,<li>{newIngredient}</li>]}
        )
    }

    return (
        <>
        <form className="body-form" id="form-el" action={formSubmitted}>
            <input aria-label="add-ingredient" name="ingredient" className="body-input" id="input-text" placeholder="eg: oregano"></input>
            <button className="body-button"> + Add ingredient!</button>
        </form>
        <h1 className="ingredients-header">Ingredients in Hand: </h1>
        <ul className="ingredients-list">
            {ulElements}
        </ul>
        </>
    )
}