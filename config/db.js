const mongoose = require('mongoose');
// const config = require('config');
// const db = config.get("mongoURI");
require("dotenv").config();

const connectDB = async() => {
    try{
        await mongoose.connect(process.env.mongoURI,
                 {useNewUrlParser: true,
                    useUnifiedTopology: true,
                    useCreateIndex:true,
                    useFindAndModify: false

                }
            );
        console.log('mongo DB connected ---');
    }
    catch(err){
        console.error(err.message); //Exit process with failure
        process.exit(1);
    }
};
module.exports = connectDB; 