import React, { useState } from 'react';
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoIosHeartEmpty } from "react-icons/io";

import ContactModal from '../../utils/contactModal';
import { GrDirections } from "react-icons/gr";
const FixedFooter = () => {

    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => {

        setModalOpen(true);
    };
    const closeModal = () => {

        setModalOpen(false);
    };



    const openDirections = () => {
        window.open('https://maps.google.com/?q=236');
    };
    return (
        <>
            <footer className="fixed md:hidden bottom-0 left-0 w-full bg-white text-gray-600 flex justify-center items-center py-3 shadow-lg z-50">

                <div className={`flex flex-col items-center mx-1 text-gray-600`}>
                    <GrDirections className="text-2xl"
                        onClick={openDirections} />
                    <span className="mt-1 text-sm">Directions</span>
                </div>


                <div className={`flex flex-col items-center mx-4 text-gray-600 `}>
                    <IoPersonCircleOutline className="text-2xl"
                        onClick={() => openModal()}
                    />
                    <span className="mt-1 text-sm"
                        on
                    >Contact</span>
                </div>
            </footer>
            <ContactModal
                isOpen={isModalOpen}
                onClose={closeModal}

            />

        </>
    );
};

export default FixedFooter;
