angular.module('myApp').controller('mainCtrl', function($scope, mainService) {
    $scope.locationData = mainService.data;

    $scope.initMap = function(){
        // locations
        var paris = {lat: 48.8670558, lng: 2.3182354};
        var loc1 = {lat: 48.8583736, lng: 2.2922926};
        var loc2 = {lat: 48.8737952, lng: 2.2928388};
        var loc3 = {lat: 48.8576873, lng: 2.3402372};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: paris,
          mapTypeId: 'satellite'
        });
        var marker1 = new google.maps.Marker({
          position: loc1,
          icon: 'styles/images/pin.png',
          map: map,
          id: 1
        });
        var marker2 = new google.maps.Marker({
          position: loc2,
          icon: 'styles/images/pin.png',
          map: map,
          id: 2
        });
        var marker3 = new google.maps.Marker({
          position: loc3,
          icon: 'styles/images/pin.png',
          map: map,
          id: 3
        });

        $scope.alertMe = function (location) {
          alert('hello location' + location.id);
        };

        google.maps.Marker.prototype.addListener('click', function(e) {

          $('.marker-info').animate({left: '10px'}, 1000);

        });
        var close = document.getElementsByClassName('close-section')[0];
        close.addEventListener('click', function(){
          $('.marker-info').animate({left: '-460px'}, 1000);
        })
      }
      $scope.initMap();
});
