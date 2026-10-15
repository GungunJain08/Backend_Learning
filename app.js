const express = require('express');
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