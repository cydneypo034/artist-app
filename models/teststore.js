const storeApi = require('./artstore.js')

storeApi.addNewStore().then((newStore) => {
    console.log(newStore)
})

storeApi.getAllStores().then((allStoresInDB) => {
    console.log(allStoresInDB)
})

storeApi.getOneStore("5d5ece44cb4362f23ca9b313").then((foundStore) => {
    console.log("single store by _id")
    console.log(foundStore)
})
