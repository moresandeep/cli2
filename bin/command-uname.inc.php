<?php
/*
author: moresandeep
uname
@@
Usage: $0 
Synonyms: none
Switches: 
echo's username.
@@
*/
if($switches['n'] || $switches['a']){
	e(strtolower(str_replace(' ','-',get_bloginfo('name'))).' ');
}
e('WordPress ');
if($switches['v'] || $switches['a']){
	e($wp_version);
}
?>