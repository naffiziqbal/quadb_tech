import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import App from "../App";
import Home from "../pages/Home/HomePage";
import AddNew from "../pages/Todos/AddNew";
import Completed from "../pages/Todos/Completed";
import Deleted from "../pages/Todos/Deleted";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/add-new",
        element: <AddNew />,
      },
      {
        path: "/completed",
        element: <Completed />,
      },
      {
        path: "/deleted",
        element: <Deleted />,
      },
    ],
  },
]);

export default router;
