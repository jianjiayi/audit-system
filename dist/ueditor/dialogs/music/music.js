function Music(){this.init()}(function(){var e=[],a=[],s=null;Music.prototype={total:70,pageSize:10,dataUrl:"http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.search.common",playerUrl:"http://box.baidu.com/widget/flash/bdspacesong.swf",init:function(){var e=this;domUtils.on($G("J_searchName"),"keyup",(function(a){var s=window.event||a;13==s.keyCode&&e.dosearch()})),domUtils.on($G("J_searchBtn"),"click",(function(){e.dosearch()}))},callback:function(e){var a=this;a.data=e.song_list,setTimeout((function(){$G("J_resultBar").innerHTML=a._renderTemplate(e.song_list)}),300)},dosearch:function(){var e=this;s=null;var a=$G("J_searchName").value;if(""==utils.trim(a))return!1;a=encodeURIComponent(a),e._sent(a)},doselect:function(e){var a=this;"object"==typeof e?s=e:"number"==typeof e&&(s=a.data[e])},onpageclick:function(s){for(var t=0;t<e.length;t++)$G(e[t]).className="pageoff",$G(a[t]).className="paneloff";$G("page"+s).className="pageon",$G("panel"+s).className="panelon"},listenTest:function(e){var a=this,s=$G("J_preview"),t="m-try"==e.className,n=a._getTryingElem();n&&(n.className="m-try",s.innerHTML=""),t&&(e.className="m-trying",s.innerHTML=a._buildMusicHtml(a._getUrl(!0)))},_sent:function(e){var a=this;$G("J_resultBar").innerHTML='<div class="loading"></div>',utils.loadFile(document,{src:a.dataUrl+"&query="+e+"&page_size="+a.total+"&callback=music.callback&.r="+Math.random(),tag:"script",type:"text/javascript",defer:"defer"})},_removeHtml:function(e){var a=/<\s*\/?\s*[^>]*\s*>/gi;return e.replace(a,"")},_getUrl:function(e){var a=this,t="from=tiebasongwidget&url=&name="+encodeURIComponent(a._removeHtml(s.title))+"&artist="+encodeURIComponent(a._removeHtml(s.author))+"&extra="+encodeURIComponent(a._removeHtml(s.album_title))+"&autoPlay="+e+"&loop=true";return a.playerUrl+"?"+t},_getTryingElem:function(){for(var e=$G("J_listPanel").getElementsByTagName("span"),a=0;a<e.length;a++)if("m-trying"==e[a].className)return e[a];return null},_buildMusicHtml:function(e){var a='<embed class="BDE_try_Music" allowfullscreen="false" pluginspage="http://www.macromedia.com/go/getflashplayer"';return a+=' src="'+e+'"',a+=' width="1" height="1" style="position:absolute;left:-2000px;"',a+=' type="application/x-shockwave-flash" wmode="transparent" play="true" loop="false"',a+=' menu="false" allowscriptaccess="never" scale="noborder">',a},_byteLength:function(e){return e.replace(/[^\u0000-\u007f]/g,"aa").length},_getMaxText:function(e){var a=this;return e=a._removeHtml(e),a._byteLength(e)>12?e.substring(0,5)+"...":(e||(e="&nbsp;"),e)},_rebuildData:function(e){for(var a,s=this,t=[],n=s.pageSize,i=0;i<e.length;i++)(i+n)%n==0&&(a=[],t.push(a)),a.push(e[i]);return t},_renderTemplate:function(s){var t=this;if(0==s.length)return'<div class="empty">'+lang.emptyTxt+"</div>";s=t._rebuildData(s);var n=[],i=[],l=[];n.push('<div id="J_listPanel" class="listPanel">'),i.push('<div class="page">');for(var r,c=0;r=s[c++];){a.push("panel"+c),e.push("page"+c),1==c?(n.push('<div id="panel'+c+'" class="panelon">'),1!=s.length&&l.push('<div id="page'+c+'" onclick="music.onpageclick('+c+')" class="pageon">'+c+"</div>")):(n.push('<div id="panel'+c+'" class="paneloff">'),l.push('<div id="page'+c+'" onclick="music.onpageclick('+c+')" class="pageoff">'+c+"</div>")),n.push('<div class="m-box">'),n.push('<div class="m-h"><span class="m-t">'+lang.chapter+'</span><span class="m-s">'+lang.singer+'</span><span class="m-z">'+lang.special+'</span><span class="m-try-t">'+lang.listenTest+"</span></div>");for(var o,p=0;o=r[p++];)n.push('<label for="radio-'+c+"-"+p+'" class="m-m">'),n.push('<input type="radio" id="radio-'+c+"-"+p+'" name="musicId" class="m-l" onclick="music.doselect('+(t.pageSize*(c-1)+(p-1))+')"/>'),n.push('<span class="m-t">'+t._getMaxText(o.title)+"</span>"),n.push('<span class="m-s">'+t._getMaxText(o.author)+"</span>"),n.push('<span class="m-z">'+t._getMaxText(o.album_title)+"</span>"),n.push('<span class="m-try" onclick="music.doselect('+(t.pageSize*(c-1)+(p-1))+');music.listenTest(this)"></span>'),n.push("</label>");n.push("</div>"),n.push("</div>")}return l.reverse(),i.push(l.join("")),n.push("</div>"),i.push("</div>"),n.join("")+i.join("")},exec:function(){var e=this;null!=s&&($G("J_preview").innerHTML="",editor.execCommand("music",{url:e._getUrl(!1),width:400,height:95}))}}})();