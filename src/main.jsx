import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import SignInPage from '@/auth/sign-in/SignInPage.jsx';
import Home from '@/pages/Home.jsx';
import Dashboard from '@/pages/Dashboard.jsx';

const router = createBrowserRouter([
	{
		element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/dashboard',
        element: <Dashboard/>
      }
    ]
	},
	{
		path: '/auth/sign-in',
		element: <SignInPage />,
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router}>
			<App />
		</RouterProvider>
	</React.StrictMode>
);
