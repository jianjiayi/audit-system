(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[8],{Gekg:function(e,t,a){e.exports={tablebox:"tablebox___1pZL9",list:"list___325mz",item:"item___CGycI",text:"text___2BXpG"}},gIUF:function(e,t,a){"use strict";a.r(t);var n=a("0Owb"),u=(a("miYZ"),a("tsqr")),i=a("k1fw"),l=a("q1tI"),s=a.n(l),r=a("MuoO"),c=a("LvDl"),o=a.n(c),p=a("9kvl"),d=a("zLEZ"),m=a("5KP8"),b=a("6ZGt"),y=a("+n12"),f=a("Gekg"),E=a.n(f),g=a("yAXW");function q(e){var t=Object(p["j"])("@@initialState"),a=t.initialState.currentUser,r=void 0===a?{}:a,c=Object(l["useRef"])(null),f=e.dispatch,q=e.business,v=void 0===q?r.business||{}:q,S=e.Queue,_=S.loading,k=S.dataSource;Object(l["useEffect"])((function(){var e=c.current.getFieldsValue();f({type:"Queue/init",payload:e})}),[v,f,c.current]);var w={className:E.a["form-contaner"],layout:"inline",submitText:"\u5237\u65b0",authProps:{pathUrl:"/statistics/classify",perms:"statistics:classify:select"},dataSource:[{label:"\u4e1a\u52a1\u7ebf",type:"SELECT",name:"bid",initialValue:y["a"].getFirstValue(v),map:v},{label:"\u5185\u5bb9\u7c7b\u578b",type:"SELECT",name:"type",initialValue:"NEWS",map:b["e"]},{label:"\u961f\u5217\u673a\u5236",type:"SELECT",name:"queueType",initialValue:"",map:Object(i["a"])({},b["n"])}],onSubmit:function(e){console.log("formValues",e),f({type:"Queue/init",payload:Object(i["a"])({},e)})}},x=function(e,t){var a=c.current.getFieldsValue(),n={businessId:a.bid,queue:t,queueName:e,type:a.type,routersource:"queue"};f({type:"CDetails/getNewsGetTask",payload:n,callback:function(e){if(console.log("data",e),o.a.isEmpty(e))return u["b"].error("\u5f53\u524d\u961f\u5217\u6ca1\u6709\u6587\u7ae0\u53ef\u4ee5\u9886\u53d6");f({type:"CDetails/save",payload:{query:n}}),sessionStorage.setItem("$QUERY",JSON.stringify(n)),p["e"].push({pathname:"/queue/cdetails",query:{isBack:!0}})}})},O={className:E.a.tablebox,selectionType:null,columns:[{title:"\u540d\u79f0",dataIndex:"queueName",width:150,render:function(e){return s.a.createElement("b",null,e)}},{title:"\u6570\u91cf",dataIndex:"queueLen",align:"center",width:150},{title:"\u64cd\u4f5c",render:function(e){return s.a.createElement(g["a"],{pathUrl:"/queue",text:"\u9886\u53d6",key:e.id,perms:"queue:receive",onClick:function(){x(e.queueName,e.queueId)}})}}],loading:_,dataSource:k};return s.a.createElement(s.a.Fragment,null,s.a.createElement(d["a"],Object(n["a"])({},w,{pRef:c})),s.a.createElement(m["a"],O))}function v(e){var t=e.Queue,a=e.CDetails;return{Queue:t,CDetails:a}}delete b["e"][""],t["default"]=Object(r["connect"])(v)(q)}}]);