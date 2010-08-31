<?php
/*
author: moresandeep
ifconfig
@@
Usage: $0 
Synonyms: none
Switches: 
echo's user's ip address.
@@
*/

e('<p> Client IP: ');
if ( isset($_SERVER["REMOTE_ADDR"]) )    {
    e('' . $_SERVER["REMOTE_ADDR"] . '<p>');
} else if ( isset($_SERVER["HTTP_X_FORWARDED_FOR"]) )    {
    e('' . $_SERVER["HTTP_X_FORWARDED_FOR"] . '<p>');
} else if ( isset($_SERVER["HTTP_CLIENT_IP"]) )    {
    e('' . $_SERVER["HTTP_CLIENT_IP"] . '<p>');
}

?>