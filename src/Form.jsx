import { Component } from 'react'

class Form extends Component {
	state = {
		email: '',
		password: '',
		firstName: '',
	}

	handleChange = ({ target: { value, name } }) => {
		// if (value.length > 5) return
		// if (value.includes('@')) return
		// if (name === 'email') this.setState({ email: value })
		// if (name === 'password') this.setState({ password: value })
		this.setState({ [name]: value })
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.createFormObj(this.state)
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label htmlFor='email'>Email:</label>
				<input
					name='email'
					type='email'
					id='email'
					value={this.state.email}
					onChange={this.handleChange}
				/>
				<input
					name='firstName'
					type='text'
					value={this.state.firstName}
					onChange={this.handleChange}
				/>
				<br />
				<br />
				<br />
				<label htmlFor='password'>Password:</label>
				<input
					name='password'
					type='password'
					id='password'
					value={this.state.password}
					onChange={this.handleChange}
				/>
				<button type='submit'>Login</button>
			</form>
		)
	}
}

export default Form
