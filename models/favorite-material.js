const mongoose = require('./connection.js')

const materialsSchema = new mongoose.Schema({
    type: String,
    quantity: Number,
    brandName: String,
    cost: Number,
    soldYearRound: Boolean
})

const materialsCollection = mongoose.model('materials', materialsSchema)

function getAllClasses() {
    return materialsCollection.find()
}

function getOneClass() {
    return materialsCollection.findById()
}

function addNewClass() {
    return materialsCollection.create()
}

function updateClass() {
    return materialsCollection.findByIdAndUpdate()
}

function deleteClass() {
    return materialsCollection.findByIdAndDelete()
}