!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var l=t[n];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}function n(e,n,l){return n&&t(e.prototype,n),l&&t(e,l),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{nzd4:function(t,l,r){"use strict";r.r(l),r.d(l,"ProduitsModule",function(){return _});var a,i=r("tR1z"),o=r("ofXK"),d=r("tyNb"),m=r("RS3s"),c=r("sRfN"),s=r("fXoL"),b=r("aceb"),u=((a=function(){function t(n){e(this,t),this.service=n,this.settings={add:{addButtonContent:'<i class="nb-plus"></i>',createButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},edit:{editButtonContent:'<i class="nb-edit"></i>',saveButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},delete:{deleteButtonContent:'<i class="nb-trash"></i>',confirmDelete:!0},columns:{id:{title:"ID",type:"number"},firstName:{title:"First Name",type:"string"},lastName:{title:"Last Name",type:"string"},username:{title:"Username",type:"string"},email:{title:"E-mail",type:"string"},age:{title:"Age",type:"number"}}},this.source=new m.a;var l=this.service.getData();this.source.load(l)}return n(t,[{key:"onDeleteConfirm",value:function(e){window.confirm("Are you sure you want to delete?")?e.confirm.resolve():e.confirm.reject()}},{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(e){return new(e||a)(s["\u0275\u0275directiveInject"](c.a))},a.\u0275cmp=s["\u0275\u0275defineComponent"]({type:a,selectors:[["ngx-list-produits"]],decls:5,vars:2,consts:[[3,"settings","source","deleteConfirm"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"nb-card"),s["\u0275\u0275elementStart"](1,"nb-card-header"),s["\u0275\u0275text"](2," List Produits "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](3,"nb-card-body"),s["\u0275\u0275elementStart"](4,"ng2-smart-table",0),s["\u0275\u0275listener"]("deleteConfirm",function(e){return t.onDeleteConfirm(e)}),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("settings",t.settings)("source",t.source))},directives:[b.D,b.G,b.C,m.b],styles:[""]}),a);function p(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"nb-list-item"),s["\u0275\u0275element"](1,"nb-user",28),s["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("name",n.name)("title",n.title)}}function g(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"nb-list-item"),s["\u0275\u0275element"](1,"nb-user",28),s["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("name",n.name)("title",n.title)}}var f,S=((f=function(){function t(){e(this,t),this.users=[{name:"Carla Espinosa",title:"Nurse"},{name:"Bob Kelso",title:"Doctor of Medicine"},{name:"Janitor",title:"Janitor"},{name:"Perry Cox",title:"Doctor of Medicine"},{name:"Ben Sullivan",title:"Carpenter and photographer"}],this.loading=!1}return n(t,[{key:"toggleLoadingAnimation",value:function(){var e=this;this.loading=!0,setTimeout(function(){return e.loading=!1},3e3)}},{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(e){return new(e||f)},f.\u0275cmp=s["\u0275\u0275defineComponent"]({type:f,selectors:[["ngx-produits-details"]],decls:109,vars:6,consts:[[1,"row"],[1,"col-lg-6"],[1,"form-group","row"],["for","reference",1,"label","col-sm-3","col-form-label"],[1,"col-sm-9"],["selected","1","id","reference",3,"selectedChange"],["value","1"],["value","2"],["nbSpinnerStatus","primary",3,"nbSpinner"],["src","../../../../assets/images/product_icon.png","alt","image",1,"col-lg-6","center"],["nbButton","","outline","","status","primary"],["icon","save"],["size","small",1,"list-card"],[4,"ngFor","ngForOf"],[1,"form-group"],["for","nom",1,"label"],["type","text","nbInput","","fullWidth","","id","nom","placeholder","Nom"],["for","reference",1,"label"],["disabled","","type","text","nbInput","","fullWidth","","id","reference","placeholder","R\xe9f\xe9rence"],["for","price",1,"label"],["type","text","nbInput","","fullWidth","","id","price","placeholder","Prix"],["for","rank",1,"label"],["disabled","","type","text","nbInput","","fullWidth","","id","rank","placeholder","Score"],["selected","1","id","reference"],["checked",""],["rows","5","nbInput","","fullWidth","","placeholder","Text Area"],["rows","5","nbInput","","fullWidth","","disabled","","placeholder","Text Area"],["type","submit","nbButton","","status","danger"],[3,"name","title"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"div",0),s["\u0275\u0275elementStart"](1,"div",1),s["\u0275\u0275elementStart"](2,"nb-card"),s["\u0275\u0275elementStart"](3,"nb-card-header"),s["\u0275\u0275text"](4,"S\xe9lectionner un produit"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](5,"nb-card-body"),s["\u0275\u0275elementStart"](6,"div",2),s["\u0275\u0275elementStart"](7,"label",3),s["\u0275\u0275text"](8,"R\xe9f\xe9rence"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](9,"div",4),s["\u0275\u0275elementStart"](10,"nb-select",5),s["\u0275\u0275listener"]("selectedChange",function(){return t.toggleLoadingAnimation()}),s["\u0275\u0275elementStart"](11,"nb-option",6),s["\u0275\u0275text"](12,"Produit 1"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](13,"nb-option",7),s["\u0275\u0275text"](14,"Produit 2"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](15,"nb-card"),s["\u0275\u0275elementStart"](16,"nb-card-header"),s["\u0275\u0275text"](17,"Image du Produit"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](18,"nb-card-body",8),s["\u0275\u0275element"](19,"img",9),s["\u0275\u0275elementStart"](20,"button",10),s["\u0275\u0275element"](21,"nb-icon",11),s["\u0275\u0275text"](22," Changer image "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](23,"nb-card",12),s["\u0275\u0275elementStart"](24,"nb-card-header"),s["\u0275\u0275text"](25,"Ingr\xe9dients"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](26,"nb-list",8),s["\u0275\u0275template"](27,p,2,2,"nb-list-item",13),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](28,"nb-card",12),s["\u0275\u0275elementStart"](29,"nb-card-header"),s["\u0275\u0275text"](30,"Allergies"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](31,"nb-list",8),s["\u0275\u0275template"](32,g,2,2,"nb-list-item",13),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](33,"div",1),s["\u0275\u0275elementStart"](34,"nb-card"),s["\u0275\u0275elementStart"](35,"nb-card-header"),s["\u0275\u0275text"](36,"D\xe9tails Produit"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](37,"nb-card-body",8),s["\u0275\u0275elementStart"](38,"form"),s["\u0275\u0275elementStart"](39,"div",14),s["\u0275\u0275elementStart"](40,"label",15),s["\u0275\u0275text"](41,"Nom Produit"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](42,"input",16),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](43,"div",14),s["\u0275\u0275elementStart"](44,"label",17),s["\u0275\u0275text"](45,"R\xe9f\xe9rence"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](46,"input",18),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](47,"div",14),s["\u0275\u0275elementStart"](48,"label",19),s["\u0275\u0275text"](49,"Prix"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](50,"input",20),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](51,"div",14),s["\u0275\u0275elementStart"](52,"label",21),s["\u0275\u0275text"](53,"Score"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](54,"input",22),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](55,"div",2),s["\u0275\u0275elementStart"](56,"label",3),s["\u0275\u0275text"](57,"Cat\xe9gorie"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](58,"nb-select",23),s["\u0275\u0275elementStart"](59,"nb-option",6),s["\u0275\u0275text"](60,"Cat\xe9gorie 1"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](61,"nb-option",7),s["\u0275\u0275text"](62,"Cat\xe9gorie 2"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](63,"div",2),s["\u0275\u0275elementStart"](64,"label",3),s["\u0275\u0275text"](65,"Type"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](66,"div"),s["\u0275\u0275elementStart"](67,"nb-checkbox"),s["\u0275\u0275text"](68,"Bio"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](69,"br"),s["\u0275\u0275elementStart"](70,"nb-checkbox"),s["\u0275\u0275text"](71,"Vegan"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](72,"br"),s["\u0275\u0275elementStart"](73,"nb-checkbox"),s["\u0275\u0275text"](74,"Naturelle"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](75,"br"),s["\u0275\u0275elementStart"](76,"nb-checkbox"),s["\u0275\u0275text"](77,"Sans allergenes"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](78,"br"),s["\u0275\u0275elementStart"](79,"nb-checkbox"),s["\u0275\u0275text"](80,"Eco"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](81,"br"),s["\u0275\u0275elementStart"](82,"nb-checkbox",24),s["\u0275\u0275text"](83,"Organique"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](84,"div",2),s["\u0275\u0275elementStart"](85,"label",3),s["\u0275\u0275text"](86,"Peau sugg\xe9r\xe9"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](87,"nb-select",23),s["\u0275\u0275elementStart"](88,"nb-option",6),s["\u0275\u0275text"](89,"Skin Type 1"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](90,"nb-option",7),s["\u0275\u0275text"](91,"Skin Type 2"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](92,"div",14),s["\u0275\u0275elementStart"](93,"label",21),s["\u0275\u0275text"](94,"Dimensions"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](95,"input",22),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](96,"div",2),s["\u0275\u0275elementStart"](97,"label",3),s["\u0275\u0275text"](98,"Description "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](99,"textarea",25),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](100,"div",2),s["\u0275\u0275elementStart"](101,"label",3),s["\u0275\u0275text"](102,"Autre description "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](103,"nb-checkbox"),s["\u0275\u0275text"](104,"Autre description"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](105,"br"),s["\u0275\u0275element"](106,"textarea",26),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](107,"button",27),s["\u0275\u0275text"](108,"Modifier"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](18),s["\u0275\u0275property"]("nbSpinner",t.loading),s["\u0275\u0275advance"](8),s["\u0275\u0275property"]("nbSpinner",t.loading),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngForOf",t.users),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("nbSpinner",t.loading),s["\u0275\u0275advance"](1),s["\u0275\u0275property"]("ngForOf",t.users),s["\u0275\u0275advance"](5),s["\u0275\u0275property"]("nbSpinner",t.loading))},directives:[b.D,b.G,b.C,b.Lb,b.wb,b.Ub,b.q,b.cb,b.pb,o.m,b.gb,b.M,b.qb,b.yc],styles:["nb-card-body[_ngcontent-%COMP%]{overflow:visible;padding-top:0}nb-card-body[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin-top:1rem}.full-name-inputs[_ngcontent-%COMP%], .validation-checkboxes[_ngcontent-%COMP%]{display:flex;margin:0 -.5rem}.full-name-inputs[_ngcontent-%COMP%] > *[_ngcontent-%COMP%], .validation-checkboxes[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:0 .5rem}.checkbox-radio[_ngcontent-%COMP%]{display:flex}.demo-items[_ngcontent-%COMP%]{flex:1 0 33%}.nb-theme-default   [_nghost-%COMP%]   .list-card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%]{border-bottom:none}.nb-theme-default   [_nghost-%COMP%]   .list-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]{padding:0}.nb-theme-dark   [_nghost-%COMP%]   .list-card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%]{border-bottom:none}.nb-theme-dark   [_nghost-%COMP%]   .list-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]{padding:0}.nb-theme-cosmic   [_nghost-%COMP%]   .list-card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%]{border-bottom:none}.nb-theme-cosmic   [_nghost-%COMP%]   .list-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]{padding:0}.nb-theme-corporate   [_nghost-%COMP%]   .list-card[_ngcontent-%COMP%]   nb-card-header[_ngcontent-%COMP%]{border-bottom:none}.nb-theme-corporate   [_nghost-%COMP%]   .list-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]{padding:0}"]}),f);function E(e,t){if(1&e&&(s["\u0275\u0275elementStart"](0,"nb-list-item"),s["\u0275\u0275elementStart"](1,"button",13),s["\u0275\u0275element"](2,"nb-icon",14),s["\u0275\u0275elementEnd"](),s["\u0275\u0275element"](3,"nb-user",15),s["\u0275\u0275elementEnd"]()),2&e){var n=t.$implicit;s["\u0275\u0275advance"](3),s["\u0275\u0275property"]("name",n.name)("title",n.title)}}var h,v,x,C,y=((h=function(){function t(){e(this,t),this.loading=!1,this.users=[{name:"Carla Espinosa",title:"Nurse"},{name:"Bob Kelso",title:"Doctor of Medicine"},{name:"Janitor",title:"Janitor"},{name:"Perry Cox",title:"Doctor of Medicine"},{name:"Ben Sullivan",title:"Carpenter and photographer"}]}return n(t,[{key:"toggleLoadingAnimation",value:function(){var e=this;this.loading=!0,setTimeout(function(){return e.loading=!1},3e3)}},{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(e){return new(e||h)},h.\u0275cmp=s["\u0275\u0275defineComponent"]({type:h,selectors:[["ngx-produits-ingredients"]],decls:43,vars:2,consts:[[1,"form-group","row"],["for","inputEmail1",1,"label","col-sm-3","col-form-label"],[1,"col-sm-9"],["selected","1",3,"selectedChange"],["value","1"],["value","2"],["value","3"],["value","4"],["value","5"],[1,"lists","row"],[1,"col-md-12","col-lg-12","col-xxxl-12"],["size","small","nbSpinnerStatus","primary",1,"list-card",3,"nbSpinner"],[4,"ngFor","ngForOf"],["nbButton","","hero","","status","danger"],["icon","trash"],[3,"name","title"]],template:function(e,t){1&e&&(s["\u0275\u0275elementStart"](0,"nb-card"),s["\u0275\u0275elementStart"](1,"nb-card-header"),s["\u0275\u0275text"](2," Affecter produits/ingr\xe9dients "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](3,"nb-card-body"),s["\u0275\u0275elementStart"](4,"nb-alert"),s["\u0275\u0275text"](5," Choisissez un produit pour pouvoir manipuler ses ingr\xe9dients. "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](6,"div",0),s["\u0275\u0275elementStart"](7,"label",1),s["\u0275\u0275text"](8,"Choisi un produit"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](9,"div",2),s["\u0275\u0275elementStart"](10,"nb-select",3),s["\u0275\u0275listener"]("selectedChange",function(){return t.toggleLoadingAnimation()}),s["\u0275\u0275elementStart"](11,"nb-option",4),s["\u0275\u0275text"](12,"Produit 1"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](13,"nb-option",5),s["\u0275\u0275text"](14,"Produit 2"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](15,"nb-option",6),s["\u0275\u0275text"](16,"Produit 3"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](17,"nb-option",7),s["\u0275\u0275text"](18,"Produit 4"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](19,"nb-option",8),s["\u0275\u0275text"](20,"Produit 5"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](21,"div",0),s["\u0275\u0275elementStart"](22,"label",1),s["\u0275\u0275text"](23,"Choisi un ingr\xe9dient pour ajouter "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](24,"div",2),s["\u0275\u0275elementStart"](25,"nb-select",3),s["\u0275\u0275listener"]("selectedChange",function(){return t.toggleLoadingAnimation()}),s["\u0275\u0275elementStart"](26,"nb-option",4),s["\u0275\u0275text"](27,"Ingredient 1"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](28,"nb-option",5),s["\u0275\u0275text"](29,"Ingredient 2"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](30,"nb-option",6),s["\u0275\u0275text"](31,"Ingredient 3"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](32,"nb-option",7),s["\u0275\u0275text"](33,"Ingredient 4"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](34,"nb-option",8),s["\u0275\u0275text"](35,"Ingredient 5"),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](36,"div",9),s["\u0275\u0275elementStart"](37,"div",10),s["\u0275\u0275elementStart"](38,"nb-card",11),s["\u0275\u0275elementStart"](39,"nb-card-header"),s["\u0275\u0275text"](40,"Ingr\xe9dients Actuelles "),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementStart"](41,"nb-list"),s["\u0275\u0275template"](42,E,4,2,"nb-list-item",12),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"](),s["\u0275\u0275elementEnd"]()),2&e&&(s["\u0275\u0275advance"](38),s["\u0275\u0275property"]("nbSpinner",t.loading),s["\u0275\u0275advance"](4),s["\u0275\u0275property"]("ngForOf",t.users))},directives:[b.D,b.G,b.C,b.o,b.Lb,b.wb,b.Ub,b.pb,o.m,b.qb,b.q,b.cb,b.yc],styles:[""]}),h),P=[{path:"",component:(v=function t(){e(this,t)},v.\u0275fac=function(e){return new(e||v)},v.\u0275cmp=s["\u0275\u0275defineComponent"]({type:v,selectors:[["produits"]],decls:1,vars:0,template:function(e,t){1&e&&s["\u0275\u0275element"](0,"router-outlet")},directives:[d.h],encapsulation:2}),v),children:[{path:"list-produits",component:u},{path:"produits-ingredients",component:y},{path:"produits-details",component:S}]}],O=((x=function t(){e(this,t)}).\u0275fac=function(e){return new(e||x)},x.\u0275mod=s["\u0275\u0275defineNgModule"]({type:x}),x.\u0275inj=s["\u0275\u0275defineInjector"]({imports:[[d.g.forChild(P)],d.g]}),x),M=r("vTDv"),_=((C=function t(){e(this,t)}).\u0275fac=function(e){return new(e||C)},C.\u0275mod=s["\u0275\u0275defineNgModule"]({type:C}),C.\u0275inj=s["\u0275\u0275defineInjector"]({imports:[[o.c,O,b.H,b.Nb,b.rb,b.eb,b.p,b.hb,b.r,i.a,b.Vb,b.N,M.a,m.c,b.zc]]}),C)}}])}();