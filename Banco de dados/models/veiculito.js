const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ModelSchema = new Schema({
  marca: { type: String, required: true },
  modelo: { type: String, required: true },
  km: { type: String, required: true , default: "0"},
  ano: { type: String, required: true },
  cor: { type: String, required: true },
  cambio: { type: String, required: true },
  valor: { type: String, required: true }
});

module.exports = mongoose.model('Veiculito', ModelSchema );