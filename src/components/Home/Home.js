import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { db } from '../../firebase/firebase.config';
import img from '../image/1.PNG';
import { collection, getDocs } from 'firebase/firestore';
import icon from '../image/sandwichIcon.png';
import Loading from '../Loading/Loading';

const Home = () => {

    const [allUsers, setAllUsers] = useState([]);
    const [users, setUsers] = useState([]);
    const [userItem, setUserItem] = useState([]);
    const [loading, setLoading] = useState(true);
    const usersCollectionRef = collection(db, "dataUsers")

    useEffect(() => {
        const getUsers = async () => {
            const data = await getDocs(usersCollectionRef);
            setLoading(false);
            setUsers(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
            setAllUsers(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        }

        getUsers();

    }, [])

    const getDataItem = (user) => {
        setUserItem(user);
    }

    const handelChennai = () =>{
        const filterEventChennai = allUsers.filter(usersData1 => usersData1.Location === 'Chennai');

            setUsers(filterEventChennai);
    }

    const handelHyderabad = () =>{
        const filterEventHyderabad = allUsers.filter(usersData2 => usersData2.Location === 'Hyderabad');
            setUsers(filterEventHyderabad);
    }

    const handelBangalore = () =>{
        const filterEventBangalore = allUsers.filter(usersData2 => usersData2.Location === 'Bangalore');
            setUsers(filterEventBangalore);
    }

    const handelMale = () =>{
        const filterEventMale = allUsers.filter(usersData2 => usersData2.Gender === 'Male');
            setUsers(filterEventMale);
    }

    const handelFemale = () =>{
        const filterEventFemale = allUsers.filter(usersData2 => usersData2.Gender === 'Female');
            setUsers(filterEventFemale);
    }

    if(loading){
        return <Loading></Loading>
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
                        <p className='text-2xl m-3 font-bold'>Female</p>
                        <img src={userItem.img} alt="" />
                    </div>

                    {/* events */}
                    <div className='border border-slate-400 col-span-4 p-3'>
                        <div className='flex justify-between'>
                            <p className='text-2xl font-bold'>Events</p>
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn bg-white m-1"><img className='w-10' src={icon} alt="" /></label>
                                <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                    <li><button onClick={handelChennai}>Chennai</button></li>
                                    <li><button onClick={handelHyderabad}>Hyderabad </button></li>
                                    <li><button onClick={handelBangalore}>Bangalore </button></li>
                                    <li><button onClick={handelMale}>Male</button></li>
                                    <li><button onClick={handelFemale}>Female</button></li>
                                </ul>
                            </div>
                        </div>

                        <div>
                            {
                                users.map(user => <div key={user.id} onClick={() => getDataItem(user)}>
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