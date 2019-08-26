//import express
//import api files from models file.
//import more than api to create the controller you need.
//create a new router.

const express = require('express')
const classApi = require('../models/classestaught.js')
const classRouter = express.Router()


//ALL Classes HTTP

classRouter.get('/', function(req, res) {
    classApi.getAllClasses().then((classes) => {
        res.render('./classes/allClasses', {classes});
    })
})


//ADD CLASS HTTP
//redirect added class id to allClasses page once user clicks button

classRouter.get('/createClass', function(req, res){
    //classApi.addNewClass(req.body).then(() => {
    res.render('classes/createClass')
    //})
})

//reroutes user back to landing page when they click add class
classRouter.post('/addclass', (req, res) => {
    console.log('/addclass - POST - req.body', req.body)
    classApi.addNewClass(req.body).then((newClass) => {
        console.log(newClass)
        res.redirect('/classstore')
    })
    //res.render('storeforcreateform/allStores')
})

//EDIT CLASS HTTP

classRouter.get('/:classId/edit', function(req, res) {
    classApi.getOneClass(req.params.index).then((classedit) => {
    res.render('classes/editClass', {classedit})
    })
})

//ONE CLASS HTTP
classRouter.get('/:classId', function(req, res){
    classApi.getOneClass(req.params.index).then((oneclass) => {
        res.render('classes/oneClass', {oneclass})
    })
})

//UPDATE CLASS HTTP
classRouter.put('/:classId', (req,res) => {
    console.log('/classstore - POST - req.param.index')
    classApi.updateClass(req.params.index, req.body).then(() => {
    res.redirect('/classstore');
    })
})

//DELETE STORE
classRouter.delete('/:classId', (req, res) => {
    console.log('/deleteclass - POST - req.param.index')
    classApi.deleteClass(req.params.index).then(() => {
    res.redirect('/classstore');
    })
})


module.exports = {
    classRouter
}