import React, { Component } from 'react'

export class ErrorField extends Component {
    render() {
        const { errors, touched, row } = this.props;
        return (
            <div className="error-field">
                { errors[row] && touched[row] ? (
                    <span>{errors[row]}</span>
                ) : null }
            </div>
        )
    }
}

export default ErrorField 
