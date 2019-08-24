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

//ONE STORE HAS THE MATERIAL LISTED


//ADD STORE
//redirect added store id to allStores page once user clicks button

storeRouter.get('/createStore', function(req, res){
    storeApi.addNewStore(req.body).then(() => {
    res.render('stores/createStore')
    })
})

//reroutes user back to landing page when they click add store
storeRouter.post('/addstore', (req, res) => {
    console.log('/addstore - POST - req.body', req.body)
    storeApi.addNewStore(req.body).then((newStore) => {
        console.log(newStore)
        res.redirect('/artstore')
    })
    //res.render('storeforcreateform/allStores')
})


storeRouter.get('/:storeId', function(req, res){
    storeApi.getOneStore(req.params.index).then((store) => {
        res.render('stores/oneStore', {store})
    })
})

//DELETE STORE
storeRouter.delete('/:storeId', (req, res) => {
    console.log('/deletestore - POST - req.param.index')
    storeApi.deleteStore(req.params.index).then(() => {
    res.redirect('./stores/allStores');
    })
})
//EDIT STORE

//storeRouter.get('/:storeId', function(req, res){
  //  res.render('stores/oneStore', {store})
//})

storeRouter.put('/stores/editStore', function(req,res){
    storeApi.editStore(req.params.index, req.body).then(() => {
    res.redirect('stores/editStore')   
    });

})




module.exports = {
    storeRouter
}