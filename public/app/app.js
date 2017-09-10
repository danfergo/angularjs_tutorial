'use strict'

angular
    .module('tutorialApp', [
        'model',
        'components',
        'util',
        'ngRoute'
    ])
    .config(function ($locationProvider, $routeProvider) {
        $locationProvider.html5Mode(true);

    });
