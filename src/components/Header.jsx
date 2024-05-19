import { NavLink } from 'react-router-dom'

const Header = () => {
	return (
		<navbar>
			<ul>
				<li>
					<NavLink to='/'>Home</NavLink>
				</li>
				<li>
					<NavLink to='/products'>Products</NavLink>
				</li>
				<li>
					<NavLink to='/users'>User</NavLink>
				</li>
			</ul>
		</navbar>
	)
}

export default Header
