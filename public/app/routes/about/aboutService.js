angular.module('topSecret')
.service('aboutService', function($http){
  this.clientsServed = [
    {'imageUrl':'http://www.wearetopsecret.com/images/about/logos/Ubisoft.png'},
    {'imageUrl':'http://www.wearetopsecret.com/images/about/logos/Oregon.png'},
    {'imageUrl':'http://www.wearetopsecret.com/images/about/logos/Rossi.png'},
    {'imageUrl':'http://www.wearetopsecret.com/images/about/logos/Peligroso.png'},
    {'imageUrl':'http://www.wearetopsecret.com/images/about/logos/Nike.png'},
    {'imageUrl':'http://www.wearetopsecret.com/images/about/logos/Redbull.png'},
    {'imageUrl':'http://www.wearetopsecret.com/images/about/logos/Skullcandy.png'},
    {'imageUrl':'http://www.wearetopsecret.com/images/about/logos/Oakley.png'},
    {'imageUrl':'http://www.wearetopsecret.com/images/about/logos/skiutah.png'},
    {'imageUrl':'http://www.wearetopsecret.com/images/about/logos/jdawgs.png'},
    {'imageUrl':'http://www.wearetopsecret.com/images/about/logos/publik.png'},
    {'imageUrl':'http://www.wearetopsecret.com/images/about/logos/PowderMountain.png'}
  ]
})
