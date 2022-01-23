/*----------from multi.js---------*/
// Global site tag (gtag.js) - Google Analytics

document.write('<script async src="https://www.googletagmanager.com/gtag/js?id=UA-2120400-1"></script>');

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-2120400-1');
/*----------from multi.js---------*/


//UA判定
var ua = false;//ua が trueの場合スマートフォン判定
if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) || navigator.userAgent.indexOf('iPod') > 0 || (navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') > 0)) {
  ua = true;
}

var $head = $('head');

//google カスタム検索ソース
var google = '<div class="search"><form action="https://www.google.co.jp/cse" id="cse-search-box"><div><input type="hidden" name="cx" value="partner-pub-3708229260144639:95zyfm-jiii" /><input type="hidden" name="ie" value="UTF-8" /><input type="text" name="q" size="22" id="s_box" class="s_box" /><input type="image" src="common/images/search_btn.png" name="sa" value="&#x691c;&#x7d22;" /></div></form><script type="text/javascript" src="https://www.google.co.jp/coop/cse/brand?form=cse-search-box&amp;lang=ja"></script></div>';

if (!ua) {
  $head.append('<link rel="stylesheet" href="common/css/style.css" media="all" title="no title">');
  if (!(navigator.userAgent.indexOf('Android') > 0 && navigator.userAgent.indexOf('Mobile') == -1)) {
    $head.append('<meta name="viewport" content="width=device-width,initial-scale=1">');
  }
}else {
  $head.append('<link rel="stylesheet" href="common/css/style_sp.css" media="all" title="no title">');
  $head.append('<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0">');
}


jQuery(document).ready(function() {
  //ipadの時viewportを変更
  if (navigator.userAgent.indexOf('iPad') > 0) {
    $('head').append('<meta name="viewport" content="width=1024, maximum-scale=1, user-scalable=1">');
  }

  //「戦場日記」
  var url = '//www.hyperdouraku.com/php/blog_feed.php';
  $.ajax({
    type:'GET',
    url:url,
    dataType:'html',
    success:function(data){
      var html = $(data);
      html.find('li').each(function(){
        var inli = $(this).html();
        var inli_leg = inli.length;
        var end_lin = inli.indexOf('<');
        var date = inli.substring(0,end_lin);

        var ina = $(this).find('a').html();

        var href = $(this).find('a').attr('href');

        var set_li = '<li><a href ="' + href + '"><span>' + date + '</span><p>' + ina + '</p></li>';
        $('#latest_article ul').append(set_li);
      });
      if(!ua){
        news_height();
        addHeight();
        pagetopbtn();
      }
    }
  });

  //特集・コラム　照準機部分の整形
  $('#feature_column ul li').each(function(){
    var a = $(this).find('a').prop('outerHTML');
    var p = $(this).find('p').prop('outerHTML');
    $(this).find('a').addClass('getted');
    $(this).find('p').addClass('getted');
    try {
      var a_ = a.replace('</a>', p + '</a>');
      $(this).append(a_);
    } catch (e) {

    }
  });
  $('.getted').remove();

  if (!ua) {//PC版
      $('.upper_ui_inner').prepend(google);//google カスタム検索を挿入
    //ページトップスムーズスライド
    $('#page_top_btn').on('click',function(){
      var href = $(this).attr('href');
      var offset = $(href).offset().top;
      $('html, body').animate({
        scrollTop:offset
      },{
        duration:500
      });
      return false;
    });
  }

  if (ua) {//SP版

    var spAdblock = '<div id="spAdblock"><div></div></div>';
    $('#left').prepend(spAdblock);

    var getArea_length = $('#ad li').length;
    var getContents = [];
    $('#ad li').each(function(index){
      if (index < (getArea_length)) {
        getContents[index] = $(this).html();
        $(this).remove();
      }
    });
    $('#spAdblock div').prepend(getContents);

    SpMenuSetter();

    var scroll_pos = 0;
    $('#menu_btn').on('click',function(){
      var window_h = screen.availHeight;
      if (!($(this).parent().parent('.upper_ui').hasClass('active'))) {
        scroll_pos = $(window).scrollTop();//現在のスクロール位置を保存
        $(this).parent().parent('.upper_ui').addClass('active');
        $('.upper_ui').height(window_h);
        $('#Spmenuinner').slideDown();
      }else {
        $(this).parent().parent('.upper_ui').removeClass('active');
        $(window).scrollTop(scroll_pos);//メニュー出現前のスクロール位置を再現
        $('#Spmenuinner').slideUp();
        $('.upper_ui').removeAttr('style');
      }
      return false;
    });

    $(window).on("load orientationchange", function() {
        if(Math.abs(window.orientation) === 90) {
          if (!($('#Spmenu').hasClass('horizontal'))) {
            $('#Spmenu').addClass('horizontal');
          }
        } else {
          if ($('#Spmenu').hasClass('horizontal')) {
            $('#Spmenu').removeClass('horizontal');
          }
        }
    });
  }

  /*for ie backfound-attachment fixed*/
  if(navigator.userAgent.match(/Trident\/7\./)) {
          $('body').on("mousewheel", function () {
              event.preventDefault();
              window.scrollTo(0, window.pageYOffset - event.wheelDelta);
          });
  }

  window.onload = function(){
    // $('body').removeAttr('style');
    hight();
    if (!ua) {
      news_height();
      addHeight();
      pagetopbtn();
      pagetopbtn_hide(false, 'starting');
      scrollingmenu();
    }
    if (ua) {
      fix_latest_list_height();
    }

    $(window).on('orientationchange resize',function(){
      hight();
      if (ua) {
        fix_latest_list_height();
      }
    });
  };
});

