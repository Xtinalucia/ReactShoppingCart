import React from 'react';
import { Redirect } from 'react-router-dom';


export const Login = (props) =>{
    return (
        props.loggedIn ? <Redirect to='/products' /> :
        <form onSubmit={props.handleSubmit}>
            <h3 className='text-center'>Login Here</h3>
            <div className='form-group'>
                <fieldset>
                    <label htmlFor='username'>Username</label>
                    <input type='text' className='form-control' name='username' placeholder='Username' />
                </fieldset>
                <fieldset>
                    <label htmlFor='password'>Password</label>
                    <input type='password' className='form-control' name='password' placeholder='Password' />
                </fieldset>
                <input type='submit' className='btn btn-warning' value='login' />
            </div>
        </form>
    )
}