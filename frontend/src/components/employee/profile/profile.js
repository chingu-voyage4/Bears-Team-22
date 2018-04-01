import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Jobs extends Component {
    render() {
        return (
            <div className="app-routes">
                <button><Link to="/jobs/add">Create Job</Link></button>
                <h1> I am the find job page </h1>
            </div>
        );
    }
}
