(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{1083:function(s,a,t){"use strict";t.r(a);var n=t(15),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"yum"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#yum"}},[s._v("#")]),s._v(" yum")]),s._v(" "),t("h2",{attrs:{id:"配置阿里云-yum-源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置阿里云-yum-源"}},[s._v("#")]),s._v(" 配置阿里云 YUM 源")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 备份原始镜像文件，防止出错后找不回来")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 下载阿里云的")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-7.repo\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 清理缓存")]),s._v("\nyum clean all\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新缓存　")]),s._v("\nyum makecache\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br")])]),t("h2",{attrs:{id:"包列表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#包列表"}},[s._v("#")]),s._v(" 包列表")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出资源库中所有可以安装或更新的 rpm 包")]),s._v("\nyum list\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出资源库中特定的可以安装或更新以及已经安装的 rpm 包")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注:可以在 rpm 包名中使用匹配符,如列出所有以 mozilla 开头的 rpm 包")]),s._v("\nyum list mozilla"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#yum list mozilla*")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出资源库中所有可以更新的 rpm 包")]),s._v("\nyum list updates\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出已经安装的所有的 rpm 包")]),s._v("\nyum list installed\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 列出已经安装的但是不包含在资源库中的 rpm 包")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注:通过其它网站下载安装的 rpm 包")]),s._v("\nyum list extras\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br")])])])}),[],!1,null,null,null);a.default=e.exports}}]);