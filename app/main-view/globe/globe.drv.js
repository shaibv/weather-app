(function () {

        var compName = 'globe',
            templateUrl = 'main-view/globe/globe.html';

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
            console.log('Globe IS UP');
        }

    })();
