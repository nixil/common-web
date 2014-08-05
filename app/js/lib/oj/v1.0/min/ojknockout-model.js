define(["ojs/ojcore","knockout","ojs/ojmodel"],function(a,f){a.Ta=function(){};o_("KnockoutUtils",a.Ta,a);a.Ta.SG="oj._internalObj";a.Ta.oe="oj._underUpdate";a.Ta.bl="oj.collectionUpdating";a.Ta.map=function(b,d,c){function e(c){return function(d){g[a.Ta.oe]||b.set(c,d)}}var g,h,k,l;if(b instanceof a.j){g=c?f.observableArray():[];a.Ta.bF(g,b);for(h=0;h<b.Qc();h+=1)g.push(a.Ta.map(b.Ch(h,null,!0,!1),d));h=function(c){var d;try{if(!g[a.Ta.oe]){g[a.Ta.bl]=!0;for(d=0;d<c.length;d++){var e=c[d].index,
f=a.Ta.Ob(c[d].value),h=c[d].status;"added"===h?e>=b.length-1?b.add(f):b.add(f,{at:e}):"deleted"===h&&b.Zh(f,e)}b.comparator&&(g[a.Ta.oe]=!0,g.sort(function(c,d){return a.j.Yr(c,d,b.comparator,b,this)}),g[a.Ta.oe]=!1)}}catch(k){throw k;}finally{g[a.Ta.bl]=!1}};c&&g.subscribe&&g.subscribe(h,null,"arrayChange");c=function(b,c,d){var e;try{!g[a.Ta.bl]&&c instanceof a.j&&(g[a.Ta.oe]=!0,e=d.index,g.splice(e,1))}catch(f){throw f;}finally{g[a.Ta.oe]=!1}};h=function(b,c,e){var f,h;try{if(!g[a.Ta.bl]&&c instanceof
a.j&&(g[a.Ta.oe]=!0,f=c.NP(b),void 0!==f&&-1<f))if(h=a.Ta.map(b,d),e.fillIn){for(var k=Array.isArray(g)?g.length:g().length;k<f;k++)g.splice(k,0,a.Ta.map(c.Ch(k,null,!0,!1),d));g.splice(f,1,h)}else g.splice(f,0,h)}catch(l){throw l;}finally{g[a.Ta.oe]=!1}};k=function(b){try{!g[a.Ta.bl]&&b instanceof a.j&&(g[a.Ta.oe]=!0,f.isObservable(g)?g.removeAll():g=[])}catch(c){throw c;}finally{g[a.Ta.oe]=!1}};l=function(c){try{!g[a.Ta.bl]&&c instanceof a.j&&(g[a.Ta.oe]=!0,g.sort(function(d,e){return a.j.Yr(d,
e,b.comparator,c,this)}))}catch(d){throw d;}finally{g[a.Ta.oe]=!1}};b.Dg(a.X.v.ADD,h,void 0,void 0,!0);b.Dg(a.X.v.REMOVE,c,void 0,void 0,!0);b.Dg(a.X.v.RESET,k,void 0,void 0,!0);b.Dg(a.X.v.SORT,l,void 0,void 0,!0)}else{if(void 0===b)return;g={};c=b.attributes;h=null;for(h in c)c.hasOwnProperty(h)&&(k=f.observable(b.get(h)),g[h]=k,l=e(h),l.kW=h,k.subscribe&&k.subscribe(l));c=function(b){var c,d;try{for(d in g[a.Ta.oe]=!0,c=b.lw(),c)if(c.hasOwnProperty(d))g[d](b.get(d))}catch(e){throw e;}finally{g[a.Ta.oe]=
!1}};b.Dg(a.X.v.CHANGE,c,void 0,void 0,!0);a.Ta.bF(g,b);d&&d(g)}return g};o_("KnockoutUtils.map",a.Ta.map,a);a.Ta.wb=function(b){var d=[],c,e;for(c=0;c<b.length;c+=1)e=a.Ta.Ob(b[c]),d.push(e);return d};a.Ta.Ob=function(b){return b instanceof a.q?b:b[a.Ta.SG]};a.Ta.bF=function(b,d){Object.defineProperty(b,a.Ta.SG,{value:d,enumerable:!1})}});
//# sourceMappingURL=oj-modular.map