import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
	return (
		<div>
			<nav className="nav-wrapper white">
				<div className="container">
					<Link to="/" className="brand-logo">
						<img className="responsive-img left"src="res/icon_timer2.png" alt="Timely Icon"/>
						<span className="blue-grey-text text-darken-1">Timely</span>
					</Link>
					<Link to='#' className='sidenav-trigger' data-target='slide-out'>
						<i className='material-icons grey-text text-darken-4'>menu</i>
					</Link>
					<ul className="right hide-on-med-and-down">
						<li><NavLink className="grey-text text-darken-4 nav-item" to="/">Home</NavLink></li>
						<li><NavLink className="grey-text text-darken-4 nav-item" to="/features">Features</NavLink></li>
						<li><NavLink className="grey-text text-darken-4 nav-item" to="/contact">Contact</NavLink></li>
					</ul>
				</div>
			</nav>

			<ul className='sidenav' id='slide-out'>
				<li className="center"><NavLink to="/"><h5 className="bold">Home</h5></NavLink></li>
				<li className="center"><NavLink to="/features"><h5 className="bold">Features</h5></NavLink></li>
				<li className="center"><NavLink to="/contact"><h5 className="bold">Contact</h5></NavLink></li>
			</ul>
		</div>
	)
}

export default NavBar
