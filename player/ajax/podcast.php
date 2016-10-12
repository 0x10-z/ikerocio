<?php
$SELECTOPTION = $_GET['podcast-type'];
switch($SELECTOPTION){
	case "elexorcista":
		//TO DO EXORCISTA
		elExorcistaPodcast();
		break;
	case "cuartooscuro":
		//TO DO EXORCISTA
		break;

}

function elExorcistaPodcast(){
	$YEAR = ["", "enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre","octubre","noviembre","diciembre"];
	$PODCAST_URLS = [];

	$date = getdate();
	$todayDay = $date['mday'];
	$todayMonth = $date['mon'];
	$todayYear = $date['year'];
	$firstDay = 1;
	$firstMonth = 2;
	$firstYear = 2016;

	$url = "http://audios.elexorcista.es/Exorcista2016/Exorcista%20";
	if($firstYear<=$todayYear){
		if($firstMonth<=$todayMonth){
			if($firstDay<=$todayDay){
				while($firstDay<=$todayDay){
					$url_constructor = $url.$firstDay."%20".$YEAR[$firstMonth].".mp3";
					$file_headers = @get_headers($url_constructor);
					if($file_headers[0] == 'HTTP/1.1 200 OK'){
						$PODCAST_URLS[] = $url_constructor;
					}else{
					}
					$firstDay++;
				}
			}
		}
	}
	/*
	$file = 'http://www.domain.com/somefile.jpg';
	$file_headers = @get_headers($file);
	if($file_headers[0] == 'HTTP/1.1 404 Not Found') {
	    $exists = false;
	}
	else {
	    $exists = true;
	}
	*/

	header('Content-Type: application/json');
	echo json_encode($PODCAST_URLS);
}


?>