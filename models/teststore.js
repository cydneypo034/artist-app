const storeApi = require('./artstore.js')

storeApi.getAllStores().then((stores) => Promise.all(stores.map(storeApi.deleteStore)))