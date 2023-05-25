import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { useState, useEffect} from 'react'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import ProductList from './pages/ProductList/ProductList'
import OrderList from './pages/OrderList/OrderList'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import AddProduct from './pages/AddProduct/AddProduct'

const App = () => {

  const [user, setUser] = useState(null)


  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootLayout user={user} setUser={setUser}/>,
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
          path: '/add',
          element: <AddProduct />
        },
        {
          path: '/orderlist',
          element: <OrderList />
        },
        {
          path: '/login',
          element: <Login user={user} setUser={setUser} />
        }
      ]
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App