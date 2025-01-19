export default function Recipe(props){

    return (
        (props.length)>=4 &&
        <div className="ingredients-submit">
            <div className="ingredients-text">
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients</p>
            </div>
            <button className="ingredients-submit-btn" onClick={props.recipeSubmit}>Generate</button>
        </div>
    )
}