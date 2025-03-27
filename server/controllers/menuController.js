const { DrinkMenu, FoodMenu, BrunchMenu } = require("../models/menuModels");

// Function to get the correct model
const getMenuModel = (type) => {
    switch (type) {
        case "drinkmenu": return DrinkMenu;
        case "foodmenu": return FoodMenu;
        case "brunchmenu": return BrunchMenu;
        default: return null;
    }
};

// Get all menu items
const getMenuItems = async (req, res) => {
    const Model = getMenuModel(req.params.menuType);
    if (!Model) return res.status(400).json({ error: "Invalid menu type" });

    const items = await Model.find();
    res.json(items);
};

// Add a menu item
const addMenuItem = async (req, res) => {
    const Model = getMenuModel(req.params.menuType);
    if (!Model) return res.status(400).json({ error: "Invalid menu type" });

    const newItem = new Model(req.body);
    await newItem.save();
    res.json({ message: "Item added" });
};

// Delete a menu item
const deleteMenuItem = async (req, res) => {
    const Model = getMenuModel(req.params.menuType);
    if (!Model) return res.status(400).json({ error: "Invalid menu type" });

    await Model.findByIdAndDelete(req.params.id);
    res.json({ message: "Item deleted" });
};

module.exports = { getMenuItems, addMenuItem, deleteMenuItem };
