import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Componant/Main.jsx';
import Home from './Componant/Home.jsx';
import OrderReview from './Componant/OrderReview.jsx';
import About from './Componant/About.jsx';
import Contact from './Componant/Contact.jsx';
import Grandpa from './Componant/Grandpa/GRandpa.jsx';

const router = createBrowserRouter([{
  path: '/',
  element: <Main></Main>,
  children: [
    {
      path: '/',
      element: <Home></Home>,
      loader: () => fetch('tShirt.json')


    },
    {
      path: '/order',
      element: <OrderReview></OrderReview>

    },
    {
      path: '/about',
      element: <About></About>
    },
    {
      path: '/grandpa',
      element: <Grandpa></Grandpa>
    },
    {
      path: '/contact',
      element: <Contact></Contact>
    },
  ]
}
])

ReactDOM.createRoot(document.getElementById('root')).render(

  <RouterProvider router={router}></RouterProvider>
)
