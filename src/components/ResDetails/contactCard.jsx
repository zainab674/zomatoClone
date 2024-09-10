import React from 'react';

const ContactCard = () => {
    const phoneNumbers = [
        '+919529292901',
        '+919417605334',
        '+919929948009',
    ];

    const handleCopy = () => {
        navigator.clipboard.writeText('236, Mukharjee Nagar, Sri Ganganagar Locality, Sri Ganganagar');
        alert('Address copied!');
    };

    const openDirections = () => {
        window.open('https://maps.google.com/?q=236');
    };

    return (
        <div className="p-4 bg-white rounded-lg shadow-md max-w-sm">
            <h2 className=" font-semibold mb-2">Call</h2>
            <ul className="mb-4">
                {phoneNumbers.map((phone, index) => (
                    <li key={index} className="text-red-300 text-xs font-medium hover:text-red-700">
                        {phone}
                    </li>
                ))}
            </ul>

            <h2 className="mt-10 font-semibold mb-2">Direction</h2>
            <div className="mb-4">
                {/* <img

                    src="https://www.openstreetmap.org/export/embed.html?bbox=73.87911891937257%2C30.19836845145418%2C73.8899486064911%2C30.20766103492345&layer=mapnik"
                    alt="map"
                    className="rounded-lg"
                /> */}
                <iframe
                    src="https://www.openstreetmap.org/export/embed.html?bbox=73.87911891937257%2C30.19836845145418%2C73.8899486064911%2C30.20766103492345&layer=mapnik"
                    width="100%"
                    height="400"
                    frameborder="0"
                    scrolling=""
                    marginheight="0"
                    marginwidth="0"
                    className="rounded-lg"
                    title="OpenStreetMap"
                ></iframe>

                <p className="mt-2 text-sm text-gray-700">
                    236, Mukharjee Nagar, Sri Ganganagar Locality, Sri Ganganagar
                </p>
            </div>

            <div className="flex gap-4 mt-10">
                <button
                    onClick={handleCopy}
                    className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300"
                >
                    Copy
                </button>
                <button
                    onClick={openDirections}
                    className="border border-red-500 text-red-500 px-4 py-2 rounded-md "
                >
                    Direction
                </button>
            </div>
        </div>
    );
};

export default ContactCard;
