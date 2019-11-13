const http = require('http')

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' })
    let salida = {
        nombre: 'Alan',
        apellido: 'Aguilar',
        edad: 22,
        url: req.url
    }

    res.write( JSON.stringify(salida))
    res.end()
})
.listen(3100)
console.log('Aplicacion web server desplegada en el puerto 3100')