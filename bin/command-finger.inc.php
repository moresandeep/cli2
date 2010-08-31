<?php global $current_user;

/*

finger
@@
Usage: $0 [name]
Synonyms: none
Switches: none
Get info about the currently logged in user.
author: moresandeep@gmail.com 
@@
*/

	  get_currentuserinfo();
	  
	  if ( ('' == $current_user) || ($current_user->ID == 0) ) {
		e('User not logged in');
	  } else {	  
			if ( !('' == $current_user->user_login) ) {
				e( 'Username: '.$current_user->user_login."<br/>");
				}
			if ( !('' == $current_user->user_email) ) {
				e( 'User email: '.$current_user->user_email."<br/>");
			}
			if ( !( ('' == $current_user->user_level) || ($current_user->user_level == 0) ) ) {
				e( 'User level: '.$current_user->user_level."<br/>");
			}
			if ( !(('' == $current_user->user_firstname) || ($current_user->user_firstname == 0) ) ) {
				e( 'User first name:'.$current_user->user_firstname."<br/>");
			}
			if ( !(('' == $current_user->user_lastname) || ($current_user->user_lastname == 0)) ) {
				e( 'User last name: '.$current_user->user_lastname."<br/>");
			}
			if ( !(('' == $current_user->display_name) || ($current_user->display_name == 0) ) ) {
				e( 'User display name: '.$current_user->display_name."<br/>");
			}
			if ( !(('' == $current_user->ID) || ($current_user->ID == 0) )) {
				e( 'User ID: '.$current_user->ID ."<br/>");
			}
		}
?>