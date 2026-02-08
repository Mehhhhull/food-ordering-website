const foodModel = require("../models/food.model");
const storageService = require("../services/storage.service");
const likeModel = require("../models/likes.model");
const { v4: uuid } = require("uuid");

async function createFood(req, res) {
  const fileUploadResult = await storageService.uploadFile(
    req.file.buffer,
    uuid(),
  );

  const foodItem = await foodModel.create({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    foodPartnerId: req.foodPartner.id,
  });

  res.status(201).json({
    message: "Food Item Created Successfully",
    foodItem: foodItem,
  });
}

async function getFoodItems(req, res) {
  const foodItems = await foodModel.find({});
  res.status(200).json({
    message: "Food items fetched successfully.",
    foodItems,
  });
}

async function likeFood(req, res) {
  const { foodId } = req.body;
  const user = req.user;

  const isAlreadyLiked = await likeModel.findOne({
    user: user.id,
    food: foodId,
  });

  if (isAlreadyLiked) {
    await likeModel.deleteOne({
      user: user.id,
      food: foodId,
    });
    return res.status(200).json({
      message: "Food item unliked successfully.",
    });
  }

  const like = await likeModel.create({
    user: user.id,
    food: foodId,
  });
  res.status(201).json({
    message: "Food item liked successfully.",
    like,
  });
}

module.exports = {
  createFood,
  getFoodItems,
  likeFood,
};
