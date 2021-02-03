import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Dashboard from './components/Dashboard'
import Features from './components/Features'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
	<BrowserRouter>
		<div className="App">
			<NavBar />
			<Switch>
				<Route exact path='/' component={Dashboard} />
				<Route path='/features' component={Features} />
				<Route path='/contact' component={Contact} />
			</Switch>
			<Footer />
		</div>
	</BrowserRouter>
  );
}

export default App;
