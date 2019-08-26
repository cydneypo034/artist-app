const mongoose = require('./connection.js')

const classesSchema = new mongoose.Schema({
    nameOfClass: String,
    nameOfStore: String,
    minutesDuration: String,
    website: String,
    teacher: String,
    taughtSeasonal: Boolean
})

const ClassesCollection = mongoose.model('classes', classesSchema)

function createClass() {
    return ClassesCollection.create({
        nameOfClass: " ",
        nameOfStore: " ",
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
    return ClassesCollection.findById(getClass)
}

function addNewClass(addClass) {
    return ClassesCollection.create(addClass)
}

function editClass(firstClassId, newClassId) {
    return ClassesCollection.findOneAndUpdate(firstClassId, newClassId)
}

function deleteClass(noClass) {
    return ClassesCollection.deleteOne(noClass)
}

module.exports = {
    addNewClass,
    createClass,
    deleteClass,
    editClass,
    getAllClasses,
    getOneClass,
}