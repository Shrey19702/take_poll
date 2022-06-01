const mongoose = require("mongoose");

const connection={};

const dbConnect =  async function(){
    if(connection.isConnected){
        return;
    }
    try{
        const db = await mongoose.connect(process.env.MONGO_URI, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
        });
        connection.isConnected = db.connections[0].readyState;
        console.log('mongodb connection sucessfull ');    
    }
    catch(error){
        console.log('error in connecting to mongodb :',error);
    }
}

export default dbConnect;