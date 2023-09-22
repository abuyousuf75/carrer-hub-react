import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Statistics from "../Home/Statistics";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home></Home>,
      children : [
        {
          path:'/',
          element:<Statistics></Statistics>
        },
        {
          path:'/appliedJobs',
          element:<h2>A applied Jobs</h2>
        },
        {
          path:'/blog',
          element:<h1>Blog</h1>
        },
      ]
    },
  ]);
  export default router;