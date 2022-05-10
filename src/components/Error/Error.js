import React, { Component } from 'react';
import './Error.css'

class Error extends Component {
    render() {
        return (
            <div>
                <div className="containe d-flex flex-column text-white bg-dark align-items-center justify-content-center er w-100 ">
                    <h1 >404 </h1>
                    <div className=""></div>
                    <h2>page not found</h2>
                </div>
            </div>
        );
    }
}

export default Error;