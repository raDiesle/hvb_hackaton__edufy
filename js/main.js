   angular.element(document).ready(function() {

	  var app = angular.module('demo', [])
	  .controller('WelcomeController', function($scope) {
		  $scope.greeting = '';


          $scope.closeRightSidebar = function(){
              $('#simple-menu-right').click();
              $scope.opentheRight = false;
          }

          $scope.openedRightSidebar = function () {
              $scope.opentheRight = true;
          }

          $scope.isTravelerSummary = function () {
              $scope.travelerSummary = true;
          }

          $scope.toStartSecondWizard = function(){
              $scope.opentheRight = true;
              $('#simple-menu-right').click();
              $scope.startSecondWizard = true;
              $scope.thirdStepWizard = false;
              $scope.startFinancialWizard = false;
          }

          $scope.toStartFinancialTransportationWizard = function(){
              $scope.startFinancialWizard = true;
              $scope.startSecondWizard = false;
              $scope.thirdStepWizard = false;
          }

	  });
	  angular.bootstrap(document, ['demo', 'mgo-angular-wizard']);

   });



   // youtube


    // 2. This code loads the IFrame Player API code asynchronously.
        var tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        var firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        // 3. This function creates an <iframe> (and YouTube player)
        //    after the API code downloads.
        var player;
        function onYouTubeIframeAPIReady() {
            player = new YT.Player('player', {
            height: '390',
            width: '640',
            videoId: '0Bmhjf0rKe8',
            playerVars: { 'autoplay': 1, 'controls': 1 },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
            });
        }

        var playerReady = false;
        // 4. The API will call this function when the video player is ready.
        function onPlayerReady(event) {
            playerReady = true;
        }

        // 5. The API calls this function when the player's state changes.
        //    The function indicates that when playing a video (state=1),
        //    the player should play for six seconds and then stop.
        function onPlayerStateChange(event) {
            if (event.data == YT.PlayerState.ENDED ) {
				player.destroy();
				$("#player-nextbtn").click();
            }
        }

        $("#startVideo").on("click", function(){
            player.loadVideoById("Vw4KVoEVcr0", 0, "default");
        });

		$(document).ready(function() {
		  $('#simple-menu-right').sidr({
              side: 'right',
              name: 'sidr-right'
          });
        $('#simple-menu-left').sidr({
            side: 'left',
            name: 'sidr-left'
        });


            $.getJSON( "http://burdahackday.finanzen100.de/v1/main/overview/top_news", function( data ) {
                var items = [];
                $.each( data.ARTICLE_TEASER_LIST, function( key, val ) {
                    items.push( "<li><a href=\""+val.SOURCE_URL+"\"><p style='line-height: 17px;'>" + val.TEASER_ABSTRACT.substr(0, 50) + " ...</p></a></li>" );
                });

                $( "<ul/>", {
                    "class": "my-new-list",
                    html: items.join( "" )
                }).appendTo( "#sidr-left" );
            });

		});
