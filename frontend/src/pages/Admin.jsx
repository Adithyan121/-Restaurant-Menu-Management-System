import React, { useState, useEffect } from "react";
import api from "../api"; // Import Axios instance
import "../css/admin.css";

const Admin = () => {
    const [menuType, setMenuType] = useState("drinkmenu"); 
    const [menuItems, setMenuItems] = useState([]);
    const [formData, setFormData] = useState({ name: "", price: "", description: "" });

    useEffect(() => {
        fetchMenus();
    }, [menuType]);

    // Fetch menus
    const fetchMenus = async () => {
        try {
            const response = await api.get(`/${menuType}`);
            setMenuItems(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    // Handle form input change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Add new menu item
    const handleAdd = async () => {
        if (!formData.name || !formData.price || !formData.description) {
            alert("Please fill out all fields!");
            return;
        }

        try {
            await api.post(`/${menuType}`, formData);
            fetchMenus();
            setFormData({ name: "", price: "", description: "" });
        } catch (error) {
            console.error("Error adding item:", error);
        }
    };

    // Delete menu item
    const handleDelete = async (id) => {
        try {
            await api.delete(`/${menuType}/${id}`);
            fetchMenus();
        } catch (error) {
            console.error("Error deleting item:", error);
        }
    };

    return (
        <div className="admin-container">
            <h1>Admin Panel</h1>

            {/* Menu Selection */}
            <select onChange={(e) => setMenuType(e.target.value)} value={menuType}>
                <option value="drinkmenu">Drink Menu</option>
                <option value="foodmenu">Food Menu</option>
                <option value="brunchmenu">Brunch Menu</option>
            </select>

            {/* Add Menu Form */}
            <div className="form">
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
                <input type="text" name="price" placeholder="Price" value={formData.price} onChange={handleChange} />
                <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
                <button onClick={handleAdd}>Add Item</button>
            </div>

            {/* Menu List */}
            <div className="menu-list">
                {menuItems.length > 0 ? (
                    menuItems.map((item) => (
                        <div className="menu-item" key={item._id}>
                            <h3>{item.name} <span>${item.price}</span></h3>
                            <p>{item.description}</p>
                            <button className="delete-btn" onClick={() => handleDelete(item._id)}>Delete</button>
                        </div>
                    ))
                ) : (
                    <p>No items found in {menuType}.</p>
                )}
            </div>
        </div>
    );
};

export default Admin;
