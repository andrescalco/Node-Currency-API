// variáveis
var ctrlIndex   = require('../controllers/index'),
	ctrlMoedas 	= require('../controllers/moedas'),
	ctrlMoeda 	= require('../controllers/moeda'),
	ctrlCad 	= require('../controllers/cad'),
	ctrlRequest = require('../controllers/request');

module.exports = function(apiRoutes){

	// raiz da api
    apiRoutes.get('/', ctrlIndex.index);

    apiRoutes.get('/cotacao/moedas', ctrlMoedas);

	// cad
    apiRoutes.get('/cotacao/moeda/:moeda', ctrlMoeda);

	// 404
	apiRoutes.use(ctrlRequest.badRequest);

}