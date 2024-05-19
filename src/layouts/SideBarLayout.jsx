import React from 'react'
import { Outlet } from 'react-router-dom'

const SideBarLayout = () => {
	return (
		<div>
			<div>SideBar</div>
			<Outlet />
		</div>
	)
}

export default SideBarLayout
