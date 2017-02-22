var Message = require('./Message');

exports.badRequest = function(req,res,next) {

	var msg = new Message();

	msg.setCode('999');
	msg.setContent({
		message : "Rota não Existente"
	});
	res.json( msg.buildMessage() );

}
