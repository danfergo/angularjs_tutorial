angular.module('tutorialApp')
    .config(function ($routeProvider) {
        $routeProvider
            .when("/pagina2", {
                templateUrl: "app/pagina2/pagina2.html",
                controller: "Pagina2Ctrl as pagina2Ctrl"
            });
    });

