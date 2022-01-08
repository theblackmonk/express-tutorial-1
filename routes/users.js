const express = require("express")
const router = express.Router()  //mini app/router that exists only in this file

router.use(logger);

router.get("/", (req, res) => {
    console.log(req.query.name) //grab name from url
    //res.send("User List")
})

router.get("/new", (req, res) => {
    res.render("users/new", { firstName: "Test" })
    //can't do res.render and res.send together
})

router.post('/', (req, res) => {
    //res.send('Create User')
    const isValid = true
    if(isValid) {
        users.push({ firstName: req.body.firstName })
        res.redirect(`/users/${users.length - 1}`)
    } else {
        console.log("Error")
        res.render("users/new", { firstName: req.body.firstName })
    }
    console.log(req.body.firstName)
    res.send('Hi')
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
    next() //goes on to the next piece of 
    //allows us to assign user names to an id and pass that to any function after
})    

function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

module.exports = router

//test