const express = require("express")
const router = express.Router()  //mini app/router that exists only in this file

router.get("/", (req, res) => {
    res.send("User List")
})

router.get("/new", (req, res) => {
    res.send("User New Form")
})

router.post('/', (req, res) => {
    res.send('Create User')
})

//Put static routes ^ above dynamic routes
//get any route that starts out with /users/ and has any code afterward
/*router.get('/:id', (req, res) => {  //grab url path
    req.params.id
    res.send(`Get User With ID ${req.params.id}`)
})

router.put('/:id', (req, res) => {  //grab url path
    req.params.id
    res.send(`Update User With ID ${req.params.id}`)
})

router.delete('/:id', (req, res) => {  //grab url path
    req.params.id
    res.send(`Delete User With ID ${req.params.id}`)
})*/


//or use the following equivalent

router
.route('/:id')
.get((req, res) => {  //grab url path
    console.log(req.user)
    res.send(`Get User With ID ${req.params.id}`)
})
.put((req, res) => {  //grab url path
    req.params.id
    res.send(`Update User With ID ${req.params.id}`)
})
.delete((req, res) => {  //grab url path
    req.params.id
    res.send(`Delete User With ID ${req.params.id}`)
})


const users = [{name: 'Kyle'}, {name: 'Billy'}]
// .param runs anytime you find a paramater that matches
// middleware. Runs between request and response
router.param("id", (req, res, next, id) => {
    req.user = users[id] //anytime we pass in an id. Get it from our user variable
    next() //goes on to the next piece of middleware
})    

module.exports = router