import React from 'react';

const About = () => {
    return (
        <div className='container m-lg-5 m-sm-2'>
            <div className="container border border-1 border-warning w-lg-75  w-sm-90 mx-auto m-5  p-4 rounded-2   ">
                <header><h3 className='text-decoration-underline'>Why this website?</h3></header>
                <p>This is a websie where you can add some books with image URL, Book name , supplyer name , Price and a short description. You can delete an item from manage item page. and update an item quantity (you can increase or decrease quantity ) from details button.</p>
            </div>
            <div className="container border border-1 border-warning w-lg-75  w-sm-90 mx-auto m-5  p-4 rounded-2   ">
                <header><h3 className='text-decoration-underline'>Why <span className="text-danger fw-bold">BOOKrio</span>?</h3></header>
                <p><span className="text-danger fw-bold">BOOKrio</span> is a online based book warehouse. Where you can put your book as a store. and take delivare on anytime. we provide you free pickup and delevary service . You can trust us about your data and product. </p>
            </div>
        </div>
    );
};

export default About;