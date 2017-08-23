angular.module('tutorialApp')
    .controller('Pagina1Ctrl', function ($http) {
        var ctrl = this;

        $http({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/users'
        }).then(function successCallback(response) {
            console.log('success');
            console.log(response.data);
            console.log(ctrl);
            ctrl.users = response.data;

        }, function errorCallback(response) {
            console.log('oops.');
            console.log(response);
        });
    });