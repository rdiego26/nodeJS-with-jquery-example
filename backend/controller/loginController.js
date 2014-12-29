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
        result.status = constants.http.ok;
        result.data = {user:_login, name:'Administrator'};
    } else {
        result.status = constants.http.noContent;
        result.data = 'Invalid login';
    }

    res.end(JSON.stringify(result));

};