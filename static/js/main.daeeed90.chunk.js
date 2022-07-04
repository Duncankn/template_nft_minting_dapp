(this.webpackJsonptemplate_nft_minting_dapp=this.webpackJsonptemplate_nft_minting_dapp||[]).push([[0],{225:function(t,n){},249:function(t,n){},251:function(t,n){},328:function(t,n){},330:function(t,n){},340:function(t,n){},342:function(t,n){},367:function(t,n){},373:function(t,n){},386:function(t,n){},409:function(t,n){},483:function(t,n,e){},484:function(t,n,e){},485:function(t,n,e){"use strict";e.r(n);var c=e(3),a=e(76),o=e.n(a),r=e(13),s=e.n(r),i=e(26),l=e(44),u=e(19),O=e(61),p=e.n(O),b=e(202),j=e.n(b),d=e(62),f=e(203),h=e(16),C={loading:!1,account:null,smartContract:null,web3:null,errorMsg:""},m=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CONNECTION_REQUEST":return Object(h.a)(Object(h.a)({},C),{},{loading:!0});case"CONNECTION_SUCCESS":return Object(h.a)(Object(h.a)({},t),{},{loading:!1,account:n.payload.account,smartContract:n.payload.smartContract,web3:n.payload.web3});case"CONNECTION_FAILED":return Object(h.a)(Object(h.a)({},C),{},{loading:!1,errorMsg:n.payload});case"UPDATE_ACCOUNT":return Object(h.a)(Object(h.a)({},t),{},{account:n.payload.account});default:return t}},S={loading:!1,symbol:"",totalSupply:0,maxSupply:0,cost:0,balanceOf:0,walletOfOwner:[],error:!1,errorMsg:""},g=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"CHECK_DATA_REQUEST":return Object(h.a)(Object(h.a)({},t),{},{loading:!0,error:!1,errorMsg:""});case"CHECK_DATA_SUCCESS":return Object(h.a)(Object(h.a)({},t),{},{loading:!1,symbol:n.payload.symbol,totalSupply:n.payload.totalSupply,maxSupply:n.payload.maxSupply,cost:n.payload.cost,balanceOf:n.payload.balanceOf,walletOfOwner:n.payload.walletOfOwner,error:!1,errorMsg:""});case"CHECK_DATA_FAILED":return Object(h.a)(Object(h.a)({},S),{},{loading:!1,error:!0,errorMsg:n.payload});default:return t}},N=Object(d.b)({blockchain:m,data:g}),x=[f.a],A=Object(d.c)(d.a.apply(void 0,x)),y=Object(d.d)(N,A),E=function(t){return{type:"CHECK_DATA_SUCCESS",payload:t}},T=function(t){return{type:"CHECK_DATA_FAILED",payload:t}},v=function(t){return function(){var n=Object(i.a)(s.a.mark((function n(e){var c,a,o,r,i,l;return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e({type:"CHECK_DATA_REQUEST"}),n.prev=1,n.next=4,y.getState().blockchain.smartContract.methods.symbol().call();case 4:return c=n.sent,n.next=7,y.getState().blockchain.smartContract.methods.totalSupply().call();case 7:return a=n.sent,n.next=10,y.getState().blockchain.smartContract.methods.maxSupply().call();case 10:return o=n.sent,n.next=13,y.getState().blockchain.smartContract.methods.cost().call();case 13:return r=n.sent,n.next=16,y.getState().blockchain.smartContract.methods.balanceOf(t).call();case 16:return i=n.sent,n.next=19,y.getState().blockchain.smartContract.methods.walletOfOwner(t).call();case 19:l=n.sent,e(E({symbol:c,totalSupply:a,maxSupply:o,cost:r,balanceOf:i,walletOfOwner:l})),n.next=27;break;case 23:n.prev=23,n.t0=n.catch(1),console.log(n.t0),e(T("Could not load data from contract."));case 27:case"end":return n.stop()}}),n,null,[[1,23]])})));return function(t){return n.apply(this,arguments)}}()},_=function(t){return{type:"CONNECTION_FAILED",payload:t}},w=function(){return function(){var t=Object(i.a)(s.a.mark((function t(n){var e,c,a,o,r,i,l,u,O;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n({type:"CONNECTION_REQUEST"}),t.next=3,fetch("/config/abi.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 3:return e=t.sent,t.next=6,e.json();case 6:return c=t.sent,t.next=9,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 9:return a=t.sent,t.next=12,a.json();case 12:if(o=t.sent,r=window,i=r.ethereum,!(i&&i.isMetaMask)){t.next=33;break}return p.a.setProvider(i),l=new j.a(i),t.prev=18,t.next=21,i.request({method:"eth_requestAccounts"});case 21:return u=t.sent,t.next=24,i.request({method:"net_version"});case 24:t.sent==o.NETWORK.ID?(O=new p.a(c,o.CONTRACT_ADDRESS),n({type:"CONNECTION_SUCCESS",payload:{account:u[0],smartContract:O,web3:l}}),i.on("accountsChanged",(function(t){n(M(t[0]))})),i.on("chainChanged",(function(){window.location.reload()}))):n(_("Change network to ".concat(o.NETWORK.NAME,"."))),t.next=31;break;case 28:t.prev=28,t.t0=t.catch(18),n(_("Something went wrong."));case 31:t.next=34;break;case 33:n(_("Install Metamask."));case 34:case"end":return t.stop()}}),t,null,[[18,28]])})));return function(n){return t.apply(this,arguments)}}()},M=function(t){return function(){var n=Object(i.a)(s.a.mark((function n(e){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e({type:"UPDATE_ACCOUNT",payload:{account:t}}),e(v(t));case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},D=e(6);function I(){var t,n,e=Object(u.b)(),a=Object(u.c)((function(t){return t.blockchain})),o=Object(u.c)((function(t){return t.data})),r=Object(c.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),O=Object(l.a)(r,2),p=O[0],b=O[1],j=function(){""!==a.account&&null!==a.smartContract&&e(v(a.account))},d=function(){var t=Object(i.a)(s.a.mark((function t(){var n,e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return n=t.sent,t.next=5,n.json();case 5:e=t.sent,b(e);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){d()}),[]),Object(c.useEffect)((function(){j()}),[a.account]),Object(D.jsxs)("nav",{children:[Object(D.jsx)("img",{className:"nav--logo",src:"/config/images/logo.png"}),null===a.account||null===a.contract?Object(D.jsxs)("div",{children:[Object(D.jsx)("button",{className:"nav--button",onClick:function(){e(w()),j()},children:"Connect"}),Object(D.jsxs)("p",{children:["Connect to the ",p.NETWORK.NAME," network"]})]}):Object(D.jsxs)("div",{children:[Object(D.jsxs)("button",{className:"nav--button",children:[" ",(t=a.account,n=7,t.length>n?"".concat(t.substring(0,n),"..."):t)," "]}),Object(D.jsxs)("p",{className:"hero--text",children:[p.SYMBOL," : ",o.balanceOf]})]})]})}function k(){var t=Object(u.b)(),n=Object(u.c)((function(t){return t.blockchain})),e=Object(u.c)((function(t){return t.data})),a=Object(c.useState)(!1),o=Object(l.a)(a,2),r=o[0],O=o[1],p=Object(c.useState)("Click buy to mint your NFT."),b=Object(l.a)(p,2),j=(b[0],b[1]),d=Object(c.useState)(1),f=Object(l.a)(d,2),h=f[0],C=f[1],m=Object(c.useState)({CONTRACT_ADDRESS:"",SCAN_LINK:"",NETWORK:{NAME:"",SYMBOL:"",ID:0},NFT_NAME:"",SYMBOL:"",MAX_SUPPLY:1,WEI_COST:0,DISPLAY_COST:0,GAS_LIMIT:0,MARKETPLACE:"",MARKETPLACE_LINK:"",SHOW_BACKGROUND:!1}),S=Object(l.a)(m,2),g=S[0],N=S[1],x=function(){""!==n.account&&null!==n.smartContract&&t(v(n.account))},A=function(){var t=Object(i.a)(s.a.mark((function t(){var n,e;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/config/config.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}});case 2:return n=t.sent,t.next=5,n.json();case 5:e=t.sent,N(e);case 7:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){A()}),[]),Object(c.useEffect)((function(){x()}),[n.account]),Object(D.jsxs)("div",{className:"main-content",children:[Object(D.jsxs)("div",{className:"hero",children:[Object(D.jsx)("p",{className:"hero--text",children:"It a template NFT minting DAPP. Please connect the wallet to Harmony Testnet. Try to mint some NFTs."}),Object(D.jsxs)("p",{className:"hero--text",children:["Contract Address: ",g.CONTRACT_ADDRESS]})]}),Object(D.jsxs)("div",{className:"mint--container",children:[Object(D.jsxs)("h1",{className:"minted-amount",children:[e.totalSupply," / ",e.maxSupply]}),Object(D.jsxs)("h2",{children:["1 ",g.SYMBOL," costs ",g.DISPLAY_COST," ",g.NETWORK.SYMBOL,"."]}),Object(D.jsxs)("div",{className:"quantity--container",children:[Object(D.jsx)("button",{className:"round-button",onClick:function(t){t.preventDefault(),function(){var t=h-1;t<1&&(t=1),C(t)}()},children:"-"}),Object(D.jsx)("h3",{children:h}),Object(D.jsx)("button",{className:"round-button",onClick:function(t){t.preventDefault(),function(){var t=h+1;t>10&&(t=10),C(t)}()},children:"+"})]}),Object(D.jsx)("button",{className:"nav--button",disabled:r?1:0,onClick:function(e){e.preventDefault(),function(){var e=g.WEI_COST,c=g.GAS_LIMIT,a=String(e*h),o=String(c*h);console.log("Cost: ",a),console.log("Gas limit: ",o),j("Minting your ".concat(g.NFT_NAME,"...")),O(!0),n.smartContract.methods.mint(h).send({gasLimit:String(o),to:g.CONTRACT_ADDRESS,from:n.account,value:a}).once("error",(function(t){console.log(t),j("Sorry, something went wrong please try again later."),O(!1)})).then((function(e){console.log(e),j("WOW, the ".concat(g.NFT_NAME," is yours! go visit Opensea.io to view it.")),O(!1),t(v(n.account))}))}(),x()},children:"Mint"})]})]})}e(483);function L(t){var n="https://dweb.link/ipfs/QmTB3d5hkv3gEa7K9BvDpvgYfwGXu7PfcLuhCVgXtbMwAP/"+t.id+".png";return Object(D.jsxs)("div",{className:"card__box",children:[Object(D.jsx)("img",{className:"card__image",src:n,alt:"example"}),Object(D.jsxs)("h2",{className:"card__name",children:["The Art"," # ",t.id]})]})}var R=function(){Object(u.b)();var t=Object(u.c)((function(t){return t.data})).walletOfOwner;return Object(D.jsxs)("div",{children:[Object(D.jsx)("h1",{className:"myCollection--title",children:"My Collection"}),Object(D.jsx)("div",{className:"myCollection",children:t.map((function(t){return Object(D.jsx)(D.Fragment,{children:Object(D.jsx)(L,{id:t})})}))})]})};var K=function(){return Object(D.jsxs)("div",{className:"screen--container",children:[Object(D.jsx)(I,{}),Object(D.jsx)(k,{}),Object(D.jsx)(R,{})]})},P=function(t){t&&t instanceof Function&&e.e(3).then(e.bind(null,489)).then((function(n){var e=n.getCLS,c=n.getFID,a=n.getFCP,o=n.getLCP,r=n.getTTFB;e(t),c(t),a(t),o(t),r(t)}))};e(484);o.a.render(Object(D.jsx)(u.a,{store:y,children:Object(D.jsx)(K,{})}),document.getElementById("root")),P()}},[[485,1,2]]]);
//# sourceMappingURL=main.daeeed90.chunk.js.map