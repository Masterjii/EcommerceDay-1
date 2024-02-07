


const express = require('express');
const Product = require('../models/Product');
const router = express.Router();  // mini application

// mini application -> Ese Eski (const app = express();) jagah use kiya jata h
// Ye same app ki tarah hi chalta h

// Read -
router.get('/products' , async (req, res)=>{
   let products = await Product.find({});
   res.render('index', {products})
});

// new form - 
router.get('/products/new', (req, res)=>{
    res.render('new',)
});

// Actually Adding 
router.post('/products', async (req,res)=>{     // By default undefined
    let {name, img, price, desc} = req.body;
    await Product.create({name, img, price, desc});  // Ye create krne ke baad Automatically DB mein save bhi kr deta h
    res.redirect('/products')
})

// show particular product 
router.get('/products/:id' , async(req,res) =>{
    let {id} = req.params;
    let foundProduct = await Product.findById(id);
    res.render('show', {foundProduct});
})

// show edit form -
router.get('/products/:id/edit' , async(req,res) =>{
    let {id} = req.params;
    let foundProduct = await Product.findById(id);
    res.render('edit' , {foundProduct})
})

// Actually Changing the Product -
router.patch('/products/:id', async(req,res)=>{
    let {id} = req.params;
    let {name, img, price, desc} = req.body;
    await Product.findByIdAndUpdate(id, {name, img, price, desc} );
    res.redirect('/products')
})

// Deleting -
router.delete('/products/:id', async(req,res)=>{
    let {id} = req.params;
    res.redirect('/products')
    await Product.findByIdAndDelete(id);
})

module.exports = router;

















