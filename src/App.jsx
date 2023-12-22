import { Component } from 'react'
import { getProductsApi, getSearchProductsApi } from './api/users'

class App extends Component {
	state = {
		products: [],
		isLoading: false,
		error: '',
		query: '',
	}

	getProducts = async () => {
		try {
			this.setState({ isLoading: true })
			const data = await getProductsApi()
			this.setState({ products: data.products, isLoading: false })
		} catch (error) {
			this.setState({ error: error.message, isLoading: false })
		}
	}

	getSearchProducts = async () => {
		try {
			this.setState({ isLoading: true })
			const data = await getSearchProductsApi(this.state.query)
			this.setState({ products: data.products, isLoading: false })
		} catch (error) {
			this.setState({ error: error.message, isLoading: false })
		}
	}

	componentDidMount() {
		this.getProducts()
	}

	componentDidUpdate(prevProps, prevState) {
		if (prevState.query !== this.state.query) {
			this.getSearchProducts()
		}
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.setState({ query: e.target.elements.search.value })
	}

	render() {
		console.log('this.state :>> ', this.state)
		return (
			<>
				{this.state.isLoading && <h1>loading...</h1>}

				{this.state.error && <h3>{this.state.error}</h3>}

				<form onSubmit={this.handleSubmit}>
					<input type='search' name='search' />
					<button type='submit'>Search</button>
				</form>

				{this.state.products.map((el) => (
					<div key={el.id}>
						<h3>{el.title}</h3>
						<p>{el.description}</p>
					</div>
				))}
			</>
		)
	}
}

export default App
