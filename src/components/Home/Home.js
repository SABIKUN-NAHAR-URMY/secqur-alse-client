import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { db } from '../../firebase/firebase.config';
import img from '../image/1.PNG';
import {collection, getDocs} from 'firebase/firestore'
import Event from './Event/Event';

const Home = () => {

    const [users, setUsers] = useState([]);
    const usersCollectionRef = collection(db, "dataUsers")

    useEffect(()=>{
        const getUsers = async () =>{
            const data = await getDocs(usersCollectionRef);
            console.log(data);
            setUsers(data.docs.map(doc => ({...doc.data(), id: doc.id})))
        }

        getUsers()
    },[])

    return (
        <div>
            <section>

                <div className='grid grid-cols-12'>
                    <div className='bg-blue-400 col-span-1'>

                    </div>
                    {/* details */}
                    <div className='col-span-4'>
                        <div>
                            
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
                            users.map(user => <Event 
                            key={user.id}
                            user={user}
                            ></Event>)
                           } 
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;