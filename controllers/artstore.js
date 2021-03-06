//import express
//import api files from models file.
//import more than api to create the controller you need.
//create a new router.

const express = require('express')
const storeApi = require('../models/artstore.js')
const storeRouter = express.Router()


//ALL STORES HTTP
storeRouter.get('/', function(req, res) {
    storeApi.getAllStores().then((stores) => {
        res.render('stores/allStores', {stores});
    })
})

//ADD STORE HTTP
//redirect added store id to allStores page once user clicks button
storeRouter.get('/createStore', function(req, res){
    //storeApi.addNewStore(req.body).then(() => {
        res.render('stores/createStore')
    //})
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

/*
storeRouter.get('/:storeId/oneStore', function(req, res){
    storeApi.getOneStore(req.params.storeId).then((store) => {
        res.render('stores/oneStore', {store})
    })
})

*/



//EDIT STORE HTTP
//storeRouter.get('/:storeId', function(req, res){
  //  res.render('stores/oneStore', {store})
//})
storeRouter.get('/:storeId/edit', function(req, res) {
    storeApi.getOneStore(req.params.storeId).then((storeEId) => {
    res.render('stores/editStore', {storeEId})
    console.log(storeEId)
    })
})
/*
//ONE STORE HTTP
storeRouter.get('/:storeId', function(req, res){
    storeApi.getOneStore(req.params.index).then((store) => {
        res.render('stores/oneStore', {store})
    })
})
*/
storeRouter.get('/:storeId', (req, res) => {
    storeApi.getOneStore(req.params.storeId).then((store) => {
        res.render('./stores/oneStore', {store})
    })
})
//UPDATE STORE HTTP
storeRouter.put('/:storeId/editstore', (req,res) => {
    console.log('/editstore - POST - req.param.storeId')
    storeApi.editStore(req.params.storeId, req.body).then(() => {
    res.redirect('/artstore');
    })
})

//DELETE STORE HTTP
storeRouter.delete('/:storeId', (req, res) => {
    console.log('/deletestore - POST - req.param.storeId')
    storeApi.deleteStore(req.params.storeId).then(() => {
    res.redirect('/artstore');
    })
})


module.exports = {
    storeRouter
}