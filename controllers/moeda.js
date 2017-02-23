var moedas = require('../model/moedas');
var Message = require('../controllers/Message');
var serviceCambio = require('../services/MelhorCambio');

module.exports = Moeda;

function Moeda(req,res,next) {

	var params = req.params,
	moeda = params['moeda'].toUpperCase();

	var moedas = {
		'CAD' : {
			path : 'dolar-canadense-hoje',
			chave : 'CAD',
			nome : 'DOLAR CANADENSE',
		},
		'USD' : {
			path : 'dolar-hoje',
			chave : 'USD',
			nome : 'DOLAR',
		},
		'EUR' : {
			path : 'euro-hoje',
			chave : 'EUR'
		},
		'GBP' : {
			path : 'libra-hoje',
			chave : 'GBP',
			nome : 'LIBRA',
		},
		'AUD' : {
			path : 'dolar-australiano-hoje',
			chave : 'AUD',
			nome : 'DOLAR AUSTRALIANO',
		},
		'ARS' : {
			path : 'peso-argentino-hoje',
			chave : 'ARS',
			nome : 'PESO ARGENTINO',
		},
		'CLP' : {
			path : 'peso-chileno-hoje',
			chave : 'CLP',
			nome : 'PESO CHILENO',
		},
		'CHF' : {
			path : 'franco-suico-hoje',
			chave : 'CHF',
			nome : 'FRANCO SUICO',
		},
		'JPY' : {
			path : 'iene-hoje',
			chave : 'JPY',
			nome : 'IENE',
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