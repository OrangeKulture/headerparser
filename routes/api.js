const express = require('express');
const router = express.Router();
const app = require('../app');
// const publicIp = require('public-ip');


router.get('/', function(req,res,next){
let language = req.acceptsLanguages();
let ipaddress = req.ip.replace(/^.*:/, '');
let os = 'OS: '+req.useragent.os+', Web Browser: '+req.useragent.browser;
res.json({'IP address' : ipaddress, 'Language' : language[0], 'OS & Browser' : os});


})

module.exports = router;
