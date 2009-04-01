YUI.add("widget-stack",function(E){var O=E.Lang,U=E.UA,d=E.Node,F=E.Widget,c="zIndex",Q="shim",a="visible",f="boundingBox",X="renderUI",G="bindUI",T="syncUI",R="offsetWidth",D="offsetHeight",N="parentNode",A="firstChild",H="width",W="height",M="px",P="shimdeferred",g="shimresize",Z="visibleChange",C="widthChange",K="heightChange",b="shimChange",B="zIndexChange",I="contentUpdate",S="stacked",e="show-scrollbars",J="hide-scrollbars";function V(L){this._stackNode=this.get(f);this._stackHandles={};E.after(this._renderUIStack,this,X);E.after(this._syncUIStack,this,T);E.after(this._bindUIStack,this,G);}V.ATTRS={shim:{value:(U.ie==6)},zIndex:{value:0,setter:function(L){return this._setZIndex(L);}}};V.HTML_PARSER={zIndex:function(L){return L.getStyle(c);}};V.SHIM_CLASS_NAME=F.getClassName(Q);V.STACKED_CLASS_NAME=F.getClassName(S);V.SHIM_TEMPLATE='<iframe class="'+V.SHIM_CLASS_NAME+'" frameborder="0" title="Widget Stacking Shim" src="javascript:false" tabindex="-1" role="presentation"></iframe>';V.prototype={_syncUIStack:function(){this._uiSetShim(this.get(Q));this._uiSetZIndex(this.get(c));},_bindUIStack:function(){this.after(b,this._afterShimChange);this.after(B,this._afterZIndexChange);},_renderUIStack:function(){this._stackNode.addClass(V.STACKED_CLASS_NAME);var L=navigator.userAgent.toLowerCase().indexOf("macintosh")!=-1;if(L&&U.gecko&&U.gecko<=1.9){this._fixMacGeckoScrollbars();}},_setZIndex:function(L){if(O.isString(L)){L=parseInt(L,10);}if(!O.isNumber(L)){L=0;}return L;},_afterShimChange:function(L){this._uiSetShim(L.newVal);},_afterZIndexChange:function(L){this._uiSetZIndex(L.newVal);},_uiSetZIndex:function(L){this._stackNode.setStyle(c,L);},_uiSetShim:function(L){if(L){if(this.get(a)){this._renderShim();}else{this._renderShimDeferred();}}else{this._destroyShim();}},_renderShimDeferred:function(){this._stackHandles[P]=this._stackHandles[P]||[];var Y=this._stackHandles[P],L=function(h){if(h.newVal){this._renderShim();}};Y.push(this.on(Z,L));},_addShimResizeHandlers:function(){this._stackHandles[g]=this._stackHandles[g]||[];var Y=this.sizeShim,L=this._stackHandles[g];this.sizeShim();L.push(this.after(Z,Y));L.push(this.after(C,Y));L.push(this.after(K,Y));L.push(this.after(I,Y));},_detachStackHandles:function(L){var Y=this._stackHandles[L],h;if(Y&&Y.length>0){while((h=Y.pop())){h.detach();}}},_renderShim:function(){var L=this._shimNode,Y=this._stackNode;if(!L){L=this._shimNode=this._getShimTemplate();Y.insertBefore(L,Y.get(A));if(U.ie==6){this._addShimResizeHandlers();}this._detachStackHandles(P);}},_destroyShim:function(){if(this._shimNode){this._shimNode.get(N).removeChild(this._shimNode);this._shimNode=null;this._detachStackHandles(P);this._detachStackHandles(g);}},_fixMacGeckoScrollbars:function(){this._toggleMacGeckoScrollbars();this.after(Z,this._toggleMacGeckoScrollbars);},_toggleMacGeckoScrollbars:function(){if(this.get(a)){this._showMacGeckoScrollbars();}else{this._hideMacGeckoScrollbars();}},_hideMacGeckoScrollbars:function(){this._stackNode.replaceClass(F.getClassName(e),F.getClassName(J));},_showMacGeckoScrollbars:function(){this._stackNode.replaceClass(F.getClassName(J),F.getClassName(e));},sizeShim:function(){var Y=this._shimNode,L=this._stackNode;if(Y&&U.ie===6&&this.get(a)){Y.setStyle(H,L.get(R)+M);Y.setStyle(W,L.get(D)+M);}},_getShimTemplate:function(){if(!V._SHIM_TEMPLATE){V._SHIM_TEMPLATE=d.create(V.SHIM_TEMPLATE);}return V._SHIM_TEMPLATE.cloneNode(true);}};E.WidgetStack=V;},"@VERSION@",{requires:["widget"]});