import React from 'react';


export const ProductForm = (props) =>{
    return (
        <form onSubmit={props.handleForm}>
            <div className='form-group'>
                <div className='row'>
                    <div className='col-12 col-sm-6'>
                        <input type='text' className='form-control' id='name' placeholder='name'/>
                    </div>
                    <div className='col-12 col-sm-6'>
                        <input type='text' className='form-control' id='description' placeholder='description'/>
                    </div>
                </div>
                <div className='row'>
                    <input type='submit' className='btn btn-danger mx-3' />
                </div>
            </div>
        </form>
    )
}