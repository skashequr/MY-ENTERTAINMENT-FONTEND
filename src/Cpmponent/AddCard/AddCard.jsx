import { useLoaderData } from 'react-router-dom';
import UserAddCard from '../UserAddCard/USerAddedCard';
import { useState } from 'react';

const AddCard = () => {
  const addCardData = useLoaderData();
  console.log(addCardData);

  
  const delite = (id) => {
    console.log(`Deleting item with id ${id}`);
  
    setData((prevData) => prevData.filter((item) => item._id !== id));
    
    fetch(`https://back-l4jh4jlgw-sheikh-ashequr-rahmans-projects.vercel.app/myCard/${email}/${id}`, {
      method: "DELETE"
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error("Error deleting:", error);
      });
  };

  const [data, setData] = useState(addCardData);

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-6'>
      {data?.map((singleaddData) => (
        <UserAddCard delite={() => delite(singleaddData._id)} key={singleaddData._id} singleaddData={singleaddData} />
      ))}
    </div>
  );
};

export default AddCard;
