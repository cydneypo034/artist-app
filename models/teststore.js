const storeApi = require('./artstore.js')

storeApi.addNewStore().then((newStore) => {
    console.log(newStore)
})

storeApi.getAllStores().then((allStoresInDB) => {
    console.log(allStoresInDB)
})

