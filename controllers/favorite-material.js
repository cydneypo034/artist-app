//import express
//import api files from models file.
//import more than api to create the controller you need.
//create a new router.

const express = require('express')
const materialApi = require('../models/favorite-material.js')
const materialRouter = express.Router()


//ALL Materials HTTP
materialRouter.get('/', function(req, res) {
    materialApi.getAllMaterials().then((materials) => {
        res.render('./materials/allMaterials', {materials});
    })
})

//ADD Materials HTTP
//redirect added material id to allMaterials page once user clicks button
materialRouter.get('/createMaterials', function(req, res){
    //materialApi.addNewMaterial(req.body).then(() => {
    res.render('materials/createMaterials')
    //})
})

//reroutes user back to landing page when they click add MATERIAL
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


//DELETE MATERIALS
materialRouter.delete('/:materialId', (req, res) => {
    console.log('/deletematerial - POST - req.param.index')
    materialApi.deleteMaterial(req.params.index).then(() => {
    res.redirect('/materialstore');
    })
})


//EDIT MATERIALS
materialRouter.get('/:materialId/edit', function(req, res) {
    materialApi.getOneMaterial(req.params.materialId).then((materialEId) => {
        res.render('materials/editMaterial', {materialEId} )
        console.log(materialEId)
    })
})

//ONE MATERIALS
materialRouter.get('/:materialId', (req, res) => {
    materialApi.getOneMaterial(req.params.materialId).then((material) => {
        res.render('./materials/oneMaterial', {material} )
    })
})

//UPDATE MATERIALS
materialRouter.put('/:materialId/editmaterial', (req,res) => {
    console.log('/editmaterial - POST - req.param.materialId')
    materialApi.editMaterial(req.params.materialId, req.body).then(() => {
    res.redirect('/materialstore')
    });

})

module.exports = {
    materialRouter
}