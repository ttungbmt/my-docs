"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4501],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),u=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(i.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,h=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return t?r.createElement(h,s(s({ref:n},p),{},{components:t})):r.createElement(h,s({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var u=2;u<o;u++)s[u]=t[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2257:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return c}});var r=t(3117),a=t(102),o=(t(7294),t(3905)),s=["components"],l={},i="Hyper-V",u={unversionedId:"os/windows/hyper-v",id:"os/windows/hyper-v",title:"Hyper-V",description:"Enable Hyper-V",source:"@site/docs/os/windows/hyper-v.md",sourceDirName:"os/windows",slug:"/os/windows/hyper-v",permalink:"/my-docs/docs/os/windows/hyper-v",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/os/windows/hyper-v.md",tags:[],version:"current",frontMatter:{},sidebar:"windows",previous:{title:"WSL",permalink:"/my-docs/docs/os/windows/wsl"}},p={},c=[{value:"Enable Hyper-V",id:"enable-hyper-v",level:2},{value:"Activate enhanced session mode for Ubuntu VMs in Hyper-V",id:"activate-enhanced-session-mode-for-ubuntu-vms-in-hyper-v",level:2},{value:"Install xrdp",id:"install-xrdp",level:2},{value:"Firewall configuration",id:"firewall-configuration",level:3},{value:"Avoid black screen",id:"avoid-black-screen",level:3}],d={toc:c};function m(e){var n=e.components,l=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},d,l,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"hyper-v"},"Hyper-V"),(0,o.kt)("h2",{id:"enable-hyper-v"},"Enable Hyper-V"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Method 1"),": Enable Hyper-V using PowerShell"),(0,o.kt)("p",null,"Run PowerShell as adminstrator"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Hyper-V -All\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Method 2"),": Enable Hyper-V with CMD and DISM"),(0,o.kt)("p",null,"Run CMD as adminstrator"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"DISM /Online /Enable-Feature /All /FeatureName:Microsoft-Hyper-V\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Method 3"),":. Enable the Hyper-V role through Settings"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"Programs and Features > Turn Windows Features on or off > Hyper-V")," "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img.png",src:t(257).Z,width:"417",height:"370"})),(0,o.kt)("h2",{id:"activate-enhanced-session-mode-for-ubuntu-vms-in-hyper-v"},"Activate enhanced session mode for Ubuntu VMs in Hyper-V"),(0,o.kt)("p",null,"Link: ",(0,o.kt)("a",{parentName:"p",href:"https://4sysops.com/archives/activate-enhanced-session-mode-for-ubuntu-vms-in-hyper-v/"},"https://4sysops.com/archives/activate-enhanced-session-mode-for-ubuntu-vms-in-hyper-v/"),"\nLink: ",(0,o.kt)("a",{parentName:"p",href:"https://www.nakivo.com/blog/install-ubuntu-20-04-on-hyper-v-with-enhanced-session/"},"https://www.nakivo.com/blog/install-ubuntu-20-04-on-hyper-v-with-enhanced-session/")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"curl -s https://raw.githubusercontent.com/Hinara/linux-vm-tools/ubuntu20-04/ubuntu/20.04/install.sh | bash\n")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img.png",src:t(8454).Z,width:"616",height:"263"}),"\n",(0,o.kt)("img",{alt:"img.png",src:t(1212).Z,width:"720",height:"504"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'Set-VM -VMName "UDT-20" -EnhancedSessionTransportType HvSocket\n')),(0,o.kt)("h2",{id:"install-xrdp"},"Install xrdp"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt install xrdp\nadduser  xrdp ssl-cert\nsudo systemctl restart xrdb\n\nsudo micro /etc/xrdp/xrdp.ini\n")),(0,o.kt)("h3",{id:"firewall-configuration"},"Firewall configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo ufw status\nsudo ufw allow 3389\nsudo ufw reload\n")),(0,o.kt)("h3",{id:"avoid-black-screen"},"Avoid black screen"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"sudo micro /etc/xrdp/startwm.sh \n")),(0,o.kt)("p",null,"Add below 2 lines before ",(0,o.kt)("inlineCode",{parentName:"p"},"test -x /etc/X11/Xsession && exec /etc/X11/Xsession")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"unset DBUS_SESSION_BUS_ADDRESS\nunset XDG_RUNTIME_DIR\n")))}m.isMDXComponent=!0},257:function(e,n,t){n.Z=t.p+"assets/images/hyper-v-1-be3a153e1a5bc076e80d7afdbe1e7588.png"},8454:function(e,n,t){n.Z=t.p+"assets/images/hyper-v-2-041fce6f55b0f6217e0abbece7b969cd.png"},1212:function(e,n,t){n.Z=t.p+"assets/images/hyper-v-3-b418d71555b80381870ed6c660814a94.png"}}]);