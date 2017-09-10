angular.module('util').filter('minusculas', function () {
    return function (input, arg1) {
        if (input instanceof Array) {
            return input.map(function (element) {
                element[arg1] = element[arg1].toLowerCase();
                return element;
            });
        } else if (typeof input === 'string') {
            return input.toLowerCase();
        }
        return input;
    };
});
