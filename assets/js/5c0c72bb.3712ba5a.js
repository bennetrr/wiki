"use strict";(self.webpackChunkwiki=self.webpackChunkwiki||[]).push([[380],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>k});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),d=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},s=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(o),k=r,b=u["".concat(c,".").concat(k)]||u[k]||p[k]||i;return o?n.createElement(b,a(a({ref:t},s),{},{components:o})):n.createElement(b,a({ref:t},s))}));function k(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var d=2;d<i;d++)a[d]=o[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},4596:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=o(7462),r=(o(7294),o(3905));const i={},a="WorldEdit API for Bukkit",l={unversionedId:"bukkit/worldedit",id:"bukkit/worldedit",title:"WorldEdit API for Bukkit",description:"For adding the dependencies into your project, see API Usage | FAWE Wiki",source:"@site/docs-cheatsheets/bukkit/worldedit.md",sourceDirName:"bukkit",slug:"/bukkit/worldedit",permalink:"/cheatsheets/bukkit/worldedit",draft:!1,editUrl:"https://github.com/bennetrr/wiki/edit/main/docs-cheatsheets/bukkit/worldedit.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Bukkit API Events Cheatsheet",permalink:"/cheatsheets/bukkit/events"}},c={},d=[{value:"Convert a Bukkit <code>Location</code> to a WorldEdit <code>BlockVector3</code>",id:"convert-a-bukkit-location-to-a-worldedit-blockvector3",level:2},{value:"Fill an area with a material",id:"fill-an-area-with-a-material",level:2},{value:"Copy a region to another location",id:"copy-a-region-to-another-location",level:2},{value:"Sources",id:"sources",level:2}],s={toc:d};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},s,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"worldedit-api-for-bukkit"},"WorldEdit API for Bukkit"),(0,r.kt)("p",null,"For adding the dependencies into your project, see ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/IntellectualSites/FastAsyncWorldEdit-Documentation/wiki/API-Usage#gradle---fawe-bukkit-and-core="},"API Usage | FAWE Wiki")),(0,r.kt)("h2",{id:"convert-a-bukkit-location-to-a-worldedit-blockvector3"},"Convert a Bukkit ",(0,r.kt)("inlineCode",{parentName:"h2"},"Location")," to a WorldEdit ",(0,r.kt)("inlineCode",{parentName:"h2"},"BlockVector3")),(0,r.kt)("p",null,"This function is used in the examples below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public static BlockVector3 location2BlockVector3(Location loc) {\n    return BukkitAdapter.adapt(loc).toVector().toBlockPoint();\n}\n")),(0,r.kt)("h2",{id:"fill-an-area-with-a-material"},"Fill an area with a material"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public static void fill(Location loc1, Location loc2, Material mat) {\n    World world = BukkitAdapter.adapt(loc1.getWorld());\n    \n    // Select the region\n    Region selection = new CuboidRegion(world, location2BlockVector3(loc1), location2BlockVector3(loc2));\n    \n    // Create a BlockState with air\n    BlockState blockState = BukkitAdapter.adapt(mat.createBlockData());\n    \n    // This EditSession will be closed after the setBlocks command is finished\n    try (EditSession editSession = WorldEdit.getInstance().newEditSession(world)) {\n        editSession.setBlocks(selection, blockState);\n    }\n}\n")),(0,r.kt)("h2",{id:"copy-a-region-to-another-location"},"Copy a region to another location"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public static void copy(Location startLoc, Location endLoc, Location pasteLoc) {\n    World world = BukkitAdapter.adapt(startLoc.getWorld());\n\n    // Select the region to copy\n    CuboidRegion copyRegion = new CuboidRegion(world, location2BlockVector3(startLoc), location2BlockVector3(endLoc));\n    BlockArrayClipboard clipboard = new BlockArrayClipboard(copyRegion);\n\n\n    // This EditSessions will be closed after the copy and paste command is finished\n    // Copy\n    try (EditSession editSession = WorldEdit.getInstance().newEditSession(world)) {\n        ForwardExtentCopy copyOperation = new ForwardExtentCopy(editSession, copyRegion, clipboard,copyRegion.getMinimumPoint());\n        // You can specify settings here\n        Operations.complete(copyOperation);\n    }\n\n    // Paste\n    try (EditSession editSession = WorldEdit.getInstance().newEditSession(world)) {\n        Operation pasteOperation = new ClipboardHolder(clipboard).createPaste(editSession).to(location2BlockVector3(pasteLoc)).build();\n        // You can specify settings here\n        Operations.complete(pasteOperation);\n    }\n}\n")),(0,r.kt)("h2",{id:"sources"},"Sources"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://worldedit.enginehub.org/en/latest/api/"},"https://worldedit.enginehub.org/en/latest/api/"))))}p.isMDXComponent=!0}}]);