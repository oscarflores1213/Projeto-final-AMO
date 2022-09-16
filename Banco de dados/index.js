const express = require('express')
const mongoose = require('mongoose');
const Veiculo = require('./models/veiculito')
const cors = require('cors')
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())
//app.use(express.urlencoded())

const mongoUrl = ''
mongoose.connect(mongoUrl, { useNewUrlParser: true , useUnifiedTopology: true});
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB deu erro'));

app.post('/create', async (req, res) => {
  const veiculo = await Veiculo.create({ 
    marca: req.body.marca,
    modelo: req.body.modelo,
    km: req.body.km,
    ano: req.body.ano,
    cor: req.body.cor,
    cambio: req.body.cambio,
    valor: req.body.valor
 });

  res.json({ veiculo })
})

app.get('/', (req, res) => {  
    res.json({ veiculos:"app ok" })
  })

app.get('/read', async (req, res) => {
  const veiculos = await Veiculo.find({})

  res.json({ veiculos })
})

app.get('/read/:id', async (req, res) => {
  const veiculo = await Veiculo.findById(req.params.id)

  res.json({ veiculo })
})

app.put('/update/:id', async (req, res) => {
  const veiculo = await Veiculo.findById(req.params.id)

  veiculo.marca = req.body.marca ? req.body.marca : veiculo.marca;
  veiculo.modelo = req.body.modelo ? req.body.modelo : veiculo.modelo;
  veiculo.km = req.body.km ? req.body.km : veiculo.km;
  veiculo.ano = req.body.ano ? req.body.ano : veiculo.ano;
  veiculo.cor = req.body.cor ? req.body.cor : veiculo.cor;
  veiculo.cambio = req.body.cambio ? req.body.cambio : veiculo.cambio;
  veiculo.valor = req.body.valor ? req.body.valor : veiculo.valor;

  await veiculo.save()

  res.send({ veiculo })
})

app.delete('/delete/:id', async (req, res) => {
  const deletar = await Veiculo.deleteOne({ _id: req.params.id }) 

  res.json({deletar})
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})