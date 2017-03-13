angular.module('myApp').service('mainService', function($http, $q){
    this.data = [
      {
        id: 1,
        name: 'EIFFEL TOWER [I GUESS]',
        loc : {lat: 48.8583736, lng: 2.2922926},
        image:'../styles/images/img-for-blade-1.png',
        desc: 'EIFFEL TOWER!, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        id: 2,
        loc : {lat: 48.8737952, lng: 2.2928388},
        name: 'EXTREMELY BUSY CIRCLE',
        image:'../styles/images/img-for-blade-0.png',
        desc: 'ARC, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      },
      {
        id: 3,
        loc : {lat: 48.8576873, lng: 2.3402372},
        name: "MAJESTIC WATER CARRIAGE",
        image:'../styles/images/img-for-blade-2.png',
        desc: 'SACRE COUR, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
      }
    ]
  })
