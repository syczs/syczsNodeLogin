const express = require('express');
const path = require('path')
const app = express();
const bodyParser = require('body-parser')
const session = require('express-session')
const reister = require(path.join(__dirname,'./routers/accunRouter.js'))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
//section
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))
//设置静态资源
app.use(express.static(path.join(__dirname,"public")))


app.use('/account',reister)


app.listen(3000,'127.0.0.1',err=>{
    if(err){
        console.log(err)
    }
    console.log('satrt ok')
})



