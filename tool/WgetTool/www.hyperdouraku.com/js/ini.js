// JavaScript Document

document.open();
document.write('<link rel="shortcut icon" href="https://www.hyperdouraku.com/hyperdouraku.ico" />');

document.write('<meta name="viewport" content="width=device-width">');

// bibincom ad code

document.write('<div><script type="text/javascript" src="https://bibincom.com/ad/165_hyperdouraku.com.js"></script></div>');


// sns

document.write('<div id="ShareSidebar">');

// twitter
document.write('<div margin:10px 0 0 10px;">');
document.write('<a href="https://twitter.com/share?ref_src=twsrc%5Etfw" class="twitter-share-button" data-show-count="false">Tweet</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>');
document.write('</div><br style="clear:both" />');

// Facebook
document.write('<div margin:10px 0 0 10px;">');
document.write('<a href="https://www.facebook.com/sharer.php?u=');
document.write(document.URL);
document.write('" onclick="window.open(this.href,\'facebookwindow\',\'width=550,height=450,personalbar=0,toolbar=0,scrollbars=1,resizable=1\'); return false;"><img src="https://www.hyperdouraku.com/images/f_logo.png" width="58" height="18" border="0" /></a>');
document.write('</div><br style="clear:both" />');

// mixi check
document.write('<div margin:10px 0 0 10px;">');
document.write('<a href="https://mixi.jp/share.pl" class="mixi-check-button" data-key="504f150acd46327281a9a1684d9073343c185b3a">mixiチェック</a>');
document.write('<script type="text/javascript" src="https://static.mixi.jp/js/share.js"></script>');
document.write('</div><br style="clear:both" />');


document.write('</div>');

document.close();

function writeHeader(){
	document.write('<div id="gn">');
	document.write('<div class="home_btn" title="ハイパー道楽 ホームへ">');
	document.write('<a href="//www.hyperdouraku.com"><img src="//www.hyperdouraku.com/images/spacer.gif" alt="ハイパー道楽 ホームへ" class="topgif" width="160" height="45" border="0" /></a></div>');
	document.write('<div class="navi">');
	document.write('<ul>');
	document.write('<li><a href="//www.hyperdouraku.com/airgun/index.html">エアガンレビュー</a></li>');
	document.write('<li><a href="//www.hyperdouraku.com/item/index.html">ウェア・装備</a></li>');
	document.write('<li><a href="//www.hyperdouraku.com/survivalgame/index.html">サバイバルゲーム</a></li>');
	document.write('<li><a href="//www.hyperdouraku.com/bbs/index.html">掲示板</a></li>');
	document.write('<li><a href="//www.hyperdouraku.com/link/index.html">リンク集</a></li>');
	document.write('<li><a href="//www.hyperdouraku.com/sitemap.html">サイトマップ</a></li>');
	document.write('</ul>');
	document.write('</div></div>');
	
	document.write('<div id="linkunit">');

	document.write('<!--  ad tags Size: 320x100 ZoneId:1382776-->');

	document.write('<script type="text/javascript" src="https://js.gsspcln.jp/t/382/776/a1382776.js"></script>');

	document.write('</div>');
}

function openWindow(url,name,wide,high){
    jsWindow = window.open(url,name,"width=" + wide + ",height=" + high + ",toolbar=no,location=no,directories=no,status=yes,scrollbars=no,resizable=yes,menubar=no,titlebar=no");
    if(jsWindow.closed){}
    jsWindow.focus();
}

function writeWmp(wmvFile){
	document.write('<object id="WMP" classid="CLSID:22D6F312-B0F6-11D0-94AB-0080C74C7E95" codebase="https://activex.microsoft.com/activex/controls/mplayer/en/nsmp2inf.cab#Version=6,4,5,715" standby="Loading Microsoft Windows Media Player components..." type="application/x-oleobject" width="630" height="549">');
	document.write('<param name="FileName" value="https://www.hyperdouraku.com/WMV/' + wmvFile + '">');
	document.write('<param name="AutoStart" value="true">');
	document.write('<param name="ShowControls" value="true">');
	document.write('<param name="ShowStatusBar" value="true">');
	document.write('<param name="Loop" value="false">');
	document.write('<embed type="application/x-mplayer2" pluginspage="https://www.microsoft.com/Windows/MediaPlayer/" src="https://www.hyperdouraku.com/WMV/' + wmvFile + '" autostart=1 showcontrols=1 showstatusbar="1" loop="0" width="630" height="549"></embed>');
	document.write('</object>');
}

function raku_search(this_f){
	org_chr=document.charset; 
	document.charset='euc-jp'; 
	this_f.submit();
	document.charset=org_chr;
	pageTracker._trackPageview('/rakuten/link2');
	return false;
}
