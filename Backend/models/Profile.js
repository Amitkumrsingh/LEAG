const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    status:{
        type:String,
        required:true
    },
    location:{
        type:String
    },
    bio:{
        type:String
    },
    eduction:[
        {
            school:{
                type: String,
                required:true
            },
            degree:{
                type:String,
                required:true
            },
            fieldofstudy:{
                type:String,
                required:true
            },
            from:{
                type:Date,
                required:true
            }
        ,
        to:{
            type:Date
        },
        current:{
            type:Boolean,
            required:false
        },

        description:{
            type:String
        }

            
        }
    ],
    social:{
        instagram:{
            type:String
        },
        linkedin:{
            type: String
        },
        twitter:{
            type:String
        }
    },
 date:{
    type:Date,
     default: Date.now
}
});

module.exports= Profile = mongoose.model('profile', ProfileSchema);