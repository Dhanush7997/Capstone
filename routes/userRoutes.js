//import express module
const express = require('express')
//create router instance
const router = express.Router()
//import productApi
const userApi = require('../apis/userApis')
//fetch all records
router.get("/fetchUser", userApi.users_all)
//insert a record
router.post("/insertUser",  userApi.insert_user)
//update a record
router.put("/updateUser", userApi.update_user)
//delete a record
router.delete("/deleteUser", userApi.delete_user)
//export router
module.exports = router
