
$( document ).ready(function() {
    var path = window.location.pathname;
// Will only work if string in href matches with location
$('ul.nav a[href="'+ path +'"]').parent().addClass('active');
});


