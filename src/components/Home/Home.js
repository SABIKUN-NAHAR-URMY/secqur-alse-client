import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { db } from '../../firebase/firebase.config';
import img from '../image/1.PNG';
import { collection, getDocs } from 'firebase/firestore'

const Home = () => {

    const [users, setUsers] = useState([]);
    const [userItem, setUserItem] = useState([]);
    const usersCollectionRef = collection(db, "dataUsers")

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            console.log(data);
            setUsers(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        }

        getUsers()
    }, [])

    const getDataItem = (user) => {
        setUserItem(user);
    }

    return (
        <div>
            <section>

                <div className='grid grid-cols-12'>
                    <div className='bg-blue-400 col-span-1'>

                    </div>
                    {/* details */}
                    <div className='col-span-4'>
                        <div className='m-28'>
                            <div className='mb-5 text-xl font-bold'>
                                <h1>{userItem._id}</h1>
                                <p>Person Detected</p>
                            </div>

                            <div className='mb-5 text-xl'>
                                <h1>Name: {userItem.Name}</h1>
                                <h1>Location: {userItem.Location}</h1>
                                <h1>Date: {userItem.Date}</h1>
                                <h1>Time: {userItem.Time}</h1>
                            </div>

                            <div className='text-xl'>
                                <h1>Description: <br />
                                {userItem.Name} detected at {userItem.Location} on {userItem.Date}.
                                </h1>
                            </div>
                        </div>
                    </div>

                    {/* image */}
                    <div className='col-span-3'>
                        <p className='text-lg font-bold'>Female</p>
                        <img src={img} alt="" />
                    </div>

                    {/* events */}
                    <div className='border border-slate-400 col-span-4 p-3'>
                        <div className='flex justify-between'>
                            <p className='text-lg font-bold'>Events</p>
                            <p>icon</p>
                        </div>

                        <div>
                            {
                                users.map(user => <div onClick={() => getDataItem(user)}>
                                    <div className='border cursor-pointer bg-zinc-400 p-2 text-lg font-semibold focus:bg-gray-800 focus:text-white mb-2'>
                                        <div className='flex justify-between'>
                                            <h1>{user._id}: {user.Location}</h1>
                                            <h1>{user.Date}  {user.Time}</h1>
                                        </div>
                                        <h1>Person Detected</h1>
                                    </div>
                                </div>)
                            }

                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;