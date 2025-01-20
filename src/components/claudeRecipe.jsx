import "./recipe.css"
import Markdown from "react-markdown"

export default function Recipe(props){
    return (
        <div className="recipe">
        {props.recipeShown && <Markdown>{props.recipe}</Markdown>}
        </div>
    )
}