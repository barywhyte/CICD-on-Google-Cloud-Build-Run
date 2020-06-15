const http = require('http')
const server = http.createServer((req, res) =>{
    console.log('New Connection')
    res.end('Hello Seun! But this time on cloud build and cloud run for CI/CD')
})

const PORT = process.env.PORT || 8080
server.listen(PORT, () => console.log('Listening'))
