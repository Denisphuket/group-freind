(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{114:function(e,t,a){"use strict";a.r(t);a(65),a(90);var n=a(0),l=a.n(n),o=a(33),c=a.n(o),r=a(18),i=a.n(r),s=a(57),p=a(58),m=a(62),d=a(59),u=a(63),f=a(1),g=(a(113),a(60)),h=a.n(g),E=(a(56),a(23)),k=a.n(E),v=a(17),b=a.n(v),P=Object(f.platform)(),w=function(e){return l.a.createElement(f.Panel,{id:e.id},l.a.createElement(f.PanelHeader,{left:l.a.createElement(f.HeaderButton,{onClick:e.go,"data-to":"home"},P===f.IOS?l.a.createElement(k.a,null):l.a.createElement(b.a,null))},"Persik"),l.a.createElement("img",{className:"Persik",src:h.a,alt:"Persik The Cat"}))},_=a(61),y=a.n(_),O=Object(f.platform)(),A=function(e){return l.a.createElement(f.Panel,{id:e.id},l.a.createElement(f.PanelHeader,{left:l.a.createElement(f.HeaderButton,{onClick:e.go,"data-to":"home"},O===f.IOS?l.a.createElement(k.a,null):l.a.createElement(b.a,null))},"Png"),l.a.createElement("img",{className:"Png",src:y.a,alt:"Png QR Code"}))},I=function(e){var t=e.id,a=e.installApp,n=e.fetchedUser;console.log("location.href",window.location.href);var o=new URL(window.location.href);console.log(o),console.log(o.searchParams.get("vk_app_id"));var c=o.searchParams.get("vk_app_id"),r=o.searchParams.get("vk_group_id");return console.log(r),a=function(e){console.log("\u0422\u0443\u0442 \u0410\u043f\u043f",e),window.open("https://vk.com/add_community_app?aid=".concat(c))},l.a.createElement(f.Panel,{id:t},l.a.createElement(f.PanelHeader,null,"\u041c\u0430\u0433\u043d\u0438\u0442 \u041f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432"),n&&l.a.createElement(f.Group,{title:"\u0414\u043e\u0431\u0440\u043e \u041f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c \u0432 \u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"},l.a.createElement(f.ListItem,{before:n.photo_200?l.a.createElement(f.Avatar,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),r&&l.a.createElement(f.Group,{title:"\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0441\u0442\u043e\u0438\u0442 \u0432 \u0433\u0440\u0443\u043f\u043f\u0435"},l.a.createElement(f.ListItem,null,"".concat(r," "))),null==r&&l.a.createElement(f.Group,{title:"\u041c\u0435\u043d\u044e"},l.a.createElement(f.Div,null,l.a.createElement(f.Button,{size:"xl",level:"2",onClick:a,"data-to":"persik"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0432 \u0421\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u043e"))))},U=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(m.a)(this,Object(d.a)(t).call(this,e))).go=function(e){a.setState({activePanel:e.currentTarget.dataset.to})},a.installApp=function(e){console.log("\u0422\u0443\u0442 \u0410\u043f\u043f",e),window.open("https://vk.com/add_community_app?aid=".vkappid,"_blank")},a.state={activePanel:"home",fetchedUser:null},a}return Object(u.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this;i.a.subscribe(function(t){switch(console.log("\u0415 \u21161",t),t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data}),console.log(t);break;default:console.log(t.detail.type)}}),i.a.send("VKWebAppGetUserInfo",{})}},{key:"render",value:function(){return l.a.createElement(f.View,{activePanel:this.state.activePanel},l.a.createElement(w,{id:"persik",go:this.go}),l.a.createElement(A,{id:"png",go:this.go}),l.a.createElement(I,{id:"home",fetchedUser:this.state.fetchedUser,go:this.go,installApp:this.installApp}))}}]),t}(l.a.Component);i.a.send("VKWebAppInit",{}),c.a.render(l.a.createElement(U,null),document.getElementById("root"))},56:function(e,t,a){},60:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"},61:function(e,t,a){e.exports=a.p+"static/media/png.7ea30b5b.png"},64:function(e,t,a){e.exports=a(114)}},[[64,1,2]]]);
//# sourceMappingURL=main.12f99906.chunk.js.map