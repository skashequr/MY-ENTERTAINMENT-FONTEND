import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "./Cpmponent/Main/Main";
import ErrorPage from "./Cpmponent/Pages/ErrorPage";
import { Home } from "./Cpmponent/Pages/Home/Home";
import AddProduct from "./Cpmponent/Pages/AddProduct/AddProduct";
import AddNewBrand from "./Cpmponent/Pages/AddNewBrand/AddNewBrand";
import ProductsCard from "./Cpmponent/ProductsCard/ProductsCard";
import Regester from "./Cpmponent/Pages/Regester/Regester";
import LoginForm from "./Cpmponent/Pages/Login/Login";
import PrivetRoutes from "./Cpmponent/PrivedRoutes/PrivetRoutes";

 export const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage></ErrorPage>,
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: ()=> fetch("http://localhost:5000/categorie")
        },
        {
            path: "/addProduct",
            element: <PrivetRoutes><AddProduct></AddProduct></PrivetRoutes>,
        },
        {
               
            path:"/addNewBrand",
            element: <PrivetRoutes> <AddNewBrand></AddNewBrand></PrivetRoutes>,
                
        },
        {
            path: "/:id",
            element: <PrivetRoutes><ProductsCard></ProductsCard></PrivetRoutes>,
            loader: ({params}) => fetch(`http://localhost:5000/${params.id}`)
        },
        {
            path: "/login",
            element: <LoginForm></LoginForm>
        },
        {
            path: "/regester",
            element: <Regester></Regester>
        }
    ]
    },
  ]);