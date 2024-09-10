import React, { useState, useEffect, useRef } from 'react';

import Restaurants from '../../../objects/restaurants';

import { useParams } from 'react-router-dom';
import DishItem from '../../../utils/dishItem';
import { FaSearch } from 'react-icons/fa';
import AppDownloadBanner from '../../../utils/AppDownload';

const categories = [
    { name: "Breakfast", count: 2 },
    { name: "Chaat", count: 5 },
    { name: "Combos", count: 11 },
    { name: "South Indian", count: 14 },
    { name: "Chinese", count: 7 },
    { name: "Chowmein", count: 6 },
    { name: "Burgers", count: 4 },
    { name: "Special Agra Snacks and Sweets", count: 14 },
    { name: "Momos", count: 3 },
    { name: "Desserts and Beverages", count: 31 },
];


const cats = [
    {
        name: 'Breakfast',
        dishes: [
            { name: 'Pancakes', rating: 4, price: '$5', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
            { name: 'Omelette', rating: 3, price: '$4', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
        ],
    },
    {
        name: 'Chaat',
        dishes: [
            { name: 'Pani Puri', rating: 5, price: '$3', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
            { name: 'Bhel Puri', rating: 4, price: '$4', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
            { name: 'Papdi Chaat', rating: 4, price: '$3', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
            { name: 'Sev Puri', rating: 5, price: '$4', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
            { name: 'Dahi Puri', rating: 4, price: '$3', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
        ],
    },
    {
        name: 'Combos',
        dishes: [
            { name: 'Combo 1', rating: 4, price: '$10', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
            { name: 'Combo 2', rating: 5, price: '$12', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
            { name: 'Combo 3', rating: 3, price: '$8', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
            { name: 'Combo 4', rating: 4, price: '$11', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
            { name: 'Combo 5', rating: 5, price: '$13', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
            { name: 'Combo 6', rating: 4, price: '$10', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
            { name: 'Combo 7', rating: 3, price: '$9', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
            { name: 'Combo 8', rating: 4, price: '$11', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
            { name: 'Combo 9', rating: 5, price: '$12', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
            { name: 'Combo 10', rating: 4, price: '$10', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
            { name: 'Combo 11', rating: 5, price: '$13', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
        ],
    },
    {
        name: 'South Indian',
        dishes: [
            { name: 'Idli', rating: 4, price: '$5', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
            { name: 'Dosa', rating: 5, price: '$6', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
            { name: 'Sambar', rating: 4, price: '$4', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
            { name: 'Vada', rating: 4, price: '$4', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
            { name: 'Upma', rating: 5, price: '$5', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
            { name: 'Pongal', rating: 4, price: '$5', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
            { name: 'Uttapam', rating: 4, price: '$6', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
            { name: 'Rawa Dosa', rating: 5, price: '$6', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
            { name: 'Rasam', rating: 4, price: '$4', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
            { name: 'Curd Rice', rating: 5, price: '$5', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
            { name: 'Medu Vada', rating: 4, price: '$4', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
            { name: 'Masala Dosa', rating: 5, price: '$7', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
            { name: 'Pesarattu', rating: 4, price: '$6', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
            { name: 'Samosa', rating: 4, price: '$4', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
        ],
    },
    {
        name: 'Chinese',
        dishes: [
            { name: 'Spring Rolls', rating: 4, price: '$5', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
            { name: 'Fried Rice', rating: 5, price: '$6', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
            { name: 'Noodles', rating: 4, price: '$5', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
            { name: 'Dumplings', rating: 5, price: '$7', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
            { name: 'Hot and Sour Soup', rating: 4, price: '$4', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
            { name: 'Sweet and Sour Chicken', rating: 4, price: '$6', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
            { name: 'Manchurian', rating: 5, price: '$7', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
        ],
    },
    {
        name: 'Chowmein',
        dishes: [
            { name: 'Chowmein Classic', rating: 4, price: '$6', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
            { name: 'Chowmein Veg', rating: 5, price: '$6', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
            { name: 'Chowmein Chicken', rating: 4, price: '$7', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
            { name: 'Chowmein Spicy', rating: 5, price: '$7', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
            { name: 'Chowmein Special', rating: 4, price: '$8', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
            { name: 'Chowmein Egg', rating: 4, price: '$7', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
        ],
    },
    {
        name: 'Burgers',
        dishes: [
            { name: 'Cheeseburger', rating: 4, price: '$6', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
            { name: 'Veggie Burger', rating: 5, price: '$7', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
            { name: 'Chicken Burger', rating: 4, price: '$7', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
            { name: 'Bacon Burger', rating: 5, price: '$8', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
        ],
    },
    {
        name: 'Special Agra Snacks and Sweets',
        dishes: [
            { name: 'Agra Petha', rating: 5, price: '$4', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
            { name: 'Chaat', rating: 4, price: '$5', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
            { name: 'Jalebi', rating: 5, price: '$3', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
            { name: 'Samosa', rating: 4, price: '$4', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
            { name: 'Kachori', rating: 5, price: '$4', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
            { name: 'Gulab Jamun', rating: 5, price: '$3', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
            { name: 'Lassi', rating: 4, price: '$5', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
            { name: 'Paneer Tikka', rating: 4, price: '$6', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
            { name: 'Chole Bhature', rating: 5, price: '$7', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
            { name: 'Rasgulla', rating: 5, price: '$3', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
            { name: 'Rabri', rating: 4, price: '$4', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
            { name: 'Peda', rating: 5, price: '$3', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
            { name: 'Barfi', rating: 4, price: '$4', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
            { name: 'Sandesh', rating: 4, price: '$3', img: 'https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg' },
        ],
    },

    {
        name: 'Momos',
        dishes: [
            { name: 'Steamed Momos', rating: 4, price: '$5', img: 'steamed-momos.jpg' },
            { name: 'Fried Momos', rating: 5, price: '$6', img: 'fried-momos.jpg' },
            { name: 'Chicken Momos', rating: 4, price: '$6', img: 'chicken-momos.jpg' },
        ],
    },
    {
        name: 'Desserts and Beverages',
        dishes: [
            { name: 'Chocolate Cake', rating: 5, price: '$5', img: 'chocolate-cake.jpg' },
            { name: 'Vanilla Ice Cream', rating: 4, price: '$4', img: 'vanilla-ice-cream.jpg' },
            { name: 'Fruit Salad', rating: 4, price: '$4', img: 'fruit-salad.jpg' },
            { name: 'Milkshake', rating: 5, price: '$5', img: 'milkshake.jpg' },
            { name: 'Coffee', rating: 4, price: '$3', img: 'coffee.jpg' },
            { name: 'Tea', rating: 4, price: '$2', img: 'tea.jpg' },
            { name: 'Lemonade', rating: 5, price: '$3', img: 'lemonade.jpg' },
            { name: 'Brownie', rating: 4, price: '$4', img: 'brownie.jpg' },
            { name: 'Cheesecake', rating: 5, price: '$6', img: 'cheesecake.jpg' },
            { name: 'Pudding', rating: 4, price: '$4', img: 'pudding.jpg' },
            { name: 'Pie', rating: 5, price: '$5', img: 'pie.jpg' },
            { name: 'Macarons', rating: 4, price: '$6', img: 'macarons.jpg' },
            { name: 'Cupcake', rating: 5, price: '$3', img: 'cupcake.jpg' },
            { name: 'Donuts', rating: 4, price: '$3', img: 'donuts.jpg' },
            { name: 'Smoothie', rating: 5, price: '$5', img: 'smoothie.jpg' },
            { name: 'Sundae', rating: 4, price: '$4', img: 'sundae.jpg' },
            { name: 'Milkshake', rating: 5, price: '$5', img: 'milkshake.jpg' },
            { name: 'Hot Chocolate', rating: 4, price: '$3', img: 'hot-chocolate.jpg' },
            { name: 'Gelato', rating: 5, price: '$6', img: 'gelato.jpg' },
            { name: 'Sorbet', rating: 4, price: '$4', img: 'sorbet.jpg' },
            { name: 'Tiramisu', rating: 5, price: '$6', img: 'tiramisu.jpg' },
            { name: 'Brownie Sundae', rating: 4, price: '$5', img: 'brownie-sundae.jpg' },
            { name: 'Fruit Tart', rating: 5, price: '$5', img: 'fruit-tart.jpg' },
            { name: 'Eclair', rating: 4, price: '$4', img: 'eclair.jpg' },
            { name: 'Baklava', rating: 5, price: '$6', img: 'baklava.jpg' },
            { name: 'Creme Brulee', rating: 5, price: '$6', img: 'creme-brulee.jpg' },
            { name: 'Macaron', rating: 4, price: '$3', img: 'macaron.jpg' },
            { name: 'Cupcake', rating: 5, price: '$4', img: 'cupcake.jpg' },
            { name: 'Fruit Parfait', rating: 4, price: '$5', img: 'fruit-parfait.jpg' },
            { name: 'Cheesecake', rating: 5, price: '$6', img: 'cheesecake.jpg' },
            { name: 'Lemon Tart', rating: 4, price: '$5', img: 'lemon-tart.jpg' },
            { name: 'Mousse', rating: 5, price: '$6', img: 'mousse.jpg' },
            { name: 'Trifle', rating: 4, price: '$5', img: 'trifle.jpg' },
            { name: 'Panna Cotta', rating: 5, price: '$6', img: 'panna-cotta.jpg' },
        ],
    },

];







const OrderOnline = () => {


    console.log("orderonlineeeeeee")
    const { id } = useParams();

    const foundCard = Restaurants.find(c => c.id == id);
    console.log("found card", foundCard)
    const [card, setCard] = useState(foundCard);


    useEffect(() => {
        // Fetch card details based on the ID
        const foundCard = Restaurants.find(c => c.id == id);
        setCard(foundCard);
    }, [id]);


    const [activeCategory, setActiveCategory] = useState(cats[0].name);


    // const categoryRefs = useRef({});
    const sectionRefs = useRef({});
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveCategory(entry.target.dataset.category);
                }
            });
        }, { threshold: 0.2 });

        Object.values(sectionRefs.current).forEach(section => {
            observer.observe(section);
        });

        return () => {
            Object.values(sectionRefs.current).forEach(section => {
                // observer.unobserve(section);
                if (section) observer.unobserve(section);
            });
        };
    }, []);

    // useEffect(() => {
    //     const observer = new IntersectionObserver((entries) => {
    //         entries.forEach(entry => {
    //             if (entry.isIntersecting) {
    //                 setActiveCategory(entry.target.dataset.category);
    //             }
    //         });
    //     }, { threshold: 0.2 });

    //     // Observe only non-null elements
    //     Object.values(sectionRefs.current).forEach(section => {
    //         if (section) observer.observe(section);
    //     });

    //     return () => {
    //         // Unobserve only non-null elements and reset sectionRefs
    //         Object.values(sectionRefs.current).forEach(section => {
    //             if (section) observer.unobserve(section);
    //         });
    //         sectionRefs.current = {}; // Reset sectionRefs on unmount
    //     };
    // }, []);



    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        const section = sectionRefs.current[category];
        if (section) {
            section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    // const handleCategoryClick = (categoryName) => {
    //     setActiveCategory(categoryName);
    //     const ref = categoryRefs.current[categoryName];
    //     if (ref) {
    //         ref.scrollIntoView({ behavior: 'smooth', block: 'start' });
    //     }
    // };
    if (!card) return <div>Loading...</div>;
    return (
        <>
            <div className="flex h-screen">

                {/* Left Section */}
                <div className="w-1/4 px-4 h-full bg-gray-100 overflow-y-auto">
                    <ul>
                        {categories.map((category) => (
                            <li
                                key={category.name}
                                className={`mb-4 text-gray-700 cursor-pointer ${activeCategory === category.name ? 'text-red-500 border-r-2 border-red-500' : ''
                                    }`}
                                onClick={() => handleCategoryClick(category.name)}
                            >
                                <span>{category.name}</span> ({category.count})
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Section */}
                <div className="w-2/3 p-4 h-full overflow-y-auto">

                    <div className="flex items-center justify-between mb-1">
                        <h2 className="text-2xl font-medium mr-4">Order Online</h2>
                        <div className="flex items-center border border-gray-400 rounded-lg">
                            <input
                                type="text"
                                placeholder="Search within menu"
                                className="px-4 py-2 rounded-lg border-none focus:outline-none"
                            />
                            <FaSearch className="text-gray-600 mr-4" />
                        </div>
                    </div>

                    <div className="text-xs text-gray-500 mb-6">
                        Live track your order | 21 min
                    </div>

                    {cats.map((category) => (
                        <div
                            key={category.name}
                            className="mb-10"
                            // ref={(el) => (categoryRefs.current[category.name] = el)}
                            ref={(el) => (sectionRefs.current[category.name] = el)}
                            data-category={category.name}
                        >
                            <h3 className="text-xl font-medium mb-4">{category.name}</h3>
                            {category.dishes.map((dish) => (
                                <DishItem key={dish.name} dish={dish} />
                            ))}
                        </div>
                    ))}

                </div>

            </div>

            <AppDownloadBanner />
        </>
    );

}

export default OrderOnline;
