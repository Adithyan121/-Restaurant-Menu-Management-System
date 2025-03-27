import React, { useState } from "react";
import FoodMenu from "../components/FoodMenu";
import DrinksMenu from "../components/DrinkMenu";
import BrunchMenu from "../components/BrunchMenu";
import "../css/menu.css";
import frame1 from "../assets/Frame.png"
import frame2 from "../assets/Frame2.png"

const Menu = () => {
    const [selectedMenu, setSelectedMenu] = useState("drinks");

    return (
        <div className="menu-page">
            {/* Banner Section */}
            <div className="menu-banner">
                <h1 className="headding">Menu</h1>
                <p>"GPlease take a look at our menu featuring food, drinks, and brunch. If you'd like to <br/>place an order, use the "Order Online" button located below the menu.!"</p>
            </div>

            {/* Menu Navigation Buttons */}
            <div className="menu-buttons">
                <button className={selectedMenu === "food" ? "active" : ""} onClick={() => setSelectedMenu("food")}>Food</button>
                <button className={selectedMenu === "drinks" ? "active" : ""} onClick={() => setSelectedMenu("drinks")}>Drinks</button>
                <button className={selectedMenu === "brunch" ? "active" : ""} onClick={() => setSelectedMenu("brunch")}>Brunch</button>
            </div>
            <div className="menu-con">
    <div className="first">
        <img src={frame1} alt="frame left" />
    </div>

    {/* Display Selected Menu Component */}
    <div className="menu-content">
        {selectedMenu === "food" && <FoodMenu />}
        {selectedMenu === "drinks" && <DrinksMenu />}
        {selectedMenu === "brunch" && <BrunchMenu />}
    </div>

    <div className="second">
        <img src={frame2} alt="frame right" />
    </div>
</div>

        </div>
    );
};

export default Menu;
