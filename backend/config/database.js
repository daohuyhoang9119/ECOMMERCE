
const mongoose = require(id:"mongoose");
const connectDatabase = ()=>{
    mongoose
        .connect(url: process.env.MONGO_URI, options:{
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex:true,
        })
        .then(onfulfilled :(con)=>{
            console.log(
                message:`MongoDB Database connected with Host: ${con.connection.host}`
            );
        })
}