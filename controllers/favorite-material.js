//import express
//import api files from models file.
//import more than api to create the controller you need.
//create a new router.

const express = require('express')
const materialApi = require('../models/favorite-material.js')
const materialRouter = express.Router()


//ALL STORES
materialRouter.get('/', function(req, res) {
    materialApi.getAllMaterials().then((materials) => {
        res.send('allMaterials');
    })
})
//ADD STORE
//redirect added store id to allStores page once user clicks button


materialRouter.get('/createMaterial', function(req, res){
    materialApi.addNewMaterial(req.body).then((_id) => {
    res.render('materials/createMaterial')
    })
})



//ONE STORE
materialRouter.get('/:materialId', function(req, res){
    materialApi.getOneMaterial(req.params.materialId).then((material) => {
        res.render('oneMaterial', {material, materialId})
    })
})


//EDIT STORE

materialRouter.put('/:materialId', function(req,res){
    materialApi.updateMaterial(req.params.index, req.body).then(() => {
    res.redirect('materials/editMaterial')   
    });

})

//DELETE STORE
materialRouter.delete('/favorite-material/:materialId', function(req, res) {
    materialApi.deleteMaterial(req.params.index).then(() => {
    res.redirect('/materials');
    })
})







module.exports = {
    materialRouter
}