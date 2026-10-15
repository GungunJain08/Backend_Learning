const express = require('express');
const sequelize = require('./common/database');
const defineUser = require('./common/models/User')
const User = defineUser(sequelize);
sequelize.sync()
const app = express();

app.use(express.json());
const PORT = process.env.PORT || 3000;


app.get('/status',(req,res)=>{
    res.json({
        status:"Running",
        timeStamp: new Date().toISOString()
    })
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})