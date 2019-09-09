(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{W9vR:function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),i=function(){return function(){}}(),o=t("pMnS"),u=t("oBZk"),r=t("ZZ/e"),s=t("A7o+"),a=t("gIcY"),c=t("Ip0R"),b=t("mrSG"),h=t("aR35"),p=t("SGxG"),d=t("6lhk"),f=t("gPUr"),g=function(){function n(n,l,t,e){this.wsService=n,this.modalController=l,this.navCtrl=t,this.loadingController=e,this.loadingDuration=60*h.a.settings.timeout*1e3,this.playlists=[]}return n.prototype.ngOnInit=function(){var n=this;this.wsService.callMB({action:"getPlaylist"}).subscribe(function(l){n.pushData(l)})},n.prototype.pushData=function(n){this.playlists=n},n.prototype.ionViewWillEnter=function(){},n.prototype.ionViewWillLeave=function(){null!=this.loading&&this.loading.dismiss()},n.prototype.ngOnDestroy=function(){null!=this.loading&&this.loading.dismiss()},n.prototype.initLoading=function(){return b.b(this,void 0,void 0,function(){var n;return b.e(this,function(l){switch(l.label){case 0:return n=this,[4,this.loadingController.create({duration:this.loadingDuration,message:"",translucent:!0,cssClass:"custom-class custom-loading"})];case 1:return n.loading=l.sent(),[2]}})})},n.prototype.showTracks=function(n){return b.b(this,void 0,void 0,function(){var l=this;return b.e(this,function(t){switch(t.label){case 0:return[4,this.initLoading()];case 1:return t.sent(),[4,this.loading.present()];case 2:return t.sent(),this.wsService.callMB({action:"playlistTracklist",playlistUrl:n.playlistUrl}).subscribe(function(t){l.loading.dismiss(),l.showTracksPage(t,n)}),[2]}})})},n.prototype.showTracksPage=function(n,l){return b.b(this,void 0,void 0,function(){var t,e=this;return b.e(this,function(i){switch(i.label){case 0:return[4,this.modalController.create({component:d.a,enterAnimation:f.c,leaveAnimation:f.d,componentProps:{title:l.name,fileUrl:"",tracks:n}})];case 1:return(t=i.sent()).onDidDismiss().then(function(n){n.data.hasError&&e.navCtrl.navigateBack("/login")}),[4,t.present()];case 2:return[2,i.sent()]}})})},n.prototype.doRefresh=function(n){return b.b(this,void 0,void 0,function(){var l=this;return b.e(this,function(t){switch(t.label){case 0:return[4,this.initLoading()];case 1:return t.sent(),[4,this.loading.present()];case 2:return t.sent(),this.wsService.callMB({action:"getPlaylist"}).subscribe(function(t){l.loading.dismiss(),l.pushData(t),n.target.complete()}),[2]}})})},n.prototype.handleSbInput=function(n){var l=n.target.value.toLowerCase();requestAnimationFrame(function(){Array.from(document.querySelector("#il-playlist").children).forEach(function(n){var t=n.textContent.toLowerCase().indexOf(l)>-1;n.style.display=t?"block":"none"})})},n.prototype.refresh=function(){var n=this;this.wsService.callMB({action:"getPlaylist"}).subscribe(function(l){n.pushData(l)})},n.prototype.sbKeyup=function(n){return b.b(this,void 0,void 0,function(){return b.e(this,function(l){return"Enter"!=n.key?[2]:(n.target.blur(),[2])})})},n}(),m=e.rb({encapsulation:0,styles:[["ion-content[_ngcontent-%COMP%]{--ion-background-color:#fff}.header-toolbar[_ngcontent-%COMP%]{--border-width:0!important}.list-1[_ngcontent-%COMP%]{margin-top:0}.header-title[_ngcontent-%COMP%]{text-align:left;font-size:1.3rem;font-weight:700;margin-left:10px;color:#222}.search-bar[_ngcontent-%COMP%]{margin-top:10px}.playlist-icon[_ngcontent-%COMP%]{margin-right:8px}.item-title[_ngcontent-%COMP%]{color:#333}"]],data:{}});function v(n){return e.Nb(0,[(n()(),e.tb(0,0,null,null,5,"ion-item",[["button",""]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.showTracks(n.context.$implicit)&&e),e},u.Q,u.k)),e.sb(1,49152,null,0,r.H,[e.h,e.k,e.z],{button:[0,"button"]},null),(n()(),e.tb(2,0,null,0,0,"img",[["class","playlist-icon"],["src","assets/svg/playlist.svg"]],null,null,null,null,null)),(n()(),e.tb(3,0,null,0,2,"ion-label",[["class","item-title"]],null,null,null,u.R,u.l)),e.sb(4,49152,null,0,r.N,[e.h,e.k,e.z],null,null),(n()(),e.Lb(5,0,["",""]))],function(n,l){n(l,1,0,"")},function(n,l){n(l,5,0,l.context.$implicit.name)})}function y(n){return e.Nb(0,[(n()(),e.tb(0,0,null,null,11,"ion-header",[["mode","ios"]],null,null,null,u.N,u.h)),e.sb(1,49152,null,0,r.B,[e.h,e.k,e.z],{mode:[0,"mode"]},null),(n()(),e.tb(2,0,null,0,9,"ion-toolbar",[["class","header-toolbar"]],null,null,null,u.lb,u.F)),e.sb(3,49152,null,0,r.Bb,[e.h,e.k,e.z],null,null),(n()(),e.tb(4,0,null,0,2,"div",[["class","header-title"]],null,null,null,null,null)),(n()(),e.Lb(5,null,["",""])),e.Gb(131072,s.i,[s.j,e.h]),(n()(),e.tb(7,0,null,0,4,"ion-buttons",[["slot","end"]],null,null,null,u.I,u.c)),e.sb(8,49152,null,0,r.l,[e.h,e.k,e.z],null,null),(n()(),e.tb(9,0,null,0,2,"ion-button",[["color","danger"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.refresh()&&e),e},u.H,u.b)),e.sb(10,49152,null,0,r.k,[e.h,e.k,e.z],{color:[0,"color"]},null),(n()(),e.tb(11,0,null,0,0,"img",[["src","assets/svg/refresh.svg"]],null,null,null,null,null)),(n()(),e.tb(12,0,null,null,16,"ion-content",[],null,null,null,u.L,u.f)),e.sb(13,49152,null,0,r.u,[e.h,e.k,e.z],null,null),(n()(),e.tb(14,0,null,0,3,"ion-refresher",[["pullFactor","0.5"],["pullMax","200"],["pullMin","100"],["slot","fixed"]],null,[[null,"ionRefresh"]],function(n,l,t){var e=!0;return"ionRefresh"===l&&(e=!1!==n.component.doRefresh(t)&&e),e},u.X,u.q)),e.sb(15,49152,null,0,r.cb,[e.h,e.k,e.z],{pullFactor:[0,"pullFactor"],pullMax:[1,"pullMax"],pullMin:[2,"pullMin"]},null),(n()(),e.tb(16,0,null,0,1,"ion-refresher-content",[],null,null,null,u.W,u.r)),e.sb(17,49152,null,0,r.db,[e.h,e.k,e.z],null,null),(n()(),e.tb(18,0,null,0,6,"ion-toolbar",[["class","search-bar"]],null,null,null,u.lb,u.F)),e.sb(19,49152,null,0,r.Bb,[e.h,e.k,e.z],null,null),(n()(),e.tb(20,0,null,0,4,"ion-searchbar",[["id","sb-playlist"],["mode","ios"]],null,[[null,"ionChange"],[null,"keyup"],[null,"ionBlur"]],function(n,l,t){var i=!0,o=n.component;return"ionBlur"===l&&(i=!1!==e.Fb(n,24)._handleBlurEvent(t.target)&&i),"ionChange"===l&&(i=!1!==e.Fb(n,24)._handleInputEvent(t.target)&&i),"ionChange"===l&&(i=!1!==o.handleSbInput(t)&&i),"keyup"===l&&(i=!1!==o.sbKeyup(t)&&i),i},u.Z,u.t)),e.Ib(5120,null,a.g,function(n){return[n]},[r.Nb]),e.sb(22,49152,null,0,r.jb,[e.h,e.k,e.z],{mode:[0,"mode"],placeholder:[1,"placeholder"]},null),e.Gb(131072,s.i,[s.j,e.h]),e.sb(24,16384,null,0,r.Nb,[e.k],null,null),(n()(),e.tb(25,0,null,0,3,"ion-list",[["class","list-1"],["id","il-playlist"],["lines","none"]],null,null,null,u.T,u.m)),e.sb(26,49152,null,0,r.O,[e.h,e.k,e.z],{lines:[0,"lines"]},null),(n()(),e.ib(16777216,null,0,1,null,v)),e.sb(28,278528,null,0,c.i,[e.O,e.L,e.s],{ngForOf:[0,"ngForOf"]},null)],function(n,l){var t=l.component;n(l,1,0,"ios"),n(l,10,0,"danger"),n(l,15,0,"0.5","200","100"),n(l,22,0,"ios",e.xb(1,"",e.Mb(l,22,1,e.Fb(l,23).transform("common.search-placeholder")),"")),n(l,26,0,"none"),n(l,28,0,t.playlists)},function(n,l){n(l,5,0,e.Mb(l,5,0,e.Fb(l,6).transform("tab3.header")))})}function k(n){return e.Nb(0,[(n()(),e.tb(0,0,null,null,1,"app-tab3",[],null,null,null,y,m)),e.sb(1,245760,null,0,g,[p.a,r.Gb,r.Hb,r.Fb],null,null)],function(n,l){n(l,1,0)},null)}var w=e.pb("app-tab3",g,k,{},{},[]),D=t("ZYCi");t.d(l,"Tab3PageModuleNgFactory",function(){return C});var C=e.qb(i,[],function(n){return e.Cb([e.Db(512,e.j,e.bb,[[8,[o.a,w]],[3,e.j],e.x]),e.Db(4608,c.l,c.k,[e.u,[2,c.v]]),e.Db(4608,r.c,r.c,[e.z,e.g]),e.Db(4608,r.Gb,r.Gb,[r.c,e.j,e.q]),e.Db(4608,r.Lb,r.Lb,[r.c,e.j,e.q]),e.Db(4608,a.o,a.o,[]),e.Db(1073742336,c.b,c.b,[]),e.Db(1073742336,r.Db,r.Db,[]),e.Db(1073742336,a.n,a.n,[]),e.Db(1073742336,a.d,a.d,[]),e.Db(1073742336,s.g,s.g,[]),e.Db(1073742336,D.n,D.n,[[2,D.s],[2,D.m]]),e.Db(1073742336,i,i,[]),e.Db(1024,D.k,function(){return[[{path:"",component:g}]]},[])])})}}]);