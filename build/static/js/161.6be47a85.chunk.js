"use strict";(self.webpackChunkisp_ui_kit_react=self.webpackChunkisp_ui_kit_react||[]).push([[161],{4161:function(e,t,r){r.r(t),r.d(t,{default:function(){return Ee}});var a=r(885),n=r(2982),s=r(6871),i=function(e){var t=e.allRoutes;return(0,s.V$)((0,n.Z)(t))},l=r(1413),o=r(2791),c=r(9434),d=r(3883),u=r(184),m=function(e){var t=e.children,r=e.routeMeta,a=(0,c.I0)(),n="main",s="main"!==n.layout&&!r||"main"!==n.layout&&r&&!r.appLayout,i=s?"div":o.Fragment;return(0,o.useEffect)((function(){return r&&r.menuCollapsed&&a((0,d.mB)(r.menuCollapsed)),function(){r&&r.menuCollapsed&&a((0,d.mB)(!r.menuCollapsed))}}),[r]),(0,u.jsx)(i,(0,l.Z)((0,l.Z)({},s?{className:"content-body overflow-y-scroll h-full"}:{}),{},{children:t}))},x=(0,o.memo)(m),g=function(){var e=(0,o.useState)(!1),t=(0,a.Z)(e,2),r=t[0],n=t[1];return(0,o.useEffect)((function(){return n(!0),function(){return n(!1)}}),[]),r?(0,u.jsx)("div",{className:"w-full h-screen bg-white dark:bg-gray-900",children:(0,u.jsx)(s.j3,{})}):null},f=r(5987),h=r(5571),p=["showOffset","scrollBehaviour"],y=function(e){var t=e.showOffset,r=e.scrollBehaviour,n=(0,f.Z)(e,p),s=(0,o.useState)(!1),i=(0,a.Z)(s,2),c=i[0],d=i[1];(0,o.useEffect)((function(){window&&window.addEventListener("scroll",(function(){window.pageYOffset>=t?d(!0):d(!1)}))}),[]);return c&&(0,u.jsx)("button",(0,l.Z)((0,l.Z)({className:"flex fixed px-3 py-2 w-12 h-12 rounded-lg z-50 bottom-6 right-6 items-center justify-center hover:bg-indigo-700",onClick:function(){window.scroll({top:0,behavior:r})}},n),{},{children:(0,u.jsx)(h.Z,{size:14})}))},v=y;y.defaultProps={scrollBehaviour:"smooth"};var b=r(1694),j=r.n(b),k=r(2195),N=r.n(k),w=r(1460),Z=r(4937),C=r(8155);var z=r.p+"static/media/isp-logo.87045208f3e83460b7e88b5bee6cd431.svg",F=r(8760),P=r(7882),S=r(3197),A=r.n(S),R=r(3504),G=function(e){var t=e.item,r=e.menuCollapsed,n=(0,o.useState)(null),i=(0,a.Z)(n,2),l=i[0],c=i[1],d=(0,s.TH)(),m=(0,s.TH)().pathname;return(0,o.useEffect)((function(){c(m)}),[d]),(0,u.jsx)("div",{children:(0,u.jsxs)(R.rU,{to:t.alias,className:j()(t.alias===l||"/"+t.alias===l?"bg-indigo-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 flex":"flex text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700","group flex items-center py-4 text-base leading-6 rounded-md",r?"justify-center":"px-2"),"aria-current":l?"page":void 0,onClick:function(e){0!==t.alias.length&&"#"!==t.alias&&!0!==t.disabled||e.preventDefault()},children:[(0,u.jsx)("i",{className:j()(r?"":"mr-4","flex-shrink-0 flex items-center text-2xl mdi relative",t.icon),children:t.badgeColor?(0,u.jsx)("span",{className:j()("absolute top-0.5 right-0 inline-flex items-center w-2 h-2 rounded-full text-xs font-medium",t.badgeColor,r?"":"ml-auto")}):null}),r?"":t.pagetitle]})},t.id)},I=r(7762),O=r(2703),E=["item","groupOpen","activeItem","parentItem","groupActive","setGroupOpen","menuCollapsed","setGroupActive","currentActiveGroup","setCurrentActiveGroup"],M=function e(t,r){var a=t.children;if(!a)return!1;var n,s=(0,I.Z)((0,O.gH)(a));try{for(s.s();!(n=s.n()).done;){var i=n.value;if(i.children&&e(i,r))return!0;if(i&&i.alias&&r&&(i.alias===r||r.includes(i.alias)))return!0}}catch(l){s.e(l)}finally{s.f()}return!1},T=function e(t,r,a){t.forEach((function(t){if(!a.includes(t.id)){var n=r.indexOf(t.id);n>-1&&r.splice(n,1),t.children&&e(t.children,r,a)}}))},L=function(e){var t=e.item,r=e.groupOpen,a=e.activeItem,i=e.parentItem,c=e.groupActive,d=e.setGroupOpen,m=e.menuCollapsed,x=e.setGroupActive,g=e.currentActiveGroup,h=e.setCurrentActiveGroup,p=(0,f.Z)(e,E),y=(0,s.TH)(),v=(0,s.TH)().pathname,b=function(e,t){!function(e,t){var a=r,s=c;a.includes(e.id)?(a.splice(a.indexOf(e.id),1),e.children&&T(e.children,a,c)):s.includes(e.id)||g.includes(e.id)?(!s.includes(e.id)&&g.includes(e.id)?s.push(e.id):s.splice(s.indexOf(e.id),1),x((0,n.Z)(s))):t?(t.children&&T(t.children,a,c),a.includes(e.id)||a.push(e.id)):(a=[]).includes(e.id)||a.push(e.id),d((0,n.Z)(a))}(t,i),e.preventDefault()};(0,o.useEffect)((function(){if(M(t,v))c.includes(t.id)||c.push(t.id);else{var e=c.indexOf(t.id);e>-1&&c.splice(e,1)}x((0,n.Z)(c)),h((0,n.Z)(c)),d([])}),[y]);var k;return(0,u.jsx)("div",{className:"space-y-1 w-full",children:(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{className:"w-full",children:(0,u.jsxs)("a",{href:"/",className:j()({open:(k=t.id,m||!1===m?!(!c.includes(k)&&!r.includes(k))||void 0:(!c.includes(k)||!m)&&null)},c.includes(t.id)||r.includes(t.id)||g.includes(t.id)?"bg-indigo-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 flex":"flex text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700","group flex items-center py-4 text-base leading-6 rounded-md  w-full hover:cursor-pointer",m?"justify-end pr-1":"px-2 justify-between"),"aria-current":c.includes(t.id)||r.includes(t.id)||g.includes(t.id)?"page":void 0,onClick:function(e){return b(e,t)},children:[(0,u.jsxs)("div",{className:"flex items-center",children:[(0,u.jsx)("i",{className:j()(m?"":"mr-4","flex-shrink-0 flex items-center text-2xl mdi",t.icon)}),m?"":t.pagetitle]}),(0,u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:j()(c.includes(t.id)||r.includes(t.id)||g.includes(t.id)?"text-gray-400 rotate-90":"text-gray-300","flex-shrink-0 h-4 w-4 transform group-hover:text-gray-400 transition-colors ease-in-out duration-150"),viewBox:"0 0 20 20",fill:"currentColor",children:(0,u.jsx)("path",{fillRule:"evenodd",d:"M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z",clipRule:"evenodd"})})]})}),(0,u.jsx)("div",{className:"space-y-1",children:c.includes(t.id)||r.includes(t.id)||g.includes(t.id)?(0,u.jsx)(H,(0,l.Z)((0,l.Z)({},p),{},{items:(0,O.gH)(t.children),groupActive:c,setGroupActive:x,currentActiveGroup:g,setCurrentActiveGroup:h,groupOpen:r,setGroupOpen:d,parentItem:t,menuCollapsed:m,activeItem:a})):""})]})},t.id)},B=r(5187),_=function(e){var t=e.item,r=e.menuCollapsed;return(0,u.jsxs)("div",{className:"text-gray-400 text-xs font-medium uppercase tracking-wide my-3",children:[r?"":(0,u.jsx)("span",{children:t.header}),r?(0,u.jsx)(B.Z,{className:"feather-more-horizontal"}):""]},t.header)},H=function(e){var t={NavMenuLink:G,NavMenuGroup:L,NavMenuSectionHeader:_};return e.items.map((function(r,a){var n=t[function(e){return e.header?"NavMenuSectionHeader":e.children?"NavMenuGroup":"NavMenuLink"}(r)];return r.children?(0,u.jsx)(n,(0,l.Z)({item:r,index:a,menuCollapsed:e.menuCollapsed},e),r.id||r.header):(0,u.jsx)(n,(0,l.Z)({item:r,menuCollapsed:e.menuCollapsed},e),r.id||r.header)}))},V=function(e){var t=e.menuCollapsed,r=e.menuData,n=e.menuVisibility,s=e.setMenuVisibility,i=e.setMenuCollapsed,l=(0,o.useState)([]),c=(0,a.Z)(l,2),d=c[0],m=c[1],x=(0,o.useState)([]),g=(0,a.Z)(x,2),f=g[0],h=g[1],p=(0,o.useState)([]),y=(0,a.Z)(p,2),v=y[0],b=y[1],k=function(){return t?(0,u.jsx)("button",{className:"sidebar-collapse-button bg-white dark:bg-gray-900 p-1 rounded-full text-gray-400 dark:text-gray-500 dark:hover:text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500",onClick:function(){return i(!1)},children:(0,u.jsx)(F.Z,{})}):(0,u.jsx)("button",{className:"sidebar-collapse-button bg-white dark:bg-gray-900 p-1 rounded-full text-gray-400 dark:text-gray-500 dark:hover:text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500",onClick:function(){return i(!0)},children:(0,u.jsx)(P.Z,{})})};return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(w.u.Root,{show:n,as:o.Fragment,children:(0,u.jsxs)(Z.V,{as:"div",className:"fixed inset-0 flex z-40 lg:hidden",onClose:s,children:[(0,u.jsx)(w.u.Child,{as:o.Fragment,enter:"transition-opacity ease-linear duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"transition-opacity ease-linear duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,u.jsx)(Z.V.Overlay,{className:"fixed inset-0 bg-gray-600 bg-opacity-75"})}),(0,u.jsx)(w.u.Child,{as:o.Fragment,enter:"transition ease-in-out duration-300 transform",enterFrom:"-translate-x-full",enterTo:"translate-x-0",leave:"transition ease-in-out duration-300 transform",leaveFrom:"translate-x-0",leaveTo:"-translate-x-full",children:(0,u.jsxs)("div",{className:"relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-white dark:bg-gray-900 shadow border-r border-gray-200",children:[(0,u.jsx)(w.u.Child,{as:o.Fragment,enter:"ease-in-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in-out duration-300",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,u.jsx)("div",{className:"absolute top-0 right-0 mr-4 pt-4",children:(0,u.jsxs)("button",{type:"button",className:"ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500",onClick:function(){return s(!1)},children:[(0,u.jsx)("span",{className:"sr-only",children:"Close sidebar"}),(0,u.jsx)(C.Z,{className:"h-6 w-6 text-gray-800 dark:text-gray-100","aria-hidden":"true"})]})})}),(0,u.jsx)("div",{className:"flex-shrink-0 flex items-center px-4",children:(0,u.jsx)("img",{className:"h-8 w-auto",src:z,alt:A().APP_NAME})}),(0,u.jsx)("nav",{className:"mt-5 flex-shrink-0 h-full divide-y bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 overflow-y-auto","aria-label":"Sidebar",children:(0,u.jsx)(N(),{className:"main-menu-content",options:{wheelPropagation:!1},children:(0,u.jsx)("div",{className:"px-2 space-y-1",children:(0,u.jsx)(H,{items:r,menuData:r,groupOpen:d,groupActive:f,setGroupOpen:m,setGroupActive:h,currentActiveGroup:v,setCurrentActiveGroup:b})})})})]})}),(0,u.jsx)("div",{className:"flex-shrink-0 w-14","aria-hidden":"true"})]})}),(0,u.jsxs)("div",{className:j()(t?"lg:w-20":"lg:w-64","sidebar-menu relative hidden lg:flex lg:flex-col lg:fixed lg:inset-y-0"),children:[(0,u.jsx)("div",{className:"absolute top-0 right-0 mr-4 pt-4",children:(0,u.jsx)(k,{})}),(0,u.jsxs)("div",{className:"flex flex-col flex-grow shadow bg-white dark:bg-gray-900 pt-5 pb-4 overflow-y-auto border-r border-gray-200 dark:border-gray-600",children:[(0,u.jsx)("div",{className:j()("flex items-center content-center flex-shrink-0 px-4 h-8"),children:t?null:(0,u.jsx)("img",{className:"h-8 w-auto",src:z,alt:A().APP_NAME})}),(0,u.jsx)("nav",{className:"mt-5 flex-1 flex flex-col overflow-y-auto","aria-label":"\u041c\u0435\u043d\u044e",children:(0,u.jsx)(N(),{className:"main-menu-content",options:{wheelPropagation:!1},children:(0,u.jsx)("div",{className:j()("px-2 space-y-1",t?"justify-center":""),children:(0,u.jsx)(H,{items:r,menuData:r,groupOpen:d,groupActive:f,setGroupOpen:m,menuCollapsed:t,setGroupActive:h,currentActiveGroup:v,setCurrentActiveGroup:b})})})})]})]})]})},D=r(6827),q=r(4499),Y=r(7845),J=r(7443),Q=r(1988),U=r(9012),W=r(9803),$=r(6411),K=r(9128),X=r(8804),ee=r(5081),te=r(2426),re=r.n(te),ae=function(e){var t=e.size,r=e.color,a=e.item,n=e.className;return(0,u.jsx)("span",{className:j()("inline-flex items-center rounded-full font-medium",{small:"px-2.5 py-0.5 text-xs",large:"px-3 py-0.5 text-sm"}[t],{red:"bg-red-500/30 text-red-700 dark:text-red-300",orange:"bg-orange-500/30 text-orange-700 dark:text-orange-300",yellow:"bg-yellow-500/30 text-yellow-700 dark:text-yellow-300",green:"bg-green-500/30 text-green-700 dark:text-green-300",cyan:"bg-cyan-500/30 text-cyan-700 dark:text-cyan-300",blue:"bg-blue-500/30 text-blue-700 dark:text-blue-300",indigo:"bg-indigo-500/30 text-indigo-700 dark:text-indigo-300",pink:"bg-pink-500/30 text-pink-700 dark:text-pink-300"}[r],n),children:a})};ae.defaultProps={size:"small",color:"red",item:"\u0411\u0435\u0439\u0434\u0436",className:""};var ne=ae,se=r(2076),ie=function(){return(0,u.jsxs)(J.v,{as:"div",className:"relative inline-block text-left ml-4",children:[(0,u.jsx)("div",{children:(0,u.jsx)(J.v.Button,{className:"messages-dropdown-button bg-white dark:bg-gray-900 p-1 rounded-full text-gray-400 dark:text-gray-500 dark:hover:text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500",children:(0,u.jsx)(X.Z,{className:"h-6 w-6","aria-hidden":"true"})})}),(0,u.jsx)(w.u,{as:o.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,u.jsxs)(J.v.Items,{className:"dark:border dark:border-gray-700 origin-top-right absolute right-0 mt-2 w-96 rounded-md shadow-lg py-1 bg-white dark:bg-gray-900 ring-1 ring-black ring-opacity-5 focus:outline-none divide-y divide-gray-100 dark:divide-gray-800",children:[(0,u.jsxs)("div",{className:"flex px-4 py-3 items-center justify-between",children:[(0,u.jsx)("p",{className:"text-base leading-6 font-medium text-gray-600 dark:text-gray-500",children:"\u041d\u043e\u0432\u044b\u0435 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f"}),ee.sY.length>0?(0,u.jsx)(ne,{color:"red",item:ee.sY.length.toString()}):null]}),ee.sY.length>0?ee.sY.map((function(e){return(0,u.jsx)(J.v.Item,{children:function(t){t.active;return(0,u.jsxs)("div",{className:"flex space-x-3 p-3",children:[(0,u.jsx)(K.q,{size:"6",avatar:e.user.avatar,name:e.user.fullname,color:e.user.color}),(0,u.jsxs)("div",{className:"flex-1 space-y-1",children:[(0,u.jsxs)("div",{className:"flex items-center justify-between",children:[(0,u.jsx)("h3",{className:"text-sm font-medium text-gray-800 dark:text-gray-200",children:(0,O.Qm)(e.user.fullname)}),(0,u.jsx)("p",{className:"text-sm text-gray-500",children:re()(e.time).fromNow()})]}),(0,u.jsx)("p",{className:"text-sm text-gray-500 line-clamp-2",children:e.message})]})]})}},e.id)})):(0,u.jsxs)("div",{className:"text-center p-3",children:[(0,u.jsx)(X.Z,{className:"mx-auto h-12 w-12 text-gray-400"}),(0,u.jsx)("h3",{className:"mt-1 text-sm text-gray-500",children:"\u041d\u043e\u0432\u044b\u0445 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0439 \u043d\u0435\u0442"}),(0,u.jsx)("div",{className:"mt-6",children:(0,u.jsxs)("button",{type:"button",className:"inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",children:[(0,u.jsx)(se.Z,{className:"-ml-1 mr-2 h-5 w-5","aria-hidden":"true"}),"\u041d\u0430\u043f\u0438\u0441\u0430\u0442\u044c \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u0435"]})})]})]})})]})},le=r(4724),oe=r(2579),ce=r(6140),de=r(8029),ue=function(e){var t=(0,c.I0)(),r=e.user,n=e.menuCollapsed,s=e.setMenuVisibility,i=function(){var e=(0,c.I0)(),t=(0,c.v9)((function(e){return e.layout}));return(0,o.useEffect)((function(){var e=window.document.body;e.classList.remove("dark","light"),e.classList.add({dark:"dark",light:"light"}[t.skin])}),[t.skin]),{skin:t.skin,setSkin:function(t){e((0,d.vh)(t))}}}(),l=i.skin,m=i.setSkin,x=(0,o.useState)(1),g=(0,a.Z)(x,2),f=g[0],h=g[1];(0,o.useEffect)((function(){document.getElementsByTagName("html")[0].style.fontSize="".concat(100*f,"%")}),[f]);var p=function(){return"dark"===l?(0,u.jsx)(Q.Z,{className:"h-6 w-6",onClick:function(){return m("light")}}):(0,u.jsx)(U.Z,{className:"h-6 w-6",onClick:function(){return m("dark")}})},y=function(){return 1===f?(0,u.jsx)(W.Z,{className:"h-6 w-6",onClick:function(){return h(1.2)}}):(0,u.jsx)($.Z,{className:"h-6 w-6",onClick:function(){return h(1)}})};return(0,u.jsxs)("div",{className:j()(n?"lg:left-20":"lg:left-64","left-0 fixed top-0 right-0 z-10 flex-shrink-0 flex h-16 shadow bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 lg:border-none"),children:[(0,u.jsxs)("button",{type:"button",className:"px-4 border-r border-gray-200 dark:border-gray-700 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 lg:hidden",onClick:function(){return s(!0)},children:[(0,u.jsx)("span",{className:"sr-only",children:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043c\u0435\u043d\u044e"}),(0,u.jsx)(D.Z,{className:"h-6 w-6","aria-hidden":"true"})]}),(0,u.jsxs)("div",{className:"flex-1 px-4 flex justify-end sm:justify-between content-center sm:px-6 lg:px-8",children:[(0,u.jsx)("div",{className:"hidden flex-1 sm:flex px-6 py-3 xl:px-0 content-center",children:(0,u.jsxs)("div",{className:"w-full",children:[(0,u.jsx)("label",{htmlFor:"search",className:"sr-only",children:"\u041f\u043e\u0438\u0441\u043a"}),(0,u.jsxs)("div",{className:"search-input mt-1 relative rounded-md shadow-sm",children:[(0,u.jsx)("div",{className:"pointer-events-none absolute inset-y-0 left-0 pl-3 flex items-center",children:(0,u.jsx)(q.Z,{className:"h-5 w-5 text-gray-400 dark:text-gray-500","aria-hidden":"true"})}),(0,u.jsx)("input",{id:"search",name:"search",className:"block w-full bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-md py-2 pl-10 pr-3 text-sm placeholder-gray-500 focus:outline-none focus:text-gray-900 dark:focus:text-gray-400 focus:placeholder-gray-400 focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm",placeholder:"\u041f\u043e\u0438\u0441\u043a",type:"search"}),(0,u.jsxs)("div",{className:"absolute inset-y-0 right-0 flex items-center",children:[(0,u.jsx)("label",{htmlFor:"currency",className:"sr-only",children:"\u0420\u0430\u0437\u0434\u0435\u043b\u044b \u043f\u043e\u0438\u0441\u043a\u0430"}),(0,u.jsxs)("select",{id:"search-type",name:"search-type",className:"search-select focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md",children:[(0,u.jsx)("option",{children:"\u0421\u043e\u0442\u0440\u0443\u0434\u043d\u0438\u043a\u0438"}),(0,u.jsx)("option",{children:"\u0412\u0445\u043e\u0434\u044f\u0449\u0430\u044f \u043f\u043e\u0447\u0442\u0430"}),(0,u.jsx)("option",{children:"\u0418\u0441\u0445\u043e\u0434\u044f\u0449\u0430\u044f \u043f\u043e\u0447\u0442\u0430"})]})]})]})]})}),(0,u.jsxs)("div",{className:"ml-4 flex items-center md:ml-6",children:[(0,u.jsxs)("button",{type:"button",className:"skin-toggler bg-white dark:bg-gray-900 p-1 rounded-full text-gray-400 dark:text-gray-500 dark:hover:text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500",children:[(0,u.jsx)("span",{className:"sr-only",children:"\u041f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0442\u0435\u043c\u0443"}),(0,u.jsx)(p,{className:"h-6 w-6","aria-hidden":"true"})]}),(0,u.jsxs)("button",{type:"button",className:"font-toggler ml-4 bg-white dark:bg-gray-900 p-1 rounded-full text-gray-400 dark:text-gray-500 dark:hover:text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500",children:[(0,u.jsx)("span",{className:"sr-only",children:"\u041f\u0435\u0440\u0435\u043a\u043b\u044e\u0447\u0438\u0442\u044c \u0440\u0430\u0437\u043c\u0435\u0440 \u0448\u0440\u0438\u0444\u0442\u0430"}),(0,u.jsx)(y,{className:"h-6 w-6","aria-hidden":"true"})]}),(0,u.jsx)(ie,{}),(0,u.jsxs)(J.v,{as:"div",className:"ml-4 relative",children:[(0,u.jsx)("div",{children:(0,u.jsxs)(J.v.Button,{className:"user-dropdown max-w-xs bg-white dark:bg-gray-900 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 lg:p-1 lg:rounded-md lg:hover:bg-gray-50 dark:lg:hover:bg-gray-800",children:[r.fullname?(0,u.jsx)(K.q,{size:"10",name:r.fullname,avatar:r.avatar}):(0,u.jsx)(oe.Z,{className:"bg-gray-500/30 after:bg-gradient-to-r from-gray-400/10 via-gray-500/10 to-gray-400/10"}),(0,u.jsxs)("span",{className:"hidden ml-3 text-gray-700 dark:text-gray-300 text-sm font-medium lg:block",children:[(0,u.jsx)("span",{className:"sr-only",children:"\u041e\u0442\u043a\u0440\u044b\u0442\u044c \u043c\u0435\u043d\u044e \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044f"}),r.fullname?(0,O.Qm)(r.fullname):(0,u.jsx)(oe.Z,{className:"bg-gray-500/30 after:bg-gradient-to-r from-gray-400/10 via-gray-500/10 to-gray-400/10"})]}),(0,u.jsx)(Y.Z,{className:"hidden flex-shrink-0 ml-1 h-5 w-5 text-gray-400 dark:text-gray-500 lg:block","aria-hidden":"true"})]})}),(0,u.jsx)(w.u,{as:o.Fragment,enter:"transition ease-out duration-100",enterFrom:"transform opacity-0 scale-95",enterTo:"transform opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"transform opacity-100 scale-100",leaveTo:"transform opacity-0 scale-95",children:(0,u.jsxs)(J.v.Items,{className:"dark:border dark:border-gray-700 origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-gray-900 ring-1 ring-black ring-opacity-5 focus:outline-none divide-y divide-gray-100 dark:divide-gray-800",children:[(0,u.jsxs)("div",{className:"px-4 py-3",children:[(0,u.jsx)("p",{className:"text-sm text-gray-700 dark:text-gray-400",children:"\u0412\u044b\u043f\u043e\u043b\u043d\u0435\u043d \u0432\u0445\u043e\u0434"}),r.username?(0,u.jsx)("p",{className:"text-sm font-medium text-gray-900 dark:text-gray-50 truncate",children:r.username}):(0,u.jsx)(oe.Z,{className:"bg-gray-500/30 after:bg-gradient-to-r from-gray-400/10 via-gray-500/10 to-gray-400/10"})]}),(0,u.jsx)("div",{className:"py-1",children:(0,u.jsx)(J.v.Item,{children:function(e){var t=e.active;return(0,u.jsx)(R.rU,{to:"/myprofile",className:j()(t?"bg-gray-100 dark:bg-gray-700":"","block px-4 py-2 text-sm text-gray-700 dark:text-gray-400"),children:"\u041c\u043e\u0439 \u041f\u0440\u043e\u0444\u0438\u043b\u044c"})}})}),(0,u.jsx)("div",{className:"py-1",children:(0,u.jsx)(J.v.Item,{children:function(e){var r=e.active;return(0,u.jsx)(R.rU,{to:"/auth",onClick:function(){t((0,le.hY)()),(0,ce.ZP)((function(e){return(0,u.jsx)(de.Z,{t:e,message:"\u0412\u044b \u0432\u044b\u0448\u043b\u0438 \u0438\u0437 \u0441\u0438\u0441\u0442\u0435\u043c\u044b.",type:"success"})}),{className:de.j})},className:j()(r?"bg-gray-100 dark:bg-gray-700":"","block px-4 py-2 text-sm text-gray-700 dark:text-gray-400"),children:"\u0412\u044b\u0445\u043e\u0434"})}})})]})})]})]})]})]})},me=r(3448),xe=r(8653),ge=function(e){localStorage.getItem("jwt")&&(0,me.EP)(localStorage.getItem("jwt").replace(/['"]+/g,"").toString());var t=e.children,r=(0,o.useState)(!1),n=(0,a.Z)(r,2),i=n[0],l=n[1],m=(0,o.useState)(!1),x=(0,a.Z)(m,2),g=x[0],f=x[1],h=(0,o.useState)([]),p=(0,a.Z)(h,2),y=p[0],b=p[1],k=(0,c.I0)(),N=(0,c.v9)((function(e){return e.layout})),w=(0,c.v9)((function(e){return e.userData})).userData,Z=N.menuCollapsed,C=(0,s.s0)();return(0,o.useEffect)((function(){k((0,xe.FQ)()).catch((function(e){"Request failed with status code 401"===e&&(k((0,le.hY)()),C("/auth")),(0,ce.ZP)((function(t){return(0,u.jsx)(de.Z,{t:t,message:e,type:"error"})}),{className:de.j})})),me.he.get("/sidebar","").then((function(e){(e.data||e.data!==[])&&b((0,O.gH)(e.data))})).catch((function(e){(0,ce.ZP)((function(t){return(0,u.jsx)(de.Z,{t:t,message:e,type:"error"})}),{className:de.j})}))}),[k]),(0,o.useEffect)((function(){return l(!0),function(){return l(!1)}}),[]),i?(0,u.jsx)(u.Fragment,{children:(0,u.jsxs)("div",{className:"h-full",children:[y!==[]?(0,u.jsx)(V,{menuVisibility:g,menuData:y,setMenuVisibility:f,menuCollapsed:Z,setMenuCollapsed:function(e){return k((0,d.mB)(e))}}):(0,u.jsx)(oe.Z,{count:"5",className:"bg-gray-500/30 after:bg-gradient-to-r from-gray-400/10 via-gray-500/10 to-gray-400/10"}),(0,u.jsxs)("div",{className:j()(Z?"lg:pl-20 pl-0":"lg:pl-64","h-screen"),children:[(0,u.jsx)(ue,{user:w,menuCollapsed:Z,setMenuVisibility:f}),(0,u.jsxs)("div",{className:j()(Z?"lg:left-20":"lg:left-64","main-content animate__fadeIn left-0 text-gray-900 dark:text-gray-200 fixed top-16 right-0 bottom-0 overflow-hidden"),children:[(0,u.jsx)(s.j3,{}),t]})]}),(0,u.jsx)(v,{showOffset:300})]})}):null},fe=function(e){var t=e.children,r=e.route,a=JSON.parse(localStorage.getItem("jwt"));if(r){var n=!1;if(r.meta&&(n=r.meta.restricted),a&&n)return(0,u.jsx)(s.Fg,{to:"/"})}return(0,u.jsx)(o.Suspense,{fallback:null,children:t})},he=function(e){var t=e.children,r=e.route,a=JSON.parse(localStorage.getItem("jwt"));if(r){var n=!1;if(r.meta&&(n=r.meta.restricted),!a)return(0,u.jsx)(s.Fg,{to:"/auth"});if(a&&n)return(0,u.jsx)(s.Fg,{to:"/"})}return(0,u.jsx)(o.Suspense,{fallback:null,children:t})},pe={blank:(0,u.jsx)(g,{}),main:(0,u.jsx)(ge,{})},ye=(0,o.lazy)((function(){return Promise.all([r.e(270),r.e(936),r.e(317),r.e(412)]).then(r.bind(r,6412))})),ve=(0,o.lazy)((function(){return Promise.all([r.e(270),r.e(219)]).then(r.bind(r,7261))})),be=(0,o.lazy)((function(){return Promise.all([r.e(270),r.e(215),r.e(294),r.e(28)]).then(r.bind(r,8028))})),je=(0,o.lazy)((function(){return Promise.all([r.e(270),r.e(175)]).then(r.bind(r,175))})),ke=(0,o.lazy)((function(){return Promise.all([r.e(270),r.e(406)]).then(r.bind(r,6406))})),Ne=(0,o.lazy)((function(){return Promise.all([r.e(270),r.e(815)]).then(r.bind(r,2815))})),we=(0,o.lazy)((function(){return Promise.all([r.e(270),r.e(418)]).then(r.bind(r,4418))})),Ze=(0,o.lazy)((function(){return Promise.all([r.e(270),r.e(819)]).then(r.bind(r,1819))})),Ce=(0,o.lazy)((function(){return Promise.all([r.e(270),r.e(641)]).then(r.bind(r,6641))})),ze=(0,o.lazy)((function(){return Promise.all([r.e(270),r.e(441)]).then(r.bind(r,441))})),Fe=(0,o.lazy)((function(){return Promise.all([r.e(270),r.e(217)]).then(r.bind(r,1217))})),Pe=(0,o.lazy)((function(){return Promise.all([r.e(270),r.e(215),r.e(936),r.e(647),r.e(535),r.e(86)]).then(r.bind(r,5127))})),Se=(0,o.lazy)((function(){return Promise.all([r.e(270),r.e(215),r.e(647),r.e(375)]).then(r.bind(r,7375))})),Ae=(0,o.lazy)((function(){return r.e(541).then(r.t.bind(r,8541,23))})),Re=(0,o.lazy)((function(){return r.e(978).then(r.bind(r,978))})),Ge=[{path:"/",index:!0,element:(0,u.jsx)(s.Fg,{replace:!0,to:localStorage.getItem("jwt")?"/home":"/auth"})},{path:"/home",element:(0,u.jsx)(ye,{}),meta:{publicRoute:!1}},{path:"/admin",element:(0,u.jsx)(ke,{}),meta:{publicRoute:!1}},{path:"/faq",element:(0,u.jsx)(Ne,{}),meta:{publicRoute:!1}},{path:"/grade",element:(0,u.jsx)(we,{}),meta:{publicRoute:!1}},{path:"/phonebook",element:(0,u.jsx)(Ze,{}),meta:{publicRoute:!1}},{path:"/proxylist",element:(0,u.jsx)(Ce,{}),meta:{publicRoute:!1}},{path:"/stats",element:(0,u.jsx)(ze,{}),meta:{publicRoute:!1}},{path:"/test",element:(0,u.jsx)(Fe,{}),meta:{publicRoute:!1}},{path:"/staff",element:(0,u.jsx)(je,{}),meta:{publicRoute:!1}},{path:"/myprofile",element:(0,u.jsx)(ve,{}),meta:{publicRoute:!1}},{path:"/myprofile/edit",element:(0,u.jsx)(be,{}),meta:{publicRoute:!1}},{path:"/calendar",element:(0,u.jsx)(Pe,{}),meta:{publicRoute:!1}},{path:"/auth",element:(0,u.jsx)(Se,{}),meta:{layout:"blank",publicRoute:!0,restricted:!0}},{path:"/reg",element:(0,u.jsx)(Ae,{}),meta:{layout:"blank",publicRoute:!0,restricted:!0}},{path:"*",element:(0,u.jsx)(Re,{}),children:[{path:"*",element:(0,u.jsx)(Re,{})}],meta:{publicRoute:!1}}],Ie=function(e,t){var r=[];return Ge&&Ge.filter((function(a){var n=!1;if(a.meta&&a.meta.layout&&a.meta.layout===e||(void 0===a.meta||void 0===a.meta.layout)&&t===e){var s=fe;if(a.meta&&(n="blank"===a.meta.layout,s=a.meta.publicRoute?fe:he),a.element){var i=(0,O.Z)(a.element.props)&&!1===n?x:o.Fragment;a.element=(0,u.jsx)(i,(0,l.Z)((0,l.Z)({},!1===n?function(e){if((0,O.Z)(e.element.props))return e.meta?{routeMeta:e.meta}:{}}(a):{}),{},{children:(0,u.jsx)(s,{route:a,children:a.element})}))}r.push(a)}return r})),r},Oe=function(){var e=(0,c.I0)(),t=(0,c.v9)((function(e){return e.layout}));return{layout:t.layout,setLayout:function(t){e((0,d.QW)(t))},lastLayout:t.lastLayout,setLastLayout:function(t){e((0,d.sh)(t))}}};var Ee=function(){var e=(0,o.useState)([]),t=(0,a.Z)(e,2),r=t[0],n=t[1],s=Oe().layout;return(0,o.useEffect)((function(){n(function(e){var t=e||"main",r=[];return["main","blank"].forEach((function(e){var a=Ie(e,t);r.push({path:"/",element:pe[e]||pe[t],children:a})})),r}(s))}),[s]),(0,u.jsx)(o.Suspense,{fallback:null,children:(0,u.jsx)(i,{allRoutes:r})})}},9128:function(e,t,r){r.d(t,{q:function(){return i}});r(2791);var a=r(184),n=function(e){var t=e.size,r=e.classname,n=e.name,s=e.avatar;return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("img",{className:["inline-block rounded-full",{6:"h-6 w-6",8:"h-8 w-8",10:"h-10 w-10",12:"h-12 w-12",14:"h-14 w-14"}[t],r].join(" "),src:s,alt:n})})};n.defaultProps={size:"10",name:null,avatar:null,className:""};var s=r(9425),i=function(e){var t=e.size,r=e.classname,i=e.name,l=e.avatar,o=e.color;return l?(0,a.jsx)(n,{size:t,name:i,avatar:l,className:r||""}):(0,a.jsx)(s.J,{name:i,size:t,color:o||"indigo",className:r||""})};i.defaultProps={size:"10",name:"Name",classname:""}},9425:function(e,t,r){r.d(t,{J:function(){return s}});r(2791);var a=r(2703),n=r(184),s=function(e){var t=e.size,r=e.color,s=e.classname,i=e.name,l={6:{nameFont:"text-xs",size:"h-6 w-6"},8:{nameFont:"text-sm",size:"h-8 w-8"},10:{nameFont:"text-base",size:"h-10 w-10"},12:{nameFont:"text-xl",size:"h-12 w-12"},14:{nameFont:"text-2xl",size:"h-14 w-14"}},o={red:{bg:"bg-red-500/30",text:"text-red-700 dark:text-red-300"},orange:{bg:"bg-orange-500/30",text:"text-orange-700 dark:text-orange-300"},yellow:{bg:"bg-yellow-500/30",text:"text-yellow-700 dark:text-yellow-300"},green:{bg:"bg-green-500/30",text:"text-green-700 dark:text-green-300"},cyan:{bg:"bg-cyan-500/30",text:"text-cyan-700 dark:text-cyan-300"},blue:{bg:"bg-blue-500/30",text:"text-blue-700 dark:text-blue-300"},indigo:{bg:"bg-indigo-500/30",text:"text-indigo-700 dark:text-indigo-300"},pink:{bg:"bg-pink-500/30",text:"text-pink-700 dark:text-pink-300"}};return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)("span",{className:["inline-flex items-center justify-center rounded-full",l[t].size,o[r||"indigo"].bg,s||""].join(" "),children:(0,n.jsx)("span",{className:["font-medium leading-none",l[t].nameFont,o[r||"indigo"].text].join(" "),children:(0,a.rm)(i)})})})};s.defaultProps={size:"10",color:"red",name:"\u0418\u0432\u0430\u043d\u043e\u0432 \u0418\u0432\u0430\u043d \u0418\u0432\u0430\u043d\u043e\u0432\u0438\u0447",className:""}},8029:function(e,t,r){r.d(t,{j:function(){return o}});r(2791);var a=r(9290),n=r(9526),s=r(8155),i=r(6140),l=r(184),o="bg-white dark:bg-gray-800 shadow-lg rounded-lg pointer-events-auto ring-1 ring-black dark:ring-white ring-opacity-5 dark:ring-opacity-5 overflow-hidden",c=function(e){var t=e.t,r=e.message,o=e.type,c={error:{icon:(0,l.jsx)(a.Z,{className:"h-6 w-6 text-red-400","aria-hidden":"true"})},success:{icon:(0,l.jsx)(n.Z,{className:"h-6 w-6 text-green-400","aria-hidden":"true"})}};return(0,l.jsxs)("div",{className:"flex items-start",children:[(0,l.jsx)("div",{className:"flex-shrink-0",children:c[o].icon}),(0,l.jsx)("div",{className:"ml-3 flex-1 pt-0.5",children:(0,l.jsx)("p",{className:"text-sm font-medium text-gray-700 dark:text-gray-200",children:{"Request failed with status code 500":"\u041e\u0448\u0438\u0431\u043a\u0430 500: \u041e\u0442\u0441\u0443\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u043f\u043e\u0434\u043a\u043b\u044e\u0447\u0435\u043d\u0438\u0435 \u043a \u0441\u0435\u0440\u0432\u0435\u0440\u0443.","Request failed with status code 401":"\u041e\u0448\u0438\u0431\u043a\u0430 401: \u041e\u0448\u0438\u0431\u043a\u0430 \u0430\u0432\u0442\u043e\u0440\u0438\u0437\u0430\u0446\u0438\u0438."}[r]||r})}),(0,l.jsx)("div",{className:"ml-4 flex-shrink-0 flex",children:(0,l.jsxs)("button",{className:"bg-white dark:bg-gray-900 rounded-md inline-flex text-gray-400 dark:text-gray-500 hover:text-gray-500 dark:hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500",onClick:function(){return i.ZP.dismiss(t.id)},children:[(0,l.jsx)("span",{className:"sr-only",children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"}),(0,l.jsx)(s.Z,{className:"h-5 w-5","aria-hidden":"true"})]})})]})};c.defaultProps={message:"\u0412\u043d\u0438\u043c\u0430\u043d\u0438\u0435",type:"error"},t.Z=c}}]);
//# sourceMappingURL=161.6be47a85.chunk.js.map