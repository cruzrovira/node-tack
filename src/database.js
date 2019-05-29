let {
    connect
} = require("mongoose")

let db = async () => {
    try {
      await  connect('mongodb://localhost/tack', {
            useNewUrlParser: true
        })
        console.log("Conect database")
    } catch (error) {
        console.error(`Error db : ${error}`)
    }

}

db()