import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

const Navbar = (props) => {
    return (
        <nav className="nav-wrapper green lighten-25">
            <div className="container">
                <Link className="brand-logo" to="/">Islands</Link>
                <ul className="right">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink exact to="/Definitions">Definitions</NavLink></li>
                    <li><NavLink exact to="/Events">Events</NavLink></li>
                    <li><NavLink exact to="/Flights">Flights</NavLink></li>
                    </ul>
            </div>
        </nav>
    )
}

export default withRouter(Navbar)