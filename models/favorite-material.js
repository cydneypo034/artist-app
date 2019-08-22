const mongoose = require('./connection.js')

const materialsSchema = new mongoose.Schema({
    type: String,
    quantity: Number,
    brandName: String,
    cost: Number,
    soldYearRound: Boolean
})

const MaterialsCollection = mongoose.model('materials', materialsSchema)


function createMaterial() {
    return MaterialsCollection.create({
    type: "",
    quantity: 0,
    brandName: "",
    cost: 0,
    soldYearRound: true
    })
}

function getAllMaterials() {
    return MaterialsCollection.find()
}

function getOneMaterial(materialId) {
    return MaterialsCollection.findById(materialId)
}

function addNewMaterial(newMaterial) {
    return MaterialsCollection.create( [newMaterial] )
}

function updateMaterial(materialUpdateId) {
    return MaterialsCollection.findByIdAndUpdate(materialUpdateId)
}

function deleteMaterial(materialId) {
    return MaterialsCollection.findByIdAndDelete(materialId)
}

module.exports = {
    addNewMaterial,
    createMaterial,
    deleteMaterial,
    getAllMaterials,
    getOneMaterial,
    updateMaterial
}