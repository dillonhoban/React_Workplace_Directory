(this["webpackJsonpreact-workplace-directory"]=this["webpackJsonpreact-workplace-directory"]||[]).push([[0],{23:function(e,t,r){},25:function(e,t,r){},44:function(e,t,r){},46:function(e,t,r){"use strict";r.r(t);var a=r(2),c=r.n(a),n=r(12),o=r.n(n),s=r(16),i=(r(23),r(0));function l(){return Object(i.jsxs)("div",{className:"jumbotron text-center header-container mb-0",children:[Object(i.jsx)("h1",{children:"Employee Directory"}),Object(i.jsx)("p",{children:"Click on the carrots to filter by heading or use the search bar to narrow your results."})]})}r(25);function u(e){var t=e.onChange;return Object(i.jsx)("div",{className:"searchbar p-3 mb-0 text-center",children:Object(i.jsx)("input",{type:"text",placeholder:"Search",onChange:t})})}var m=r(13),j=r(14),d=r(18),h=r(17),b=r(15),p=r.n(b);function O(e){return e<10?"0".concat(e):"".concat(e)}function x(e){var t,r=e.image,a=e.name,c=e.phone,n=e.email,o=e.dob;return Object(i.jsxs)("li",{className:"row py-2",children:[Object(i.jsx)("div",{className:"col-2 m-auto",children:Object(i.jsx)("img",{className:"employee-img",alt:a,src:r})}),Object(i.jsx)("div",{className:"col-2 m-auto",children:a}),Object(i.jsx)("div",{className:"col-3 m-auto",children:c}),Object(i.jsx)("div",{className:"col-3 m-auto",children:Object(i.jsx)("a",{target:"_blank",rel:"noreferrer",href:"mailto:"+n,children:n})}),Object(i.jsx)("div",{className:"col-2 m-auto",children:(t=new Date(o),"".concat(O(t.getMonth()+1),"-").concat(O(t.getDate()),"-").concat(t.getFullYear()))})]})}r(44);var f=function(e){Object(d.a)(r,e);var t=Object(h.a)(r);function r(){var e;Object(m.a)(this,r);for(var a=arguments.length,c=new Array(a),n=0;n<a;n++)c[n]=arguments[n];return(e=t.call.apply(t,[this].concat(c))).state={employees:[],sorted:!1,arrow:""},e.onSort=function(){var t=e.state.arrow,r=e.state.employees;e.state.sorted?(t="\u25b2"===t?"\u25bc":"\u25b2",r.reverse()):(t=t="\u25b2",r.sort()),e.setState({employees:r,sorted:!0,arrow:t})},e}return Object(j.a)(r,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://randomuser.me/api/?results=20").then((function(t){if("error"===t.data.status)throw new Error(t.data.message);var r=t.data.results;r.map((function(e){return e.toString=function(){return this.name.first}})),e.setState({employees:r,sorted:!1,arrow:""})})).catch(console.error)}},{key:"render",value:function(){var e=this;return Object(i.jsxs)("ul",{className:"directory my-3 mx-auto text-center",children:[Object(i.jsxs)("li",{className:"row py-3",children:[Object(i.jsx)("strong",{className:"col-2 m-auto",children:"Image"}),Object(i.jsxs)("strong",{className:"sortable col-2 m-auto",onClick:this.onSort,children:[this.state.arrow," Name"]}),Object(i.jsx)("strong",{className:"col-3 m-auto",children:"Phone"}),Object(i.jsx)("strong",{className:"col-3 m-auto",children:"Email"}),Object(i.jsx)("strong",{className:"col-2 m-auto",children:"DOB"})]}),this.state.employees.filter((function(t){return"".concat(t.name.first," ").concat(t.name.last).toLowerCase().includes(e.props.query.toLowerCase())})).map((function(e){return Object(i.jsx)(x,{image:e.picture.medium,name:"".concat(e.name.first," ").concat(e.name.last),phone:e.phone,email:e.email,dob:e.dob.date},e.login.uuid)}))]})}}]),r}(a.Component);function g(){var e=Object(a.useState)(""),t=Object(s.a)(e,2),r=t[0],c=t[1];return Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(l,{}),Object(i.jsx)(u,{onChange:function(e){return c(e.target.value)}}),Object(i.jsx)(f,{query:r})]})}r(45);o.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(g,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.1c6230c1.chunk.js.map