(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t,a){},113:function(e,t,a){"use strict";a.r(t);a(63),a(88);var n=a(0),l=a.n(n),i=a(31),c=a.n(i),r=a(16),o=a.n(r),s=a(55),u=a(56),p=a(60),d=a(57),m=a(61),f=a(1),h=(a(111),function(e){var t=e.id,a=e.installApp,n=e.fetchedUser;return l.a.createElement(f.Panel,{id:t},l.a.createElement(f.PanelHeader,null,"Example"),n&&l.a.createElement(f.Group,{title:"User Data Fetched with VK Connect"},l.a.createElement(f.ListItem,{before:n.photo_200?l.a.createElement(f.Avatar,{src:n.photo_200}):null,description:n.city&&n.city.title?n.city.title:""},"".concat(n.first_name," ").concat(n.last_name))),l.a.createElement(f.Group,{title:"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u0432 \u0441\u043e\u043e\u0431\u0449\u0435\u0441\u0442\u0432\u043e"},l.a.createElement(f.Div,null,l.a.createElement(f.Button,{size:"xl",level:"2",onClick:a,"data-to":"persik"},"\u0423\u0441\u0442\u0430\u043d\u043e\u0432\u0438\u0442\u044c \u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435"))))}),E=a(58),b=a.n(E),v=(a(112),a(59)),k=a.n(v),g=a(32),P=a.n(g),A=Object(f.platform)(),w=function(e){return l.a.createElement(f.Panel,{id:e.id},l.a.createElement(f.PanelHeader,{left:l.a.createElement(f.HeaderButton,{onClick:e.go,"data-to":"home"},A===f.IOS?l.a.createElement(k.a,null):l.a.createElement(P.a,null))},"Persik"),l.a.createElement("img",{className:"Persik",src:b.a,alt:"Persik The Cat"}))},y=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(p.a)(this,Object(d.a)(t).call(this,e))).go=function(e){a.setState({activePanel:e.currentTarget.dataset.to})},a.installApp=function(e){console.log(e),o.a.send("VKWebAppAddToCommunity",{}),setInterval(function(){void 0!==e.detail&&a.setState({activePanel:"persik"})},1e3)},a.state={activePanel:"home",fetchedUser:null},a}return Object(m.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){var e=this;o.a.subscribe(function(t){switch(t.detail.type){case"VKWebAppGetUserInfoResult":e.setState({fetchedUser:t.detail.data});break;default:console.log(t.detail.type)}}),o.a.send("VKWebAppGetUserInfo",{})}},{key:"render",value:function(){return l.a.createElement(f.View,{activePanel:this.state.activePanel},l.a.createElement(h,{id:"home",fetchedUser:this.state.fetchedUser,go:this.go,installApp:this.installApp}),l.a.createElement(w,{id:"persik",go:this.go}))}}]),t}(l.a.Component);o.a.send("VKWebAppInit",{}),c.a.render(l.a.createElement(y,null),document.getElementById("root"))},58:function(e,t,a){e.exports=a.p+"static/media/persik.4e1ec840.png"},62:function(e,t,a){e.exports=a(113)}},[[62,1,2]]]);
//# sourceMappingURL=main.ea08b817.chunk.js.map