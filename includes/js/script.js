/*

This is a javascript file for omninotesweb
============

Author:  Suraj patil
Updated: January 2015

*/

$(document).ready(function(){

   $('.close').click(function(){
     var note = $(this).parent().parent().parent();
     note.fadeOut('slow');
     note.remove();

   });
});
