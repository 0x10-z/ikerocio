$(document).ready(function(){
      var lastTitle;
      var music = document.createElement("audio");
      music.setAttribute("src", "http://ns4.streaming-live.es:5050/stream");
      music.play();
      var audio;
      $(".btn-player").on('click',function(e){
        e.preventDefault();
        switch(e.target.id){
          case "btn-live":
            play('http://ns4.streaming-live.es:5050/stream', $(this).attr('data-title'));
            break;
          case "btn-cuarto-oscuro":
            play('http://ns4.streaming-live.es:6061/stream', $(this).attr('data-title'));
            break;
          case "btn-hh-americano-actual":
            play('d', $(this).attr('data-title'));
            break;
          case "btn-hh-americano-clasico":
            play('d', $(this).attr('data-title'));
            break;
          case "btn-hh-espanol-actual":
            play('d', $(this).attr('data-title'));
            break;
          case "btn-hh-espanol-clasico":
            play('d', $(this).attr('data-title'));
            break;
          case "btn-pop-actual":
            play('d', $(this).attr('data-title'));
            break;
          case "btn-rb-actual":
            play('d', $(this).attr('data-title'));
            break;
          case "btn-rb-clasico":
            play('d', $(this).attr('data-title'));
            break;
          case "btn-vinilo":
            play('d', $(this).attr('data-title'));
            break;
        }
        //alert(e.target.id);
      });
      $('.glyphicon-minus').click(function(e){
        if(music.volume>0.1){music.volume = music.volume - 0.1;};
      });
      $('.glyphicon-plus').click(function(e){
        if(music.volume<0.9){music.volume = music.volume + 0.1;};
      });
      $('#player-toggle').click(function(e){
        toggle();
      });

      function play(url, title){
        music.setAttribute("src", url);
        music.load();
        music.play();
        $('#player-title').html(title);
          $('.gly-player').removeClass('glyphicon-play').addClass('glyphicon-stop');
        //var audio = new Audio(url);
        //audio.play();
      }

      function toggle(){
        if($('#player-title').html()!="Off"){
          $('.gly-player').removeClass('glyphicon-stop').addClass('glyphicon-play');
          lastTitle = $('#player-title').html();
          $('#player-title').html("Off");
          music.pause();
          music.currentTime=0;
        }else{
          $('.gly-player').removeClass('glyphicon-play').addClass('glyphicon-stop');
          $('#player-title').html(lastTitle);
          music.play();
        }
      }

    });