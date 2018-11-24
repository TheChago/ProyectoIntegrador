'use strict'

var Departament = require('../models/departament');
var fs = require('fs');
var path = require('path');

var controller = {
	home: function(req, res){
		return res.status(200).send({
			message: 'Soy la home'
		});
	},

	test: function(req, res){
		return res.status(200).send({
			message: "Soy el metodo o accion test de controlador departament"
		});
	},

	saveDepartament: function(req, res){
		var departament = new Departament();

		var params = req.body;
		departament.name = params.name;
		departament.description = params.description;
		departament.bedrooms = params.bedrooms;
		departament.garage = params.garage;
		departament.location = params.location;
		departament.rent = params.rent;
		departament.image = null;

		departament.save((err, departamentStored) => {
			if(err) return res.status(500).send({message: 'Error al guardar el departamento'});
				
			if(!departamentStored) return res.status(404).send({message: 'No se ha podido guardar el departamento.'});
	
				return res.status(200).send({departament: departamentStored});
		});

	},

	getDepartament: function(req, res){

		var departamentId = req.params.id;

		if(departamentId == null) return res.status(404).send({message: 'El departamento no existe.'});

		Departament.findById(departamentId, (err, departament) => {

			if(err) return res.status(500).send({message: 'Error al devolver los datos.'});

			if(!departament) return res.status(404).send({message: 'El departamento no existe.'});

			return res.status(200).send({
				departament
			});

		});

	},

	getDepartaments: function(req, res){
		Departament.find({}).sort({ name: 1 }).exec((err, departaments) => {

			if(err) return res.status(500).send({message: 'Error al devolver los datos.'});

			if(!departaments) return res.status(404).send({message: 'No hay departamentos para mostrar.'});

			return res.status(200).send({departaments});
		});
	},

	updateDepartament: function(req, res){

		var departamentId = req.params.id;
		var update = req.body;

		Departament.findByIdAndUpdate(departamentId, update, {new:true}, (err, departamentUpdated) => {
			if(err) return res.status(500).send({message: 'Error al actualizar'});

			if(!departamentUpdated) return res.status(404).send({message: 'No existe departamento para actualizar'});

			return res.status(200).send({

				departament: departamentUpdated
			});
		});
	},

	deleteDepartament: function(req, res){
		var departamentId = req.params.id;

		Departament.findByIdAndRemove(departamentId, (err, departamentRemoved) => {
			if(err) return res.status(500).send({message: 'No se ha podido borrar'});

			if(!departamentRemoved) return res.status(404).send({message: 'No se ha podido eliminar'});

			return res.status(200).send({
				departament: departamentRemoved
			});
		});
	},

	uploadImage: function(req, res){

		var departamentId = req.params.id;
		var fileName = 'Imagen no subida..'

		if(req.files){
			var filePath = req.files.image.path;
			var fileSplit = filePath.split('\\');
			var fileName = fileSplit[1];
			var extSplit = fileName.split('\.');
			var fileExt = extSplit[1];

			if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif'){

				Departament.findByIdAndUpdate(departamentId, {image: fileName}, {new:true}, (err, departamentUpdated) => {
					if(err) return res.status(500).send({message: 'La imagen no se ha subido'});

					if(!departamentUpdated) return res.status(404).send({message: 'El departamento no existe y no se le ha asignado imagen'});

					return res.status(200).send({
						departament: departamentUpdated
					});
				});
			}else{

				fs.unlink(filePath,(err) => {
					return res.status(200).send({message:'La extensión no es válida'})
				});

			}
		}else{
			return res.status(200).send({
				message: fileName
			});
		}
	},

	getImageFile: function(req, res){
		var file = req.params.image;
		var path_file = './uploads/'+file;

		fs.exists(path_file, (exists) => {
			if(exists){
				return res.sendFile(path.resolve(path_file));
			}else{
				return releaseEvents.status(200).send({
					message: "No existe la imagen..."
				});
			}
		});
	}
};

module.exports = controller; 