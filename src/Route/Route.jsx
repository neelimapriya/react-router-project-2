import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import Home from '../Pages/HOme/Home';
import Products from '../Pages/Products/Products';
import Product from '../Pages/Product/Product';

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
          path : "/products/:id",
          element : <Product></Product>,
          loader : (object)=>fetch(`https://dummyjson.com/products/${object.params.id}`)
        },
        {
            path:'/dashboard',
            element:<div>Dashboard here</div>
        }
      ]
    }
  ])

export default myCreatedRoute;