import { Router } from "express";
import ProductController from "../controllers/ProductController";
import { checkJwt } from "../middlewares/checkJwt";
import { checkRole } from "../middlewares/checkRole";

const router = Router();

  // Get all products
router.get("/", [checkJwt, checkRole(["ADMIN"])], ProductController.listAll);

  // Get one product
router.get(
    "/:id([0-9]+)",
    [checkJwt, checkRole(["ADMIN"])],
    ProductController.getOneById
  );

  // Create a new product
router.post("/", [checkJwt, checkRole(["ADMIN"])], ProductController.newProduct);

  // Edit one product
router.patch(
    "/:id([0-9]+)",
    [checkJwt, checkRole(["ADMIN"])],
    ProductController.editProduct
  );

  // Delete one product
router.delete(
    "/:id([0-9]+)",
    [checkJwt, checkRole(["ADMIN"])],
    ProductController.deleteProduct
  );

export default router;
