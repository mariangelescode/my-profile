import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { createBrowserRouter, RouterProvider} from 'react-router-dom';

import Home, {loader as homeLoader} from './routes/Home'
import Repos, {loader as reposLoader} from './routes/Repos'
import Gists, {loader as gistsLoader} from './routes/Gists'
import RepoDetail, {loader as repoDetailLoader} from './routes/RepoDetail'

// import Home, {loader as homeLoader} from './routes/Home'


const router = createBrowserRouter([
  {
    path:'/my-profile/', //donde y cuando
    element: <Home />, // qué
    loader: homeLoader,
    //errorElement: <Error />
    children: [
      {
        path:'/my-profile/repos', //donde y cuando
        element: <Repos />, // qué
        loader: reposLoader,
      },
      {
        path:'/my-profile/gists', //donde y cuando
        element: <Gists />, // qué
        loader: gistsLoader,
      },
    
    ]
  },
  {
    path:'/my-profile/repodetail/:repoId', //donde y cuando
    element: <RepoDetail />, // qué
    // loader: ({params}) => { repoDetailLoader(params)}
    loader: repoDetailLoader,
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
