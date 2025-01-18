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
    console.log(listEl)
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
        {ulElements.length-1 ? 
        <section>
            <h1 className="ingredients-header">List of ingredients:</h1>
            <ul className="ingredients-list">
                {ulElements}
            </ul>
            
        </section>
        : null}
        {
            (ulElements.length-1)>=4 &&
            <div className="ingredients-submit">
                <div className="ingredients-text">
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients</p>
                </div>
                <button className="ingredients-submit-btn">Generate</button>
            </div>
        }
        <div className="recipe">
            
        </div>    
        

        
        </>
    )
}