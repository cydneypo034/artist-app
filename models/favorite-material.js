const mongoose = require('./connection.js')

const materialsSchema = new mongoose.Schema({
    type: String,
    quantity: Number,
    brandName: String,
    cost: String,
})

const MaterialsCollection = mongoose.model('materials', materialsSchema)


function createMaterial() {
    return MaterialsCollection.create({
    type: "",
    quantity: 0,
    brandName: "",
    cost: "",
    })
}

function getAllMaterials() {
    return MaterialsCollection.find()
}

function getOneMaterial(oneMaterialId) {
    return MaterialsCollection.findById(oneMaterialId)
}

function addNewMaterial(newMaterial) {
    return MaterialsCollection.create(newMaterial)
}

function deleteMaterial(killMaterialId) {
    return MaterialsCollection.findByIdAndDelete(killMaterialId)
}

function editMaterial(materialId, newEMaterial) {
    return MaterialsCollection.findByIdAndUpdate(materialId, newEMaterial)
}


module.exports = {
    addNewMaterial,
    createMaterial,
    deleteMaterial,
    editMaterial,
    getAllMaterials,
    getOneMaterial,
}