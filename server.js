//--------------------------express js tutorial -------------------------------------------//
//Create package.json with npm init -y
//Install express in terminal with npm i express
//Make changes to server without restarting: npm i --save-dev nodemon
const express = require('express')   //require in the express we just installed
const app = express()               //create an instance of express

//This instance can call a number of http methods
//commonly .get, .host, .put, .delete, .patch


//We must choose a view engine if we want to use embedded JS in our HTML
app.set('view engine', 'ejs') 
app.use(logger)  //first middleware function //everything will execute after middleware

//all middleware takes, req, res, next. Next is normally only used with middleware
function logger(req, res, next) {
    console.log(req.originalUrl)
    next()
}

app.use(express.static("public")) //serves all files from public folder (html files)
app.use(express.urlencoded({ extended: true })) //allows utilization of info coming from forms
app.use(express.json()) //allows you to parse json info from body

//first parameter is path, next parameter is function
app.get('/', logger, logger, logger, (req, res) => {          
    //code runs whenever we try and access this url
    console.log("Here")
    res.render("tt.html", { text: 'yay', how: 'yer' })    //second parameter is an object it takes, view files are in their folder
    
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