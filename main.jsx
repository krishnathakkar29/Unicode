import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Components/Layout/Layout.jsx'
import Login from './Components/Login/Login.jsx'
import Signup from './Components/SignUp/Signup.jsx'



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route  path='/' element={<Layout />}>
      <Route path='' element={<Login />}/>
      <Route path='signup' element={<Signup />}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
