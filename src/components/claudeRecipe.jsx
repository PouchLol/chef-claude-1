import "./recipe.css"


export default function Recipe(props){

    return (
        <div className="recipe">
        {props.recipeShown && props.recipe}
        </div>
    )
}