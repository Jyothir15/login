const express = require('express')

const indexroutes = require('./router/index.router');
const userroutes = require('./router/userrouter');
const authroutes = require('./router/authrouter');
// const user1routes = require('./router/user1router')
const connectdb = require('./utils/database')

const app = express()
const port = 8002;

app.use(express.json())
app.use('/', indexroutes);
app.use('/user', userroutes);
app.use('/auth', authroutes);
// app.use('/user1',user1routes);


connectdb();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});








// create 2 route  user and auth 
// in user create method post 
// update method put
// list method get
// deselect method delete

//auth
// auth/user/create method post
// auth/login post
// auth/forgotpassword post

// firtname lastname string 
// age number
// gender string
// active bool
// created date
// created by 
// modified by 
// modified date