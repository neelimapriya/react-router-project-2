import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './Layout/MainLayout.jsx'
import Home from './Pages/HOme/Home.jsx'
import Products from './Pages/Products/Products.jsx'
import myCreatedRoute from './Route/Route.jsx'


// const myCreatedRoute = createBrowserRouter([
//   {
//     path:'/',
//     element:<div>This is my first route</div>
//   },
//   {
//     path:'/products',
//     element:<div>Products route </div>
//   },
//   {
//     path:'/about',
//     element:<div>about route </div>
//   }
// ])


// nasted object
// const myCreatedRoute = createBrowserRouter([
//   {
//     path:'/',
//     element:<section>
//       <div>This is a fixed item</div>
//       <Outlet></Outlet>
//     </section>,
//     children:[
//       {
//         path:'/',
//         element:<div>This is home route</div>
//       },
//       {
//         path:'/products',
//         element:<div>This is products page</div>
//       }
//     ]
//   }
// ])


// const myCreatedRoute = createBrowserRouter([
//   {
//     path:'/',
//     element:<MainLayout></MainLayout>,
//     children:[
//       {
//         path:'/',
//         element:<Home></Home>
//       },
//       {
//         path:'/products',
//         element:<Products></Products>
//       }
//     ]
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={myCreatedRoute}></RouterProvider>
  </React.StrictMode>,
)
