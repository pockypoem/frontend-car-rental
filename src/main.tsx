import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './layouts/Dashboard.tsx';
import Cars from './pages/dashboard/Cars.tsx';
import Home from './pages/dashboard/Home.tsx';
import SearchCar from './pages/SearchCar.tsx';
import Login from './pages/Login.tsx';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/cari-mobil',
    element: <SearchCar />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      {
        path: '/dashboard',
        element: <Home />
      },
      {
        path: '/dashboard/cars',
        element: <Cars />
      }
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
