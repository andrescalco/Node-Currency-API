
module.exports = Message;

function Message() {
	
	"use strict";
  
	this.code;
	this.message;
	this.content;

}

Message.prototype.codes = {

	'000' : 'Pesquisa feita com sucesso.',
	'001' : 'Parâmetros Inválidos.',
	'002' : 'Operação Inválida.',
	'003' : 'Dados não encontrados.',
	'004' : 'É nescessário passar o token para autenticação.',
	'999' : 'Ops. Ocorreu um erro.'

};

Message.prototype.setCode = function (code) {
	this.code = code;
};

Message.prototype.setMessage = function (message) {
	this.message = message;
};

Message.prototype.setContent = function (content) {
	this.content = content;
};

Message.prototype.buildMessage = function () {
	
	var message = {};

	if ( this.code ) {
		message.code = this.code;
	}

	if ( this.message ) {
		message.message = this.message;
	} else if ( this.codes[this.code] ) {
		this.setMessage( this.codes[this.code] );
		message.message = this.message;
	}
	
	var date = new Date();
	
	message.date = date.getDate() + "/" + (date.getMonth()+1)  + "/" + date.getFullYear();
	message.hour = date.getHours() + ":"  + date.getMinutes() + ":" + date.getSeconds();

	if ( this.content ) {
		message.content = this.content;
	}

	return message;

};