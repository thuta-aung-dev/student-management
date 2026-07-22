import { StrictMode} from "react"
import { createRoot } from "react-dom/client"
//import App from './App.jsx'
import Login from "./login.jsx"
//import Notepad from "./note"
import Connect from "./noteconnect"
import Inventory from "./Inventory"
import './index.css'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Connect/>
    </StrictMode>
)