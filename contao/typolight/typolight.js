/* TYPOlight back end JavaScript by Leo Feyer (LGPL license) */
var AjaxRequest={toggleNavigation:function(A,D){A.blur();var B=$(D);var C=$(A).getFirst();if(B){if(B.getStyle("display")!="inline"){B.setStyle("display","inline");C.src=C.src.replace("modPlus.gif","modMinus.gif");new Ajax(window.location.href,{data:"isAjax=1&action=toggleNavigation&id="+D+"&state=1"}).request()}else{B.setStyle("display","none");C.src=C.src.replace("modMinus.gif","modPlus.gif");new Ajax(window.location.href,{data:"isAjax=1&action=toggleNavigation&id="+D+"&state=0"}).request()
}return false}new Ajax(window.location.href,{data:"isAjax=1&action=loadNavigation&id="+D+"&state=1",onStateChange:AjaxRequest.displayBox("Loading data..."),onComplete:function(E,F){B=new Element("li");B.addClass("tl_parent");B.setProperty("id",D);B.setHTML(E);B.setStyle("display","inline");B.injectAfter($(A).getParent());C.src=C.src.replace("modPlus.gif","modMinus.gif");AjaxRequest.hideBox()}}).request();
return false},toggleStructure:function(A,F,E,D){A.blur();var B=$(F);var C=$(A).getFirst();if(B){if(B.getStyle("display")!="inline"){B.setStyle("display","inline");C.src=C.src.replace("folPlus.gif","folMinus.gif");new Ajax(window.location.href,{data:"isAjax=1&action=toggleStructure&id="+F+"&state=1"}).request()}else{B.setStyle("display","none");C.src=C.src.replace("folMinus.gif","folPlus.gif");new Ajax(window.location.href,{data:"isAjax=1&action=toggleStructure&id="+F+"&state=0"}).request()
}return false}new Ajax(window.location.href,{data:"isAjax=1&action=loadStructure&id="+F+"&level="+E+"&state=1",onStateChange:AjaxRequest.displayBox("Loading data..."),onComplete:function(H,I){var J=new Element("ul");J.addClass("level_"+E);J.setHTML(H);B=new Element("li");B.addClass("parent");B.setProperty("id",F);B.setStyle("display","inline");J.injectInside(B);if(D==5){B.injectAfter($(A).getParent().getParent())
}else{var K=false;var G=$(A).getParent().getParent();while($type(G)=="element"&&G.getNext()){G=G.getNext();if(G.className=="tl_folder"){K=true;break}}K?B.injectBefore(G):B.injectAfter(G)}C.src=C.src.replace("folPlus.gif","folMinus.gif");AjaxRequest.hideBox()}}).request();return false},toggleFileManager:function(B,G,D,F){B.blur();var C=$(G);var E=$(B).getFirst();var A=$(B).getNext();if(C){if(C.getStyle("display")!="inline"){C.setStyle("display","inline");
E.src=E.src.replace("folPlus.gif","folMinus.gif");A.src=A.src.replace("folderC","folderO");new Ajax(window.location.href,{data:"isAjax=1&action=toggleFileManager&id="+G+"&state=1"}).request()}else{C.setStyle("display","none");E.src=E.src.replace("folMinus.gif","folPlus.gif");A.src=A.src.replace("folderO","folderC");new Ajax(window.location.href,{data:"isAjax=1&action=toggleFileManager&id="+G+"&state=0"}).request()
}return false}new Ajax(window.location.href,{data:"isAjax=1&action=loadFileManager&id="+G+"&level="+F+"&folder="+D+"&state=1",onStateChange:AjaxRequest.displayBox("Loading data..."),onComplete:function(H,I){var J=new Element("ul");J.addClass("level_"+F);J.setHTML(H);C=new Element("li");C.addClass("parent");C.setProperty("id",G);C.setStyle("display","inline");J.injectInside(C);C.injectAfter($(B).getParent().getParent());
E.src=E.src.replace("folPlus.gif","folMinus.gif");A.src=A.src.replace("folderC.gif","folderO.gif");AjaxRequest.hideBox()}}).request();return false},togglePagetree:function(B,G,E,A,F){B.blur();var C=$(G);var D=$(B).getFirst();if(C){if(C.getStyle("display")!="inline"){C.setStyle("display","inline");D.src=D.src.replace("folPlus.gif","folMinus.gif");new Ajax(window.location.href,{data:"isAjax=1&action=togglePagetree&id="+G+"&state=1"}).request()
}else{C.setStyle("display","none");D.src=D.src.replace("folMinus.gif","folPlus.gif");new Ajax(window.location.href,{data:"isAjax=1&action=togglePagetree&id="+G+"&state=0"}).request()}return false}new Ajax(window.location.href,{data:"isAjax=1&action=loadPagetree&id="+G+"&level="+F+"&field="+E+"&name="+A+"&state=1",onStateChange:AjaxRequest.displayBox("Loading data..."),onComplete:function(H,I){var J=new Element("ul");
J.addClass("level_"+F);J.setHTML(H);C=new Element("li");C.addClass("parent");C.setProperty("id",G);C.setStyle("display","inline");J.injectInside(C);C.injectAfter($(B).getParent().getParent());D.src=D.src.replace("folPlus.gif","folMinus.gif");AjaxRequest.hideBox()}}).request();return false},toggleFiletree:function(B,H,D,F,A,G){B.blur();var C=$(H);var E=$(B).getFirst();if(C){if(C.getStyle("display")!="inline"){C.setStyle("display","inline");
E.src=E.src.replace("folPlus.gif","folMinus.gif");new Ajax(window.location.href,{data:"isAjax=1&action=toggleFiletree&id="+H+"&state=1"}).request()}else{C.setStyle("display","none");E.src=E.src.replace("folMinus.gif","folPlus.gif");new Ajax(window.location.href,{data:"isAjax=1&action=toggleFiletree&id="+H+"&state=0"}).request()}return false}new Ajax(window.location.href,{data:"isAjax=1&action=loadFiletree&id="+H+"&level="+G+"&folder="+D+"&field="+F+"&name="+A+"&state=1",onStateChange:AjaxRequest.displayBox("Loading data..."),onComplete:function(I,J){var K=new Element("ul");
K.addClass("level_"+G);K.setHTML(I);C=new Element("li");C.addClass("parent");C.setProperty("id",H);C.setStyle("display","inline");K.injectInside(C);C.injectAfter($(B).getParent().getParent());E.src=E.src.replace("folPlus.gif","folMinus.gif");AjaxRequest.hideBox()}}).request();return false},toggleSubpalette:function(A,D,C){A.blur();var B=$(D);if(B){if(!A.value){A.value=1;A.checked="checked";B.setStyle("display","block");
new Ajax(window.location.href,{data:"isAjax=1&action=toggleSubpalette&id="+D+"&field="+C+"&state=1"}).request()}else{A.value="";A.checked="";B.setStyle("display","none");new Ajax(window.location.href,{data:"isAjax=1&action=toggleSubpalette&id="+D+"&field="+C+"&state=0"}).request()}return }new Ajax(window.location.href,{data:"isAjax=1&action=toggleSubpalette&id="+D+"&field="+C+"&load=1&state=1",onStateChange:AjaxRequest.displayBox("Loading data..."),onComplete:function(E,F){B=new Element("div");
B.setProperty("id",D);B.setHTML(E);var G=false;var H=$(A).getParent();while($type(H)=="element"&&H.getNext()){H=H.getNext();if(H.nodeName.toLowerCase()=="h3"||H.nodeName.toLowerCase()=="div"){G=true;break}}G?B.injectBefore(H):B.injectAfter(H);A.value=1;A.checked="checked";B.setStyle("display","block");AjaxRequest.hideBox();Backend.hideTreeBody()}}).request()},toggleVisibility:function(A,C){A.blur();
var B=$(A).getFirst();if(B.src.indexOf("invisible")!=-1){B.src=B.src.replace("invisible.gif","visible.gif");new Ajax(window.location.href,{data:"isAjax=1&action=toggleVisibility&id="+C+"&state=1"}).request()}else{B.src=B.src.replace("visible.gif","invisible.gif");new Ajax(window.location.href,{data:"isAjax=1&action=toggleVisibility&id="+C+"&state=0"}).request()}return false},liveUpdate:function(B,C){var A=$(C);
if(!A){return }new Ajax(window.location.href,{data:"isAjax=1&action=liveUpdate&id="+A.value,onStateChange:$("lu_message").innerHTML='<p class="tl_info">Connecting to live update server</p>',onComplete:function(D,E){if(D){$("lu_message").innerHTML=D}else{$(B).submit()}}}).request()},toggleCheckboxGroup:function(A,D){A.blur();var B=$(D);var C=$(A).getFirst();if(B){if(B.getStyle("display")!="block"){B.setStyle("display","block");
C.src=C.src.replace("folPlus.gif","folMinus.gif");new Ajax(window.location.href,{data:"isAjax=1&action=toggleCheckboxGroup&id="+D+"&state=1"}).request()}else{B.setStyle("display","none");C.src=C.src.replace("folMinus.gif","folPlus.gif");new Ajax(window.location.href,{data:"isAjax=1&action=toggleCheckboxGroup&id="+D+"&state=0"}).request()}return true}return false},displayBox:function(E){var D=$("tl_ajaxBox");
var B=$("tl_ajaxOverlay");if(!B){B=new Element("div").setProperty("id","tl_ajaxOverlay").injectInside($(document.body))}if(!D){D=new Element("div").setProperty("id","tl_ajaxBox").injectInside($(document.body))}var A=window.getScrollTop();if(window.ie6){var F=$$("select");for(var C=0;C<F.length;C++){F[C].setStyle("visibility","hidden")}}B.setStyle("display","block");B.setStyle("top",A+"px");D.setHTML(E);
D.setStyle("display","block");D.setStyle("top",(A+100)+"px")},hideBox:function(){var C=$("tl_ajaxBox");var A=$("tl_ajaxOverlay");if(A){A.setStyle("display","none")}if(C){C.setStyle("display","none");if(window.ie6){var D=$$("select");for(var B=0;B<D.length;B++){D[B].setStyle("visibility","visible")}}}}};var Backend={currentId:null,xMousePosition:0,yMousePosition:0,popupWindow:null,checkPopup:function(){setTimeout("Backend.doCheckPopup()",10)
},doCheckPopup:function(){if(Backend.popupWindow&&Backend.popupWindow.closed){location.reload()}},getMousePosition:function(A){Backend.xMousePosition=A.client.x;Backend.yMousePosition=A.client.y},openWindow:function(C,B,A){C.blur();B=window.ie?(B+40):(B+17);A=window.ie?(A+30):(A+17);Backend.popupWindow=window.open(C.href,"","width="+B+",height="+A+",modal=yes,left=100,top=50,location=no,menubar=no,resizable=yes,scrollbars=yes,status=no,toolbar=no")
},getScrollOffset:function(){document.cookie="BE_PAGE_OFFSET="+window.getScrollTop()+"; path=/"},autoSubmit:function(B){Backend.getScrollOffset();var A=$(B);var C=new Element("input");C.setProperty("type","hidden");C.setProperty("name","SUBMIT_TYPE");C.setProperty("value","auto");C.injectInside(A);A.submit()},vScrollTo:function(A){window.addEvent("domready",function(){window.scrollTo(null,parseInt(A))
})},showTreeBody:function(B,C){B.blur();var A=$(C);A.setStyle("display",($(B).checked?"inline":"none"))},hideTreeBody:function(){var A=$$("ul");for(var B=0;B<A.length;B++){if(A[B].className.indexOf("mandatory")!=-1){$("ctrl_"+A[B].id).checked="checked";continue}if(A[B].className.indexOf("tl_listing")!=-1){var C=A[B].getFirst().getNext();if(C&&C.className=="parent"){C.setStyle("display","none")}}}},limitPreviewHeight:function(){var B=null;
var D=null;var C="";var A=0;$$("div.limit_height").each(function(E){B=E.getCoordinates();if(A==0){A=E.className.replace(/[^0-9]*/,"").toInt()}if(!$chk(A)){return }E.setStyle("height",A);D=new Element("img").addClass("limit_toggler");if(B.height<A){D.src="system/themes/default/images/expand_.gif";D.injectAfter(E);return }D.setStyle("cursor","pointer");D.src="system/themes/default/images/expand.gif";
D.addEvent("click",function(){C=this.getPrevious().getStyle("height").toInt();this.getPrevious().setStyle("height",((C>A)?A:""));this.src=(this.src.indexOf("expand.gif")!=-1)?"system/themes/default/images/collapse.gif":"system/themes/default/images/expand.gif"});D.injectAfter(E)})},toggleCheckboxes:function(C,E){var B=$$("input");var A=C.checked?"checked":"";for(var D=0;D<B.length;D++){if(B[D].type.toLowerCase()!="checkbox"){continue
}if(E&&B[D].id.substr(0,E.length)!=E){continue}B[D].checked=A}},toggleCheckboxGroup:function(B,C){var A=$(B).checked?"checked":"";$$("#"+C+" .tl_checkbox").each(function(D){D.checked=A});Backend.getScrollOffset()},toggleWrap:function(E){var B=$(E);var A=(B.getProperty("wrap")=="off")?"soft":"off";B.setProperty("wrap",A);if(!window.ie){var C=B.value;var D=B.clone();D.setProperty("wrap",A);B.replaceWith(D);
D.value=C}},blink:function(){var A=null;$$("img.blink").each(function(B){if(!$defined(A)){A=B.hasClass("opacity")}A?B.removeClass("opacity"):B.addClass("opacity")})},pickColor:function(C){var B=275;var A=204;Backend.currentId=C;Backend.cpColor=$(C).value;Backend.getScrollOffset();window.open($$("base")[0].href+"typolight/color.php?color="+Backend.cpColor,"","width="+B+",height="+A+",modal=yes,left="+(Backend.xMousePosition?(Backend.xMousePosition-B-30):200)+",top="+(Backend.yMousePosition?(Backend.yMousePosition-(A/2)+80):100)+",location=no,menubar=no,resizable=yes,scrollbars=no,status=no,toolbar=no")
},pickPage:function(C){var B=320;var A=112;Backend.currentId=C;Backend.ppHref=$(C).value;Backend.getScrollOffset();window.open($$("base")[0].href+"typolight/page.php?href="+Backend.ppHref,"","width="+B+",height="+A+",modal=yes,left="+(Backend.xMousePosition?(Backend.xMousePosition-B-30):200)+",top="+(Backend.yMousePosition?(Backend.yMousePosition-(A/2)+80):100)+",location=no,menubar=no,resizable=yes,scrollbars=no,status=no,toolbar=no")
},listWizard:function(C,E,G){var D=$(G);var B=$(C).getParent();var A=D.getChildren();Backend.getScrollOffset();switch(E){case"copy":var F=B.clone(true).injectBefore(B);F.getFirst().value=B.getFirst().value;break;case"up":B.getPrevious()?B.injectBefore(B.getPrevious()):B.injectInside(D);break;case"down":B.getNext()?B.injectAfter(B.getNext()):B.injectBefore(D.getFirst());break;case"delete":(A.length>1)?B.remove():null;
break}},tableWizard:function(C,D,B){var P=$(B);var G=P.getFirst();var Q=G.getChildren();var M=$(C).getParent();var A=M.getParent();var O=A.getChildren();var J=0;for(var F=0;F<O.length;F++){if(O[F]==M){break}J++}Backend.getScrollOffset();switch(D){case"rcopy":var N=new Element("tr");var L=A.getChildren();for(var F=0;F<L.length;F++){var I=L[F].clone(true).injectInside(N);I.getFirst().value=L[F].getFirst().value
}N.injectAfter(A);break;case"rup":A.getPrevious().getPrevious()?A.injectBefore(A.getPrevious()):A.injectInside(G);break;case"rdown":A.getNext()?A.injectAfter(A.getNext()):A.injectBefore(G.getFirst().getNext());break;case"rdelete":(Q.length>2)?A.remove():null;break;case"ccopy":for(var F=0;F<Q.length;F++){var K=Q[F].getChildren()[J];var I=K.clone(true).injectAfter(K);I.getFirst().value=K.getFirst().value
}break;case"cmovel":if(J>0){for(var F=0;F<Q.length;F++){var K=Q[F].getChildren()[J];K.injectBefore(K.getPrevious())}}else{for(var F=0;F<Q.length;F++){var K=Q[F].getChildren()[J];K.injectBefore(Q[F].getLast())}}break;case"cmover":if(J<(O.length-2)){for(var F=0;F<Q.length;F++){var K=Q[F].getChildren()[J];K.injectAfter(K.getNext())}}else{for(var F=0;F<Q.length;F++){var K=Q[F].getChildren()[J];K.injectBefore(Q[F].getFirst())
}}break;case"cdelete":if(O.length>2){for(var F=0;F<Q.length;F++){Q[F].getChildren()[J].remove()}}break}Q=G.getChildren();for(var F=0;F<Q.length;F++){var L=Q[F].getChildren();for(var E=0;E<L.length;E++){var H=L[E].getFirst();if(H&&H.type=="textarea"){H.name=H.name.replace(/\[[0-9]+\][[0-9]+\]/ig,"["+(F-1)+"]["+E+"]")}}}},moduleWizard:function(B,C,A){var L=$(A);var F=L.getFirst().getNext();var K=$(B).getParent().getParent();
var M=F.getChildren();Backend.getScrollOffset();switch(C){case"copy":var J=new Element("tr");var I=K.getChildren();for(var E=0;E<I.length;E++){var H=I[E].clone(true).injectInside(J);H.getFirst().value=I[E].getFirst().value}J.injectAfter(K);break;case"up":K.getPrevious()?K.injectBefore(K.getPrevious()):K.injectInside(F);break;case"down":K.getNext()?K.injectAfter(K.getNext()):K.injectBefore(F.getFirst());
break;case"delete":(M.length>1)?K.remove():null;break}M=F.getChildren();for(var E=0;E<M.length;E++){var I=M[E].getChildren();for(var D=0;D<I.length;D++){var G=I[D].getFirst();if(G.type=="select-one"){G.name=G.name.replace(/\[[0-9]+\]/ig,"["+E+"]")}}}},optionsWizard:function(B,D,A){var M=$(A);var G=M.getFirst().getNext();var L=$(B).getParent().getParent();var N=G.getChildren();Backend.getScrollOffset();
switch(D){case"copy":var K=new Element("tr");var J=L.getChildren();for(var F=0;F<J.length;F++){var I=J[F].clone(true).injectInside(K);I.getFirst().value=J[F].getFirst().value;if(I.getFirst().type=="checkbox"){I.getFirst().checked=J[F].getFirst().checked?"checked":"";if(window.ie6){I.innerHTML=I.innerHTML.replace(/CHECKED/ig,'checked="checked"')}}}K.injectAfter(L);break;case"up":L.getPrevious()?L.injectBefore(L.getPrevious()):L.injectInside(G);
break;case"down":L.getNext()?L.injectAfter(L.getNext()):L.injectBefore(G.getFirst());break;case"delete":(N.length>1)?L.remove():null;break}N=G.getChildren();var C=new Array("value","label","default");for(var F=0;F<N.length;F++){var J=N[F].getChildren();for(var E=0;E<J.length;E++){var H=J[E].getFirst();if(H.type=="text"||H.type=="checkbox"){H.name=H.name.replace(/\[[0-9]+\]/ig,"["+F+"]")}}}},checkboxWizard:function(D,E,F){var A=$(F);
var C=$(D).getParent();var B=A.getChildren();Backend.getScrollOffset();switch(E){case"up":C.getPrevious()?C.injectBefore(C.getPrevious()):C.injectInside(A);break;case"down":C.getNext()?C.injectAfter(C.getNext()):C.injectBefore(A.getFirst());break}}};document.onmousedown=Backend.getMousePosition.bindWithEvent(document);window.addEvent("domready",function(){Backend.hideTreeBody();Backend.limitPreviewHeight();
Backend.blink.periodical(600);$$("textarea.monospace").each(function(A){Backend.toggleWrap(A)})});var TinyCallback={cleanXHTML:function(E,C){var D="";var A=C.match(/<a[^>]*>/gi);if(A!=null){for(var B=0;B<A.length;B++){D=A[B].replace(/target="_blank"/gi,'onclick="window.open(this.href); return false;"');C=C.replace(A[B],D)}}return C.replace(/<br>/,"<br />")},cleanHTML:function(B,A){A=A.replace(/<br \/>/,"<br>");
A=A.replace(/^\s*/ig,"");return A}};