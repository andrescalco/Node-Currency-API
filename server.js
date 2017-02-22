// variáveis
var express = require('express'),
	app = express(),
	apiRoutes = express.Router(),
	port = app.listen(process.env.PORT || 3000),
	config = require('./config/config')(app),
	router = require('./routes/router')(apiRoutes);
	routes = require('./routes/routes')(app),
	ctrlRequest = require('./controllers/request');

// rotas da api
app.use('/api',apiRoutes);

// 404
app.use(ctrlRequest.badRequest);

// inicia a aplicação
app.listen(process.env.PORT || 8080);