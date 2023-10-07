import {Link} from "react-router-dom";
import Register from "./signup";
import React from "react";
export default function Home(props){
    return(
        <>
            <div>
                <Link to="/login">Login</Link>
            </div>
            <div>
                <Link to="/signup">SignUp</Link>
            </div>


            {props.name?<strong>Hey hi I am in {props.name} baba</strong>:<strong>Login cheyandi guruvu gaaru</strong>}

        </>
    )
}