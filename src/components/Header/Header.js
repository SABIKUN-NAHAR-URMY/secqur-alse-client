import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase/firebase.config';

const Header = () => {
    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "dataUsers");

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setUsers(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        }
        getUsers();
    }, [])

        const allMale = users.filter(usr => usr.Gender === 'Male');
        const allFemale = users.filter(usr => usr.Gender === 'Female');

    return (
        <div>
            <section className='bg-indigo-900 flex justify-between p-4'>
                <div className='text-teal-600 text-2xl font-semibold'>
                    <h1><span className='text-3xl'>S</span>ECQUR<span className='text-3xl text-red-600'>AI</span>SE</h1>
                </div>

                <div>
                    <button className='bg-lime-500 px-7 py-2 mr-3'>{allMale.length}</button>
                    <button className='bg-red-600 px-7 py-2'>{allFemale.length}</button>
                </div>
            </section>
        </div>
    );
};

export default Header;