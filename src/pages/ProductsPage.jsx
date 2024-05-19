import { useEffect, useMemo, useRef, useState } from 'react'
import { getProductsApi, getSearchProductsApi } from '../api/users'
import Card from '../components/Card'
import { Link, useLocation, useSearchParams } from 'react-router-dom'

const ProductsPage = () => {
	const [products, setProduct] = useState([])
	const [isLoading, setIsLoading] = useState(false)
	const [query, setQuery] = useState('')
	const [error, setError] = useState('')
	const [counter, setCounter] = useState(0)
	const [inputValue, setInputValue] = useState('')

	const location = useLocation()

	const [searchParams, setSearchParams] = useSearchParams()

	const sortedProducts = useMemo(
		() =>
			products.toSorted((a, b) => {
				console.log('sorting..')
				return a.price - b.price
			}),
		[products]
	)

	const getProducts = async () => {
		try {
			setIsLoading(true)
			const data = await getProductsApi()
			setProduct(data.products)
			setIsLoading(false)
		} catch (error) {
			setError(error.message)
			setIsLoading(false)
		}
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		setQuery(e.target.elements.search.value)
	}

	useEffect(() => {
		console.log('mount')
		getProducts()
	}, [])

	useEffect(() => {
		const searchQuery = searchParams.get('search')
		const getSearchProducts = async () => {
			try {
				setIsLoading(true)
				const data = await getSearchProductsApi(searchQuery)

				setProduct(data.products)
				setIsLoading(false)
			} catch (error) {
				setError(error.message)
				setIsLoading(false)
			}
		}
		if (searchQuery) {
			getSearchProducts()
			setInputValue(searchQuery)
			setQuery(searchQuery)
		}
	}, [searchParams])

	useEffect(() => {
		query && setSearchParams({ search: query })
	}, [query, setSearchParams])

	const inputRef = useRef()

	useEffect(() => {
		inputRef.current.focus()
	}, [])

	return (
		<div style={{ paddingInline: '48px' }}>
			{isLoading && <h1>loading...</h1>}

			{error && <h3>{error}</h3>}
			<button onClick={() => setCounter((prev) => prev + 1)}>{counter}</button>

			<form onSubmit={handleSubmit}>
				<input
					type='search'
					name='search'
					ref={inputRef}
					value={inputValue}
					onChange={({ target: { value } }) => setInputValue(value)}
				/>
				<button type='submit'>Search</button>
			</form>

			{sortedProducts.map((el) => (
				<div key={el.id} style={{ border: '1px solid', padding: '12px', marginBlock: '12px' }}>
					<h1>{el.price}</h1>
					<h3>{el.title}</h3>
					<p>{el.description}</p>
					<Link to={`${el.id}`} state={location}>
						Details
					</Link>
				</div>
			))}
			<Card />
		</div>
	)
}

export default ProductsPage
