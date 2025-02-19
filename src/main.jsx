import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { GlobalStyle } from './index.js'
import { router } from './router/router.jsx'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<GlobalStyle />
		<RouterProvider router={router} />
	</StrictMode>
)
