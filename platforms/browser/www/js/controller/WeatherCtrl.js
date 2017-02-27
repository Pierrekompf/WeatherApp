function WeatherCtrl($scope, $http){

    $scope.panel = 0;

    $scope.search = function(){
        var url="http://api.openweathermap.org/data/2.5/forecast/daily?q=" + $scope.city +"&mode=json&cnt=10&units=metric&APPID=29c40f0944c926eab4d44dd6827a444e";
        $scope.loader = true;
        $http.get(url).success(httpSuccess).error(function(){
            $scope.loader = false;
            alert('Impossible de récupérer les informations');
        });
    }

    $scope.expand = function (e) {
        $elem = $(e.currentTarget);
        $elem.addClass('row_active').siblings().removeClass('row_active');
    }

    $scope.geolocate = function () {
        
    }

    httpSuccess = function(response){
        $scope.loader = false;
        $scope.panel = 1;
        $scope.weather = response;
    }

    $scope.city = 'Montpellier';
    $scope.Math = Math;
}