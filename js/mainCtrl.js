angular.module('myApp').controller('mainCtrl', function($scope, mainService) {
  // get the location data from the service
    $scope.locationData = mainService.data;
    const data = $scope.locationData;

  // create GMaps instance
    $scope.initMap = () => {
      // City of paris
      const paris = {lat: 48.8670558, lng: 2.3182354};
      const mapOptions = {
        zoom: 14,
        center: paris,
        mapTypeId: 'satellite'
      }

      // create the map here
      $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

      // placeholder for markers we want on page
      $scope.markers = [];

      // Marker constructor
      const createMarker = (info) => {
        const marker = new google.maps.Marker({
          map: $scope.map,
          position: new google.maps.LatLng(info.loc.lat, info.loc.lng),
          icon: 'styles/images/pin.png'
        })
        google.maps.event.addListener(marker, 'click', (e) => {
          $('.marker-info').animate({left: '10px'}, 1000);
          $('.img-placeholder').append('<img class="loc-image" style="padding: 0 5px; width:90%; "src="' + info.image + '">');
          $('.name-placeholder').append('<h1 class="loc-name" style="letter-spacing: 4px;">' + info.name + '</h1>');
          $('.desc-placeholder').append('<p class="loc-desc">' + info.desc + '</p>');
        });

        google.maps.event.addListener(marker, 'mouseover', () => {
          marker.setIcon('styles/images/pin-hover.png');
        });
        google.maps.event.addListener(marker, 'mouseout', () => {
          marker.setIcon('styles/images/pin.png');
        });

        $scope.markers.push(marker);
      }

      // create marker for each location in the service
      data.forEach((val)=> {
        createMarker(val);
      })

      $(document).ready(() => {
        $('.close-section').on('click', () => {
          $('.marker-info').animate({left: '-460px'}, 1000);
          setTimeout("$('.loc-name').remove()", 1000);
          setTimeout("$('.loc-image').remove()", 1000);
          setTimeout("$('.loc-desc').remove()", 1000);
        })
      })
    }
      $scope.initMap();
});
