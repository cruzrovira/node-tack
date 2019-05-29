let express = require("express")
let path = require("path")
let morgan = require("morgan")

let app = express()
require("./database")

app.set("port", process.env.PORT || 3000)
app.set("view engine", "ejs")
app.set("views", path.join(__dirname, "views"))

app.use(morgan("dev"))
app.use(express.static(path.join(__dirname, "public")))
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))


app.use(require("./routers/index"))

app.use((req, res, next) => {
    res.status(404)
    res.render("404",{title:"error 404"})
})

app.listen(app.get("port"), () => {
    console.log(`http://localhost:${app.get("port")}`)
})