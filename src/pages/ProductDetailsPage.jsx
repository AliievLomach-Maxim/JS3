import { useEffect } from 'react'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'

const ProductDetailsPage = () => {
	const { productId } = useParams()

	const navigate = useNavigate()

	useEffect(() => {
		if (productId) {
			// const data = getSingleProdct()
			// set
		}
	}, [productId])

	const location = useLocation()
	console.log('locaiton :>> ', location)

	const handleBack = () => {
		const isApp = window.confirm('are your sure?')
		if (isApp) {
			navigate(location.state)
		}
	}

	return (
		<div>
			{/* <Link to={location.state}>back</Link> */}
			<button onClick={handleBack}>go back</button>
			ProductDetailsPage
		</div>
	)
}

export default ProductDetailsPage
