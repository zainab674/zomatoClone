import React from 'react';
import DiscountDine from './../Restaurants/DineIn/components/Discount';

import FAQItem from '../../utils/faq';


const faqs = [
    {
        question: "What will Zomato charge me for creating a page on its platform?",
        answer: "Creating a restaurant page on Zomato is free of cost. You can maintain your page by replying to reviews and do a lot more without any charges.",
    },
    {
        question: "What all documents are required for registering on online ordering?",
        answer: "Registration for online ordering requires:a: FSSAI certificate (application no. if FSSAI is not present),b: PAN Card,c: GST certificate (if applicable)",
    },
    {
        question: "I have a large fleet of delivery boys, why should I use Zomato’s delivery service?",
        answer: "You can use your and Zomato's delivery fleet simultaneously to increase the network of your delivery radius. Also, our delivery fleet delivers orders in minimum possible time, a key factor leading to increased customer satisfaction.",
    },
    {
        question: "What happens if the average order value of Zomato orders is very low",
        answer: "Average order value from our platform is generally more than Rs 250. However, in some cases, users want to try out your place by ordering for lesser amount. But we have observed that they eventually come back with higher value orders if they like your food..",
    },

];


const Section4 = () => {
    return (

        <>
            <div className='w-10/12 mx-auto md:mx-40 flex flex-col items-start justify-start mt-20'>
                <h1 className='text-4xl text-gray-800 font-medium'>What do you get on sign-up</h1>
                <h2 className='text-xl text-gray-600  mt-4  mr-40'>Zomato Partner Platform helps you take your business to new heights instantly with no hassle and 100% transparency!</h2>
                <div className='w-1/3 ml-5 mt-10'>

                    <div className='relative mb-10'>
                        <span className='absolute top-0 left-0 mt-1 text-xl border border-gray-400 w-8 h-8 flex items-center justify-center rounded-full text-gray-500 font-extralight'>
                            1
                        </span>
                        <h1 className='text-xl text-gray-800 font-medium ml-10'>Restaurant Partner app</h1>
                        <p className='text-lg text-gray-500 ml-10'>Manage all your orders on your smartphone with our Android app</p>
                    </div>
                    <div className='relative mb-10'>
                        <span className='absolute top-0 left-0 mt-1 text-xl border border-gray-400 w-8 h-8 flex items-center justify-center rounded-full text-gray-500 font-extralight'>
                            2
                        </span>
                        <h1 className='text-xl text-gray-800 font-medium ml-10'>Restaurant Partner web Dashboard</h1>
                        <p className='text-lg text-gray-500 ml-10'>Manage all your orders on your desktop or laptop</p>
                    </div>
                    <div className='relative mb-10'>
                        <span className='absolute top-0 left-0 mt-1 text-xl border border-gray-400 w-8 h-8 flex items-center justify-center rounded-full text-gray-500 font-extralight'>
                            3
                        </span>
                        <h1 className='text-xl text-gray-800 font-medium ml-10'>API Integration</h1>
                        <p className='text-lg text-gray-500 ml-10'>Manage all your orders on your existing Point of Sale (POS) or third-party software</p>
                    </div>



                </div>
            </div>
            <div className='mx-auto w-10/12 '>
                <DiscountDine />


                <div className='px-4 mt-32'>
                    <h1 className='text-4xl text-gray-800 font-medium mb-3 text-center'>Frequently Asked Questions</h1>

                    <div className=" mx-auto p-6 flex w-full justify-between">
                        <div className='w-full px-4 '>
                            {faqs.map((faq, index) => (
                                <FAQItem key={index} question={faq.question} answer={faq.answer} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Section4;
