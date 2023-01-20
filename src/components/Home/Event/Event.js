import React from 'react';
import { Link } from 'react-router-dom';

const Event = ({ user }) => {
    console.log(user);
    return (
        <Link to={`/details/${user.id}`}>
            <div className='border cursor-pointer bg-zinc-400 p-2 text-lg font-semibold focus:bg-gray-800 focus:text-white mb-2'>
                <div className='flex justify-between'>
                    <h1>{user._id}: {user.Location}</h1>
                    <h1>{user.Date}  {user.Time}</h1>
                </div>
                <h1>Person Detected</h1>
            </div>
        </Link>

    );
};

export default Event;