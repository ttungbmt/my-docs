"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8399],{3905:function(e,o,n){n.d(o,{Zo:function(){return i},kt:function(){return g}});var t=n(7294);function r(e,o,n){return o in e?Object.defineProperty(e,o,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[o]=n,e}function a(e,o){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(e,o).enumerable}))),n.push.apply(n,t)}return n}function d(e){for(var o=1;o<arguments.length;o++){var n=null!=arguments[o]?arguments[o]:{};o%2?a(Object(n),!0).forEach((function(o){r(e,o,n[o])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(o){Object.defineProperty(e,o,Object.getOwnPropertyDescriptor(n,o))}))}return e}function l(e,o){if(null==e)return{};var n,t,r=function(e,o){if(null==e)return{};var n,t,r={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],o.indexOf(n)>=0||(r[n]=e[n]);return r}(e,o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],o.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=t.createContext({}),c=function(e){var o=t.useContext(s),n=o;return e&&(n="function"==typeof e?e(o):d(d({},o),e)),n},i=function(e){var o=c(e.components);return t.createElement(s.Provider,{value:o},e.children)},u={inlineCode:"code",wrapper:function(e){var o=e.children;return t.createElement(t.Fragment,{},o)}},p=t.forwardRef((function(e,o){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=c(n),g=r,m=p["".concat(s,".").concat(g)]||p[g]||u[g]||a;return n?t.createElement(m,d(d({ref:o},i),{},{components:n})):t.createElement(m,d({ref:o},i))}));function g(e,o){var n=arguments,r=o&&o.mdxType;if("string"==typeof e||r){var a=n.length,d=new Array(a);d[0]=p;var l={};for(var s in o)hasOwnProperty.call(o,s)&&(l[s]=o[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,d[1]=l;for(var c=2;c<a;c++)d[c]=n[c];return t.createElement.apply(null,d)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2795:function(e,o,n){n.r(o),n.d(o,{assets:function(){return i},contentTitle:function(){return s},default:function(){return g},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return u}});var t=n(3117),r=n(102),a=(n(7294),n(3905)),d=["components"],l={title:"Get Started"},s="Geonode: Get Started",c={unversionedId:"gis/geonode/get-started",id:"gis/geonode/get-started",title:"Get Started",description:"Geonode 2.10.x",source:"@site/docs/gis/geonode/get-started.md",sourceDirName:"gis/geonode",slug:"/gis/geonode/get-started",permalink:"/my-docs/docs/gis/geonode/get-started",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/gis/geonode/get-started.md",tags:[],version:"current",frontMatter:{title:"Get Started"},sidebar:"geonode",next:{title:"Geoserver",permalink:"/my-docs/docs/gis/geonode/geoserver"}},i={},u=[{value:"Geonode 2.10.x",id:"geonode-210x",level:2},{value:"Geonode 3.1.x",id:"geonode-31x",level:2},{value:"Geonode 3.2.x",id:"geonode-32x",level:2},{value:"Geonode 3.3.x",id:"geonode-33x",level:2},{value:"Geonode 4.x",id:"geonode-4x",level:2},{value:"GeoPortal",id:"geoportal",level:2}],p={toc:u};function g(e){var o=e.components,n=(0,r.Z)(e,d);return(0,a.kt)("wrapper",(0,t.Z)({},p,n,{components:o,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"geonode-get-started"},"Geonode: Get Started"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo adduser geonode\n# The following command adds the user geonode to group sudo\nsudo usermod -aG sudo geonode\n\nsu geonode\n")),(0,a.kt)("h2",{id:"geonode-210x"},"Geonode 2.10.x"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo useradd docker\nsudo usermod -aG docker geonode\n\nsudo mkdir -p ./geonode21\nsudo usermod -a -G www-data geonode\nsudo chown -Rf ubuntu:www-data ./geonode21\nsudo chmod -Rf 775 ./geonode21\n\ngit clone https://github.com/GeoNode/geonode.git -b 2.10.x geonode21\ncd geonode21\ndocker-compose -f docker-compose.yml -f docker-compose.override.localhost.yml pull # Error\ndocker-compose -f docker-compose.yml -f docker-compose.override.localhost.yml up -d # Error\n\ndocker-compose -f docker-compose.yml -f docker-compose.override.localhost.yml up --build\n\nrm -rf geonode21\n")),(0,a.kt)("h2",{id:"geonode-31x"},"Geonode 3.1.x"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo mkdir -p ./geonode31\nsudo usermod -a -G www-data geonode\nsudo chown -Rf ubuntu:www-data ./geonode31\nsudo chmod -Rf 775 ./geonode31\n\ngit clone https://github.com/GeoNode/geonode.git -b 3.1.x geonode31\ncd geonode31\ndocker-compose -f docker-compose.yml pull\ndocker-compose -f docker-compose.yml up --build -d\n")),(0,a.kt)("h2",{id:"geonode-32x"},"Geonode 3.2.x"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/GeoNode/geonode.git -b 3.2.x geonode32\ncd geonode32\ndocker-compose build --no-cache\ndocker-compose up -d\n")),(0,a.kt)("admonition",{title:"Error",type:"danger"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"Login Geoserver: Mismatching redirect URI."))),(0,a.kt)("h2",{id:"geonode-33x"},"Geonode 3.3.x"),(0,a.kt)("p",null,"Worked"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/GeoNode/geonode.git -b 3.3.x geonode33\ncd geonode33\ndocker-compose build --no-cache\ndocker-compose up -d\n\n# Error: Thumbnail\n# Error: Dev (not found css/js)\n")),(0,a.kt)("h2",{id:"geonode-4x"},"Geonode 4.x"),(0,a.kt)("p",null,"Worked"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/GeoNode/geonode.git -b 4.x geonode4\ncd geonode4\ndocker-compose build --no-cache\ndocker-compose up -d\n\n# Error: Thumbnail\n# Error: Dev (not found js)\n")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"geoportal"},"GeoPortal"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},'exec: "/usr/src/geonode/entrypoint.sh": permission denied: unknown')),(0,a.kt)("p",null,"Run command to set permissions"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo chmod -Rf 775 ~/VNTT/GeoPortal33\n")),(0,a.kt)("p",null,"Add file"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"version: '3.4'\n\nservices:\n\n  django:\n    build: .\n    # Loading the app is defined here to allow for\n    # autoreload on changes it is mounted on top of the\n    # old copy that docker added when creating the image\n    volumes:\n      - '.:/usr/src/app'\n    environment:\n      - DEBUG=False\n      - GEONODE_LB_HOST_IP=geoportal.local\n      - GEONODE_LB_PORT=90\n      - SITEURL=http://geoportal.local:90/\n      - GEOSERVER_PUBLIC_LOCATION=http://geoportal.local:90/geoserver/\n      - GEOSERVER_WEB_UI_LOCATION=http://geoportal.local:90/geoserver/\n\n  celery:\n    build: .\n    volumes:\n      - '.:/usr/src/app'\n    environment:\n      - DEBUG=False\n      - GEONODE_LB_HOST_IP=geoportal.local\n      - GEONODE_LB_PORT=90\n      - SITEURL=http://geoportal.local:90/\n      - GEOSERVER_PUBLIC_LOCATION=http://geoportal.local:90/geoserver/\n      - GEOSERVER_WEB_UI_LOCATION=http://geoportal.local:90/geoserver/\n\n  geoserver:\n    environment:\n      - GEONODE_LB_HOST_IP=geoportal.local\n      - GEONODE_LB_PORT=90\n  \n\n  geonode:\n    environment:\n      # - HTTPS_HOST=${HTTPS_HOST}\n      - HTTP_HOST=geoportal.local\n    ports:\n      - \"90:80\"\n      - \"4490:443\"\n")),(0,a.kt)("p",null,"Edit .env"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-apacheconf"},"GEONODE_CLIENT_LAYER_PREVIEW_LIBRARY=mapstore # react, leaflet, mapstore\nMAPBOX_ACCESS_TOKEN=pk.eyJ1IjoidHR1bmdibXQiLCJhIjoiY2t3ZGFqeTJxMGlscDJ2cG45MmNtam5hbSJ9.L-f-WvMUFZSDvbw07xUlZA\n\nDEFAULT_MAP_CENTER_X=\nDEFAULT_MAP_CENTER_Y=\nDEFAULT_MAP_ZOOM=\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'ADMIN_SITE_HEADER = "Django administration"\nADMIN_SITE_TITLE = "My shiny new administration"\nADMIN_INDEX_TITLE = "Site administration"\n')),(0,a.kt)("p",null,"Edit urls.py"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"from django.contrib import admin\nfrom django.conf import settings\n\nadmin.site.site_header = settings.ADMIN_SITE_HEADER\nadmin.site.site_title = settings.ADMIN_SITE_TITLE\nadmin.site.index_title = settings.ADMIN_INDEX_TITLE\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.geonode.org/en/master/admin/mgmt_commands/index.html"},"https://docs.geonode.org/en/master/admin/mgmt_commands/index.html"))))}g.isMDXComponent=!0}}]);