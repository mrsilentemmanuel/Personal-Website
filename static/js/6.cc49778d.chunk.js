(this["webpackJsonppersonal-site"]=this["webpackJsonppersonal-site"]||[]).push([[6],{174:function(e,t,n){"use strict";n.r(t);var r=n(1),i=n(5),a=n(21),s=n(0),o=function(e){var t=e.data;return Object(s.jsx)("article",{className:"degree-container",children:Object(s.jsxs)("header",{children:[Object(s.jsx)("h4",{className:"degree",children:t.degree}),Object(s.jsxs)("p",{className:"school",children:[Object(s.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},c=function(e){var t=e.data;return Object(s.jsxs)("div",{className:"education",children:[Object(s.jsx)("div",{className:"link-to",id:"education"}),Object(s.jsx)("div",{className:"title",children:Object(s.jsx)("h3",{children:"Education"})}),t.map((function(e){return Object(s.jsx)(o,{data:e},e.school)}))]})};c.defaultProps={data:[]};var l=c,u=function(e){var t=e.data;return Object(s.jsxs)("article",{className:"jobs-container",children:[Object(s.jsxs)("header",{children:[Object(s.jsxs)("h4",{children:[Object(s.jsx)("a",{href:t.link,children:t.company})," - ",t.position]}),Object(s.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),Object(s.jsx)("ul",{className:"points",children:t.points.map((function(e){return Object(s.jsx)("li",{children:e},e)}))})]})},d=function(e){var t=e.data;return Object(s.jsxs)("div",{className:"experience",children:[Object(s.jsx)("div",{className:"link-to",id:"experience"}),Object(s.jsx)("div",{className:"title",children:Object(s.jsx)("h3",{children:"Experience"})}),t.map((function(e){return Object(s.jsx)(u,{data:e},e.company)}))]})};d.defaultProps={data:[]};var p=d;function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e){return(h="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function y(e,t){return!t||"object"!==h(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=f(e);if(t){var i=f(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return y(this,n)}}var g=n(59),v=n(58),O=function(e){var t=e.handleClick,n=e.active,r=e.label;return Object(s.jsx)("button",{className:"skillbutton ".concat(n[r]?"skillbutton-active":""),type:"button",onClick:function(){return t(r)},children:r})},k=function(e){var t=e.data,n=e.categories,r=t.category,i=t.competency,a=t.title,o={background:n.filter((function(e){return r.includes(e.name)})).map((function(e){return e.color}))[0]},c=Object(v.a)(Object(v.a)({},o),{},{width:"".concat(String(Math.min(100,Math.max(i/5*100,0))),"%")});return Object(s.jsxs)("div",{className:"skillbar clearfix",children:[Object(s.jsx)("div",{className:"skillbar-title",style:o,children:Object(s.jsx)("span",{children:a})}),Object(s.jsx)("div",{className:"skillbar-bar",style:c}),Object(s.jsxs)("div",{className:"skill-bar-percent",children:[i," / 5"]})]})};k.defaultProps={categories:[]};var x=k,S=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(a,e);var t,n,r,i=j(a);function a(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(t=i.call(this,e)).handleChildClick=function(e){t.setState((function(t){var n=Object.keys(t.buttons).reduce((function(n,r){return Object(v.a)(Object(v.a)({},n),{},Object(g.a)({},r,e===r&&!t.buttons[r]))}),{});return n.All=!Object.keys(t.buttons).some((function(e){return n[e]})),{buttons:n}}))},t.state=function(e){var t=e.categories,n=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return Object(v.a)(Object(v.a)({},e),{},Object(g.a)({},t,!1))}),{All:!0}),skills:n}}({categories:e.categories,skills:e.skills}),t}return t=a,(n=[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,n){return e.state.buttons[n]?n:t}),"All");return this.state.skills.sort((function(e,t){var n=0;return e.competency>t.competency?n=-1:e.competency<t.competency?n=1:e.category[0]>t.category[0]?n=-1:e.category[0]<t.category[0]||e.title>t.title?n=1:e.title<t.title&&(n=-1),n})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return Object(s.jsx)(x,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return Object(s.jsx)(O,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return Object(s.jsxs)("div",{className:"skills",children:[Object(s.jsx)("div",{className:"link-to",id:"skills"}),Object(s.jsxs)("div",{className:"title",children:[Object(s.jsx)("h3",{children:"Skills"}),Object(s.jsx)("p",{children:"Note: I think these sections are silly, but everyone seems to have one. Here is a *mostly* honest overview of my skills."})]}),Object(s.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),Object(s.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}])&&b(t.prototype,n),r&&b(t,r),a}(r.Component);S.defaultProps={skills:[],categories:[]};var w=S,D=function(e){var t=e.data,n=e.last;return Object(s.jsxs)("li",{className:"course-container",children:[Object(s.jsxs)("a",{href:t.link,children:[Object(s.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),Object(s.jsx)("p",{className:"course-name",children:t.title})]}),!n&&Object(s.jsx)("div",{className:"course-dot",children:Object(s.jsx)("p",{className:"course-name",children:" \u2022"})})]})};D.defaultProps={last:!1};var C=D,N=function(e){var t,n=e.data;return Object(s.jsxs)("div",{className:"courses",children:[Object(s.jsx)("div",{className:"link-to",id:"courses"}),Object(s.jsx)("div",{className:"title",children:Object(s.jsx)("h3",{children:"Selected Courses"})}),Object(s.jsx)("ul",{className:"course-list",children:(t=n,t.sort((function(e,t){var n=0;return e.university>t.university?n=-1:e.university<t.university||e.number>t.number?n=1:e.number<t.number&&(n=-1),n})).map((function(e,n){return Object(s.jsx)(C,{data:e,last:n===t.length-1},e.title)})))})]})};N.defaultProps={data:[]};var E=N,P=function(){return Object(s.jsxs)("div",{className:"references",children:[Object(s.jsx)("div",{className:"link-to",id:"references"}),Object(s.jsx)("div",{className:"title",children:Object(s.jsx)(i.b,{to:"/contact",children:Object(s.jsx)("h3",{children:"References are available upon request"})})})]})},M=[{title:"Convex Optimization",number:"EE 364a",link:"http://stanford.edu/class/ee364a/",university:"Stanford"},{title:"Machine Learning",number:"CS 229",link:"http://cs229.stanford.edu/",university:"Stanford"},{title:"Convolutional Neural Networks for Visual Recognition",number:"CS 231n",link:"http://cs231n.stanford.edu/",university:"Stanford"},{title:"Numerical Linear Algebra",number:"CME 302",link:"http://scpd.stanford.edu/search/publicCourseSearchDetails.do;jsessionid=561188A06434D7D97953C4706DE12831?method=load&courseId=11685",university:"Stanford"},{title:"Numerical Optimization",number:"CME 304",link:"http://web.stanford.edu/class/cme304/",university:"Stanford"},{title:"Discrete Mathematics and Algorithms",number:"CME 305",link:"http://stanford.edu/~rezab/discrete/",university:"Stanford"},{title:"PDE\u2019s of Applied Mathematics",number:"CME 303",link:"http://web.stanford.edu/class/math220/index.html",university:"Stanford"},{title:"Introduction to Linear Dynamical Systems",number:"EE 263",link:"http://ee263.stanford.edu/",university:"Stanford"},{title:"Introduction to Statistical Signal Processing",number:"EE 278B",link:"http://web.stanford.edu/class/ee278/",university:"Stanford"},{title:"Spacecraft Design",number:"AA 236A",link:"",university:"Stanford"},{title:"Advanced Programming",number:"CME 212",link:"",university:"Stanford"},{title:"Design Theory and Methodology",number:"MAE 397",link:"https://web.stanford.edu/group/designx_lab/cgi-bin/mainwiki/index.php/ME397_Design_Theory_%26_Methodology_Seminar",university:"Stanford"},{title:"Software Engineering Concepts",number:"CSE 442",link:"",university:"Buffalo"},{title:"Hardware/Software Integrated System Design",number:"CSE 453",link:"",university:"Buffalo"},{title:"Data Structures",number:"CS 250",link:"http://www.cse.buffalo.edu/~hungngo/classes/2013/Fall/250/",university:"Buffalo"},{title:"Introduction to Digital Signal Processing",number:"EE 516",link:"",university:"Buffalo"},{title:"Computer Vision and Image Processing",number:"CSE 573",link:"http://cubs.buffalo.edu/~inwogu/teaching/Coursepage573_fa14/",university:"Buffalo"},{title:"Realtime Embedded Systems",number:"CSE 321",link:"",university:"Buffalo"},{title:"Computer Architecture",number:"CSE 590",link:"http://www.cse.buffalo.edu/~stevko/courses/cse490/spring11/",university:"Buffalo"},{title:"Small Data",number:"MS&E 226",link:"http://web.stanford.edu/class/msande226/",university:"Stanford"},{title:"Stochastic Control",number:"EE 266",link:"http://ee266.stanford.edu/",university:"Stanford"},{title:"Simulation",number:"MS&E 223",link:"http://web.stanford.edu/class/msande223/handout.htm",university:"Stanford"},{title:"Deep Learning for Natural Language Processing",number:"CS 224d",link:"http://cs224d.stanford.edu/",university:"Stanford"}],T=[{school:"University of the People",degree:"B.S Computer Science",link:"https://www.uopeople.edu/",year:2023},{school:"Code Space",degree:"SOftware Development",link:"https://www.codespace.co.za/",year:2021}],W=[{company:"Full Stack developer",position:"Consultant",link:"https://silentemmanuel.com",daterange:"Jan 2020 - Present",points:["Working in partnership with the tech partnership to assist on projects as and when required.","Developing and designing websites. "]},{company:"Ted X Cape Town",position:"Web Developer",link:"https://tedxcapetown.com",daterange:"Jan 2020 - Present",points:["I help TEDx Cape Town with Web development, maintenance, and Information Technology related tasks.","We use PHP and the site is run on Drupal"]},{company:"Founder and Chief Executive Officer",position:"Global Stalls",link:"https://globalstalls.com",daterange:"Jan 2019 - Dec 2020",points:["Overseeing all operations and business activities to ensure they produce the desired results and are consistent with the overall strategy and mission","Developing high quality business strategies and plans ensuring their alignment with short-term and long-term objectives..","Review financial and non-financial reports to devise solutions or improvements of the ecommerce store."]},{company:"Revenue Red",position:"Junior Microsoft SQL Database Developer",link:"http://planetaryresources.com",daterange:"Jan 2017 - Nov 2018",points:["Design, create, and implement database systems based on the end user requirements.","Create complex functions, scripts, stored procedures and triggers to support application development","Fix any issues related to database performance and provide corrective measures."]},{company:"Choice Media",position:"Business Owner and Web Designer",link:"https://facebook.com",daterange:"Jan 2015 - Nov 2017",points:["Performed creative and technical design, development and delivery of the company intranet","Communicated physically as well as electronically with clients to implement web page redesigns","Designed websites using CMS Tools."]},{company:"First Impression Labels",position:"Flexography Machine Operator",link:"https://fil.co.za/",daterange:"March 2010 \u2013 Nov 2013",points:["My primary duty was preparing the press for printing, including filling ink and calibrating the machine, feeing the paper into the machine.","Troubleshooting any issues that might arise during printing."]}],L=n(17);var A=n(24);var R,_=[{title:"WordPress/WooCommerce/Shopify/Drupal",competency:5,category:["Web Development","Tools"]},{title:"Bash",competency:2,category:["Tools","Languages"]},{title:"Amazon Web Services",competency:4,category:["Web Development","Tools"]},{title:"ElasticSearch",competency:2,category:["Web Development","Databases"]},{title:"MSSQL/MySQL/SQL",competency:4,category:["Web Development","Databases","Languages"]},{title:"PHP",competency:3,category:["Web Development","Languages"]},{title:"Javascript",competency:3,category:["Web Development","Languages"]},{title:"Express.JS",competency:2,category:["Web Development"]},{title:"D3",competency:2,category:["Web Development"]},{title:"Flask",competency:2,category:["Web Development"]},{title:"Git",competency:4,category:["Tools"]},{title:"Kubernetes",competency:2,category:["Tools","Databases"]},{title:"Google Cloud Compute",competency:3,category:["Tools","Web Development"]},{title:"Numpy",competency:3,category:["Databases"]},{title:"Bootstrap/Vannila/Tailwind",competency:4,category:["Web Development","Tools"]},{title:"Tensorflow + Keras",competency:2,category:["Databases"]},{title:"Jupyter",competency:4,category:["Databases"]},{title:"Typescript",competency:3,category:["Web Development","Languages"]},{title:"HTML + SASS/SCSS/CSS",competency:4,category:["Web Development","Languages"]},{title:"Python",competency:3,category:["Languages"]},{title:"Data Visualization",competency:3,category:["Databases"]},{title:"GraphQL",competency:2,category:["Web Development","Databases"]}].map((function(e){return Object(v.a)(Object(v.a)({},e),{},{category:e.category.sort()})})),B=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],I=(R=new Set(_.reduce((function(e,t){var n=t.category;return e.concat(n)}),[])),function(e){if(Array.isArray(e))return Object(L.a)(e)}(R)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(R)||Object(A.a)(R)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()).sort().map((function(e,t){return{name:e,color:B[t]}})),J=["Education","Experience","Skills","Courses","References"];t.default=function(){return Object(s.jsx)(a.a,{title:"Resume",description:"Silent Emmanuel's Resume.",children:Object(s.jsxs)("article",{className:"post",id:"resume",children:[Object(s.jsx)("header",{children:Object(s.jsxs)("div",{className:"title",children:[Object(s.jsx)("h2",{"data-testid":"heading",children:Object(s.jsx)(i.b,{to:"resume",children:"Resume"})}),Object(s.jsx)("div",{className:"link-container",children:J.map((function(e){return Object(s.jsx)("h4",{children:Object(s.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),Object(s.jsx)(l,{data:T}),Object(s.jsx)(p,{data:W}),Object(s.jsx)(w,{skills:_,categories:I}),Object(s.jsx)(E,{data:M}),Object(s.jsx)(P,{})]})})}},58:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var r=n(59);function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){Object(r.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}},59:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))}}]);
//# sourceMappingURL=6.cc49778d.chunk.js.map