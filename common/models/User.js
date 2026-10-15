const {dataType} = require('sequelize');

const userModel = {
    id : {type: dataType.INTEGER, primaryKey: true, autoIncrement: true},
    username : {type: dataType.STRING, allowNull: false,unique:true},
    email : {type: dataType.STRING, allowNull: false,unique:true},
    password : {type: dataType.STRING, allowNull: false},
}
module.exports = (sequelize)=> sequelize.define('User',userModel)