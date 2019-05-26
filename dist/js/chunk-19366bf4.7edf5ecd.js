(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-19366bf4"],{4353:function(t,s,n){},de05:function(t,s,n){"use strict";var c=n("4353"),e=n.n(c);e.a},df64:function(t,s,n){"use strict";n.r(s);var c=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{attrs:{id:"form-element-switch-demo"}},[n("switch-state"),n("switch-color"),n("switch-text"),n("switch-icons"),n("switch-array-value"),n("switch-api")],1)},e=[],l=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("vx-card",{attrs:{title:"State","code-toggler":""}},[n("p",[t._v("To implement a switch element in the application, we add the component "),n("code",[t._v("vs-switch")])]),n("ul",{staticClass:"demo-alignment"},[n("li",[n("label",[t._v("true / active")]),n("vs-switch",{model:{value:t.switch1,callback:function(s){t.switch1=s},expression:"switch1"}})],1),n("li",[n("label",[t._v("false / inactive")]),n("vs-switch",{model:{value:t.switch2,callback:function(s){t.switch2=s},expression:"switch2"}})],1),n("li",[n("label",[t._v("disabled / active")]),n("vs-switch",{attrs:{disabled:"true"},model:{value:t.switch3,callback:function(s){t.switch3=s},expression:"switch3"}})],1),n("li",[n("label",[t._v("disabled / inactive")]),n("vs-switch",{attrs:{disabled:"true"},model:{value:t.switch4,callback:function(s){t.switch4=s},expression:"switch4"}})],1)]),n("template",{slot:"codeContainer"},[t._v('\n<template lang="html">\n  <ul class="switch-container">\n    <li>\n      <label>true / active</label>\n      <vs-switch v-model="switch1" />\n    </li>\n    <li>\n      <label>false / inactive</label>\n      <vs-switch v-model="switch2" />\n    </li>\n    <li>\n      <label>disabled / active</label>\n      <vs-switch disabled="true" v-model="switch3" />\n    </li>\n    <li>\n      <label>disabled / inactive</label>\n      <vs-switch disabled="true" v-model="switch4" />\n    </li>\n  </ul>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      switch1:true,\n      switch2:false,\n      switch3:true,\n      switch4:false,\n    }\n  }\n}\n<\/script>\n        ')])],2)},a=[],i={data:function(){return{switch1:!0,switch2:!1,switch3:!0,switch4:!1}}},o=i,r=n("2877"),v=Object(r["a"])(o,l,a,!1,null,null,null),h=v.exports,w=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("vx-card",{attrs:{title:"Color","code-toggler":""}},[n("span",[t._v("You can choose the default "),n("strong",[t._v("Switch")]),t._v(". You are able to use the Main Colors or "),n("strong",[t._v("RGB")]),t._v(" and "),n("strong",[t._v("HEX")]),t._v(" colors.")]),n("vs-alert",{staticClass:"mt-5",attrs:{icon:"warning",active:"true",color:"warning"}},[n("span",[t._v("Only "),n("strong",[t._v("RGB")]),t._v(" and "),n("strong",[t._v("HEX")]),t._v(" colors are supported.")])]),n("ul",{staticClass:"demo-alignment"},[n("li",[n("label",[t._v("Primary")]),n("vs-switch",{model:{value:t.switch1,callback:function(s){t.switch1=s},expression:"switch1"}})],1),n("li",[n("label",[t._v("Success")]),n("vs-switch",{attrs:{color:"success"},model:{value:t.switch2,callback:function(s){t.switch2=s},expression:"switch2"}})],1),n("li",[n("label",[t._v("Danger")]),n("vs-switch",{attrs:{color:"danger"},model:{value:t.switch3,callback:function(s){t.switch3=s},expression:"switch3"}})],1),n("li",[n("label",[t._v("Warning")]),n("vs-switch",{attrs:{color:"warning"},model:{value:t.switch4,callback:function(s){t.switch4=s},expression:"switch4"}})],1),n("li",[n("label",[t._v("Dark")]),n("vs-switch",{attrs:{color:"dark"},model:{value:t.switch5,callback:function(s){t.switch5=s},expression:"switch5"}})],1),n("li",{staticClass:"con-input-color"},[n("label",[t._v("Color: "),n("span",[t._v(t._s(t.color))])]),n("vs-switch",{attrs:{color:t.color},model:{value:t.switch6,callback:function(s){t.switch6=s},expression:"switch6"}})],1),n("li",{staticStyle:{"align-self":"flex-end"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.color,expression:"color"}],attrs:{type:"color"},domProps:{value:t.color},on:{input:function(s){s.target.composing||(t.color=s.target.value)}}})])]),n("template",{slot:"codeContainer"},[t._v('\n<template lang="html">\n  <ul class="con-s">\n    <li>\n      <label>Primary</label>\n      <vs-switch v-model="switch1" />\n    </li>\n    <li>\n      <label>Success</label>\n      <vs-switch color="success" v-model="switch2" />\n    </li>\n    <li>\n      <label>Danger</label>\n      <vs-switch color="danger" v-model="switch3" />\n    </li>\n    <li>\n      <label>Warning</label>\n      <vs-switch color="warning" v-model="switch4" />\n    </li>\n    <li>\n      <label>Dark</label>\n      <vs-switch color="dark" v-model="switch5" />\n    </li>\n    <li class="con-input-color">\n      <label>Color: <span>'+t._s(t.color)+'</span></label>\n      <input v-model="color" type="color">\n      <vs-switch :color="color" v-model="switch6" />\n    </li>\n  </ul>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      color:\'#5a3cc4\',\n      switch1:true,\n      switch2:true,\n      switch3:true,\n      switch4:true,\n      switch5:true,\n      switch6:true,\n    }\n  }\n}\n<\/script>\n        ')])],2)},u=[],p={data:function(){return{color:"#5a3cc4",switch1:!0,switch2:!0,switch3:!0,switch4:!0,switch5:!0,switch6:!0}}},d=p,f=Object(r["a"])(d,w,u,!1,null,null,null),m=f.exports,_=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("vx-card",{attrs:{title:"Text","code-toggler":""}},[n("span",[t._v("You can add a descriptive text with the slot "),n("code",[t._v("on")]),t._v(" or "),n("code",[t._v("off")]),t._v(". You can also join the text with the icons.")]),n("ul",{staticClass:"demo-alignment"},[n("li",[n("vs-switch",{model:{value:t.switch1,callback:function(s){t.switch1=s},expression:"switch1"}},[n("span",{attrs:{slot:"on"},slot:"on"},[t._v("On")]),n("span",{attrs:{slot:"off"},slot:"off"},[t._v("Off")])])],1),n("li",[n("vs-switch",{attrs:{color:"success"},model:{value:t.switch2,callback:function(s){t.switch2=s},expression:"switch2"}},[n("span",{attrs:{slot:"on"},slot:"on"},[t._v("Accept")]),n("span",{attrs:{slot:"off"},slot:"off"},[t._v("Cancel")])])],1),n("li",[n("vs-switch",{attrs:{color:"danger","vs-icon-off":"close"},model:{value:t.switch3,callback:function(s){t.switch3=s},expression:"switch3"}},[n("span",{attrs:{slot:"on"},slot:"on"},[t._v("Remove")])])],1),n("li",[n("vs-switch",{attrs:{color:"warning","vs-icon-on":"error_outline"},model:{value:t.switch4,callback:function(s){t.switch4=s},expression:"switch4"}},[n("span",{attrs:{slot:"off"},slot:"off"},[t._v("Prevent")])])],1),n("li",[n("vs-switch",{attrs:{color:"dark","icon-pack":"feather","vs-icon-on":"icon-check-circle","vs-icon-off":"icon-slash"},model:{value:t.switch5,callback:function(s){t.switch5=s},expression:"switch5"}},[n("span",{attrs:{slot:"on"},slot:"on"},[t._v("YES")]),n("span",{attrs:{slot:"off"},slot:"off"},[t._v("NO")])])],1)]),n("template",{slot:"codeContainer"},[t._v('\n<template>\n  <ul class="con-s">\n    <li>\n      <vs-switch v-model="switch1">\n        <span slot="on">On</span>\n        <span slot="off">Off</span>\n      </vs-switch>\n    </li>\n    <li>\n      <vs-switch color="success" v-model="switch2">\n        <span slot="on">Accept</span>\n        <span slot="off">Cancel</span>\n      </vs-switch>\n    </li>\n    <li>\n      <vs-switch color="danger" vs-icon-off="close" v-model="switch3">\n        <span slot="on">Remove</span>\n      </vs-switch>\n    </li>\n    <li>\n      <vs-switch color="warning" vs-icon-on="error_outline" v-model="switch4">\n        <span slot="off">Prevent</span>\n      </vs-switch>\n    </li>\n    <li>\n      <vs-switch color="dark" icon-pack="feather" vs-icon-on="icon-check-circle" vs-icon-off="icon-slash" v-model="switch5">\n        <span slot="on">YES</span>\n        <span slot="off">NO</span>\n      </vs-switch>\n    </li>\n  </ul>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      switch1:true,\n      switch2:true,\n      switch3:true,\n      switch4:true,\n      switch5:true,\n    }\n  }\n}\n<\/script>         \n        ')])],2)},b=[],k={data:function(){return{switch1:!0,switch2:!0,switch3:!0,switch4:!0,switch5:!0}}},g=k,y=Object(r["a"])(g,_,b,!1,null,null,null),x=y.exports,A=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("vx-card",{attrs:{title:"Icons","code-toggler":""}},[n("p",[t._v("We can add a representative icon inside our switch with the property "),n("code",[t._v("vs-icon")]),t._v(".")]),n("p",[t._v("If you only need to add the icon in one of the states you can do it with the property "),n("code",[t._v("vs-icon-on")]),t._v(" or "),n("code",[t._v("vs-icon-off")])]),n("vs-alert",{staticClass:"mt-5",attrs:{color:"primary",icon:"new_releases",active:"true"}},[n("span",[t._v("Vuesax uses the "),n("strong",[t._v("Google Material Icons")]),t._v(" font library. For a list of all available icons, visit the official "),n("a",{attrs:{href:"https://material.io/icons/",target:"_blank"}},[t._v("Material Icons page.")])])]),n("ul",{staticClass:"demo-alignment"},[n("li",[n("label",[t._v("Primary")]),n("vs-switch",{attrs:{"icon-pack":"feather","vs-icon-off":"icon-bell","vs-icon-on":"icon-check"},model:{value:t.switch1,callback:function(s){t.switch1=s},expression:"switch1"}})],1),n("li",[n("label",[t._v("Success")]),n("vs-switch",{attrs:{color:"success","icon-pack":"feather","vs-icon":"icon-check"},model:{value:t.switch2,callback:function(s){t.switch2=s},expression:"switch2"}})],1),n("li",[n("label",[t._v("Danger")]),n("vs-switch",{attrs:{color:"danger","icon-pack":"feather","vs-icon":"icon-x"},model:{value:t.switch3,callback:function(s){t.switch3=s},expression:"switch3"}})],1),n("li",[n("label",[t._v("Warning")]),n("vs-switch",{attrs:{color:"warning","icon-pack":"feather","vs-icon":"icon-alert-circle"},model:{value:t.switch4,callback:function(s){t.switch4=s},expression:"switch4"}})],1),n("li",[n("label",[t._v("Dark")]),n("vs-switch",{attrs:{color:"dark","icon-pack":"feather","vs-icon":"icon-volume-x"},model:{value:t.switch5,callback:function(s){t.switch5=s},expression:"switch5"}})],1),n("li",[n("label",[t._v("rgb(color) / #color")]),n("vs-switch",{attrs:{color:"rgb(51, 53, 83)","icon-pack":"feather","vs-icon":"icon-camera"},model:{value:t.switch6,callback:function(s){t.switch6=s},expression:"switch6"}})],1)]),n("template",{slot:"codeContainer"},[t._v('\n<template>\n    <ul class="demo-alignment">\n        <li>\n            <label>Primary</label>\n            <vs-switch v-model="switch1" icon-pack="feather" vs-icon-off="icon-bell" vs-icon-on="icon-check" />\n        </li>\n        <li>\n            <label>Success</label>\n            <vs-switch color="success" v-model="switch2" icon-pack="feather" vs-icon="icon-check" />\n        </li>\n        <li>\n            <label>Danger</label>\n            <vs-switch color="danger" v-model="switch3" icon-pack="feather" vs-icon="icon-x" />\n        </li>\n        <li>\n            <label>Warning</label>\n            <vs-switch color="warning" v-model="switch4" icon-pack="feather" vs-icon="icon-alert-circle" />\n        </li>\n        <li>\n            <label>Dark</label>\n            <vs-switch color="dark" v-model="switch5" icon-pack="feather" vs-icon="icon-volume-x" />\n        </li>\n        <li>\n            <label>rgb(color) / #color</label>\n            <vs-switch color="rgb(51, 53, 83)" v-model="switch6" icon-pack="feather" vs-icon="icon-camera" />\n        </li>\n    </ul>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      switch1:false,\n      switch2:false,\n      switch3:false,\n      switch4:false,\n      switch5:false,\n      switch6:false\n    }\n  }\n}\n<\/script>\n        ')])],2)},C=[],S={data:function(){return{switch1:!1,switch2:!1,switch3:!1,switch4:!1,switch5:!1,switch6:!1}}},I=S,O=Object(r["a"])(I,A,C,!1,null,null,null),E=O.exports,D=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("vx-card",{attrs:{title:"Array Value","code-toggler":""}},[n("span",[t._v("For saving the values in an array, you could simply pass it as a value.")]),n("vs-alert",{staticClass:"mt-5",attrs:{icon:"warning",active:"true",color:"warning"}},[n("span",[t._v("For using an array as a value, we need to use the "),n("code",[t._v("vs-value")]),t._v(" property inside the switch component. That is the value that will be added to the array.")])]),n("ul",{staticClass:"demo-alignment"},[n("li",[n("vs-switch",{attrs:{"vs-icon-on":"check",color:"success","vs-value":"luis"},model:{value:t.switchArray,callback:function(s){t.switchArray=s},expression:"switchArray"}},[n("span",{attrs:{slot:"off"},slot:"off"},[t._v("Luis")])])],1),n("li",[n("vs-switch",{attrs:{"vs-icon-on":"check",color:"success","vs-value":"carols"},model:{value:t.switchArray,callback:function(s){t.switchArray=s},expression:"switchArray"}},[n("span",{attrs:{slot:"off"},slot:"off"},[t._v("Carols")])])],1),n("li",[n("vs-switch",{attrs:{"vs-icon-on":"check",color:"success","vs-value":"summer"},model:{value:t.switchArray,callback:function(s){t.switchArray=s},expression:"switchArray"}},[n("span",{attrs:{slot:"off"},slot:"off"},[t._v("Summer")])])],1),n("li",[n("vs-switch",{attrs:{"vs-icon-on":"check",color:"success","vs-value":"lyon"},model:{value:t.switchArray,callback:function(s){t.switchArray=s},expression:"switchArray"}},[n("span",{attrs:{slot:"off"},slot:"off"},[t._v("Lyon")])])],1)]),n("p",{staticClass:"op-block mt-5"},[t._v(t._s(t.switchArray))]),n("template",{slot:"codeContainer"},[t._v('\n<template>\n  <ul class="con-s">\n    <li class="modelx">\n      '+t._s("{{ switchArray }}")+'\n    </li>\n    <li>\n      <vs-switch vs-icon-on="check" color="success" v-model="switchArray" vs-value="luis">\n        <span slot="off">Luis</span>\n      </vs-switch>\n    </li>\n    <li>\n      <vs-switch vs-icon-on="check" color="success" v-model="switchArray" vs-value="carols">\n        <span slot="off">Carols</span>\n      </vs-switch>\n    </li>\n    <li>\n      <vs-switch vs-icon-on="check" color="success" v-model="switchArray" vs-value="summer">\n        <span slot="off">Summer</span>\n      </vs-switch>\n    </li>\n    <li>\n      <vs-switch vs-icon-on="check" color="success" v-model="switchArray" vs-value="lyon">\n        <span slot="off">Lyon</span>\n      </vs-switch>\n    </li>\n  </ul>\n</template>\n\n<script>\nexport default {\n  data(){\n    return {\n      switchArray:[\'luis\'],\n    }\n  }\n}\n<\/script>\n        ')])],2)},P=[],j={data:function(){return{switchArray:["luis"]}}},M=j,$=Object(r["a"])(M,D,P,!1,null,null,null),T=$.exports,Y=function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("vx-card",{attrs:{title:"API"}},[n("vs-table",{attrs:{stripe:"",data:t.api},scopedSlots:t._u([{key:"default",fn:function(s){var c=s.data;return t._l(c,function(s,e){return n("vs-tr",{key:e},[n("vs-td",[t._v("\n                    "+t._s(c[e].name)+"\n                ")]),n("vs-td",[t._v("\n                    "+t._s(c[e].type)+"\n                ")]),n("vs-td",[t._v("\n                    "+t._s(c[e].params)+"\n                ")]),n("vs-td",[t._v("\n                    "+t._s(c[e].desc)+"\n                ")]),n("vs-td",[t._v("\n                    "+t._s(c[e].default)+"\n                ")])],1)})}}])},[n("template",{slot:"thead"},[n("vs-th",[t._v("Name")]),n("vs-th",[t._v("Type")]),n("vs-th",[t._v("Parametres")]),n("vs-th",[t._v("Description")]),n("vs-th",[t._v("Default")])],1)],2)],1)},F=[],L={data:function(){return{api:[{name:"v-model",type:"boolean || Array",params:"true || false || []",desc:"Link values.",default:""},{name:"vs-value",type:"String",params:"",desc:"Value if different from a boolean.",default:""},{name:"color",type:"String",params:"Default Colors | HEX | RGB",desc:"Type of element or color.",default:"primary"},{name:"vs-icon",type:"String",params:"Material Icons",desc:"Icon within the element.",default:""},{name:"vs-icon-on",type:"String",params:"Material Icons",desc:"Icon that appears when the item is in active state.",default:""},{name:"vs-icon-off",type:"String",params:"Material Icons",desc:"Icon that appears in the inactive state.",default:""},{name:"icon-pack",type:"String",params:" Icon Pack Class Name",desc:"Icon Pack to be used. If not set, icon will default to Material Icons. ex. FA4 uses fa or fas, FA5 uses fas, far, or fal.",default:"material-icons"}]}}},N=L,R=Object(r["a"])(N,Y,F,!1,null,null,null),W=R.exports,G={components:{SwitchState:h,SwitchColor:m,SwitchText:x,SwitchIcons:E,SwitchArrayValue:T,SwitchApi:W}},V=G,B=(n("de05"),Object(r["a"])(V,c,e,!1,null,null,null));s["default"]=B.exports}}]);
//# sourceMappingURL=chunk-19366bf4.7edf5ecd.js.map