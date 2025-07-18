import Product from "../models/Product.js";

export const addProduct = async (req, res) => {
  const { name, description, price } = req.body;
  const userId = req.userId;

  if (!name || !description || !price) {
    return res.status(400).json({
      success: false,
      message: "Product name and price are required",
    });
  }

  try {
    const product = await Product.create({
      name,
      description,
      price,
      createdBy: userId,
    });

    return res.status(201).json({
      success: true,
      message: "Product added successfully",
      data: product,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to add product",
    });
  }
};

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({ createdBy: req.userId }).populate(
      "createdBy",
      "name email"
    );

    if (!products) {
      return res.status(404).json({
        success: false,
        message: "No products found for this user",
        data: [],
      });
    }

    return res.status(200).json({
      success: true,
      message: "Products fetched successfully",
      data: products,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch products",
    });
  }
};
