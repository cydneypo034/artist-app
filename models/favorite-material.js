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

function deleteAllMaterials(thingId){
    return MaterialsCollection.deleteMany(thingId)
}

function getOneMaterial(oneMaterialId) {
    return MaterialsCollection.findOne(oneMaterialId)
}

function addNewMaterial(newMaterial) {
    return MaterialsCollection.create(newMaterial)
}

function updateMaterial(materialUpdateId) {
    return MaterialsCollection.updateOne(materialUpdateId)
}

function deleteMaterial(materialId) {
    return MaterialsCollection.deleteOne(materialId)
}

module.exports = {
    addNewMaterial,
    createMaterial,
    deleteMaterial,
    getAllMaterials,
    getOneMaterial,
    updateMaterial,
    deleteAllMaterials,
}