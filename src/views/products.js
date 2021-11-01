import React, { 
    useState, useEffect, 
} from 'react';
// import addToCartclicked  from '../App';

export default function Products (props){
    const [products, setProducts] = useState([]);
    
    useEffect(()=>{
        fetch('https://kekambas-bs.herokuapp.com/api/products')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
}

render() {
    return (
        <div className='form-group'>
        <fieldset>
            <label htmlFor='name'>name</label>
            <input type='text' className='form-control' name='name' placeholder='name' />
        </fieldset>
        <input type='submit' className='btn btn-warning' value='login' />
    </div>

    )
};

};