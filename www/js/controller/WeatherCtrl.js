function WeatherCtrl($scope, $http, GeolocationService){

    $scope.panel = 0;

    $scope.search = function(){
        var url="http://api.openweathermap.org/data/2.5/forecast/daily?q=" + $scope.city +"&mode=json&cnt=10&units=metric&APPID=29c40f0944c926eab4d44dd6827a444e";
        $scope.loader = true;
        $http.get(url).success(httpSuccess).error(httpError);
    }

    $scope.expand = function (e) {
        $elem = $(e.currentTarget);
        $elem.addClass('row_active').siblings().removeClass('row_active');
    }

    $scope.geolocate = function () {
        GeolocationService.getCurrentPosition(function (position) {
            $scope.loader = true;
            $http.get('http://api.openweathermap.org/data/2.5/forecast/daily?lat='+ position.coords.latitude +'&lon='+ position.coords.longitude +'&mode=json&cnt=10&units=metric&APPID=29c40f0944c926eab4d44dd6827a444e')
                .success(httpSuccess).error(httpError);
        }, function () {
            alert('Impossible de récupérer votre position');
        })
    }

    $scope.geolocatePrecise = function () {
        GeolocationService.getCurrentPosition(function (position) {
            $scope.loader = true;
            $http.get('http://api.openweathermap.org/data/2.5/weather?lat='+ position.coords.latitude +'&lon='+ position.coords.longitude +'&mode=json&cnt=10&units=metric&APPID=29c40f0944c926eab4d44dd6827a444e')
                .success(httpSuccess).error(httpError);
        }, function () {
            alert('Impossible de récupérer votre position');
        })
    }

    httpError = function(){
        $scope.loader = false;
        alert('Impossible de récupérer les informations');
    }

    httpSuccess = function(response){
        $scope.loader = false;
        $scope.panel = 1;
        $scope.weather = response;
    }

    $scope.Math = Math;

    $scope.init = function () {
        $scope.geolocatePrecise();
    }
}