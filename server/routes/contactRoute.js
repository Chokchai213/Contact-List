const contactController = require("../controllers/contactController");
const express = require("express");

const router = express.Router();

router.post("/", contactController.createContact);
router.get("/", contactController.getAllContact);
router.get("/:id", contactController.getContact);
router.post("/:id", contactController.UpdateContact);
router.delete("/:id", contactController.DeleteContact);

module.exports = router;
