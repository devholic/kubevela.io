(self.webpackChunkkubevela_io=self.webpackChunkkubevela_io||[]).push([[87210],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),o=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=o(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=o(a),d=i,k=u["".concat(l,".").concat(d)]||u[d]||m[d]||r;return a?n.createElement(k,s(s({ref:t},p),{},{components:a})):n.createElement(k,s({ref:t},p))}));function d(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,s=new Array(r);s[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,s[1]=c;for(var o=2;o<r;o++)s[o]=a[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},79200:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return s},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var n=a(22122),i=a(19756),r=(a(67294),a(3905)),s={title:"UI-Schema"},c={unversionedId:"reference/ui-schema",id:"reference/ui-schema",isDocsHomePage:!1,title:"UI-Schema",description:"KubeVela designs and implements the UI-Schema specification for the scalability of components, workflow steps, and operation and maintenance feature resources, in the case of variable input parameters, to achieve a more native UI experience.",source:"@site/docs/reference/ui-schema.md",sourceDirName:"reference",slug:"/reference/ui-schema",permalink:"/docs/next/reference/ui-schema",editUrl:"https://github.com/oam-dev/kubevela.io/edit/main/docs/reference/ui-schema.md",version:"current",lastUpdatedBy:"barnettZQG",lastUpdatedAt:1642077174,formattedLastUpdatedAt:"1/13/2022",frontMatter:{title:"UI-Schema"},sidebar:"docs",previous:{title:"Built-in Workflow Steps",permalink:"/docs/next/end-user/workflow/built-in-workflow-defs"},next:{title:"User Improvement Plan",permalink:"/docs/next/reference/user-improvement-plan"}},l=[{value:"How UI-Schema works",id:"how-ui-schema-works",children:[]},{value:"Supported react component types",id:"supported-react-component-types",children:[]},{value:"How to expand",id:"how-to-expand",children:[]}],o={toc:l};function p(e){var t=e.components,s=(0,i.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,n.Z)({},o,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"KubeVela designs and implements the UI-Schema specification for the scalability of components, workflow steps, and operation and maintenance feature resources, in the case of variable input parameters, to achieve a more native UI experience."),(0,r.kt)("p",null,"At present, the UI-Schema specification mainly acts on the data input side and will be extended to the data visualization side in the future."),(0,r.kt)("h3",{id:"how-ui-schema-works"},"How UI-Schema works"),(0,r.kt)("p",null,"The components, workflow steps, and operation and maintenance feature types with different UI-Schema working principles are defined through CUE, which we call XDefinition, and almost every definition includes the definition of input parameters. for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-cue"},'scaler: {\n    type: "trait"\n    annotations: {}\n    labels: {}\n    description: "Manually scale K8s pod for your workload which follows the pod spec in path \'spec.template\'."\n    attributes: {\n        podDisruptive: false\n        appliesToWorkloads: ["*"]\n    }\n}\ntemplate: {\n    parameter: {\n        // +usage=Specify the number of workload\n        replicas: *1 | int\n    }\n    // +patchStrategy=retainKeys\n    patch: spec: replicas: parameter.replicas\n}\n')),(0,r.kt)("p",null,"In the above example, the user input parameter is ",(0,r.kt)("inlineCode",{parentName:"p"},"replicas"),"."),(0,r.kt)("p",null,"In the UI we want the user to be able to set the number of replicas via a number input form."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ui schema",src:a(91146).Z})),(0,r.kt)("p",null,"Its workflow is in the figure above. The API Schema is generated through the defined CUE, and then the default UI Schema is generated through the API Schema. If there is a custom UI Schema, the default configuration is patched with the custom configuration. The UI renders the front-end page based on the final UI Schema."),(0,r.kt)("p",null,"The spec are as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"- jsonKey: string         field name\n  label: string           show name in UI\n  description: string     help info\n  uiType: string          the react component type in UI\n  sort: int               sort number\n  validate:               data validate rule.\n    required: bool\n    max: int\n    min: int\n    regular: string\n    options:              Optional, for select forms\n    - label: string\n      value: string\n  subParameters:\n    ...\n")),(0,r.kt)("h3",{id:"supported-react-component-types"},"Supported react component types"),(0,r.kt)("h4",{id:"basic-form"},"Basic form"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Input"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Number"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Select"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Switch"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Radio"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","DatePicker"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Textarea"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Password")),(0,r.kt)("h4",{id:"business-form"},"Business form"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Ignore: There are subordinate fields, and the current field is not displayed."),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","ClusterSelect"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","EnvSelect"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","SecretSelect"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","SecretKeySelect"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","ComponentSelect"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","ImageInput"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","ClassStorageSelect"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","PVCSelect"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","CPUNumber"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","MemoryNumber"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","K8sObjectsCode")),(0,r.kt)("h4",{id:"combination-form"},"Combination form"),(0,r.kt)("ul",{className:"contains-task-list"},(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","KV"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Strings"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Structs"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Group: render as a titled container"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","InnerGroup"),(0,r.kt)("li",{parentName:"ul",className:"task-list-item"},(0,r.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","TabGroup")),(0,r.kt)("h3",{id:"how-to-expand"},"How to expand"),(0,r.kt)("p",null,"UI-Schema mainly extends front-end react components, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/oam-dev/velaux/tree/main/src/extends"},"https://github.com/oam-dev/velaux/tree/main/src/extends")))}p.isMDXComponent=!0},91146:function(e,t,a){"use strict";t.Z=a.p+"assets/images/ui-schema-18f0b0a3a4ba8af0cb8fed321fbd9a51.jpg"}}]);