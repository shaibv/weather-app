(function () {

        var compName = 'globe',
            templateUrl = 'view1/globe/globe.html';

        angular.module('myApp')
            .directive(compName, drv);

        function drv() {
            return {
                restrict: 'E',
                link: link,
                templateUrl: templateUrl

            }
        }

        function link() {
            console.log('Globbbe');
        }

    })();
