
const express = require('express');
const app = express();  // instance ( Ye pura apna app hota h esliye ese kahi bhi export nhi krte h)
const path = require('path');
const mongoose = require('mongoose');
const seedDB = require('./seed');
const productRoutes = require('./routes/product')
const methodOverride = require('method-override');



// ⬇️ This connection method return a promise 
//  orr promise ko resolve krne ke liye .then() & .catch() ki chaining krte h
mongoose.connect('mongodb://127.0.0.1:27017/BigProject')
.then(()=>{console.log("db connected")})
.catch((err)=>{console.log("error is:", err)})

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname , 'views'))
app.use(express.static(path.join(__dirname, 'public')))    // Static files

app.use(express.urlencoded({extended:true}))  // form data ke liye body parser
app.use(methodOverride('_method'))

// seedDB()   // Bar bar store ho jata h, if not commented

// Ye ⬇️ har request pr check krega ki product hein ki nhi
app.use(productRoutes);

let PORT = 8080;
app.listen(PORT , ()=>{
    console.log(`server is connected at port: ${PORT}`);
})

// Step 01 - Basic server
// Step 02 - mangoose connection
// Step 03 - Model -> seed data
// Step 04 - Routes -> views















