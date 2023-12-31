import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Statistics from "../Home/Statistics";
import Details from "../components/DetailsJobs/Details";
import AppliedJobs from "../components/AppliedJobs/AppliedJobs";

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
          element:<AppliedJobs></AppliedJobs>,
          loader: ()=> fetch('/jobs.json')
        },
        {
          path:'/blog',
          element:<h1>Blog</h1>
        },
        {
          path:'/job/:id',
          element:<Details></Details>,
          loader : ()=> fetch('../jobs.json')
        },
      ]
    },
  ]);
  export default router;