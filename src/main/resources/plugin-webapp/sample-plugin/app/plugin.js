'use strict';
define([
    'angular'
], function (angular) {
    var customModule = angular.module('tasklist.plugin.sample-plugin', []);
    customModule.controller('camHeaderViewsCtrl', ['$window', '$scope', function ($window, $scope) {
        // isLoggedIn: flag set to true initially, since user is logged in
        var isLoggedIn = true;
        // register listener to 'authentication.changed' event
        var listener = $scope.$root.$on('authentication.changed', function (ev, auth) {
            if (!auth && isLoggedIn) {
                // Logged out --> TODO: handle with custom actions
                console.log('logout');
                alert('logout');
                isLoggedIn = false;
            }
        });
        // remove listener to 'authentication.changed' event
        $scope.$on('$destroy', function () {
            listener();
        });
    }]);
    return customModule;
});
