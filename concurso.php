<?php
require_once('db/DBManager.php');
function getUserIP()
{
    $client  = @$_SERVER['HTTP_CLIENT_IP'];
    $forward = @$_SERVER['HTTP_X_FORWARDED_FOR'];
    $remote  = $_SERVER['REMOTE_ADDR'];

    if(filter_var($client, FILTER_VALIDATE_IP))
    {
        $ip = $client;
    }
    elseif(filter_var($forward, FILTER_VALIDATE_IP))
    {
        $ip = $forward;
    }
    else
    {
        $ip = $remote;
    }

    return $ip;
}


$user_ip = getUserIP();

$timestamp = date("F j, Y, g:i a");
//echo $timestamp;
//echo "<br>";
//echo $user_ip; // Output IP address [Ex: 177.87.193.134]
DBManager::getInstance()->addIP($user_ip, $timestamp);

?>
<html xmlns="http://www.w3.org/1999/xhtml"
      xmlns:fb="http://ogp.me/ns/fb#">
<head>
    <meta property="og:image" content="concurso.jpg" />
</head>
<body>

<img style='margin: auto;display: block;' src='ca.jpg'>
<img style='margin: auto;display: block;' id='pic' src='negro.png'>
</body>
</html>