//import express
//import api files from models file.
//import more than api to create the controller you need.
//create a new router.

const express = require('express')
const storeApi = require('../models/artstore.js')
const storeRouter = express.Router()


//ALL STORES
storeRouter.get('/', function(req, res) {
    storeApi.getAllStores().then((stores) => {
        res.render('./stores/allStores', {stores});
    })
})

//ADD STORE
//redirect added store id to allStores page once user clicks button

storeRouter.get('/createStore', function(req, res){
    storeApi.addNewStore(req.body).then((_id) => {
    res.render('stores/createStore')
    })
})

//reroutes user back to landing page when they click add store
storeRouter.post('/', (req, res) => {
    storeApi.addNewStore(req.body).then((newStore) => {
        console.log(newStore)
        res.redirect('/artstore')
    })
    //res.render('storeforcreateform/allStores')
})

//ONE STORE HAS THE MATERIAL LISTED
storeRouter.get('/:materialId', function(req, res){
    storeApi.getOneStore(req.params.index).then((store) => {
        res.render('materials/createMaterials')
    })
})


/*
storeRouter.get('/:id', function(req, res){
    storeApi.getOneStore(req.params.id).then((storeId) => {
        res.render('one store', {storeId})
    })
})



//EDIT STORE

storeRouter.put('/:storeId', function(req,res){
    storeApi.updateStore(req.params.index, req.body).then(() => {
    res.redirect('stores/updateStore')   
    });

})

//DELETE STORE
storeRouter.delete('/artstore/:storeId', function(req, res) {
    storeApi.deleteStore(req.params.index).then(() => {
    res.redirect('/stores');
    })
})



*/



module.exports = {
    storeRouter
}