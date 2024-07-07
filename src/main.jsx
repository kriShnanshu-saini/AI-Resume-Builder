import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import SignInPage from '@/auth/sign-in/SignInPage.jsx';
import { ClerkProvider } from '@clerk/clerk-react';
import { Home, Dashboard, EditResume } from '@/pages/index.js';
import 'react-toastify/dist/ReactToastify.css';
import { Toaster } from '@/components/ui/sonner';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: '/dashboard',
				element: <Dashboard />,
			},
			{
				path: '/dashboard/resume/:resumeId/edit',
				element: <EditResume />,
			},
		],
	},
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/auth/sign-in',
		element: <SignInPage />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ClerkProvider publishableKey={PUBLISHABLE_KEY}>
			<RouterProvider router={router} />
			<Toaster visibleToasts={2} />
		</ClerkProvider>
	</React.StrictMode>
);
