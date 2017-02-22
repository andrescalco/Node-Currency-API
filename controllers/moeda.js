var moedas = require('../model/moedas');
var Message = require('../controllers/Message');
var serviceCambio = require('../services/MelhorCambio');

module.exports = Moeda;

function Moeda(req,res,next) {

	var params = req.params,
	moeda = params['moeda'].toUpperCase();

/*
@ TODO
	ARS : https://www.melhorcambio.com/peso-argentino-hoje
	CLP : https://www.melhorcambio.com/peso-chileno-hoje
	CHF : https://www.melhorcambio.com/franco-suico-hoje
	JPY : https://www.melhorcambio.com/iene-hoje
*/

	var moedas = {
		'CAD' : {
			path : 'dolar-canadense-hoje',
			chave : 'CAD'
		},
		'USD' : {
			path : 'dolar-hoje',
			chave : 'USD'
		},
		'EUR' : {
			path : 'euro-hoje',
			chave : 'EUR'
		},
		'GBP' : {
			path : 'libra-hoje',
			chave : 'GBP'
		},
		'AUD' : {
			path : 'dolar-australiano-hoje',
			chave : 'AUD'
		},

	}

	if ( moedas[moeda] ) {

		serviceCambio.get(moedas[moeda],req,res,next);

	} else {
	
		var msg = new Message();

		msg.setCode('999');
		msg.setContent({
			message : "Moeda não Existente"
		});
		
		res.json( msg.buildMessage() );

	}
	
}