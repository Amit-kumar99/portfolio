import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from "./components/Home"
import Resume from "./components/Resume"
import Projects from "./components/Projects"

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/about",
        element: <Resume/>
      },
      {
        path: "/projects",
        element: <Projects/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </RouterProvider>
)
