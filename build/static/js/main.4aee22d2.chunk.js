(this.webpackJsonphackernews=this.webpackJsonphackernews||[]).push([[0],{20:function(e,t){e.exports="data:image/gif;base64,R0lGODlhEgASAKIAAP/jyvihV/aKLfmxc/////9mAAAAAAAAACH5BAAAAAAALAAAAAASABIAAAMpWLrc/jDKOQkRy8pBhuKeRAAKQFBBxwVUYY5twXVxodV3nLd77f9ASQIAOw=="},26:function(e,t,a){e.exports=a(53)},31:function(e,t,a){},52:function(e,t,a){},53:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(15),s=a.n(r),l=(a(31),a(2)),o=a.n(l),i=a(4),u=a(3),m=a(16),p=a(17),f=a(24),d=a(18),h=a(25),g=a(19),A=a.n(g);function E(e){return b.apply(this,arguments)}function b(){return(b=Object(u.a)(o.a.mark((function e(t){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,A.a.get("http://hn.algolia.com/api/v1/search?tags=story&page=".concat(t));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var v=a(20),w=a.n(v),j=a(5),O=a(21),y=a.n(O);function N(e){var t=e.score,a=e.id,r=(e.onChange,Object(n.useState)(0)),s=Object(j.a)(r,2),l=s[0],o=s[1],i=Object(n.useState)(t||0),u=Object(j.a)(i,2),m=u[0],p=u[1];return Object(n.useEffect)((function(){var e=localStorage.getItem(a);o(null!==e?1:0)}),[a]),c.a.createElement("p",{className:y()({disabled:l})},m,c.a.createElement("span",{onClick:function(){return function(e){localStorage.setItem(e,!l),o(!l),p(l?m-1:m+1)}(a)}},"upVote"))}var k=a(22),x=a.n(k),S=a(23),D=a.n(S),I=function(e){function t(){var e;return Object(m.a)(this,t),(e=Object(f.a)(this,Object(d.a)(t).call(this))).getFeedsData=function(){var t=Object(u.a)(o.a.mark((function t(a){var n,c;return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({load:!0}),t.next=3,E(a);case 3:n=t.sent,0!==(c=n.data).length&&e.setState({feeds:[].concat(Object(i.a)(e.state.feeds),Object(i.a)(c.hits))}),e.setState({load:!1,totalPages:c.nbPages});case 7:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e.nextItems=function(){e.getFeedsData(e.state.page+1),e.setState({page:e.state.page+1})},e.getDomain=function(e){if(null!==e)return x()(e)},e.state={feeds:[],load:!1,page:0,totalPages:0},e}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){this.getFeedsData(this.state.page)}},{key:"feedsTemplate",value:function(){var e=this;return c.a.createElement("div",{className:"feeds"},this.state.feeds.map((function(t){return c.a.createElement("ul",{key:t.objectID},c.a.createElement("li",{className:"num-comments"},t.num_comments?t.num_comments:0),c.a.createElement("li",{className:"up-score"},c.a.createElement(N,{score:t.relevancy_score,id:t.objectID})),c.a.createElement("li",{className:"title"},t.title,c.a.createElement("span",{className:"base-url grey"},t.url&&c.a.createElement("a",{href:t.url},"(",e.getDomain(t.url),") "),"by"),c.a.createElement("span",null,"".concat(t.author)),c.a.createElement("span",{className:"grey"},c.a.createElement(D.a,{date:t.created_at}))))})),this.state.totalPages!==this.state.page&&c.a.createElement(c.a.Fragment,null,c.a.createElement("ul",null,c.a.createElement("li",{className:"num-comments"}),c.a.createElement("li",{className:"up-score"}),c.a.createElement("li",{className:"title more",onClick:this.nextItems},"More"))))}},{key:"render",value:function(){return c.a.createElement("div",{className:"feeds-wrapper"},c.a.createElement("ul",{className:"header"},c.a.createElement("li",{className:"logo"},c.a.createElement("img",{src:w.a,alt:"load"})),c.a.createElement("li",{className:"label top-label"},"top"),c.a.createElement("li",{className:"label new-label"},"new")),this.feedsTemplate(),this.state.load&&c.a.createElement("div",{className:"loading"},"Loading..."))}}]),t}(n.Component);a(52);var B=function(){return c.a.createElement(I,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(c.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[26,1,2]]]);
//# sourceMappingURL=main.4aee22d2.chunk.js.map