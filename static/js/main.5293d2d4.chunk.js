(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a(21)},16:function(e,t,a){},18:function(e,t,a){},19:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(3),c=a.n(o),s=(a(16),a(1)),l=a.n(s),i=a(4),u=a(5),h=a(6),m=a(8),d=a(7),b=a(9),p=function(e){var t=e.id,a=e.name,n=e.email;return r.a.createElement("div",{className:"bg-light-green dib br2 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(t,"?200x200"),alt:"robots"}),r.a.createElement("div",null,r.a.createElement("h2",null,a),r.a.createElement("p",null,n)))},f=(a(18),function(e){var t=e.robots.map(function(e,t){return r.a.createElement(p,{key:t,id:e.id,name:e.name,email:e.email})});return r.a.createElement("div",null,t)}),g=function(e){var t=e.searchChange;return r.a.createElement("div",{className:"pd2"},r.a.createElement("input",{className:"pa3 ma3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},v=function(e){return r.a.createElement("div",{style:{overflow:"scroll",border:"1px solid black",height:"800px"}},e.children)},w=(a(19),function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={robots:[],searchField:""},a.componentDidMount=Object(i.a)(l.a.mark(function e(){var t,n;return l.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://jsonplaceholder.typicode.com/users");case 2:return t=e.sent,e.next=5,t.json();case 5:n=e.sent,a.setState({robots:n});case 7:case"end":return e.stop()}},e)})),a.onSearchChange=function(e){a.setState({searchField:e.target.value})},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.state,t=e.robots,a=e.searchField,n=t.filter(function(e){return e.name.toLowerCase().includes(a.toLowerCase())});return t.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"RoboFriends"),r.a.createElement(g,{searchChange:this.onSearchChange}),r.a.createElement(v,null,r.a.createElement(f,{robots:n}))):r.a.createElement("h1",{className:"tc"},"Loading")}}]),t}(r.a.Component));a(20),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[10,1,2]]]);
//# sourceMappingURL=main.5293d2d4.chunk.js.map