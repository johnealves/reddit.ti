(this["webpackJsonpreddit-ti"]=this["webpackJsonpreddit-ti"]||[]).push([[0],{28:function(t,e,n){},30:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var c=n(0),i=n.n(c),r=n(5),a=n.n(r),o=n(4),s=(n(28),n(6)),d=n(7),u=n(8),l=n(10),j=n(9),h=n(1),b=function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(){return Object(s.a)(this,n),e.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){var t=this.props,e=t.redditList,n=t.topic;return t.select?Object(h.jsxs)("div",{children:[Object(h.jsxs)("h2",{children:["Lista de Subt\xf3picos ",n]}),e?Object(h.jsx)("ul",{children:e.map((function(t){return Object(h.jsx)("a",{href:t.data.url,target:"_blank",rel:"noreferrer",children:Object(h.jsx)("li",{children:t.data.title})})}))}):null]}):Object(h.jsx)("div",{children:"escolha um topico para pesquisar"})}}]),n}(c.Component),p=Object(o.b)((function(t){return{redditList:t.setStateReddit.data}}))(b),O="REQUEST_SUBREDDIT",f="REQUEST_SUBREDDIT_SUCCCESS",v="REQUEST_SUBREDDIT_FAILURE",S=function(t){return fetch("https://www.reddit.com/r/".concat(t,".json")).then((function(t){return t.json()})).then((function(t){return t.data.children})).catch((function(t){return t}))},g=function(t){return function(e){return e({type:O,isFechting:!0}),S(t).then((function(t){return e(function(t){return{type:f,isFechting:!1,data:t}}(t))})).catch((function(t){return e({type:v,isFechting:!1})}))}},x=(n(30),function(t){Object(l.a)(n,t);var e=Object(j.a)(n);function n(t){var c;return Object(s.a)(this,n),(c=e.call(this,t)).handleOption=c.handleOption.bind(Object(u.a)(c)),c.state={topic:"",select:!1},c}return Object(d.a)(n,[{key:"handleOption",value:function(t){var e=t.target.value,n=this.props.setStateReddit;"noSelect"===e?this.setState({topic:"",select:!1}):(this.setState({topic:e,select:!0}),n(e))}},{key:"render",value:function(){var t=this.state,e=t.topic,n=t.select;return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"Reddit.dev"}),Object(h.jsxs)("select",{className:"form-select",onChange:this.handleOption,children:[Object(h.jsx)("option",{value:"noSelect",children:"Selecione um t\xf3pico"}),Object(h.jsx)("option",{value:"frontend",children:"Frontend"}),Object(h.jsx)("option",{value:"ReactJS",children:"Reactjs"})]}),Object(h.jsx)(p,{topic:e,select:n})]})}}]),n}(c.Component)),R=Object(o.b)(null,(function(t){return{setStateReddit:function(e){return t(g(e))}}}))(x),m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,32)).then((function(e){var n=e.getCLS,c=e.getFID,i=e.getFCP,r=e.getLCP,a=e.getTTFB;n(t),c(t),i(t),r(t),a(t)}))},E=n(2),F=n(16),y=n(3),C={},T=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case O:return Object(y.a)(Object(y.a)({},t),{},{loading:e.isFetching});case f:return Object(y.a)(Object(y.a)({},t),{},{loading:e.isFetching,data:e.data});case v:return Object(y.a)(Object(y.a)({},t),{},{loading:e.loading,error:e.error});default:return t}},D=Object(E.combineReducers)({setStateReddit:T}),U=n(17),w=Object(E.createStore)(D,Object(U.composeWithDevTools)(Object(E.applyMiddleware)(F.a)));a.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(o.a,{store:w,children:Object(h.jsx)(R,{})})}),document.getElementById("root")),m()}},[[31,1,2]]]);
//# sourceMappingURL=main.014416f9.chunk.js.map