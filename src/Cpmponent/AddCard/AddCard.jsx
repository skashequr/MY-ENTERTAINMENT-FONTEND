
import { useLoaderData } from 'react-router-dom';
import UserAddCard from '../UserAddCard/USerAddedCard';

const AddCard = () => {
    // const {user} = useContext(AuthContext)
    // const email = user?.email;
    // console.log(email);
    // const emails = useParams()
    // console.log(emails);

   const addCardData = useLoaderData()
   console.log(addCardData);
   
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-6'>
            
            {
                addCardData?.map(singleaddData => <UserAddCard key={singleaddData._id} singleaddData={singleaddData}></UserAddCard>)
            }
        </div>
    );
};

export default AddCard;