(this.webpackJsonpgithubapi=this.webpackJsonpgithubapi||[]).push([[0],{10:function(e,t,n){e.exports={content:"Users_content__27IPi",input:"Users_input__1DgkJ",container:"Users_container__3kM5X",name:"Users_name__2v9Ev",repo:"Users_repo___lA9m"}},2:function(e,t,n){e.exports={content:"User_content__2ANsS",exit:"User_exit__3Ryc6",profile:"User_profile__3MiXF",profile_info:"User_profile_info__yLF6A",bio:"User_bio__3T4NC",input:"User_input__1Tb1B",repos_info:"User_repos_info__2XK8G",repos_name:"User_repos_name__ZKgEM",repos_stats:"User_repos_stats__2M9V9",stats_forks:"User_stats_forks__1Oe4Q",stats_stars:"User_stats_stars__3lkG5",not_found:"User_not_found__H-Kuc"}},30:function(e,t,n){},35:function(e,t,n){},56:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(12),c=n.n(s),a=(n(30),n(3)),o=(n(35),n(7)),i=n(5),u=n.n(i),l=n(8),f=n(24),j=n.n(f).a.create({baseURL:"https://api.github.com/"}),b=function(e){return j.get("search/users?q=".concat(e)).then((function(e){return e.data}))},p=function(e){return j.get("users/".concat(e)).then((function(e){return e.data}))},O=function(e){return j.get("users/".concat(e,"/repos")).then((function(e){return e.data}))},d=function(e,t){return j.get("repos/".concat(e,"/").concat(t)).then((function(e){return e.data}))},_=n(1),h=function(e){var t=Object(a.b)(),n=Object(r.useState)({}),s=Object(o.a)(n,2),c=s[0],i=s[1],f=Object(r.useState)(!1),b=Object(o.a)(f,2),p=b[0],O=b[1],d=function(e){return j.get("users/".concat(e)).then((function(e){return e.data}))};return Object(r.useEffect)((function(){var n;O(!0),t((n=e.userLogin,Object(l.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d(n);case 2:t=e.sent,i(t);case 4:case"end":return e.stop()}}),e)}))))),O(!1)}),[]),Object(_.jsx)(_.Fragment,{children:0==p?Object(_.jsxs)(_.Fragment,{children:[c.public_repos?" Repo:  ".concat(c.public_repos):"ERROR"," "]}):Object(_.jsx)("p",{children:"Loading..."})})},x=n(9),E=Object(x.a)((function(e){return e.userPage.users}),(function(e){return e})),m=Object(x.a)((function(e){return e.userPage.mode}),(function(e){return e})),v=Object(x.a)((function(e){return e.userPage.user}),(function(e){return e})),g=Object(x.a)((function(e){return e.userPage.repos}),(function(e){return e})),w=Object(x.a)((function(e){return e.userPage.repo}),(function(e){return e})),R=n(6),U={users:[],user:{},repos:[],repo:{},mode:!1},S=function(e){return{type:"GH/USER-REDUCER-TAKEUSERS",users:e}},N=function(e){return{type:"GH/USER-REDUCER-SETUSER",user:e}},k=function(e){return{type:"GH/USER-REDUCER-SETREPOS",repos:e}},C=function(e){return{type:"GH/USER-REDUCER-SETREPO",repo:e}},D=function(e){return{type:"GH/USER-REDUCER-SETMOD",mod:e}},F=function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b(e);case 2:r=t.sent,n(S(r.items));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},T=n(10),y=n.n(T),P=function(){var e=Object(a.c)(E),t=Object(a.b)(),n=Object(r.useState)(""),s=Object(o.a)(n,2),c=s[0],i=s[1],f=Object(r.useState)(!1),j=Object(o.a)(f,2),b=j[0],d=j[1];return Object(r.useEffect)((function(){d(!0),t(F("A")),d(!1)}),[]),Object(r.useEffect)((function(){t(F(c))}),[c]),Object(_.jsxs)("div",{className:y.a.content,children:[Object(_.jsx)("input",{type:"text",onChange:function(e){return i(e.target.value)},value:c,className:y.a.input,placeholder:"Search for Users"}),0==b?e.map((function(e){return Object(_.jsxs)("div",{className:y.a.container,onClick:function(){var n;t((n=e.login,function(){var e=Object(l.a)(u.a.mark((function e(t){var r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(N({})),e.next=3,p(n);case 3:r=e.sent,t(N(r));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),t(function(e){return function(){var t=Object(l.a)(u.a.mark((function t(n){var r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O(e);case 2:r=t.sent,n(k(r));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(e.login)),t(D(!0))},children:[Object(_.jsx)("div",{children:Object(_.jsx)("img",{src:e.avatar_url,alt:"",width:"75px",height:"75px"})}),Object(_.jsx)("div",{className:y.a.name,children:e.login}),Object(_.jsx)("div",{className:y.a.repo,children:Object(_.jsx)(h,{userLogin:e.login})})]},e.id)})):Object(_.jsx)("p",{children:"Loading..."})]})},G={10:"#53a4cf",100:"#7b62a3",500:"#b97fc9",1e3:"#fd7d24",2e3:"#a4acaf",5e3:"#729f3f",8e3:"#f7de3f",1e4:"#eed535",2e4:"#FFFFF0",5e4:"#eed535",1e5:"#191970",5e5:"#C71585",1e6:"#4B0082"},H=n(2),L=n.n(H),A=function(){var e,t=Object(a.c)(v),n=Object(a.c)(g),s=Object(a.c)(w),c=Object(r.useState)(""),i=Object(o.a)(c,2),f=i[0],j=i[1],b=Object(a.b)();return Object(r.useEffect)((function(){b(function(e,t){return function(){var n=Object(l.a)(u.a.mark((function n(r){var s;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(C({})),n.next=3,d(e,t);case 3:s=n.sent,r(C(s));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}(t.login,f))}),[f]),t.followers<=10?e="10":t.followers<=100&&t.followers>10?e="100":t.followers<=500&&t.followers>100?e="500":t.followers<=1e3&&t.followers>50?e="1000":t.followers<=2e3&&t.followers>1e3?e="2000":t.followers<=5e3&&t.followers>2e3?e="5000":t.followers<=8e3&&t.followers>5e3?e="8000":t.followers<=1e4&&t.followers>8e3?e="10000":t.followers<=2e4&&t.followers>1e4?e="20000":t.followers<=5e4&&t.followers>2e4?e="50000":t.followers<=1e5&&t.followers>5e4?e="100000":t.followers<=5e5&&t.followers>1e5?e="500000":t.followers<=1e6&&t.followers>5e5&&(e="1000000"),Object(_.jsxs)("div",{className:L.a.content,children:[Object(_.jsx)("button",{className:L.a.exit,onClick:function(){b(D(!1))},children:"X"}),Object(_.jsxs)("div",{className:L.a.profile,children:[Object(_.jsx)("div",{className:L.a.img,children:Object(_.jsx)("img",{src:t.avatar_url,alt:"",width:"150px",height:"150px"})}),Object(_.jsxs)("div",{className:L.a.profile_info,children:[Object(_.jsx)("p",{children:t.login}),Object(_.jsx)("p",{children:null==t.email?"":"Email:".concat(t.email)}),Object(_.jsxs)("p",{children:[" ",null==t.location?"":"Location:".concat(t.location)]}),Object(_.jsxs)("p",{children:["Join Date: ",t.created_at]}),Object(_.jsxs)("p",{style:{fontWeight:800,color:G[e]},children:[" ",t.followers," Followers"]}),Object(_.jsxs)("p",{children:["Following ",t.following]})]})]}),Object(_.jsx)("div",{className:L.a.bio,children:Object(_.jsx)("p",{children:t.bio})}),Object(_.jsx)("input",{type:"text",onChange:function(e){return j(e.target.value)},value:f,placeholder:"Search for Users's Repositories",className:L.a.input}),Object(_.jsx)("div",{children:""==f?n.map((function(e){return Object(_.jsxs)("div",{className:L.a.repos_info,children:[Object(_.jsx)("div",{className:L.a.repos_name,children:e.name}),Object(_.jsxs)("div",{className:L.a.repos_stats,children:[Object(_.jsxs)("div",{className:L.a.stats_forks,children:[e.forks," Forks"]}),Object(_.jsxs)("div",{className:L.a.stats_stars,children:[e.stargazers_count," Stars"]})]})]})})):Object(_.jsx)("div",{children:s.name?Object(_.jsxs)("div",{className:L.a.repos_info,children:[Object(_.jsx)("div",{className:L.a.repos_name,children:s.name?s.name:""}),Object(_.jsxs)("div",{className:L.a.repos_stats,children:[Object(_.jsx)("div",{className:L.a.stats_forks,children:s.forks?"".concat(s.forks," Forks"):"0"}),Object(_.jsx)("div",{className:L.a.stats_stars,children:s.stargazers_count?"".concat(s.stargazers_count," Stars"):"0"})]})]}):Object(_.jsx)("div",{className:L.a.not_found,children:Object(_.jsx)("p",{children:"NOT FOUND"})})})})]})},M=function(){var e=Object(a.c)(m);return Object(_.jsxs)("div",{className:"App",children:[Object(_.jsx)("p",{children:"GitHub Search"}),0==e?Object(_.jsx)(P,{}):Object(_.jsx)(A,{})]})},X=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,57)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;n(e),r(e),s(e),c(e),a(e)}))},K=n(11),B=n(25),I=Object(K.b)({userPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GH/USER-REDUCER-TAKEUSERS":return Object(R.a)(Object(R.a)({},e),{},{users:t.users});case"GH/USER-REDUCER-SETUSER":return Object(R.a)(Object(R.a)({},e),{},{user:t.user});case"GH/USER-REDUCER-SETREPOS":return Object(R.a)(Object(R.a)({},e),{},{repos:t.repos});case"GH/USER-REDUCER-SETREPO":return Object(R.a)(Object(R.a)({},e),{},{repo:t.repo});case"GH/USER-REDUCER-SETMOD":return Object(R.a)(Object(R.a)({},e),{},{mode:t.mod});default:return e}}}),J=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||K.c,z=Object(K.d)(I,J(Object(K.a)(B.a)));window.__store__=z;var V=z;c.a.render(Object(_.jsx)(a.a,{store:V,children:Object(_.jsx)(M,{})}),document.getElementById("root")),X()}},[[56,1,2]]]);
//# sourceMappingURL=main.8da319a7.chunk.js.map