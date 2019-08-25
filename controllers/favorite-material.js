//import express
//import api files from models file.
//import more than api to create the controller you need.
//create a new router.

const express = require('express')
const materialApi = require('../models/favorite-material.js')
const materialRouter = express.Router()


//ALL Materials
materialRouter.get('/', function(req, res) {
    materialApi.getAllMaterials().then((materials) => {
        res.render('./materials/allMaterials', {materials});
    })
})

//ADD Materials
//redirect added material id to allStores page once user clicks button
materialRouter.get('/createMaterials', function(req, res){
    materialApi.addNewMaterial(req.body).then(() => {
    res.render('materials/createMaterials')
    })
})

//reroutes user back to landing page when they click add store
materialRouter.post('/addmaterial', (req, res) => {
    console.log('/addmaterial - POST - req.body', req.body)
    materialApi.addNewMaterial(req.body).then((newMaterial) => {
        console.log(newMaterial)
        res.redirect('/materialstore')
    })
    //res.render('storeforcreateform/allStores')
})


//materialRouter.get('/createMaterial', function(req, res){
  //materialApi.addNewMaterial(req.body).then((id) => {
    //res.render('materials/createMaterials')
    //})
//})

//ONE STORE
materialRouter.get('/:materialId', function(req, res){
    materialApi.getOneMaterial(req.params.index).then((material) => {
        res.render('materials/oneMaterial', {material} )
    })
})
/*
//EDIT STORE
materialRouter.put('/:materialId', function(req,res){
    materialApi.updateMaterial(req.params.index, req.body).then(() => {
    res.redirect('materials/editMaterial')   
    });

})
*/
//DELETE STORE
materialRouter.delete('/:materialId', (req, res) => {
    console.log('/deletematerial - POST - req.param.index')
    materialApi.deleteMaterial(req.params.index).then(() => {
    res.redirect('/materialstore');
    })
})

module.exports = {
    materialRouter
}