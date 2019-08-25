const materialApi = require('./favorite-material.js')

materialApi.deleteMaterial().then((killThingInDB) => {
    console.log(killThingInDB)
})

materialApi.addNewMaterial().then((newMaterial) => {
    console.log(newMaterial)
})

materialApi.getAllMaterials().then((allMaterialsInDB) => {
    console.log(allMaterialsInDB)
})

materialApi.createMaterial().then((newMaterialInDB) => {
    console.log(newMaterialInDB)
})