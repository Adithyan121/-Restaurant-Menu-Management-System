import React, { useEffect, useState } from "react";
import "../css/brunch.css";
import food1 from "../assets/food1.png"; 
import food2 from "../assets/food2.png"; 
import api from "../api";


const FoodMenu = () => {
    const [foodItems, setFoodItems] = useState([]);

    useEffect(() => {
        const fetchFoodMenu = async () => {
            try {
                const response = await api.get("/foodmenu"); // Using Axios for API call
                setFoodItems(response.data);
            } catch (error) {
                console.error("Error fetching food menu:", error);
            }
        };

        fetchFoodMenu();
    }, []);

    return (
        <div className="menu">
            <div className="menu-container">
                <h1>Food Menu</h1>
                <div className="menu-items">
                    {/* Left Column */}
                    <div className="menu-column">
                        {foodItems.slice(0, Math.ceil(foodItems.length / 2)).map((item) => (
                            <div className="menu-item" key={item.id}>
                                <h3>{item.name} <span>.........₹{item.price}</span></h3>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Right Column */}
                    <div className="menu-column">
                        {foodItems.slice(Math.ceil(foodItems.length / 2)).map((item) => (
                            <div className="menu-item" key={item.id}>
                                <h3>{item.name} <span>.........₹{item.price}</span></h3>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Food Images */}
                <img src={food1} alt="Food 1" className="brunch-image left" />
                <img src={food2} alt="Food 2" className="brunch-image right" />
            </div>
        </div>
    );
};

export default FoodMenu;
