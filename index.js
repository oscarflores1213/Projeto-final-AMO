const http = require('http')
const fs = require('fs')
const express = require('express')
const app = express()


app.set('view engine', 'ejs')

app.get('/galery', (req, res) => {
    res.render('galery')
})






app.listen(3000, () => {
    console.log('Iniciando o ExpressJS na porta 3000')
  })