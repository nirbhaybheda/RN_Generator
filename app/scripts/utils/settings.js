/** Copyright (c) 2016-17 MapleLabs Inc **/
'use strict';

/**
 * @ngdoc overview
 * @name rnGeneratorApp Settings.js
 * @description
 * # rnGeneratorApp
 * Store all constant variables here for the rnGeneratorApp. All data urls will be stored in the constants file.
 */

angular.module("rnGeneratorApp")
    .constant('CONSTANTS', {
        //API URL
        "API": {
            "BASE_URL": "http://"+ window.location.host,
            // "BASE_URL": "http://127.0.0.1:8000",
            "MODIFY": {
                "url": "/api/modify",
                "method": "POST"
            },
            "GET_FILE": {
                "url": "/api/modify",
                "method": "GET"
            }
        }
    });