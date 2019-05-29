let {
    Router
} = require("express")
let router = Router()
let modeltacks =  require("../model/tacks")


router.get("/", async (req, res) => {
     
     let tacks = await modeltacks.find() 
     
    res.render("index",{title:"Hola mundo",'tacks':tacks})
})

router.post("/add", async (req, res) => {
    let tacks = new modeltacks()
    tacks.tack=req.body.tack
     await tacks.save()
     res.redirect("/")    
})

router.get("/:id/delete", async (req, res) => {
    let id =req.params.id
    await modeltacks.findByIdAndDelete(id)
    res.redirect("/")
})



module.exports = router
