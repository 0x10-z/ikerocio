
<?php
$date = date('d-m-Y H:i:s');
$ip = $_SERVER['REMOTE_ADDR'];

$myfile = fopen("logs.txt", "a") or die("Unable to open file!");
$txt = $date." ".$ip;
fwrite($myfile, "\n". $txt);
fclose($myfile);


header("Content-type:application/pdf");

// It will be called downloaded.pdf
header("Content-Disposition:inline;filename='Planning.pdf'");

// The PDF source is in original.pdf
readfile("Planning.pdf");

?>
