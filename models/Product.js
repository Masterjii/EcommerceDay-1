
const mongoose = require('mongoose');   //object

// schema ->Everything in Mongoose starts with a Schema. 
// Each schema maps to a MongoDB collection and defines the shape of the documents within that collection.

const productSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,   // Ye Extra space ko remove kr dega
        required:true // Ye require kiye bina page mein aage nhi ja sakte h
    },
    img:{
        type:String,
        trim:true,
        required:true
    },
    price:{
        type:Number,
        min:0,
        required:true
    },
    desc:{
        type:String,
        trim:true
    }
})

// Models/collection -> it is a js class -> Objects/documents
// model -> it should always singular and start with capital letter.

// ⬇️ Ye apan ne documentation se liya h
// Syntex ->
// const modelName = mongoose.model(modelName, schema)

let Product = mongoose.model('Product', productSchema);

module.exports = Product;

// seed.js -> YE Koi module ya package nhi h
// Saamaan ? -> maanlo hume 4-5 Products ek sath bhejna h,toh hum insertMany() se bhej sakte h
// Yaha Products bhejne ko seed.js kehte h












