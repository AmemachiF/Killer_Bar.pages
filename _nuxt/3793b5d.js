(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{441:function(t,e,n){var content=n(458);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(45).default)("8b9781fe",content,!0,{sourceMap:!1})},457:function(t,e,n){"use strict";n(441)},458:function(t,e,n){(e=n(44)(!1)).push([t.i,".game-aspect[data-v-98d88fa0]{margin:0 auto}.game-aspect .card-body[data-v-98d88fa0]{padding:0}#game[data-v-98d88fa0],.game-aspect[data-v-98d88fa0]{height:100%;width:calc(57.14286vh - 114.28571px);max-width:100%}",""]),t.exports=e},480:function(t,e,n){"use strict";n.r(e);var r=n(1).default.extend({data:function(){return{newVersion:!1}}}),c=(n(457),n(39)),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-card",{staticClass:"game-aspect",scopedSlots:t._u([{key:"header",fn:function(){return[n("span",[t._v("\n      "+t._s(t.newVersion?"重制版（开发中）":"原版")+"\n    ")]),t._v(" "),n("span",{staticClass:"d-inline float-right"},[n("b-button",{on:{click:function(e){t.newVersion=!t.newVersion}}},[t._v("\n        切换"+t._s(t.newVersion?"原版":"重制版（开发中）")+"\n      ")])],1)]},proxy:!0}])},[t._v(" "),n("b-card-text",[n("b-aspect",{attrs:{aspect:"4:7"}},[n("iframe",{attrs:{id:"game",frameborder:"0",src:"./synthetic_game"+(t.newVersion?"":"_old")+"/index.html"}})])],1)],1)}),[],!1,null,"98d88fa0",null);e.default=component.exports},489:function(t,e,n){"use strict";n.r(e);var r=n(1).default.extend({}),c=n(39),component=Object(c.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("b-container",{attrs:{fluid:""}},[e("GameCard")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{GameCard:n(480).default})}}]);