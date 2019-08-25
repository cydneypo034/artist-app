const classApi = require('./classestaught.js')

classApi.getAllClasses().then((allClassesInDB) => {
    console.log(allClassesInDB)
})

classApi.createClass().then((newDbClass) => {
    console.log(newDbClass)
})

classApi.addNewClass().then((addClassToDB) => {
    console.log(addClassToDB)
})

classApi.deleteClass().then((noClassInDB) => {
    console.log(noClassInDB)
})