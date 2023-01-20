import React from 'react';

const Header = () => {
    return (
        <div>
             <section className='bg-indigo-900 flex justify-between p-4'>
                <div className='text-teal-600 text-2xl font-semibold'>
                    <h1><span className='text-3xl'>S</span>ECQUR<span className='text-3xl text-red-600'>AI</span>SE</h1>
                </div>

                <div>
                    <button className='bg-lime-500 p-2 mr-3'>Count</button>
                    <button className='bg-red-600 p-2'>Count</button>
                </div>
            </section>
        </div>
    );
};

export default Header;