import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useLoaderData, useParams } from 'react-router-dom';

const AddCard = () => {
    // const {user} = useContext(AuthContext)
    // const email = user?.email;
    // console.log(email);
    // const emails = useParams()
    // console.log(emails);

   const addCardData = useLoaderData()
   console.log(addCardData);
   
    return (
        <div>
            rthrft sdfgvdsgbd
        </div>
    );
};

export default AddCard;