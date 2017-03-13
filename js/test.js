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
