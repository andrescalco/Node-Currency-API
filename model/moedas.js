"use strict"

let Moeda = require('./moeda');
let moedas = {};

let cad = new Moeda();

cad.setMoeda('CAD');
cad.setNome('Dólar Canadense');
cad.setFonte('Melhor Cambio - https://www.melhorcambio.com');
cad.setContent();

moedas['CAD'] = cad.getContent();

let usd = new Moeda();

usd.setMoeda('USD');
usd.setNome('Dólar Americano');
usd.setFonte('Melhor Cambio - https://www.melhorcambio.com');
usd.setContent();

moedas['USD'] = usd.getContent();

let eur = new Moeda();

eur.setMoeda('EUR');
eur.setNome('Euro');
eur.setFonte('Melhor Cambio - https://www.melhorcambio.com');
eur.setContent();

moedas['EUR'] = eur.getContent();

let gbp = new Moeda();

gbp.setMoeda('GBP');
gbp.setNome('Libra Esterlina');
gbp.setFonte('Melhor Cambio - https://www.melhorcambio.com');
gbp.setContent();

moedas['GBP'] = gbp.getContent();

let aud = new Moeda();

aud.setMoeda('AUD');
aud.setNome('Dólar Australiano');
aud.setFonte('Melhor Cambio - https://www.melhorcambio.com');
aud.setContent();

moedas['AUD'] = aud.getContent();

module.exports = moedas;