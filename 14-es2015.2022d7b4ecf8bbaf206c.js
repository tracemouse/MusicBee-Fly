(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"f+ep":function(n,l,t){"use strict";t.r(l);var i=t("8Y7J"),e=t("mrSG"),o=t("ZZ/e"),u=t("aR35"),r=t("avBb"),s=t("SGxG");class a{constructor(n,l,t,i,e,o,r){this.navCtrl=n,this.translateService=l,this.alertController=t,this.myDBService=i,this.activeRoute=e,this.loadingController=o,this.wsService=r,this.inputIp=u.a.settings.ip,this.inputPort=u.a.settings.port,this.loginDisabled=!1,this.loadingDuration=6e4,this.bandIps=["localhost","musicbeefly.tracemouse.top","musicbee-fly.tracemouse.top"],this.activeRoute.queryParams.subscribe(n=>{this.from=n.from})}ngOnInit(){}ionViewWillEnter(){this.inputIp=u.a.settings.ip,this.inputPort=u.a.settings.port,this.bandIps.indexOf(this.inputIp)>=0&&(this.inputIp="",this.inputPort=""),"exit"!=this.from&&this.wsService.callMB({action:"getMB"},null,!0).subscribe(n=>{this.loginDisabled=!1,u.a.settings.ip=this.inputIp,u.a.settings.port=this.inputPort,u.a.settings.rootUrl=u.a.settings.protocol+"//"+u.a.settings.ip+":"+u.a.settings.port,this.myDBService.saveSettingsData(),this.navCtrl.navigateForward("/tabs/tab1")},n=>{console.log("%c \u8bf7\u6c42\u5904\u7406\u5931\u8d25 %c","color:red","err",n)})}initLoading(){return e.b(this,void 0,void 0,function*(){this.loading=yield this.loadingController.create({duration:this.loadingDuration,message:"",translucent:!0,cssClass:"custom-class custom-loading"})})}logIn(){return e.b(this,void 0,void 0,function*(){yield this.initLoading(),yield this.loading.present(),this.loginDisabled=!0,this.testMB("ws://"+this.inputIp+":"+this.inputPort+"/wsjsonrpc")})}getIp(n){this.inputIp=n.value}getPort(n){this.inputPort=n.value}testMB(n){return e.b(this,void 0,void 0,function*(){this.wsService.callMB({action:"getMB"},n,!0).subscribe(n=>{this.loginDisabled=!1,u.a.settings.ip=this.inputIp,u.a.settings.port=this.inputPort,u.a.settings.rootUrl=u.a.settings.protocol+"//"+u.a.settings.ip+":"+u.a.settings.port,this.myDBService.saveSettingsData(),this.loading.dismiss(),this.navCtrl.navigateForward("/tabs/tab1")},l=>{console.log("%c \u8bf7\u6c42\u5904\u7406\u5931\u8d25 %c","color:red","url",n,"err",l),this.loading.dismiss(),this.presentConnError()})})}presentConnError(){return e.b(this,void 0,void 0,function*(){var n;yield this.translateService.get("message").subscribe(l=>{n=l});const l=yield this.alertController.create({header:n.error,subHeader:n["err-conn-fail"],message:n["err-conn-fail-msg"],buttons:[n.ok]});l.onDidDismiss().then(n=>{this.loginDisabled=!1}),yield l.present()})}}class b{}var p=t("pMnS"),c=t("oBZk"),h=t("TSSN"),g=t("s7LF"),d=t("iInd"),m=i.pb({encapsulation:0,styles:[[".header-toolbar[_ngcontent-%COMP%]{--border-width:0!important}.lbl-button[_ngcontent-%COMP%]{margin-top:15px}.button[_ngcontent-%COMP%]{--border-radius:25px!important}.logo[_ngcontent-%COMP%]{border-radius:10px;width:100px;box-shadow:2px 2px 5px #ccc}.logo-box[_ngcontent-%COMP%]{margin:40px auto 0;text-align:center}"]],data:{}});function v(n){return i.Lb(0,[(n()(),i.rb(0,0,null,null,3,"ion-header",[],null,null,null,c.N,c.h)),i.qb(1,49152,null,0,o.B,[i.h,i.k,i.x],null,null),(n()(),i.rb(2,0,null,0,1,"ion-toolbar",[["class","header-toolbar"],["translucent",""]],null,null,null,c.lb,c.F)),i.qb(3,49152,null,0,o.Bb,[i.h,i.k,i.x],null,null),(n()(),i.rb(4,0,null,null,35,"ion-content",[],null,null,null,c.L,c.f)),i.qb(5,49152,null,0,o.u,[i.h,i.k,i.x],null,null),(n()(),i.rb(6,0,null,0,33,"ion-list",[],null,null,null,c.T,c.m)),i.qb(7,49152,null,0,o.O,[i.h,i.k,i.x],null,null),(n()(),i.rb(8,0,null,0,1,"div",[["class","logo-box"]],null,null,null,null,null)),(n()(),i.rb(9,0,null,null,0,"img",[["class","logo"],["src","assets/img/cover.jpg"]],null,null,null,null,null)),(n()(),i.rb(10,0,null,0,1,"ion-item",[["lines","none"]],null,null,null,c.Q,c.k)),i.qb(11,49152,null,0,o.H,[i.h,i.k,i.x],{lines:[0,"lines"]},null),(n()(),i.rb(12,0,null,0,9,"ion-item",[["class","mb-input"]],null,null,null,c.Q,c.k)),i.qb(13,49152,null,0,o.H,[i.h,i.k,i.x],null,null),(n()(),i.rb(14,0,null,0,3,"ion-label",[["position","floating"]],null,null,null,c.R,c.l)),i.qb(15,49152,null,0,o.N,[i.h,i.k,i.x],{position:[0,"position"]},null),(n()(),i.Jb(16,0,["",""])),i.Eb(131072,h.i,[h.j,i.h]),(n()(),i.rb(18,0,null,0,3,"ion-input",[["clearInput",""],["inputmode","ip"],["placeholder","192.168.1.10"],["required","true"],["type","text"]],null,[[null,"ionBlur"],[null,"ionChange"]],function(n,l,t){var e=!0,o=n.component;return"ionBlur"===l&&(e=!1!==i.Db(n,21)._handleBlurEvent(t.target)&&e),"ionChange"===l&&(e=!1!==i.Db(n,21)._handleInputEvent(t.target)&&e),"ionBlur"===l&&(e=!1!==o.getIp(i.Db(n,20))&&e),e},c.P,c.j)),i.Gb(5120,null,g.g,function(n){return[n]},[o.Nb]),i.qb(20,49152,[["ip",4]],0,o.G,[i.h,i.k,i.x],{clearInput:[0,"clearInput"],inputmode:[1,"inputmode"],placeholder:[2,"placeholder"],required:[3,"required"],type:[4,"type"],value:[5,"value"]},null),i.qb(21,16384,null,0,o.Nb,[i.k],null,null),(n()(),i.rb(22,0,null,0,9,"ion-item",[["class","mb-input"]],null,null,null,c.Q,c.k)),i.qb(23,49152,null,0,o.H,[i.h,i.k,i.x],null,null),(n()(),i.rb(24,0,null,0,3,"ion-label",[["position","floating"]],null,null,null,c.R,c.l)),i.qb(25,49152,null,0,o.N,[i.h,i.k,i.x],{position:[0,"position"]},null),(n()(),i.Jb(26,0,["",""])),i.Eb(131072,h.i,[h.j,i.h]),(n()(),i.rb(28,0,null,0,3,"ion-input",[["clearInput",""],["inputmode","tel"],["maxlength","5"],["minlength","2"],["pattern","[0-9]*"],["placeholder","9999"],["required","true"],["type","tel"]],null,[[null,"ionBlur"],[null,"ionChange"]],function(n,l,t){var e=!0,o=n.component;return"ionBlur"===l&&(e=!1!==i.Db(n,31)._handleBlurEvent(t.target)&&e),"ionChange"===l&&(e=!1!==i.Db(n,31)._handleInputEvent(t.target)&&e),"ionBlur"===l&&(e=!1!==o.getPort(i.Db(n,30))&&e),e},c.P,c.j)),i.Gb(5120,null,g.g,function(n){return[n]},[o.Nb]),i.qb(30,49152,[["port",4]],0,o.G,[i.h,i.k,i.x],{clearInput:[0,"clearInput"],inputmode:[1,"inputmode"],maxlength:[2,"maxlength"],minlength:[3,"minlength"],pattern:[4,"pattern"],placeholder:[5,"placeholder"],required:[6,"required"],type:[7,"type"],value:[8,"value"]},null),i.qb(31,16384,null,0,o.Nb,[i.k],null,null),(n()(),i.rb(32,0,null,0,7,"ion-item",[["lines","none"]],null,null,null,c.Q,c.k)),i.qb(33,49152,null,0,o.H,[i.h,i.k,i.x],{lines:[0,"lines"]},null),(n()(),i.rb(34,0,null,0,5,"ion-label",[["class","lbl-button"]],null,null,null,c.R,c.l)),i.qb(35,49152,null,0,o.N,[i.h,i.k,i.x],null,null),(n()(),i.rb(36,0,null,0,3,"ion-button",[["class","button"],["color","danger"],["expand","block"],["size","default"]],null,[[null,"click"]],function(n,l,t){var i=!0;return"click"===l&&(i=!1!==n.component.logIn()&&i),i},c.H,c.b)),i.qb(37,49152,null,0,o.k,[i.h,i.k,i.x],{color:[0,"color"],disabled:[1,"disabled"],expand:[2,"expand"],size:[3,"size"]},null),(n()(),i.Jb(38,0,["",""])),i.Eb(131072,h.i,[h.j,i.h])],function(n,l){var t=l.component;n(l,11,0,"none"),n(l,15,0,"floating"),n(l,20,0,"","ip","192.168.1.10","true","text",i.vb(1,"",t.inputIp,"")),n(l,25,0,"floating"),n(l,30,0,"","tel","5","2","[0-9]*","9999","true","tel",i.vb(1,"",t.inputPort,"")),n(l,33,0,"none"),n(l,37,0,"danger",i.vb(1,"",t.loginDisabled,""),"block","default")},function(n,l){n(l,16,0,i.Kb(l,16,0,i.Db(l,17).transform("common.ip"))),n(l,26,0,i.Kb(l,26,0,i.Db(l,27).transform("common.port"))),n(l,38,0,i.Kb(l,38,0,i.Db(l,39).transform("login.button-text")))})}function x(n){return i.Lb(0,[(n()(),i.rb(0,0,null,null,1,"app-login",[],null,null,null,v,m)),i.qb(1,114688,null,0,a,[o.Hb,h.j,o.b,r.a,d.a,o.Fb,s.a],null,null)],function(n,l){n(l,1,0)},null)}var f=i.nb("app-login",a,x,{},{},[]),B=t("SVse");t.d(l,"LoginPageModuleNgFactory",function(){return k});var k=i.ob(b,[],function(n){return i.Ab([i.Bb(512,i.j,i.Z,[[8,[p.a,f]],[3,i.j],i.v]),i.Bb(4608,B.l,B.k,[i.s,[2,B.v]]),i.Bb(4608,g.o,g.o,[]),i.Bb(4608,o.c,o.c,[i.x,i.g]),i.Bb(4608,o.Gb,o.Gb,[o.c,i.j,i.p]),i.Bb(4608,o.Lb,o.Lb,[o.c,i.j,i.p]),i.Bb(1073742336,B.b,B.b,[]),i.Bb(1073742336,g.n,g.n,[]),i.Bb(1073742336,g.d,g.d,[]),i.Bb(1073742336,o.Db,o.Db,[]),i.Bb(1073742336,h.g,h.g,[]),i.Bb(1073742336,d.n,d.n,[[2,d.s],[2,d.m]]),i.Bb(1073742336,b,b,[]),i.Bb(1024,d.k,function(){return[[{path:"",component:a}]]},[])])})}}]);