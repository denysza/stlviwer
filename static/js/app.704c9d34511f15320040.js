webpackJsonp([1],{NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("7+uW"),r=t("Xxa5"),s=t.n(r),a=t("exGp"),i=t.n(a),c=t("Ml+6"),l=t("4sbQ"),d=t("g+Hc"),p=t("BMSc"),u=t("Puvr"),w={props:["sfdc_impression_id"],name:"STLviwer",components:{VueCircle:t.n(u).a},data:function(){return{scene:null,renderer:null,camera:null,controls:null,points:[],height:0,object:null,mouse:null,showProgress:!0,fill:{gradient:["#000000","#000000","#000000"]}}},methods:{init:function(){var e=this;return i()(s.a.mark(function n(){var t,o,r,a,i,u,w,h,m,v,f,g,y,b,M;return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:t=e,o=document.getElementById("canvas"),e.renderer=new c.D({clearColor:16777215,clearAlpha:1}),r=window.innerWidth,a=window.innerHeight,e.renderer.setSize(r,a),e.renderer.setClearColor(16777215,1),o.appendChild(e.renderer.domElement),e.scene=new c.y,e.scene.background=new c.e(16777215),i=new l.a,u=new c.a(1052688),e.scene.add(u),(w=new c.w(16777215,1,0)).position.set(-200,0,-100),e.scene.add(w),(h=new c.w(16777215,1,0)).position.set(200,0,100),e.scene.add(h),(m=new c.w(16777215,1,0)).position.set(0,200,100),e.scene.add(m),(v=new c.w(16777215,1,0)).position.set(0,-200,-100),e.scene.add(v),f=(new d.a).load("/static/empty_warehouse_01_2k.hdr",function(){f.mapping=c.h}),g=window.location.href.split("/")[4],y=new c.r,b=void 0,M=void 0,y.onStart=function(e,n,t){console.log("Started loading file: "+e+".\nLoaded "+n+" of "+t+" files.")},y.onLoad=function(){t.scene.add(b),t.scene.add(M),t.showProgress=!1},y.onProgress=function(e,n){t.$refs.myUniqueID.updateProgress(n/2*100)},y.onError=function(e){console.log("There was an error loading "+e)},(i=new l.a(y)).load("https://s3.ap-northeast-1.amazonaws.com/static-dev.oh-my-teeth.com/"+g+"/lowerJaw.stl",function(e){var n=new c.u({color:5066061,transmission:0,roughness:0,envMapIntensity:.1,envMap:f});(b=new c.t(e,n)).position.set(0,0,0),b.rotation.x=-Math.PI/2,b.rotation.z=-Math.PI/2-.5,b.name="lower"}),i.load("https://s3.ap-northeast-1.amazonaws.com/static-dev.oh-my-teeth.com/"+g+"/upperJaw.stl",function(e){var n=new c.u({color:5066061,transmission:0,roughness:0,envMapIntensity:.1,envMap:f});(M=new c.t(e,n)).position.set(0,0,0),M.rotation.x=-Math.PI/2,M.rotation.z=-Math.PI/2-.5,M.name="upper"}),e.points.push(new c.C(0,0,0)),e.camera=new c.v(30,r/a,1,2e3),e.camera.position.y=0,e.camera.position.z=0,e.camera.position.x=-250,e.camera.lookAt(new c.C(0,0,0)),e.renderer.shadowMap.enabled=!0,e.renderer.shadowMap.type=c.b,e.controls=new p.a(e.camera,e.renderer.domElement);case 45:case"end":return n.stop()}},n,e)}))()},animate:function(){this.controls.update(),this.controls.autoRotate=!0,requestAnimationFrame(this.animate),this.renderer.render(this.scene,this.camera)}},mounted:function(){var e=this;return i()(s.a.mark(function n(){return s.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,e.init();case 2:e.animate(),e.controls.addEventListener("change",function(n){var t=e.scene.getObjectByName("upper"),o=e.scene.getObjectByName("lower");t&&(e.controls.object.position.y>245?t.visible=!1:t.visible=!0),o&&(e.controls.object.position.y<-245?o.visible=!1:o.visible=!0)});case 4:case"end":return n.stop()}},n,e)}))()}},h={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticClass:"app"},[n("div",{attrs:{id:"canvas"}}),this._v(" "),this.showProgress?n("div",{staticClass:"progress"},[n("vue-circle",{ref:"myUniqueID",attrs:{progress:0,size:150,reverse:!1,"line-cap":"round",fill:this.fill,"empty-fill":"rgba(0, 0, 0, .1)","animation-start-value":0,"start-angle":0,"insert-mode":"append",thickness:4,"show-percent":!0}})],1):this._e()])},staticRenderFns:[]};var m=t("VU/8")(w,h,!1,function(e){t("rxPM")},null,null).exports;o.a.config.productionTip=!1,new o.a({el:"#app",components:{App:m},template:"<App/>"})},rxPM:function(e,n){}},["NHnr"]);
//# sourceMappingURL=app.704c9d34511f15320040.js.map