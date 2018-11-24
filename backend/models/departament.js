'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DepartamentSchema = Schema({
	name: String,
	description: String,
	bedrooms: String,
	bathrooms: String,
	garage: String,
	location: String,
	rent: String,
	image: String
});

module.exports = mongoose.model('Departament', DepartamentSchema);
//Departament --> guarda los documentos en esa coleccion