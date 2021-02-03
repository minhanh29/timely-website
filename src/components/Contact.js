import React, { Component } from 'react'
import emailjs, { init } from 'emailjs-com'

class Contact extends Component {
	state = {
		fname: '',
		lname: '',
		email: '',
		subject: '',
		message: '',
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();

		let myItem = {
			name: this.state.fname + " " + this.state.lname,
			email: this.state.email,
			subject: this.state.subject,
			message: this.state.message,
		}

		init("user_AxrxpJGEp9goh6pcG60c2");
		emailjs.send('service_4oci87q', 'timely_contact', myItem)
			.then((response) => {
			console.log('SUCCESS!', response.status, response.text);
			}, (error) => {
			console.log('FAILED...', error);
		});

		e.target.reset()
	}

	render() {
		return(
			<div className="container">
				<h4 id="contact-header" className="grey-text text-darken-4 center">Contact Us</h4>
				<p className="center grey-text text-darken-2">We are here to assist and provide you the best service</p>
				<div className="row">
					<form onSubmit={this.handleSubmit} className="white col s12 m10 push-m1">
						<div className="row center">
							<div className="input-field col s6">
								<i className="material-icons prefix deep-orange-text">account_circle</i>
								<label htmlFor="fname">First Name <span className="red-text">*</span></label>
								<input type="text" id="fname" name="fname" className="validate" onChange={this.handleChange} required/>
							</div>
							<div className="input-field col s6">
								<label htmlFor="lname">Last Name <span className="red-text">*</span></label>
								<input type="text" id="lname" name="lname" className="validate" onChange={this.handleChange} required/>
							</div>
						</div>

						<div className="row">
							<div className="input-field col s12">
								<i className="material-icons prefix deep-orange-text">email</i>
								<label htmlFor="email">Email <span className="red-text">*</span></label>
								<input type="email" id="email" name="email" className="validate" onChange={this.handleChange} required/>
							</div>
						</div>

						<div className="row">
							<div className="input-field col s12">
								<i className="material-icons prefix deep-orange-text">subject</i>
								<label htmlFor="subject">Subject <span className="red-text">*</span></label>
								<input type="text" id="subject" name="subject" className="validate" onChange={this.handleChange} required/>
							</div>
						</div>

						<div className="row">
							<div className="input-field col s12">
								<i className="material-icons prefix deep-orange-text">mode_comment</i>
								<label htmlFor="message">Message <span className="red-text">*</span></label>
								<textarea id="message" name="message" className="materialize-textarea" onChange={this.handleChange} required/>
							</div>
						</div>

						<div className="row">
							<div className="input-field col s2">
								<button type="submit" className="btn red lighten-1 z-depth-1">Send</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		)
	}
}

export default Contact
