import React from 'react';
import { Button } from 'react-bootstrap';
import { Google } from 'react-bootstrap-icons';

const SocialSignup = () => {
    return (
        <div>

            <div className="other mx-auto">
                <Button className='google bg-dark text-white mx-auto rounded-pill px-5 '><Google className='me-2' color="white" size={20} />   Register with Google </Button>


            </div>
     

        </div>
    );
};

export default SocialSignup;