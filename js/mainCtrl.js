angular.module('myApp').controller('mainCtrl', function($scope, mainService) {
    $scope.locationData = mainService.data;
    const data = $scope.locationData;


    $scope.initMap = function(){
      // locations
      const paris = {lat: 48.8670558, lng: 2.3182354};
      const mapOptions = {
        zoom: 14,
        center: paris,
        mapTypeId: 'satellite'
      }

      $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

      $scope.markers = [];

      const createMarker = (info) => {
        const marker = new google.maps.Marker({
          map: $scope.map,
          position: new google.maps.LatLng(info.loc.lat, info.loc.lng),
          icon: 'styles/images/pin.png'
        })
        google.maps.event.addListener(marker, 'click', (e) => {
          $('.marker-info').animate({left: '10px'}, 1000);
          $('.location-img').append('<p>' + info.desc + '<p>');
        });

        google.maps.event.addListener(marker, 'mouseover', () => {
          marker.setIcon('styles/images/pin-hover.png');
        });
        google.maps.event.addListener(marker, 'mouseout', () => {
          marker.setIcon('styles/images/pin.png');
        });

        $scope.markers.push(marker);
      }

      data.forEach((val)=> {
        createMarker(val);
      })

      $(document).ready(() => {
        $('.close-section').on('click', () => {
          $('.marker-info').animate({left: '-460px'}, 1000);
          $('p').remove();
        })
      })
    }
      $scope.initMap();
});
