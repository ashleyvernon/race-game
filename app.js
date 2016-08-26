
$( document ).ajaxStart(function() {
  $( ".log" ).text( "Triggered ajaxStart handler." );
});

$( ".trigger" ).click(function() {
  $( ".result" ).load( "ajax/test.html" );

});
