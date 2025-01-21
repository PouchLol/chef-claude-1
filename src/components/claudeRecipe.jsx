import "./recipe.css"
import Markdown from "react-markdown"

export default function Recipe(props){
    return (
        <div className="recipe" aria-live="polite">
            
        {props.recipeShown &&<div>
            <h1>Chef Claude Recommends: </h1>
            <Markdown>{props.recipe}</Markdown>
            </div> }
        </div>
    )
}