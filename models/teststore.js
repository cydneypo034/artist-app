const storeApi = require('./artstore.js')

storeApi.deleteStore().then((allStoresInDB) => {
    console.log(allStoresInDB)
})

storeApi.addNewStore().then((newStore) => {
    console.log(newStore)
})

storeApi.getAllStores().then((allNewStoresInDB) => {
    console.log(allNewStoresInDB)
} )

storeApi.createStore().then((newStoreInDB) => {
    console.log(newStoreInDB)
})

storeApi.editStore().then((editEach, newEach) => {
    console.log(editEach, newEach)
})