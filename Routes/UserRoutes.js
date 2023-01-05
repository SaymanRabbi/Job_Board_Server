const express = require('express');
const route = express.Router();
const { AllUser } = require('../Controllers/UserControler');

route.get('/',AllUser)

module.exports = route;