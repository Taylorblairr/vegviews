const productController = require("../controllers/productController.js");
const reviewController = require("../controllers/reviewController.js");

const router = require("express").Router();

router.post("/addProducts", productController.addProduct);

router.get("/allProducts", productController.getAllProducts);

router.get("/published", productController.getPublishedProduct);

router.get("/allReviews", reviewController.getAllReviews);

router.post("/addReview/:id", reviewController.addReview);

router.get("./getProductReviews", productController.getProductReviews);

router.get("/:id", productController.getOneProduct);

router.put("/:id", productController.updateProduct);

router.delete("/:id", productController.deleteProduct);

module.exports = router;
