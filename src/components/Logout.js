import React from 'react';
import { Link } from 'react-router-dom';

export function Logout(props){

    return (
        <React.Fragment>
            <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
            </li>
        </React.Fragment>
    )
}
