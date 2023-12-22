export const getProductsApi = async () => {
	const response = await fetch('https://dummyjson.com/products')
	const data = await response.json()
	return data
}

export const getSearchProductsApi = async (query) => {
	const response = await fetch(`https://dummyjson.com/products/search?q=${query}`)
	const data = await response.json()
	return data
}
