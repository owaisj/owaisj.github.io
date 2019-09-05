(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{190:function(e,t,a){"use strict";a.r(t);a(22),a(49);var n=a(196),r=a(0),c=a.n(r),o=a(191),l=a(194),i=a(197),s=a.n(i),m=a(198),d=a.n(m),u=a(199),p=a.n(u),f=a(200),b=a.n(f),h=a(201),w=a.n(h),E=a(202),g=a.n(E),v=a(203),x=a.n(v),j=function(e){var t=e.name,a=e.vc,n=e.demo,r=e.desc,o=e.imageURL;return c.a.createElement("div",{className:"col-12 col-md-6 col-lg-4 mb-3"},c.a.createElement("div",{className:"card m-1"},c.a.createElement("h6",{className:"card-header"},t),c.a.createElement("img",{className:"card-img-top",src:o,alt:"placeholder"}),c.a.createElement("div",{className:"card-body"},c.a.createElement("p",{className:"card-text small"},r),c.a.createElement("a",{href:n,className:"card-link btn btn-outline-primary btn-sm"},"View App"),c.a.createElement("a",{href:a,className:"card-link btn btn-outline-dark btn-sm"},"View Code"))))};t.default=function(){var e=[s.a,d.a,p.a,b.a,w.a,g.a,x.a];return c.a.createElement(l.a,{title:"Projects"},c.a.createElement(o.b,{query:"3323876343",render:function(t){var a=t.allProjectsJson.edges;return c.a.createElement("div",{className:"row d-flex flex-wrap justify-content-center p-3"},a.map(function(t,a){var n=t.node;return c.a.createElement(j,Object.assign({key:a},n,{imageURL:e[a]}))}))},data:n}))}},191:function(e,t,a){"use strict";a.d(t,"b",function(){return s});var n=a(0),r=a.n(n),c=a(66),o=a.n(c);a.d(t,"a",function(){return o.a});a(192),a(7).default.enqueue;var l=r.a.createContext({});function i(e){var t=e.staticQueryData,a=e.data,n=e.query,c=e.render,o=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,o&&c(o),!o&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var s=function(e){var t=e.data,a=e.query,n=e.render,c=e.children;return r.a.createElement(l.Consumer,null,function(e){return r.a.createElement(i,{data:t,query:a,render:n||c,staticQueryData:e})})}},192:function(e,t,a){var n;e.exports=(n=a(193))&&n.default||n},193:function(e,t,a){"use strict";a.r(t);a(22);var n=a(0),r=a.n(n),c=a(90);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null}},194:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(191),o=function(){return r.a.createElement(n.Fragment,null,r.a.createElement("header",{className:"row navbar navbar-dark navbar-expand-lg bg-dark d-flex flex-row justify-content-around m-0"},r.a.createElement("div",{className:"navbar-brand col-sm d-flex justify-content-md-start justify-content-center"},"Owais Jamil"),r.a.createElement("div",{className:"text-white col-sm text-center d-flex flex-row justify-content-md-end justify-content-center"},r.a.createElement(c.a,{className:"mx-2",to:"/"},"Home"),r.a.createElement(c.a,{className:"mx-2",to:"/portfolio"},"Portfolio"),r.a.createElement(c.a,{className:"mx-2",to:"/contact"},"Contact"))),r.a.createElement("div",{className:"jumbotron mb-0 d-flex flex-column justify-content-center align-items-center"},r.a.createElement("h1",{className:"display-1 text-center text-white"},"Full Stack Software Engineer")))},l=function(){return r.a.createElement("div",{className:"d-flex flex-column col-sm"},r.a.createElement("h5",{className:"border-bottom border-light p-1"},"About Me"),r.a.createElement("div",{className:"p-1"},r.a.createElement("p",null,"Hi I'm Owais, an Austin-based Software Engineer. Check out my resume and contact me to talk about an interesting project!"),r.a.createElement("p",null,"©2019 - Owais Jamil")))},i=function(){return r.a.createElement("div",{className:"d-flex flex-column col-sm"},r.a.createElement("h5",{className:"border-bottom border-light p-1"},"Connect with me"),r.a.createElement("div",{className:"d-flex flex-column p-1"},r.a.createElement("a",{href:"https://github.com/owaisj"},"View My Github Page"),r.a.createElement(c.a,{to:"/contact"},"Contact Me"),r.a.createElement("a",{href:"https://www.linkedin.com/in/owais-jamil/"},"Connect on LinkedIn")))},s=function(){return r.a.createElement("div",{className:"d-flex flex-column col-sm"},r.a.createElement("h5",{className:"border-bottom border-light p-1"},"Contact Information"),r.a.createElement("div",{className:"d-flex flex-column p-1"},r.a.createElement("a",{href:"#"},"View Resume"),r.a.createElement("a",{href:"mailto:jamil.owais@gmail.com"},"E-mail Address"),r.a.createElement("a",{href:"tel:+1-512-919-9153"},"Phone Number")))},m=function(){return r.a.createElement("footer",null,r.a.createElement("div",{className:"d-flex flex-row justify-content-around py-3\r bg-dark text-light flex-wrap row m-0"},r.a.createElement(l,null),r.a.createElement(i,null),r.a.createElement(s,null)))};t.a=function(e){var t=e.children,a=e.title;return r.a.createElement("div",{id:"root-container",className:"d-flex flex-column"},r.a.createElement(o,null),r.a.createElement("div",{id:"content-wrapper",className:"flex-fill container-fluid bg-light"},r.a.createElement("div",{style:{minHeight:"500px"},className:"row d-flex justify-content-center m-3"},r.a.createElement("div",{id:"content",class:"col col-md-10 col-sm"},r.a.createElement("h1",{className:"border-bottom border-dark display-4"},a),t))),r.a.createElement(m,null))}},196:function(e){e.exports=JSON.parse('{"data":{"allProjectsJson":{"edges":[{"node":{"name":"Brain Tracker","vc":"https://github.com/owaisj/brain-tracker","demo":"https://brain-tracker.herokuapp.com/","desc":"Full-stack brain tracking app built with Bulma, React/Redux, PostgreSQL, and Node"}},{"node":{"name":"Is It Open?","vc":"https://github.com/owaisj/find-library","demo":"https://expo.io/@owaisj/isitopen","desc":"A cross-platform mobile app to view open libraries. Made with React Native and Material UI."}},{"node":{"name":"Book Search","vc":"https://github.com/owaisj/book-search","demo":"https://mern-book-searcher.herokuapp.com/","desc":"Full-stack Reading list app made with the MERN stack"}},{"node":{"name":"KUT Scraper","vc":"https://github.com/owaisj/npr-mern","demo":"https://github.com/owaisj/npr-mern","desc":"Full-stack KUT.org news scraper with personal notes made with ReactJS and MongoDb."}},{"node":{"name":"Bamazon","vc":"https://github.com/owaisj/bamazon","demo":"https://github.com/owaisj/bamazon","desc":"A CLI storefront made with MySQL and Node.js"}},{"node":{"name":"Weather Mapper","vc":"https://github.com/owaisj/weather-map","demo":"https://owaisj.github.io/weather-map/","desc":"Client-side weather and map viewer for any city. Made with Materialize CSS, LeafletJS and jQuery."}},{"node":{"name":"Train Scheduler","vc":"https://github.com/owaisj/train-scheduler","demo":"https://owaisj.github.io/train-scheduler/","desc":"Client-side train scheduler made with jQuery and Firebase"}}]}}}')},197:function(e,t,a){e.exports=a.p+"static/1-be6f17c82935324046b209015dcb5c09.jpg"},198:function(e,t,a){e.exports=a.p+"static/2-337b3e9990595024c90e9e030930dcfd.jpg"},199:function(e,t,a){e.exports=a.p+"static/3-eb5f556b6d5be75c88de348256f65d7f.jpg"},200:function(e,t,a){e.exports=a.p+"static/4-2d996b2eb3bb1527c7450e874aae4565.jpg"},201:function(e,t,a){e.exports=a.p+"static/5-cd2e5681d5a8908f31d62c624ef2f45b.jpg"},202:function(e,t,a){e.exports=a.p+"static/6-0c89f3d4bb96c5be564cb1cb36e7a4ad.jpg"},203:function(e,t,a){e.exports=a.p+"static/7-059ebebe68483c4ea243a271717b1eb1.jpg"}}]);
//# sourceMappingURL=component---src-pages-portfolio-js-c5f153ffd53f3986bec8.js.map