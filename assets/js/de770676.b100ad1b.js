"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[813],{3905:(t,e,n)=>{n.d(e,{Zo:()=>m,kt:()=>c});var a=n(7294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var d=a.createContext({}),p=function(t){var e=a.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},m=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),k=p(n),c=r,N=k["".concat(d,".").concat(c)]||k[c]||u[c]||l;return n?a.createElement(N,o(o({ref:e},m),{},{components:n})):a.createElement(N,o({ref:e},m))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=k;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6719:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const l={},o="Colored text in bash",i={unversionedId:"bash/colored-text",id:"bash/colored-text",title:"Colored text in bash",description:"When you print something to the console, for example with echo or printf,",source:"@site/docs-howto/bash/colored-text.md",sourceDirName:"bash",slug:"/bash/colored-text",permalink:"/howto/bash/colored-text",draft:!1,editUrl:"https://github.com/bennetrr/wiki/edit/main/docs-howto/bash/colored-text.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Parsing arguments with Bash",permalink:"/howto/bash/argument-parsing"}},d={},p=[],m={toc:p};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"colored-text-in-bash"},"Colored text in bash"),(0,r.kt)("p",null,"When you print something to the console, for example with ",(0,r.kt)("inlineCode",{parentName:"p"},"echo")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"printf"),",\nyou can use escape codes to color the output."),(0,r.kt)("p",null,"All sequences start with ",(0,r.kt)("inlineCode",{parentName:"p"},"\\033["),", then followed by a number (see table below) and at the end a ",(0,r.kt)("inlineCode",{parentName:"p"},"m"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Sequence"),(0,r.kt)("th",{parentName:"tr",align:null},"Effect"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"\\033[0m")),(0,r.kt)("td",{parentName:"tr",align:null},"Reset all")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"\\033[1m")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Bold"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"\\033[4m")),(0,r.kt)("td",{parentName:"tr",align:null},"Underline")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"\\033[5m")),(0,r.kt)("td",{parentName:"tr",align:null},"Flash")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"\\033[7m")),(0,r.kt)("td",{parentName:"tr",align:null},"Inverted")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"\\033[30m")),(0,r.kt)("td",{parentName:"tr",align:null},"Color black")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"\\033[31m")),(0,r.kt)("td",{parentName:"tr",align:null},"Color red")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"\\033[32m")),(0,r.kt)("td",{parentName:"tr",align:null},"Color green")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"\\033[33m")),(0,r.kt)("td",{parentName:"tr",align:null},"Color yellow")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"\\033[34m")),(0,r.kt)("td",{parentName:"tr",align:null},"Color blue")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"\\033[35m")),(0,r.kt)("td",{parentName:"tr",align:null},"Color magenta")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"\\033[36m")),(0,r.kt)("td",{parentName:"tr",align:null},"Color cyan")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"\\033[37m")),(0,r.kt)("td",{parentName:"tr",align:null},"Color white")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"\\033[40m")),(0,r.kt)("td",{parentName:"tr",align:null},"Background black")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"\\033[41m")),(0,r.kt)("td",{parentName:"tr",align:null},"Background red")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"\\033[42m")),(0,r.kt)("td",{parentName:"tr",align:null},"Background green")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"\\033[43m")),(0,r.kt)("td",{parentName:"tr",align:null},"Background yellow")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"\\033[44m")),(0,r.kt)("td",{parentName:"tr",align:null},"Background blue")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"\\033[45m")),(0,r.kt)("td",{parentName:"tr",align:null},"Background magenta")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"\\033[46m")),(0,r.kt)("td",{parentName:"tr",align:null},"Background cyan")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"\\033[47m")),(0,r.kt)("td",{parentName:"tr",align:null},"Background white")))),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'printf "Now this becomes \\033[31mRED\\033[0m."\n')),(0,r.kt)("p",null,"Source: ",(0,r.kt)("a",{parentName:"p",href:"https://checkmk.com/de/linux-wissen/farbige-ausgabe-auf-der-konsole"},"Farbige Ausgabe auf der Konsole | CheckMK Linux-Wissen")," (DEU)"))}u.isMDXComponent=!0}}]);