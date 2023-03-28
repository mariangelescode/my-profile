import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { createBrowserRouter, RouterProvider} from 'react-router-dom';

import Home, {loader as homeLoader} from './routes/Home'
import Repos, {loader as reposLoader} from './routes/Repos'
import Gists, {loader as gistsLoader} from './routes/Gists'

// import Home, {loader as homeLoader} from './routes/Home'


const router = createBrowserRouter([
  {
    path:'/', //donde y cuando
    element: <Home />, // qué
    loader: homeLoader,
    //errorElement: <Error />
    children: [
      {
        path:'/repos', //donde y cuando
        element: <Repos />, // qué
        loader: reposLoader,
      },
      {
        path:'/gists', //donde y cuando
        element: <Gists />, // qué
        loader: gistsLoader,
      },
    
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
