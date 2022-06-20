"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[168],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(r),f=i,m=d["".concat(s,".").concat(f)]||d[f]||c[f]||o;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:i,a[1]=p;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2700:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return c}});var n=r(7462),i=r(3366),o=(r(7294),r(3905)),a=["components"],p={sidebar_position:3},s="Providers",l={unversionedId:"API/providers",id:"API/providers",title:"Providers",description:"A provider is an implementor of the API that can enable access to organisations and third-party developers interested in using it.",source:"@site/docs/API/providers.md",sourceDirName:"API",slug:"/API/providers",permalink:"/Open-Meal/docs/API/providers",draft:!1,editUrl:"https://github.com/Sambruk/Open-Meal/tree/main/website/docs/API/providers.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"iCalendar",permalink:"/Open-Meal/docs/API/icalendar"},next:{title:"Version history",permalink:"/Open-Meal/docs/API/version_history"}},u={},c=[{value:"Known providers",id:"known-providers",level:2},{value:"Add provider",id:"add-provider",level:2}],d={toc:c};function f(e){var t=e.components,r=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"providers"},"Providers"),(0,o.kt)("p",null,"A provider is an implementor of the API that can enable access to organisations and third-party developers interested in using it."),(0,o.kt)("h2",{id:"known-providers"},"Known providers"),(0,o.kt)("p",null,"You can issue a GET request to the following URL to get an up-to-date list of data providers supporting  version 3.x of the Open Meal API."),(0,o.kt)("p",null,"It will list a number of properties including the ",(0,o.kt)("inlineCode",{parentName:"p"},"baseUrl")," which should be used in all Open Meal requests towards the provider."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"GET https://sambruk.github.io/Open-Meal/api/dataproviders/\n")),(0,o.kt)("p",null,"See the full specification of the Data Provider API:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"As a ",(0,o.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/Sambruk/Open-Meal/main/OpenAPI-Specification-DataProviders.yml"},"raw yml file")),(0,o.kt)("li",{parentName:"ul"},"In the ",(0,o.kt)("a",{parentName:"li",href:"https://editor.swagger.io/?url=https://raw.githubusercontent.com/Sambruk/Open-Meal/main/OpenAPI-Specification-DataProviders.yml"},"Swagger Editor"))),(0,o.kt)("h2",{id:"add-provider"},"Add provider"),(0,o.kt)("p",null,"In order to appear as a Data provider your info must be added to the file ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Sambruk/Open-Meal/tree/main/website/static/api/dataprovider/index.json"},"/website/static/api/dataproviders/index.json"),"."),(0,o.kt)("p",null,"If you want to be added to the list of data providers, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Sambruk/Open-Meal/issues"},"CREATE AN ISSUE")," in the project or contact any of the project members for assistance."),(0,o.kt)("p",null,'The id property is arbitrary and until a general concent on what format to use is agreed upon. Until then, any string can be used. Prefferably in the form of a increasing number starting from "0"'))}f.isMDXComponent=!0}}]);