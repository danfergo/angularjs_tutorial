angular
    .module('model')
    .service('User', function ($http) {
        var users = [];
        var service = this;

        this.getUsers = function () {
            return $http({
                method: 'GET',
                url: 'https://jsonplaceholder.typicode.com/users'
            }).then(function (response) {
                service.users = response.data;
                return service.users;
            });
        }

    });