function addHeight(){
  var add_height = $('#wrapper_inner').offset().top;
  var h = $('#wrapper_inner').height();
  var menu_h = $('#menu').outerHeight();
  $('#main_wrapper').height(add_height + h - menu_h);
}

function pagetopbtn(){
  var window_h = $(window).height();
  var content_offset_top = $('#wrap').offset().top;
  var contents_h = $('#wrap').height();
  var contents_bottom_offset = contents_h + content_offset_top - 50;
  $(window).resize(function(){
    window_h = $(window).height();
  });

  $(window).scroll(function(){
    var scrolltop = $(window).scrollTop();
    var scroll_bottom = scrolltop + window_h;
    if ((scroll_bottom) >= contents_bottom_offset) {
      $('#page_top_btn').addClass('stop').removeAttr('style');
    }else {
      $('#page_top_btn').removeClass('stop');
    }
  });
}

var toggle = false;
function pagetopbtn_hide(bool, str){
  if (str == 'starting') {
    duration = 1;
    duration2 = 2;
  }else {
    duration = 100;
    duration2 = 100;
  }
  $tg = $('#page_top_btn');
  var h = $tg.height();
  var down_valus = h * -1;

  if (bool && toggle) {
    toggle = false;
    $tg.animate({
      'bottom':0
    },{
      duration:duration,
      queue:false,
      easing:'linear'
    });
  }else if(!bool && !toggle){
    toggle = true;
    $tg.animate({
      'bottom':down_valus
    },{
      duration:duration2,
      queue:false
    });
  }
}


function hight(){
  //liの高さを揃える
  var column;
  if (ua) {
    column = 2;
  }else {
    column = 4;
  }

  var $mStyle_column = [$('#new_airgun_review'),$('#pickup_airgun_review'),$('#feature_column'),$('#equip')];
  for (var i = 0; i < $mStyle_column.length; i++) {

    var li_length = $mStyle_column[i].find('ul.main_style li').length;
    var li_line = Math.ceil(li_length / column);
    var _ser_h = [];

    for (var j = 0; j < li_line; j++) {
      var set_h = [];
      for (var k = 0; k < column; k++) {
        var eq_number = k + (column * j);
        var h = $mStyle_column[i].find('ul.main_style li').removeAttr('style').eq(eq_number).outerHeight();
        if (set_h < h) {
          set_h = h;
        }
      }
      _ser_h[j] = set_h;
    }

    for (var m = 0; m < li_line; m++) {
      for (var n = 0; n < column; n++) {
        var tg_number = n + (column * m);
        $mStyle_column[i].find('ul.main_style li').eq(tg_number).height(_ser_h[m]);
      }
    }
  }
}

function news_height(){
  //新着情報と戦場日記の高さを揃える + 更新情報一覧の高さ調整
  var h = 0;
  var toggle = true;
  var $tg = $('#news');
  $tg.children('div').removeAttr('style');
  if ($tg.children('div').eq(0).height() > $tg.children('div').eq(1).height()) {
    toggle = !toggle;
  }
  var contents_length = $tg.children('div').length;
  for (var i = 0; i < contents_length; i++) {
    var get_h = $tg.children('div').eq(i).height();
    if (h <= get_h ) {
      h = get_h;
    }
  }
  $tg.children('div').height(h);

  if (toggle) {
    var difference = h - $('#latest ul').outerHeight() - $('#latest div.title').height();
    $('#latest .update_information_list').height(difference);
  }
}

function scrollingmenu(){
  $('#headbox').prepend('<div id="upper_menu"></div>');
  var menu_source = $('#menu').html();
  $('#upper_menu').append(menu_source);

  var menu_top_offset = $('#menu').offset().top;
  var menu_h = $('#menu').height();
  var menu_bottom_offset = menu_top_offset + menu_h;

  var slide_duration = 200;

  $(window).scroll(function(){
    var scrolltop = $(window).scrollTop();
    if (scrolltop >= menu_bottom_offset) {
      $('#upper_menu').slideDown(slide_duration);
      $('#menu').slideUp(slide_duration);
      $('#main_wrapper').addClass('bg_fix').css('background-position-y',menu_bottom_offset * -1);
       pagetopbtn_hide(true);
    }else {
      $('#upper_menu').slideUp(slide_duration);
      $('#menu').slideDown(slide_duration);
      $('#main_wrapper').removeClass('bg_fix').css('background-position-y',0);
       pagetopbtn_hide(false);
    }
  });
}

function SpMenuSetter(){
  $('#Spmenuinner').append(google + '<ul id="Spmenu"></ul>');
  var menu_source = $('#menu div ul').html();
  $('#Spmenu').append('<li><a href="https://www.hyperdouraku.com/">トップページ</a></li>'+menu_source);
}

function fix_latest_list_height(){
  var $tg = $('#latest');
  var h = 0;
  $tg.find('ul li a img').each(function(){
    if (h < $(this).height()) {
      h = $(this).height();
    }
  });
  $tg.find('ul li a').css('min-height',h);
}
