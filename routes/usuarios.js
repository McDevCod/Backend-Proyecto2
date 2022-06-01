const express = require("express")
const router = express.Router()

const UserController = require("../controllers/userCtrl")




router.get("/usuario/List", UserController.getUserList)

router.get("/usuario/registro",UserController.getUserForm)

router.post("/usuario/registro",UserController.newUser)

router.put("/usuario/update",UserController.updateUser)

router.delete("/usuario/delete",UserController.deleteUser)

module.exports=router