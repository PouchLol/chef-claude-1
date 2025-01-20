import "./maincontent.css"
import list from "./list.js"
import "./input.css"
import { useState } from "react"
import Footer from "./Footer.jsx"
import IngredientsList from "./ingredientsList.jsx"
import Recipe from "./claudeRecipe.jsx"

const recipe = <p>girl do your own cooking lazy ass</p>
export default function MainContent(){
    const listEl=list.map((x)=>{
        return <li key={x}>{x}</li>
    })

    let [ulElements,setUlElements]=useState([listEl])
    let [recipeShown, setRecipeShown]=useState(false)
    

    function formSubmitted(formData){
        const newIngredient = formData.get("ingredient")
        setUlElements(
            (ulElements)=>{return [...ulElements,<li key={newIngredient}>{newIngredient}</li>]}
        )
    }
    function recipeSubmit(){
        setRecipeShown(true)
        window.scrollBy(0,100)
    }
    return (
        <>
        <form className="body-form" id="form-el" action={formSubmitted}>
            <input aria-label="add-ingredient" name="ingredient" className="body-input" id="input-text" placeholder="eg: oregano"></input>
            <button className="body-button"> + Add ingredient!</button>
        </form>
        <IngredientsList elements={ulElements} length={ulElements.length-1} recipeSubmit={recipeSubmit} />
        <Recipe recipe={recipe} recipeShown={recipeShown}/>
        
        <Footer></Footer>
        </>
    )
}