(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{"+P1L":function(e,t,n){"use strict";n.r(t),n.d(t,"UsersModule",function(){return f});var s=n("ofXK"),r=n("tyNb"),i=n("RS3s"),o=n("sRfN"),c=n("fXoL"),a=n("aceb");let l=(()=>{class e{constructor(e){this.service=e,this.settings={add:{addButtonContent:'<i class="nb-plus"></i>',createButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},edit:{editButtonContent:'<i class="nb-edit"></i>',saveButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},delete:{deleteButtonContent:'<i class="nb-trash"></i>',confirmDelete:!0},columns:{id:{title:"ID",type:"number"},firstName:{title:"First Name",type:"string"},lastName:{title:"Last Name",type:"string"},username:{title:"Username",type:"string"},email:{title:"E-mail",type:"string"},age:{title:"Age",type:"number"}}},this.source=new i.a;const t=this.service.getData();this.source.load(t)}onDeleteConfirm(e){window.confirm("Are you sure you want to delete?")?e.confirm.resolve():e.confirm.reject()}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275directiveInject"](o.a))},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-list-users"]],decls:5,vars:2,consts:[[3,"settings","source","deleteConfirm"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"nb-card"),c["\u0275\u0275elementStart"](1,"nb-card-header"),c["\u0275\u0275text"](2," List Utilisateurs "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](3,"nb-card-body"),c["\u0275\u0275elementStart"](4,"ng2-smart-table",0),c["\u0275\u0275listener"]("deleteConfirm",function(e){return t.onDeleteConfirm(e)}),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("settings",t.settings)("source",t.source))},directives:[a.D,a.G,a.C,i.b],styles:[""]}),e})();const u=[{path:"",component:(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["users"]],decls:1,vars:0,template:function(e,t){1&e&&c["\u0275\u0275element"](0,"router-outlet")},directives:[r.h],encapsulation:2}),e})(),children:[{path:"list-users",component:l}]}];let d=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({imports:[[r.g.forChild(u)],r.g]}),e})();var m=n("vTDv");let f=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({imports:[[s.c,d,a.H,a.Nb,a.Vb,a.eb,a.p,a.hb,a.zc,m.a,i.c]]}),e})()}}]);