const mongoose = require('./connection.js')

var StoreSchema = new mongoose.Schema({
    name: String,
    address: String,
    yearsOpen: Number,
    website: String,
    manager: String,
    availableClasses: String,
})

const StoreCollection = mongoose.model('Store', StoreSchema)

function createStore() {
    return StoreCollection.create({
        name: " ",
        address: " ",
        yearsOpen: 0,
        website: " ",
        manager: " ",
        availableClasses: " ",
    })
}
function getAllStores() {
    return StoreCollection.find()
}

function deleteStore(noStores) {
    return StoreCollection.findByIdAndDelete(noStores)
}

function getOneStore(storeOneId) {
    return StoreCollection.findById(storeOneId)
}

function addNewStore(newStore) {
    return StoreCollection.create(newStore);
}

function editStore(storeEditId, newAStore) {
    return StoreCollection.findByIdAndUpdate(storeEditId, newAStore)
}


module.exports = {
    addNewStore,
    createStore,
    deleteStore,
    editStore,
    getOneStore,
    getAllStores,
}

