'use strict';

angular.module('myApp', []);
'use strict';

angular.module('myApp').controller('mainCtrl', function ($scope, mainService) {
  // get the location data from the service
  $scope.locationData = mainService.data;
  var data = $scope.locationData;

  // create GMaps instance
  $scope.initMap = function () {
    // City of paris
    var paris = { lat: 48.8670558, lng: 2.3182354 };
    var mapOptions = {
      zoom: 14,
      center: paris,
      mapTypeId: 'satellite'
    };

    // create the map here
    $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // placeholder for markers we want on page
    $scope.markers = [];

    // Marker constructor
    var createMarker = function createMarker(info) {
      var marker = new google.maps.Marker({
        map: $scope.map,
        position: new google.maps.LatLng(info.loc.lat, info.loc.lng),
        icon: 'styles/images/pin.png'
      });
      google.maps.event.addListener(marker, 'click', function (e) {
        $('.marker-info').animate({ left: '10px' }, 1000);
        $('.img-placeholder').append('<img class="loc-image" style="padding: 0 5px; width:90%; "src="' + info.image + '">');
        $('.name-placeholder').append('<h1 class="loc-name" style="letter-spacing: 4px;">' + info.name + '</h1>');
        $('.desc-placeholder').append('<p class="loc-desc">' + info.desc + '</p>');
      });

      google.maps.event.addListener(marker, 'mouseover', function () {
        marker.setIcon('styles/images/pin-hover.png');
      });
      google.maps.event.addListener(marker, 'mouseout', function () {
        marker.setIcon('styles/images/pin.png');
      });

      $scope.markers.push(marker);
    };

    // create marker for each location in the service
    data.forEach(function (val) {
      createMarker(val);
    });

    $(document).ready(function () {
      $('.close-section').on('click', function () {
        $('.marker-info').animate({ left: '-460px' }, 1000);
        setTimeout("$('.loc-name').remove()", 1000);
        setTimeout("$('.loc-image').remove()", 1000);
        setTimeout("$('.loc-desc').remove()", 1000);
      });
    });
  };
  $scope.initMap();
});
'use strict';

angular.module('myApp').service('mainService', function ($http, $q) {
  this.data = [{
    id: 1,
    name: 'EIFFEL TOWER [I GUESS]',
    loc: { lat: 48.8583736, lng: 2.2922926 },
    image: '../styles/images/img-for-blade-1.png',
    desc: 'EIFFEL TOWER!, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }, {
    id: 2,
    loc: { lat: 48.8737952, lng: 2.2928388 },
    name: 'EXTREMELY BUSY CIRCLE',
    image: '../styles/images/img-for-blade-0.png',
    desc: 'ARC, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }, {
    id: 3,
    loc: { lat: 48.8576873, lng: 2.3402372 },
    name: "MAJESTIC WATER CARRIAGE",
    image: '../styles/images/img-for-blade-2.png',
    desc: 'SACRE COUR, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  }];
});
// function initMap() {
//   // locations
//   var paris = {lat: 48.8670558, lng: 2.3182354};
//   var loc1 = {lat: 48.8583736, lng: 2.2922926};
//   var loc2 = {lat: 48.8737952, lng: 2.2928388};
//   var loc3 = {lat: 48.8576873, lng: 2.3402372};
//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 14,
//     center: paris,
//     mapTypeId: 'satellite'
//   });
//   var marker1 = new google.maps.Marker({
//     position: loc1,
//     icon: 'styles/images/pin.png',
//     map: map,
//     id: 3
//   });
//   var marker2 = new google.maps.Marker({
//     position: loc2,
//     icon: 'styles/images/pin.png',
//     map: map,
//     id: 3
//   });
//   var marker3 = new google.maps.Marker({
//     position: loc3,
//     icon: 'styles/images/pin.png',
//     map: map,
//     id: 3
//   });
//
//   var alertMe = function alertMe(location) {
//     alert('hello location' + location.id);
//   };
//   // map.addListener('center_changed', function() {
//   //   // 3 seconds after the center of the map has changed, pan back to the
//   //   // marker.
//   //   window.setTimeout(function() {
//   //     map.panTo(marker.getPosition());
//   //   }, 3000);
//   // });
//
//   marker1.addListener('click', function(e) {
//     alertMe(marker1);
//     map.setCenter(e.getPosition());
//   });
//
// }
"use strict";