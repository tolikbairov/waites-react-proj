(this["webpackJsonpwaites-react-proj"]=this["webpackJsonpwaites-react-proj"]||[]).push([[0],{36:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){"use strict";c.r(t);var n=c(27),r=c.n(n),o=c(15),s=c(17),i=c.n(s),j=c(28),a=c(10),l=(c(36),c(3)),d=c(29),u=c.n(d),b=c(61),h=c(1);var O=function(e){var t=e.todos;return Object(h.jsxs)(b.a,{dark:!0,children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"id"}),Object(h.jsx)("th",{children:"user id"}),Object(h.jsx)("th",{children:"Title"}),Object(h.jsx)("th",{children:"Completed"})]})}),Object(h.jsx)("tbody",{children:t&&t.map((function(e){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:e.id}),Object(h.jsx)("td",{children:e.userId}),Object(h.jsx)("td",{children:e.title}),Object(h.jsx)("td",{children:e.completed?"true":"false"})]},e.id)}))})]})},x=c(62),f=c(63),p=c(64),g=c(30),m=c.n(g),v=function(e){for(var t=e.todosPerPage,c=e.totalTodos,n=e.paginate,r=e.currentPage,o=[],s=1;s<=Math.ceil(c/t);s+=1)o.push(s);return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(x.a,{"aria-label":"Page navigation example",children:[Object(h.jsx)(f.a,{children:Object(h.jsx)(p.a,{first:!0,href:"#",onClick:function(){return n(1)}})}),Object(h.jsx)(f.a,{children:Object(h.jsx)(p.a,{previous:!0,href:"#",onClick:function(){return n(r-1)}})}),o.map((function(e){return Object(h.jsx)(f.a,{children:Object(h.jsx)(p.a,{href:"#",onClick:function(){return n(e)},children:e})},m()())})),Object(h.jsx)(f.a,{children:Object(h.jsx)(p.a,{next:!0,href:"#",onClick:function(){return n(r+1)}})}),Object(h.jsx)(f.a,{children:Object(h.jsx)(p.a,{last:!0,href:"#",onClick:function(){return n(o.length)}})})]})})},C=c(65),w=c(66),I=c(67),T=c(68),k=c(69);function S(){var e=Object(l.useState)([]),t=Object(a.a)(e,2),c=t[0],n=t[1],r=Object(l.useState)(1),s=Object(a.a)(r,2),d=s[0],b=s[1],x=Object(l.useState)(10),f=Object(a.a)(x,2),p=f[0],g=f[1],m=Object(l.useState)("Todo Id"),S=Object(a.a)(m,2),y=S[0],P=S[1];Object(l.useEffect)((function(){var e=function(){var e=Object(j.a)(i.a.mark((function e(){var t,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u.a.get("https://jsonplaceholder.typicode.com/todos/");case 2:t=e.sent,console.log(t),c=t.data,console.log(c),n(c);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(l.useEffect)((function(){!function(e){var t={"Todo Id":"id","User Id":"userId",Title:"title",Completed:"completed"}[e],r=[];"id"===t||"userId"===t?r=Object(o.a)(c).sort((function(e,c){return e[t]-c[t]})):"title"===t?r=Object(o.a)(c).sort((function(e,c){var n=e[t].toLowerCase(),r=c[t].toLowerCase();return n<r?-1:n>r?1:0})):"completed"===t&&(r=Object(o.a)(c).sort((function(e,c){var n=e[t].toString().toLowerCase(),r=c[t].toString().toLowerCase();return n<r?-1:n>r?1:0}))),console.log(r),n(r)}(y)}),[y]);var L=d*p,E=L-p,F=c.slice(E,L);return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)(C.a,{fluid:!0,children:[Object(h.jsx)(w.a,{children:Object(h.jsxs)("div",{className:"d-flex justify-content-end",children:[Object(h.jsxs)(I.a,{children:[Object(h.jsx)(T.a,{for:"exampleSelect",children:"select items per page"}),Object(h.jsxs)(k.a,{type:"select",name:"select",id:"exampleSelect",onChange:function(e){g(e.currentTarget.value)},children:[Object(h.jsx)("option",{children:"10"}),Object(h.jsx)("option",{children:"20"}),Object(h.jsx)("option",{children:"30"}),Object(h.jsx)("option",{children:"40"}),Object(h.jsx)("option",{children:"50"})]})]}),Object(h.jsxs)(I.a,{children:[Object(h.jsx)(T.a,{for:"sortItems",children:"sort by"}),Object(h.jsxs)(k.a,{type:"select",name:"select",id:"sortItems",onChange:function(e){P(e.currentTarget.value)},children:[Object(h.jsx)("option",{children:"Todo Id"}),Object(h.jsx)("option",{children:"User Id"}),Object(h.jsx)("option",{children:"Title"}),Object(h.jsx)("option",{children:"Completed"})]})]})," "]})}),Object(h.jsx)(O,{todos:F}),Object(h.jsx)(v,{todosPerPage:p,totalTodos:c.length,paginate:function(e){b(e)},currentPage:d})," "]})})}c(58),c(59);r.a.render(Object(h.jsx)(S,{}),document.querySelector("#root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.8e375521.chunk.js.map