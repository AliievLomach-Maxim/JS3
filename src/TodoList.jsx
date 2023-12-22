import Todo from './Todo'

const TodoList = ({ todos, handleDel }) => {
	// console.log('todos :>> ', todos)
	return (
		<div style={{ paddingInline: '40px' }}>
			{todos.map((todo) => (
				<Todo key={todo.id} todo={todo} handleDel={handleDel} />
			))}
		</div>
	)
}

export default TodoList
