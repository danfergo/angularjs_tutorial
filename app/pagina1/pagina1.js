angular.module('tutorialApp')
    .config(function ($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "app/pagina1/pagina1.html",
                controller: "Pagina1Ctrl as pagina1Ctrl"
            })
    });

