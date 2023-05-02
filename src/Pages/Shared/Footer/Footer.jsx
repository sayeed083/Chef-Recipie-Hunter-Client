import React from 'react';
import "./Footer.css";
import { FaFacebook, FaTwitter, FaGooglePlusG, FaPinterest, FaCopyright, FaMapMarkedAlt, FaPhoneSquareAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <div>
            <div className='backcolor py-3'>
                
                <h1 className='text-center title-color display-1 titles'>Subscribe and Stay updated !</h1>

                <div className='d-flex justify-content-around my-5'>

                    <div>

                        {/* Title Side  */}
                        <div className='d-flex align-items-center gap-3 mb-4'>
                        <img className='thumbimg' src="/public/cooking.png" alt="" />
                        <h1 className='title-color titles'>Chef's Customer</h1>
                        </div>
                        <p className='text-white describes'>We strive to provide you with a culinary experience that is both delicious and memorable. <br /> We use only the freshest and highest quality ingredients in our dishes and put our heart and soul into every plate we serve. <br /> We are always looking for ways to improve and enhance your dining experience, and we value your feedback. Please don't hesitate <br /> to let us know if there's anything we can do to make your visit more enjoyable.</p>
                        
                        <FaFacebook className='title-color     sizeforIcons   me-4 '></FaFacebook>
                        <FaTwitter className='title-color      sizeforIcons   me-4 '></FaTwitter>
                        <FaGooglePlusG className='title-color  sizeforIcons   me-4 '></FaGooglePlusG>
                        <FaPinterest className='title-color    sizeforIcons   me-4 '></FaPinterest>
                    </div>
                    <div>
                        <h1 className='title-color mb-4 titles'>Contact</h1>
                        <p className='text-white describes '> <FaMapMarkedAlt className='title-color me-2'></FaMapMarkedAlt> North Pirerbagh, 60 Feet, Mirpur-2, Dhaka-1216</p>
                        <p className='text-white describes '> <FaEnvelope className='title-color me-2'></FaEnvelope> chefcustomer@info.com</p>
                        <p className='text-white describes '> <FaPhoneSquareAlt className='title-color me-2'></FaPhoneSquareAlt>  +8801313495943</p>
                        
                    </div>
                </div>
                <div className=' text-white p-4'>
                <h5 className='text-center titles'> <FaCopyright></FaCopyright> Copyright 2023 Chef's Customer</h5>
            </div>


            </div>
            
        </div>
    );
};

export default Footer;