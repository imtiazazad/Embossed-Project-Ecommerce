const express = require("express");
const {
  getAllProducts,
  createProduct,
  getProoductDetails,
  updateProduct,
  deleteProduct,
} = require("../controllers/productConroller");

const router = express.Router();

router.route("/products").get(getAllProducts);
router.route("/products/new").post(createProduct);
router
  .route("/products/:id")
  .get(getProoductDetails)
  .put(updateProduct)
  .delete(deleteProduct);

module.exports = router;
