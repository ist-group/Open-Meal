"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[635],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return f}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=l(r),f=a,m=c["".concat(p,".").concat(f)]||c[f]||u[f]||i;return r?n.createElement(m,o(o({ref:t},d),{},{components:r})):n.createElement(m,o({ref:t},d))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=c;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},1898:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],s={sidebar_position:3},p="Data Providers",l={unversionedId:"API/data_providers",id:"API/data_providers",title:"Data Providers",description:"A data provider is an implementor of the API that can enable access to organisations and third-party developers interested in using it.",source:"@site/docs/API/data_providers.md",sourceDirName:"API",slug:"/API/data_providers",permalink:"/Open-Meal/docs/API/data_providers",draft:!1,editUrl:"https://github.com/Sambruk/Open-Meal/tree/main/website/docs/API/data_providers.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"iCalendar",permalink:"/Open-Meal/docs/API/icalendar"},next:{title:"Version history",permalink:"/Open-Meal/docs/API/version_history"}},d={},u=[{value:"Known Data Providers",id:"known-data-providers",level:2},{value:"Add a Data Provider",id:"add-a-data-provider",level:2}],c={toc:u};function f(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"data-providers"},"Data Providers"),(0,i.kt)("p",null,"A data provider is an implementor of the API that can enable access to organisations and third-party developers interested in using it."),(0,i.kt)("h2",{id:"known-data-providers"},"Known Data Providers"),(0,i.kt)("p",null,"You can issue a GET request to the following URL to get an up-to-date list of dataProviders supporting version 3.x of the Open Meal API."),(0,i.kt)("p",null,"It will list a number of properties including the ",(0,i.kt)("inlineCode",{parentName:"p"},"baseUrl")," which should be used in all Open Meal requests towards the provider."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"GET https://sambruk.github.io/Open-Meal/api/dataproviders/\n")),(0,i.kt)("p",null,"See the full specification of the data provider API:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"As a ",(0,i.kt)("a",{parentName:"li",href:"https://raw.githubusercontent.com/Sambruk/Open-Meal/main/OpenAPI-Specification-DataProviders.yml"},"raw yml file")),(0,i.kt)("li",{parentName:"ul"},"In the ",(0,i.kt)("a",{parentName:"li",href:"https://editor.swagger.io/?url=https://raw.githubusercontent.com/Sambruk/Open-Meal/main/OpenAPI-Specification-DataProviders.yml"},"Swagger Editor"))),(0,i.kt)("h2",{id:"add-a-data-provider"},"Add a Data Provider"),(0,i.kt)("p",null,"In order to appear as a data provider your info must be added to the file ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Sambruk/Open-Meal/tree/main/website/static/api/dataprovider/index.json"},"/website/static/api/dataproviders/index.json"),"."),(0,i.kt)("p",null,"If you want to be added to the list of data providers, ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Sambruk/Open-Meal/issues"},"CREATE AN ISSUE")," in the project or contact any of the project members for assistance."),(0,i.kt)("p",null,'The id property is arbitrary and until a general concent on what format to use is agreed upon. Until then, any string can be used. Prefferably in the form of a increasing number starting from "0"'))}f.isMDXComponent=!0}}]);