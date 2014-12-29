/**
 * Created by ramos on 29/12/14.
 */
'use strict';

var result = require('../util/result'),
    constants = require('../util/constants');

exports.login = function(req, res) {

    //Reset data
    result.data = [];

    //Obtain values from req
    var _login = req.body.login || '';
    var _senha =   req.body.senha || '';

    if(_login == 'admin' && '_senha' == 'admin') {
        result.data = 'Valid login';
    } else {
        result.data = 'Invalid login';
    }

    result.status = constants.http.ok;

    res.end(JSON.stringify(result));

};