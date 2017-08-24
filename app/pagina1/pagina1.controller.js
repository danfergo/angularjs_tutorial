angular.module('tutorialApp')
    .controller('Pagina1Ctrl', function (User, $filter) {

        var ctrl = this;
        ctrl.users = [];


        User.getUsers()
            .then(function (users) {
                ctrl.users = users;
                console.log($filter('filter')(users, 'ter'));
            }, function (error) {

            });

    });