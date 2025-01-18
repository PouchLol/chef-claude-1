import "./navbar.css"

function hoverFunction(){
    console.log("image hovered upon")
}

export default function NavBar(){
    return (
        <>
        <nav className="navbar">
            <img src="chef.png" onMouseOver={hoverFunction} className="logo"></img>
            <h2 className="brand-name">Chef Claude</h2>
        </nav>
        </>
    )
}