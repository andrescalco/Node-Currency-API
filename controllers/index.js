var Message = require('./Message');

exports.index = function(req,res,next) {

	var msg = new Message();
	
	msg.setCode('000');
	msg.setMessage('Bem-vindo a API');

	res.json( msg.buildMessage() );

}