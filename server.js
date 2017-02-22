// variáveis
var express = require('express'),
	app = express(),
	apiRoutes = express.Router(),
	port = 8080,
	config = require('./config/config')(app),
	router = require('./routes/router')(apiRoutes);
	routes = require('./routes/routes')(app),
	ctrlRequest = require('./controllers/request');

// rotas da api
app.use('/api',apiRoutes);

// 404
app.use(ctrlRequest.badRequest);

// inicia a aplicação
app.listen(port);