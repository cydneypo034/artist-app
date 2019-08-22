//import express
//import api files from models file.
//import more than api to create the controller you need.
//create a new router.

const express = require('express')
const storeApi = require('../models/artstore.js')
const storeRouter = express.Router()
const materialRouter = express.Router()


//ALL STORES
storeRouter.get('/', function(req, res) {
    storeApi.getAllStores().then((stores) => {
        res.render('allStores');
    })
})

materialRouter.get('/allMaterials', function(req, res) {
    materialApi.getAllMaterials().then((materials) => {
        res.render('allMaterials');
    })
})


//ADD STORE
//redirect added store id to allStores page once user clicks button

storeRouter.get('/createStore', function(req, res){
    storeApi.addNewStore(req.body).then((_id) => {
    res.render('stores/createStore')
    })
})


//ONE STORE
storeRouter.get('/:storeId', function(req, res){
    storeApi.getOneStore(req.params.index).then((store) => {
        res.render('oneStore')
    })
})


//EDIT STORE

storeRouter.put('/:storeId', function(req,res){
    storeApi.updateStore(req.params.index, req.body).then(() => {
    res.redirect('stores/editStore')   
    });

})

//DELETE STORE
storeRouter.delete('/artstore/:storeId', function(req, res) {
    storeApi.deleteStore(req.params.index).then(() => {
    res.redirect('/stores');
    })
})







module.exports = {
    storeRouter,
    materialRouter
}