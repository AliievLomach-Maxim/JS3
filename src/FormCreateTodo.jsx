import { Component } from 'react'

class FormCreateTodo extends Component {
	state = {
		content: '',
	}
	handleChange = ({ target: { value, name } }) => {
		this.setState({ [name]: value })
	}
	handleSubmit = (e) => {
		e.preventDefault()
		this.props.createTodo(this.state)
		this.setState({ content: '' })
	}
	render() {
		return (
			<form onSubmit={this.handleSubmit}>
				<label htmlFor='content'>Content:</label>
				<input
					name='content'
					type='text'
					id='content'
					value={this.state.content}
					onChange={this.handleChange}
				/>

				<button type='submit'>Create todo</button>
			</form>
		)
	}
}

export default FormCreateTodo
