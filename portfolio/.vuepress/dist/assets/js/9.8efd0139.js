(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{294:function(t,e,n){},303:function(t,e,n){"use strict";var r=n(294);n.n(r).a},311:function(t,e,n){"use strict";n.r(e);n(86),n(88),n(160),n(161),n(23),n(87);var r={computed:{isSingleProject:function(){var t=this.$route.path;if(t.includes("works")&&t.length>="/works/".length+1)return!0},isSingleJournal:function(){var t=this.$route.path;if(t.includes("journal")&&t.length>="/journal/".length+1)return!0}},updated:function(){document.querySelectorAll("p img").forEach((function(t){var e=t.parentNode,n=e.children,r=document.createDocumentFragment();Array.from(n).forEach((function(t){r.appendChild(t)})),e.parentNode.replaceChild(r,e)}))}},a=(n(303),n(38)),o=Object(a.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper"},[n("Navbar",{attrs:{logo:t.$site.themeConfig.logo,sticky:"/"===t.$route.path}}),t._v(" "),n("div",{staticClass:"container"},["/"===t.$route.path?n("div",{style:{marginTop:"14vw"}},[n("Content")],1):t._e(),t._v(" "),t.isSingleProject?n("div",[n("SingleProjectHeader",{attrs:{title:t.$page.frontmatter.title,year:t.$page.frontmatter.year.toString(),categories:t.$page.frontmatter.categories}}),t._v(" "),n("Content")],1):t._e(),t._v(" "),"/journal/"===t.$route.path?n("div",{staticClass:"journal-list"},[n("Content")],1):t._e(),t._v(" "),t.isSingleJournal?n("div",{staticClass:"single-journal"},[n("Content")],1):t._e()]),t._v(" "),n("Footer")],1)}),[],!1,null,null,null);e.default=o.exports}}]);