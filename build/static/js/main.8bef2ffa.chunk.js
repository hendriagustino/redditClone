(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(t,e,n){"use strict";n.r(e);var a=n(0),o=n.n(a),i=n(7),r=n.n(i),l=n(1),c=n(2),s=n(4),p=n(3),u=n(5),d=n(8),m={fontSize:"15px",width:"900px",height:"28px",padding:"7px 7px",border:"1px solid black",marginBottom:"10px"},h={fontSize:"15px",width:"900px",height:"50px",padding:"7px 7px",border:"1px solid black",resize:"none"},x=function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(s.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(o)))).state={title:"",text:""},n.handleChange=function(t){n.setState(Object(d.a)({},t.target.id,t.target.value))},n.resetForm=function(){document.getElementById("myForm").reset()},n.handleClick=function(t){t.preventDefault();var e={title:n.state.title,text:n.state.text};n.props.addTopic(e,t),n.resetForm()},n}return Object(u.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("form",{id:"myForm"},o.a.createElement("input",{type:"text",id:"title",onChange:this.handleChange,maxLength:"50",style:m,placeholder:"Title"}),o.a.createElement("textarea",{type:"text",id:"text",onChange:this.handleChange,maxLength:"255",style:h,placeholder:"Text (optional)"}),o.a.createElement("br",null),o.a.createElement("button",{type:"submit",value:"Submit",onClick:this.handleClick},"Submit")))}}]),e}(a.Component),v={width:"75vw",height:"165px",border:"1px solid black",marginBottom:"10px",borderRadius:"5px",paddingLeft:"10px"},g={height:"100px",marginBottom:"10px"},b={fontSize:"20px"},f=function(t){function e(){var t,n;Object(l.a)(this,e);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(n=Object(s.a)(this,(t=Object(p.a)(e)).call.apply(t,[this].concat(o)))).state={topic:[]},n.addTopic=function(t,e){n.setState({topic:n.state.topic.concat({title:t.title,text:t.text,vote:0})})},n.renderVoteCount=function(t){return n.state.topic[t].vote>=0?n.state.topic[t].vote:0},n}return Object(u.a)(e,t),Object(c.a)(e,[{key:"render",value:function(){var t=this,e=this.state.topic.sort(function(t,e){return e.vote-t.vote}).slice(0,20);return console.log(e),o.a.createElement("div",null,o.a.createElement(x,{addTopic:this.addTopic}),o.a.createElement("hr",null),o.a.createElement("div",null,this.state.topic.map(function(e,n){return o.a.createElement("div",{key:n,style:v},o.a.createElement("div",{style:g},o.a.createElement("h1",null,e.title),o.a.createElement("p",null,e.text)),o.a.createElement("div",null,o.a.createElement("button",{style:b,onClick:function(){var e=Object.assign({},t.state);e.topic[n].vote+=1,t.setState(e)}},"+"),o.a.createElement("span",{style:{marginLeft:"10px"}},t.renderVoteCount(n),"\xa0"),o.a.createElement("button",{style:b,onClick:function(){var e=Object.assign({},t.state);e.topic[n].vote-=1,t.setState(e)}},"-")))})))}}]),e}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"REDDIT CLONE"),o.a.createElement(f,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})},9:function(t,e,n){t.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.8bef2ffa.chunk.js.map