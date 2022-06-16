"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6053],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var s=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=s.createContext({}),u=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return s.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},p=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),m=a,d=p["".concat(l,".").concat(m)]||p[m]||h[m]||r;return n?s.createElement(d,i(i({ref:t},c),{},{components:n})):s.createElement(d,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}p.displayName="MDXCreateElement"},3864:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return h}});var s=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],o={},l="Get Started",u={unversionedId:"os/ubuntu/get-started",id:"os/ubuntu/get-started",title:"Get Started",description:"- https://github.com/JREAM/ubuntu-cheatsheet",source:"@site/docs/os/ubuntu/get-started.md",sourceDirName:"os/ubuntu",slug:"/os/ubuntu/get-started",permalink:"/my-docs/docs/os/ubuntu/get-started",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/os/ubuntu/get-started.md",tags:[],version:"current",frontMatter:{},sidebar:"ubuntu",next:{title:"GUI",permalink:"/my-docs/docs/os/ubuntu/GUI"}},c={},h=[{value:"Install basic packages",id:"install-basic-packages",level:2},{value:"NodeJS",id:"nodejs",level:2},{value:"Installation",id:"installation",level:3},{value:"Switching the NodeJs version",id:"switching-the-nodejs-version",level:3},{value:"Disk Space",id:"disk-space",level:2},{value:"GUI",id:"gui",level:2}],p={toc:h};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,s.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"get-started"},"Get Started"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/JREAM/ubuntu-cheatsheet"},"https://github.com/JREAM/ubuntu-cheatsheet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://github.com/sudheerj/Linux-cheat-sheet"},"https://github.com/sudheerj/Linux-cheat-sheet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gist.github.com/miranda-zhang/c580cc45bed3317501a6071726d929c0"},"https://gist.github.com/miranda-zhang/c580cc45bed3317501a6071726d929c0")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.linuxtrainingacademy.com/linux-commands-cheat-sheet/"},"https://www.linuxtrainingacademy.com/linux-commands-cheat-sheet/"))),(0,r.kt)("h2",{id:"install-basic-packages"},"Install basic packages"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"# Basic\nsudo apt install net-tools telnet micro\n\n# ohmyzsh\nsudo apt install zsh\nsh -c \"$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)\"\n\n# zsh-autosuggestions\ngit clone https://github.com/zsh-users/zsh-autosuggestions ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions\nsed -i 's~plugins=(~plugins=(zsh-autosuggestions ~g' ~/.zshrc\n\n# zsh-syntax-highlighting\ngit clone https://github.com/zsh-users/zsh-syntax-highlighting.git ${ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting\nsed -i 's~plugins=(~plugins=(zsh-syntax-highlighting ~g' ~/.zshrc\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# Add lines to files\necho "vsftpd test file" | sudo tee /home/sammy/ftp/files/test.txt\n')),(0,r.kt)("h2",{id:"nodejs"},"NodeJS"),(0,r.kt)("h3",{id:"installation"},"Installation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash\n\n# Add following lines to ~/.zshrc and ~/.bashrc. Restart WSL to apply\nexport NVM_DIR="$HOME/.nvm"\n[ -s "$NVM_DIR/nvm.sh" ] && \\. "$NVM_DIR/nvm.sh"  # This loads nvm\n\n\n# Get a list of all available NodeJs versions\nnvm ls available # windows\nnvm ls-remote  # MacOs/Linux\n\n# Install latest NodeJs version\nnvm install node\n# Install latest LTS Release\nnvm install --lts\n# Install particular NodeJs version\nnvm install 12.13.1\n# UnInstall the multiple NodeJs version\nnvm uninstall 8.11.1\n')),(0,r.kt)("h3",{id:"switching-the-nodejs-version"},"Switching the NodeJs version"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"nvm ls\nnvm use 12.13.1\n\n# Run to specific NodeJs version, without switching\nnvm run 8.11.1 app.js\nnvm exec 8.11.1 node app.js\n")),(0,r.kt)("h2",{id:"disk-space"},"Disk Space"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"df -h\ndf -h ~/VNTT\n")),(0,r.kt)("h2",{id:"gui"},"GUI"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows/wsl/tutorials/gui-apps"},"https://docs.microsoft.com/en-us/windows/wsl/tutorials/gui-apps"))))}m.isMDXComponent=!0}}]);