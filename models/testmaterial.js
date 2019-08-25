const materialApi = require('./favorite-material.js')

materialApi.addNewMaterial().then((newMaterial) => {
    console.log(newMaterial)
})

materialApi.getAllMaterials().then((allMaterialsInDB) => {
    console.log(allMaterialsInDB)
})

materialApi.deleteAllMaterials().then((allThingsInDB) => {
    console.log(allThingsInDB)
})

materialApi.createMaterial().then((newMaterialInDB) => {
    console.log(newMaterialInDB)
})