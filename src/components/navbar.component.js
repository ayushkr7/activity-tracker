import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg px-2">
                <Link to="/" className="navbar-brand">
                    Activity Tracker
                </Link>
                <div className="collpase navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/" className="nav-link">
                                Activity
                            </Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/create" className="nav-link">
                                Add activity
                            </Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/user" className="nav-link">
                                Add User
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
