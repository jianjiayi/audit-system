(function(){var e,t=editor,i=$G("preview"),o=$G("preitem"),r=templates,l=function(){for(var e,t="",i=0;e=r[i++];)t+='<div class="preitem" onclick="pre('+i+')"><img src="images/'+e.pre+'" '+(e.title?"alt="+e.title+" title="+e.title:"")+"></div>";o.innerHTML=t},c=function(t){var l=r[t-1];e=l,n(),domUtils.setStyles(o.childNodes[t-1],{"background-color":"lemonChiffon",border:"#ccc 1px solid"}),i.innerHTML=l.preHtml?l.preHtml:""},n=function(){for(var e,t=o.children,i=0;e=t[i++];)domUtils.setStyles(e,{"background-color":"",border:"white 1px solid"})};dialog.onok=function(){$G("issave").checked||t.execCommand("cleardoc");var i={html:e&&e.html};t.execCommand("template",i)},l(),window.pre=c,c(2)})();