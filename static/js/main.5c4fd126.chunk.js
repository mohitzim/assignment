(this.webpackJsonpassignment=this.webpackJsonpassignment||[]).push([[0],{26:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c(0),i=c.n(r),s=c(19),o=c.n(s),d=(c(26),c.p,c(9)),a=c(10),l=c(12),j=c(11),h={header:{backgroundColor:"#f1f1f1",padding:"10px",height:"50px",textAlign:"left"},menuItem:{cursor:"pointer"},menuActive:{cursor:"pointer",borderBottom:"1px solid red"},headerContainer:{backgroundColor:"#f1f1f1",padding:"10px",height:"50px"}},u=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(e){var n;return Object(d.a)(this,c),(n=t.call(this,e)).name="A1",n.status="Online",n}return Object(a.a)(c,[{key:"render",value:function(){return console.log("header..."),Object(n.jsx)("div",{style:h.header,children:Object(n.jsxs)("div",{class:"row",children:[Object(n.jsx)("div",{class:"col-9",children:Object(n.jsx)("h3",{children:"Shopping Cart"})}),Object(n.jsx)("div",{class:"col-3",children:"Cart"})]})})}}]),c}(r.Component),p={alignLeft:{textAlign:"left"},listing:{padding:"10px 0",borderBottom:"1px solid #ccc"}},b=c(8),O=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(e){var n;return Object(d.a)(this,c),(n=t.call(this,e)).state={error:null,isLoaded:!1,products:[]},n}return Object(a.a)(c,[{key:"componentDidMount",value:function(){var e=this;fetch("https://fakestoreapi.com/products").then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,products:t})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){console.log("prod-lising...");var e=this.state,t=(e.error,e.isLoaded,e.products);return Object(n.jsxs)("div",{style:p.alignLeft,children:[t.map((function(e){return Object(n.jsxs)("div",{class:"row",style:p.listing,children:[Object(n.jsx)("div",{class:"col-6",children:Object(n.jsx)(b.b,{to:"/product/"+e.id,activeClassName:"activeLink",children:e.title})}),Object(n.jsx)("div",{class:"col-3",children:e.price}),Object(n.jsx)("div",{class:"col-3",children:"Add"})]},e.id)})),Object(n.jsx)("div",{class:"row",style:p.listing,children:Object(n.jsx)("div",{class:"col-12",children:"row2"})})]})}}]),c}(r.Component),x=function(e){Object(l.a)(c,e);var t=Object(j.a)(c);function c(e){var n;return Object(d.a)(this,c),n=t.call(this,e),console.log("History :: ",n.props.match),n.state={error:null,isLoaded:!1,productDetail:{}},n}return Object(a.a)(c,[{key:"componentDidMount",value:function(){var e=this;console.log("componentDidMount :: ",this.props.match),fetch("https://fakestoreapi.com/products/"+this.props.match.params.id).then((function(e){return e.json()})).then((function(t){e.setState({isLoaded:!0,productDetail:t})}),(function(t){e.setState({isLoaded:!0,error:t})}))}},{key:"render",value:function(){console.log("prod-detail..");var e=this.state,t=(e.error,e.isLoaded,e.productDetail);return console.log(t),Object(n.jsx)("div",{children:Object(n.jsxs)("div",{class:"row",children:[Object(n.jsx)("div",{class:"col-5",children:Object(n.jsx)("img",{src:t.image,width:"100%"})}),Object(n.jsx)("div",{class:"col-7",children:Object(n.jsx)("div",{class:"row",children:Object(n.jsxs)("div",{class:"col-12",children:[Object(n.jsx)("div",{children:Object(n.jsx)("h4",{children:t.title})}),Object(n.jsx)("div",{children:Object(n.jsx)("h3",{children:t.price})}),Object(n.jsxs)("div",{children:[Object(n.jsx)("b",{children:"Category:"})," ",t.category]}),Object(n.jsx)("br",{}),Object(n.jsx)("div",{children:t.description})]})})})]})})}}]),c}(r.Component),v=(c(32),c(2));var f=function(){return Object(n.jsx)(b.a,{forceRefresh:!0,children:Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)("header",{children:Object(n.jsx)(u,{})}),Object(n.jsx)(v.a,{exact:!0,path:"/products",component:O}),Object(n.jsx)(v.a,{path:"/product/:id",component:x})]})})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,34)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),i(e),s(e)}))};o.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(f,{})}),document.getElementById("root")),g()}},[[33,1,2]]]);
//# sourceMappingURL=main.5c4fd126.chunk.js.map