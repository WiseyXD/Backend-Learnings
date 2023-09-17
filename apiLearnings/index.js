const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const port = 4500;

mongoose
	.connect("mongodb://0.0.0.0:27017/ProductRecord")
	.then(() => {
		console.log("MongoDB COnnected");
	})
	.catch((err) => {
		console.log(err);
	});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

const productSchema = new mongoose.Schema({
	name: String,
	description: String,
	price: Number,
});

const Product = mongoose.model("Product", productSchema);

// Create product
app.post("/api/v1/product/new", async (req, res) => {
	const product = await Product.create(req.body);
	res.status(201).json({
		success: true,
		product,
	});
});

// read product
app.get("/api/v1/products", async (req, res) => {
	const products = await Product.find();
	res.status(200).json({
		success: true,
		products,
	});
});

// Update Product
app.put("/api/v1/product/:id", async (req, res) => {
	let product = await Product.findById(req.params.id);

	if (!product) {
		res.status(500).json({
			success: false,
			message: "Product not found",
		});
	}

	product = await Product.findByIdAndUpdate(req.params.id, req.body, {
		new: true,
		useFindAndModify: true,
		runValidators: true,
	});

	res.status(200).json({
		success: true,
		product,
	});
});

// Delete a product

app.delete("/api/v1/product/:id", async (req, res) => {
	let product = await Product.findById(req.params.id);

	if (!product) {
		res.status(404).json({
			success: false,
			message: "Product not found",
		});
	}

	await product.deleteOne();

	res.status(200).json({
		success: true,
		message: "Deleted",
	});
});

app.listen(port, () => {
	console.log("Server is working " + port);
});
