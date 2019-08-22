const mongoose = require('./connection.js')

const artStoreSchema = new mongoose.Schema({
    address: String,
    yearsOpen: Number,
    website: String,
    manager: String,
    availableClasses: Boolean,
})

const artStoreCollection = mongoose.model('artStore', artStoreSchema)

function getAllStores() {
    return artStoreCollection.find()
}

function getOneStore(storeId) {
    return artStoreCollection.findById(storeId)
}

function addNewStore(newStore) {
    return artStoreCollection.create(newStore)
}

function updateStore(updateId, newStore) {
    return artStoreCollection.findByIdAndUpdate(updateId, newStore)
}

function deleteStore(deleteId) {
    return artStoreCollection.findByIdAndDelete(deleteId)
}

module.exports = {
    addNewStore,
    deleteStore,
    getAllStores,
    getOneStore,
    updateStore
}