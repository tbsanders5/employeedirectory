(this.webpackJsonpemployeedirectory=this.webpackJsonpemployeedirectory||[]).push([[0],{24:function(e,t,s){},25:function(e,t,s){},43:function(e,t,s){},44:function(e,t,s){},45:function(e,t,s){"use strict";s.r(t);var n=s(0),r=s(2),a=s.n(r),c=s(13),i=s.n(c);s(24),s(25);var l=function(){return Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"jumbotron jumbotron-fluid",id:"jumbo",children:Object(n.jsxs)("section",{className:"container",children:[Object(n.jsx)("h1",{className:"display-6",children:Object(n.jsx)("i",{className:"fas fa-user-friends",children:Object(n.jsx)("b",{children:"Company Directory"})})}),Object(n.jsx)("p",{className:"lead",children:"Search by employees first or last name or select a column."})]})})})},o=s(14),d=s(15),j=s(18),h=s(17),u=s(16),b=s.n(u),m=function(){return b.a.get("https://randomuser.me/api/?results=200&nat=us")},O=(s(43),function(e){return Object(n.jsx)("form",{className:"form-group search-widget",children:Object(n.jsx)("div",{className:"input-group mb-3",children:Object(n.jsx)("input",{onChange:e.handleInputChange,value:e.search,name:"search",type:"text",className:"form-control",placeholder:"Search",id:"search"})})})}),x=s(4),f=s.n(x),p=(s(44),function(e){Object(j.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(o.a)(this,s);for(var n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(e=t.call.apply(t,[this].concat(r))).state={order:"",results:[],search:""},e.handleInputChange=function(t){if("search"===t.target.name){var s=t.target.value.toLowerCase();e.setState({search:s})}},e.sortByFirstName=function(){var t=e.state.results.sort((function(e,t){return t.name.first>e.name.first?-1:e.name.first>t.name.first?1:0}));"DESC"===e.state.order?(t.reverse(),e.setState({order:"ASC"})):e.setState({order:"DESC"}),e.setState({results:t})},e.sortByLastName=function(){var t=e.state.results.sort((function(e,t){return t.name.last>e.name.last?-1:e.name.last>t.name.last?1:0}));"DESC"===e.state.order?(t.reverse(),e.setState({order:"ASC"})):e.setState({order:"DESC"}),e.setState({results:t})},e}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var e=this;m().then((function(t){e.setState({results:t.data.results}),console.log(e.state.results)})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this;return Object(n.jsxs)("div",{children:[Object(n.jsx)(O,{handleInputChange:this.handleInputChange,search:this.state.search}),Object(n.jsx)("div",{className:"table-responsive",children:Object(n.jsxs)("table",{className:"table text-center table-center table-hover table-responsive",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{children:"Image"}),Object(n.jsxs)("th",{children:["First Name ",Object(n.jsx)("span",{className:"fas fa-caret-square-down",onClick:this.sortByFirstName})]}),Object(n.jsxs)("th",{children:["Last Name ",Object(n.jsx)("span",{className:"fas fa-caret-square-down",onClick:this.sortByLastName})]}),Object(n.jsx)("th",{children:"Phone"}),Object(n.jsx)("th",{children:"Email"}),Object(n.jsx)("th",{children:"DOB"})]})}),this.state.results&&this.state.results.map((function(t){return t.name.first.toLowerCase().includes(e.state.search)?Object(n.jsx)("tbody",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)("img",{src:t.picture.thumbnail,className:"rounded-circle",alt:"thumbnail"})}),Object(n.jsx)("td",{children:t.name.first}),Object(n.jsx)("td",{children:t.name.last}),Object(n.jsx)("td",{children:t.phone}),Object(n.jsx)("td",{children:t.email}),Object(n.jsx)("td",{children:f()(t.dob.date,"mediumDate")})]})},t.login.uuid):t.name.last.toLowerCase().includes(e.state.search)?Object(n.jsx)("tbody",{ley:t.login.uuid,children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)("img",{src:t.picture.thumbnail,className:"rounded-circle",alt:"thumbnail"})}),Object(n.jsx)("td",{children:t.name.first}),Object(n.jsx)("td",{children:t.name.last}),Object(n.jsx)("td",{children:t.phone}),Object(n.jsx)("td",{children:t.email}),Object(n.jsx)("td",{children:f()(t.dob.date,"mediumDate")})]})}):null})),";"]})})]})}}]),s}(a.a.Component));var v=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(l,{}),Object(n.jsx)(p,{})]})},g=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,46)).then((function(t){var s=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,c=t.getTTFB;s(e),n(e),r(e),a(e),c(e)}))};i.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(v,{})}),document.getElementById("root")),g()}},[[45,1,2]]]);
//# sourceMappingURL=main.d1d2c0cf.chunk.js.map