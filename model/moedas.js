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

let ars = new Moeda();

ars.setMoeda('ARS');
ars.setNome('Peso Argentino');
ars.setFonte('Melhor Cambio - https://www.melhorcambio.com');
ars.setContent();

moedas['ARS'] = ars.getContent();

let clp = new Moeda();

clp.setMoeda('CLP');
clp.setNome('Peso Chileno');
clp.setFonte('Melhor Cambio - https://www.melhorcambio.com');
clp.setContent();

moedas['CLP'] = clp.getContent();

let chf = new Moeda();

chf.setMoeda('CHF');
chf.setNome('Franco Suíço');
chf.setFonte('Melhor Cambio - https://www.melhorcambio.com');
chf.setContent();

moedas['CHF'] = chf.getContent();

let jpy = new Moeda();

jpy.setMoeda('JPY');
jpy.setNome('Franco Suíço');
jpy.setFonte('Melhor Cambio - https://www.melhorcambio.com');
jpy.setContent();

moedas['JPY'] = jpy.getContent();

module.exports = moedas;