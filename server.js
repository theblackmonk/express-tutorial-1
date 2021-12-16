const express = require('express') //require in the express we just installed
const app = express()

//app.get, host, put, delete, patch  (http methods)
//common calls

//here we setup a route and call a specific method
//first param is path, second param is function

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    //code runs whenever we try and access this url
    console.log("Here")
    res.render("index", { text: 'yay', how: 'yer' })    //second parameter is an object it takes, view files are in their folder
    
    //res.json({ message: "Error" })
    //res.sendStatus(500).send('Hi') //this code means there is an error
    //res.download('server.js') //will download file directly to hard drive
    //res.send('HIS')
    //res.status(500).json({ message: "Error"})
})

/*app.get('/users', (req, res) => {   // put this in user file so we can later import this into our main file
    res.send('User List')             //this user will get called from the routes file  
})

app.get('/users/new', (req, res) => {
    res.send('User New Form')
}) */



const userRouter = require('./routes/users')
app.use('/users', userRouter)   //main uses cases, but can link a route to a path 
//('where we mount this router', pass in the router)

//app listens for request at this port
app.listen(3000)