import { createBrowserRouter } from 'react-router-dom'
import MayinLayout from '../components/main-layout/MainLayout'
import Cards from '../components/cards/cards'
import Cart from '../components/cart/catr'

export const router = createBrowserRouter([
	{
		path: '/',
		element: <MayinLayout />,
		children: [
			{
				path: '/',
				element: <Cards />,
			},
			{
				path: '/cart',
				element: <Cart />,
			},
		],
	},
])
