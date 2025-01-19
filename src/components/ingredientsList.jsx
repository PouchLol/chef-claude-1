export default function IngredientsList(props){
    console.log(props.elements)
    return(
        props.length ? 
            <section>
                <h1 className="ingredients-header">List of ingredients:</h1>
                <ul className="ingredients-list">
                    {props.elements}
                </ul>
                
            </section>
            : null
    )
}