$(function(){
  $("a").each(function(){
    var href = $(this).attr('href');
    $(this).attr('href', 'http://www.cnbeta.com' + href);
  });
});