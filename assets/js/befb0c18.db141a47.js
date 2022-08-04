"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[297],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return f}});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),d=c(n),f=s,m=d["".concat(i,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,a(a({ref:t},l),{},{components:n})):r.createElement(m,a({ref:t},l))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=d;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u.mdxType="string"==typeof e?e:s,a[1]=u;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8420:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return i},default:function(){return f},frontMatter:function(){return u},metadata:function(){return c},toc:function(){return p}});var r=n(3117),s=n(102),o=(n(7294),n(3905)),a=["components"],u={},i="SSH",c={unversionedId:"os/ubuntu/ssh",id:"os/ubuntu/ssh",title:"SSH",description:"Installation",source:"@site/docs/os/ubuntu/ssh.md",sourceDirName:"os/ubuntu",slug:"/os/ubuntu/ssh",permalink:"/my-docs/docs/os/ubuntu/ssh",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/os/ubuntu/ssh.md",tags:[],version:"current",frontMatter:{},sidebar:"ubuntu",previous:{title:"Disk Usage",permalink:"/my-docs/docs/os/ubuntu/disk-usage"},next:{title:"FTP Server",permalink:"/my-docs/docs/os/ubuntu/ftp-server"}},l={},p=[{value:"Installation",id:"installation",level:2},{value:"Connecting to a server",id:"connecting-to-a-server",level:2},{value:"Setting Up SSH Keys",id:"setting-up-ssh-keys",level:2}],d={toc:p};function f(e){var t=e.components,n=(0,s.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ssh"},"SSH"),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get install openssh-server\nsudo systemctl enable ssh\nsudo systemctl start ssh\n\n# Check port SSH\nnetstat -nltp | grep sshd\n\n# Configure firewall and open port\nsudo ufw allow ssh\nsudo ufw enable\nsudo ufw status\n")),(0,o.kt)("h2",{id:"connecting-to-a-server"},"Connecting to a server"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"\n\n\n# Method 1\nssh -p PORT USERNAME@IP\n\nssh USERNAME@IP -i ~/.ssh/rsa_key.pub\n# Method 2\nsshpass -p PASSWORD ssh -p PORT USERNAME@\n\n")),(0,o.kt)("h2",{id:"setting-up-ssh-keys"},"Setting Up SSH Keys"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"ssh-keygen\nssh-copy-id -i ~/.ssh/id_rsa.pub USERNAME@IP\n")))}f.isMDXComponent=!0}}]);