const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({


    name:{
        type:String,
        required:true,

    },
    price:{
        type:Number,
        required:true,
        
    },

    taste:{
        type:String,
        enum:['sweet','spicy','sour'],
        required:true,
    },

    is_dring:{
        type:Boolean,
        default:false,
    },

    ingrediants:{
        type:String,
        
    },
    num_sales:{
        type:String,
        default:0,
    }

});

const MenuItem = mongoose.model('MenuItem',menuItemSchema);

module.exports= MenuItem; 



