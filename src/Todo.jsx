import { Component } from 'react'

class Todo extends Component {
	componentDidMount() {
		console.log('create Todo')
	}

	render() {
		const {
			todo: { content, status, id },
			handleDel,
		} = this.props
		return (
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					marginBottom: '12px',
				}}
			>
				<p>{content}</p>
				<div>
					<p style={{ display: 'inline-block', marginRight: '12px' }}>
						status: {status.toString()}
						{/* status: {String(status)}
					status: {`${status}`} */}
					</p>
					<button onClick={() => handleDel(id)}>Delete</button>
				</div>
			</div>
		)
	}
}

export default Todo

// const Todo = ({ todo: { content, status, id }, handleDel }) => {
// 	return (
// 		<div
// 			style={{
// 				display: 'flex',
// 				justifyContent: 'space-between',
// 				marginBottom: '12px',
// 			}}
// 		>
// 			<p>{content}</p>
// 			<div>
// 				<p style={{ display: 'inline-block', marginRight: '12px' }}>
// 					status: {status.toString()}
// 					{/* status: {String(status)}
// 					status: {`${status}`} */}
// 				</p>
// 				<button onClick={() => handleDel(id)}>Delete</button>
// 			</div>
// 		</div>
// 	)
// }

// export default Todo
