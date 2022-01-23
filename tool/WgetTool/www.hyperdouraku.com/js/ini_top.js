// JavaScript Document

function openWindow(url,name,wide,high){
    jsWindow = window.open(url,name,"width=" + wide + ",height=" + high + ",toolbar=no,location=no,directories=no,status=yes,scrollbars=no,resizable=yes,menubar=no,titlebar=no");
    if(jsWindow.closed){}
    jsWindow.focus();
}

function raku_search(this_f){
	org_chr=document.charset; 
	document.charset='euc-jp'; 
	this_f.submit();
	document.charset=org_chr;
	pageTracker._trackPageview('/rakuten/link2');
	return false;
}
