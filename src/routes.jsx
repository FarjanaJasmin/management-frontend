import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./components/ui/Home/Home";
import Login from "./components/ui/Login/Login";
import Admin from "./components/ui/Dashboard/Admin";
import Teacher from "./components/ui/Dashboard/Teacher";
import Student from "./components/ui/Dashboard/Student";
import Routine from "./components/ui/Routine/Routine";
const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
      children: [
        {
          path: "/",
          element: <Home/>
        },{
          path: "/login",
          element: <Login/>
        },{
          path: "/admin",
          element: <Admin/>
        },{
          path: "/teacher",
          element: <Teacher/>
        },{
          path: "/student",
          element: <Student/>
        },{
          path: "/routine",
          element: <Routine/>
        },{
          path: "*",
          element: <div className="h-full flex justify-center items-center text-4xl">404! Not found</div>
        }
      ]
    }
  ]);

  export default router;