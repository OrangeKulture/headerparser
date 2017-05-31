const express = require('express');
const router = express.Router();
const app = require('../app');

router.get('/', function(req,res,next){
let language = req.acceptsLanguages();
let ipaddress = req.ip;
let os = 'OS: '+req.useragent.os+', Web Browser: '+req.useragent.browser;
res.json({'IP' : ipaddress, 'Language' : language[0], 'OS & Browser' : os});


})

module.exports = router;
