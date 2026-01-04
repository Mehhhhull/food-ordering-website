const express=require('express');
const foodPartnerController=require("../controllers/food-partner.controller");
const { authFoodPartnerMiddleware } = require('../middlewares/auth.middleware');
const authMiddleware=require("..middlewares/authFoodPartnerMiddleware.middleware");


const router=express.Router();

/* GET /api/food-partner/:id */
router.get("/:id",
  authMiddleware.authUserMiddleware,
  foodController.getFoodPartnerById
)

module.exports=router;