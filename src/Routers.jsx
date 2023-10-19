import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "./Cpmponent/Main/Main";
import ErrorPage from "./Cpmponent/Pages/ErrorPage";
import { Home } from "./Cpmponent/Pages/Home/Home";
import AddProduct from "./Cpmponent/Pages/AddProduct/AddProduct";
import AddNewBrand from "./Cpmponent/Pages/AddNewBrand/AddNewBrand";
import ProductsCard from "./Cpmponent/ProductsCard/ProductsCard";
import Login from "./Cpmponent/Pages/Login/Login";

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
            element: <AddProduct></AddProduct>,
        },
        {
               
            path:"/addNewBrand",
            element: <AddNewBrand></AddNewBrand>,
                
        },
        {
            path: "/:id",
            element: <ProductsCard></ProductsCard>,
            loader: ({params}) => fetch(`http://localhost:5000/${params.id}`)
        },
        {
            path: "/login",
            element: <Login></Login>
        }
    ]
    },
  ]);