(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{11:function(e,t,n){e.exports=n(23)},17:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(10),o=n.n(s),c=(n(17),n(7)),u=n(5),i=n(4),l=n(6),p=n(2),h=n(3),f=n(8),m=n(1),d=n.n(m),v=(n(21),d.a.mark(w)),b="https://queue.taskcluster.net/v1/task",y="https://cors-dot-wptdashboard-staging.appspot.com",k=new Set(["PASS","OK"]);function w(e){var t;return d.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:t=e.length;case 1:if(!(t>0)){n.next=7;break}return t--,n.next=5,e[t];case 5:n.next=1;break;case 7:case"end":return n.stop()}},v,this)}function g(e,t){return e===t||!(!Array.isArray(e)||!Array.isArray(t))&&(e.length===t.length&&e.every(function(e,n){return e===t[n]}))}function j(e,t){if(e.size!==t.size)return!1;var n=!0,a=!1,r=void 0;try{for(var s,o=e[Symbol.iterator]();!(n=(s=o.next()).done);n=!0){var c=s.value;if(!t.has(c))return!1}}catch(u){a=!0,r=u}finally{try{n||null==o.return||o.return()}finally{if(a)throw r}}return!0}function C(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=new URL("".concat(y,"/").concat(e)),a=[["label","master"],["product","chrome[experimental]"],["product","firefox[experimental]"],["product","safari[experimental]"]],r=0;r<a.length;r++){var s=a[r],o=Object(f.a)(s,2),c=o[0],u=o[1];n.searchParams.append(c,u)}for(var i=Object.keys(t),l=function(){var e=i[p],a=t[e];Array.isArray(a)?a.forEach(function(t){return n.searchParams.append(e,t)}):n.searchParams.append(e,a)},p=0;p<i.length;p++)l();return n}var O=new(function(){function e(){Object(p.a)(this,e),this.url=new URL(window.location),this.params=this.url.searchParams}return Object(h.a)(e,[{key:"_update",value:function(){window.history.replaceState({},document.title,this.url.href)}},{key:"get",value:function(e){return this.params.get(e)}},{key:"has",value:function(e){return this.params.has(e)}},{key:"set",value:function(e,t){this.params.set(e,t),this._update()}},{key:"delete",value:function(e){this.params.delete(e),this._update()}},{key:"append",value:function(e,t){this.params.append(e,t),this._update()}}]),e}()),x=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(u.a)(this,Object(i.a)(t).call(this,e))).onComponentChange=function(e){var t=e.toLowerCase(),a=new Set(n.state.bugComponentsMap.get(t));O.set("bugComponent",e),O.delete("paths"),n.setState({currentBugComponent:t,selectedPaths:a})},n.onPathsChange=function(e){var t=Array.from(e);t.sort(),g(t,n.state.bugComponentsMap.get(n.state.currentBugComponent))?O.delete("paths"):O.set("paths",t.join(",")),n.setState({selectedPaths:e})},n.state={bugComponents:[],bugComponentsMap:new Map,currentBugComponent:null,selectedPaths:new Set,wptRuns:null},n}return Object(l.a)(t,e),Object(h.a)(t,[{key:"loadBugComponentData",value:function(){var e=Object(c.a)(d.a.mark(function e(){var t,n,a,r,s,o,c,u,i,l,p,h,m,v,y,k,g,j,C,x,E,S,P,I,D;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://index.taskcluster.net/v1/task/gecko.v2.mozilla-central.latest.source.source-bugzilla-info");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,a=n.taskId,e.next=9,fetch("".concat(b,"/").concat(a,"/status"));case 9:return r=e.sent,e.next=12,r.json();case 12:s=e.sent,c=!0,u=!1,i=void 0,e.prev=16,l=w(s.status.runs)[Symbol.iterator]();case 18:if(c=(p=l.next()).done){e.next=26;break}if("completed"!==(h=p.value).state){e.next=23;break}return o=h.runId,e.abrupt("break",26);case 23:c=!0,e.next=18;break;case 26:e.next=32;break;case 28:e.prev=28,e.t0=e.catch(16),u=!0,i=e.t0;case 32:e.prev=32,e.prev=33,c||null==l.return||l.return();case 35:if(e.prev=35,!u){e.next=38;break}throw i;case 38:return e.finish(35);case 39:return e.finish(32);case 40:return e.next=42,fetch("".concat(b,"/").concat(a,"/runs/").concat(o,"/artifacts"));case 42:return m=e.sent,e.next=45,m.json();case 45:return v=e.sent,y=v.artifacts.find(function(e){return e.name.endsWith("components-normalized.json")}),e.next=49,fetch("".concat(b,"/").concat(a,"/runs/").concat(o,"/artifacts/").concat(y.name));case 49:return k=e.sent,e.next=52,k.json();case 52:g=e.sent,j=this.processComponentData(g),C=Object(f.a)(j,2),x=C[0],E=C[1],x=Array.from(x).sort(),this.setState({bugComponentsMap:E,bugComponents:x}),!(S=this.state.currentBugComponent)&&O.has("bugComponent")&&(P=O.get("bugComponent"),E.has(P)&&(S=P)),S||(S=x[0].toLowerCase()),I=new Set(E.get(S)),O.has("paths")&&(D=new Set(O.get("paths").split(",")),I=new Set(Array.from(I).filter(function(e){return D.has(e)}))),this.setState({selectedPaths:I,currentBugComponent:S});case 62:case"end":return e.stop()}},e,this,[[16,28,32,40],[33,,35,39]])}));return function(){return e.apply(this,arguments)}}()},{key:"loadWptRunData",value:function(){var e=Object(c.a)(d.a.mark(function e(){var t,n,a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=C("api/runs",{aligned:""}),e.next=3,fetch(t);case 3:return n=e.sent,e.next=6,n.json();case 6:a=e.sent,this.setState({wptRuns:a});case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidMount",value:function(){var e=Object(c.a)(d.a.mark(function e(){var t,n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.loadBugComponentData(),n=this.loadWptRunData(),e.next=4,Promise.all([t,n]);case 4:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"processComponentData",value:function(e){for(var t=e.components,n=e.paths,a=new Map,r=new Map,s="testing/web-platform/tests",o=[[s,n.testing["web-platform"].tests]],c=/(.*)\/[^\/]*$/,u=[];o.length;)for(var i=o.pop(),l=Object(f.a)(i,2),p=l[0],h=l[1],m=!1,d=Object.keys(h),v=0;v<d.length;v++){var b=d[v],y=h[b];if("object"===typeof y){var k="".concat(p,"/").concat(b);o.push([k,y])}else{if(m||p===s)continue;for(var w=p,g=t[y].join("::"),j=g.toLowerCase();w!==s;){if(a.has(w)&&a.get(w)===j){m=!0;break}w=c.exec(w)[1]}m||(a.set(p,j),r.has(j)||(r.set(j,[]),u.push(g)),r.get(j).push(p.slice(s.length)),m=!0)}}return[u,r]}},{key:"render",value:function(){var e=this.state.bugComponentsMap.get(this.state.currentBugComponent);return r.a.createElement("div",{id:"app"},r.a.createElement("header",null,r.a.createElement("h1",null,"wpt interop dashboard")),r.a.createElement("section",{id:"selector"},r.a.createElement(E,{runs:this.state.wptRuns}),r.a.createElement(S,{onComponentChange:this.onComponentChange,components:this.state.bugComponents,value:this.state.currentBugComponent}),r.a.createElement(P,{paths:e,selectedPaths:this.state.selectedPaths,onChange:this.onPathsChange})),r.a.createElement("section",{id:"details"},r.a.createElement(B,null,r.a.createElement(D,{label:"Firefox-only Failures",failsIn:["firefox"],passesIn:["safari","chrome"],runs:this.state.wptRuns,paths:Array.from(this.state.selectedPaths)},r.a.createElement("h2",null,"Firefox-only Failures"),r.a.createElement("p",null,"Tests that pass in Chrome and Safari but fail in Firefox.")),r.a.createElement(D,{label:"All Firefox Failures",failsIn:["firefox"],passesIn:[],runs:this.state.wptRuns,paths:Array.from(this.state.selectedPaths)},r.a.createElement("h2",null,"All Firefox Failures"),r.a.createElement("p",null,"Tests that fail in Firefox")))))}}]),t}(a.Component),E=function(e){function t(){return Object(p.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){if(!this.props.runs)return null;var e=this.props.runs[0].revision,t=C("",{sha:this.props.runs[0].full_revision_hash});return r.a.createElement("dl",null,r.a.createElement("dt",null,"wpt SHA1:"),r.a.createElement("dd",null,r.a.createElement("a",{href:t},e)))}}]),t}(a.Component),S=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).handleChange=function(e){n.props.onComponentChange(e.target.value)},n}return Object(l.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this.props.components.map(function(e){return r.a.createElement("option",{value:e.toLowerCase(),key:e.toLowerCase()},e)});return this.props.value?r.a.createElement("section",null,r.a.createElement("label",null,"Bug Component: "),r.a.createElement("select",{onChange:this.handleChange,value:this.props.value},e)):null}}]),t}(a.Component),P=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(u.a)(this,Object(i.a)(t).call(this,e))).onCheckboxChange=function(e,t){var a=new Set(n.state.paths);t?a.add(e):a.delete(e),n.setState({paths:a})},n.onUpdateClick=function(){n.props.onChange(n.state.paths)},n.state={paths:new Set(n.props.paths)},n}return Object(l.a)(t,e),Object(h.a)(t,[{key:"componentDidUpdate",value:function(e){e.selectedPaths!==this.props.selectedPaths&&this.setState({paths:new Set(this.props.selectedPaths)})}},{key:"render",value:function(){var e=this;if(!this.props.paths)return null;var t=this.props.paths.sort().map(function(t){return r.a.createElement("li",{key:t},r.a.createElement(I,{checked:e.props.selectedPaths.has(t),value:t,onCheckboxChange:e.onCheckboxChange}),t)});return r.a.createElement("section",null,r.a.createElement("h2",null,"Test Paths"),r.a.createElement("button",{onClick:this.onUpdateClick,disabled:j(this.state.paths,this.props.selectedPaths)},"Update"),r.a.createElement("ul",{id:"test-paths"},t))}}]),t}(a.Component),I=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(u.a)(this,Object(i.a)(t).call(this,e))).handleChange=function(e){n.setState({checked:!!e.target.checked}),n.props.onCheckboxChange(n.props.value,e.target.checked)},n.state={checked:n.props.checked},n}return Object(l.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("input",{name:this.props.path,type:"checkbox",checked:this.state.checked,onChange:this.handleChange})}}]),t}(a.Component),D=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(u.a)(this,Object(i.a)(t).call(this,e))).state={loaded:!1,results:[]},n}return Object(l.a)(t,e),Object(h.a)(t,[{key:"buildQuery",value:function(){var e={run_ids:this.props.runs.map(function(e){return e.id}),query:{and:[]}},t=e.query.and,n=!0,a=!1,r=void 0;try{for(var s,o=this.props.failsIn[Symbol.iterator]();!(n=(s=o.next()).done);n=!0){var c=s.value,u=!0,i=!1,l=void 0;try{for(var p,h=k[Symbol.iterator]();!(u=(p=h.next()).done);u=!0){var f=p.value;t.push({not:{browser_name:c,status:f}})}}catch(I){i=!0,l=I}finally{try{u||null==h.return||h.return()}finally{if(i)throw l}}}}catch(I){a=!0,r=I}finally{try{n||null==o.return||o.return()}finally{if(a)throw r}}var m=!0,d=!1,v=void 0;try{for(var b,y=this.props.passesIn[Symbol.iterator]();!(m=(b=y.next()).done);m=!0){var w=b.value,g=void 0;if(k.size>1){var j={or:[]};t.push(j),g=j.or}else g=t;var C=!0,O=!1,x=void 0;try{for(var E,S=k[Symbol.iterator]();!(C=(E=S.next()).done);C=!0){var P=E.value;g.push({browser_name:w,status:P})}}catch(I){O=!0,x=I}finally{try{C||null==S.return||S.return()}finally{if(O)throw x}}}}catch(I){d=!0,v=I}finally{try{m||null==y.return||y.return()}finally{if(d)throw v}}return this.props.paths.length>1?t.push({or:this.props.paths.map(function(e){return{pattern:e}})}):t.push({pattern:this.props.paths[0]}),e}},{key:"fetchResults",value:function(){var e=Object(c.a)(d.a.mark(function e(){var t,n,a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.buildQuery(),e.next=3,fetch(C("api/search",{}),{method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json"}});case 3:return n=e.sent,e.next=6,n.json();case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;if(!this.props.runs||!this.state.loaded)return r.a.createElement("div",null,this.props.children,r.a.createElement("p",null,"Loading\u2026"));if(null===this.state.results.results)return r.a.createElement("div",null,this.props.children,r.a.createElement("p",null,"Load failed"));if(!this.state.results.results.length)return r.a.createElement("div",null,this.props.children,r.a.createElement("p",null,"No results"));var t=this.state.results.results.map(function(t){return r.a.createElement(A,{failsIn:e.props.failsIn,passesIn:e.props.passesIn,runs:e.props.runs,result:t,key:t.test})});return t.sort(function(e,t){return e.key>t.key?1:e.key===t.key?0:-1}),r.a.createElement("div",null,this.props.children,r.a.createElement("ul",null,t))}},{key:"componentDidMount",value:function(){var e=Object(c.a)(d.a.mark(function e(){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchIfPossible({});case 2:case"end":return e.stop()}},e,this)}));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(){var e=Object(c.a)(d.a.mark(function e(t){return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchIfPossible(t);case 2:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"fetchIfPossible",value:function(){var e=Object(c.a)(d.a.mark(function e(t){var n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(null!==this.props.runs){e.next=2;break}return e.abrupt("return");case 2:if(this.props.paths){e.next=4;break}return e.abrupt("return");case 4:if(!(this.state.loaded&&g(this.props.paths,t.paths)&&g(this.props.failsIn,t.failsIn)&&g(this.props.passesIn,t.passesIn))){e.next=6;break}return e.abrupt("return");case 6:if(this.props.paths.length){e.next=9;break}return this.setState({results:{results:[]},loaded:!0}),e.abrupt("return");case 9:return e.next=11,this.fetchResults();case 11:n=e.sent,this.setState({results:n,loaded:!0});case 13:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()}]),t}(a.Component),A=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(u.a)(this,Object(i.a)(t).call(this,e))).handleClick=function(){n.setState({showDetails:!n.state.showDetails})},n.state={showDetails:!1},n}return Object(l.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e="http://w3c-test.org".concat(this.props.result.test),t=C("results/".concat(this.props.result.test)),n="http://searchfox.org/mozilla-central/source/testing/web-platform/meta".concat(this.props.result.test,".ini");return r.a.createElement("li",{className:"tree-row"+(this.state.showDetails?" tree-row-expanded":"")},r.a.createElement("span",{onClick:this.handleClick},this.state.showDetails?"\u25bc":"\u25b6",r.a.createElement("code",null,this.props.result.test)),"[",r.a.createElement("a",{href:e},"test"),"] [",r.a.createElement("a",{href:t},this.props.result.legacy_status[0].total," subtests"),"] [",r.a.createElement("a",{href:n},"gecko metadata"),"]",this.state.showDetails?r.a.createElement("div",{className:"tree-row"},r.a.createElement(M,{runs:this.props.runs,visible:this.state.showDetails,test:this.props.result.test,passesIn:this.props.passesIn,failsIn:this.props.failsIn})):"")}}]),t}(a.Component),M=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(u.a)(this,Object(i.a)(t).call(this,e))).state={loaded:!1,results:null},n}return Object(l.a)(t,e),Object(h.a)(t,[{key:"processResultData",value:function(e){var t=this,n=new Map,a=!0,r=!1,s=void 0;try{for(var o,c=e[Symbol.iterator]();!(a=(o=c.next()).done);a=!0){var u=o.value,i=Object(f.a)(u,2),l=i[0],p=i[1];n.has(null)||n.set(null,new Map),n.get(null).set(l,{status:p.status,message:p.message});var h=!0,m=!1,d=void 0;try{for(var v,b=p.subtests[Symbol.iterator]();!(h=(v=b.next()).done);h=!0){var y=v.value;n.has(y.name)||n.set(y.name,new Map),n.get(y.name).set(l,{status:y.status,message:y.message})}}catch(I){m=!0,d=I}finally{try{h||null==b.return||b.return()}finally{if(m)throw d}}}}catch(I){r=!0,s=I}finally{try{a||null==c.return||c.return()}finally{if(r)throw s}}var w=new Map,g=!0,j=!1,C=void 0;try{for(var O,x=function(){var e=O.value,n=(S=Object(f.a)(e,2))[0],a=S[1];t.props.passesIn.every(function(e){return k.has(a.get(e).status)})&&t.props.failsIn.every(function(e){return!k.has(a.get(e).status)})&&w.set(n,a)},E=n[Symbol.iterator]();!(g=(O=E.next()).done);g=!0){var S;x()}}catch(I){j=!0,C=I}finally{try{g||null==E.return||E.return()}finally{if(j)throw C}}var P=[];return w.has(null)&&(P.push([null,w.get(null)]),w.delete(null)),P.concat(Array.from(w))}},{key:"componentDidMount",value:function(){var e=Object(c.a)(d.a.mark(function e(){var t,n,a,r,s,o,c,u,i,l,p,h,m,v,b,y,k,w,g,j,C;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:for(t=new Map,n=!0,a=!1,r=void 0,e.prev=4,s=this.props.runs[Symbol.iterator]();!(n=(o=s.next()).done);n=!0)c=o.value,u=c.browser_name,i=c.results_url,(l=i.split("-")).pop(),p="".concat(l.join("-")).concat(this.props.test),t.set(u,fetch(p).then(function(e){return e.json()}));e.next=12;break;case 8:e.prev=8,e.t0=e.catch(4),a=!0,r=e.t0;case 12:e.prev=12,e.prev=13,n||null==s.return||s.return();case 15:if(e.prev=15,!a){e.next=18;break}throw r;case 18:return e.finish(15);case 19:return e.finish(12);case 20:return e.next=22,Promise.all(Array.from(t.values()));case 22:h=!0,m=!1,v=void 0,e.prev=25,b=t[Symbol.iterator]();case 27:if(h=(y=b.next()).done){e.next=41;break}return k=y.value,w=Object(f.a)(k,2),g=w[0],j=w[1],e.t1=t,e.t2=g,e.next=36,j;case 36:e.t3=e.sent,e.t1.set.call(e.t1,e.t2,e.t3);case 38:h=!0,e.next=27;break;case 41:e.next=47;break;case 43:e.prev=43,e.t4=e.catch(25),m=!0,v=e.t4;case 47:e.prev=47,e.prev=48,h||null==b.return||b.return();case 50:if(e.prev=50,!m){e.next=53;break}throw v;case 53:return e.finish(50);case 54:return e.finish(47);case 55:C=this.processResultData(t),this.setState({results:C,loaded:!0});case 57:case"end":return e.stop()}},e,this,[[4,8,12,20],[13,,15,19],[25,43,47,55],[48,,50,54]])}));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this;if(!this.props.visible)return null;if(!this.state.loaded)return r.a.createElement("p",null,"Loading");var t=this.props.runs.map(function(e){return r.a.createElement("th",{key:e.browser_name},e.browser_name)}),n=this.state.results.map(function(t){var n=Object(f.a)(t,2),a=n[0],s=n[1];return r.a.createElement(_,{key:a,runs:e.props.runs,subtest:a,results:s})});return r.a.createElement("table",{className:"results"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null),t)),r.a.createElement("tbody",null,n))}}]),t}(a.Component),_=function(e){function t(){return Object(p.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=this.props.runs.map(function(t){var n=e.props.results.get(t.browser_name);return r.a.createElement(R,{result:n,key:t.browser_name})});return r.a.createElement("tr",null,r.a.createElement("th",null,this.props.subtest?this.props.subtest:"<parent>"),t)}}]),t}(a.Component),R=function(e){function t(){return Object(p.a)(this,t),Object(u.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("td",{className:"result result-".concat(this.props.result.status.toLowerCase()),title:this.props.result.message},this.props.result.status)}}]),t}(a.Component),B=function(e){function t(e){var n;return Object(p.a)(this,t),(n=Object(u.a)(this,Object(i.a)(t).call(this,e))).handleClickTab=function(e){n.setState({activeTab:e}),O.set("tab",e)},n.state={activeTab:O.get("tab")||n.props.children[0].props.label},n}return Object(l.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){var e=this,t=this.props.children.map(function(t){var n=t.props.label;return r.a.createElement(L,{active:e.state.activeTab===n,label:n,key:n,onClick:e.handleClickTab})}),n=this.props.children.find(function(t){return t.props.label===e.state.activeTab});return r.a.createElement("div",{className:"tab-view"},r.a.createElement("ol",{className:"tab-strip"},t),r.a.createElement("div",{className:"tab-content"},n))}}]),t}(a.Component),L=function(e){function t(){var e,n;Object(p.a)(this,t);for(var a=arguments.length,r=new Array(a),s=0;s<a;s++)r[s]=arguments[s];return(n=Object(u.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(r)))).onClick=function(){n.props.onClick(n.props.label)},n}return Object(l.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("li",{className:"tab-label "+(this.props.active?"tab-active":""),onClick:this.onClick},this.props.label)}}]),t}(a.Component),T=x;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[11,2,1]]]);
//# sourceMappingURL=main.580c9025.chunk.js.map