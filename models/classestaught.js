const mongoose = require('./connection.js')

const classesSchema = new mongoose.Schema({
    address: String,
    minutesDuration: Number,
    website: String,
    teacher: String,
    taughtSeasonal: Boolean
})

const classesCollection = mongoose.model('classes', classesSchema)

function getAllClasses() {
    return classesCollection.find()
}

function getOneClass() {
    return classesCollection.findById()
}

function addNewClass() {
    return classesCollection.create()
}

function updateClass() {
    return classesCollection.findByIdAndUpdate()
}

function deleteClass() {
    return classesCollection.findByIdAndDelete()
}
