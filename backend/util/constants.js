/**
 * Created by ramos on 29/12/14.
 */
'use strict';
var constants = {

    app: {
        port: '5420',
        name: 'Backend module'
    },

    header: {
        json: 'application/json; charset=utf-8;'
    },

    /*
     *  @see: http://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html
     */
    http: {
        ok:         {cod:200, msg:'OK'},
        noContent:  {cod:204, msg:'No Content'},
        notFound:   {cod:404, msg:'Not Found'},
        internalError:   {cod:500, msg:'Internal Error'}
    }

};

Object.seal(constants);
module.exports = constants;