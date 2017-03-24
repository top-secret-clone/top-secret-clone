angular.module('topSecret')
.directive('menuDir', function() {
  return {
    restrict: 'E',
    templateUrl: './app/directives/nav_menu.html',
    link: function(scope, elem, attrs) {
      scope.menuDisplay = false;
      const
        overlayActive = { 'background-color': 'rgba(0,0,0,0.9)' },
        overlayInactive = { 'background-color': 'rgba(0,0,0,0)' },
        contentActive = { top: '10%' },
        contentInactive = { top: '110%' };
      const
        box = document.getElementById('box'),
        crossout = document.getElementById('crossout'),
        hamburgerMenu = document.getElementById('hamburger'),
        boxCross = document.getElementById('box_tight');

      scope.navMenu = function() { /* toggle menu display */
        scope.menuDisplay = !scope.menuDisplay;

        if (scope.menuDisplay === true) {
          console.log('Display on-->', crossout);
          scope.css = overlayActive;
          scope.cssContent = contentActive;
          $(boxCross).addClass('navDisplayOn'); /* addClass is not working */
          $(crossout).addClass('navDisplayOn');
        }
        else {
          console.log('<--Display off',boxCross);
          scope.css = overlayInactive;
          scope.cssContent = contentInactive;
          $(boxCross).removeClass('navDisplayOn');
          $(crossout).removeClass('navDisplayOn');
        }
        // scope.menuDisplay ? scope.css = overlayActive :
        //   scope.css = overlayInactive;
        // scope.menuDisplay ? scope.cssContent = contentActive :
        //   scope.cssContent = contentInactive;
      } /* end of navMenu toggle function */

    }, /* end of LINK function */

    controller: function($scope,$interval) {
      var audioOn = true;
      var audioTrack = new Audio('./assets/homepage_track.mp3');
      audioTrack.loop = true;
      audioTrack.play();

      $scope.audioToggle = function() {
        audioOn = !audioOn;
        audioOn ? audioTrack.play() : audioTrack.pause();
      }

      $interval(function() {
        var bar1 = Math.random() * 10 + 4;
        var bar2 = Math.random() * 10 + 4;
        var bar3 = Math.random() * 10 + 4;
        if (audioOn) {
          $scope.animateBar1 = {height: `${bar1}px`};
          $scope.animateBar2 = {height: `${bar2}px`};
          $scope.animateBar3 = {height: `${bar3}px`};
        }
        else {
          $scope.animateBar1 = {height: `2px`};
          $scope.animateBar2 = {height: `2px`};
          $scope.animateBar3 = {height: `2px`};
        }
      },150);

      $scope.turnGold = function() {
        barColor = true;
        var bar3color = document.querySelectorAll('.musik-kontroller-bar');
        bar3color.forEach( bar => {
          $(bar).addClass('gold-bars');
          $(bar).removeClass('silver-bars');
        });
      }
      $scope.turnSilver = function() {
        barColor = false;
        var bar3color = Array.from(document.querySelectorAll('.musik-kontroller-bar'));
        bar3color.forEach( bar => {
          $(bar).addClass('silver-bars');
          $(bar).removeClass('gold-bars');
        });
      }
      $scope.menuDisplay ? $(crossout).addClass('navDisplayOn') : $(crossout).removeClass('navDisplayOn'); /* add/removeClass not working */
      $scope.menuItems = [
        {
          index: 1,
          name: 'HOME',
          route: '/'
        },
        {
          index: 2,
          name: 'CASE STUDIES',
          route: 'caseStudies'
        },
        {
          index: 3,
          name: 'WORK',
          route: 'work'
        },
        {
          index: 4,
          name: 'ABOUT',
          route: 'about'
        },
        {
          index: 5,
          name: 'CAPABILITIES',
          route: 'capabilities'
        },
        {
          index: 6,
          name: 'CONNECT',
          route: 'connect'
        }
      ]
    }
  }
})
