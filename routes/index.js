const router = require('express').Router();
const apiRoutes = require('./api');

module.exports = function() {

    router.use('/api', apiRoutes());

    return router
}