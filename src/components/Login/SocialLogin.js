import { Button } from 'react-bootstrap';
import React from 'react';
import { Google } from 'react-bootstrap-icons';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate()
    let errorelement;
    if (error) {
        errorelement = (
            <div>
                <p className='text-danger'> Error: {error.message}</p>
            </div>
        );
    }
    if (user) {
        navigate('/home')
    }


    return (
        <div>
            <div className="">
                {errorelement}
            </div>
            <div className="other mx-auto">
               
                <Button onClick={() => signInWithGoogle()} className='google bg-dark text-white mx-auto rounded-pill px-5 '><Google className='me-2' color="white" size={20} />Login with Google </Button>

            </div>

        </div>
    );
};

export default SocialLogin;