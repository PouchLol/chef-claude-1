import "./maincontent.css"
import "./input.css"
import { useState } from "react"
import Footer from "./Footer.jsx"
import IngredientsList from "./ingredientsList.jsx"
import Recipe from "./claudeRecipe.jsx"
import { getRecipeFromMistral } from "../ai.js"

let list = []

export default function MainContent(){
    let [recipe,setRecipe] = useState("")
    let [ulElements,setUlElements]=useState([])
    let [recipeShown, setRecipeShown]=useState(false)
    

    function formSubmitted(formData){
        const newIngredient = formData.get("ingredient")
        list.push(newIngredient)
        
        setUlElements(
            (ulElements)=>{
                return [...ulElements,<li key={newIngredient}>{newIngredient}</li>]}
        )
    }
    async function recipeSubmit(){
        let recipeMarkdown = await getRecipeFromMistral(list)
        setRecipe(recipeMarkdown)
        console.log(recipeMarkdown)
        setRecipeShown(true)
        window.scrollBy(0,100)
    }
    return (
        <>
        <form className="body-form" id="form-el" action={formSubmitted}>
            <input aria-label="add-ingredient"
             name="ingredient"
             className="body-input" 
             id="input-text" 
             placeholder="eg: oregano"></input>
            <button className="body-button"> + Add ingredient!</button>
        </form>
        <IngredientsList elements={ulElements} length={ulElements.length-1} recipeSubmit={recipeSubmit} />
        <Recipe recipe={recipe} recipeShown={recipeShown}/>
        
        <Footer></Footer>
        </>
    )
}