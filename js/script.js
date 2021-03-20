$(function(){
  //ブラウザ幅取得して表示
  var w = $(window).width();
  $('#s1 span').text(w);

  var fs = $('#s2 h2').css('font-size');
  $('#s2').append('<p>フォントサイズは' + fs + 'です。</p>');

  $('.up').click(function(){
    $('#s3 p:last-child').slideUp(2000);
  });
  $('.down').click(function(){
    $('#s3 p:last-child').slideDown(2000);
  });

  $('#s4 a').click(function(){
    $('#s4 p:last-child').slideToggle(2000);
    //HTML停止
    return false;
  });

  //ページトップアニメーション
  $('footer p.pagetop a').click(function(){
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
  $(window).scroll(function(){
    var sc = $(window).scrollTop();
    console.log(sc);
    if (sc > 100) {
      $('footer p.pagetop').fadeIn(300);
    } else {
      $('footer p.pagetop').fadeOut(300);
    }
  });

});




