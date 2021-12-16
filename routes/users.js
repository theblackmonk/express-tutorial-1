const express = require("express")
const router = express.Router()  //mini app/router that exists only in this file

router.get("/", (req, res) => {
    res.send("User List")
})

router.get("/new", (req, res) => {
    res.send("User New Form")
})

