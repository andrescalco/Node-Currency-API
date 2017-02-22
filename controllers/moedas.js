var moedas = require('../model/moedas');
var Message = require('../controllers/Message');

module.exports = Moedas;

function Moedas(req,res,next) {

	var msg = new Message();
	msg.setCode('000');

	msg.setContent({ 
		"moedas": moedas,
	});

	res.json( msg.buildMessage() );
	
}