import { useLoaderData  } from "react-router-dom";
import Slider from "../Slider/Slider";
import Cards from "./Cards";

const ProductsCard = () => {
    const products = useLoaderData()
    console.log(products);
    return (
        <div>
            <Slider></Slider>
            
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
           {
                products.map(products => <Cards products={products} key={products._id}></Cards>)
            }
           </div>

        </div>
    );
};

export default ProductsCard;