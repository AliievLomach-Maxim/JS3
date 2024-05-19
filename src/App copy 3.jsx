import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { getProductsApi, getSearchProductsApi } from './api/users'
import Card from './components/Card'

export const CustomContext = createContext()

const App = () => {
	const [products, setProduct] = useState([])
	const [isLoading, setIsloading] = useState(false)
	const [query, setQuery] = useState('')
	const [error, setError] = useState('')
	const [counter, setCounter] = useState(0)
	// useMemo
	// useCallback
	// useRef
	// useContext

	// const result = useMemo(()=>{},[])

	const sortedProducts = useMemo(
		() =>
			products.toSorted((a, b) => {
				console.log('sorting..')
				return a.price - b.price
			}),
		[products]
	)

	// [].map(el=>{
	// 	el.item.filnd().toUpperCase()
	// })

	const getProducts = async () => {
		try {
			// this.setState({ isLoading: true })
			setIsloading(true)
			const data = await getProductsApi()
			// this.setState({ products: data.products, isLoading: false })
			setProduct(data.products)
			setIsloading(false)
		} catch (error) {
			// this.setState({ error: error.message, isLoading: false })
			setError(error.message)
			setIsloading(false)
		}
	}

	// const getSearchProducts =useCallback (async () => {
	// 	try {
	// 		// this.setState({ isLoading: true })

	// 		setIsloading(true)
	// 		const data = await getSearchProductsApi(query)
	// 		// this.setState({ products: data.products, isLoading: false })
	// 		setProduct(data.products)
	// 		setIsloading(false)
	// 	} catch (error) {
	// 		// this.setState({ error: error.message, isLoading: false })
	// 		setError(error.message)
	// 		setIsloading(false)
	// 	}
	// },[query])

	const handleSubmit = (e) => {
		e.preventDefault()
		// this.setState({ query: e.target.elements.search.value })
		setQuery(e.target.elements.search.value)
	}

	useEffect(() => {
		console.log('mount')
		getProducts()
	}, [])

	useEffect(() => {
		const getSearchProducts = async () => {
			try {
				// this.setState({ isLoading: true })

				setIsloading(true)
				const data = await getSearchProductsApi(query)
				// this.setState({ products: data.products, isLoading: false })
				setProduct(data.products)
				setIsloading(false)
			} catch (error) {
				// this.setState({ error: error.message, isLoading: false })
				setError(error.message)
				setIsloading(false)
			}
		}
		if (query) {
			getSearchProducts()
		}
	}, [query])

	// const input = document.querySelector('input')
	// input.focus()

	const inputRef = useRef()

	useEffect(() => {
		inputRef.current.focus()
	}, [])

	const [name, setName] = useState('Alex')

	return (
		<CustomContext.Provider value={{ name: name, setName }}>
			<div style={{ paddingInline: '48px' }}>
				{isLoading && <h1>loading...</h1>}

				{error && <h3>{error}</h3>}
				<button onClick={() => setCounter((prev) => prev + 1)}>{counter}</button>

				<form onSubmit={handleSubmit}>
					<input type='search' name='search' ref={inputRef} />
					<button type='submit'>Search</button>
				</form>

				{sortedProducts.map((el) => (
					<div key={el.id}>
						<h1>{el.price}</h1>
						<h3>{el.title}</h3>
						<p>{el.description}</p>
					</div>
				))}
				<Card />
			</div>
		</CustomContext.Provider>
	)
}

export default App

// function customUseState() {
// 	const random = Math.random()
// 	return [10, random]
// }
// const result = customUseState()
