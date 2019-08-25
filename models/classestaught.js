const mongoose = require('./connection.js')

const classesSchema = new mongoose.Schema({
    name: String,
    address: String,
    minutesDuration: String,
    website: String,
    teacher: String,
    taughtSeasonal: Boolean
})

const ClassesCollection = mongoose.model('classes', classesSchema)

function createClass() {
    return ClassesCollection.create({
        name: " ",
        address: " ",
        minutesDuration: " ",
        website: " ",
        teacher: " ",
        taughtSeasonal: true,
    })
}

function getAllClasses() {
    return ClassesCollection.find()
}

function getOneClass(getClass) {
    return ClassesCollection.findOne(getClass)
}

function addNewClass(addClass) {
    return ClassesCollection.create(addClass)
}

function updateClass() {
    return ClassesCollection.findByIdAndUpdate()
}

function deleteClass(noClass) {
    return ClassesCollection.deleteOne(noClass)
}

module.exports = {
    addNewClass,
    createClass,
    deleteClass,
    getAllClasses,
    getOneClass,
    updateClass,
}