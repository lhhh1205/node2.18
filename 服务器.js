const fs = require('fs')
const path = require('path')
const http = require('http')
const severs = http.createServer()
severs.listen(3300, () => {
    console.log('启动')
})
severs.on('request', (req, res) => {
    if (req.method == 'GET' && (req.url == '/index1.html'||req.url=='/')) {
        fs.readFile(path.join(__dirname, "./file/index1.html"), (err, data) => {
            if (err) return console.log(err.message)
            res.end(data)
        })
    } else if (req.method == 'GET' && req.url == '/index2.html') {
        fs.readFile(path.join(__dirname, "./file/index2.html"), (err, data) => {
            if (err) return console.log(err.message)
            res.end(data)
        })
    }else if (req.method == 'GET' && req.url == '/css/index2.css') {
        fs.readFile(path.join(__dirname, "./css/index2.css"), (err, data) => {
            if (err) return console.log(err.message)
            res.end(data)
        }) 
    }else if (req.method == 'GET' && req.url == '/css/index1.css') {
        fs.readFile(path.join(__dirname, "./css/index1.css"), (err, data) => {
            if (err) return console.log(err.message)
            res.end(data)
        }) 
    }else if (req.method == 'GET' && req.url == '/css/index1.js') {
        fs.readFile(path.join(__dirname, "./css/index1.js"), (err, data) => {
            if (err) return console.log(err.message)
            res.end(data)
        })
    }else {
        res.end('404')
}
})