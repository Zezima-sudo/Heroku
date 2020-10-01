const server = require('./api/server') //import 

const port = process.env.PORT || 5000;
server.listen(port, () => {
    console.log(`Yeah! Server running on port: ${port}`)
})