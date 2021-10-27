import React, { Component } from 'react';

export default class RacerDetail extends Component {
    render() {
        const racer  = this.props.racer
        return (
            <tr>
                <td>{racer.Driver.givenName} {racer.Driver.familyName} - {racer.points}</td>
            </tr>
        )
    }
}