"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8027],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(f,a(a({ref:n},p),{},{components:t})):r.createElement(f,a({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4878:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var r=t(3117),o=t(102),i=(t(7294),t(3905)),a=["components"],l={},s="Terminal",c={unversionedId:"os/windows/terminal",id:"os/windows/terminal",title:"Terminal",description:"Installation",source:"@site/docs/os/windows/terminal.md",sourceDirName:"os/windows",slug:"/os/windows/terminal",permalink:"/my-docs/docs/os/windows/terminal",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/os/windows/terminal.md",tags:[],version:"current",frontMatter:{},sidebar:"windows",previous:{title:"Portainer",permalink:"/my-docs/docs/os/windows/portainer"},next:{title:"WSL",permalink:"/my-docs/docs/os/windows/wsl"}},p={},u=[{value:"Installation",id:"installation",level:3}],d={toc:u};function m(e){var n=e.components,l=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,l,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"terminal"},"Terminal"),(0,i.kt)("h3",{id:"installation"},"Installation"),(0,i.kt)("p",null,"If Winget is not recognized in Windows 11, download or update App Installer"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img.png",src:t(7604).Z,width:"700",height:"419"})),(0,i.kt)("p",null,"Open PowerShell as Administrator"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"Set-ExecutionPolicy RemoteSigned\n# Install Scoop\niwr -useb get.scoop.sh | iex \n\nwinget install JanDeDobbeleer.OhMyPosh\n\n# Install packages\nInstall-Module posh-git -Force\nInstall-Module PSReadLine -Force\nInstall-Module -Name Terminal-Icons -Repository PSGallery -Force\nInstall-Module -Name Z -Force\n\n# Fuzzy finder\nscoop install fzf\nInstall-Module -Name PSFzf -Force\n")),(0,i.kt)("p",null,"Edit your PowerShell profile script ",(0,i.kt)("inlineCode",{parentName:"p"},"notepad $PROFILE"),". Then add the following line"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# Load prompt configs\noh-my-posh init pwsh --config \"$env:POSH_THEMES_PATH\\M365Princess.omp.json\" | Invoke-Expression\n\n# PowerShell environment for Git\nImport-Module posh-git\n\n# Terminal-Icons\nImport-Module Terminal-Icons\n\n# PSReadLine\nImport-Module PSReadLine\nSet-PSReadLineOption -PredictionSource History\nSet-PSReadLineOption -PredictionViewStyle ListView\n\n# Fzf\nImport-Module PSFzf\nSet-PsFzfOption -PsReadLineChordProvider 'Ctrl+f' -PSReadLineChordReverseHistory 'Ctrl+r'\n\n# Alias (Optional)\nSet-Alias g git\nSet-Alias ll ls\nSet-Alias grep findstr\n\n# Ultilities (Optional)\nfunction which ($command) {\n    Get-Command -Name $command -ErrorAction SilentlyContinue |\n        Select-Object -ExpandProperty Path -ErrorAction SilentlyContinue\n}\n")))}m.isMDXComponent=!0},7604:function(e,n,t){n.Z=t.p+"assets/images/terminal-1-c4ba7f5987e36defc0f116ce7c41a032.png"}}]);