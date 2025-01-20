export default function IngredientsList(props){
    return(
        props.length>=0 ? 
            <section>
                <h1 className="ingredients-header">List of ingredients:</h1>
                <ul className="ingredients-list">
                    {props.elements}
                </ul>
                
            {props.length>=3 && <div className="ingredients-submit">
                <div className="ingredients-text">
                    <h3>Ready for a recipe?</h3>
                    <p>Generate a recipe from your list of ingredients</p>
                </div>
                <button className="ingredients-submit-btn" 
                onClick={props.recipeSubmit}>Generate</button>    
            </div>}
            </section>
            : null
    )
}