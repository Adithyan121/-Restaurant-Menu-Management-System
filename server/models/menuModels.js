const mongoose = require("mongoose");

const menuSchema = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
});

const DrinkMenu = mongoose.model("DrinkMenu", menuSchema);
const FoodMenu = mongoose.model("FoodMenu", menuSchema);
const BrunchMenu = mongoose.model("BrunchMenu", menuSchema);

module.exports = { DrinkMenu, FoodMenu, BrunchMenu };
