const { Router } = require("express");
const { addUser, logIn, deleteUser, updateUser } = require("./user.controllers");
const { hashPassword, comparePasswords, tokenAuth } = require("../middleware")
const userRouter = Router();

userRouter.post("/user", hashPassword, addUser);
userRouter.post("/login", comparePasswords, logIn);
userRouter.get("/token", tokenAuth, logIn);
userRouter.put("/user/:username", updateUser);
userRouter.delete("/user/:username", deleteUser);

module.exports = userRouter;