import { Component } from 'react'
// import Form from './Form'
import FormCreateTodo from './FormCreateTodo'
import { nanoid } from 'nanoid'
import TodoList from './TodoList'

class App extends Component {
	state = {
		count: 100,
		count2: 10,
		formValue: { email: '', firstName: '', password: '' },
		todos: [],
	}

	handleIncrement = () =>
		this.setState((prevState) => ({
			count: prevState.count + 1,
		}))

	handleDecrement = () => {
		this.setState((prevState) => {
			return {
				count: prevState.count - 1,
			}
		})
	}

	handleIncrement2 = () => {
		this.setState((prevState) => {
			return {
				count2: prevState.count2 + 1,
			}
		})
	}

	handleDecrement2 = () => {
		this.setState((prevState) => {
			return {
				count2: prevState.count2 - 1,
			}
		})
	}

	createFormObj = (formObj) => {
		this.setState({ formValue: formObj })
	}

	createTodo = (todoObj) => {
		const todo = {
			...todoObj,
			id: nanoid(),
			status: false,
		}
		this.setState((prev) => ({ todos: [...prev.todos, todo] }))
	}

	handleDel = (id) => {
		this.setState((prev) => ({
			todos: prev.todos.filter((todo) => todo.id !== id),
		}))
	}
	render() {
		return (
			<>
				{/* <Form createFormObj={this.createFormObj} /> */}
				{/* <div>
					<p>email: {this.state.formValue.email}</p>
					<p>password: {this.state.formValue.password}</p>
					<p>firstName: {this.state.formValue.firstName}</p>
				</div> */}
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<button style={{ margin: 10 }} onClick={this.handleIncrement}>
						+
					</button>
					<button style={{ margin: 10 }} onClick={this.handleDecrement}>
						-
					</button>
					<br />
					{this.state.count}
				</div>
				<br />
				<div style={{ display: 'flex', justifyContent: 'center' }}>
					<button style={{ margin: 10 }} onClick={this.handleIncrement2}>
						+
					</button>
					<button style={{ margin: 10 }} onClick={this.handleDecrement2}>
						-
					</button>
					<br />
					{this.state.count2}
				</div>
				<FormCreateTodo createTodo={this.createTodo} />
				<TodoList todos={this.state.todos} handleDel={this.handleDel} />
			</>
		)
	}
}

export default App
