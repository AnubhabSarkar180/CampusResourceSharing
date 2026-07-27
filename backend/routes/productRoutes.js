const express = require('express');
const router = express.Router();
const Product = require("../models/products.js");

router.post("/",async(req,res) => {
        try{
         const {name, price, description, category} = req.body;
            const newProduct = new Product(
               {
                  name,
                  price,
                  description,
                  category
               }
            );
            const savedProduct = await newProduct.save();

            res.status(200).json(savedProduct);
         }catch(err)
         {
            res.status(500).json({success: false, message: "Failed to create product", error: err.message});
         }
});

router.get("/", async(req,res) => {
   try{
        const products = await Product.find();
        res.status(200).json(products);
      }catch(err)
      {
         console.error("Error fetching products:", err);
         res.status(500).json({success: false, message: "Failed to fetch products", error: err.message});
      }
});

module.exports = router;