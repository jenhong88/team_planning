(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e173924"],{"0360":function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"dashboard-analytics"}},[i("div",{staticClass:"vx-row"},[i("div",{staticClass:"vx-col w-full lg:w-3/3 mb-base height"},[i("vx-card",[i("div",{staticClass:"mt-5"},[i("gmap-map",{staticStyle:{width:"100%",height:"500px"},attrs:{center:t.center,zoom:15}},[i("gmap-info-window",{attrs:{options:t.infoOptions,position:t.infoWindowPos,opened:t.infoWinOpen},on:{closeclick:function(e){t.infoWinOpen=!1}}},[t._v("\n                    "+t._s(t.infoContent)+"\n                ")]),t._l(t.markers,function(e,o){return i("gmap-marker",{key:o,attrs:{position:e.position,clickable:!0},on:{click:function(i){return t.toggleInfoWindow(e,o)}}})})],2)],1)])],1),i("div",{staticClass:"vx-col w-full lg:w-1/3 mb-base height"},[i("vx-card",[i("div",{attrs:{slot:"no-body"},slot:"no-body"},[i("img",{staticClass:"responsive card-img-top",attrs:{src:o("da26")("./"+t.card_1.contentImg1),alt:"content-img"}})]),i("h5",{staticClass:"mb-2"},[t._v(t._s(t.card_1.title))]),i("p",{staticClass:"text-grey"},[t._v(t._s(t.card_1.subtitle))]),i("p",{staticClass:"text-grey"},[t._v(t._s(t.card_1.subtitle_2))]),i("div",{staticClass:"flex justify-between flex-wrap"},[i("vs-button",{staticClass:"mt-4 shadow-lg",attrs:{type:"gradient",color:"#7367F0","gradient-color-secondary":"#CE9FFC"}},[t._v("Let's Go!!!")]),i("vs-button",{staticClass:"mt-4",attrs:{type:"border",color:"#b9b9b9"}},[t._v("Hard Pass")])],1)])],1),i("div",{staticClass:"vx-col w-full lg:w-1/3 mb-base height"},[i("vx-card",[i("div",{attrs:{slot:"no-body"},slot:"no-body"},[i("img",{staticClass:"responsive card-img-top",attrs:{src:o("da26")("./"+t.card_1.contentImg1),alt:"content-img"}})]),i("h5",{staticClass:"mb-2"},[t._v(t._s(t.card_1.title))]),i("p",{staticClass:"text-grey"},[t._v(t._s(t.card_1.subtitle))]),i("p",{staticClass:"text-grey"},[t._v(t._s(t.card_1.subtitle_2))]),i("div",{staticClass:"flex justify-between flex-wrap"},[i("vs-button",{staticClass:"mt-4 shadow-lg",attrs:{type:"gradient",color:"#7367F0","gradient-color-secondary":"#CE9FFC"}},[t._v("Let's Go!!!")]),i("vs-button",{staticClass:"mt-4",attrs:{type:"border",color:"#b9b9b9"}},[t._v("Hard Pass")])],1)])],1),i("div",{staticClass:"vx-col w-full lg:w-1/3 mb-base height"},[i("vx-card",[i("div",{attrs:{slot:"no-body"},slot:"no-body"},[i("img",{staticClass:"responsive card-img-top",attrs:{src:o("da26")("./"+t.card_1.contentImg1),alt:"content-img"}})]),i("h5",{staticClass:"mb-2"},[t._v(t._s(t.card_1.title))]),i("p",{staticClass:"text-grey"},[t._v(t._s(t.card_1.subtitle))]),i("p",{staticClass:"text-grey"},[t._v(t._s(t.card_1.subtitle_2))]),i("div",{staticClass:"flex justify-between flex-wrap"},[i("vs-button",{staticClass:"mt-4 shadow-lg",attrs:{type:"gradient",color:"#7367F0","gradient-color-secondary":"#CE9FFC"}},[t._v("Let's Go!!!")]),i("vs-button",{staticClass:"mt-4",attrs:{type:"border",color:"#b9b9b9"}},[t._v("Hard Pass")])],1)])],1),i("Calendar")],1)])},n=[],a=o("1321"),s=o.n(a),r=o("43ca"),c=o("da24"),l=o("5f88"),d=o("8d6e"),p=o("c980"),g={data:function(){return{analyticsData:c["a"],isImp:!1,navbarSearchAndPinList:this.$store.state.navbarSearchAndPinList,show:!1,items:[1,2,3,4,5,6,7,8,9],nextNum:10,tableList:["vs-th: Component","vs-tr: Component","vs-td: Component","thread: Slot","tbody: Slot","header: Slot"],users:[{orderNo:879985,status:"Moving",statusColor:"success",operator:"Cinar Knowles",operatorImg:"avatar-s-2.png",usersLiked:[{name:"Vennie Mostowy",img:"avatar-s-5.png"},{name:"Elicia Rieske",img:"avatar-s-7.png"},{name:"Julee Rossignol",img:"avatar-s-10.png"},{name:"Darcey Nooner",img:"avatar-s-8.png"}],location:"Anniston, Alabama",distance:"130 km",distPercent:80,startDate:"14:58 26/07/2018",estDelDate:"28/07/2018"}],card_1:{contentImg1:"logo.jpg",title:"Vuesax Admin",subtitle:"By Pixinvent Creative Studio",subtitle_2:"Elite Author"},center:{lat:47.376332,lng:8.547511},infoContent:"",infoWindowPos:null,infoWinOpen:!1,currentMidx:null,infoOptions:{pixelOffset:{width:0,height:-35}},markers:[{position:{lat:47.376332,lng:8.547511},infoText:"Marker 1"},{position:{lat:47.374592,lng:8.548867},infoText:"Marker 2"},{position:{lat:47.379592,lng:8.549867},infoText:"Marker 3"}]}},components:{VueApexCharts:s.a,StatisticsCardLine:r["a"],ChangeTimeDurationDropdown:l["a"],GoogleMapInfoWindow:d["a"],Calendar:p["default"]},methods:{toggleInfoWindow:function(t,e){this.infoWindowPos=t.position,this.infoContent=t.infoText,this.currentMidx==e?this.infoWinOpen=!this.infoWinOpen:(this.infoWinOpen=!0,this.currentMidx=e)}}},f=g,h=(o("47f6"),o("2877")),u=Object(h["a"])(f,i,n,!1,null,null,null);e["default"]=u.exports},1880:function(t,e,o){t.exports=o.p+"img/register.cfd9ef09.jpg"},"1ab6":function(t,e,o){t.exports=o.p+"img/4-materialize.f4f276c2.png"},"1f8b":function(t,e,o){t.exports=o.p+"img/login.d814adb7.png"},"20f9":function(t,e,o){t.exports=o.p+"img/card-image-6.b26faf1e.jpg"},"22de":function(t,e,o){t.exports=o.p+"img/graphic-2.560d813b.png"},"25b2":function(t,e,o){t.exports=o.p+"img/Algolia-logo.224640ca.png"},"2c91":function(t,e,o){t.exports=o.p+"img/graphic-6.3ab06089.png"},"33f8":function(t,e,o){t.exports=o.p+"img/graphic-1.22b046f6.png"},"41fb":function(t,e,o){t.exports=o.p+"img/video-poster.d066ddc8.jpg"},"43ca":function(t,e,o){"use strict";var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("vx-card",{staticClass:"overflow-hidden"},[o("div",{attrs:{slot:"no-body"},slot:"no-body"},[o("div",{staticClass:"p-6 pb-0",class:{"flex justify-between flex-row-reverse items-center":t.iconRight}},[o("feather-icon",{staticClass:"p-3 inline-flex rounded-full",class:["text-"+t.color,{"mb-4":!t.iconRight}],style:{background:"rgba(var(--vs-"+t.color+"),.15)"},attrs:{icon:t.icon}}),o("div",[o("h2",{staticClass:"mb-1 font-bold"},[t._v(t._s(t.statistic))]),o("span",[t._v(t._s(t.statisticTitle))])])],1),o("div",{staticClass:"line-area-chart",attrs:{id:t.chartData.id}},[o("vue-apex-charts",{ref:"apexChart",attrs:{type:t.type,height:"100",width:"100%",options:t.chartData.chartOptions,series:t.chartData.series}})],1)])])},n=[],a=(o("6b54"),o("87b3"),o("28a5"),o("c5f6"),o("1321")),s=o.n(a),r={props:{icon:{type:String,required:!0},statistic:{type:[Number,String],required:!0},statisticTitle:{type:String},chartData:{type:Object,required:!0},color:{type:String,default:"primary"},chartType:{type:String,default:"line-chart"},type:{type:String,default:"line"},iconRight:{type:Boolean,default:!1}},watch:{themePrimaryColor:function(){this.$refs.apexChart.updateOptions({theme:{monochrome:{color:this.getHex()}}})}},computed:{themePrimaryColor:function(){return this.$store.state.themePrimaryColor}},methods:{getHex:function(){var t=window.getComputedStyle(document.documentElement).getPropertyValue("--vs-".concat(this.color));return t=t.split(","),"#"+((1<<24)+(Number(t[0])<<16)+(Number(t[1])<<8)+Number(t[2])).toString(16).slice(1)}},components:{VueApexCharts:s.a},created:function(){"area"==this.type&&(this.chartData.chartOptions["theme"]={monochrome:{enabled:!0,color:this.getHex(this.color),shadeTo:"light",shadeIntensity:.65}})}},c=r,l=o("2877"),d=Object(l["a"])(c,i,n,!1,null,null,null);e["a"]=d.exports},4631:function(t,e,o){t.exports=o.p+"img/facebook.53b4fafa.svg"},4642:function(t,e,o){t.exports=o.p+"img/search-result.94483d7a.jpg"},"47f6":function(t,e,o){"use strict";var i=o("7d40"),n=o.n(i);n.a},"4a50":function(t,e,o){t.exports=o.p+"img/404.0a38972b.png"},"50bd":function(t,e,o){t.exports=o.p+"img/knowledge-base-cover.76a102a1.jpg"},"55ac":function(t,e,o){t.exports=o.p+"img/graphic-3.e88b80c0.png"},5698:function(t,e,o){t.exports=o.p+"img/graphic-5.6e224f81.png"},"5a4e":function(t,e,o){t.exports=o.p+"img/modern.cb09b5bd.jpg"},"5f88":function(t,e,o){"use strict";var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("vs-dropdown",{staticClass:"cursor-pointer",attrs:{"vs-trigger-click":""}},[o("small",{staticClass:"flex cursor-pointer"},[t._v("Last 7 days "),o("feather-icon",{staticClass:"ml-1",attrs:{icon:"ChevronDownIcon",svgClasses:"h-4 w-4"}})],1),o("vs-dropdown-menu",{staticClass:"w-32"},[o("vs-dropdown-item",{on:{click:function(e){return t.$emit("timeDurationChanged","last-28-days")}}},[t._v("Last 28 days")]),o("vs-dropdown-item",{on:{click:function(e){return t.$emit("timeDurationChanged","last-month")}}},[t._v("Last Month")]),o("vs-dropdown-item",{on:{click:function(e){return t.$emit("timeDurationChanged","last-year")}}},[t._v("Last Year")])],1)],1)},n=[],a=o("2877"),s={},r=Object(a["a"])(s,i,n,!1,null,null,null);e["a"]=r.exports},"69ea":function(t,e,o){t.exports=o.p+"img/faq.8e0b3142.jpg"},"6ab9":function(t,e,o){t.exports=o.p+"img/lock-screen.a5c1191d.png"},"74c7":function(t,e,o){t.exports=o.p+"img/google.da3a9ed4.svg"},"74c9":function(t,e,o){t.exports=o.p+"img/2-stack.425adc71.png"},"764d":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAIGNIUk0AAHomAACAhAAA+gAAAIDoAAB1MAAA6mAAADqYAAAXcJy6UTwAAAAGYktHRAD/AP8A/6C9p5MAAAAHdElNRQfjAQcGISE4yKuKAAAOYUlEQVR42tWdeVRUV57HP7fYNwEFEQGLBEXciQgqaBDXdEziUVDjHGJPWhOcOOmOdk/GdBJNq+lMJh1PejxZJ5k0tj0mcYvdTs5JVARtTTSJOxpUoiC4IKthKaCsO388CgvrFVbVo6ro7zm/Q727/t73/X53fe8ipJRowfzh32vKfxf6AwuB6UACMBDwBq4BJcB+4H+BGz1V4dazKZrye2tVQKDtAXQgDHgFeAbwUYkPARKBR4HXgbeBl4HGnqhcC7QTKLRlB3I7SIm2M48P8BwwH3ju07Op2zRroAE6bdkVC3RSRglkoUBuEshoR/MH374Vs7Dq3a313hFNgAmQLhITUAqsQ/GUrvevtQ1cNOKoo1n6oLjrszjpAXGtpTxfvpKI9uuadHcCZcAjwBlzgDtdWACLgD9gv7taoW97Fb8te5YwY40ribIFPbAHSAUqwH0uPFwgCwTyL864q6Usvfqap8gzYwDwvvnC1QQGC+QbAnlSIKdoIU4gGdJymuTGw10VyMsDKWHw4Dth77wDxcXqCu/bB0eOqMfl5Sn5pITLl2HVKlu3/TAwoWcIFNKWLBRClgghfyOE9O4mnd0ype5v1gq8/z40N8OSJRa39zAUFVmnXbUKpk6FN95Qv5kXXoDGRpgyBUpLYdmy7m59Sc8QaG0pwwRyn0B+IpADtVqdpSQ1H1dXYs8ehRiAnBzQ6+HTT7umycyEl19WyM7NVdLdDb1eIbeoCNauVa4zM23d+oM9QqBOSLME64R8XSfkCZ2QUy3Ce0wi2mz0ups3Q1qa4sa5uVBWZm2BK1Yof3fsgOhoyM/v6vZmbOsYVprzJyXZuvX7eoTADuuYL5BnBfJ5gfTtSauzFJvYtg2qq2HlSsjIgC++sE4zYwasWwdPPAHjxythlm5vhtnizOTW2Oyw2jQT+IsxB4cKIfcIIT8TQsb1RDvXnVT5xdhW5tAh+PnPISICNmywjm9uhhEjlN85ORAYqHQUmZl33LmsDJYuVX6vXKk8lG02JzqXwclx4NIxB4KAl3SwEvDV8hAcQXFwGgMNl9UjN2+GOXPg6FG4eNE6/sMPlU5k8mSlbSsoUDqgP/8Zxo5ViHrvPaWdnDdPyZOf3506X4ETM5GnkouygQ3AIHcRZ0a/thus/yEXb9muniAnB06cUCcQFLecNk1xS7NlZWZCZGRXS8vLU4Y7tsqBVpTFjXK7CcxLLhwCbARmuYMsX38v1u8ej4+fjt//0/fcvNICwLSb21hw9W13qNAdVgBvgR0uvOyB/YHAS0Lwa9zorulzogiNUKqb/bSe/NXnACjon42vbOOx6x+hkyZ3E2dEWUZ7yxzQrQU+M7ZgPJAPDHW3pq98PoH+gwI7r5+fdpDGujuuG9dykayq7QxtPE5oe40rybwNXAUKgD8CXQajNglcPnbfEuBd1Bc4XYrBY8NY8WHXleK9+WXs/ONFJ0vUhN++fXz6a7YiVQl8NmXPv6Cs+mpcbnQOeW8lM3JyZJewNsNtVk0tpL3V7W4rgeyN38/YqRZpNQ78VcpX43XIjTqk0CFxt4RH+lqRB0qn8uD8OLfr08HDx79K+SrOLgJ1Qv5BJ6SXK6Zi9siDC1T1BGD6P8d7RCedkKE6IV+zi0AhZLqrZxS2RKeTpOfYJjA43JfU2dEe0U0IuUhNJ6thjA6T5vmxsxgzLZrAPt33WTOXJnDsiwpPqKfKizWBoke2KZ1C1uL775kmIi6IYekRlHx902N6WkLFAj1DYFRCCLHDQu1KOysvkQtfV3lEz7thRaAQbh8mAJCZe2/rMyN2eBhxw/tQca7eI7paQq0XdrsEBHkxZlaMQ4rPyBvqdj3V0CtcOHXOILy8Heu7EidGERETSG1lk9v1tYSKBZrcLhMXJNhUsN1w22Zc1tKhbtXTTgLd6xYJqZGERQeqKvc/ywrZuPBL6q81q8Yn/2wQweG+HnVhjxM4KTdRVbGzBRVUnq6mqbqZfe+csmmFk3ITexmBmNwmYVH+3J8WparY3z8u7kz3Q0E5jTUG1XSp2Qn4+gq36NvrLDBt/mBVpSpOVVNzqb5L2iNbflBN6+3nxbjshF5kgW5qkL28JMmPqXceh/502ir9yV3nMbaqdygTc4f1ok7ETctEI6YPwi/Iet5bV/ET5d9es0p/22DkxK4LqjcRGObHqFnxLte5V7lw2qJhqgod3VxsM893W85iC+lPjvSIC6ssJrh+Kjd48iAiB4dbhZuMJs59edGmsi21TZzfX0Zilt4qLiwmhPvGD6Ds6FWX628Jj8xE+kQFcvlIJSajCWkCaVIeWunBKwiTqdt9hKP5J0mcolfdbMhYMoYrRyvdRh54yAJPbS/m1Hb19/d099iFqbtcy7XiKqJH9reKi0qKYEBSX6pKql1+D5363h3gqdVoe8XbT4dfiO3t6Qm/SHZZ3WrwiAV2B28/b/rGhxM2KJSwmD6EDAjBL8QX/z5+ePl44R/qT0hUsM38+vGxhMcE03D1lnv0vTvAE6sxobGhxI2LITYlhv5JkQT2C9RUXuriZAr+o0hTGfbCoxYYOy6W4Y8OR5+hR2j8YscSiTOH8M17X2NoMGgv7B7wyJ5I9Ohoxi4eR3TyQJfVkfz4GI5+8I3L78XtLjxheQbD545y+Y2NXjCG4q0naKlrcWk9bnPhgL6BTP3dz4hMitJeGICE221GbhtNyNumjjGl8vCFl8Cvjz9DZiZy5rPjGivqHm5x4eABfXhowzwCI4Icytdc00T9pRqaa5r4qbKBppuNtP5koLXBQFtTK0ZDO0aDUSHQJKGDQHQCLx8vvP29Xd4kudwCfQJ8eejNuXaR13jjFjdOVFB15io1F6povNqAsdXoVL3GNjA23XtgrhUubwOnrJ1NYGRwt2nKD17kx6/Ocv1YOSZj1wdoz1ZT5MiBjFg4jvbmNqu42vNVnNt+zAXUKXCpCyfOGUPU6Fib8de+vczpTV9Te+HOJrkzFtN8vYGBafGqcfopiZR+cQqjod2xQu2Ey1zYJ9CX5Kcm24w/nX+Yc58c6ahTW12ttbf49q09pD43QzU+Nv0+yvf/4GCp9sFlC6ojn5iIzttLtdLiTYco+eSbHl3sLPvyNIY69d27oXPHumxB1WUuHDkqlvamVqvwuvPXFfJc0Lif/u9CkpdPswr3CfJzWW/ssndj9v/S9kcqPThr64KKomIqitSXyVxVZ69YTPhHRq96P/AfEWpvqHpaJ4cQkaFsjVYfKvVI/SptYM9Y4NRNz9Le0sbBvPe1F9YNIkYrG0w1h13+DYnqIT9q25rntW7/9e+wioC+IfTPuPPWQHB8X/TZKeiERJ+d0vnbMj5hcQbB8X3pn5HQmVefnUJwfN/OdJbXQigdhDnOL9wffXYKA2eNUK3XMtxB+T81AtU6kRzgIGDf+7YqGDx/EuV7j+ET5Ef8I6nUHlY2xINiwkiYk07UuCEEx0TiHx5Cn/gozm3YTb/0waSsepwrhSe4L3sC4Ymx3DxxkdrDF4iZPBLD9ToMZcpmkeW1+UNsHZLYeakkPp5FY+VNwhJiuDJSz7kNu7vUW3vuijMdZQPwol0EzvzrS6f3zlk7D9gNBDhaU4C+H8ExkZxcuwWAzPzfEBQfTktZDQKJf3gI36/ZhLGhhaHLZxMSF4lOmNA/ksaFrYWUbT4AwMgX5yO4MzMSyC6zJPO1eXSiEyau7jxC3bGLBAzsy6BHxneWLZB4B/hR/MYO2uubHR2DGoCc6btWqzayqnP16btWFwjkwwJZ6+hn+Qm5WQAkr15E8upFGA1tJORmdcY3lFZiKKvGWN/EtYLjiA4yfAL8aCy92pnOUF0PneWCT4i/RT1YHAMgO9MlrXiUjP9aztDFMwjo26dLuqbKmxjrmxw9ZuCaQGZO37V6ry12bS52TNu1plAn5HidkN/Z2074hgcwIG04JR/t5tK2Ii5tK6Lko90MSBuOb3hA52DWnN7yur6knMTFMwmK70dQfD+iJ47ssECJoaaBYUtmEzoqltBRsQTFRHa2ewpJyu/wxDgqC49x+vVPMLa0dpZ9d712yjadkMnTdq3p9myrbr8Xzvr8lYuFc9ekA/8GvAB0uy6lXzCJmjOl3Nx7skt4w0Pj0S+YRN3pS4r7dfT05vZLCMmVrQfwjwwl9fWnqSz4jppTFxQrEJKKvx0mYvRgxq1fwtWiY7TW3uqMsyyj4UI5MVPGMmDCSBorb3aGW6axA5XAv07Z+bvP7Uls9xfrB+aujkM5pu5xXPAVp/+gCMLHDuZmofI26phXl1J1+BRX/lLYJY2hvPqe5RhvNWOsb8ZBSOAD4N8f3Lm2wd5MDp+ZcHDey5NRPjx+oCcJDB4xiJjH0uk3aghe/r7UnimlZMNnzhDhDM4DT03ese6AoxmdOv7u0LyXdMDTKGfqRbjjDl0EI/CfwLqMHeud2kTWdH7g4ewXw4BXUcjUfJSem/EdsCR9+6untBSi6cvM9O2v1gvkcoF8oOM0SpecWNTD0iyQvxbIiQKpiTzoAavpWL05A2QBOcCbeOBMGTuxB1gG/NhTBfb06W3bBDJJINcKZEsvsDaz1ArkkwI5SyB/tOs8LrcRaP0eXYsQco0QMkkIucPT7xN2nOs1XAj5JyGktOedP09aoKWUC2S2QGZ1nOzmbqurFMg5ArlQIG84fCJcLyDQLIUCOUYgfymQ9W4gTgrku0I5t/WvTh+p5zYChV1iFIKNQjBECD4QApOd+RyVEiF4UAieEYJb9uTxPIGOWUe1QOYJ5DiBPNSDVtcukOsFMlkg/+5IXq3w1Fn6x4HJKPPqN9FwrjRwFHgK0DymcwbucmE1kUKwRQgSheD3QtDmYP4mIVgpBOlCcMpZPbSiN/w3h0aU5fKPgSeBNOB+IBzlvziYgCagDriCcq59KbAFuKSdAm34fxbg0mPvRZfpAAAAAElFTkSuQmCC"},"7b1e":function(t,e,o){t.exports=o.p+"img/github.728a0781.svg"},"7d40":function(t,e,o){},"86ad":function(t,e,o){t.exports=o.p+"img/content-img-1.228da091.jpg"},"8b6c":function(t,e,o){t.exports=o.p+"img/maintenance.02544fb0.png"},"8bae":function(t,e){t.exports="data:image/png;base64,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"},"8d6e":function(t,e,o){"use strict";var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("vx-card",{attrs:{title:"Info Window","code-toggler":""}},[o("p",[t._v("A basic example of using a single infowindow for 3 markers")]),o("div",{staticClass:"mt-5"},[o("gmap-map",{staticStyle:{width:"100%",height:"500px"},attrs:{center:t.center,zoom:15}},[o("gmap-info-window",{attrs:{options:t.infoOptions,position:t.infoWindowPos,opened:t.infoWinOpen},on:{closeclick:function(e){t.infoWinOpen=!1}}},[t._v("\n                    "+t._s(t.infoContent)+"\n                ")]),t._l(t.markers,function(e,i){return o("gmap-marker",{key:i,attrs:{position:e.position,clickable:!0},on:{click:function(o){return t.toggleInfoWindow(e,i)}}})})],2)],1),o("template",{slot:"codeContainer"},[t._v('\n<template>\n  <gmap-map :center="center" :zoom="15" style="width: 100%; height: 500px">\n    <gmap-info-window :options="infoOptions" :position="infoWindowPos" :opened="infoWinOpen" @closeclick="infoWinOpen=false">\n      '+t._s(t.infoContent)+'\n    </gmap-info-window>\n    <gmap-marker :key="i" v-for="(m,i) in markers" :position="m.position" :clickable="true" @click="toggleInfoWindow(m,i)"></gmap-marker>\n  </gmap-map>\n</template>\n\n<script>\nexport default {\n  data() {\n    return {\n      center: { lat: 47.376332, lng: 8.547511 },\n      infoContent: \'\',\n      infoWindowPos: null,\n      infoWinOpen: false,\n      currentMidx: null,\n      //optional: offset infowindow so it visually sits nicely on top of our marker\n      infoOptions: {\n      pixelOffset: { width: 0, height: -35 }\n      },\n      markers: [\n        { position: { lat: 47.376332, lng: 8.547511 }, infoText: \'Marker 1\' },\n        { position: { lat: 47.374592, lng: 8.548867 }, infoText: \'Marker 2\' },\n        { position: { lat: 47.379592, lng: 8.549867 }, infoText: \'Marker 3\' }\n      ]\n    }\n  },\n  methods: {\n    toggleInfoWindow: function(marker, idx) {\n      this.infoWindowPos = marker.position;\n      this.infoContent = marker.infoText;\n      //check if its the same marker that was selected if yes toggle\n      if (this.currentMidx == idx) {\n        this.infoWinOpen = !this.infoWinOpen;\n      }\n      //if different marker set infowindow to open and reset current marker index\n      else {\n        this.infoWinOpen = true;\n        this.currentMidx = idx;\n      }\n    }\n  }\n}\n<\/script>\n        ')])],2)},n=[],a={data:function(){return{center:{lat:47.376332,lng:8.547511},infoContent:"",infoWindowPos:null,infoWinOpen:!1,currentMidx:null,infoOptions:{pixelOffset:{width:0,height:-35}},markers:[{position:{lat:47.376332,lng:8.547511},infoText:"Marker 1"},{position:{lat:47.374592,lng:8.548867},infoText:"Marker 2"},{position:{lat:47.379592,lng:8.549867},infoText:"Marker 3"}]}},methods:{toggleInfoWindow:function(t,e){this.infoWindowPos=t.position,this.infoContent=t.infoText,this.currentMidx==e?this.infoWinOpen=!this.infoWinOpen:(this.infoWinOpen=!0,this.currentMidx=e)}}},s=a,r=o("2877"),c=Object(r["a"])(s,i,n,!1,null,null,null);e["a"]=c.exports},"8e45":function(t,e,o){t.exports=o.p+"img/kb-article.6977451e.jpg"},"95e0":function(t,e,o){t.exports=o.p+"img/forgot-password.f1d8d23e.png"},"999b":function(t,e,o){t.exports=o.p+"img/card-image-5.677b3fc1.jpg"},"9e83":function(t,e,o){t.exports=o.p+"img/card-img-overlay.6977451e.jpg"},b4db:function(t,e,o){t.exports=o.p+"img/content-img-3.ca080c4c.jpg"},b51c:function(t,e,o){t.exports=o.p+"img/content-img-4.d77697ba.jpg"},b588:function(t,e,o){t.exports=o.p+"img/graphic-4.6ab88846.png"},b912:function(t,e,o){t.exports=o.p+"img/logo.796efb75.jpg"},c7db:function(t,e,o){t.exports=o.p+"img/500.0d0dd97f.png"},ceb3:function(t,e,o){t.exports=o.p+"img/twitter.6620c8ae.svg"},d3a8:function(t,e,o){t.exports=o.p+"img/content-img-2.00ef7d97.jpg"},d925e:function(t,e,o){t.exports=o.p+"img/maintenance-2.b8f8c47f.png"},da24:function(t,e,o){"use strict";e["a"]={siteTraffic:{series:[{name:"Traffic Rate",data:[150,200,125,225,200,250]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{type:"line",dropShadow:{enabled:!0,top:5,left:0,blur:4,opacity:.1},toolbar:{show:!1},sparkline:{enabled:!0}},stroke:{width:5,curve:"smooth"},xaxis:{type:"numeric"},colors:["#7367F0"],fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#A9A2F6"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0,hover:{size:5}},tooltip:{x:{show:!1}}}},activeUsers:{series:[{name:"Active Users",data:[750,1e3,900,1250,1e3,1200,1100]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{type:"line",dropShadow:{enabled:!0,top:5,left:0,blur:4,opacity:.1},toolbar:{show:!1},sparkline:{enabled:!0}},stroke:{width:5,curve:"smooth"},xaxis:{type:"numeric"},colors:["#28C76F"],fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#55DD92"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,75,100,100]}},markers:{size:0,hover:{size:5}},tooltip:{x:{show:!1}}}},newsletter:{series:[{name:"Newsletter",data:[365,390,365,400,375,400]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{type:"line",dropShadow:{enabled:!0,top:5,left:0,blur:4,opacity:.1},toolbar:{show:!1},sparkline:{enabled:!0}},stroke:{width:5,curve:"smooth"},xaxis:{type:"numeric"},colors:["#FF9F43"],fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#ffc085"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,75,100,100]}},markers:{size:0,hover:{size:5}},tooltip:{x:{show:!1}}}},revenueComparisonLine:{series:[{name:"This Month",data:[45e3,47e3,44800,47500,45500,48e3,46500,48600]},{name:"Last Month",data:[46e3,48e3,45500,46600,44500,46500,45e3,47e3]}],chartOptions:{chart:{toolbar:{show:!1}},stroke:{curve:"smooth",dashArray:[0,8],width:[4,2]},grid:{borderColor:"#e7e7e7"},legend:{show:!1},colors:["#F97794","#b8c2cc"],fill:{type:"gradient",gradient:{shade:"dark",inverseColors:!1,gradientToColors:["#7367F0","#b8c2cc"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0,hover:{size:5}},xaxis:{labels:{style:{cssClass:"text-grey fill-current"}},axisTicks:{show:!1},categories:["01","05","09","13","17","21","26","31"],axisBorder:{show:!1}},yaxis:{tickAmount:5,labels:{style:{cssClass:"text-grey fill-current"},formatter:function(t){return t>999?(t/1e3).toFixed(1)+"k":t}}},tooltip:{x:{show:!1}}}},subscribersGained:{series:[{name:"Subscribers",data:[28,40,36,52,38,60,55]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{type:"numeric",lines:{show:!1},axisBorder:{show:!1},labels:{show:!1}},yaxis:[{y:0,offsetX:0,offsetY:0,padding:{left:0,right:0}}],tooltip:{x:{show:!1}}}},quarterlySales:{series:[{name:"Sales",data:[10,15,7,12,3,16]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{type:"numeric",lines:{show:!1},axisBorder:{show:!1},labels:{show:!1}},yaxis:[{y:0,offsetX:0,offsetY:0,padding:{left:0,right:0}}],tooltip:{x:{show:!1}}}},revenueGenerated:{series:[{name:"Revenue",data:[350,275,400,300,350,300,450]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{type:"numeric",lines:{show:!1},axisBorder:{show:!1},labels:{show:!1}},yaxis:[{y:0,offsetX:0,offsetY:0,padding:{left:0,right:0}}],tooltip:{x:{show:!1}}}},ordersRecevied:{series:[{name:"Orders",data:[10,15,8,15,7,12,8]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{toolbar:{show:!1},sparkline:{enabled:!0}},dataLabels:{enabled:!1},stroke:{curve:"smooth",width:2.5},fill:{type:"gradient",gradient:{shadeIntensity:.9,opacityFrom:.7,opacityTo:.5,stops:[0,80,100]}},xaxis:{type:"numeric",lines:{show:!1},axisBorder:{show:!1},labels:{show:!1}},yaxis:[{y:0,offsetX:0,offsetY:0,padding:{left:0,right:0}}],tooltip:{x:{show:!1}}}},salesBar:{series:[{name:"Sessions",data:[75,125,225,175,125,75,25]}],chartOptions:{grid:{show:!1,padding:{left:0,right:0}},chart:{type:"bar",sparkline:{enabled:!0},toolbar:{show:!1}},states:{hover:{filter:"none"}},colors:["#e6edf7","#e6edf7","#7367f0","#e6edf7","#e6edf7","#e6edf7"],plotOptions:{bar:{columnWidth:"45%",distributed:!0}},tooltip:{x:{show:!1}}}},goalOverviewRadialBar:{series:[83],chartOptions:{plotOptions:{radialBar:{size:110,startAngle:-150,endAngle:150,hollow:{size:"77%"},track:{background:"#bfc5cc",strokeWidth:"50%"},dataLabels:{name:{show:!1},value:{offsetY:18,color:"#99a2ac",fontSize:"4rem"}}}},colors:["#00db89"],fill:{type:"gradient",gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:["#00b5b5"],inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{lineCap:"round"},chart:{sparkline:{enabled:!0},dropShadow:{enabled:!0,blur:3,left:1,top:1,opacity:.1}}}},supportTrackerRadialBar:{chartData:{totalTickets:163,openTickets:103,lastResponse:"1d"},series:[83],chartOptions:{plotOptions:{radialBar:{size:150,startAngle:-150,endAngle:150,hollow:{size:"65%"},track:{background:"#fff",strokeWidth:"100%"},dataLabels:{value:{offsetY:30,color:"#99a2ac",fontSize:"2rem"}}}},colors:["#EA5455"],fill:{type:"gradient",gradient:{shade:"dark",type:"horizontal",shadeIntensity:.5,gradientToColors:["#7367F0"],inverseColors:!0,opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{dashArray:8},chart:{sparkline:{}},labels:["Completed Tickets"]}},statisticsRadar:{series:[{name:"Visits",data:[90,50,86,40,100,20]}],chartOptions:{labels:["Jan","Feb","Mar","Apr","May","Jun"],dataLabels:{style:{colors:["#b9c3cd","#b9c3cd","#b9c3cd","#b9c3cd","#b9c3cd","#b9c3cd"]}},yaxis:{show:!1},grid:{show:!1},legend:{show:!1},chart:{dropShadow:{enabled:!0,blur:8,left:1,top:1,opacity:.2},toolbar:{show:!1}},stroke:{width:0},colors:["#9f8ed7","#1edec5"],plotOptions:{radar:{polygons:{strokeColors:["#e8e8e8","transparent","transparent","transparent","transparent","transparent"],connectorColors:"transparent"}}},fill:{type:"gradient",gradient:{shade:"dark",gradientToColors:["#8e9ad6","#1fcadb"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0}}},sessionsByDeviceDonut:{analyticsData:[{device:"Dekstop",icon:"MonitorIcon",color:"primary",sessionsPercentgae:58.6,comparedResultPercentage:2},{device:"Mobile",icon:"SmartphoneIcon",color:"warning",sessionsPercentgae:34.9,comparedResultPercentage:8},{device:"Tablet",icon:"TabletIcon",color:"danger",sessionsPercentgae:6.5,comparedResultPercentage:-5}],comparedResult:[2,-3,8],series:[58.6,34.9,6.5],chartOptions:{labels:["Desktop","Mobile","Tablet"],dataLabels:{enabled:!1},legend:{show:!1},chart:{type:"donut",toolbar:{show:!1}},stroke:{width:0},colors:["#7961F9","#FF9F43","#EA5455"],fill:{type:"gradient",gradient:{gradientToColors:["#9c8cfc","#FFC085","#f29292"]}}}},productOrdersRadialBar:{analyticsData:[{orderType:"Finished",counts:23043,color:"primary"},{orderType:"Pending",counts:14658,color:"warning"},{orderType:"Rejected ",counts:4758,color:"danger"}],series:[70,52,26],chartOptions:{labels:["Finished","Pending","Rejected"],plotOptions:{radialBar:{size:165,hollow:{size:"20%"},track:{background:"#ebebeb",strokeWidth:"100%",margin:15},dataLabels:{show:!0,name:{fontSize:"18px"},value:{fontSize:"16px",color:"#636a71",offsetY:11},total:{show:!0,label:"Total",formatter:function(){return 42459}}}}},responsive:[{breakpoint:576,options:{plotOptions:{radialBar:{size:150,hollow:{size:"20%"},track:{background:"#ebebeb",strokeWidth:"100%",margin:15}}}}}],colors:["#7961F9","#FF9F43","#f29292"],fill:{type:"gradient",gradient:{shade:"dark",type:"vertical",shadeIntensity:.5,gradientToColors:["#9c8cfc","#FFC085","#EA5455"],inverseColors:!1,opacityFrom:1,opacityTo:1,stops:[0,100]}},stroke:{lineCap:"round"},chart:{dropShadow:{enabled:!0,blur:3,left:1,top:1,opacity:.1}}}},customersPie:{analyticsData:[{customerType:"New",counts:890,color:"primary"},{customerType:"Returning",counts:258,color:"warning"},{customerType:"Referrals ",counts:149,color:"danger"}],series:[690,258,149],chartOptions:{labels:["New","Returning","Referrals"],dataLabels:{enabled:!1},legend:{show:!1},chart:{type:"pie",dropShadow:{enabled:!1,blur:5,left:1,top:1,opacity:.2},toolbar:{show:!1}},stroke:{width:5},colors:["#7961F9","#FF9F43","#EA5455"],fill:{type:"gradient",gradient:{gradientToColors:["#9c8cfc","#FFC085","#f29292"]}}}},salesLine:{series:[{name:"Sales",data:[140,180,150,205,160,295,125,255,205,305,240,295]}],chartOptions:{chart:{toolbar:{show:!1},dropShadow:{enabled:!0,top:20,left:2,blur:6,opacity:.2}},stroke:{curve:"smooth",width:4},grid:{borderColor:"#ebebeb"},legend:{show:!1},colors:["#df87f2"],fill:{type:"gradient",gradient:{shade:"dark",inverseColors:!1,gradientToColors:["#7367F0"],shadeIntensity:1,type:"horizontal",opacityFrom:1,opacityTo:1,stops:[0,100,100,100]}},markers:{size:0,hover:{size:5}},xaxis:{labels:{style:{cssClass:"text-grey fill-current"}},axisTicks:{show:!1},categories:["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"],axisBorder:{show:!1}},yaxis:{tickAmount:5,labels:{style:{cssClass:"text-grey fill-current"},formatter:function(t){return t>999?(t/1e3).toFixed(1)+"k":t}}},tooltip:{x:{show:!1}}}},clientRetentionBar:{series:[{name:"New Clients",data:[175,125,225,175,160,189,206,134,159,216,148,123]},{name:"Retained Clients",data:[-144,-155,-141,-167,-122,-143,-158,-107,-126,-131,-140,-137]}],chartOptions:{grid:{borderColor:"#ebebeb",padding:{left:0,right:0}},legend:{show:!1},dataLabels:{enabled:!1},chart:{stacked:!0,type:"bar",toolbar:{show:!1}},colors:["#7367F0","#EA5455"],plotOptions:{bar:{columnWidth:"10%"}},xaxis:{labels:{style:{cssClass:"text-grey fill-current"}},axisTicks:{show:!1},categories:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],axisBorder:{show:!1}},yaxis:{tickAmount:5,labels:{style:{cssClass:"text-grey fill-current"}}},tooltip:{x:{show:!1}}}},browserAnalytics:[{id:1,name:"Google Chrome",ratio:73,time:"Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)",comparedResult:"800"},{id:3,name:"Opera",ratio:8,time:"Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)",comparedResult:"-200"},{id:2,name:"Firefox",ratio:19,time:"Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)",comparedResult:"100"},{id:4,name:"Internet Explorer",ratio:27,time:"Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)",comparedResult:"-450"}]}},da26:function(t,e,o){var i={"./1-apex.png":"764d","./2-stack.png":"74c9","./3-convex.png":"8bae","./4-materialize.png":"1ab6","./404.png":"4a50","./500.png":"c7db","./card-image-4.jpg":"e647","./card-image-5.jpg":"999b","./card-image-6.jpg":"20f9","./card-img-overlay.jpg":"9e83","./carousel/faq.jpg":"69ea","./content-img-1.jpg":"86ad","./content-img-2.jpg":"d3a8","./content-img-3.jpg":"b4db","./content-img-4.jpg":"b51c","./eCommerce/Algolia-logo.png":"25b2","./eCommerce/bank.png":"f185","./faq.jpg":"da60","./forgot-password.png":"95e0","./graphic-1.png":"33f8","./graphic-2.png":"22de","./graphic-3.png":"55ac","./graphic-4.png":"b588","./graphic-5.png":"5698","./graphic-6.png":"2c91","./kb-article.jpg":"8e45","./knowledge-base-cover.jpg":"50bd","./lock-screen.png":"6ab9","./login.png":"1f8b","./login/facebook.svg":"4631","./login/github.svg":"7b1e","./login/google.svg":"74c7","./login/twitter.svg":"ceb3","./logo.jpg":"b912","./maintenance-2.png":"d925e","./maintenance.png":"8b6c","./modern.jpg":"5a4e","./not-authorized.png":"dd28","./register.jpg":"1880","./reset-password.png":"e0fb","./rocket.png":"e0f8","./search-result.jpg":"4642","./video-poster.jpg":"41fb","./vuesax-login-bg.jpg":"f56c"};function n(t){var e=a(t);return o(e)}function a(t){var e=i[t];if(!(e+1)){var o=new Error("Cannot find module '"+t+"'");throw o.code="MODULE_NOT_FOUND",o}return e}n.keys=function(){return Object.keys(i)},n.resolve=a,t.exports=n,n.id="da26"},da60:function(t,e,o){t.exports=o.p+"img/faq.8e0b3142.jpg"},dd28:function(t,e,o){t.exports=o.p+"img/not-authorized.388ffe46.png"},e0f8:function(t,e,o){t.exports=o.p+"img/rocket.b4878de0.png"},e0fb:function(t,e,o){t.exports=o.p+"img/reset-password.965156da.png"},e647:function(t,e,o){t.exports=o.p+"img/card-image-4.83c3252e.jpg"},f185:function(t,e,o){t.exports=o.p+"img/bank.5f6aa47c.png"},f56c:function(t,e,o){t.exports=o.p+"img/vuesax-login-bg.04351a33.jpg"}}]);
//# sourceMappingURL=chunk-4e173924.d619c286.js.map