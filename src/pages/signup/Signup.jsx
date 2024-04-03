import React from 'react';
import SignupForm from '../../components/SignupForm';
import Header from '../../components/Header';

const Signup = () => {
    return (
        <div>
            <div>
                <Header/>

            </div>
            <div className='max-w-4xl p-6 mx-auto bg-white rounded-md shadow-md'>
            <SignupForm/>
            </div>
        </div>
    );
};

export default Signup;