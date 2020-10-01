const server = require('./api/server') //import 

const port = process.env.PORT
server.listen(port, () => {
    console.log(`Yeah! Server running on port: ${process.env.PORT}`)
})