var Message = require('../controllers/Message');
var request = require('request');
var cheerio = require('cheerio');


exports.get = MelhorCambio;

function MelhorCambio(obj,req,res,next) {

	if (obj) {

		var url = "https://www.melhorcambio.com/" + obj.path;
		var valor;

		request(url, function(error, response, html){
			
			if(!error){
				
				var msg = new Message();
				var $ = cheerio.load(html);
				
				valor = $('#comercial').val();

				msg.setCode('000');
				msg.setContent({ 
					"moeda": obj.chave,
					"valor" : "R$ " + valor,
					"fonte": "Melhor Cambio - " + url
				});
				
				res.json( msg.buildMessage() );

			}

		});

	}

}