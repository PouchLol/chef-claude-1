import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App"
import "./main.css"


const rootEl = createRoot(document.getElementById("root"))

rootEl.render(
    <StrictMode>
        <App />
    </StrictMode>
)