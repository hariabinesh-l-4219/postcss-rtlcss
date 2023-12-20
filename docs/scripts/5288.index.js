/*! For license information please see 5288.index.js.LICENSE.txt */
"use strict";(self.webpackChunkpostcss_rtlcss_playground=self.webpackChunkpostcss_rtlcss_playground||[]).push([[5288],{45288:function(e,t,n){n.r(t),n.d(t,{CompletionAdapter:function(){return gt},DefinitionAdapter:function(){return yt},DiagnosticsAdapter:function(){return ct},DocumentColorAdapter:function(){return Mt},DocumentFormattingEditProvider:function(){return Rt},DocumentHighlightAdapter:function(){return kt},DocumentLinkAdapter:function(){return St},DocumentRangeFormattingEditProvider:function(){return Tt},DocumentSymbolAdapter:function(){return At},FoldingRangeAdapter:function(){return Pt},HoverAdapter:function(){return mt},ReferenceAdapter:function(){return Ct},RenameAdapter:function(){return xt},SelectionRangeAdapter:function(){return Ft},WorkerManager:function(){return oe},fromPosition:function(){return lt},fromRange:function(){return ht},setupMode:function(){return Lt},toRange:function(){return ft},toTextEdit:function(){return vt}});var r=n(26523),i=Object.defineProperty,o=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,s=Object.prototype.hasOwnProperty,u=(e,t,n,r)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let u of a(t))s.call(e,u)||u===n||i(e,u,{get:()=>t[u],enumerable:!(r=o(t,u))||r.enumerable});return e},c={};u(c,r,"default");var d,g,l,h,f,p,v,m,_,w,k,b,y,E,C,x,A,I,S,R,T,D,M,P,F,L,j,O,N,U,W,V,H,K,z,X,B,$,q,Q,G,J,Y,Z,ee,te,ne,re,ie,oe=class{_defaults;_idleCheckInterval;_lastUsedTime;_configChangeListener;_worker;_client;constructor(e){this._defaults=e,this._worker=null,this._client=null,this._idleCheckInterval=window.setInterval((()=>this._checkIfIdle()),3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange((()=>this._stopWorker()))}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}dispose(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._stopWorker()}_checkIfIdle(){this._worker&&Date.now()-this._lastUsedTime>12e4&&this._stopWorker()}_getClient(){return this._lastUsedTime=Date.now(),this._client||(this._worker=c.editor.createWebWorker({moduleId:"vs/language/css/cssWorker",label:this._defaults.languageId,createData:{options:this._defaults.options,languageId:this._defaults.languageId}}),this._client=this._worker.getProxy()),this._client}getLanguageServiceWorker(...e){let t;return this._getClient().then((e=>{t=e})).then((t=>{if(this._worker)return this._worker.withSyncedResources(e)})).then((e=>t))}};(g=d||(d={})).MIN_VALUE=-2147483648,g.MAX_VALUE=2147483647,(h=l||(l={})).MIN_VALUE=0,h.MAX_VALUE=2147483647,(p=f||(f={})).create=function(e,t){return e===Number.MAX_VALUE&&(e=l.MAX_VALUE),t===Number.MAX_VALUE&&(t=l.MAX_VALUE),{line:e,character:t}},p.is=function(e){var t=e;return ot.objectLiteral(t)&&ot.uinteger(t.line)&&ot.uinteger(t.character)},(m=v||(v={})).create=function(e,t,n,r){if(ot.uinteger(e)&&ot.uinteger(t)&&ot.uinteger(n)&&ot.uinteger(r))return{start:f.create(e,t),end:f.create(n,r)};if(f.is(e)&&f.is(t))return{start:e,end:t};throw new Error("Range#create called with invalid arguments["+e+", "+t+", "+n+", "+r+"]")},m.is=function(e){var t=e;return ot.objectLiteral(t)&&f.is(t.start)&&f.is(t.end)},(w=_||(_={})).create=function(e,t){return{uri:e,range:t}},w.is=function(e){var t=e;return ot.defined(t)&&v.is(t.range)&&(ot.string(t.uri)||ot.undefined(t.uri))},(b=k||(k={})).create=function(e,t,n,r){return{targetUri:e,targetRange:t,targetSelectionRange:n,originSelectionRange:r}},b.is=function(e){var t=e;return ot.defined(t)&&v.is(t.targetRange)&&ot.string(t.targetUri)&&(v.is(t.targetSelectionRange)||ot.undefined(t.targetSelectionRange))&&(v.is(t.originSelectionRange)||ot.undefined(t.originSelectionRange))},(E=y||(y={})).create=function(e,t,n,r){return{red:e,green:t,blue:n,alpha:r}},E.is=function(e){var t=e;return ot.numberRange(t.red,0,1)&&ot.numberRange(t.green,0,1)&&ot.numberRange(t.blue,0,1)&&ot.numberRange(t.alpha,0,1)},(x=C||(C={})).create=function(e,t){return{range:e,color:t}},x.is=function(e){var t=e;return v.is(t.range)&&y.is(t.color)},(I=A||(A={})).create=function(e,t,n){return{label:e,textEdit:t,additionalTextEdits:n}},I.is=function(e){var t=e;return ot.string(t.label)&&(ot.undefined(t.textEdit)||K.is(t))&&(ot.undefined(t.additionalTextEdits)||ot.typedArray(t.additionalTextEdits,K.is))},(R=S||(S={})).Comment="comment",R.Imports="imports",R.Region="region",(D=T||(T={})).create=function(e,t,n,r,i){var o={startLine:e,endLine:t};return ot.defined(n)&&(o.startCharacter=n),ot.defined(r)&&(o.endCharacter=r),ot.defined(i)&&(o.kind=i),o},D.is=function(e){var t=e;return ot.uinteger(t.startLine)&&ot.uinteger(t.startLine)&&(ot.undefined(t.startCharacter)||ot.uinteger(t.startCharacter))&&(ot.undefined(t.endCharacter)||ot.uinteger(t.endCharacter))&&(ot.undefined(t.kind)||ot.string(t.kind))},(P=M||(M={})).create=function(e,t){return{location:e,message:t}},P.is=function(e){var t=e;return ot.defined(t)&&_.is(t.location)&&ot.string(t.message)},(L=F||(F={})).Error=1,L.Warning=2,L.Information=3,L.Hint=4,(O=j||(j={})).Unnecessary=1,O.Deprecated=2,(N||(N={})).is=function(e){var t=e;return null!=t&&ot.string(t.href)},(W=U||(U={})).create=function(e,t,n,r,i,o){var a={range:e,message:t};return ot.defined(n)&&(a.severity=n),ot.defined(r)&&(a.code=r),ot.defined(i)&&(a.source=i),ot.defined(o)&&(a.relatedInformation=o),a},W.is=function(e){var t,n=e;return ot.defined(n)&&v.is(n.range)&&ot.string(n.message)&&(ot.number(n.severity)||ot.undefined(n.severity))&&(ot.integer(n.code)||ot.string(n.code)||ot.undefined(n.code))&&(ot.undefined(n.codeDescription)||ot.string(null===(t=n.codeDescription)||void 0===t?void 0:t.href))&&(ot.string(n.source)||ot.undefined(n.source))&&(ot.undefined(n.relatedInformation)||ot.typedArray(n.relatedInformation,M.is))},(H=V||(V={})).create=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={title:e,command:t};return ot.defined(n)&&n.length>0&&(i.arguments=n),i},H.is=function(e){var t=e;return ot.defined(t)&&ot.string(t.title)&&ot.string(t.command)},(z=K||(K={})).replace=function(e,t){return{range:e,newText:t}},z.insert=function(e,t){return{range:{start:e,end:e},newText:t}},z.del=function(e){return{range:e,newText:""}},z.is=function(e){var t=e;return ot.objectLiteral(t)&&ot.string(t.newText)&&v.is(t.range)},(B=X||(X={})).create=function(e,t,n){var r={label:e};return void 0!==t&&(r.needsConfirmation=t),void 0!==n&&(r.description=n),r},B.is=function(e){var t=e;return void 0!==t&&ot.objectLiteral(t)&&ot.string(t.label)&&(ot.boolean(t.needsConfirmation)||void 0===t.needsConfirmation)&&(ot.string(t.description)||void 0===t.description)},($||($={})).is=function(e){return"string"==typeof e},(Q=q||(q={})).replace=function(e,t,n){return{range:e,newText:t,annotationId:n}},Q.insert=function(e,t,n){return{range:{start:e,end:e},newText:t,annotationId:n}},Q.del=function(e,t){return{range:e,newText:"",annotationId:t}},Q.is=function(e){var t=e;return K.is(t)&&(X.is(t.annotationId)||$.is(t.annotationId))},(J=G||(G={})).create=function(e,t){return{textDocument:e,edits:t}},J.is=function(e){var t=e;return ot.defined(t)&&de.is(t.textDocument)&&Array.isArray(t.edits)},(Z=Y||(Y={})).create=function(e,t,n){var r={kind:"create",uri:e};return void 0===t||void 0===t.overwrite&&void 0===t.ignoreIfExists||(r.options=t),void 0!==n&&(r.annotationId=n),r},Z.is=function(e){var t=e;return t&&"create"===t.kind&&ot.string(t.uri)&&(void 0===t.options||(void 0===t.options.overwrite||ot.boolean(t.options.overwrite))&&(void 0===t.options.ignoreIfExists||ot.boolean(t.options.ignoreIfExists)))&&(void 0===t.annotationId||$.is(t.annotationId))},(te=ee||(ee={})).create=function(e,t,n,r){var i={kind:"rename",oldUri:e,newUri:t};return void 0===n||void 0===n.overwrite&&void 0===n.ignoreIfExists||(i.options=n),void 0!==r&&(i.annotationId=r),i},te.is=function(e){var t=e;return t&&"rename"===t.kind&&ot.string(t.oldUri)&&ot.string(t.newUri)&&(void 0===t.options||(void 0===t.options.overwrite||ot.boolean(t.options.overwrite))&&(void 0===t.options.ignoreIfExists||ot.boolean(t.options.ignoreIfExists)))&&(void 0===t.annotationId||$.is(t.annotationId))},(re=ne||(ne={})).create=function(e,t,n){var r={kind:"delete",uri:e};return void 0===t||void 0===t.recursive&&void 0===t.ignoreIfNotExists||(r.options=t),void 0!==n&&(r.annotationId=n),r},re.is=function(e){var t=e;return t&&"delete"===t.kind&&ot.string(t.uri)&&(void 0===t.options||(void 0===t.options.recursive||ot.boolean(t.options.recursive))&&(void 0===t.options.ignoreIfNotExists||ot.boolean(t.options.ignoreIfNotExists)))&&(void 0===t.annotationId||$.is(t.annotationId))},(ie||(ie={})).is=function(e){var t=e;return t&&(void 0!==t.changes||void 0!==t.documentChanges)&&(void 0===t.documentChanges||t.documentChanges.every((function(e){return ot.string(e.kind)?Y.is(e)||ee.is(e)||ne.is(e):G.is(e)})))};var ae,se,ue,ce,de,ge,le,he,fe,pe,ve,me,_e,we,ke,be,ye,Ee,Ce,xe,Ae,Ie,Se,Re,Te,De,Me,Pe,Fe,Le,je,Oe,Ne,Ue,We,Ve,He,Ke,ze,Xe,Be,$e,qe,Qe,Ge,Je,Ye,Ze,et,tt,nt,rt=function(){function e(e,t){this.edits=e,this.changeAnnotations=t}return e.prototype.insert=function(e,t,n){var r,i;if(void 0===n?r=K.insert(e,t):$.is(n)?(i=n,r=q.insert(e,t,n)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(n),r=q.insert(e,t,i)),this.edits.push(r),void 0!==i)return i},e.prototype.replace=function(e,t,n){var r,i;if(void 0===n?r=K.replace(e,t):$.is(n)?(i=n,r=q.replace(e,t,n)):(this.assertChangeAnnotations(this.changeAnnotations),i=this.changeAnnotations.manage(n),r=q.replace(e,t,i)),this.edits.push(r),void 0!==i)return i},e.prototype.delete=function(e,t){var n,r;if(void 0===t?n=K.del(e):$.is(t)?(r=t,n=q.del(e,t)):(this.assertChangeAnnotations(this.changeAnnotations),r=this.changeAnnotations.manage(t),n=q.del(e,r)),this.edits.push(n),void 0!==r)return r},e.prototype.add=function(e){this.edits.push(e)},e.prototype.all=function(){return this.edits},e.prototype.clear=function(){this.edits.splice(0,this.edits.length)},e.prototype.assertChangeAnnotations=function(e){if(void 0===e)throw new Error("Text edit change is not configured to manage change annotations.")},e}(),it=function(){function e(e){this._annotations=void 0===e?Object.create(null):e,this._counter=0,this._size=0}return e.prototype.all=function(){return this._annotations},Object.defineProperty(e.prototype,"size",{get:function(){return this._size},enumerable:!1,configurable:!0}),e.prototype.manage=function(e,t){var n;if($.is(e)?n=e:(n=this.nextId(),t=e),void 0!==this._annotations[n])throw new Error("Id "+n+" is already in use.");if(void 0===t)throw new Error("No annotation provided for id "+n);return this._annotations[n]=t,this._size++,n},e.prototype.nextId=function(){return this._counter++,this._counter.toString()},e}();!function(){function e(e){var t=this;this._textEditChanges=Object.create(null),void 0!==e?(this._workspaceEdit=e,e.documentChanges?(this._changeAnnotations=new it(e.changeAnnotations),e.changeAnnotations=this._changeAnnotations.all(),e.documentChanges.forEach((function(e){if(G.is(e)){var n=new rt(e.edits,t._changeAnnotations);t._textEditChanges[e.textDocument.uri]=n}}))):e.changes&&Object.keys(e.changes).forEach((function(n){var r=new rt(e.changes[n]);t._textEditChanges[n]=r}))):this._workspaceEdit={}}Object.defineProperty(e.prototype,"edit",{get:function(){return this.initDocumentChanges(),void 0!==this._changeAnnotations&&(0===this._changeAnnotations.size?this._workspaceEdit.changeAnnotations=void 0:this._workspaceEdit.changeAnnotations=this._changeAnnotations.all()),this._workspaceEdit},enumerable:!1,configurable:!0}),e.prototype.getTextEditChange=function(e){if(de.is(e)){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var t={uri:e.uri,version:e.version};if(!(r=this._textEditChanges[t.uri])){var n={textDocument:t,edits:i=[]};this._workspaceEdit.documentChanges.push(n),r=new rt(i,this._changeAnnotations),this._textEditChanges[t.uri]=r}return r}if(this.initChanges(),void 0===this._workspaceEdit.changes)throw new Error("Workspace edit is not configured for normal text edit changes.");var r;if(!(r=this._textEditChanges[e])){var i=[];this._workspaceEdit.changes[e]=i,r=new rt(i),this._textEditChanges[e]=r}return r},e.prototype.initDocumentChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._changeAnnotations=new it,this._workspaceEdit.documentChanges=[],this._workspaceEdit.changeAnnotations=this._changeAnnotations.all())},e.prototype.initChanges=function(){void 0===this._workspaceEdit.documentChanges&&void 0===this._workspaceEdit.changes&&(this._workspaceEdit.changes=Object.create(null))},e.prototype.createFile=function(e,t,n){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var r,i,o;if(X.is(t)||$.is(t)?r=t:n=t,void 0===r?i=Y.create(e,n):(o=$.is(r)?r:this._changeAnnotations.manage(r),i=Y.create(e,n,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o},e.prototype.renameFile=function(e,t,n,r){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var i,o,a;if(X.is(n)||$.is(n)?i=n:r=n,void 0===i?o=ee.create(e,t,r):(a=$.is(i)?i:this._changeAnnotations.manage(i),o=ee.create(e,t,r,a)),this._workspaceEdit.documentChanges.push(o),void 0!==a)return a},e.prototype.deleteFile=function(e,t,n){if(this.initDocumentChanges(),void 0===this._workspaceEdit.documentChanges)throw new Error("Workspace edit is not configured for document changes.");var r,i,o;if(X.is(t)||$.is(t)?r=t:n=t,void 0===r?i=ne.create(e,n):(o=$.is(r)?r:this._changeAnnotations.manage(r),i=ne.create(e,n,o)),this._workspaceEdit.documentChanges.push(i),void 0!==o)return o}}(),(se=ae||(ae={})).create=function(e){return{uri:e}},se.is=function(e){var t=e;return ot.defined(t)&&ot.string(t.uri)},(ce=ue||(ue={})).create=function(e,t){return{uri:e,version:t}},ce.is=function(e){var t=e;return ot.defined(t)&&ot.string(t.uri)&&ot.integer(t.version)},(ge=de||(de={})).create=function(e,t){return{uri:e,version:t}},ge.is=function(e){var t=e;return ot.defined(t)&&ot.string(t.uri)&&(null===t.version||ot.integer(t.version))},(he=le||(le={})).create=function(e,t,n,r){return{uri:e,languageId:t,version:n,text:r}},he.is=function(e){var t=e;return ot.defined(t)&&ot.string(t.uri)&&ot.string(t.languageId)&&ot.integer(t.version)&&ot.string(t.text)},(pe=fe||(fe={})).PlainText="plaintext",pe.Markdown="markdown",function(e){e.is=function(t){var n=t;return n===e.PlainText||n===e.Markdown}}(fe||(fe={})),(ve||(ve={})).is=function(e){var t=e;return ot.objectLiteral(e)&&fe.is(t.kind)&&ot.string(t.value)},(_e=me||(me={})).Text=1,_e.Method=2,_e.Function=3,_e.Constructor=4,_e.Field=5,_e.Variable=6,_e.Class=7,_e.Interface=8,_e.Module=9,_e.Property=10,_e.Unit=11,_e.Value=12,_e.Enum=13,_e.Keyword=14,_e.Snippet=15,_e.Color=16,_e.File=17,_e.Reference=18,_e.Folder=19,_e.EnumMember=20,_e.Constant=21,_e.Struct=22,_e.Event=23,_e.Operator=24,_e.TypeParameter=25,(ke=we||(we={})).PlainText=1,ke.Snippet=2,(be||(be={})).Deprecated=1,(Ee=ye||(ye={})).create=function(e,t,n){return{newText:e,insert:t,replace:n}},Ee.is=function(e){var t=e;return t&&ot.string(t.newText)&&v.is(t.insert)&&v.is(t.replace)},(xe=Ce||(Ce={})).asIs=1,xe.adjustIndentation=2,(Ae||(Ae={})).create=function(e){return{label:e}},(Ie||(Ie={})).create=function(e,t){return{items:e||[],isIncomplete:!!t}},(Re=Se||(Se={})).fromPlainText=function(e){return e.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")},Re.is=function(e){var t=e;return ot.string(t)||ot.objectLiteral(t)&&ot.string(t.language)&&ot.string(t.value)},(Te||(Te={})).is=function(e){var t=e;return!!t&&ot.objectLiteral(t)&&(ve.is(t.contents)||Se.is(t.contents)||ot.typedArray(t.contents,Se.is))&&(void 0===e.range||v.is(e.range))},(De||(De={})).create=function(e,t){return t?{label:e,documentation:t}:{label:e}},(Me||(Me={})).create=function(e,t){for(var n=[],r=2;r<arguments.length;r++)n[r-2]=arguments[r];var i={label:e};return ot.defined(t)&&(i.documentation=t),ot.defined(n)?i.parameters=n:i.parameters=[],i},(Fe=Pe||(Pe={})).Text=1,Fe.Read=2,Fe.Write=3,(Le||(Le={})).create=function(e,t){var n={range:e};return ot.number(t)&&(n.kind=t),n},(Oe=je||(je={})).File=1,Oe.Module=2,Oe.Namespace=3,Oe.Package=4,Oe.Class=5,Oe.Method=6,Oe.Property=7,Oe.Field=8,Oe.Constructor=9,Oe.Enum=10,Oe.Interface=11,Oe.Function=12,Oe.Variable=13,Oe.Constant=14,Oe.String=15,Oe.Number=16,Oe.Boolean=17,Oe.Array=18,Oe.Object=19,Oe.Key=20,Oe.Null=21,Oe.EnumMember=22,Oe.Struct=23,Oe.Event=24,Oe.Operator=25,Oe.TypeParameter=26,(Ne||(Ne={})).Deprecated=1,(Ue||(Ue={})).create=function(e,t,n,r,i){var o={name:e,kind:t,location:{uri:r,range:n}};return i&&(o.containerName=i),o},(Ve=We||(We={})).create=function(e,t,n,r,i,o){var a={name:e,detail:t,kind:n,range:r,selectionRange:i};return void 0!==o&&(a.children=o),a},Ve.is=function(e){var t=e;return t&&ot.string(t.name)&&ot.number(t.kind)&&v.is(t.range)&&v.is(t.selectionRange)&&(void 0===t.detail||ot.string(t.detail))&&(void 0===t.deprecated||ot.boolean(t.deprecated))&&(void 0===t.children||Array.isArray(t.children))&&(void 0===t.tags||Array.isArray(t.tags))},(Ke=He||(He={})).Empty="",Ke.QuickFix="quickfix",Ke.Refactor="refactor",Ke.RefactorExtract="refactor.extract",Ke.RefactorInline="refactor.inline",Ke.RefactorRewrite="refactor.rewrite",Ke.Source="source",Ke.SourceOrganizeImports="source.organizeImports",Ke.SourceFixAll="source.fixAll",(Xe=ze||(ze={})).create=function(e,t){var n={diagnostics:e};return null!=t&&(n.only=t),n},Xe.is=function(e){var t=e;return ot.defined(t)&&ot.typedArray(t.diagnostics,U.is)&&(void 0===t.only||ot.typedArray(t.only,ot.string))},($e=Be||(Be={})).create=function(e,t,n){var r={title:e},i=!0;return"string"==typeof t?(i=!1,r.kind=t):V.is(t)?r.command=t:r.edit=t,i&&void 0!==n&&(r.kind=n),r},$e.is=function(e){var t=e;return t&&ot.string(t.title)&&(void 0===t.diagnostics||ot.typedArray(t.diagnostics,U.is))&&(void 0===t.kind||ot.string(t.kind))&&(void 0!==t.edit||void 0!==t.command)&&(void 0===t.command||V.is(t.command))&&(void 0===t.isPreferred||ot.boolean(t.isPreferred))&&(void 0===t.edit||ie.is(t.edit))},(Qe=qe||(qe={})).create=function(e,t){var n={range:e};return ot.defined(t)&&(n.data=t),n},Qe.is=function(e){var t=e;return ot.defined(t)&&v.is(t.range)&&(ot.undefined(t.command)||V.is(t.command))},(Je=Ge||(Ge={})).create=function(e,t){return{tabSize:e,insertSpaces:t}},Je.is=function(e){var t=e;return ot.defined(t)&&ot.uinteger(t.tabSize)&&ot.boolean(t.insertSpaces)},(Ze=Ye||(Ye={})).create=function(e,t,n){return{range:e,target:t,data:n}},Ze.is=function(e){var t=e;return ot.defined(t)&&v.is(t.range)&&(ot.undefined(t.target)||ot.string(t.target))},(tt=et||(et={})).create=function(e,t){return{range:e,parent:t}},tt.is=function(e){var t=e;return void 0!==t&&v.is(t.range)&&(void 0===t.parent||tt.is(t.parent))},function(e){function t(e,n){if(e.length<=1)return e;var r=e.length/2|0,i=e.slice(0,r),o=e.slice(r);t(i,n),t(o,n);for(var a=0,s=0,u=0;a<i.length&&s<o.length;){var c=n(i[a],o[s]);e[u++]=c<=0?i[a++]:o[s++]}for(;a<i.length;)e[u++]=i[a++];for(;s<o.length;)e[u++]=o[s++];return e}e.create=function(e,t,n,r){return new ut(e,t,n,r)},e.is=function(e){var t=e;return!!(ot.defined(t)&&ot.string(t.uri)&&(ot.undefined(t.languageId)||ot.string(t.languageId))&&ot.uinteger(t.lineCount)&&ot.func(t.getText)&&ot.func(t.positionAt)&&ot.func(t.offsetAt))},e.applyEdits=function(e,n){for(var r=e.getText(),i=t(n,(function(e,t){var n=e.range.start.line-t.range.start.line;return 0===n?e.range.start.character-t.range.start.character:n})),o=r.length,a=i.length-1;a>=0;a--){var s=i[a],u=e.offsetAt(s.range.start),c=e.offsetAt(s.range.end);if(!(c<=o))throw new Error("Overlapping edit");r=r.substring(0,u)+s.newText+r.substring(c,r.length),o=u}return r}}(nt||(nt={}));var ot,at,st,ut=function(){function e(e,t,n,r){this._uri=e,this._languageId=t,this._version=n,this._content=r,this._lineOffsets=void 0}return Object.defineProperty(e.prototype,"uri",{get:function(){return this._uri},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"languageId",{get:function(){return this._languageId},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"version",{get:function(){return this._version},enumerable:!1,configurable:!0}),e.prototype.getText=function(e){if(e){var t=this.offsetAt(e.start),n=this.offsetAt(e.end);return this._content.substring(t,n)}return this._content},e.prototype.update=function(e,t){this._content=e.text,this._version=t,this._lineOffsets=void 0},e.prototype.getLineOffsets=function(){if(void 0===this._lineOffsets){for(var e=[],t=this._content,n=!0,r=0;r<t.length;r++){n&&(e.push(r),n=!1);var i=t.charAt(r);n="\r"===i||"\n"===i,"\r"===i&&r+1<t.length&&"\n"===t.charAt(r+1)&&r++}n&&t.length>0&&e.push(t.length),this._lineOffsets=e}return this._lineOffsets},e.prototype.positionAt=function(e){e=Math.max(Math.min(e,this._content.length),0);var t=this.getLineOffsets(),n=0,r=t.length;if(0===r)return f.create(0,e);for(;n<r;){var i=Math.floor((n+r)/2);t[i]>e?r=i:n=i+1}var o=n-1;return f.create(o,e-t[o])},e.prototype.offsetAt=function(e){var t=this.getLineOffsets();if(e.line>=t.length)return this._content.length;if(e.line<0)return 0;var n=t[e.line],r=e.line+1<t.length?t[e.line+1]:this._content.length;return Math.max(Math.min(n+e.character,r),n)},Object.defineProperty(e.prototype,"lineCount",{get:function(){return this.getLineOffsets().length},enumerable:!1,configurable:!0}),e}();at=ot||(ot={}),st=Object.prototype.toString,at.defined=function(e){return void 0!==e},at.undefined=function(e){return void 0===e},at.boolean=function(e){return!0===e||!1===e},at.string=function(e){return"[object String]"===st.call(e)},at.number=function(e){return"[object Number]"===st.call(e)},at.numberRange=function(e,t,n){return"[object Number]"===st.call(e)&&t<=e&&e<=n},at.integer=function(e){return"[object Number]"===st.call(e)&&-2147483648<=e&&e<=2147483647},at.uinteger=function(e){return"[object Number]"===st.call(e)&&0<=e&&e<=2147483647},at.func=function(e){return"[object Function]"===st.call(e)},at.objectLiteral=function(e){return null!==e&&"object"==typeof e},at.typedArray=function(e,t){return Array.isArray(e)&&e.every(t)};var ct=class{constructor(e,t,n){this._languageId=e,this._worker=t;const r=e=>{let t,n=e.getLanguageId();n===this._languageId&&(this._listener[e.uri.toString()]=e.onDidChangeContent((()=>{window.clearTimeout(t),t=window.setTimeout((()=>this._doValidate(e.uri,n)),500)})),this._doValidate(e.uri,n))},i=e=>{c.editor.setModelMarkers(e,this._languageId,[]);let t=e.uri.toString(),n=this._listener[t];n&&(n.dispose(),delete this._listener[t])};this._disposables.push(c.editor.onDidCreateModel(r)),this._disposables.push(c.editor.onWillDisposeModel(i)),this._disposables.push(c.editor.onDidChangeModelLanguage((e=>{i(e.model),r(e.model)}))),this._disposables.push(n((e=>{c.editor.getModels().forEach((e=>{e.getLanguageId()===this._languageId&&(i(e),r(e))}))}))),this._disposables.push({dispose:()=>{c.editor.getModels().forEach(i);for(let e in this._listener)this._listener[e].dispose()}}),c.editor.getModels().forEach(r)}_disposables=[];_listener=Object.create(null);dispose(){this._disposables.forEach((e=>e&&e.dispose())),this._disposables.length=0}_doValidate(e,t){this._worker(e).then((t=>t.doValidation(e.toString()))).then((n=>{const r=n.map((e=>function(e,t){let n="number"==typeof t.code?String(t.code):t.code;return{severity:dt(t.severity),startLineNumber:t.range.start.line+1,startColumn:t.range.start.character+1,endLineNumber:t.range.end.line+1,endColumn:t.range.end.character+1,message:t.message,code:n,source:t.source}}(0,e)));let i=c.editor.getModel(e);i&&i.getLanguageId()===t&&c.editor.setModelMarkers(i,t,r)})).then(void 0,(e=>{console.error(e)}))}};function dt(e){switch(e){case F.Error:return c.MarkerSeverity.Error;case F.Warning:return c.MarkerSeverity.Warning;case F.Information:return c.MarkerSeverity.Info;case F.Hint:return c.MarkerSeverity.Hint;default:return c.MarkerSeverity.Info}}var gt=class{constructor(e,t){this._worker=e,this._triggerCharacters=t}get triggerCharacters(){return this._triggerCharacters}provideCompletionItems(e,t,n,r){const i=e.uri;return this._worker(i).then((e=>e.doComplete(i.toString(),lt(t)))).then((n=>{if(!n)return;const r=e.getWordUntilPosition(t),i=new c.Range(t.lineNumber,r.startColumn,t.lineNumber,r.endColumn),o=n.items.map((e=>{const t={label:e.label,insertText:e.insertText||e.label,sortText:e.sortText,filterText:e.filterText,documentation:e.documentation,detail:e.detail,command:(n=e.command,n&&"editor.action.triggerSuggest"===n.command?{id:n.command,title:n.title,arguments:n.arguments}:void 0),range:i,kind:pt(e.kind)};var n,r;return e.textEdit&&(void 0!==(r=e.textEdit).insert&&void 0!==r.replace?t.range={insert:ft(e.textEdit.insert),replace:ft(e.textEdit.replace)}:t.range=ft(e.textEdit.range),t.insertText=e.textEdit.newText),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(vt)),e.insertTextFormat===we.Snippet&&(t.insertTextRules=c.languages.CompletionItemInsertTextRule.InsertAsSnippet),t}));return{isIncomplete:n.isIncomplete,suggestions:o}}))}};function lt(e){if(e)return{character:e.column-1,line:e.lineNumber-1}}function ht(e){if(e)return{start:{line:e.startLineNumber-1,character:e.startColumn-1},end:{line:e.endLineNumber-1,character:e.endColumn-1}}}function ft(e){if(e)return new c.Range(e.start.line+1,e.start.character+1,e.end.line+1,e.end.character+1)}function pt(e){const t=c.languages.CompletionItemKind;switch(e){case me.Text:return t.Text;case me.Method:return t.Method;case me.Function:return t.Function;case me.Constructor:return t.Constructor;case me.Field:return t.Field;case me.Variable:return t.Variable;case me.Class:return t.Class;case me.Interface:return t.Interface;case me.Module:return t.Module;case me.Property:return t.Property;case me.Unit:return t.Unit;case me.Value:return t.Value;case me.Enum:return t.Enum;case me.Keyword:return t.Keyword;case me.Snippet:return t.Snippet;case me.Color:return t.Color;case me.File:return t.File;case me.Reference:return t.Reference}return t.Property}function vt(e){if(e)return{range:ft(e.range),text:e.newText}}var mt=class{constructor(e){this._worker=e}provideHover(e,t,n){let r=e.uri;return this._worker(r).then((e=>e.doHover(r.toString(),lt(t)))).then((e=>{if(e)return{range:ft(e.range),contents:wt(e.contents)}}))}};function _t(e){return"string"==typeof e?{value:e}:(t=e)&&"object"==typeof t&&"string"==typeof t.kind?"plaintext"===e.kind?{value:e.value.replace(/[\\`*_{}[\]()#+\-.!]/g,"\\$&")}:{value:e.value}:{value:"```"+e.language+"\n"+e.value+"\n```\n"};var t}function wt(e){if(e)return Array.isArray(e)?e.map(_t):[_t(e)]}var kt=class{constructor(e){this._worker=e}provideDocumentHighlights(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.findDocumentHighlights(r.toString(),lt(t)))).then((e=>{if(e)return e.map((e=>({range:ft(e.range),kind:bt(e.kind)})))}))}};function bt(e){switch(e){case Pe.Read:return c.languages.DocumentHighlightKind.Read;case Pe.Write:return c.languages.DocumentHighlightKind.Write;case Pe.Text:return c.languages.DocumentHighlightKind.Text}return c.languages.DocumentHighlightKind.Text}var yt=class{constructor(e){this._worker=e}provideDefinition(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.findDefinition(r.toString(),lt(t)))).then((e=>{if(e)return[Et(e)]}))}};function Et(e){return{uri:c.Uri.parse(e.uri),range:ft(e.range)}}var Ct=class{constructor(e){this._worker=e}provideReferences(e,t,n,r){const i=e.uri;return this._worker(i).then((e=>e.findReferences(i.toString(),lt(t)))).then((e=>{if(e)return e.map(Et)}))}},xt=class{constructor(e){this._worker=e}provideRenameEdits(e,t,n,r){const i=e.uri;return this._worker(i).then((e=>e.doRename(i.toString(),lt(t),n))).then((e=>function(e){if(!e||!e.changes)return;let t=[];for(let n in e.changes){const r=c.Uri.parse(n);for(let i of e.changes[n])t.push({resource:r,versionId:void 0,textEdit:{range:ft(i.range),text:i.newText}})}return{edits:t}}(e)))}},At=class{constructor(e){this._worker=e}provideDocumentSymbols(e,t){const n=e.uri;return this._worker(n).then((e=>e.findDocumentSymbols(n.toString()))).then((e=>{if(e)return e.map((e=>({name:e.name,detail:"",containerName:e.containerName,kind:It(e.kind),range:ft(e.location.range),selectionRange:ft(e.location.range),tags:[]})))}))}};function It(e){let t=c.languages.SymbolKind;switch(e){case je.File:return t.Array;case je.Module:return t.Module;case je.Namespace:return t.Namespace;case je.Package:return t.Package;case je.Class:return t.Class;case je.Method:return t.Method;case je.Property:return t.Property;case je.Field:return t.Field;case je.Constructor:return t.Constructor;case je.Enum:return t.Enum;case je.Interface:return t.Interface;case je.Function:return t.Function;case je.Variable:return t.Variable;case je.Constant:return t.Constant;case je.String:return t.String;case je.Number:return t.Number;case je.Boolean:return t.Boolean;case je.Array:return t.Array}return t.Function}var St=class{constructor(e){this._worker=e}provideLinks(e,t){const n=e.uri;return this._worker(n).then((e=>e.findDocumentLinks(n.toString()))).then((e=>{if(e)return{links:e.map((e=>({range:ft(e.range),url:e.target})))}}))}},Rt=class{constructor(e){this._worker=e}provideDocumentFormattingEdits(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.format(r.toString(),null,Dt(t)).then((e=>{if(e&&0!==e.length)return e.map(vt)}))))}},Tt=class{constructor(e){this._worker=e}canFormatMultipleRanges=!1;provideDocumentRangeFormattingEdits(e,t,n,r){const i=e.uri;return this._worker(i).then((e=>e.format(i.toString(),ht(t),Dt(n)).then((e=>{if(e&&0!==e.length)return e.map(vt)}))))}};function Dt(e){return{tabSize:e.tabSize,insertSpaces:e.insertSpaces}}var Mt=class{constructor(e){this._worker=e}provideDocumentColors(e,t){const n=e.uri;return this._worker(n).then((e=>e.findDocumentColors(n.toString()))).then((e=>{if(e)return e.map((e=>({color:e.color,range:ft(e.range)})))}))}provideColorPresentations(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.getColorPresentations(r.toString(),t.color,ht(t.range)))).then((e=>{if(e)return e.map((e=>{let t={label:e.label};return e.textEdit&&(t.textEdit=vt(e.textEdit)),e.additionalTextEdits&&(t.additionalTextEdits=e.additionalTextEdits.map(vt)),t}))}))}},Pt=class{constructor(e){this._worker=e}provideFoldingRanges(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.getFoldingRanges(r.toString(),t))).then((e=>{if(e)return e.map((e=>{const t={start:e.startLine+1,end:e.endLine+1};return void 0!==e.kind&&(t.kind=function(e){switch(e){case S.Comment:return c.languages.FoldingRangeKind.Comment;case S.Imports:return c.languages.FoldingRangeKind.Imports;case S.Region:return c.languages.FoldingRangeKind.Region}}(e.kind)),t}))}))}},Ft=class{constructor(e){this._worker=e}provideSelectionRanges(e,t,n){const r=e.uri;return this._worker(r).then((e=>e.getSelectionRanges(r.toString(),t.map(lt)))).then((e=>{if(e)return e.map((e=>{const t=[];for(;e;)t.push({range:ft(e.range)}),e=e.parent;return t}))}))}};function Lt(e){const t=[],n=[],r=new oe(e);t.push(r);const i=(...e)=>r.getLanguageServiceWorker(...e);return function(){const{languageId:t,modeConfiguration:r}=e;Ot(n),r.completionItems&&n.push(c.languages.registerCompletionItemProvider(t,new gt(i,["/","-",":"]))),r.hovers&&n.push(c.languages.registerHoverProvider(t,new mt(i))),r.documentHighlights&&n.push(c.languages.registerDocumentHighlightProvider(t,new kt(i))),r.definitions&&n.push(c.languages.registerDefinitionProvider(t,new yt(i))),r.references&&n.push(c.languages.registerReferenceProvider(t,new Ct(i))),r.documentSymbols&&n.push(c.languages.registerDocumentSymbolProvider(t,new At(i))),r.rename&&n.push(c.languages.registerRenameProvider(t,new xt(i))),r.colors&&n.push(c.languages.registerColorProvider(t,new Mt(i))),r.foldingRanges&&n.push(c.languages.registerFoldingRangeProvider(t,new Pt(i))),r.diagnostics&&n.push(new ct(t,i,e.onDidChange)),r.selectionRanges&&n.push(c.languages.registerSelectionRangeProvider(t,new Ft(i))),r.documentFormattingEdits&&n.push(c.languages.registerDocumentFormattingEditProvider(t,new Rt(i))),r.documentRangeFormattingEdits&&n.push(c.languages.registerDocumentRangeFormattingEditProvider(t,new Tt(i)))}(),t.push(jt(n)),jt(t)}function jt(e){return{dispose:()=>Ot(e)}}function Ot(e){for(;e.length;)e.pop().dispose()}}}]);