import { useContext, useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function SeeDetails() {
  const {user} = useContext(AuthContext)
  const detailsData = useLoaderData();
  const [data] = detailsData;
  const { name, brandName, price, shortDescription, image, rating } = data;
  
 

  const handleAddCard = (data)=> {
    const email = user?.email;
    const cardData = { data, email };
    fetch(`http://localhost:5000/myproducts?email=${email}`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify(cardData)
})
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
     toast("Add Sucessfully!");

  })
  .catch((error) => {
    console.error("Error:", error);
  });

    
    
  }

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="container px-6 py-10 mx-auto">
        <div className="lg:-mx-6 lg:flex lg:items-center">
          <img
            className="  object-center lg:w-1/2 lg:mx-6 w-full h-96 rounded-lg lg:h-[36rem]"
            src={image}
            alt=""
          />

          <div className="mt-8 lg:w-1/2 lg:px-6 lg:mt-0">
            <p className="text-5xl font-semibold text-blue-500">“</p>

            <h1 className="text-2xl font-semibold text-gray-800 dark:text-white lg:text-3xl lg:w-96">
              {name}
            </h1>

            <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400">
              {shortDescription}
            </p>

           <div className="flex justify-between">
           <div>
            <h3 className="mt-6 text-lg font-medium text-blue-500">
              {brandName}
            </h3>
            </div>

            <div className="flex items-center">
              <svg
                className="w-10 h-10 text-yellow-300 mr-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 22 20"
              >
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
              </svg>
              <p className="ml-2 text-sm font-bold text-gray-900 dark:text-white">
                {rating} star
              </p>
            
            </div>
           </div>

            <div className="flex items-center justify-between mt-12 lg:justify-start">
              <div className="flex justify-between gap-10">
                <div>
                  <button onClick={()=> handleAddCard(data)} className="btn btn-primary">Add Cart</button>
                </div>
                <div>
                  <p className="text-4xl font-bold">{price}$</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SeeDetails;
