(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"f+ep":function(n,t,l){"use strict";l.r(t);var e=l("CcnG"),i=l("mrSG"),o=l("ZZ/e"),u=l("aR35"),r=l("avBb"),s=l("SGxG"),a=function(){function n(n,t,l,e,i,o,r){var s=this;this.navCtrl=n,this.translateService=t,this.alertController=l,this.myDBService=e,this.activeRoute=i,this.loadingController=o,this.wsService=r,this.inputIp=u.a.settings.ip,this.inputPort=u.a.settings.port,this.loginDisabled=!1,this.loadingDuration=6e4,this.bandIps=["localhost","musicbeefly.tracemouse.top","musicbee-fly.tracemouse.top"],this.activeRoute.queryParams.subscribe(function(n){s.from=n.from})}return n.prototype.ngOnInit=function(){},n.prototype.ionViewWillEnter=function(){var n=this;this.inputIp=u.a.settings.ip,this.inputPort=u.a.settings.port,this.bandIps.indexOf(this.inputIp)>=0&&(this.inputIp="",this.inputPort=""),"exit"!=this.from&&this.wsService.callMB({action:"getMB"},null,!0).subscribe(function(t){n.loginDisabled=!1,u.a.settings.ip=n.inputIp,u.a.settings.port=n.inputPort,u.a.settings.rootUrl=u.a.settings.protocol+"//"+u.a.settings.ip+":"+u.a.settings.port,n.myDBService.saveSettingsData(),n.navCtrl.navigateForward("/tabs/tab1")},function(n){console.log("%c \u8bf7\u6c42\u5904\u7406\u5931\u8d25 %c","color:red","err",n)})},n.prototype.initLoading=function(){return i.b(this,void 0,void 0,function(){var n;return i.e(this,function(t){switch(t.label){case 0:return n=this,[4,this.loadingController.create({duration:this.loadingDuration,message:"",translucent:!0,cssClass:"custom-class custom-loading"})];case 1:return n.loading=t.sent(),[2]}})})},n.prototype.logIn=function(){return i.b(this,void 0,void 0,function(){return i.e(this,function(n){switch(n.label){case 0:return[4,this.initLoading()];case 1:return n.sent(),[4,this.loading.present()];case 2:return n.sent(),this.loginDisabled=!0,this.testMB("ws://"+this.inputIp+":"+this.inputPort+"/wsjsonrpc"),[2]}})})},n.prototype.getIp=function(n){this.inputIp=n.value},n.prototype.getPort=function(n){this.inputPort=n.value},n.prototype.testMB=function(n){return i.b(this,void 0,void 0,function(){var t=this;return i.e(this,function(l){return this.wsService.callMB({action:"getMB"},n,!0).subscribe(function(n){t.loginDisabled=!1,u.a.settings.ip=t.inputIp,u.a.settings.port=t.inputPort,u.a.settings.rootUrl=u.a.settings.protocol+"//"+u.a.settings.ip+":"+u.a.settings.port,t.myDBService.saveSettingsData(),t.loading.dismiss(),t.navCtrl.navigateForward("/tabs/tab1")},function(l){console.log("%c \u8bf7\u6c42\u5904\u7406\u5931\u8d25 %c","color:red","url",n,"err",l),t.loading.dismiss(),t.presentConnError()}),[2]})})},n.prototype.presentConnError=function(){return i.b(this,void 0,void 0,function(){var n,t,l=this;return i.e(this,function(e){switch(e.label){case 0:return[4,this.translateService.get("message").subscribe(function(t){n=t})];case 1:return e.sent(),[4,this.alertController.create({header:n.error,subHeader:n["err-conn-fail"],message:n["err-conn-fail-msg"],buttons:[n.ok]})];case 2:return(t=e.sent()).onDidDismiss().then(function(n){l.loginDisabled=!1}),[4,t.present()];case 3:return e.sent(),[2]}})})},n}(),b=function(){return function(){}}(),c=l("pMnS"),p=l("oBZk"),g=l("A7o+"),h=l("gIcY"),d=l("ZYCi"),f=e.rb({encapsulation:0,styles:[[".header-toolbar[_ngcontent-%COMP%]{--border-width:0!important}.lbl-button[_ngcontent-%COMP%]{margin-top:15px}.button[_ngcontent-%COMP%]{--border-radius:25px!important}.logo[_ngcontent-%COMP%]{border-radius:10px;width:100px;box-shadow:2px 2px 5px #ccc}.logo-box[_ngcontent-%COMP%]{margin:40px auto 0;text-align:center}"]],data:{}});function m(n){return e.Nb(0,[(n()(),e.tb(0,0,null,null,3,"ion-header",[],null,null,null,p.N,p.h)),e.sb(1,49152,null,0,o.B,[e.h,e.k,e.z],null,null),(n()(),e.tb(2,0,null,0,1,"ion-toolbar",[["class","header-toolbar"],["translucent",""]],null,null,null,p.lb,p.F)),e.sb(3,49152,null,0,o.Bb,[e.h,e.k,e.z],null,null),(n()(),e.tb(4,0,null,null,35,"ion-content",[],null,null,null,p.L,p.f)),e.sb(5,49152,null,0,o.u,[e.h,e.k,e.z],null,null),(n()(),e.tb(6,0,null,0,33,"ion-list",[],null,null,null,p.T,p.m)),e.sb(7,49152,null,0,o.O,[e.h,e.k,e.z],null,null),(n()(),e.tb(8,0,null,0,1,"div",[["class","logo-box"]],null,null,null,null,null)),(n()(),e.tb(9,0,null,null,0,"img",[["class","logo"],["src","assets/img/cover.jpg"]],null,null,null,null,null)),(n()(),e.tb(10,0,null,0,1,"ion-item",[["lines","none"]],null,null,null,p.Q,p.k)),e.sb(11,49152,null,0,o.H,[e.h,e.k,e.z],{lines:[0,"lines"]},null),(n()(),e.tb(12,0,null,0,9,"ion-item",[["class","mb-input"]],null,null,null,p.Q,p.k)),e.sb(13,49152,null,0,o.H,[e.h,e.k,e.z],null,null),(n()(),e.tb(14,0,null,0,3,"ion-label",[["position","floating"]],null,null,null,p.R,p.l)),e.sb(15,49152,null,0,o.N,[e.h,e.k,e.z],{position:[0,"position"]},null),(n()(),e.Lb(16,0,["",""])),e.Gb(131072,g.i,[g.j,e.h]),(n()(),e.tb(18,0,null,0,3,"ion-input",[["clearInput",""],["inputmode","ip"],["placeholder","192.168.1.10"],["required","true"],["type","text"]],null,[[null,"ionBlur"],[null,"ionChange"]],function(n,t,l){var i=!0,o=n.component;return"ionBlur"===t&&(i=!1!==e.Fb(n,21)._handleBlurEvent(l.target)&&i),"ionChange"===t&&(i=!1!==e.Fb(n,21)._handleInputEvent(l.target)&&i),"ionBlur"===t&&(i=!1!==o.getIp(e.Fb(n,20))&&i),i},p.P,p.j)),e.Ib(5120,null,h.g,function(n){return[n]},[o.Nb]),e.sb(20,49152,[["ip",4]],0,o.G,[e.h,e.k,e.z],{clearInput:[0,"clearInput"],inputmode:[1,"inputmode"],placeholder:[2,"placeholder"],required:[3,"required"],type:[4,"type"],value:[5,"value"]},null),e.sb(21,16384,null,0,o.Nb,[e.k],null,null),(n()(),e.tb(22,0,null,0,9,"ion-item",[["class","mb-input"]],null,null,null,p.Q,p.k)),e.sb(23,49152,null,0,o.H,[e.h,e.k,e.z],null,null),(n()(),e.tb(24,0,null,0,3,"ion-label",[["position","floating"]],null,null,null,p.R,p.l)),e.sb(25,49152,null,0,o.N,[e.h,e.k,e.z],{position:[0,"position"]},null),(n()(),e.Lb(26,0,["",""])),e.Gb(131072,g.i,[g.j,e.h]),(n()(),e.tb(28,0,null,0,3,"ion-input",[["clearInput",""],["inputmode","tel"],["maxlength","5"],["minlength","2"],["pattern","[0-9]*"],["placeholder","9999"],["required","true"],["type","tel"]],null,[[null,"ionBlur"],[null,"ionChange"]],function(n,t,l){var i=!0,o=n.component;return"ionBlur"===t&&(i=!1!==e.Fb(n,31)._handleBlurEvent(l.target)&&i),"ionChange"===t&&(i=!1!==e.Fb(n,31)._handleInputEvent(l.target)&&i),"ionBlur"===t&&(i=!1!==o.getPort(e.Fb(n,30))&&i),i},p.P,p.j)),e.Ib(5120,null,h.g,function(n){return[n]},[o.Nb]),e.sb(30,49152,[["port",4]],0,o.G,[e.h,e.k,e.z],{clearInput:[0,"clearInput"],inputmode:[1,"inputmode"],maxlength:[2,"maxlength"],minlength:[3,"minlength"],pattern:[4,"pattern"],placeholder:[5,"placeholder"],required:[6,"required"],type:[7,"type"],value:[8,"value"]},null),e.sb(31,16384,null,0,o.Nb,[e.k],null,null),(n()(),e.tb(32,0,null,0,7,"ion-item",[["lines","none"]],null,null,null,p.Q,p.k)),e.sb(33,49152,null,0,o.H,[e.h,e.k,e.z],{lines:[0,"lines"]},null),(n()(),e.tb(34,0,null,0,5,"ion-label",[["class","lbl-button"]],null,null,null,p.R,p.l)),e.sb(35,49152,null,0,o.N,[e.h,e.k,e.z],null,null),(n()(),e.tb(36,0,null,0,3,"ion-button",[["class","button"],["color","danger"],["expand","block"],["size","default"]],null,[[null,"click"]],function(n,t,l){var e=!0;return"click"===t&&(e=!1!==n.component.logIn()&&e),e},p.H,p.b)),e.sb(37,49152,null,0,o.k,[e.h,e.k,e.z],{color:[0,"color"],disabled:[1,"disabled"],expand:[2,"expand"],size:[3,"size"]},null),(n()(),e.Lb(38,0,["",""])),e.Gb(131072,g.i,[g.j,e.h])],function(n,t){var l=t.component;n(t,11,0,"none"),n(t,15,0,"floating"),n(t,20,0,"","ip","192.168.1.10","true","text",e.xb(1,"",l.inputIp,"")),n(t,25,0,"floating"),n(t,30,0,"","tel","5","2","[0-9]*","9999","true","tel",e.xb(1,"",l.inputPort,"")),n(t,33,0,"none"),n(t,37,0,"danger",e.xb(1,"",l.loginDisabled,""),"block","default")},function(n,t){n(t,16,0,e.Mb(t,16,0,e.Fb(t,17).transform("common.ip"))),n(t,26,0,e.Mb(t,26,0,e.Fb(t,27).transform("common.port"))),n(t,38,0,e.Mb(t,38,0,e.Fb(t,39).transform("login.button-text")))})}function v(n){return e.Nb(0,[(n()(),e.tb(0,0,null,null,1,"app-login",[],null,null,null,m,f)),e.sb(1,114688,null,0,a,[o.Hb,g.j,o.b,r.a,d.a,o.Fb,s.a],null,null)],function(n,t){n(t,1,0)},null)}var k=e.pb("app-login",a,v,{},{},[]),D=l("Ip0R");l.d(t,"LoginPageModuleNgFactory",function(){return x});var x=e.qb(b,[],function(n){return e.Cb([e.Db(512,e.j,e.bb,[[8,[c.a,k]],[3,e.j],e.x]),e.Db(4608,D.l,D.k,[e.u,[2,D.v]]),e.Db(4608,h.o,h.o,[]),e.Db(4608,o.c,o.c,[e.z,e.g]),e.Db(4608,o.Gb,o.Gb,[o.c,e.j,e.q]),e.Db(4608,o.Lb,o.Lb,[o.c,e.j,e.q]),e.Db(1073742336,D.b,D.b,[]),e.Db(1073742336,h.n,h.n,[]),e.Db(1073742336,h.d,h.d,[]),e.Db(1073742336,o.Db,o.Db,[]),e.Db(1073742336,g.g,g.g,[]),e.Db(1073742336,d.n,d.n,[[2,d.s],[2,d.m]]),e.Db(1073742336,b,b,[]),e.Db(1024,d.k,function(){return[[{path:"",component:a}]]},[])])})}}]);