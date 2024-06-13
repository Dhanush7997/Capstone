//import db schema
const User = require('../model/User')
//get all products
const users_all = async (req, res) => {
    try {
        const users = await User.find()
        console.log('Data sent')
        res.json(users)
    }
    catch (error) {
        console.log('Fetch error :- ', error)
        res.json({ 'message': error })
    }
}
//insert a product
const insert_user = async (req, res) => {
    const user = new User({
 u_id: req.body.u_id,
u_name:req.body.u_name,
u_pwd:req.body.u_pwd,
u_u_email:req.body.u_u_email,
u_addr: req.body.u_addr,
u_u_contact:req.body.u_u_contact

    })
    try {
        const savedUser = await user.save()
        console.log('User inserted')
        res.send(savedUser)
    }
    catch (error) {
        res.status(400).send(error)
    }
}
//update product
const update_user = async (req, res) => {
    let u_id = req.body.u_id
    const user = {
        
        u_name:req.body.u_name,
        u_pwd:req.body.u_pwd,
        u_u_email:req.body.u_u_email,
        u_addr: req.body.u_addr,
        u_u_contact:req.body.u_u_contact
        
    }
    try {
        const updateUser = await User.updateOne(
            { u_id }, user
        )
        if (updateUser.modifiedCount != 0) {
            console.log('User Updated', updateUser)
            res.send({ 'update': 'success' })
        }
        else {
            console.log('User not updated')
            res.send({ 'update': 'Record Not Found' })
        }
    }
    catch (error) {
        res.status(400).send(error)
    }
}

//delete product
const delete_user = async (req, res) => {
    let u_id = req.body.u_id
    try {
        const deleteduser = await User.deleteOne({ u_id })
        if (deleteduser.deletedCount != 0) {
            console.log('User Deleted')
            res.send({ 'delete': 'success' })
        }
        else {
            console.log('User Not deleted')
            res.send({ 'delete': 'Record Not Found' })
        }
    }
    catch (error) {
        res.status(400).send(error)
    }
}
module.exports = {
    users_all,
    insert_user,
    update_user,
    delete_user
}
