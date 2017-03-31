angular.module("topSecret")
.controller("homeController", function($scope, $stateParams, $window, $timeout) {

    let homeCasePara = document.getElementById('parallax-holder-thingy');
    let homeWorkPara = document.getElementById('work');
    let homeCapPara = document.getElementById('capabilities');
    let homeConPara = document.getElementById('connect');

   $window.onscroll = function(){

       let paraAmount = window.pageYOffset;

       let paraStartCase = paraAmount * 0.20 - 200;

       homeCasePara.style.top = paraStartCase + 'px';

       let paraStartWork = paraAmount - 1550 - 133;

       homeWorkPara.style.top = paraStartWork + 'px';
       homeCapPara.style.top = paraStartWork + 'px';
       homeConPara.style.top = paraStartWork + 'px';


   };

   $window.onclick = function(){
     let para = window.pageYOffset;
     console.log(para);
   };

    //you HAVE to have the fluid initializer in a timeout,
    //otherwise the gold-outline directive doesn't work
    $timeout(
        function fluidInit(){
        $window.FluidEffect.init();
        $window.FluidEffect.start();
    }, 0);

    //video controls
    let video = document.getElementById('video');

    let playButton = document.getElementById('play-pause');
    let mute = document.getElementById('mute');
    let fullScreen = document.getElementById('full-screen');

    let seekBar = document.getElementById('seek-bar');
    let volumeBar = document.getElementById('volume-bar');

    playButton.addEventListener('click', function(){
       if(video.paused == true){
           video.play();

           playButton.innerHTML = 'Pause'
       } else{
           video.pause();
           playButton.innerHTML = 'Play'
       }

    });

    mute.addEventListener('click', function(){
        if(video.muted == false){
            video.muted = true;
            mute.innerHTML = 'Unmute'
        } else {
            video.muted = false;

            mute.innerHTML = 'Mute'
        }
    });

    fullScreen.addEventListener('click', function(){
       if(video.requestFullScreen){
           video.requestFullScreen();
       }  else if (video.mozRequestFullScreen){
           video.mozRequestFullScreen();
       } else if (video.webkitRequestFullScreen){
           video.webkitRequestFullScreen();
       }
    });

    seekBar.addEventListener('change', function(){
        let time = video.duration * (seekBar.value / 100)
        video.currentTime = time;
    });

    video.addEventListener('timeupdate', function(){
       let value = (100 / video.duration) * video.currentTime;
       seekBar.value = value;
    });

    seekBar.addEventListener('mousedown', function(){
        video.pause();
    });
    seekBar.addEventListener('mouseup', function(){
       video.play();
        playButton.innerHTML = 'Pause'
    });

    volumeBar.addEventListener('change', function () {
        video.volume = volumeBar.value;
    });

    $scope.showVid = function(){
        document.getElementsByClassName('main-reel-vid')[0].style.display = 'inline';
    };
    $scope.hideVid = function(){
        document.getElementsByClassName('main-reel-vid')[0].style.display = 'none';
        video.load();
        seekBar.value = 0;
        playButton.innerHTML = 'Play'
    };


});
