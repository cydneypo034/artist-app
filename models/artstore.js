const mongoose = require('./connection.js')

const StoreSchema = mongoose.Schema({
    name: String,
    address: String,
    yearsOpen: Number,
    website: String,
    manager: String,
    availableClasses: Boolean
})

const StoreCollection = mongoose.model('Store', StoreSchema)

function createStore() {
    return StoreCollection.create({
    name: "",
    address: "",
    yearsOpen: 0,
    website: "",
    manager: "",
    availableClasses: true
    })
}

function getAllStores() {
    return StoreCollection.find()
}

function getOneStore(storeOneId) {
    return StoreCollection.findOne(storeOneId)
}

function getOneMaterial(materialOneId) {
    return StoreCollection.findOne(materialOneId)
}

function addNewStore(newStore) {
    return StoreCollection.create(newStore);
}

function editStore(storeUpdateId) {
    return StoreCollection.findByIdAndUpdate(storeUpdateId)
}

function deleteStore(storeId) {
    return StoreCollection.findByIdAndDelete({_id: storeId})
}

module.exports = {
    addNewStore,
    createStore,
    deleteStore,
    editStore,
    getAllStores,
    getOneStore,
    getOneMaterial,
}

