import { useLoaderData } from "react-router-dom";
import { Banner } from "../../Banner/Banner";
import Banner2 from "../../Banner/Banner2";
import { Card } from "../../Card/Card";


export const Home = () => {
  const brands = useLoaderData()
  
  
    return (
      <div>
        <Banner2></Banner2>
        <h2 className="text-5xl text-center text-violet-950 font-extrabold mt-8"> Porducts  </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center">
         { 
         brands?.map((brand) => <Card key={brand?._id} brand={brand}></Card>)
         }
        </div>
        <Banner></Banner>
        
      </div>
    );
  };