const storeApi = require('./artstore.js')

storeApi.deleteAllStores().then((allStoresInDB) => {
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