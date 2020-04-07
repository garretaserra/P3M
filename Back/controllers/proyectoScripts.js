'use strict';
let mongoose = require('mongoose');

let Proyecto = mongoose.model('Proyecto');

exports.addProyecto = async function(req, res) {
    let pro = new Proyecto(req.body);
    let response = await pro.save();
    return  res.status(200).send(response);
};

exports.getAllProyecto = async function(req, res){
    let proyectos = await Proyecto.find();
    console.log(proyectos);
    return res.status(200).json(proyectos);
};

exports.getProyecto = async function(req, res) {

};

exports.deleteProyecto = async function(req, res) {

};

exports.updateProyecto = async function(req, res) {

};
