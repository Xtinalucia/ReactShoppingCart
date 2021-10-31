import React, { Component } from 'react';


<h1>this works!!!!!!</h1>
// class Product extends Component {
// export default class {Products} extends Component{
export default class products extends Component {
        constructor(props){
            super(props);
            this.state = {
                redirect: null
            }
        }
    addToCartOnClick = () => {     
        this.props.addToCart(this.props.e);
        console.log("Will You Please Work!");
    }
        
    render() {
        return (this.props.viewAsGrid ? <div className="item col-4">
                    <div className="thumbnail card">
                        <div className="img-event">
                            <img
                            className="group list-group-image img-fluid"
                            src="http://placehold.it/400x250/000/fff"
                            alt=""
                            />
                        </div>
                        <div className="caption card-body">
                            <h4 className="group card-title inner list-group-item-heading">
                            {this.props.title}
                            </h4>
                            <p className="group inner list-group-item-text">
                            Your description goes here!
                            </p>
                            <div className="row">
                            <div className="col-12 col-md-6">
                                <p className="lead">PRICES go here!!!!</p>
                            </div>
                            <div className="col-12 col-md-6">
                                <button className="btn btn-success" onClick={this.addToCartOnClick}>Add to Cart</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div> :
                <div className="col-12 card">
                <div className="row">
                    <div className="col-4">
                        <img
                        className="img-fluid"
                        src="http://placehold.it/400x250/000/fff"
                        alt=""
                        />
                    </div>
                    <div className="col-8">
                            <h2>{this.props.e}</h2>
                            <p>Your description goes here!</p>
                            <div className="row">
                            <div className="col-12 col-md-6">
                                <p>PRICES go here!!!!</p>
                            </div>
                            <div className="col-12 col-md-6">
                                <button className="btn btn-success" onClick={this.addToCartOnClick}>Add to Cart</button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>);
    }
}

// export default Product;