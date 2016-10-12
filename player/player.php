<?php
session_start();
$key = isset($_SESSION["code"])?$_SESSION["code"]:"";
$key2 = isset($_POST["code"])?$_POST["code"]:"";
if($key=="cosimasmola" || $key2=="cosimasmola" || $key2 =="Cosimasmola" || $key2 == "Cosimasmola " || $key2 == "cosimasmola "){
  $_SESSION["code"] = "cosimasmola";
  ?>
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <meta name="description" content="">
    <meta name="author" content="">

    <title>.</title>
    <link rel="apple-touch-icon" href="Exorcista.png">
    <!-- Bootstrap core CSS -->
    <link href="css/bootstrap.css" rel="stylesheet">
    <!-- custom style -->
    <link href="css/style.css" rel="stylesheet">
  

  </head>
<!-- NAVBAR
================================================== -->
  <body>
    <nav class="navbar navbar-fixed-top navbar-inverse">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <div id="left-wrapper">
          <a class="navbar-brand" href="#">Title:</a>
          <a class="navbar-brand"id="player-title">LIVE</a>
          </div>
          <div id="right-wrapper">
          <a class="navbar-brand btn navbar-custom-btn" id="minus-vol"><span class="glyphicon glyphicon-minus" aria-hidden="true"></span></a>
          <a class="navbar-brand btn navbar-custom-btn" id="player-toggle"><span class="glyphicon gly-player glyphicon-stop" aria-hidden="true"></span></a>
          <a class="navbar-brand btn navbar-custom-btn" id="plus-vol"><span class="glyphicon glyphicon-plus" aria-hidden="true"></span></a>
          </div>
        </div>
        
      </div><!-- /.container -->
    </nav><!-- /.navbar -->
    <!-- Marketing messaging and featurettes
    ================================================== -->
    <!-- Wrap the rest of the page in another container to center all the content. -->

    <div class="container marketing">

      <!-- Three columns of text below the carousel -->
      <div class="row">
        <div class="col-lg-4">
          <a href=""><img class="img-circle btn-player" data-title="LIVE" id="btn-live" src="Exorcista.png" alt="Generic placeholder image" width="140" height="140">
          </a><h2>LIVE</h2>
        </div><!-- /.col-lg-4 -->
        <div class="col-lg-4">
          <a href=""><img class="img-circle btn-player" data-title="El Cuarto Oscuro" id="btn-cuarto-oscuro" src="ECO.png" alt="Generic placeholder image" width="140" height="140">
          </a><h2>EL CUARTO OSCURO</h2>
        </div><!-- /.col-lg-4 -->
        <div class="col-lg-4">
          <a href=""><img class="img-circle btn-player" data-title="Hip Hop Americano Actual" id="btn-hh-americano-actual" src="hphpENGActual.png" alt="Generic placeholder image" width="140" height="140">
          </a><h2>HIP HOP AMERICANO ACTUAL</h2>
        </div><!-- /.col-lg-4 -->
      </div><!-- /.row -->
      <div class="row">
        <div class="col-lg-4">
          <a href=""><img class="img-circle btn-player" data-title="Hip Hop Americano Clasico" id="btn-hh-americano-clasico" src="hphpENGClasico.png" alt="Generic placeholder image" width="140" height="140">
          </a><h2>HIP HOP AMERICANO CLASICO</h2>
        </div><!-- /.col-lg-4 -->
        <div class="col-lg-4">
          <a href=""><img class="img-circle" src="hphpSPAActual.png" alt="Generic placeholder image" width="140" height="140">
          </a><h2>HIP HOP ESPAÑOL ACTUAL</h2>
        </div><!-- /.col-lg-4 -->
        <div class="col-lg-4">
          <a href=""><img class="img-circle btn-player" data-title="Hip Hop Español Clasico" id="btn-hh-espanol-clasico" src="hphpSPAClasico.png" alt="Generic placeholder image" width="140" height="140">
          </a><h2>HIP HOP ESPAÑOL CLASICO</h2>
        </div><!-- /.col-lg-4 -->

      </div><!-- /.row -->
      <div class="row">
        <div class="col-lg-4">
          <a href=""><img class="img-circle btn-player" data-title="Pop Actual" id="btn-pop-actual" src="PopActual.png" alt="Generic placeholder image" width="140" height="140">
          </a><h2>POP ACTUAL</h2>
        </div><!-- /.col-lg-4 -->
        <div class="col-lg-4">
          <a href=""><img class="img-circle btn-player" data-title="R&B Actual" id="btn-rb-actual" src="RyBActual.png" alt="Generic placeholder image" width="140" height="140">
          </a><h2>R&B ACTUAL</h2>
        </div><!-- /.col-lg-4 -->
        <div class="col-lg-4">
          <a href=""><img class="img-circle btn-player" data-title="R&B Clasico" id="btn-rb-clasico" src="RyBClasico.png" alt="Generic placeholder image" width="140" height="140">
          </a><h2>R&B CLASICO</h2>
        </div><!-- /.col-lg-4 -->
      </div><!-- /.row -->
      <div class="row">

        <div class="col-lg-4">
          <a href=""><img class="img-circle btn-player" data-title="Sonido Vinilo" id="btn-vinilo" src="Vinilo.png" alt="Generic placeholder image" width="140" height="140">
          </a><h2>SONIDO VINILO</h2>
        </div><!-- /.col-lg-4 -->
      </div><!-- /.row -->
      </div>
      <div class="container container-podcast">
       <h2>PODCAST</h2>
      <!-- Single button -->
    
      <ul class="list-group" id="elexorcista-podcast-list">El Exorcista
       <span class="badge" id="elexorcista-badge"></span>
      </ul>
    </div>

    


    <script src="jquery.js"></script>
    <script src="js/bootstrap.js"></script>
    <script src="js/ajax.js"></script>
    <script src="js/player.js"></script>
  </body>
</html>
<?php
}else{
  header("Location: index.php");
  die();
}
?>