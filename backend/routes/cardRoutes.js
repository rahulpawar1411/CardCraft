const express = require("express");
const router = express.Router();
const Card = require("../models/Card");

// CREATE
router.post("/", async (req, res) => {
  try {
    const card = new Card(req.body);
    await card.save();
    res.status(201).json(card);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// READ ALL
router.get("/", async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// READ ONE
router.get("/:id", async (req, res) => {
  try {
    const card = await Card.findById(req.params.id);
    if (!card) return res.status(404).json({ message: "Not found" });
    res.json(card);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE
router.put("/:id", async (req, res) => {
  try {
    const updatedCard = await Card.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

//     console.log("Update request received:", req.body);
// console.log("Updating ID:", req.params.id);

    res.status(200).json(updatedCard);
  } catch (err) {
    res.status(500).json({ error: "Update failed", details: err.message });
  }
});


// DELETE
const mongoose = require("mongoose");

router.delete("/:id", async (req, res) => { 
  try {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    const deleted = await Card.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Card not found" });
    }

    console.log("Deleted ID:", id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({ message: err.message });
  }
});


module.exports = router;
