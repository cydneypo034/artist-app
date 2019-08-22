const materialApi = require('./favorite-material.js')

materialApi.addNewMaterial().then((newMaterial) => {
    console.log(newMaterial)
})

storeApi.getAllMaterials().then((allMaterialsInDB) => {
    console.log(allMaterialsInDB)
})
