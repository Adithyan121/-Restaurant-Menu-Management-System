import React, { useEffect, useState } from "react";
import "../css/brunch.css";
import brunch1 from "../assets/brunch1.webp"; 
import brunch2 from "../assets/brunch2.webp"; 
import api from "../api"

const BrunchMenu = () => {
    const [brunchItems, setBrunchItems] = useState([]);

     
    useEffect(() => {
        const fetchBrunchMenu = async () => {
            try {
                const response = await api.get("/brunchmenu"); 
                setBrunchItems(response.data);
            } catch (error) {
                console.error("Error fetching food menu:", error);
            }
        };

        fetchBrunchMenu();
    }, []);

    return (
        <div className="brunc-menu">
            <div className="menu-container">
                <h1>Brunch Menu</h1>
                <div className="menu-items">
                    <div className="menu-column">
                        {brunchItems.slice(0, Math.ceil(brunchItems.length / 2)).map((item) => (
                            <div className="menu-item" key={item.id}>
                                <h3>{item.name} <span>.........₹{item.price}</span></h3>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="menu-column">
                        {brunchItems.slice(Math.ceil(brunchItems.length / 2)).map((item) => (
                            <div className="menu-item" key={item.id}>
                                <h3>{item.name} <span>.........₹{item.price}</span></h3>
                                <p>{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <img src={brunch1} alt="Brunch Cocktail 1" className="brunch-image left" />
                <img src={brunch2} alt="Brunch Cocktail 2" className="brunch-image right" />
            </div>
        </div>
    );
};

export default BrunchMenu;
