(function () {


    angular
        .module('myApp')
        .service('view1/weather.srv', service);

    service.$inject = [

        '$http'

    ];

    function service($http) {

        var srv = this;
        var API_KEY = '934c83745b19be6ac04b1b249254954b';
        var cache;
        srv.getAllCities = getAllCities;
        srv.findBestCity = findBestCity;


        function getAllCities() {
            if (!cache) {
                cache = $http.get('http://api.openweathermap.org/data/2.5/box/city?bbox=0,-180,90,180,10&appid=' + API_KEY).then(
                    function success(response) {
                        console.log('got ' + response.data.cnt + ' cities!');
                        return response.data.list;
                    }
                )
            }
            return cache;


        }


        function findBestCity(idileTemp, idileHumidity) {
            idileTemp = idileTemp || 21;
            idileHumidity = idileHumidity || 50;

            return getAllCities().then(success, failure);

            function success(data) {
                var closeCity;
                var minTempDif = 999;
                data.map(function (city) {
                    var cityTempDif = Math.abs(city.main.temp - idileTemp) + Math.abs(city.main.humidity - idileHumidity);
                    if (cityTempDif < minTempDif) {
                        minTempDif = cityTempDif;
                        closeCity = city;

                    }
                });
                return closeCity;
            }

            function failure(err) {
                return {name: "Failed to find a city: " + err.message};
            }
        }

    }
})();

//