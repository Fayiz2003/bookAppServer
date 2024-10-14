// import json server
const jsonServer = require('json-server')
// create server for BOOK
const BOOKServer = jsonServer.create()
//create middleware
const middleware = jsonServer.defaults()
//set route for json file
const route = jsonServer.router('db.json')
//to available app in port
const PORT = 3000 || process.env.PORT

BOOKServer.use(middleware)
BOOKServer.use(route)
BOOKServer.listen(PORT,()=>{
    console.log(`Employee App server started at port ${PORT} and waiting for client request `);

})