const {Schema, model} = require("mongoose")


const UserSchema= new Schema({
    name: String,
    email: String,
    password: String
})

const Users = model("Users", UserSchema)


module.exports = Users