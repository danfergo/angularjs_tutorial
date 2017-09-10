angular
    .module('components')
    .controller('navBarCtrl', function () {

    })
    .directive('navBar', function () {
        return {
            templateUrl: 'shared/components/navbar/navbar.html',
            controller: 'navBarCtrl',
            transclude: true,
            link: function (scope, element, attrs) {
                // element.append('XPTO');
            }
        }
    })
    .directive('navBarItem', function () {
        return {
            template: '<li class="nav-item active"><a class="nav-link" href="{{goto}}" ng-transclude></a></li>',
            transclude: true,
            link: function (scope, element, attrs) {
                // scope.goto = attrs.goto;
                // if(!scope.goto){
                //     scope.goto = ''
                // }
                // // console.log(attrs.goto);
            },
            scope: {
                goto: '='
            }
        }
    })
    .directive('youAreStupid', function () {
        return {
            link: function (scope, element, attrs) {
                element.append('YOU ARE STUPID');
                element.on('click', function () {
                    alert('LOL');
                })
            }
        }
    })
    .directive('angularBootstrapDropdown', function () {
        return {
            templateUrl: 'shared/components/navbar/dropdown.html',
            // controllerAs: 'dropdownCtrl',
            // bindToController: true,
            controller: function ($scope) {
                // console.log($scope);
                // console.log($scope.userz);
                // $scope.$watch(function () {
                //     return $scope.userz;
                // }, function (xxx) {
                //     console.log(xxx);
                // });
            },
            scope: {
                userz: '=usuarios'
            },
            link: function (scope, element) {
                // element.dropdown();
                // // console.log(element.find('button')[0]);
                // // $('.dropdown-toggle').dropdown()
                // // element.find('button')[0].dropdown();
                //
                // element.on('show.bs.dropdown', function () {
                //     alert('LOL');
                //     console.log(element);
                // })
            }
        }
    });