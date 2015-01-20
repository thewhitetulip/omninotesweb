/*

This is a javascript file for omninotesweb
============

Author:  Suraj patil
Updated: January 2015

*/

$(document).ready(function(){

   $('.note-close').click(function(){
     var note = $(this).parent().parent().parent();
     note.fadeOut('slow');
     note.remove();
   });

   $('.open-note').click(function(){
     var element = $(this);
     var cont=element.parent().parent().siblings().contents().toArray();
     var note_body =cont[2].data;
     console.log(note_body);
     var note_title = cont[0].data;
     console.log(note_title);


     var ONmodal = $('#openNoteModal');
     ONmodal.find('.modal-title').text(note_title);
     ONmodal.find('.modal-body').text(note_body);
     ONmodal.modal('show');
   });

   $('.hashtag').click(function(){
     alert($(this).html());
   });


});
