(function(){var uploadFile,onlineFile;function initTabs(){for(var e=$G("tabhead").children,t=0;t<e.length;t++)domUtils.on(e[t],"click",(function(e){var t=e.target||e.srcElement;setTabFocus(t.getAttribute("data-content-id"))}));setTabFocus("upload")}function setTabFocus(e){if(e){var t,i,a=$G("tabhead").children;for(t=0;t<a.length;t++)i=a[t].getAttribute("data-content-id"),i==e?(domUtils.addClass(a[t],"focus"),domUtils.addClass($G(i),"focus")):(domUtils.removeClasses(a[t],"focus"),domUtils.removeClasses($G(i),"focus"));switch(e){case"upload":uploadFile=uploadFile||new UploadFile("queueList");break;case"online":onlineFile=onlineFile||new OnlineFile("fileList");break}}}function initButtons(){dialog.onok=function(){for(var e,t=[],i=$G("tabhead").children,a=0;a<i.length;a++)if(domUtils.hasClass(i[a],"focus")){e=i[a].getAttribute("data-content-id");break}switch(e){case"upload":t=uploadFile.getInsertList();var s=uploadFile.getQueueCount();if(s)return $(".info","#queueList").html('<span style="color:red;">'+"\u8fd8\u67092\u4e2a\u672a\u4e0a\u4f20\u6587\u4ef6".replace(/[\d]/,s)+"</span>"),!1;break;case"online":t=onlineFile.getInsertList();break}editor.execCommand("insertfile",t)}}function UploadFile(e){this.$wrap=e.constructor==String?$("#"+e):$(e),this.init()}function OnlineFile(e){this.container=utils.isString(e)?document.getElementById(e):e,this.init()}window.onload=function(){initTabs(),initButtons()},UploadFile.prototype={init:function(){this.fileList=[],this.initContainer(),this.initUploader()},initContainer:function(){this.$queue=this.$wrap.find(".filelist")},initUploader:function(){var e,t=this,i=jQuery,a=t.$wrap,s=a.find(".filelist"),n=a.find(".statusBar"),l=n.find(".info"),r=a.find(".uploadBtn"),o=(a.find(".filePickerBtn"),a.find(".filePickerBlock")),d=a.find(".placeholder"),u=n.find(".progress").hide(),p=0,c=0,f=window.devicePixelRatio||1,h=113*f,g=113*f,m="",v={},b=function(){var e=document.createElement("p").style,t="transition"in e||"WebkitTransition"in e||"MozTransition"in e||"msTransition"in e||"OTransition"in e;return e=null,t}(),C=editor.getActionUrl(editor.getOpt("fileActionName")),x=editor.getOpt("fileMaxSize"),w=(editor.getOpt("fileAllowFiles")||[]).join("").replace(/\./g,",").replace(/^[,]/,"");function F(t){var a=i('<li id="'+t.id+'"><p class="title">'+t.name+'</p><p class="imgWrap"></p><p class="progress"><span></span></p></li>'),s=i('<div class="file-panel"><span class="cancel">'+lang.uploadDelete+'</span><span class="rotateRight">'+lang.uploadTurnRight+'</span><span class="rotateLeft">'+lang.uploadTurnLeft+"</span></div>").appendTo(a),n=a.find("p.progress span"),l=a.find("p.imgWrap"),r=i('<p class="error"></p>').hide().appendTo(a),d=function(e){switch(e){case"exceed_size":text=lang.errorExceedSize;break;case"interrupt":text=lang.errorInterrupt;break;case"http":text=lang.errorHttp;break;case"not_allow_type":text=lang.errorFileType;break;default:text=lang.errorUploadRetry;break}r.text(text).show()};"invalid"===t.getStatus()?d(t.statusText):(l.text(lang.uploadPreview),-1=="|png|jpg|jpeg|bmp|gif|".indexOf("|"+t.ext.toLowerCase()+"|")?l.empty().addClass("notimage").append('<i class="file-preview file-type-'+t.ext.toLowerCase()+'"></i><span class="file-title" title="'+t.name+'">'+t.name+"</span>"):browser.ie&&browser.version<=7?l.text(lang.uploadNoPreview):e.makeThumb(t,(function(e,t){if(e||!t)l.text(lang.uploadNoPreview);else{var a=i('<img src="'+t+'">');l.empty().append(a),a.on("error",(function(){l.text(lang.uploadNoPreview)}))}}),h,g),v[t.id]=[t.size,0],t.rotation=0,t.ext&&-1!=w.indexOf(t.ext.toLowerCase())||(d("not_allow_type"),e.removeFile(t))),t.on("statuschange",(function(e,i){"progress"===i?n.hide().width(0):"queued"===i&&(a.off("mouseenter mouseleave"),s.remove()),"error"===e||"invalid"===e?(d(t.statusText),v[t.id][1]=1):"interrupt"===e?d("interrupt"):"queued"===e?v[t.id][1]=0:"progress"===e&&(r.hide(),n.css("display","block")),a.removeClass("state-"+i).addClass("state-"+e)})),a.on("mouseenter",(function(){s.stop().animate({height:30})})),a.on("mouseleave",(function(){s.stop().animate({height:0})})),s.on("click","span",(function(){var a,s=i(this).index();switch(s){case 0:return void e.removeFile(t);case 1:t.rotation+=90;break;case 2:t.rotation-=90;break}b?(a="rotate("+t.rotation+"deg)",l.css({"-webkit-transform":a,"-mos-transform":a,"-o-transform":a,transform:a})):l.css("filter","progid:DXImageTransform.Microsoft.BasicImage(rotation="+~~(t.rotation/90%4+4)%4+")")})),a.insertBefore(o)}function U(e){var t=i("#"+e.id);delete v[e.id],k(),t.off().find(".file-panel").off().end().remove()}function k(){var e,t=0,a=0,s=u.children();i.each(v,(function(e,i){a+=i[0],t+=i[0]*i[1]})),e=a?t/a:0,s.eq(0).text(Math.round(100*e)+"%"),s.eq(1).css("width",Math.round(100*e)+"%"),y()}function S(i,a){if(i!=m){var o=e.getStats();switch(r.removeClass("state-"+m),r.addClass("state-"+i),i){case"pedding":s.addClass("element-invisible"),n.addClass("element-invisible"),d.removeClass("element-invisible"),u.hide(),l.hide(),e.refresh();break;case"ready":d.addClass("element-invisible"),s.removeClass("element-invisible"),n.removeClass("element-invisible"),u.hide(),l.show(),r.text(lang.uploadStart),e.refresh();break;case"uploading":u.show(),l.hide(),r.text(lang.uploadPause);break;case"paused":u.show(),l.hide(),r.text(lang.uploadContinue);break;case"confirm":if(u.show(),l.hide(),r.text(lang.uploadStart),o=e.getStats(),o.successNum&&!o.uploadFailNum)return void S("finish");break;case"finish":u.hide(),l.show(),o.uploadFailNum?r.text(lang.uploadRetry):r.text(lang.uploadStart);break}m=i,y()}t.getQueueCount()?r.removeClass("disabled"):r.addClass("disabled")}function y(){var t,i="";"ready"===m?i=lang.updateStatusReady.replace("_",p).replace("_KB",WebUploader.formatSize(c)):"confirm"===m?(t=e.getStats(),t.uploadFailNum&&(i=lang.updateStatusConfirm.replace("_",t.successNum).replace("_",t.successNum))):(t=e.getStats(),i=lang.updateStatusFinish.replace("_",p).replace("_KB",WebUploader.formatSize(c)).replace("_",t.successNum),t.uploadFailNum&&(i+=lang.updateStatusError.replace("_",t.uploadFailNum))),l.html(i)}WebUploader.Uploader.support()?editor.getOpt("fileActionName")?(e=t.uploader=WebUploader.create({pick:{id:"#filePickerReady",label:lang.uploadSelectFile},swf:"../../third-party/webuploader/Uploader.swf",server:C,fileVal:editor.getOpt("fileFieldName"),duplicate:!0,fileSingleSizeLimit:x,compress:!1}),e.addButton({id:"#filePickerBlock"}),e.addButton({id:"#filePickerBtn",label:lang.uploadAddFile}),S("pedding"),e.on("fileQueued",(function(e){p++,c+=e.size,1===p&&(d.addClass("element-invisible"),n.show()),F(e)})),e.on("fileDequeued",(function(e){p--,c-=e.size,U(e),k()})),e.on("filesQueued",(function(t){e.isInProgress()||"pedding"!=m&&"finish"!=m&&"confirm"!=m&&"ready"!=m||S("ready"),k()})),e.on("all",(function(t,i){switch(t){case"uploadFinished":S("confirm",i);break;case"startUpload":var a=utils.serializeParam(editor.queryCommandValue("serverparam"))||"",s=utils.formatUrl(C+(-1==C.indexOf("?")?"?":"&")+"encode=utf-8&"+a);e.option("server",s),S("uploading",i);break;case"stopUpload":S("paused",i);break}})),e.on("uploadBeforeSend",(function(e,t,i){i["X_Requested_With"]="XMLHttpRequest"})),e.on("uploadProgress",(function(e,t){var a=i("#"+e.id),s=a.find(".progress span");s.css("width",100*t+"%"),v[e.id][1]=t,k()})),e.on("uploadSuccess",(function(e,a){var s=i("#"+e.id);try{var n=a._raw||a,l=utils.str2json(n);"SUCCESS"==l.state?(t.fileList.push(l),s.append('<span class="success"></span>')):s.find(".error").text(l.state).show()}catch(r){s.find(".error").text(lang.errorServerUpload).show()}})),e.on("uploadError",(function(e,t){})),e.on("error",(function(e,t){"Q_TYPE_DENIED"!=e&&"F_EXCEED_SIZE"!=e||F(t)})),e.on("uploadComplete",(function(e,t){})),r.on("click",(function(){if(i(this).hasClass("disabled"))return!1;"ready"===m||"paused"===m?e.upload():"uploading"===m&&e.stop()})),r.addClass("state-"+m),k()):i("#filePickerReady").after(i("<div>").html(lang.errorLoadConfig)).hide():i("#filePickerReady").after(i("<div>").html(lang.errorNotSupport)).hide()},getQueueCount:function(){var e,t,i,a=0,s=this.uploader.getFiles();for(t=0;e=s[t++];)i=e.getStatus(),"queued"!=i&&"uploading"!=i&&"progress"!=i||a++;return a},getInsertList:function(){var e,t,i,a=[],s=editor.getOpt("fileUrlPrefix");for(e=0;e<this.fileList.length;e++)i=this.fileList[e],t=i.url,a.push({title:i.original||t.substr(t.lastIndexOf("/")+1),url:s+t});return a}},OnlineFile.prototype={init:function(){this.initContainer(),this.initEvents(),this.initData()},initContainer:function(){this.container.innerHTML="",this.list=document.createElement("ul"),this.clearFloat=document.createElement("li"),domUtils.addClass(this.list,"list"),domUtils.addClass(this.clearFloat,"clearFloat"),this.list.appendChild(this.clearFloat),this.container.appendChild(this.list)},initEvents:function(){var e=this;domUtils.on($G("fileList"),"scroll",(function(t){var i=this;i.scrollHeight-(i.offsetHeight+i.scrollTop)<10&&e.getFileData()})),domUtils.on(this.list,"click",(function(e){var t=e.target||e.srcElement,i=t.parentNode;"li"==i.tagName.toLowerCase()&&(domUtils.hasClass(i,"selected")?domUtils.removeClasses(i,"selected"):domUtils.addClass(i,"selected"))}))},initData:function(){this.state=0,this.listSize=editor.getOpt("fileManagerListSize"),this.listIndex=0,this.listEnd=!1,this.getFileData()},getFileData:function(){var _this=this;_this.listEnd||this.isLoadingData||(this.isLoadingData=!0,ajax.request(editor.getActionUrl(editor.getOpt("fileManagerActionName")),{timeout:1e5,data:utils.extend({start:this.listIndex,size:this.listSize},editor.queryCommandValue("serverparam")),method:"get",onsuccess:function(r){try{var json=eval("("+r.responseText+")");"SUCCESS"==json.state&&(_this.pushData(json.list),_this.listIndex=parseInt(json.start)+parseInt(json.list.length),_this.listIndex>=json.total&&(_this.listEnd=!0),_this.isLoadingData=!1)}catch(e){if(-1!=r.responseText.indexOf("ue_separate_ue")){var list=r.responseText.split(r.responseText);_this.pushData(list),_this.listIndex=parseInt(list.length),_this.listEnd=!0,_this.isLoadingData=!1}}},onerror:function(){_this.isLoadingData=!1}}))},pushData:function(e){var t,i,a,s,n,l=this,r=editor.getOpt("fileManagerUrlPrefix");for(t=0;t<e.length;t++)if(e[t]&&e[t].url){if(i=document.createElement("li"),n=document.createElement("span"),a=e[t].url.substr(e[t].url.lastIndexOf(".")+1),-1!="png|jpg|jpeg|gif|bmp".indexOf(a))s=document.createElement("img"),domUtils.on(s,"load",function(e){return function(){l.scale(e,e.parentNode.offsetWidth,e.parentNode.offsetHeight)}}(s)),s.width=113,s.setAttribute("src",r+e[t].url+(-1==e[t].url.indexOf("?")?"?noCache=":"&noCache=")+(+new Date).toString(36));else{var o=document.createElement("i"),d=document.createElement("span");d.innerHTML=e[t].url.substr(e[t].url.lastIndexOf("/")+1),s=document.createElement("div"),s.appendChild(o),s.appendChild(d),domUtils.addClass(s,"file-wrapper"),domUtils.addClass(d,"file-title"),domUtils.addClass(o,"file-type-"+a),domUtils.addClass(o,"file-preview")}domUtils.addClass(n,"icon"),i.setAttribute("data-url",r+e[t].url),e[t].original&&i.setAttribute("data-title",e[t].original),i.appendChild(s),i.appendChild(n),this.list.insertBefore(i,this.clearFloat)}},scale:function(e,t,i,a){var s=e.width,n=e.height;"justify"==a?s>=n?(e.width=t,e.height=i*n/s,e.style.marginLeft="-"+parseInt((e.width-t)/2)+"px"):(e.width=t*s/n,e.height=i,e.style.marginTop="-"+parseInt((e.height-i)/2)+"px"):s>=n?(e.width=t*s/n,e.height=i,e.style.marginLeft="-"+parseInt((e.width-t)/2)+"px"):(e.width=t,e.height=i*n/s,e.style.marginTop="-"+parseInt((e.height-i)/2)+"px")},getInsertList:function(){var e,t=this.list.children,i=[];for(e=0;e<t.length;e++)if(domUtils.hasClass(t[e],"selected")){var a=t[e].getAttribute("data-url"),s=t[e].getAttribute("data-title")||a.substr(a.lastIndexOf("/")+1);i.push({title:s,url:a})}return i}}})();