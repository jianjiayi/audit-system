(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[16],{NilG:function(e,t,a){e.exports={"form-contaner":"form-contaner___1fKhL",tableaction:"tableaction___2qm3g"}},mAEq:function(e,t,a){"use strict";a.r(t);var n=a("0Owb"),i=(a("y8nQ"),a("Vl3Y")),s=a("k1fw"),r=(a("OaEy"),a("2fM7")),l=(a("5NDa"),a("5rEg")),c=a("q1tI"),o=a.n(c),u=a("MuoO"),p=a("LvDl"),d=a.n(p),m=a("9kvl"),y=a("zLEZ"),f=a("5KP8"),b=a("+n12"),g=a("6ZGt"),E=a("NilG"),S=a.n(E),O=a("yAXW"),h=l["a"].Group,j=r["a"].Option;function k(e){var t=Object(m["j"])("@@initialState"),a=t.initialState.currentUser,l=void 0===a?{}:a,u=Object(c["useRef"])(null),p=e.dispatch,E=e.business,k=void 0===E?l.business||{}:E,I=e.Statistics,w=I.loading,v=I.dataSource,x=I.pagination;Object(c["useEffect"])((function(){p({type:"Statistics/init",payload:Object(s["a"])({type:"person"},u.current.getFieldsValue())})}),[p]);var V={className:S.a["form-contaner"],layout:"inline",resetShow:!0,authProps:{pathUrl:"/statistics/personnel/",perms:"statistics:person:select"},dataSource:[{label:"\u4e1a\u52a1\u7ebf",type:"SELECT",name:"businessId",initialValue:b["a"].getFirstValue(k),map:k},{label:"\u65f6\u95f4",name:"datatime",type:"DateTimeStartEnd"},{label:"\u7c7b\u578b",type:"SELECT",name:"newsType",initialValue:"NEWS",map:g["e"]},{label:"\u4eba\u5458",name:"user"},{label:"\u6392\u5e8f",name:"params11",itemRender:o.a.createElement(h,{compact:!0},o.a.createElement(i["a"].Item,{name:"orderField",initialValue:"",noStyle:!0},o.a.createElement(r["a"],{style:{width:"50%"}},Object.keys(g["j"]).map((function(e){return o.a.createElement(j,{key:e,value:e},g["j"][e])})))),o.a.createElement(i["a"].Item,{name:"orderType",initialValue:"desc",noStyle:!0},o.a.createElement(r["a"],{style:{width:"50%"}},Object.keys(g["k"]).map((function(e){return o.a.createElement(j,{key:e,value:e},g["k"][e])})))))}],onReset:function(){p({type:"Statistics/init",payload:{type:"person",businessId:u.current.getFieldValue("businessId")}})},onSubmit:function(e){d.a.isEmpty(e.datatime)||(e.startTime=e.datatime[0].format(g["f"]),e.endTime=e.datatime[1].format(g["f"])),delete e.datatime,console.log("formValues",e),p({type:"Statistics/getStatisticQuery",payload:Object(s["a"])(Object(s["a"])({},e),{},{type:"person"})})}},C={selectionType:null,columns:[{title:"\u65f6\u95f4",dataIndex:"dt",render:function(e){return o.a.createElement("span",null,e)}},{title:"\u4eba\u5458",align:"center",dataIndex:"auditorName"},{title:"\u9886\u5ba1\u91cf",align:"center",dataIndex:"takeCount"},{title:"\u5ba1\u6838\u91cf",align:"center",dataIndex:"auditCount"},{title:"\u5ba1\u6838\u901a\u8fc7\u91cf",align:"center",dataIndex:"auditPassedCount"},{title:"\u64cd\u4f5c",width:"100px",align:"center",render:function(e){return o.a.createElement(O["a"],{pathUrl:"/statistics/personnel/",perms:"statistics:person:select",type:"primary",size:"small",text:"\u660e\u7ec6",onClick:function(){return T(e.auditorId)}})}}],loading:w,dataSource:v,pagination:x,onPageChg:function(e){p({type:"Statistics/getStatisticQuery",payload:{type:"person",pageNum:e.current,pageSize:e.pageSize,businessId:u.current.getFieldValue("businessId")}})}},T=function(e){var t=u.current.getFieldsValue();m["e"].push({pathname:"/statistics/personnel/details",query:Object(s["a"])(Object(s["a"])({},t),{},{id:e,isBack:!0})})},F=function(){p({type:"Statistics/getPersoneExportExcel",payload:{}})};return o.a.createElement(o.a.Fragment,null,o.a.createElement(y["a"],Object(n["a"])({},V,{pRef:u}),o.a.createElement(O["a"],{pathUrl:"/statistics/personnel/",perms:"statistics:person:select",text:"\u5bfc\u51fa",ghost:!0,type:"primary",onClick:function(){return F()}})),o.a.createElement(f["a"],C))}function I(e){var t=e.Statistics;return{Statistics:t}}t["default"]=Object(u["connect"])(I)(k)}}]);