// JavaScript Document

// iframe.height.ajust

function GetHeight(Y){
	// var app = navigator.appName.charAt(0);
	// if(app == "N"){ document.getElementById(Y).height = parent.frames['newY'].document.height +20; }
	// else{ document.getElementById(Y).height = parent.frames['newY'].document.body.scrollHeight; }
	document.getElementById(Y).height = parent.frames['newY'].document.body.scrollHeight;
}

// function draw_frame(){
	
// }

// query.get

if(typeof(keyword) != "undefined" && keyword != ""){
	query = "keyword=" + keyword;
}
if(typeof(minPrice) != "undefined" && minPrice != ""){
	query += "&minPrice=" + minPrice;
}
if(typeof(maxPrice) != "undefined" && maxPrice != ""){
	query += "&maxPrice=" + maxPrice;
}
if(typeof(hits) != "undefined" && hits != ""){
	query += "&hits=" + hits;
}
if(typeof(sort) != "undefined" && sort != ""){
	query += "&sort=" + sort;
}
if(typeof(genreId) != "undefined" && genreId != ""){
	query += "&genreId=" + genreId;
}
if(typeof(page) != "undefined" && page != ""){
	query += "&page=" + page;
}
if(typeof(orFlag) != "undefined" && orFlag != ""){
	query += "&orFlag=" + orFlag;
}
if(typeof(NGKeyword) != "undefined" && NGKeyword != ""){
	query += "&NGKeyword=" + NGKeyword;
}
if(typeof(genreInformationFlag) != "undefined" && genreInformationFlag != ""){
	query += "&genreInformationFlag=" + genreInformationFlag;
}

document.open();
document.write('<if' + 'rame frameBorder="0" src=\"//www.hyperdouraku.com/php/raku.php?' + query + '" onload=\"GetHeight(this.id)\" id=\"Y\" name=\"newY\" width=\"630\" height=\"470\" scrolling=\"no\"></if' + 'rame>');
document.close();

// var tid=setTimeout("draw_frame()",1000);
