/*
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright 2013 jQuery Foundation and other contributors
 Released under the MIT license.
 http://jquery.org/license
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
 Copyright (c) 2014, Oracle and/or its affiliates.
 All rights reserved.
*/
define(["ojs/ojcore","jquery","ojs/ojcomponentcore"],function(a,f){(function(){var b=!1;f(document).mouseup(function(){b=!1});a.Fa("oj.ojResizable",f.oj.baseComponent,{version:"1.0.0",widgetEventPrefix:"oj",options:{cancel:"input,textarea,button,select,option",distance:1,delay:0,maxHeight:null,maxWidth:null,minHeight:10,minWidth:10,alsoResize:!1,animate:!1,animateDuration:"slow",animateEasing:"swing",containment:!1,ghost:!1,grid:!1,handles:"e,s,se",helper:!1,resize:null,start:null,stop:null},ZP:function(){var a=
this;this.element.bind("mousedown."+this.widgetName,function(b){return a.YP(b)}).bind("click."+this.widgetName,function(b){if(!0===f.data(b.target,a.widgetName+".preventClickEvent"))return f.removeData(b.target,a.widgetName+".preventClickEvent"),b.stopImmediatePropagation(),!1})},XP:function(){this.element.unbind("."+this.widgetName);this.rq&&this.document.unbind("mousemove."+this.widgetName,this.rq).unbind("mouseup."+this.widgetName,this.Yu)},YP:function(a){if(!b){this.Wh&&this.sq(a);this.qq=a;var c=
this,e=1===a.which,g="string"===typeof this.options.cancel&&a.target.nodeName?f(a.target).closest(this.options.cancel).length:!1;if(!e||g||!this.WP(a))return!0;(this.Zn=!this.options.delay)||setTimeout(function(){c.Zn=!0},this.options.delay);if(this.bD(a)&&this.Zn&&(this.Wh=!1!==this.dD(a),!this.Wh))return a.preventDefault(),!0;!0===f.data(a.target,this.widgetName+".preventClickEvent")&&f.removeData(a.target,this.widgetName+".preventClickEvent");this.rq=function(a){return c.$P(a)};this.Yu=function(a){return c.sq(a)};
this.document.bind("mousemove."+this.widgetName,this.rq).bind("mouseup."+this.widgetName,this.Yu);a.preventDefault();return b=!0}},$P:function(a){if(f.ui.xW&&(!document.documentMode||9>document.documentMode)&&!a.button||!a.which)return this.sq(a);if(this.Wh)return this.cD(a),a.preventDefault();this.bD(a)&&this.Zn&&((this.Wh=!1!==this.dD(this.qq,a))?this.cD(a):this.sq(a));return!this.Wh},sq:function(a){this.document.unbind("mousemove."+this.widgetName,this.rq).unbind("mouseup."+this.widgetName,this.Yu);
this.Wh&&(this.Wh=!1,a.target===this.qq.target&&f.data(a.target,this.widgetName+".preventClickEvent",!0),this.aQ(a));return b=!1},bD:function(a){return Math.max(Math.abs(this.qq.pageX-a.pageX),Math.abs(this.qq.pageY-a.pageY))>=this.options.distance},jW:function(){return this.Zn},av:function(a){return parseInt(a,10)||0},nc:function(a){return!isNaN(parseInt(a,10))},gC:function(a,b){if("hidden"===f(a).css("overflow"))return!1;var e=b&&"left"===b?"scrollLeft":"scrollTop",g=!1;if(0<a[e])return!0;a[e]=
1;g=0<a[e];a[e]=0;return g},_ComponentCreate:function(){this._super();var a,b,e,g,h,k=this;a=this.options;this.element.addClass("oj-resizable");f.extend(this,{yr:this.element,yq:[],fg:null});this.handles=a.handles||(f(".oj-resizable-handle",this.element).length?{EW:".oj-resizable-n",rW:".oj-resizable-e",NW:".oj-resizable-s",Xc:".oj-resizable-w",PW:".oj-resizable-se",WW:".oj-resizable-sw",FW:".oj-resizable-ne",IW:".oj-resizable-nw"}:"e,s,se");if(this.handles.constructor===String)for("all"===this.handles&&
(this.handles="n,e,s,w,se,sw,ne,nw"),a=this.handles.split(","),this.handles={},b=0;b<a.length;b++)e=f.trim(a[b]),h="oj-resizable-"+e,g=f("\x3cdiv class\x3d'oj-resizable-handle "+h+"'\x3e\x3c/div\x3e"),this.handles[e]=".oj-resizable-"+e,this.element.append(g);this.gR=function(){for(var a in this.handles)this.handles[a].constructor===String&&(this.handles[a]=this.element.children(this.handles[a]).first().show())};this.gR();this.TO=f(".oj-resizable-handle",this.element);this.TO.mouseover(function(){k.vH||
(this.className&&(g=this.className.match(/oj-resizable-(se|sw|ne|nw|n|e|s|w)/i)),k.axis=g&&g[1]?g[1]:"se")});this.ZP()},_destroy:function(){this.XP();f(this.yr).removeClass("oj-resizable oj-resizable-disabled oj-resizable-resizing").removeData("resizable").removeData("oj-resizable").unbind(".resizable").find(".oj-resizable-handle").remove();return this},WP:function(a){var b,e,g=!1;for(b in this.handles)if(e=f(this.handles[b])[0],e===a.target||f.contains(e,a.target))g=!0;return!this.options.disabled&&
g},dD:function(a){var b,e,g;g=this.options;b=this.element.position();var h=this.element;this.vH=!0;/absolute/.test(h.css("position"))?h.css({position:"absolute",top:h.css("top"),left:h.css("left")}):h.is(".ui-draggable")&&h.css({position:"absolute",top:b.top,left:b.left});this.hR();b=this.av(this.helper.css("left"));e=this.av(this.helper.css("top"));g.containment&&(b+=f(g.containment).scrollLeft()||0,e+=f(g.containment).scrollTop()||0);this.offset=this.helper.offset();this.position={left:b,top:e};
this.size={width:h.width(),height:h.height()};this.Kf={width:h.width(),height:h.height()};this.Bi={left:b,top:e};this.Hr={width:h.outerWidth()-h.width(),height:h.outerHeight()-h.height()};this.xU={left:a.pageX,top:a.pageY};this.lg=this.Kf.width/this.Kf.height||1;g=f(".oj-resizable-"+this.axis).css("cursor");f("body").css("cursor","auto"===g?this.axis+"-resize":g);h.addClass("oj-resizable-resizing");this.ov("start",a);this.FK(a);this.yL(a);return!0},cD:function(a){var b,e=this.helper,g={},h=this.xU;
b=a.pageX-h.left||0;var h=a.pageY-h.top||0,k=this.Ng[this.axis];this.sl={top:this.position.top,left:this.position.left};this.tl={width:this.size.width,height:this.size.height};if(!k)return!1;b=k.apply(this,[a,b,h]);this.yS(a.shiftKey);a.shiftKey&&(b=this.vS(b,a));b=this.oR(b,a);this.sS(b);this.ov("resize",a);this.EK(a,this.ui());this.xL(a,this.ui());this.position.top!==this.sl.top&&(g.top=this.position.top+"px");this.position.left!==this.sl.left&&(g.left=this.position.left+"px");this.size.width!==
this.tl.width&&(g.width=this.size.width+"px");this.size.height!==this.tl.height&&(g.height=this.size.height+"px");e.css(g);!this.fg&&this.yq.length&&this.FQ();f.isEmptyObject(g)||this._trigger("resize",a,this.ui());return!1},aQ:function(a){this.vH=!1;f("body").css("cursor","auto");this.element.removeClass("oj-resizable-resizing");this.ov("stop",a);this.GK(a);this.zL(a);return!1},yS:function(a){var b,e,f,h;h=this.options;h={minWidth:this.nc(h.minWidth)?h.minWidth:0,maxWidth:this.nc(h.maxWidth)?h.maxWidth:
Infinity,minHeight:this.nc(h.minHeight)?h.minHeight:0,maxHeight:this.nc(h.maxHeight)?h.maxHeight:Infinity};a&&(a=h.minHeight*this.lg,e=h.minWidth/this.lg,b=h.maxHeight*this.lg,f=h.maxWidth/this.lg,a>h.minWidth&&(h.minWidth=a),e>h.minHeight&&(h.minHeight=e),b<h.maxWidth&&(h.maxWidth=b),f<h.maxHeight&&(h.maxHeight=f));this.BS=h},sS:function(a){this.offset=this.helper.offset();this.nc(a.left)&&(this.position.left=a.left);this.nc(a.top)&&(this.position.top=a.top);this.nc(a.height)&&(this.size.height=
a.height);this.nc(a.width)&&(this.size.width=a.width)},vS:function(a){var b=this.position,e=this.size,f=this.axis;this.nc(a.height)?a.width=a.height*this.lg:this.nc(a.width)&&(a.height=a.width/this.lg);"sw"===f&&(a.left=b.left+(e.width-a.width),a.top=null);"nw"===f&&(a.top=b.top+(e.height-a.height),a.left=b.left+(e.width-a.width));return a},oR:function(a){var b=this.BS,e=this.axis,f=this.nc(a.width)&&b.maxWidth&&b.maxWidth<a.width,h=this.nc(a.height)&&b.maxHeight&&b.maxHeight<a.height,k=this.nc(a.width)&&
b.minWidth&&b.minWidth>a.width,l=this.nc(a.height)&&b.minHeight&&b.minHeight>a.height,n=this.Bi.left+this.Kf.width,m=this.position.top+this.size.height,q=/sw|nw|w/.test(e),e=/nw|ne|n/.test(e);k&&(a.width=b.minWidth);l&&(a.height=b.minHeight);f&&(a.width=b.maxWidth);h&&(a.height=b.maxHeight);k&&q&&(a.left=n-b.minWidth);f&&q&&(a.left=n-b.maxWidth);l&&e&&(a.top=m-b.minHeight);h&&e&&(a.top=m-b.maxHeight);a.width||a.height||a.left||!a.top?a.width||a.height||a.top||!a.left||(a.left=null):a.top=null;return a},
FQ:function(){if(this.yq.length){var a,b,e,f,h,k=this.helper||this.element;for(a=0;a<this.yq.length;a++){h=this.yq[a];if(!this.Yk)for(this.Yk=[],e=[h.css("borderTopWidth"),h.css("borderRightWidth"),h.css("borderBottomWidth"),h.css("borderLeftWidth")],f=[h.css("paddingTop"),h.css("paddingRight"),h.css("paddingBottom"),h.css("paddingLeft")],b=0;b<e.length;b++)this.Yk[b]=(parseInt(e[b],10)||0)+(parseInt(f[b],10)||0);h.css({height:k.height()-this.Yk[0]-this.Yk[2]||0,width:k.width()-this.Yk[1]-this.Yk[3]||
0})}}},hR:function(){this.element.offset();this.helper=this.element},Ng:{e:function(a,b){return{width:this.Kf.width+b}},w:function(a,b){return{left:this.Bi.left+b,width:this.Kf.width-b}},n:function(a,b,e){return{top:this.Bi.top+e,height:this.Kf.height-e}},s:function(a,b,e){return{height:this.Kf.height+e}},se:function(a,b,e){return f.extend(this.Ng.s.apply(this,arguments),this.Ng.e.apply(this,[a,b,e]))},sw:function(a,b,e){return f.extend(this.Ng.s.apply(this,arguments),this.Ng.w.apply(this,[a,b,e]))},
ne:function(a,b,e){return f.extend(this.Ng.n.apply(this,arguments),this.Ng.e.apply(this,[a,b,e]))},nw:function(a,b,e){return f.extend(this.Ng.n.apply(this,arguments),this.Ng.w.apply(this,[a,b,e]))}},ov:function(a,b){"resize"!==a&&this._trigger(a,b,this.ui())},FK:function(){function a(b){f(b).each(function(){var a=f(this);a.data("oj-resizable-alsoresize",{width:parseInt(a.width(),10),height:parseInt(a.height(),10),left:parseInt(a.css("left"),10),top:parseInt(a.css("top"),10)})})}var b=this.options;
"object"!==typeof b.alsoResize||b.alsoResize.parentNode?a(b.alsoResize):b.alsoResize.length?(b.alsoResize=b.alsoResize[0],a(b.alsoResize)):f.each(b.alsoResize,function(b){a(b)})},EK:function(a,b){function e(a,d){f(a).each(function(){var a=f(this),e=f(this).data("oj-resizable-alsoresize"),g={};f.each(d&&d.length?d:a.parents(b.yr[0]).length?["width","height"]:["width","height","top","left"],function(a,b){var c=(e[b]||0)+(l[b]||0);c&&0<=c&&(g[b]=c||null)});a.css(g)})}var g=this.options,h=this.Kf,k=this.Bi,
l={height:this.size.height-h.height||0,width:this.size.width-h.width||0,top:this.position.top-k.top||0,left:this.position.left-k.left||0};"object"!==typeof g.alsoResize||g.alsoResize.nodeType?e(g.alsoResize,null):f.each(g.alsoResize,function(a,b){e(a,b)})},GK:function(){f(this).removeData("resizable-alsoresize")},yL:function(){var a,b,e,g,h,k=this,l=k.element;e=k.options.containment;if(l=e instanceof f?e.get(0):/parent/.test(e)?l.parent().get(0):e)k.$q=f(l),/document/.test(e)||e===document?(k.ar=
{left:0,top:0},k.OF={left:0,top:0},k.Ci={element:f(document),left:0,top:0,width:f(document).width(),height:f(document).height()||document.body.parentNode.scrollHeight}):(a=f(l),b=[],f(["Top","Right","Left","Bottom"]).each(function(e,f){b[e]=k.av(a.css("padding"+f))}),k.ar=a.offset(),k.OF=a.position(),k.PF={height:a.innerHeight()-b[3],width:a.innerWidth()-b[1]},e=k.ar,g=k.PF.height,h=k.PF.width,h=k.gC(l,"left")?l.scrollWidth:h,g=k.gC(l)?l.scrollHeight:g,k.Ci={element:l,left:e.left,top:e.top,width:h,
height:g})},xL:function(a,b){var e,f,h,k;e=this.options;f=this.ar;k=this.position;var l=a.shiftKey;h={top:0,left:0};var n=this.$q,m=!0;n[0]!==document&&/static/.test(n.css("position"))&&(h=f);k.left<(this.fg?f.left:0)&&(this.size.width+=this.fg?this.position.left-f.left:this.position.left-h.left,l&&(this.size.height=this.size.width/this.lg,m=!1),this.position.left=e.helper?f.left:0);k.top<(this.fg?f.top:0)&&(this.size.height+=this.fg?this.position.top-f.top:this.position.top,l&&(this.size.width=this.size.height*
this.lg,m=!1),this.position.top=this.fg?f.top:0);this.offset.left=this.Ci.left+this.position.left;this.offset.top=this.Ci.top+this.position.top;e=Math.abs((this.fg?this.offset.left-h.left:this.offset.left-f.left)+this.Hr.width);f=Math.abs((this.fg?this.offset.top-h.top:this.offset.top-f.top)+this.Hr.height);h=this.$q.get(0)===this.element.parent().get(0);k=/relative|absolute/.test(this.$q.css("position"));h&&k&&(e-=Math.abs(this.Ci.left));e+this.size.width>=this.Ci.width&&(this.size.width=this.Ci.width-
e,l&&(this.size.height=this.size.width/this.lg,m=!1));f+this.size.height>=this.Ci.height&&(this.size.height=this.Ci.height-f,l&&(this.size.width=this.size.height*this.lg,m=!1));m||(this.position.left=b.sl.left,this.position.top=b.sl.top,this.size.width=b.tl.width,this.size.height=b.tl.height)},zL:function(){var a=this.options,b=this.ar,e=this.OF,g=this.$q,h=f(this.helper),k=h.offset(),l=h.outerWidth()-this.Hr.width,h=h.outerHeight()-this.Hr.height;this.fg&&!a.animate&&/relative/.test(g.css("position"))&&
f(this).css({left:k.left-e.left-b.left,width:l,height:h});this.fg&&!a.animate&&/static/.test(g.css("position"))&&f(this).css({left:k.left-e.left-b.left,width:l,height:h})},ui:function(){return{yr:this.yr,element:this.element,helper:this.helper,position:this.position,size:this.size,Kf:this.Kf,Bi:this.Bi,tl:this.tl,sl:this.sl}}})})();(function(){var b={},d={};a.Fa("oj.ojDialog",f.oj.baseComponent,{version:"1.0.0",widgetEventPrefix:"oj",options:{cancelBehavior:"icon",dragAffordance:"title-bar",initialVisibility:"show",
modality:"modal",position:{my:"center",at:"center",of:window,collision:"fit",bX:function(a){var b=f(this).css(a).offset().top;0>b&&f(this).css("top",a.top-b)}},resizeBehavior:"resizable",role:"dialog",title:null,beforeClose:null,beforeOpen:null,close:null,focus:null,open:null,resize:null,resizeStart:null,resizeStop:null},_ComponentCreate:function(){this._super();this.wU={display:this.element[0].style.display,width:this.element[0].style.width,height:this.element[0].style.height};this.Bi={parent:this.element.parent(),
index:this.element.parent().children().index(this.element)};this.hx=this.element.attr("title");this.options.title=this.options.title||this.hx;this.aM();this.element.show().removeAttr("title").addClass("oj-dialog-content oj-dialog-default-content").appendTo(this.Pa);this.Nr=!1;if(this.element.find(".oj-dialog").length){var a=this;this.element.find(".oj-dialog-header").each(function(b,d){var h=f(d);if(!h.closest(".oj-dialog-body").length)return a.qn=h,a.Nr=!0,!1})}else this.qn=this.element.find(".oj-dialog-header"),
this.qn.length&&(this.Nr=!0);this.Nr?(this.YL(this.qn),this.qn.prependTo(this.Pa),"icon"===this.options.cancelBehavior&&this.oA(this.qn)):this.$L();this.vh=this.element.find(".oj-dialog-footer");this.XL(this.vh);this.vh&&(this.vh.addClass("oj-helper-clearfix"),this.vh.appendTo(this.Pa));"title-bar"===this.options.dragAffordance&&f.fn.draggable&&this.QC();this._isOpen=!1;this._super()},_init:function(){"show"===this.options.initialVisibility&&this.open()},xz:function(){return this.document.find("body").eq(0)},
_destroy:function(){this.KA();this.vh&&(this.vh.removeClass("oj-helper-clearfix"),f("#"+this.pD).replaceWith(this.vh));this.po&&(this.po.remove(),this.po=null);this.Ex=null;if(this.Nr){var a=this.Pa.find(".oj-dialog-header");a&&f("#"+this.qD).replaceWith(a)}this.element.removeUniqueId().removeClass("oj-dialog-content oj-dialog-default-content").css(this.wU).detach();this.Pa.stop(!0,!0).remove();this.hx&&this.element.attr("title",this.hx);f("#"+this.hv).replaceWith(this.element);this.pM()},refresh:function(){this._super()},
widget:function(){return this.Pa},disable:f.noop,enable:f.noop,close:function(a){var b=this;this._isOpen&&!1!==this._trigger("beforeClose",a)&&(this._isOpen=!1,this.KA(),this.opener.filter(":focusable").focus().length||f(this.document[0].activeElement).blur(),this._hide(this.Pa,null,function(){b._trigger("close",a)}),f("#"+this.hv).replaceWith(f("#"+this.ew)))},isOpen:function(){return this._isOpen},Zu:function(a,b){var d=!!this.Pa.nextAll(":visible").insertBefore(this.Pa).length;d&&!b&&this._trigger("focus",
a);return d},open:function(a){if(!1!==this._trigger("beforeOpen",a)){var b=this;this._isOpen?this.Zu()&&this.um():(this._isOpen=!0,this.opener=f(this.document[0].activeElement),this.VE(),this.VQ(),this.JL(),this.jv(),this.Zu(null,!0),this._show(this.Pa,null,function(){b.um();b._trigger("focus")}),this._trigger("open"))}},um:function(){var a=this.element.find("[autofocus]");a.length||(a=this.element.find(":tabbable"));a.length||this.vh&&(a=this.vh.filter(":tabbable"));a.length||this.Ex&&(a=this.Ex.filter(":tabbable"));
a.length||(a=this.Pa);a.eq(0).focus()},_keepFocus:function(a){function b(){var a=this.document[0].activeElement;this.Pa[0]===a||f.contains(this.Pa[0],a)||this.um()}a.preventDefault();b.call(this);this._delay(b)},Oj:function(){this._super();var a=f("\x3cdiv\x3e\x3c/div\x3e");this.CA=this.Pa.css("min-width");"none"!=this.CA?(a.width(this.CA),this.Ui=a.width(),this.nc(this.Ui)&&(this.Ui=Math.round(this.Ui))):this.Ui="none";this.AA=this.Pa.css("max-width");"none"!=this.AA?(a.width(this.AA),this.im=a.width(),
this.nc(this.im)&&(this.im=Math.round(this.im))):this.im="none";this.BA=this.Pa.css("min-height");"none"!=this.BA?(a.height(this.BA),this.Fh=a.height(),this.nc(this.Fh)&&(this.Fh=Math.round(this.Fh))):this.Fh="none";this.zA=this.Pa.css("max-height");"none"!=this.zA?(a.height(this.zA),this.Ti=a.height(),this.nc(this.Ti)&&(this.Ti=Math.round(this.Ti))):this.Ti="none";this.yA=this.Pa.css("height");"auto"!=this.yA?(a.height(this.yA),this.bg=a.height(),this.nc(this.bg)&&(this.bg=Math.ceil(this.bg))):this.bg=
"auto";this.DA=this.Pa.css("width");"auto"!=this.DA?(a.height(this.DA),this.Gh=a.height(),this.nc(this.Gh)&&(this.Gh=Math.ceil(this.Gh))):this.Gh="auto";a.remove();"resizable"===this.options.resizeBehavior&&f.fn.resizable&&this.SC()},nc:function(a){return!isNaN(parseInt(a,10))},aM:function(){this.element.uniqueId();this.Bp=this.element.attr("id");this.ew="ojDialogWrapper-"+this.Bp;this.Pa=f("\x3cdiv\x3e").addClass("oj-dialog oj-helper-reset-inheritable oj-component oj-dialog-front ").hide().attr({tabIndex:-1,
role:this.options.role,id:this.ew});this.Pa.insertBefore(this.element);this._on(this.Pa,{keydown:function(a){if("none"!=this.options.cancelBehavior&&!a.isDefaultPrevented()&&a.keyCode&&a.keyCode===f.ui.keyCode.ESCAPE)a.preventDefault(),this.close(a);else if(a.keyCode===f.ui.keyCode.TAB){var b=this.Pa.find(":tabbable"),d=b.filter(":first"),b=b.filter(":last");a.target!==b[0]&&a.target!==this.Pa[0]||a.shiftKey?a.target!==d[0]&&a.target!==this.Pa[0]||!a.shiftKey||(b.focus(1),a.preventDefault()):(d.focus(1),
a.preventDefault())}},mousedown:function(a){this.Zu(a)&&this.um()}});this.element.find("[aria-describedby]").length||this.Pa.attr({"aria-describedby":this.element.uniqueId().attr("id")})},oA:function(a){this.po=f("\x3cdiv\x3e").addClass("oj-dialog-header-close-wrapper").attr("tabindex","1").attr("aria-label","close").attr("role","button").appendTo(a);this.Ex=f("\x3cspan\x3e").addClass("oj-component-icon oj-clickable-icon oj-dialog-close-icon").attr("alt","close icon").prependTo(this.po);this._on(this.po,
{click:function(a){a.preventDefault();this.close(a)},mousedown:function(a){f(a.currentTarget).addClass("oj-active")},mouseup:function(a){f(a.currentTarget).removeClass("oj-active")},mouseenter:function(a){f(a.currentTarget).addClass("oj-hover")},mouseleave:function(a){a=a.currentTarget;f(a).removeClass("oj-hover");f(a).removeClass("oj-active")},keydown:function(a){a.keyCode&&a.keyCode===f.ui.keyCode.SPACE&&(a.preventDefault(),this.close(a))}})},$L:function(){var a;this.Lr=f("\x3cdiv\x3e").addClass("oj-dialog-header oj-helper-clearfix").prependTo(this.Pa);
this._on(this.Lr,{mousedown:function(a){f(a.target).closest(".oj-dialog-close-icon")||this.Pa.focus()}});"icon"===this.options.cancelBehavior&&this.oA(this.Lr);a=f("\x3cspan\x3e").uniqueId().addClass("oj-dialog-title").prependTo(this.Lr);this.iF(a);this.Pa.attr({"aria-labelledby":a.attr("id")})},iF:function(a){this.options.title||a.html("\x26#160;");a.text(this.options.title)},QC:function(){function a(b){return{position:b.position,offset:b.offset}}var b=this,d=this.options;this.Pa.draggable({cancel:".oj-dialog-content, .oj-dialog-header-close",
handle:".oj-dialog-header",containment:"document",start:function(d,g){f(this).addClass("oj-dialog-dragging");b.Iz();b._trigger("dragStart",d,a(g))},drag:function(d,f){b._trigger("drag",d,a(f))},stop:function(h,k){d.position=[k.position.left-b.document.scrollLeft(),k.position.top-b.document.scrollTop()];f(this).removeClass("oj-dialog-dragging");b.oF();b._trigger("dragStop",h,a(k))}})},SC:function(){function a(b){return{originalPosition:b.Bi,originalSize:b.Kf,position:b.position,size:b.size}}var b=
this,d=this.Pa.css("position");this.Ok=this.Pa.ojResizable.bind(this.Pa);this.Ok({cancel:".oj-dialog-content",containment:"document",alsoResize:this.element,minHeight:this.aD(),maxHeight:this.Ti,minWidth:this.Ui,maxWidth:this.im,handles:"n,e,s,w,se,sw,ne,nw",start:function(d,g){f(this).addClass("oj-dialog-resizing");b.Iz();b._trigger("resizeStart",d,a(g))},resize:function(d,f){b._trigger("resize",d,a(f))},stop:function(d,g){this.bg=f(this).height();this.Gh=f(this).width();f(this).removeClass("oj-dialog-resizing");
b.oF();b._trigger("resizeStop",d,a(g))}}).css("position",d)},aD:function(){return"auto"===this.bg?this.Fh:this.Fh<this.bg?this.Fh:this.bg},jv:function(){var b=this.Pa.is(":visible");b||this.Pa.show();var d=this.options.position,f="rtl"===this.uc();this.Pa.position(a.Eg.co(d,f));b||this.Pa.hide()},_setOptions:function(a,e){var g=this,h=!1,k={};f.each(a,function(a,c){g._setOption(a,c,e);a in b&&(h=!0);a in d&&(k[a]=c)});h&&(this.VE(),this.jv());this.Pa.is(":data(oj-resizable)")&&this.Ok("option",k)},
_setOption:function(a,b,d){var f;f=this.Pa;"disabled"!==a&&(this._super(a,b,d),"dragAffordance"===a&&((d=f.is(":data(oj-draggable)"))&&!b&&f.draggable("destroy"),!d&&b&&this.QC()),"position"===a&&this.jv(),"resizeBehavior"===a&&(f=!1,this.Ok&&(f=!0),f&&"resizable"!=b&&(this.Ok("destroy"),this.Ok=null),f||"resizable"!==b||this.SC()),"title"===a&&this.iF(this.Lr.find(".oj-dialog-title")))},VE:function(){var a,b,d;this.element.show().css({width:"auto",minHeight:0,maxHeight:"none",height:0});this.Ui>
this.Gh&&(this.Gh=this.Ui);a=this.Pa.css({height:"auto",width:this.Gh}).outerHeight();b=Math.max(0,this.Fh-a);d="number"===typeof this.Ti?Math.max(0,this.Ti-a):"none";"auto"===this.bg?this.element.css({minHeight:b,maxHeight:d,height:"auto"}):this.element.height(Math.max(0,this.bg+2-a));this.Pa.is(":data(oj-resizable)")&&this.Ok("option","minHeight",this.aD())},Iz:function(){this.Pw=this.document.find("iframe").map(function(){var a=f(this),b=a.offset();return f("\x3cdiv\x3e").css({position:"absolute",
width:a.outerWidth(),height:a.outerHeight()}).appendTo(a.parent()).offset(b)[0]})},oF:function(){this.Pw&&(this.Pw.remove(),delete this.Pw)},DK:function(a){return f(a.target).closest(".oj-dialog").length?!0:!!f(a.target).closest(".oj-datepicker").length},VQ:function(){this.hv="ojDialogPlaceHolder-"+this.Bp;this.oQ=f("\x3cdiv\x3e").hide().attr({id:this.hv});this.oQ.insertBefore(f("#"+this.ew));this.Pa.appendTo(this.xz())},XL:function(a){this.pD="ojDialogPlaceHolderFooter-"+this.Bp;this.pQ=f("\x3cdiv\x3e").hide().attr({id:this.pD});
this.pQ.insertBefore(a)},YL:function(a){this.qD="ojDialogPlaceHolderHeader-"+this.Bp;this.qQ=f("\x3cdiv\x3e").hide().attr({id:this.qD});this.qQ.insertBefore(a)},pM:function(){this.nH&&(this.nH.remove(),this.nH=null)},JL:function(){if("modeless"!==this.options.modality){var a=this,b=this.widgetFullName;f.ui.dialog.overlayInstances||this._delay(function(){f.ui.dialog.overlayInstances&&this.document.bind("focusin.dialog",function(d){a.DK(d)||(d.preventDefault(),f(".oj-dialog:visible:last .oj-dialog-content").data(b).um())})});
this.eo=f("\x3cdiv\x3e").addClass("oj-dialog-overlay oj-dialog-front");this.eo.appendTo(this.xz());this._on(this.eo,{mousedown:"_keepFocus"});f.ui.dialog.overlayInstances++}},KA:function(){"modeless"!==this.options.modality&&this.eo&&(f.ui.dialog.overlayInstances--,f.ui.dialog.overlayInstances||this.document.unbind("focusin.dialog"),this.eo.remove(),this.eo=null)},getNodeBySubId:function(a){if(null==a)return this.element?this.element[0]:null;a=a.subId;switch(a){case "oj-dialog":case "oj-dialog-header":case "oj-dialog-body":case "oj-dialog-footer":case "oj-dialog-content":case "oj-dialog-header-close":case "oj-resizable-n":case "oj-resizable-e":case "oj-resizable-s":case "oj-resizable-w":case "oj-resizable-se":case "oj-resizable-sw":case "oj-resizable-ne":case "oj-resizable-nw":return a=
"."+a,this.widget().find(a)[0]}return null}});f.ui.dialog.overlayInstances=0})()});
//# sourceMappingURL=oj-modular.map