(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"f+ep":function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),o=t("mrSG"),i=t("ZZ/e"),u=t("aR35"),r=t("avBb"),s=t("SGxG"),a=function(){function n(n,l,t,e,o,i,r){var s=this;this.navCtrl=n,this.translateService=l,this.alertController=t,this.myDBService=e,this.activeRoute=o,this.loadingController=i,this.wsService=r,this.inputIp=u.a.settings.ip,this.inputPort=u.a.settings.port,this.inputPassword=u.a.settings.password,this.loginDisabled=!1,this.loadingDuration=6e4,this.bandIps=["localhost","musicbeefly.tracemouse.top","musicbee-fly.tracemouse.top","musicbee.tracemouse.top"],this.activeRoute.queryParams.subscribe(function(n){s.from=n.from})}return n.prototype.ngOnInit=function(){},n.prototype.ionViewWillEnter=function(){var n=this;this.inputIp=u.a.settings.ip,this.inputPort=u.a.settings.port,this.inputPassword=u.a.settings.password,this.bandIps.indexOf(this.inputIp)>=0&&(this.inputIp="",this.inputPort=""),"exit"!=this.from&&this.wsService.callMB({action:"getMB"},null,!0).subscribe(function(l){n.loginDisabled=!1,l.isSucc&&(u.a.settings.ip=n.inputIp,u.a.settings.port=n.inputPort,u.a.settings.rootUrl=u.a.settings.protocol+"//"+u.a.settings.ip+":"+u.a.settings.port,u.a.settings.versionPlugin=l.pluginVersion,n.myDBService.saveSettingsData(),n.navCtrl.navigateForward("/tabs/tab1"))},function(n){console.log("%c \u8bf7\u6c42\u5904\u7406\u5931\u8d25 %c","color:red","err",n)})},n.prototype.initLoading=function(){return o.b(this,void 0,void 0,function(){var n;return o.e(this,function(l){switch(l.label){case 0:return n=this,[4,this.loadingController.create({duration:this.loadingDuration,message:"",translucent:!0,cssClass:"custom-class custom-loading"})];case 1:return n.loading=l.sent(),[2]}})})},n.prototype.logIn=function(){return o.b(this,void 0,void 0,function(){return o.e(this,function(n){switch(n.label){case 0:return[4,this.initLoading()];case 1:return n.sent(),[4,this.loading.present()];case 2:return n.sent(),this.loginDisabled=!0,this.testMB(u.a.global.ws_schema+this.inputIp+":"+this.inputPort+"/wsjsonrpc?password="+this.inputPassword),[2]}})})},n.prototype.getIp=function(n){this.inputIp=n.value},n.prototype.getPort=function(n){this.inputPort=n.value},n.prototype.getPassword=function(n){this.inputPassword=n.value},n.prototype.testMB=function(n){return o.b(this,void 0,void 0,function(){var l=this;return o.e(this,function(t){return this.wsService.callMB({action:"getMB"},n,!0).subscribe(function(n){l.loginDisabled=!1,l.loading.dismiss(),n.isSucc&&(u.a.settings.ip=l.inputIp,u.a.settings.port=l.inputPort,u.a.settings.password=l.inputPassword,u.a.settings.rootUrl=u.a.settings.protocol+"//"+u.a.settings.ip+":"+u.a.settings.port,u.a.settings.versionPlugin=n.pluginVersion,l.myDBService.saveSettingsData(),l.navCtrl.navigateForward("/tabs/tab1"))},function(t){console.log("%c \u8bf7\u6c42\u5904\u7406\u5931\u8d25 %c","color:red","url",n,"err",t),l.loading.dismiss(),l.presentConnError()}),[2]})})},n.prototype.presentConnError=function(){return o.b(this,void 0,void 0,function(){var n,l,t=this;return o.e(this,function(e){switch(e.label){case 0:return[4,this.translateService.get("message").subscribe(function(l){n=l})];case 1:return e.sent(),[4,this.alertController.create({header:n.error,subHeader:n["err-conn-fail"],message:n["err-conn-fail-msg"],buttons:[n.ok]})];case 2:return(l=e.sent()).onDidDismiss().then(function(n){t.loginDisabled=!1}),[4,l.present()];case 3:return e.sent(),[2]}})})},n}(),b=function(){return function(){}}(),p=t("pMnS"),c=t("oBZk"),g=t("A7o+"),d=t("gIcY"),h=t("ZYCi"),m=e.rb({encapsulation:0,styles:[["ion-item[_ngcontent-%COMP%]{padding-right:16px}.header-toolbar[_ngcontent-%COMP%]{--border-width:0!important}.lbl-button[_ngcontent-%COMP%]{margin-top:15px}.button[_ngcontent-%COMP%]{--border-radius:25px!important}.logo[_ngcontent-%COMP%]{border-radius:50%;width:100px;box-shadow:2px 2px 5px #ccc}.logo-box[_ngcontent-%COMP%]{margin:0 auto 15px;text-align:center}"]],data:{}});function f(n){return e.Ob(0,[(n()(),e.tb(0,0,null,null,3,"ion-header",[],null,null,null,c.R,c.i)),e.sb(1,49152,null,0,i.B,[e.h,e.k,e.z],null,null),(n()(),e.tb(2,0,null,0,1,"ion-toolbar",[["class","header-toolbar"],["translucent",""]],null,null,null,c.rb,c.I)),e.sb(3,49152,null,0,i.Bb,[e.h,e.k,e.z],null,null),(n()(),e.tb(4,0,null,null,50,"ion-content",[],null,null,null,c.P,c.g)),e.sb(5,49152,null,0,i.u,[e.h,e.k,e.z],null,null),(n()(),e.tb(6,0,null,0,48,"ion-list",[],null,null,null,c.X,c.n)),e.sb(7,49152,null,0,i.O,[e.h,e.k,e.z],null,null),(n()(),e.tb(8,0,null,0,1,"div",[["class","logo-box"]],null,null,null,null,null)),(n()(),e.tb(9,0,null,null,0,"img",[["class","logo"],["src","assets/img/cover.jpg"]],null,null,null,null,null)),(n()(),e.tb(10,0,null,0,12,"ion-item",[["class","mb-input"]],null,null,null,c.U,c.l)),e.sb(11,49152,null,0,i.H,[e.h,e.k,e.z],null,null),(n()(),e.tb(12,0,null,0,6,"ion-label",[["position","floating"]],null,null,null,c.V,c.m)),e.sb(13,49152,null,0,i.N,[e.h,e.k,e.z],{position:[0,"position"]},null),(n()(),e.Mb(14,0,[""," "])),e.Hb(131072,g.i,[g.j,e.h]),(n()(),e.tb(16,0,null,0,2,"ion-text",[["color","danger"]],null,null,null,c.nb,c.E)),e.sb(17,49152,null,0,i.wb,[e.h,e.k,e.z],{color:[0,"color"]},null),(n()(),e.Mb(-1,0,["*"])),(n()(),e.tb(19,0,null,0,3,"ion-input",[["clearInput",""],["inputmode","ip"],["placeholder","192.168.1.10"],["required","true"],["type","text"]],null,[[null,"ionBlur"],[null,"ionChange"]],function(n,l,t){var o=!0,i=n.component;return"ionBlur"===l&&(o=!1!==e.Fb(n,22)._handleBlurEvent(t.target)&&o),"ionChange"===l&&(o=!1!==e.Fb(n,22)._handleInputEvent(t.target)&&o),"ionBlur"===l&&(o=!1!==i.getIp(e.Fb(n,21))&&o),o},c.T,c.k)),e.Jb(5120,null,d.g,function(n){return[n]},[i.Ob]),e.sb(21,49152,[["ip",4]],0,i.G,[e.h,e.k,e.z],{clearInput:[0,"clearInput"],inputmode:[1,"inputmode"],placeholder:[2,"placeholder"],required:[3,"required"],type:[4,"type"],value:[5,"value"]},null),e.sb(22,16384,null,0,i.Ob,[e.k],null,null),(n()(),e.tb(23,0,null,0,12,"ion-item",[["class","mb-input"]],null,null,null,c.U,c.l)),e.sb(24,49152,null,0,i.H,[e.h,e.k,e.z],null,null),(n()(),e.tb(25,0,null,0,6,"ion-label",[["position","floating"]],null,null,null,c.V,c.m)),e.sb(26,49152,null,0,i.N,[e.h,e.k,e.z],{position:[0,"position"]},null),(n()(),e.Mb(27,0,[""," "])),e.Hb(131072,g.i,[g.j,e.h]),(n()(),e.tb(29,0,null,0,2,"ion-text",[["color","danger"]],null,null,null,c.nb,c.E)),e.sb(30,49152,null,0,i.wb,[e.h,e.k,e.z],{color:[0,"color"]},null),(n()(),e.Mb(-1,0,["*"])),(n()(),e.tb(32,0,null,0,3,"ion-input",[["clearInput",""],["inputmode","tel"],["maxlength","5"],["minlength","2"],["pattern","[0-9]*"],["placeholder","9999"],["required","true"],["type","tel"]],null,[[null,"ionBlur"],[null,"ionChange"]],function(n,l,t){var o=!0,i=n.component;return"ionBlur"===l&&(o=!1!==e.Fb(n,35)._handleBlurEvent(t.target)&&o),"ionChange"===l&&(o=!1!==e.Fb(n,35)._handleInputEvent(t.target)&&o),"ionBlur"===l&&(o=!1!==i.getPort(e.Fb(n,34))&&o),o},c.T,c.k)),e.Jb(5120,null,d.g,function(n){return[n]},[i.Ob]),e.sb(34,49152,[["port",4]],0,i.G,[e.h,e.k,e.z],{clearInput:[0,"clearInput"],inputmode:[1,"inputmode"],maxlength:[2,"maxlength"],minlength:[3,"minlength"],pattern:[4,"pattern"],placeholder:[5,"placeholder"],required:[6,"required"],type:[7,"type"],value:[8,"value"]},null),e.sb(35,16384,null,0,i.Ob,[e.k],null,null),(n()(),e.tb(36,0,null,0,10,"ion-item",[["class","mb-input"]],null,null,null,c.U,c.l)),e.sb(37,49152,null,0,i.H,[e.h,e.k,e.z],null,null),(n()(),e.tb(38,0,null,0,3,"ion-label",[["position","floating"]],null,null,null,c.V,c.m)),e.sb(39,49152,null,0,i.N,[e.h,e.k,e.z],{position:[0,"position"]},null),(n()(),e.Mb(40,0,["",""])),e.Hb(131072,g.i,[g.j,e.h]),(n()(),e.tb(42,0,null,0,4,"ion-input",[["clearInput",""],["inputmode","password"],["maxlength","8"],["minlength","0"],["type","password"]],null,[[null,"ionBlur"],[null,"ionChange"]],function(n,l,t){var o=!0,i=n.component;return"ionBlur"===l&&(o=!1!==e.Fb(n,46)._handleBlurEvent(t.target)&&o),"ionChange"===l&&(o=!1!==e.Fb(n,46)._handleInputEvent(t.target)&&o),"ionBlur"===l&&(o=!1!==i.getPassword(e.Fb(n,44))&&o),o},c.T,c.k)),e.Jb(5120,null,d.g,function(n){return[n]},[i.Ob]),e.sb(44,49152,[["password",4]],0,i.G,[e.h,e.k,e.z],{clearInput:[0,"clearInput"],inputmode:[1,"inputmode"],maxlength:[2,"maxlength"],minlength:[3,"minlength"],placeholder:[4,"placeholder"],type:[5,"type"],value:[6,"value"]},null),e.Hb(131072,g.i,[g.j,e.h]),e.sb(46,16384,null,0,i.Ob,[e.k],null,null),(n()(),e.tb(47,0,null,0,7,"ion-item",[["lines","none"]],null,null,null,c.U,c.l)),e.sb(48,49152,null,0,i.H,[e.h,e.k,e.z],{lines:[0,"lines"]},null),(n()(),e.tb(49,0,null,0,5,"ion-label",[["class","lbl-button"]],null,null,null,c.V,c.m)),e.sb(50,49152,null,0,i.N,[e.h,e.k,e.z],null,null),(n()(),e.tb(51,0,null,0,3,"ion-button",[["class","button"],["color","danger"],["expand","block"],["size","default"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.logIn()&&e),e},c.L,c.c)),e.sb(52,49152,null,0,i.k,[e.h,e.k,e.z],{color:[0,"color"],disabled:[1,"disabled"],expand:[2,"expand"],size:[3,"size"]},null),(n()(),e.Mb(53,0,["",""])),e.Hb(131072,g.i,[g.j,e.h])],function(n,l){var t=l.component;n(l,13,0,"floating"),n(l,17,0,"danger"),n(l,21,0,"","ip","192.168.1.10","true","text",e.xb(1,"",t.inputIp,"")),n(l,26,0,"floating"),n(l,30,0,"danger"),n(l,34,0,"","tel","5","2","[0-9]*","9999","true","tel",e.xb(1,"",t.inputPort,"")),n(l,39,0,"floating"),n(l,44,0,"","password","8","0",e.xb(1,"",e.Nb(l,44,4,e.Fb(l,45).transform("login.password-placeholder")),""),"password",e.xb(1,"",t.inputPassword,"")),n(l,48,0,"none"),n(l,52,0,"danger",e.xb(1,"",t.loginDisabled,""),"block","default")},function(n,l){n(l,14,0,e.Nb(l,14,0,e.Fb(l,15).transform("common.ip"))),n(l,27,0,e.Nb(l,27,0,e.Fb(l,28).transform("common.port"))),n(l,40,0,e.Nb(l,40,0,e.Fb(l,41).transform("common.password"))),n(l,53,0,e.Nb(l,53,0,e.Fb(l,54).transform("login.button-text")))})}function v(n){return e.Ob(0,[(n()(),e.tb(0,0,null,null,1,"app-login",[],null,null,null,f,m)),e.sb(1,114688,null,0,a,[i.Hb,g.j,i.b,r.a,h.a,i.Fb,s.a],null,null)],function(n,l){n(l,1,0)},null)}var w=e.pb("app-login",a,v,{},{},[]),k=t("Ip0R");t.d(l,"LoginPageModuleNgFactory",function(){return x});var x=e.qb(b,[],function(n){return e.Cb([e.Db(512,e.j,e.bb,[[8,[p.a,w]],[3,e.j],e.x]),e.Db(4608,k.l,k.k,[e.u,[2,k.v]]),e.Db(4608,d.o,d.o,[]),e.Db(4608,i.c,i.c,[e.z,e.g]),e.Db(4608,i.Gb,i.Gb,[i.c,e.j,e.q]),e.Db(4608,i.Lb,i.Lb,[i.c,e.j,e.q]),e.Db(1073742336,k.b,k.b,[]),e.Db(1073742336,d.n,d.n,[]),e.Db(1073742336,d.d,d.d,[]),e.Db(1073742336,i.Db,i.Db,[]),e.Db(1073742336,g.g,g.g,[]),e.Db(1073742336,h.o,h.o,[[2,h.t],[2,h.m]]),e.Db(1073742336,b,b,[]),e.Db(1024,h.k,function(){return[[{path:"",component:a}]]},[])])})}}]);