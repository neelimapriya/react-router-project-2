import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/HOme/Home';
import Products from '../Pages/Products/Products';

const myCreatedRoute = createBrowserRouter([
    {
      path:'/',
      element:<MainLayout></MainLayout>,
      children:[
        {
          path:'/',
          element:<Home></Home>
        },
        {
          path:'/products',
          element:<Products></Products>,
          loader:()=>fetch('https://dummyjson.com/products')
        },
        {
            path:'/dashboard',
            element:<div>Dashboard here</div>
        }
      ]
    }
  ])

export default myCreatedRoute;