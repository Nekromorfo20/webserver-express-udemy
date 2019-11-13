/*
    nodemon server -e js,hbs,html.,css          Un comando especial para nodemon, el cual le pide a nodemon que cuando se realice un cambio
                                                revice las extensiones del -e
    hbs.registerHelper('name', function())      Los helper son funciones callbacks de asignacion para el envio de parametros a los archivos hbs
                                                para ser utilizados en los archivos hbs, se llaman de igual manera que como fueron declarados.
 */

const express = require('express')
const app = express()
const hbs = require('hbs')
require('./hbs/helpers')

const port = process.env.PORT || 3100

//Acceder a una carpeta fisica para mostrat paginas HTML estaticas desde nodeJS
app.use(express.static(__dirname + '/public') )

//Express HSB engine, sirve para establecer handlebars y renderisar vistas desde node
hbs.registerPartials(__dirname + '/views/parciales') //asignar el directorio views/parciales
app.set('view engine', 'hbs')

//Regresa la pagina de home.hbs
app.get('/', (req, res) => {
    res.render('home', {
        nombre: 'alan eduardo',
    })
})

//regresa la pagina de about.hbs
app.get('/about', (req, res) => {
    res.render('about', {
        imagen: 'assets/img/maqueta.jpg',
        mensaje: 'Bievenido a la pagina de about, esta es la maqueta que hice :D',
    })
})

app.listen(port, () => {
    console.log(`Servidor mostando en http://localhost:${port}`)
})