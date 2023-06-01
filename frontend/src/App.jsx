import { createBrowserRouter, redirect, RouterProvider } from 'react-router-dom'
import { useState, useEffect, useContext} from 'react'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import ProductList from './pages/ProductList/ProductList'
import OrderList from './pages/OrderList/OrderList'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import OrderDetails from './pages/OrderDetails/OrderDetails'
import AddProduct from './pages/AddProduct/AddProduct'
import NotFound from './pages/NotFound/NotFound'
import ContextLayout from './layouts/ContextLayout'
import UserContextProvider, { UserContext } from './contexts/UserContext'

const App = () => {

  const router = createBrowserRouter([
    {
      element: <ContextLayout />,
      children: [
        {
          path: '/',
          element: <RootLayout />,
          children: [
            {
              path: '/',
              element: <Home />
            },
            {
              path: '/productlist',
              element: <ProductList />
            },
            {
              path: '/products/:id',
              element: <ProductDetails />
            },
            {
              path: '/orders/:id',
              element: <OrderDetails />
            },
            {
              path: '/add',
              element: 
              <AddProduct />
            },
            {
              path: '/orderlist',
              element: <OrderList />
            },
            {
              path: '/login',
              element: <Login />
            },
            {
              path: '*',
              element: <NotFound />
            },
          ]
        }
      ]
    }
  ])

  return (
    <UserContextProvider>
      <RouterProvider router={router} />
    </UserContextProvider>
  )
}

export default App