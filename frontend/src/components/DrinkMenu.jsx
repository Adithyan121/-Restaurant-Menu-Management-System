import React, { useEffect, useState } from "react";
import "../css/brunch.css";
import Drink1 from "../assets/drink1.png"; 
import Drink2 from "../assets/drink2.png"; 
import api from "../api";

const DrinkMenu = () => {
    const [drinkItems, setDrinkItems] = useState([]);


    useEffect(() => {
        const fetchDrinkMenu = async () => {
            try {
                const response = await api.get("/drinkmenu"); 
                setDrinkItems(response.data);
            } catch (error) {
                console.error("Error fetching food menu:", error);
            }
        };

        fetchDrinkMenu();
    }, []);
  

    return (
        <div className="menu">
            <div className="menu-container">
                <h1>Drink Cocktails</h1>
                <div className="menu-items">
                    {/* Left Column */}
                    <div className="menu-column">
                        {drinkItems.slice(0, Math.ceil(drinkItems.length / 2)).map((item) => (
                            <div className="menu-item" key={item.id}>
                                <h3>{item.name} <span>.........₹{item.price}</span></h3>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>

                    {/* Right Column */}
                    <div className="menu-column">
                        {drinkItems.slice(Math.ceil(drinkItems.length / 2)).map((item) => (
                            <div className="menu-item" key={item.id}>
                                <h3>{item.name} <span>.........₹{item.price}</span></h3>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Drink Images */}
                <img src={Drink1} alt="Cocktail 1" className="brunch-image left" />
                <img src={Drink2} alt="Cocktail 2" className="brunch-image right" />
            </div>
        </div>
    );
};

export default DrinkMenu;
