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
import SeeDetails from "./Cpmponent/SeeDetails/SeeDetails";
import AddCard from "./Cpmponent/AddCard/AddCard";
import Update from "./Cpmponent/Pages/UpdateProduct/Update";

 export const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <ErrorPage></ErrorPage>,
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element: <Home></Home>,
            loader: ()=> fetch("https://back-end-nine-lake.vercel.app/categorie")
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
            element: <ProductsCard></ProductsCard>,
            loader: ({ params }) => fetch(`https://back-end-nine-lake.vercel.app/${params.id}`),
           
          },
          {
            path: "/:id/:iddetails",
            element:<PrivetRoutes> <SeeDetails></SeeDetails></PrivetRoutes>,
            loader: ({ params }) => fetch(`https://back-end-nine-lake.vercel.app/${params.id}/${params.iddetails}`)
          },
        {
            path: "/login",
            element: <LoginForm></LoginForm>
        },
        {
            path: "/regester",
            element: <Regester></Regester>
        },
        {
            path: "/myCart/:email",
            element: <PrivetRoutes><AddCard></AddCard></PrivetRoutes>,
            loader: ({ params }) => fetch(`https://back-end-nine-lake.vercel.app/myCard/${params.email}`) //learningwithextracare@gmail.com
        },
        {
          path: "/:id/:iddetails/:update",
          element: <Update></Update>,
          loader: ({ params }) => fetch(`https://back-end-nine-lake.vercel.app/${params.id}/${params.iddetails}/${params.update}`)
        }
        
      ]        
    },
  ]);