//import express
//import api files from models file.
//import more than api to create the controller you need.
//create a new router.

const express = require('express')
const storeApi = require('../models/artstore.js')
const storeRouter = express.Router()


//ALL STORES
storeRouter.get('/', function(req, res){
    storeApi.getAllStores().then((storesInDB) => {
        res.send(storesInDB);
    })
})

//ONE STORE
storeRouter.get('/:storeId', function(req, res){
    //storeApi.getOneStore().then()
    res.send(storeApi.getOneStore(req.params.index));
})

//ADD STORE
storeRouter.post('/new', function(req, res){
    storeApi.addNewStore(req.body)
    res.status(200).end();
})

//EDIT STORE
storeRouter.put('/artstore/:storeId', function(req,res){
    storeApi.updateStore(req.params.index, req.body);
    res.status(200).end();
})

//DELETE STORE
storeRouter.delete('/artstore/:storeId', function(req, res) {
    storeApi.deleteStore()
})




module.exports = {
    storeRouter
}