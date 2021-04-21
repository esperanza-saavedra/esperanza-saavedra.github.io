import React  from 'react'

//Includes React-Router-DOM
import { Link } from "react-router-dom";

export default function Menu(props){
    
    return(
        <div>
            <Link to="/">Home</Link>
            <Link to="/matematicas">Matematicas</Link>
        </div>
    )
}
 