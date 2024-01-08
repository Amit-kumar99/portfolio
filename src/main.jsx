import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Home";
import Projects from "./components/Projects";
import ContactMe from './components/ContactMe';

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
        path: "/projects",
        element: <Projects/>
      },
      {
        path: "/contact",
        element: <ContactMe/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </RouterProvider>
)
