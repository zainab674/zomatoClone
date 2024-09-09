import React, { useState } from 'react';

import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

function FAQItem({ question, answer }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <div
                className="flex justify-between items-center py-4 mb-6 w-full cursor-pointer border-t"
                onClick={() => setIsOpen(!isOpen)}
            >
                <h2 className="text-xl font-normal text-gray-950 ">{question}</h2>
                <span className="text-gray-500">{isOpen ? <IoIosArrowUp className='text-xl text-gray-800 font-bold ' /> : <IoIosArrowDown className='text-xl text-gray-800 font-bold ' />}</span>
            </div>
            {isOpen && <p className="text-gray-500 text-lg  font-normal text-left ">{answer}</p>}
        </div>
    );
}

const Questions = () => {



    const faqs = [
        {
            question: "Popular cuisines near me",
            answer: " Beverages food near meBiryani food near meBurger food near meCafe food near meChinese food near meCoffee food near meDesserts food near meIce Cream food near meMithai food near meMomos food near meMughlai food near meNorth Indian food near mePasta food near mePizza food near meRolls food near meSandwich food near meShake food near meSouth Indian food near meStreet food near meWraps food near me",
        },
        {
            question: "Popular restaurant types near me",
            answer: "Bakeries near meBeverage Shops near meBhojanalya near meCafés near meCasual Dining near meDessert Parlors near meDhabas near meFine Dining near meFood Courts near meIrani Cafes near meKiosks near meQuick Bites near meSweet Shops near me",
        },
        {
            question: "Cities We Deliver To",
            answer: "It’s up to you. Some hosts like to greet guests in person, while others prefer to communicate through the app or phone.",
        },

    ];


    return (
        <>
            <div className='md:px-20 px-4'>
                <h1 className='text-3xl text-gray-800 font-medium mb-3'>Explore Options near me</h1>

                <div className=" mx-auto p-6 flex w-full justify-between">
                    <div className='w-full px-4 '>
                        {faqs.map((faq, index) => (
                            <FAQItem key={index} question={faq.question} answer={faq.answer} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Questions;