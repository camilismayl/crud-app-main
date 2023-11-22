import { createBrowserRouter } from "react-router-dom";
import { Routes } from "./routes";

import AddTodo from "../pages/add/add.component";
import HomeComponent from "../pages/home/home.component";
import EditTodo from "../pages/edit/edit.component";
const router = createBrowserRouter([
  {
    path: Routes.home,
    element: <HomeComponent />,
  },
  {
    path: Routes.addtodo,
    element: <AddTodo />,
  },
  {
    path: Routes.edittodo,
    element: <EditTodo />,
  },
  {
    path: "*",
    element: <h1>Page not found: 404</h1>,
  },
]);
export default router;
