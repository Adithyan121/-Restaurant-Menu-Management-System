const express = require("express");
const { getMenuItems, addMenuItem, deleteMenuItem } = require("../controllers/menuController");

const router = express.Router();

router.get("/:menuType", getMenuItems);
router.post("/:menuType", addMenuItem);
router.delete("/:menuType/:id", deleteMenuItem);

module.exports = router;
