import React from 'react';
import { Link } from 'react-router-dom';

export function LoginNav(props){

    return (
        <React.Fragment>
            <li className="nav-item">
                <Link className="nav-link" to="/cart">Cart</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/logout">Logout</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/products">Products</Link>
            </li>
        </React.Fragment>
    )
}






// export const Login = (props) =>{
//     return (
//         props.loggedIn ? <Redirect to='/' /> :
//         <form onSubmit={props.handleSubmit}>
//             <h3 className='text-center'>Login Here</h3>
//             <div className='form-group'>
//                 <fieldset>
//                     <label htmlFor='username'>Username</label>
//                     <input type='text' className='form-control' name='username' placeholder='Username' />
//                 </fieldset>
//                 <fieldset>
//                     <label htmlFor='password'>Password</label>
//                     <input type='password' className='form-control' name='password' placeholder='Password' />
//                 </fieldset>
//                 <input type='submit' className='btn btn-primary' value='Login' />
//             </div>
//         </form>
//     )
// }
