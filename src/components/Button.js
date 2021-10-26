import React, { Component } from 'react';

export default class button extends Component {
    render() {
        console.log('Component Rendered')
        return (
            <div>
                <button className='btn btn-primary' onClick={() => this.props.incrementCount(this.props.step)}>+{this.props.step}</button>
            </div>
        )
    }
}
