'use strict'

const Social = require('../models/socialNet')
const mongoose = require('mongoose')

function saveSocial (req, res) {
	console.log('POST /api/social')
	console.log(req.body)

	let social = new Social()
	social.name = req.body.name
	social.link = req.body.link

	social.save((err, socialStored) => {
		if(err) res.status(500).send({message: `Error al salvar la red social ${err}`})
		else res.status(200).send({social: socialStored})
	})
}

function getSocial (req, res) {
	let socialId = req.params.socialId

	Social.findById(socialId, (err, social) => {
		if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
		if(!social) return res.status(404).send({message: 'La red social no existe'})
	
		res.status(200).send({ social })
	})
}

function getSocials (req, res) {
	Social.find({}, (err, socials) => {
		if (err) return res.status(500).send({message: `Error al realizar la petición: ${err}`})
		if (!socials) return res.status(404).send({message: 'No existen redes'})
	
		res.status(200).send({socials})
	})
}

function updateSocial (req, res) {
	let name = req.params.name
	let update = req.body

	console.log(update);
	Social.findOneAndUpdate( {name}, update, (err, socialUpdated) => {
		if(err) res.status(500).send({message: `Error al actualizar la red social: ${err}`})

		res.status(200).send({ user: socialUpdated})
	})
}

function deleteSocial (req, res) {
	let socialId = req.params.socialId

	Social.findById(socialId, (err, social) => {
		if(err) res.status(500).send({message: `Error al borrar la red social: ${err}`})
		
		social.remove(err => {
			if(err) res.status(500).send({message: `Error al borrar la red social: ${err}`})
			res.status(200).send({message: 'La red social ha sido eliminado'})
		})
	})
}

module.exports = {
	getSocial,
	getSocials,
	saveSocial,
	updateSocial,
	deleteSocial
}