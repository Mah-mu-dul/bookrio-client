import React from 'react';
import { Button } from 'react-bootstrap';
import { Google } from 'react-bootstrap-icons';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SocialSignup = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    

    return (
        <div>

            <div className="other mx-auto">
                <Button onClick={() => signInWithGoogle()} className='google bg-dark text-white mx-auto rounded-pill px-5 '><Google className='me-2' color="white" size={20} />Registration with Google </Button>

            </div>
     

        </div>
    );
};

export default SocialSignup;