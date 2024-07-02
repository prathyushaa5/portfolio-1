import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import App from "../App";
  import Home from "../components/Home";
  import Project from "../components/Project";
  import Contact from "../components/Contact";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children:[
        {
            path:'/',
            element:<Home/>
        }
      
    ,
    {
        path:"/project",
         element:<Project/>
    },
{
    path:"/Contact",
    element:<Contact/>
},
]}
  ]);
  export default router  