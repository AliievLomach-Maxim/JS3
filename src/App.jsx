import { Route, Routes } from 'react-router-dom'
// import Header from './components/Header'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import UsersPage from './pages/UsersPage'
import MainLayout from './layouts/MainLayout'
import SideBarLayout from './layouts/SideBarLayout'
// import ProductDetailsPage from './pages/ProductDetailsPage'
import { Suspense, lazy } from 'react'

const ProductDetailsPage = lazy(() => {
	return import('./pages/ProductDetailsPage')
})

const App = () => {
	return (
		<div>
			{/* <Header /> */}
			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route index element={<HomePage />} />
					<Route path='products' element={<ProductsPage />} />
					<Route
						path='products/:productId'
						element={
							<Suspense fallback='loading...!!!!!!!'>
								<ProductDetailsPage />
							</Suspense>
						}
					/>
				</Route>

				<Route path='/' element={<SideBarLayout />}>
					<Route path='users' element={<UsersPage />} />
				</Route>
			</Routes>
		</div>
	)
}

export default App
