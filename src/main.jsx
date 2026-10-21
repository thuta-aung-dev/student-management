import { StrictMode} from "react"
import { createRoot } from "react-dom/client"
//import App from './App.jsx'
import Login from "./login.jsx"
//import Notepad from "./note"
import Connect from "./noteconnect"
import Inventory from "./Inventory"
import Register from "./register.jsx"
import App2 from "./App2.jsx"

import './index.css'
import Clothing from "./clothing.jsx"
import Login2 from "./login2.jsx"

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <App2/>
    </StrictMode>
)