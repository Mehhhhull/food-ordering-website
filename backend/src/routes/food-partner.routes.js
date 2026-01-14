const express=require('express');
const foodPartnerController=require("../controllers/food-partner.controller");
const { authFoodPartnerMiddleware } = require('../middlewares/auth.middleware');

const router=express.Router();

/* GET /api/food-partner/:id */
router.get("/:id",
  authFoodPartnerMiddleware,
  foodPartnerController.getFoodPartnerById
)

module.exports=router;