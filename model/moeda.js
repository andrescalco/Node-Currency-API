module.exports = Moeda;

function Moeda(moeda,nome,fonte){
	
	'use strict';

	this.moeda;
	this.nome;
	this.fonte;

	this.content = {};
	
}

Moeda.prototype = {
	getMoeda : function(){
		return this.moeda;
	},
	getNome : function(){
		return this.nome;
	},
	getFonte : function(){
		return this.fonte;
	},
	setMoeda : function(moeda){
		this.moeda = moeda;
	},
	setNome : function(nome){
		this.nome = nome;
	},
	setFonte : function(fonte){
		this.fonte = fonte;
	},
	setContent : function(){
		this.content = {
			"moeda" : this.getMoeda(),
			"nome" : this.getNome(),
			"fonte" : this.getFonte(),
		}
	},
	getContent : function(){
		return this.content;
	},
};