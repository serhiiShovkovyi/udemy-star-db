(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,t,a){},25:function(e,t,a){e.exports=a.p+"static/media/death-star.fd407a1b.svg"},26:function(e,t,a){e.exports=a(49)},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},42:function(e,t,a){},45:function(e,t,a){},46:function(e,t,a){e.exports=a.p+"static/media/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA5My8zNTYvb3JpZ2luYWwvcGxhbmV0MTAuanBn.d41d8cd9.webp"},47:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(22),s=a.n(c),i=(a(31),a(2)),o=a(3),l=a(7),u=a(6),m=a(8),p=(a(32),a(33),a(9)),d=function(e){var t=e.onServiceChange;return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light rounded"},r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarsExample10","aria-controls":"navbarsExample10","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("span",{className:"Logo float-left"},r.a.createElement(p.b,{className:"flow",to:"/"},"Star-db")),r.a.createElement("div",{className:"collapse navbar-collapse justify-content-md-center",id:"navbarsExample10"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item m-left"},r.a.createElement(p.b,{className:"nav-link ",to:"/people/"},"People")),r.a.createElement("li",{className:"nav-item m-left"},r.a.createElement(p.b,{className:"nav-link",to:"/planets/"},"Planets")),r.a.createElement("li",{className:"nav-item m-left"},r.a.createElement(p.b,{className:"nav-link",to:"/starships/"},"Starships")),r.a.createElement("li",{className:"nav-item m-left"},r.a.createElement(p.b,{className:"nav-link",to:"/login"},"Log in")),r.a.createElement("li",{className:"nav-item m-left"},r.a.createElement(p.b,{className:"nav-link",to:"/secret"},"Secret page"))),r.a.createElement("button",{onClick:t,className:"btn btn-primary btn-sm"},"Change service")))},f=a(25),h=a.n(f),g=(a(42),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"err"},r.a.createElement("img",{src:h.a,width:128,height:128,alt:""}),r.a.createElement("h2",{className:"h2"},"BOOM!"),r.a.createElement("p",{className:"p"},"something has gone terribly wrong"))}}]),t}(n.Component)),v=a(1),b=a.n(v),E=a(5),w=function(){function e(){var t=this;Object(i.a)(this,e),this._apiBase="https://swapi.co/api",this.getPersonImage=function(e){var t=e.id;return"https://starwars-visualguide.com/assets/img/characters/".concat(t,".jpg")},this.getStarshipImage=function(e){var t=e.id;return"https://starwars-visualguide.com/assets/img/starships/".concat(t,".jpg")},this.getPlanetImage=function(e){var t=e.id;return"https://starwars-visualguide.com/assets/img/planets/".concat(t,".jpg")},this.getAllStarship=Object(E.a)(b.a.mark(function e(){var a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/starships/");case 2:return a=e.sent,e.abrupt("return",a.results.map(t._transformStarship));case 4:case"end":return e.stop()}},e)})),this.getStarship=function(){var e=Object(E.a)(b.a.mark(function e(a){var n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/starships/".concat(a));case 2:return n=e.sent,e.abrupt("return",t._transformStarship(n));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),this.getAllPeople=Object(E.a)(b.a.mark(function e(){var a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/people/");case 2:return a=e.sent,e.abrupt("return",a.results.map(t._transformPerson));case 4:case"end":return e.stop()}},e)})),this.getPerson=function(){var e=Object(E.a)(b.a.mark(function e(a){var n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/people/".concat(a));case 2:return n=e.sent,e.abrupt("return",t._transformPerson(n));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),this.getAllPlanets=Object(E.a)(b.a.mark(function e(){var a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/planets/");case 2:return a=e.sent,e.abrupt("return",a.results.map(t._transformPlanet));case 4:case"end":return e.stop()}},e)})),this.getPlanet=function(){var e=Object(E.a)(b.a.mark(function e(a){var n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/planets/".concat(a));case 2:return n=e.sent,e.abrupt("return",t._transformPlanet(n));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),this._extractId=function(e){return e.url.match(/\/([0-9]*)\/$/)[1]},this._transformStarship=function(e){return{id:t._extractId(e),name:e.name,model:e.model,manufacturer:e.manufacturer,costInCredits:e.cost_in_credits,length:e.length,crew:e.crew,passengers:e.passengers,cargoCapacity:e.cargoCapacity}},this._transformPerson=function(e){return{id:t._extractId(e),name:e.name,gender:e.gender,birthYear:e.birth_year,eyeColor:e.eye_color}},this._transformPlanet=function(e){return{id:t._extractId(e),name:e.name,population:e.population,period:e.rotation_period,diameter:e.diameter}}}return Object(o.a)(e,[{key:"getResource",value:function(){var e=Object(E.a)(b.a.mark(function e(t){var a,n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this._apiBase).concat(t));case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(t,", received ").concat(a.status));case 5:return e.next=7,a.json();case 7:return n=e.sent,e.abrupt("return",n);case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),e}(),y=function(){function e(){var t=this;Object(i.a)(this,e),this._apiBase="https://swapi.co/api",this.getPersonImage=function(e){var t=e.id;return"https://starwars-visualguide.com/assets/img/characters/".concat(t,".jpg")},this.getStarshipImage=function(e){var t=e.id;return"https://starwars-visualguide.com/assets/img/starships/".concat(t,".jpg")},this.getPlanetImage=function(e){var t=e.id;return"https://starwars-visualguide.com/assets/img/planets/".concat(t,".jpg")},this.getAllStarship=Object(E.a)(b.a.mark(function e(){var a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/starships/");case 2:return a=e.sent,e.abrupt("return",a.results.map(t._transformStarship));case 4:case"end":return e.stop()}},e)})),this.getStarship=function(){var e=Object(E.a)(b.a.mark(function e(a){var n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/starships/".concat(a));case 2:return n=e.sent,e.abrupt("return",t._transformStarship(n));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),this.getAllPeople=Object(E.a)(b.a.mark(function e(){var a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/people/");case 2:return a=e.sent,console.log(a),e.abrupt("return",a.results.map(t._transformPerson));case 5:case"end":return e.stop()}},e)})),this.getPerson=function(){var e=Object(E.a)(b.a.mark(function e(a){var n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/people/".concat(a));case 2:return n=e.sent,e.abrupt("return",t._transformPerson(n));case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),this.getAllPlanets=Object(E.a)(b.a.mark(function e(){var a;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/planets/");case 2:return a=e.sent,e.abrupt("return",a.results.map(t._transformPlanet));case 4:case"end":return e.stop()}},e)})),this.getPlanet=function(){var e=Object(E.a)(b.a.mark(function e(a){var n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getResource("/planets/".concat(a));case 2:return n=e.sent,console.log(t._transformPlanet(n)),e.abrupt("return",t._transformPlanet(n));case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),this._extractId=function(e){return e.url.match(/\/([0-9]*)\/$/)[1]},this._transformStarship=function(e){return console.log(e),{id:t._extractId(e),name:"dummy"+e.name,model:"dummy"+e.model,manufacturer:"dummy"+e.manufacturer,costInCredits:e.cost_in_credits,length:e.length,crew:"dummy"+e.crew,passengers:"dummy"+e.passengers,cargoCapacity:e.cargoCapacity}},this._transformPerson=function(e){return{id:t._extractId(e),name:"dummy"+e.name,gender:"dummy"+e.gender,birthYear:"dummy"+e.birth_year,eyeColor:"dummy"+e.eye_color}},this._transformPlanet=function(e){return{id:t._extractId(e),name:"dummy"+e.name,population:e.population,period:e.rotation_period,diameter:e.diameter}}}return Object(o.a)(e,[{key:"getResource",value:function(){var e=Object(E.a)(b.a.mark(function e(t){var a,n;return b.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(this._apiBase).concat(t));case 2:if((a=e.sent).ok){e.next=5;break}throw new Error("Could not fetch ".concat(t,", received ").concat(a.status));case 5:return e.next=7,a.json();case 7:return n=e.sent,e.abrupt("return",n);case 9:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),e}(),j=r.a.createContext(),O=j.Provider,I=j.Consumer,x=(a(45),a(46),a(47),function(){return r.a.createElement("div",{className:"lds-css ng-scope"},r.a.createElement("div",{className:"lds-double-ring"},r.a.createElement("div",null),r.a.createElement("div",null)))}),N=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={planet:{},loading:!0},a.swapiService=new w,a.onError=function(e){},a.onPlanetLoaded=function(e){a.setState({planet:e,loading:!1})},a.updatePlanet=function(){var e=Math.floor(25*Math.random()+3);a.swapiService.getPlanet(e).then(a.onPlanetLoaded).catch(a.onError)},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.props.updateInterval;this.updatePlanet(),this.interval=setInterval(this.updatePlanet,5e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"render",value:function(){var e=this.state,t=e.planet,a=e.loading,n=a?r.a.createElement(x,{className:"float-center"}):null,c=a?null:r.a.createElement(k,{planet:t});return r.a.createElement("div",{className:"d-flex m-20 random-planet"},n,c)}}]),t}(n.Component);N.defaultProps={updateInterval:5e3};var k=function(e){var t=e.planet,a=t.id,n=t.name,c=t.population,s=t.period,i=t.diameter;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"img"},r.a.createElement("img",{src:"https://starwars-visualguide.com/assets/img/planets/".concat(a,".jpg"),alt:"Planet",width:150})),r.a.createElement("div",{className:"info"},r.a.createElement("ul",null,r.a.createElement("li",{className:"population"},r.a.createElement("h5",null,n)),r.a.createElement("li",{className:"population"},r.a.createElement("p",{className:"pop"},"Population: ",c)),r.a.createElement("hr",null),r.a.createElement("li",{className:"period"},r.a.createElement("p",{className:"pop"},"Rotation period: ",s)),r.a.createElement("hr",null),r.a.createElement("li",{className:"dia"},r.a.createElement("p",{className:"pop"},"Diameter: ",i)))))},P=N,S=a(13),_=(a(21),function(e){var t=e.item,a=e.field,n=e.label;return r.a.createElement("li",{className:"list-group-item"},r.a.createElement("span",{className:"term"},n),r.a.createElement("span",null,t[a]))}),C=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={item:null,image:null},a.swapiService=new w,a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){this.updateItem()}},{key:"componentDidUpdate",value:function(e){this.props.itemId===e.itemId&&this.props.getData===e.getData&&this.props.getImageUrl===e.getImageUrl||this.updateItem()}},{key:"updateItem",value:function(){var e=this,t=this.props,a=t.itemId,n=t.getData,r=t.getImageUrl;a&&n(a).then(function(t){return e.setState({item:t,image:r(t)})})}},{key:"render",value:function(){if(!this.state.item)return r.a.createElement(x,null);var e=this.state.item,t=(e.id,e.name),a=(e.gender,e.birthYear,e.eyeColor,this.state.item);return r.a.createElement("div",{className:"person-details d-flex"},r.a.createElement("div",{className:"image"},r.a.createElement("img",{src:this.state.image,alt:"",width:"150"})),r.a.createElement("div",{className:"card-body"},r.a.createElement("h4",null,t),r.a.createElement("ul",{className:"list-group"},r.a.Children.map(this.props.children,function(e){return r.a.cloneElement(e,{item:a})}))))}}]),t}(n.Component),D=function(e){return function(t){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(l.a)(this,(e=Object(u.a)(a)).call.apply(e,[this].concat(r)))).state={data:null,loading:!0,error:!1},t}return Object(m.a)(a,t),Object(o.a)(a,[{key:"componentDidUpdate",value:function(e){this.props.getData!==e.getData&&this.update()}},{key:"componentDidMount",value:function(){this.update()}},{key:"update",value:function(){var e=this;this.setState({loading:!0,error:!1}),console.log("loading"),this.props.getData().then(function(t){e.setState({data:t,loading:!1})}).catch(function(){e.setState({error:!0,loading:!1})})}},{key:"render",value:function(){var t=this.state,a=t.data,n=t.loading,c=t.error;return n?r.a.createElement(x,null):c?r.a.createElement(g,null):r.a.createElement(e,Object.assign({},this.props,{data:a}))}}]),a}(n.Component)},L=function(e){return function(t){return function(a){return r.a.createElement(I,null,function(n){var c=e(n);return r.a.createElement(t,Object.assign({},a,c))})}}},A=function(e){return function(t){return function(a){return r.a.createElement(t,a,e)}}},R=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return function(e){return t.reduceRight(function(e,t){return t(e)},e)}},M=L(function(e){return{getData:e.getPlanet,getImageUrl:e.getPlanetImage}})(function(e){return r.a.createElement(C,e,r.a.createElement(_,{field:"population",label:"Population "}),r.a.createElement(_,{field:"rotationPeriod",label:"Rotation period "}),r.a.createElement(_,{field:"diameter",label:"Diameter "}))}),U=L(function(e){return{getData:e.getPerson,getImageUrl:e.getPersonImage}})(function(e){return r.a.createElement(C,e,r.a.createElement(_,{field:"gender",label:"Gender "}),r.a.createElement(_,{field:"eyeColor",label:"Eye color "}))}),B=L(function(e){return{getData:e.getStarship,getImageUrl:e.getStarshipImage}})(function(e){return r.a.createElement(C,e,r.a.createElement(_,{field:"model",label:"Model "}),r.a.createElement(_,{field:"length",label:"Length "}),r.a.createElement(_,{field:"costInCredits",label:"Cost in credits "}))}),W=(a(48),function(e){var t=e.data,a=e.onItemSelected,n=e.children,c=t.map(function(e){var t=e.id,c=n(e);return r.a.createElement("li",{className:"list-group-item",key:t,onClick:function(){return a(t)}},c)});return r.a.createElement("ul",{className:"list-group"},c)});W.defaultProps={onItemSelected:function(){}};var Y=W,Z=function(e){var t=e.name;return r.a.createElement("span",null,t)},T=R(L(function(e){return{getData:e.getAllPeople}}),D,A(Z))(Y),z=R(L(function(e){return{getData:e.getAllPlanets}}),D,A(Z))(Y),J=R(L(function(e){return{getData:e.getAllStarship}}),D,A(function(e){var t=e.model,a=e.name;return r.a.createElement("span",null,a,", (",t,")")}))(Y),G=function(e){var t=e.left,a=e.right;return r.a.createElement("div",{className:"row mb-2"},r.a.createElement("div",{className:"col-md-6"},t),r.a.createElement("div",{className:"col-md-6"},a))},V=(Object(S.f)(function(e){var t=e.match,a=e.history,n=t.params.id;return r.a.createElement(G,{left:r.a.createElement(U,{itemId:n}),right:r.a.createElement(T,{onItemSelected:function(e){a.push(e)}})})}),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={selectedItem:1},a.onItemSelected=function(e){a.setState({selectedItem:e})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state.selectedItem;return r.a.createElement(G,{left:r.a.createElement(M,{itemId:e}),right:r.a.createElement(z,{onItemSelected:this.onItemSelected})})}}]),t}(n.Component)),$=Object(S.f)(function(e){var t=e.history;return r.a.createElement(J,{onItemSelected:function(e){t.push(e)}})}),F=function(e){return e.isLoggedIn?r.a.createElement("div",null,r.a.createElement("h3",null,"This page is full of secrets")):r.a.createElement(S.a,{to:"/login"})},H=function(e){var t=e.isLoggedIn,a=e.onLogin;return t?r.a.createElement(S.a,{to:"/"}):r.a.createElement("div",{className:"jumbotron"},r.a.createElement("p",null,"Login to see secret page"),r.a.createElement("button",{className:"btn btn-primary",onClick:a},"Login"))},X=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).swapiService=new w,a.state={hasError:!1,isLoggedIn:!1,swapiService:new w},a.onLogin=function(){a.setState({isLoggedIn:!0})},a.onServiceChange=function(){a.setState(function(e){return{swapiService:new(e.swapiService instanceof w?y:w)}})},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"componentDidCatch",value:function(){this.setState({hasError:!0})}},{key:"render",value:function(){var e=this;if(this.state.hasError)return r.a.createElement(g,null);var t=this.state.isLoggedIn;return r.a.createElement(O,{value:this.state.swapiService},r.a.createElement(p.a,null,r.a.createElement(d,{onServiceChange:this.onServiceChange}),r.a.createElement("div",{className:"contain container"},r.a.createElement(P,null),r.a.createElement("div",{className:"d-block"},r.a.createElement(S.d,null,r.a.createElement(S.b,{path:"/",exact:!0,render:function(){return r.a.createElement("h2",null,"Welcome to StarDB")}}),r.a.createElement(S.b,{path:"/people",exact:!0,render:function(){return r.a.createElement("h2",null,"People")}}),r.a.createElement(S.b,{path:"/planets",component:V}),r.a.createElement(S.b,{path:"/starships",exact:!0,component:$}),r.a.createElement(S.b,{path:"/starships/:id",render:function(e){var t=e.match,a=(e.location,e.history,t.params.id);return r.a.createElement(B,{itemId:a})}}),r.a.createElement(S.b,{path:"/login",render:function(){return r.a.createElement(H,{isLoggedIn:!1,onLogin:e.onLogin})}}),r.a.createElement(S.b,{path:"/secret",render:function(){return r.a.createElement(F,{isLoggedIn:t})}}),r.a.createElement(S.b,{render:function(){return r.a.createElement("h2",null,"Page not found")}}))))))}}]),t}(n.Component),q=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(X,null))}}]),t}(n.Component);s.a.render(r.a.createElement(q,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.1b7deb57.chunk.js.map