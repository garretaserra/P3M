let mongoose = require('mongoose');

let Proyecto = new mongoose.Schema({
    cartera: {type: String, required: true},
    compania: {type: String, required: true, enumerable: ['Banco', 'Seguros', 'BS']},
    direccion: {type: String, required: true, enumerable: ['Direccion General', 'Seguridad', 'Desarrollo Transversal']},
    area: {type: String, required: true}
});

module.exports = mongoose.model('Proyecto', Proyecto);
