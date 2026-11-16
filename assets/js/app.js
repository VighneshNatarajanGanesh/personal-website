var R0=Object.defineProperty;var P0=(s,t,e)=>t in s?R0(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e;var Gt=(s,t,e)=>P0(s,typeof t!="symbol"?t+"":t,e);function us(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function Mp(s,t){s.prototype=Object.create(t.prototype),s.prototype.constructor=s,s.__proto__=t}var ii={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},na={duration:.5,overwrite:!1,delay:0},Fu,Sn,He,Si=1e8,Le=1/Si,Ru=Math.PI*2,I0=Ru/4,L0=0,bp=Math.sqrt,D0=Math.cos,N0=Math.sin,ln=function(t){return typeof t=="string"},je=function(t){return typeof t=="function"},ds=function(t){return typeof t=="number"},Ul=function(t){return typeof t>"u"},Zi=function(t){return typeof t=="object"},ni=function(t){return t!==!1},Bu=function(){return typeof window<"u"},wl=function(t){return je(t)||ln(t)},wp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},An=Array.isArray,U0=/random\([^)]+\)/g,O0=/,\s*/g,pp=/(?:-?\.?\d|\.)+/gi,zu=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,pr=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Mu=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ku=/[+-]=-?[.\d]+/,F0=/[^,'"\[\]\s]+/gi,B0=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Je,qi,Pu,Vu,li={},Cl={},Tp,Ep=function(t){return(Cl=Wr(t,li))&&Cn},Ol=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},ia=function(t,e){return!e&&console.warn(t)},Ap=function(t,e){return t&&(li[t]=e)&&Cl&&(Cl[t]=e)||li},sa=function(){return 0},z0={suppressEvents:!0,isStart:!0,kill:!1},Tl={suppressEvents:!0,kill:!1},k0={suppressEvents:!0},Gu={},Us=[],Iu={},Cp,ti={},bu={},mp=30,El=[],Hu="",Wu=function(t){var e=t[0],n,i;if(Zi(e)||je(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=El.length;i--&&!El[i].targetTest(e););n=El[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Zu(t[i],n)))||t.splice(i,1);return t},Os=function(t){return t._gsap||Wu(Mi(t))[0]._gsap},Xu=function(t,e,n){return(n=t[e])&&je(n)?t[e]():Ul(n)&&t.getAttribute&&t.getAttribute(e)||n},zn=function(t,e){return(t=t.split(",")).forEach(e)||t},tn=function(t){return Math.round(t*1e5)/1e5||0},Ze=function(t){return Math.round(t*1e7)/1e7||0},mr=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},V0=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Rl=function(){var t=Us.length,e=Us.slice(0),n,i;for(Iu={},Us.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},qu=function(t){return!!(t._initted||t._startAt||t.add)},Rp=function(t,e,n,i){Us.length&&!Sn&&Rl(),t.render(e,n,i||!!(Sn&&e<0&&qu(t))),Us.length&&!Sn&&Rl()},Pp=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(F0).length<2?e:ln(t)?t.trim():t},Ip=function(t){return t},ci=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},G0=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},Wr=function(t,e){for(var n in e)t[n]=e[n];return t},gp=function s(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Zi(e[n])?s(t[n]||(t[n]={}),e[n]):e[n]);return t},Pl=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},jo=function(t){var e=t.parent||Je,n=t.keyframes?G0(An(t.keyframes)):ci;if(ni(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},H0=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Lp=function(t,e,n,i,r){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(r)for(a=e[r];o&&o[r]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},Fl=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var r=e._prev,o=e._next;r?r._next=o:t[n]===e&&(t[n]=o),o?o._prev=r:t[i]===e&&(t[i]=r),e._next=e._prev=e.parent=null},Fs=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},ur=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},W0=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Lu=function(t,e,n,i){return t._startAt&&(Sn?t._startAt.revert(Tl):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},X0=function s(t){return!t||t._ts&&s(t.parent)},_p=function(t){return t._repeat?Xr(t._tTime,t=t.duration()+t._rDelay)*t:0},Xr=function(t,e){var n=Math.floor(t=Ze(t/e));return t&&n===t?n-1:n},Il=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Bl=function(t){return t._end=Ze(t._start+(t._tDur/Math.abs(t._ts||t._rts||Le)||0))},zl=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Ze(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Bl(t),n._dirty||ur(n,t)),t},Dp=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Il(t.rawTime(),e),(!e._dur||la(0,e.totalDuration(),n)-e._tTime>Le)&&e.render(n,!0)),ur(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Le}},Yi=function(t,e,n,i){return e.parent&&Fs(e),e._start=Ze((ds(n)?n:!n&&Ll(e)&&(!t._last||t._last._start>=t._time)?t._last?t._last._start:t._time:n||t!==Je?yi(t,n,e):t._time)+e._delay),e._end=Ze(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Lp(t,e,"_first","_last",t._sort?"_start":0),Ll(e)||(t._recent=e),i||Dp(t,e),t._ts<0&&zl(t,t._tTime),t},Np=function(t,e){return(li.ScrollTrigger||Ol("scrollTrigger",e))&&li.ScrollTrigger.create(e,t)},Up=function(t,e,n,i,r){if(Ku(t,e,r),!t._initted)return 1;if(!n&&t._pt&&!Sn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Cp!==ei.frame)return Us.push(t),t._lazy=[r,i],1},q0=function s(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||s(e))},Ll=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},Y0=function(t,e,n,i){var r=t.ratio,o=e<0||!e&&(!t._start&&q0(t)&&!(!t._initted&&Ll(t))||(t._ts<0||t._dp._ts<0)&&!Ll(t))?0:1,a=t._rDelay,l=0,c,h,d;if(a&&t._repeat&&(l=la(0,t._tDur,e),h=Xr(l,a),t._yoyo&&h&1&&(o=1-o),h!==Xr(t._tTime,a)&&(r=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==r||Sn||i||t._zTime===Le||!e&&t._zTime){if(!t._initted&&Up(t,e,i,n,l))return;for(d=t._zTime,t._zTime=e||(n?Le:0),n||(n=e&&!d),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Lu(t,e,n,!0),t._onUpdate&&!n&&ai(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&ai(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Fs(t,1),!n&&!Sn&&(ai(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},Z0=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},qr=function(t,e,n,i){var r=t._repeat,o=Ze(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=r?r<0?1e10:Ze(o*(r+1)+t._rDelay*r):o,a>0&&!i&&zl(t,t._tTime=t._tDur*a),t.parent&&Bl(t),n||ur(t.parent,t),t},xp=function(t){return t instanceof En?ur(t):qr(t,t._dur)},J0={_start:0,endTime:sa,totalDuration:sa},yi=function s(t,e,n){var i=t.labels,r=t._recent||J0,o=t.duration()>=Si?r.endTime(!1):t._dur,a,l,c;return ln(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?r._start:r.endTime(r._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?r:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(An(n)?n[0]:n).totalDuration()),a>1?s(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},ta=function(t,e,n){var i=ds(e[1]),r=(i?2:1)+(t<2?0:1),o=e[r],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ni(l.vars.inherit)&&l.parent;o.immediateRender=ni(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[r-1]}return new nn(e[0],o,e[r+1])},Bs=function(t,e){return t||t===0?e(t):e},la=function(t,e,n){return n<t?t:n>e?e:n},Mn=function(t,e){return!ln(t)||!(e=B0.exec(t))?"":e[1]},$0=function(t,e,n){return Bs(n,function(i){return la(t,e,i)})},Du=[].slice,Op=function(t,e){return t&&Zi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Zi(t[0]))&&!t.nodeType&&t!==qi},K0=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var r;return ln(i)&&!e||Op(i,1)?(r=n).push.apply(r,Mi(i)):n.push(i)})||n},Mi=function(t,e,n){return He&&!e&&He.selector?He.selector(t):ln(t)&&!n&&(Pu||!Yr())?Du.call((e||Vu).querySelectorAll(t),0):An(t)?K0(t,n):Op(t)?Du.call(t,0):t?[t]:[]},Nu=function(t){return t=Mi(t)[0]||ia("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Mi(e,n.querySelectorAll?n:n===t?ia("Invalid scope")||Vu.createElement("div"):t)}},Fp=function(t){return t.sort(function(){return .5-Math.random()})},Bp=function(t){if(je(t))return t;var e=Zi(t)?t:{each:t},n=fr(e.ease),i=e.from||0,r=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,d=i;return ln(i)?h=d={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],d=i[1]),function(u,f,p){var g=(p||e).length,m=o[g],_,v,S,y,T,E,x,b,P;if(!m){if(P=e.grid==="auto"?0:(e.grid||[1,Si])[1],!P){for(x=-Si;x<(x=p[P++].getBoundingClientRect().left)&&P<g;);P<g&&P--}for(m=o[g]=[],_=l?Math.min(P,g)*h-.5:i%P,v=P===Si?0:l?g*d/P-.5:i/P|0,x=0,b=Si,E=0;E<g;E++)S=E%P-_,y=v-(E/P|0),m[E]=T=c?Math.abs(c==="y"?y:S):bp(S*S+y*y),T>x&&(x=T),T<b&&(b=T);i==="random"&&Fp(m),m.max=x-b,m.min=b,m.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(P>g?g-1:c?c==="y"?g/P:P:Math.max(P,g/P))||0)*(i==="edges"?-1:1),m.b=g<0?r-g:r,m.u=Mn(e.amount||e.each)||0,n=n&&g<0?hx(n):n}return g=(m[u]-m.min)/m.max||0,Ze(m.b+(n?n(g):g)*m.v)+m.u}},Uu=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Ze(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(ds(n)?0:Mn(n))}},zp=function(t,e){var n=An(t),i,r;return!n&&Zi(t)&&(i=n=t.radius||Si,t.values?(t=Mi(t.values),(r=!ds(t[0]))&&(i*=i)):t=Uu(t.increment)),Bs(e,n?je(t)?function(o){return r=t(o),Math.abs(r-o)<=i?r:o}:function(o){for(var a=parseFloat(r?o.x:o),l=parseFloat(r?o.y:0),c=Si,h=0,d=t.length,u,f;d--;)r?(u=t[d].x-a,f=t[d].y-l,u=u*u+f*f):u=Math.abs(t[d]-a),u<c&&(c=u,h=d);return h=!i||c<=i?t[h]:o,r||h===o||ds(o)?h:h+Mn(o)}:Uu(t))},kp=function(t,e,n,i){return Bs(An(t)?!e:n===!0?!!(n=0):!i,function(){return An(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},Q0=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(r,o){return o(r)},i)}},j0=function(t,e){return function(n){return t(parseFloat(n))+(e||Mn(n))}},tx=function(t,e,n){return Gp(t,e,0,1,n)},Vp=function(t,e,n){return Bs(n,function(i){return t[~~e(i)]})},ex=function s(t,e,n){var i=e-t;return An(t)?Vp(t,s(0,t.length),e):Bs(n,function(r){return(i+(r-t)%i)%i+t})},nx=function s(t,e,n){var i=e-t,r=i*2;return An(t)?Vp(t,s(0,t.length-1),e):Bs(n,function(o){return o=(r+(o-t)%r)%r||0,t+(o>i?r-o:o)})},Zr=function(t){return t.replace(U0,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(O0);return kp(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Gp=function(t,e,n,i,r){var o=e-t,a=i-n;return Bs(r,function(l){return n+((l-t)/o*a||0)})},ix=function s(t,e,n,i){var r=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!r){var o=ln(t),a={},l,c,h,d,u;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(An(t)&&!An(e)){for(h=[],d=t.length,u=d-2,c=1;c<d;c++)h.push(s(t[c-1],t[c]));d--,r=function(p){p*=d;var g=Math.min(u,~~p);return h[g](p-g)},n=e}else i||(t=Wr(An(t)?[]:{},t));if(!h){for(l in e)Ju.call(a,t,l,"get",e[l]);r=function(p){return tf(p,a)||(o?t.p:t)}}}return Bs(n,r)},vp=function(t,e,n){var i=t.labels,r=Si,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&r>(a=Math.abs(a))&&(l=o,r=a);return l},ai=function(t,e,n){var i=t.vars,r=i[e],o=He,a=t._ctx,l,c,h;if(r)return l=i[e+"Params"],c=i.callbackScope||t,n&&Us.length&&Rl(),a&&(He=a),h=l?r.apply(c,l):r.call(c),He=o,h},Ko=function(t){return Fs(t),t.scrollTrigger&&t.scrollTrigger.kill(!!Sn),t.progress()<1&&ai(t,"onInterrupt"),t},Hr,Hp=[],Wp=function(t){if(t)if(t=!t.name&&t.default||t,Bu()||t.headless){var e=t.name,n=je(t),i=e&&!n&&t.init?function(){this._props=[]}:t,r={init:sa,render:tf,add:Ju,kill:yx,modifier:vx,rawVars:0},o={targetTest:0,get:0,getSetter:kl,aliases:{},register:0};if(Yr(),t!==i){if(ti[e])return;ci(i,ci(Pl(t,r),o)),Wr(i.prototype,Wr(r,Pl(t,o))),ti[i.prop=e]=i,t.targetTest&&(El.push(i),Gu[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Ap(e,i),t.register&&t.register(Cn,i,kn)}else Hp.push(t)},Fe=255,Qo={aqua:[0,Fe,Fe],lime:[0,Fe,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Fe],navy:[0,0,128],white:[Fe,Fe,Fe],olive:[128,128,0],yellow:[Fe,Fe,0],orange:[Fe,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Fe,0,0],pink:[Fe,192,203],cyan:[0,Fe,Fe],transparent:[Fe,Fe,Fe,0]},wu=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Fe+.5|0},Xp=function(t,e,n){var i=t?ds(t)?[t>>16,t>>8&Fe,t&Fe]:0:Qo.black,r,o,a,l,c,h,d,u,f,p;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),Qo[t])i=Qo[t];else if(t.charAt(0)==="#"){if(t.length<6&&(r=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+r+r+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Fe,i&Fe,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Fe,t&Fe]}else if(t.substr(0,3)==="hsl"){if(i=p=t.match(pp),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,r=h*2-o,i.length>3&&(i[3]*=1),i[0]=wu(l+1/3,r,o),i[1]=wu(l,r,o),i[2]=wu(l-1/3,r,o);else if(~t.indexOf("="))return i=t.match(zu),n&&i.length<4&&(i[3]=1),i}else i=t.match(pp)||Qo.transparent;i=i.map(Number)}return e&&!p&&(r=i[0]/Fe,o=i[1]/Fe,a=i[2]/Fe,d=Math.max(r,o,a),u=Math.min(r,o,a),h=(d+u)/2,d===u?l=c=0:(f=d-u,c=h>.5?f/(2-d-u):f/(d+u),l=d===r?(o-a)/f+(o<a?6:0):d===o?(a-r)/f+2:(r-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},qp=function(t){var e=[],n=[],i=-1;return t.split(fs).forEach(function(r){var o=r.match(pr)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},yp=function(t,e,n){var i="",r=(t+i).match(fs),o=e?"hsla(":"rgba(",a=0,l,c,h,d;if(!r)return t;if(r=r.map(function(u){return(u=Xp(u,e,1))&&o+(e?u[0]+","+u[1]+"%,"+u[2]+"%,"+u[3]:u.join(","))+")"}),n&&(h=qp(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(fs,"1").split(pr),d=c.length-1;a<d;a++)i+=c[a]+(~l.indexOf(a)?r.shift()||o+"0,0,0,0)":(h.length?h:r.length?r:n).shift());if(!c)for(c=t.split(fs),d=c.length-1;a<d;a++)i+=c[a]+r[a];return i+c[d]},fs=(function(){var s="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in Qo)s+="|"+t+"\\b";return new RegExp(s+")","gi")})(),sx=/hsl[a]?\(/,Yu=function(t){var e=t.join(" "),n;if(fs.lastIndex=0,fs.test(e))return n=sx.test(e),t[1]=yp(t[1],n),t[0]=yp(t[0],n,qp(t[1])),!0},ra,ei=(function(){var s=Date.now,t=500,e=33,n=s(),i=n,r=1e3/240,o=r,a=[],l,c,h,d,u,f,p=function g(m){var _=s()-i,v=m===!0,S,y,T,E;if((_>t||_<0)&&(n+=_-e),i+=_,T=i-n,S=T-o,(S>0||v)&&(E=++d.frame,u=T-d.time*1e3,d.time=T=T/1e3,o+=S+(S>=r?0:r-S),y=1),v||(l=c(g)),y)for(f=0;f<a.length;f++)a[f](T,u,E,m)};return d={time:0,frame:0,tick:function(){p(!0)},deltaRatio:function(m){return u/(1e3/(m||60))},wake:function(){Tp&&(!Pu&&Bu()&&(qi=Pu=window,Vu=qi.document||{},li.gsap=Cn,(qi.gsapVersions||(qi.gsapVersions=[])).push(Cn.version),Ep(Cl||qi.GreenSockGlobals||!qi.gsap&&qi||{}),Hp.forEach(Wp)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&d.sleep(),c=h||function(m){return setTimeout(m,o-d.time*1e3+1|0)},ra=1,p(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),ra=0,c=sa},lagSmoothing:function(m,_){t=m||1/0,e=Math.min(_||33,t)},fps:function(m){r=1e3/(m||240),o=d.time*1e3+r},add:function(m,_,v){var S=_?function(y,T,E,x){m(y,T,E,x),d.remove(S)}:m;return d.remove(m),a[v?"unshift":"push"](S),Yr(),S},remove:function(m,_){~(_=a.indexOf(m))&&a.splice(_,1)&&f>=_&&f--},_listeners:a},d})(),Yr=function(){return!ra&&ei.wake()},ve={},rx=/^[\d.\-M][\d.\-,\s]/,ox=/["']/g,ax=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],r=1,o=n.length,a,l,c;r<o;r++)l=n[r],a=r!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(ox,"").trim():+c,i=l.substr(a+1).trim();return e},lx=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},cx=function(t){var e=(t+"").split("("),n=ve[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[ax(e[1])]:lx(t).split(",").map(Pp)):ve._CE&&rx.test(t)?ve._CE("",t):n},hx=function(t){return function(e){return 1-t(1-e)}},fr=function(t,e){return t&&(je(t)?t:ve[t]||cx(t))||e},gr=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var r={easeIn:e,easeOut:n,easeInOut:i},o;return zn(t,function(a){ve[a]=li[a]=r,ve[o=a.toLowerCase()]=n;for(var l in r)ve[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ve[a+"."+l]=r[l]}),r},Yp=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},Tu=function s(t,e,n){var i=e>=1?e:1,r=(n||(t?.3:.45))/(e<1?e:1),o=r/Ru*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*N0((h-o)*r)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:Yp(a);return r=Ru/r,l.config=function(c,h){return s(t,c,h)},l},Eu=function s(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(r){return 1-n(1-r)}:Yp(n);return i.config=function(r){return s(t,r)},i};zn("Linear,Quad,Cubic,Quart,Quint,Strong",function(s,t){var e=t<5?t+1:t;gr(s+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});ve.Linear.easeNone=ve.none=ve.Linear.easeIn;gr("Elastic",Tu("in"),Tu("out"),Tu());(function(s,t){var e=1/t,n=2*e,i=2.5*e,r=function(a){return a<e?s*a*a:a<n?s*Math.pow(a-1.5/t,2)+.75:a<i?s*(a-=2.25/t)*a+.9375:s*Math.pow(a-2.625/t,2)+.984375};gr("Bounce",function(o){return 1-r(1-o)},r)})(7.5625,2.75);gr("Expo",function(s){return Math.pow(2,10*(s-1))*s+s*s*s*s*s*s*(1-s)});gr("Circ",function(s){return-(bp(1-s*s)-1)});gr("Sine",function(s){return s===1?1:-D0(s*I0)+1});gr("Back",Eu("in"),Eu("out"),Eu());ve.SteppedEase=ve.steps=li.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),r=e?1:0,o=1-Le;return function(a){return((i*la(0,o,a)|0)+r)*n}}};na.ease=ve["quad.out"];zn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(s){return Hu+=s+","+s+"Params,"});var Zu=function(t,e){this.id=L0++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Xu,this.set=e?e.getSetter:kl},oa=(function(){function s(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,qr(this,+e.duration,1,1),this.data=e.data,He&&(this._ctx=He,He.data.push(this)),ra||ei.wake()}var t=s.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,qr(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Yr(),!arguments.length)return this._tTime;var r=this._dp;if(r&&r.smoothChildTiming&&this._ts){for(zl(this,n),!r._dp||r.parent||Dp(r,this);r&&r.parent;)r.parent._time!==r._start+(r._ts>=0?r._tTime/r._ts:(r.totalDuration()-r._tTime)/-r._ts)&&r.totalTime(r._tTime,!0),r=r.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Yi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Le||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Rp(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+_p(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+_p(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var r=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*r,i):this._repeat?Xr(this._tTime,r)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Le?0:this._rts;if(this._rts===n)return this;var r=this.parent&&this._ts?Il(this.parent._time,this):this._tTime,o=this._rts<0;this._rts=+n||0,this._ts=this._ps||n===-Le?0:this._rts;var a=this.totalDuration();return(o!==this._rts<0||r>0&&r<a)&&this.totalTime(la(-Math.abs(this._delay),a,r),i!==!1),Bl(this),W0(this)},t.paused=function(n){if(!arguments.length)return this._ps;if(this._ps!==n)if(this._ps=n,n)this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0;else{Yr(),this._ts=this._rts;var i=this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,r=this.progress()===1&&Math.abs(this._zTime)!==Le,o;if(r)for(this._tTime-=Le,o=this._first;o;){if(!o._dur&&o._zTime<0&&o._ts&&o._start<=i+Le){r=!1;break}o=o._next}this.totalTime(i,r)}return this},t.startTime=function(n){if(arguments.length){this._start=Ze(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Yi(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(ni(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Il(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=k0);var i=Sn;return Sn=n,qu(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Sn=i,this},t.globalTime=function(n){for(var i=this,r=arguments.length?n:i.rawTime();i;)r=i._start+r/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):r},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,xp(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,xp(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(yi(this,n),ni(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,ni(i)),this._dur||(this._zTime=-Le),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Le:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Le,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,r;return!!(!n||this._ts&&this._initted&&n.isActive()&&(r=n.rawTime(!0))>=i&&r<this.endTime(!0)-Le)},t.eventCallback=function(n,i,r){var o=this.vars;return arguments.length>1?(i?(o[n]=i,r&&(o[n+"Params"]=r),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,r=i._prom;return new Promise(function(o){var a=je(n)?n:Ip,l=function(){var h=i.then;i.then=null,r&&r(),je(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){Ko(this)},s})();ci(oa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Le,_prom:0,_ps:!1,_rts:1});var En=(function(s){Mp(t,s);function t(n,i){var r;return n===void 0&&(n={}),r=s.call(this,n)||this,r.labels={},r.smoothChildTiming=!!n.smoothChildTiming,r.autoRemoveChildren=!!n.autoRemoveChildren,r._sort=ni(n.sortChildren),Je&&Yi(n.parent||Je,us(r),i),n.reversed&&r.reverse(),n.paused&&r.paused(!0),n.scrollTrigger&&Np(us(r),n.scrollTrigger),r}var e=t.prototype;return e.to=function(i,r,o){return ta(0,arguments,this),this},e.from=function(i,r,o){return ta(1,arguments,this),this},e.fromTo=function(i,r,o,a){return ta(2,arguments,this),this},e.set=function(i,r,o){return r.duration=0,r.parent=this,jo(r).repeatDelay||(r.repeat=0),r.immediateRender=!!r.immediateRender,new nn(i,r,yi(this,o),1),this},e.call=function(i,r,o){return Yi(this,nn.delayedCall(0,i,r),o)},e.staggerTo=function(i,r,o,a,l,c,h){return o.duration=r,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new nn(i,o,yi(this,l)),this},e.staggerFrom=function(i,r,o,a,l,c,h){return o.runBackwards=1,jo(o).immediateRender=ni(o.immediateRender),this.staggerTo(i,r,o,a,l,c,h)},e.staggerFromTo=function(i,r,o,a,l,c,h,d){return a.startAt=o,jo(a).immediateRender=ni(a.immediateRender),this.staggerTo(i,r,a,l,c,h,d)},e.render=function(i,r,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Ze(i),d=this._zTime<0!=i<0&&(this._initted||!c),u,f,p,g,m,_,v,S,y,T,E,x;if(this!==Je&&h>l&&i>=0&&(h=l),h!==this._tTime||o||d){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),u=h,y=this._start,S=this._ts,_=!S,d&&(c||(a=this._zTime),(i||!r)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,m=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,r,o);if(u=Ze(h%m),h===l?(g=this._repeat,u=c):(T=Ze(h/m),g=~~T,g&&g===T&&(u=c,g--),u>c&&(u=c)),T=Xr(this._tTime,m),!a&&this._tTime&&T!==g&&this._tTime-T*m-this._dur<=0&&(T=g),E&&g&1&&(u=c-u,x=1),g!==T&&!this._lock){var b=E&&T&1,P=b===(E&&g&1);if(g<T&&(b=!b),a=b?0:h%c?c:h,this._lock=1,this.render(a||(x?0:Ze(g*m)),r,!c)._lock=0,this._tTime=h,!r&&this.parent&&ai(this,"onRepeat"),this.vars.repeatRefresh&&!x&&(this.invalidate()._lock=1,T=g),a&&a!==this._time||_!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,P&&(this._lock=2,a=b?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!x&&this.invalidate()),this._lock=0,!this._ts&&!_)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=Z0(this,Ze(a),Ze(u)),v&&(h-=u-(u=v._start))),this._tTime=h,this._time=u,this._act=!!S,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!r&&!T&&(ai(this,"onStart"),this._tTime!==h))return this;if(u>=a&&i>=0)for(f=this._first;f;){if(p=f._next,(f._act||u>=f._start)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(u-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(u-f._start)*f._ts,r,o),u!==this._time||!this._ts&&!_){v=0,p&&(h+=this._zTime=-Le);break}}f=p}else{f=this._last;for(var C=i<0?i:u;f;){if(p=f._prev,(f._act||C<=f._end)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,r,o);if(f.render(f._ts>0?(C-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(C-f._start)*f._ts,r,o||Sn&&qu(f)),u!==this._time||!this._ts&&!_){v=0,p&&(h+=this._zTime=C?-Le:Le);break}}f=p}}if(v&&!r&&(this.pause(),v.render(u>=a?0:-Le)._zTime=u>=a?1:-1,this._ts))return this._start=y,Bl(this),this.render(i,r,o);this._onUpdate&&!r&&ai(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(y===this._start||Math.abs(S)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Fs(this,1),!r&&!(i<0&&!a)&&(h||a||!l)&&(ai(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,r){var o=this;if(ds(r)||(r=yi(this,r,i)),!(i instanceof oa)){if(An(i))return i.forEach(function(a){return o.add(a,r)}),this;if(ln(i))return this.addLabel(i,r);if(je(i))i=nn.delayedCall(0,i);else return this}return this!==i?Yi(this,i,r):this},e.getChildren=function(i,r,o,a){i===void 0&&(i=!0),r===void 0&&(r=!0),o===void 0&&(o=!0),a===void 0&&(a=-Si);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof nn?r&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,r,o)))),c=c._next;return l},e.getById=function(i){for(var r=this.getChildren(1,1,1),o=r.length;o--;)if(r[o].vars.id===i)return r[o]},e.remove=function(i){return ln(i)?this.removeLabel(i):je(i)?this.killTweensOf(i):(i.parent===this&&Fl(this,i),i===this._recent&&(this._recent=this._last),ur(this))},e.totalTime=function(i,r){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ze(ei.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),s.prototype.totalTime.call(this,i,r),this._forcing=0,this):this._tTime},e.addLabel=function(i,r){return this.labels[i]=yi(this,r),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,r,o){var a=nn.delayedCall(0,r||sa,o);return a.data="isPause",this._hasPause=1,Yi(this,a,yi(this,i))},e.removePause=function(i){var r=this._first;for(i=yi(this,i);r;)r._start===i&&r.data==="isPause"&&Fs(r),r=r._next},e.killTweensOf=function(i,r,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Ns!==a[l]&&a[l].kill(i,r);return this},e.getTweensOf=function(i,r){for(var o=[],a=Mi(i),l=this._first,c=ds(r),h;l;)l instanceof nn?V0(l._targets,a)&&(c?(!Ns||l._initted&&l._ts)&&l.globalTime(0)<=r&&l.globalTime(l.totalDuration())>r:!r||l.isActive())&&o.push(l):(h=l.getTweensOf(a,r)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,r){r=r||{};var o=this,a=yi(o,i),l=r,c=l.startAt,h=l.onStart,d=l.onStartParams,u=l.immediateRender,f,p=nn.to(o,ci({ease:r.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Le,onStart:function(){if(o.pause(),!f){var m=r.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());p._dur!==m&&qr(p,m,0,1).render(p._time,!0,!0),f=1}h&&h.apply(p,d||[])}},r));return u?p.render(0):p},e.tweenFromTo=function(i,r,o){return this.tweenTo(r,ci({startAt:{time:yi(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),vp(this,yi(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),vp(this,yi(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Le)},e.shiftChildren=function(i,r,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Ze(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(r)for(c in l)l[c]>=o&&(l[c]+=i);return ur(this)},e.invalidate=function(i){var r=this._first;for(this._lock=0;r;)r.invalidate(i),r=r._next;return s.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var r=this._first,o;r;)o=r._next,this.remove(r),r=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ur(this)},e.totalDuration=function(i){var r=0,o=this,a=o._last,l=Si,c,h,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(d=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Yi(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(r-=h,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=Ze(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>r&&a._ts&&(r=a._end),a=c;qr(o,o===Je&&o._time>r?o._time:r,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Je._ts&&(Rp(Je,Il(i,Je)),Cp=ei.frame),ei.frame>=mp){mp+=ii.autoSleep||120;var r=Je._first;if((!r||!r._ts)&&ii.autoSleep&&ei._listeners.length<2){for(;r&&!r._ts;)r=r._next;r||ei.sleep()}}},t})(oa);ci(En.prototype,{_lock:0,_hasPause:0,_forcing:0});var ux=function(t,e,n,i,r,o,a){var l=new kn(this._pt,t,e,0,1,ju,null,r),c=0,h=0,d,u,f,p,g,m,_,v;for(l.b=n,l.e=i,n+="",i+="",(_=~i.indexOf("random("))&&(i=Zr(i)),o&&(v=[n,i],o(v,t,e),n=v[0],i=v[1]),u=n.match(Mu)||[];d=Mu.exec(i);)p=d[0],g=i.substring(c,d.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),p!==u[h++]&&(m=parseFloat(u[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:m,c:p.charAt(1)==="="?mr(m,p)-m:parseFloat(p)-m,m:f&&f<4?Math.round:0},c=Mu.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(ku.test(i)||_)&&(l.e=0),this._pt=l,l},Ju=function(t,e,n,i,r,o,a,l,c,h){je(i)&&(i=i(r||0,t,o));var d=t[e],u=n!=="get"?n:je(d)?c?t[e.indexOf("set")||!je(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():d,f=je(d)?c?gx:Jp:Qu,p;if(ln(i)&&(~i.indexOf("random(")&&(i=Zr(i)),i.charAt(1)==="="&&(p=mr(u,i)+(Mn(u)||0),(p||p===0)&&(i=p))),!h||u!==i||Ou)return!isNaN(u*i)&&i!==""?(p=new kn(this._pt,t,e,+u||0,i-(u||0),typeof d=="boolean"?xx:$p,0,f),c&&(p.fp=c),a&&p.modifier(a,this,t),this._pt=p):(!d&&!(e in t)&&Ol(e,i),ux.call(this,t,e,u,i,f,l||ii.stringFilter,c))},fx=function(t,e,n,i,r){if(je(t)&&(t=ea(t,r,e,n,i)),!Zi(t)||t.style&&t.nodeType||An(t)||wp(t))return ln(t)?ea(t,r,e,n,i):t;var o={},a;for(a in t)o[a]=ea(t[a],r,e,n,i);return o},$u=function(t,e,n,i,r,o){var a,l,c,h;if(ti[t]&&(a=new ti[t]).init(r,a.rawVars?e[t]:fx(e[t],i,r,o,n),n,i,o)!==!1&&(n._pt=l=new kn(n._pt,r,t,0,1,a.render,a,0,a.priority),n!==Hr))for(c=n._ptLookup[n._targets.indexOf(r)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Ns,Ou,Ku=function s(t,e,n){var i=t.vars,r=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,d=i.yoyoEase,u=i.keyframes,f=i.autoRevert,p=t._dur,g=t._startAt,m=t._targets,_=t.parent,v=_&&_.data==="nested"?_.vars.targets:m,S=t._overwrite==="auto"&&!Fu,y=t.timeline,T=i.easeReverse||d,E,x,b,P,C,N,D,V,I,z,H,O,et;if(y&&(!u||!r)&&(r="none"),t._ease=fr(r,na.ease),t._rEase=T&&(fr(T)||t._ease),t._from=!y&&!!i.runBackwards,t._from&&(t.ratio=1),!y||u&&!i.stagger){if(V=m[0]?Os(m[0]).harness:0,O=V&&i[V.prop],E=Pl(i,Gu),g&&(g._zTime<0&&g.progress(1),e<0&&h&&a&&!f?g.render(-1,!0):g.revert(h&&p?Tl:z0),g._lazy=0),o){if(Fs(t._startAt=nn.set(m,ci({data:"isStart",overwrite:!1,parent:_,immediateRender:!0,lazy:!g&&ni(l),startAt:null,delay:0,onUpdate:c&&function(){return ai(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Sn||!a&&!f)&&t._startAt.revert(Tl),a&&p&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&p&&!g){if(e&&(a=!1),b=ci({overwrite:!1,data:"isFromStart",lazy:a&&!g&&ni(l),immediateRender:a,stagger:0,parent:_},E),O&&(b[V.prop]=O),Fs(t._startAt=nn.set(m,b)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(Sn?t._startAt.revert(Tl):t._startAt.render(-1,!0)),t._zTime=e,!a)s(t._startAt,Le,Le);else if(!e)return}for(t._pt=t._ptCache=0,l=p&&ni(l)||l&&!p,x=0;x<m.length;x++){if(C=m[x],D=C._gsap||Wu(m)[x]._gsap,t._ptLookup[x]=z={},Iu[D.id]&&Us.length&&Rl(),H=v===m?x:v.indexOf(C),V&&(I=new V).init(C,O||E,t,H,v)!==!1&&(t._pt=P=new kn(t._pt,C,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(W){z[W]=P}),I.priority&&(N=1)),!V||O)for(b in E)ti[b]&&(I=$u(b,E,t,H,C,v))?I.priority&&(N=1):z[b]=P=Ju.call(t,C,b,"get",E[b],H,v,0,i.stringFilter);t._op&&t._op[x]&&t.kill(C,t._op[x]),S&&t._pt&&(Ns=t,Je.killTweensOf(C,z,t.globalTime(e)),et=!t.parent,Ns=0),t._pt&&l&&(Iu[D.id]=1)}N&&ef(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!et,u&&e<=0&&y.render(Si,!0,!0)},dx=function(t,e,n,i,r,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,d,u,f;if(!c)for(c=t._ptCache[e]=[],u=t._ptLookup,f=t._targets.length;f--;){if(h=u[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Ou=1,t.vars[e]="+=0",Ku(t,a),Ou=0,l?ia(e+" not eligible for reset. Try splitting into individual properties"):1;c.push(h)}for(f=c.length;f--;)d=c[f],h=d._pt||d,h.s=(i||i===0)&&!r?i:h.s+(i||0)+o*h.c,h.c=n-h.s,d.e&&(d.e=tn(n)+Mn(d.e)),d.b&&(d.b=h.s+Mn(d.b))},px=function(t,e){var n=t[0]?Os(t[0]).harness:0,i=n&&n.aliases,r,o,a,l;if(!i)return e;r=Wr({},e);for(o in i)if(o in r)for(l=i[o].split(","),a=l.length;a--;)r[l[a]]=r[o];return r},mx=function(t,e,n,i){var r=e.ease||i||"power1.inOut",o,a;if(An(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:r})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:r})},ea=function(t,e,n,i,r){return je(t)?t.call(e,n,i,r):ln(t)&&~t.indexOf("random(")?Zr(t):t},Dl=Hu+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Zp={};zn(Dl+",id,stagger,delay,duration,paused,scrollTrigger",function(s){return Zp[s]=1});Dl=Dl.split(",");var nn=(function(s){Mp(t,s);function t(n,i,r,o){var a;typeof i=="number"&&(r.duration=i,i=r,r=null),a=s.call(this,o?i:jo(i))||this;var l=a.vars,c=l.duration,h=l.delay,d=l.immediateRender,u=l.stagger,f=l.overwrite,p=l.keyframes,g=l.defaults,m=l.scrollTrigger,_=i.parent||Je,v=(An(n)||wp(n)?ds(n[0]):"length"in i)?[n]:Mi(n),S,y,T,E,x,b,P,C;if(a._targets=v.length?Wu(v):ia("GSAP target "+n+" not found. https://gsap.com",!ii.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,p||u||wl(c)||wl(h)){i=a.vars;var N=i.easeReverse||i.yoyoEase;if(S=a.timeline=new En({data:"nested",defaults:g||{},targets:_&&_.data==="nested"?_.vars.targets:v}),S.kill(),S.parent=S._dp=us(a),S._start=0,u||wl(c)||wl(h)){if(E=v.length,P=u&&Bp(u),Zi(u))for(x in u)~Dl.indexOf(x)&&(C||(C={}),C[x]=u[x]);for(y=0;y<E;y++)T=Pl(i,Zp),T.stagger=0,N&&(T.easeReverse=N),C&&Wr(T,C),b=v[y],T.duration=+ea(c,us(a),y,b,v),T.delay=(+ea(h,us(a),y,b,v)||0)-a._delay,!u&&E===1&&T.delay&&(a._delay=h=T.delay,a._start+=h,T.delay=0),S.to(b,T,P?P(y,b,v):0),S._ease=ve.none;S.duration()?c=h=0:a.timeline=0}else if(p){jo(ci(S.vars.defaults,{ease:"none"})),S._ease=fr(p.ease||i.ease||"none");var D=0,V,I,z;if(An(p))p.forEach(function(H){return S.to(v,H,">")}),S.duration();else{T={};for(x in p)x==="ease"||x==="easeEach"||mx(x,p[x],T,p.easeEach);for(x in T)for(V=T[x].sort(function(H,O){return H.t-O.t}),D=0,y=0;y<V.length;y++)I=V[y],z={ease:I.e,duration:(I.t-(y?V[y-1].t:0))/100*c},z[x]=I.v,S.to(v,z,D),D+=z.duration;S.duration()<c&&S.to({},{duration:c-S.duration()})}}c||a.duration(c=S.duration())}else a.timeline=0;return f===!0&&!Fu&&(Ns=us(a),Je.killTweensOf(v),Ns=0),Yi(_,us(a),r),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(d||!c&&!p&&a._start===Ze(_._time)&&ni(d)&&X0(us(a))&&_.data!=="nested")&&(a._tTime=-Le,a.render(Math.max(0,-h)||0)),m&&Np(us(a),m),a}var e=t.prototype;return e.render=function(i,r,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,d=i>l-Le&&!h?l:i<Le?0:i,u,f,p,g,m,_,v,S;if(!c)Y0(this,i,r,o);else if(d!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(u=d,S=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,r,o);if(u=Ze(d%g),d===l?(p=this._repeat,u=c):(m=Ze(d/g),p=~~m,p&&p===m?(u=c,p--):u>c&&(u=c)),_=this._yoyo&&p&1,_&&(u=c-u),m=Xr(this._tTime,g),u===a&&!o&&this._initted&&p===m)return this._tTime=d,this;p!==m&&this.vars.repeatRefresh&&!_&&!this._lock&&u!==g&&this._initted&&(this._lock=o=1,this.render(Ze(g*p),!0).invalidate()._lock=0)}if(!this._initted){if(Up(this,h?i:u,o,r,d))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&p!==m))return this;if(c!==this._dur)return this.render(i,r,o)}if(this._rEase){var y=u<a;if(y!==this._inv){var T=y?a:c-a;this._inv=y,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=a,this._invRecip=T?(y?-1:1)/T:0,this._invScale=y?-this.ratio:1-this.ratio,this._invEase=y?this._rEase:this._ease}this.ratio=v=this._invRatio+this._invScale*this._invEase((u-this._invTime)*this._invRecip)}else this.ratio=v=this._ease(u/c);if(this._from&&(this.ratio=v=1-v),this._tTime=d,this._time=u,!this._act&&this._ts&&(this._act=1,this._lazy=0),!a&&d&&!r&&!m&&(ai(this,"onStart"),this._tTime!==d))return this;for(f=this._pt;f;)f.r(v,f.d),f=f._next;S&&S.render(i<0?i:S._dur*S._ease(u/this._dur),r,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!r&&(h&&Lu(this,i,r,o),ai(this,"onUpdate")),this._repeat&&p!==m&&this.vars.onRepeat&&!r&&this.parent&&ai(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(h&&!this._onUpdate&&Lu(this,i,!0,!0),(i||!c)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Fs(this,1),!r&&!(h&&!a)&&(d||a||_)&&(ai(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),s.prototype.invalidate.call(this,i)},e.resetTo=function(i,r,o,a,l){ra||ei.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Ku(this,c),h=this._ease(c/this._dur),dx(this,i,r,o,a,h,c,l)?this.resetTo(i,r,o,a,1):(zl(this,0),this.parent||Lp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,r){if(r===void 0&&(r="all"),!i&&(!r||r==="all"))return this._lazy=this._pt=0,this.parent?Ko(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Sn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,r,Ns&&Ns.vars.overwrite!==!0)._first||Ko(this),this.parent&&o!==this.timeline.totalDuration()&&qr(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Mi(i):a,c=this._ptLookup,h=this._pt,d,u,f,p,g,m,_;if((!r||r==="all")&&H0(a,l))return r==="all"&&(this._pt=0),Ko(this);for(d=this._op=this._op||[],r!=="all"&&(ln(r)&&(g={},zn(r,function(v){return g[v]=1}),r=g),r=px(a,r)),_=a.length;_--;)if(~l.indexOf(a[_])){u=c[_],r==="all"?(d[_]=r,p=u,f={}):(f=d[_]=d[_]||{},p=r);for(g in p)m=u&&u[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&Fl(this,m,"_pt"),delete u[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&h&&Ko(this),this},t.to=function(i,r){return new t(i,r,arguments[2])},t.from=function(i,r){return ta(1,arguments)},t.delayedCall=function(i,r,o,a){return new t(r,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:r,onReverseComplete:r,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,r,o){return ta(2,arguments)},t.set=function(i,r){return r.duration=0,r.repeatDelay||(r.repeat=0),new t(i,r)},t.killTweensOf=function(i,r,o){return Je.killTweensOf(i,r,o)},t})(oa);ci(nn.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});zn("staggerTo,staggerFrom,staggerFromTo",function(s){nn[s]=function(){var t=new En,e=Du.call(arguments,0);return e.splice(s==="staggerFromTo"?5:4,0,0),t[s].apply(t,e)}});var Qu=function(t,e,n){return t[e]=n},Jp=function(t,e,n){return t[e](n)},gx=function(t,e,n,i){return t[e](i.fp,n)},_x=function(t,e,n){return t.setAttribute(e,n)},kl=function(t,e){return je(t[e])?Jp:Ul(t[e])&&t.setAttribute?_x:Qu},$p=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},xx=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},ju=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},tf=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},vx=function(t,e,n,i){for(var r=this._pt,o;r;)o=r._next,r.p===i&&r.modifier(t,e,n),r=o},yx=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?Fl(this,e,"_pt"):e.dep||(n=1),e=i;return!n},Sx=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},ef=function(t){for(var e=t._pt,n,i,r,o;e;){for(n=e._next,i=r;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:r=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=r},kn=(function(){function s(e,n,i,r,o,a,l,c,h){this.t=n,this.s=r,this.c=o,this.p=i,this.r=a||$p,this.d=l||this,this.set=c||Qu,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=s.prototype;return t.modifier=function(n,i,r){this.mSet=this.mSet||this.set,this.set=Sx,this.m=n,this.mt=r,this.tween=i},s})();zn(Hu+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(s){return Gu[s]=1});li.TweenMax=li.TweenLite=nn;li.TimelineLite=li.TimelineMax=En;Je=new En({sortChildren:!1,defaults:na,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ii.stringFilter=Yu;var dr=[],Al={},Mx=[],Sp=0,bx=0,Au=function(t){return(Al[t]||Mx).map(function(e){return e()})},aa=function(){var t=Date.now(),e=[];t-Sp>2&&(Au("matchMediaInit"),dr.forEach(function(n){var i=n.queries,r=n.conditions,o,a,l,c;for(a in i)o=qi.matchMedia(i[a]).matches,o&&(l=1),o!==r[a]&&(r[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),Au("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Sp=t,Au("matchMedia"))},Kp=(function(){function s(e,n){this.selector=n&&Nu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=bx++,e&&this.add(e)}var t=s.prototype;return t.add=function(n,i,r){je(n)&&(r=i,i=n,n=je);var o=this,a=function(){var c=He,h=o.selector,d;return c&&c!==o&&c.data.push(o),r&&(o.selector=Nu(r)),He=o,d=i.apply(o,arguments),je(d)&&o._r.push(d),He=c,o.selector=h,o.isReverted=!1,d};return o.last=a,n===je?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=He;He=null,n(this),He=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof s?n.push.apply(n,i.getTweens()):i instanceof nn&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var r=this;if(n?(function(){for(var a=r.getTweens(),l=r.data.length,c;l--;)c=r.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,d){return d.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=r.data.length;l--;)c=r.data[l],c instanceof En?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof nn)&&c.revert&&c.revert(n);r._r.forEach(function(h){return h(n,r)}),r.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i){for(var o=dr.length;o--;)dr[o].id===this.id&&dr.splice(o,1);this._mqs&&this._mqs.forEach(function(a){return a.removeListener?a.removeListener(aa):a.removeEventListener("change",aa)}),this._mqs=null}},t.revert=function(n){this.kill(n||{})},s})(),wx=(function(){function s(e){this.contexts=[],this.scope=e,He&&He.data.push(this)}var t=s.prototype;return t.add=function(n,i,r){Zi(n)||(n={matches:n});var o=new Kp(0,r||this.scope),a=o.conditions={},l,c,h;He&&!o.selector&&(o.selector=He.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=qi.matchMedia(n[c]),l&&(dr.indexOf(o)<0&&dr.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(aa):l.addEventListener("change",aa),(o._mqs||(o._mqs=[])).push(l)));return h&&i(o,function(d){return o.add(null,d)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},s})(),Nl={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return Wp(i)})},timeline:function(t){return new En(t)},getTweensOf:function(t,e){return Je.getTweensOf(t,e)},getProperty:function(t,e,n,i){ln(t)&&(t=Mi(t)[0]);var r=Os(t||{}).get,o=n?Ip:Pp;return n==="native"&&(n=""),t&&(e?o((ti[e]&&ti[e].get||r)(t,e,n,i)):function(a,l,c){return o((ti[a]&&ti[a].get||r)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=Mi(t),t.length>1){var i=t.map(function(h){return Cn.quickSetter(h,e,n)}),r=i.length;return function(h){for(var d=r;d--;)i[d](h)}}t=t[0]||{};var o=ti[e],a=Os(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var d=new o;Hr._pt=0,d.init(t,n?h+n:h,Hr,0,[t]),d.render(1,d),Hr._pt&&tf(1,Hr)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,r=Cn.to(t,ci((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return r.resetTo(e,l,c,h)};return o.tween=r,o},isTweening:function(t){return Je.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=fr(t.ease,na.ease)),gp(na,t||{})},config:function(t){return gp(ii,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,r=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!ti[a]&&!li[a]&&ia(e+" effect requires "+a+" plugin.")}),bu[e]=function(a,l,c){return n(Mi(a),ci(l||{},r),c)},o&&(En.prototype[e]=function(a,l,c){return this.add(bu[e](a,Zi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){ve[t]=fr(e)},parseEase:function(t,e){return arguments.length?fr(t,e):ve},getById:function(t){return Je.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new En(t),i,r;for(n.smoothChildTiming=ni(t.smoothChildTiming),Je.remove(n),n._dp=0,n._time=n._tTime=Je._time,i=Je._first;i;)r=i._next,(e||!(!i._dur&&i instanceof nn&&i.vars.onComplete===i._targets[0]))&&Yi(n,i,i._start-i._delay),i=r;return Yi(Je,n,0),n},context:function(t,e){return t?new Kp(t,e):He},matchMedia:function(t){return new wx(t)},matchMediaRefresh:function(){return dr.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||aa()},addEventListener:function(t,e){var n=Al[t]||(Al[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Al[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:ex,wrapYoyo:nx,distribute:Bp,random:kp,snap:zp,normalize:tx,getUnit:Mn,clamp:$0,splitColor:Xp,toArray:Mi,selector:Nu,mapRange:Gp,pipe:Q0,unitize:j0,interpolate:ix,shuffle:Fp},install:Ep,effects:bu,ticker:ei,updateRoot:En.updateRoot,plugins:ti,globalTimeline:Je,core:{PropTween:kn,globals:Ap,Tween:nn,Timeline:En,Animation:oa,getCache:Os,_removeLinkedListItem:Fl,reverting:function(){return Sn},context:function(t){return t&&He&&(He.data.push(t),t._ctx=He),He},suppressOverwrites:function(t){return Fu=t}}};zn("to,from,fromTo,delayedCall,set,killTweensOf",function(s){return Nl[s]=nn[s]});ei.add(En.updateRoot);Hr=Nl.to({},{duration:0});var Tx=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Ex=function(t,e){var n=t._targets,i,r,o;for(i in e)for(r=n.length;r--;)o=t._ptLookup[r][i],o&&(o=o.d)&&(o._pt&&(o=Tx(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[r],i))},Cu=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,r,o){o._onInit=function(a){var l,c;if(ln(r)&&(l={},zn(r,function(h){return l[h]=1}),r=l),e){l={};for(c in r)l[c]=e(r[c]);r=l}Ex(a,r)}}}},Cn=Nl.registerPlugin({name:"attr",init:function(t,e,n,i,r){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,r,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)Sn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Cu("roundProps",Uu),Cu("modifiers"),Cu("snap",zp))||Nl;nn.version=En.version=Cn.version="3.15.1";Tp=1;Bu()&&Yr();var Ax=ve.Power0,Cx=ve.Power1,Rx=ve.Power2,Px=ve.Power3,Ix=ve.Power4,Lx=ve.Linear,Dx=ve.Quad,Nx=ve.Cubic,Ux=ve.Quart,Ox=ve.Quint,Fx=ve.Strong,Bx=ve.Elastic,zx=ve.Back,kx=ve.SteppedEase,Vx=ve.Bounce,Gx=ve.Sine,Hx=ve.Expo,Wx=ve.Circ;var Qp,zs,$r,lf,yr,Xx,jp,cf,qx=function(){return typeof window<"u"},ms={},vr=180/Math.PI,Kr=Math.PI/180,Jr=Math.atan2,tm=1e8,hf=/([A-Z])/g,Yx=/(left|right|width|margin|padding|x)/i,Zx=/[\s,\(]\S/,Ji={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},sf=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Jx=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},$x=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Kx=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Qx=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},lm=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},cm=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},jx=function(t,e,n){return t.style[e]=n},tv=function(t,e,n){return t.style.setProperty(e,n)},ev=function(t,e,n){return t._gsap[e]=n},nv=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},iv=function(t,e,n,i,r){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(r,o)},sv=function(t,e,n,i,r){var o=t._gsap;o[e]=n,o.renderTransform(r,o)},$e="transform",si=$e+"Origin",rv=function s(t,e){var n=this,i=this.target,r=i.style,o=i._gsap;if(t in ms&&r){if(this.tfm=this.tfm||{},t!=="transform")t=Ji[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=ps(i,a)}):this.tfm[t]=o.x?o[t]:ps(i,t),t===si&&(this.tfm.zOrigin=o.zOrigin);else return Ji.transform.split(",").forEach(function(a){return s.call(n,a,e)});if(this.props.indexOf($e)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(si,e,"")),t=$e}(r||e)&&this.props.push(t,e,r[t])},hm=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},ov=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,r,o;for(r=0;r<t.length;r+=3)t[r+1]?t[r+1]===2?e[t[r]](t[r+2]):e[t[r]]=t[r+2]:t[r+2]?n[t[r]]=t[r+2]:n.removeProperty(t[r].substr(0,2)==="--"?t[r]:t[r].replace(hf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),r=cf(),(!r||!r.isStart)&&!n[$e]&&(hm(n),i.zOrigin&&n[si]&&(n[si]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},um=function(t,e){var n={target:t,props:[],revert:ov,save:rv};return t._gsap||Cn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},fm,rf=function(t,e){var n=zs.createElementNS?zs.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):zs.createElement(t);return n&&n.style?n:zs.createElement(t)},hi=function s(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(hf,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&s(t,Qr(e)||e,1)||""},em="O,Moz,ms,Ms,Webkit".split(","),Qr=function(t,e,n){var i=e||yr,r=i.style,o=5;if(t in r&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(em[o]+t in r););return o<0?null:(o===3?"ms":o>=0?em[o]:"")+t},of=function(){qx()&&window.document&&(Qp=window,zs=Qp.document,$r=zs.documentElement,yr=rf("div")||{style:{}},Xx=rf("div"),$e=Qr($e),si=$e+"Origin",yr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",fm=!!Qr("perspective"),cf=Cn.core.reverting,lf=1)},nm=function(t){var e=t.ownerSVGElement,n=rf("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),r;i.style.display="block",n.appendChild(i),$r.appendChild(n);try{r=i.getBBox()}catch{}return n.removeChild(i),$r.removeChild(n),r},im=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},dm=function(t){var e,n;try{e=t.getBBox()}catch{e=nm(t),n=1}return e&&(e.width||e.height)||n||(e=nm(t)),e&&!e.width&&!e.x&&!e.y?{x:+im(t,["x","cx","x1"])||0,y:+im(t,["y","cy","y1"])||0,width:0,height:0}:e},pm=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&dm(t))},Vs=function(t,e){if(e){var n=t.style,i;e in ms&&e!==si&&(e=$e),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(hf,"-$1").toLowerCase())):n.removeAttribute(e)}},ks=function(t,e,n,i,r,o){var a=new kn(t._pt,e,n,0,1,o?cm:lm);return t._pt=a,a.b=i,a.e=r,t._props.push(n),a},sm={deg:1,rad:1,turn:1},av={grid:1,flex:1},Gs=function s(t,e,n,i){var r=parseFloat(n)||0,o=(n+"").trim().substr((r+"").length)||"px",a=yr.style,l=Yx.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),d=100,u=i==="px",f=i==="%",p,g,m,_;if(i===o||!r||sm[i]||sm[o])return r;if(o!=="px"&&!u&&(r=s(t,e,n,"px")),_=t.getCTM&&pm(t),(f||o==="%")&&(ms[e]||~e.indexOf("adius")))return p=_?t.getBBox()[l?"width":"height"]:t[h],tn(f?r/p*d:r/100*p);if(a[l?"width":"height"]=d+(u?o:i),g=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,_&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===zs||!g.appendChild)&&(g=zs.body),m=g._gsap,m&&f&&m.width&&l&&m.time===ei.time&&!m.uncache)return tn(r/m.width*d);if(f&&(e==="height"||e==="width")){var v=t.style[e];t.style[e]=d+i,p=t[h],v?t.style[e]=v:Vs(t,e)}else(f||o==="%")&&!av[hi(g,"display")]&&(a.position=hi(t,"position")),g===t&&(a.position="static"),g.appendChild(yr),p=yr[h],g.removeChild(yr),a.position="absolute";return l&&f&&(m=Os(g),m.time=ei.time,m.width=g[h]),tn(u?p*r/d:p&&r?d/p*r:0)},ps=function(t,e,n,i){var r;return lf||of(),e in Ji&&e!=="transform"&&(e=Ji[e],~e.indexOf(",")&&(e=e.split(",")[0])),ms[e]&&e!=="transform"?(r=ua(t,i),r=e!=="transformOrigin"?r[e]:r.svg?r.origin:Gl(hi(t,si))+" "+r.zOrigin+"px"):(r=t.style[e],(!r||r==="auto"||i||~(r+"").indexOf("calc("))&&(r=Vl[e]&&Vl[e](t,e,n)||hi(t,e)||Xu(t,e)||(e==="opacity"?1:0))),n&&!~(r+"").trim().indexOf(" ")?Gs(t,e,r,n)+n:r},lv=function(t,e,n,i){if(!n||n==="none"){var r=Qr(e,t,1),o=r&&hi(t,r,1);o&&o!==n?(e=r,n=o):e==="borderColor"&&(n=hi(t,"borderTopColor"))}var a=new kn(this._pt,t.style,e,0,1,ju),l=0,c=0,h,d,u,f,p,g,m,_,v,S,y,T;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=hi(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=t.style[e],t.style[e]=i,i=hi(t,e)||i,g?t.style[e]=g:Vs(t,e)),h=[n,i],Yu(h),n=h[0],i=h[1],u=n.match(pr)||[],T=i.match(pr)||[],T.length){for(;d=pr.exec(i);)m=d[0],v=i.substring(l,d.index),p?p=(p+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(p=1),m!==(g=u[c++]||"")&&(f=parseFloat(g)||0,y=g.substr((f+"").length),m.charAt(1)==="="&&(m=mr(f,m)+y),_=parseFloat(m),S=m.substr((_+"").length),l=pr.lastIndex-S.length,S||(S=S||ii.units[e]||y,l===i.length&&(i+=S,a.e+=S)),y!==S&&(f=Gs(t,e,g,S)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:f,c:_-f,m:p&&p<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?cm:lm;return ku.test(i)&&(a.e=0),this._pt=a,a},rm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},cv=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=rm[n]||n,e[1]=rm[i]||i,e.join(" ")},hv=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,r=e.u,o=n._gsap,a,l,c;if(r==="all"||r===!0)i.cssText="",l=1;else for(r=r.split(","),c=r.length;--c>-1;)a=r[c],ms[a]&&(l=1,a=a==="transformOrigin"?si:$e),Vs(n,a);l&&(Vs(n,$e),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",ua(n,1),o.uncache=1,hm(i)))}},Vl={clearProps:function(t,e,n,i,r){if(r.data!=="isFromStart"){var o=t._pt=new kn(t._pt,e,n,0,0,hv);return o.u=i,o.pr=-10,o.tween=r,t._props.push(n),1}}},ha=[1,0,0,1,0,0],mm={},gm=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},om=function(t){var e=hi(t,$e);return gm(e)?ha:e.substr(7).match(zu).map(tn)},uf=function(t,e){var n=t._gsap||Os(t),i=t.style,r=om(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,r=[l.a,l.b,l.c,l.d,l.e,l.f],r.join(",")==="1,0,0,1,0,0"?ha:r):(r===ha&&!t.offsetParent&&t!==$r&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,$r.appendChild(t)),r=om(t),l?i.display=l:Vs(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):$r.removeChild(t))),e&&r.length>6?[r[0],r[1],r[4],r[5],r[12],r[13]]:r)},af=function(t,e,n,i,r,o){var a=t._gsap,l=r||uf(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,d=a.xOffset||0,u=a.yOffset||0,f=l[0],p=l[1],g=l[2],m=l[3],_=l[4],v=l[5],S=e.split(" "),y=parseFloat(S[0])||0,T=parseFloat(S[1])||0,E,x,b,P;n?l!==ha&&(x=f*m-p*g)&&(b=y*(m/x)+T*(-g/x)+(g*v-m*_)/x,P=y*(-p/x)+T*(f/x)-(f*v-p*_)/x,y=b,T=P):(E=dm(t),y=E.x+(~S[0].indexOf("%")?y/100*E.width:y),T=E.y+(~(S[1]||S[0]).indexOf("%")?T/100*E.height:T)),i||i!==!1&&a.smooth?(_=y-c,v=T-h,a.xOffset=d+(_*f+v*g)-_,a.yOffset=u+(_*p+v*m)-v):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=T,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[si]="0px 0px",o&&(ks(o,a,"xOrigin",c,y),ks(o,a,"yOrigin",h,T),ks(o,a,"xOffset",d,a.xOffset),ks(o,a,"yOffset",u,a.yOffset)),t.setAttribute("data-svg-origin",y+" "+T)},ua=function(t,e){var n=t._gsap||new Zu(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,r=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=hi(t,si)||"0",h,d,u,f,p,g,m,_,v,S,y,T,E,x,b,P,C,N,D,V,I,z,H,O,et,W,A,Y,St,Dt,J,at;return h=d=u=g=m=_=v=S=y=0,f=p=1,n.svg=!!(t.getCTM&&pm(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[$e]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[$e]!=="none"?l[$e]:"")),i.scale=i.rotate=i.translate="none"),x=uf(t,n.svg),n.svg&&(n.uncache?(et=t.getBBox(),c=n.xOrigin-et.x+"px "+(n.yOrigin-et.y)+"px",O=""):O=!e&&t.getAttribute("data-svg-origin"),af(t,O||c,!!O||n.originIsAbsolute,n.smooth!==!1,x)),T=n.xOrigin||0,E=n.yOrigin||0,x!==ha&&(N=x[0],D=x[1],V=x[2],I=x[3],h=z=x[4],d=H=x[5],x.length===6?(f=Math.sqrt(N*N+D*D),p=Math.sqrt(I*I+V*V),g=N||D?Jr(D,N)*vr:0,v=V||I?Jr(V,I)*vr+g:0,v&&(p*=Math.abs(Math.cos(v*Kr))),n.svg&&(h-=T-(T*N+E*V),d-=E-(T*D+E*I))):(at=x[6],Dt=x[7],A=x[8],Y=x[9],St=x[10],J=x[11],h=x[12],d=x[13],u=x[14],b=Jr(at,St),m=b*vr,b&&(P=Math.cos(-b),C=Math.sin(-b),O=z*P+A*C,et=H*P+Y*C,W=at*P+St*C,A=z*-C+A*P,Y=H*-C+Y*P,St=at*-C+St*P,J=Dt*-C+J*P,z=O,H=et,at=W),b=Jr(-V,St),_=b*vr,b&&(P=Math.cos(-b),C=Math.sin(-b),O=N*P-A*C,et=D*P-Y*C,W=V*P-St*C,J=I*C+J*P,N=O,D=et,V=W),b=Jr(D,N),g=b*vr,b&&(P=Math.cos(b),C=Math.sin(b),O=N*P+D*C,et=z*P+H*C,D=D*P-N*C,H=H*P-z*C,N=O,z=et),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,_=180-_),f=tn(Math.sqrt(N*N+D*D+V*V)),p=tn(Math.sqrt(H*H+at*at)),b=Jr(z,H),v=Math.abs(b)>2e-4?b*vr:0,y=J?1/(J<0?-J:J):0),n.svg&&(O=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!gm(hi(t,$e)),O&&t.setAttribute("transform",O))),Math.abs(v)>90&&Math.abs(v)<270&&(r?(f*=-1,v+=g<=0?180:-180,g+=g<=0?180:-180):(p*=-1,v+=v<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=d-((n.yPercent=d&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-d)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=u+o,n.scaleX=tn(f),n.scaleY=tn(p),n.rotation=tn(g)+a,n.rotationX=tn(m)+a,n.rotationY=tn(_)+a,n.skewX=v+a,n.skewY=S+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[si]=Gl(c)),n.xOffset=n.yOffset=0,n.force3D=ii.force3D,n.renderTransform=n.svg?fv:fm?_m:uv,n.uncache=0,n},Gl=function(t){return(t=t.split(" "))[0]+" "+t[1]},nf=function(t,e,n){var i=Mn(e);return tn(parseFloat(e)+parseFloat(Gs(t,"x",n+"px",i)))+i},uv=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,_m(t,e)},_r="0deg",ca="0px",xr=") ",_m=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,d=n.rotationX,u=n.skewX,f=n.skewY,p=n.scaleX,g=n.scaleY,m=n.transformPerspective,_=n.force3D,v=n.target,S=n.zOrigin,y="",T=_==="auto"&&t&&t!==1||_===!0;if(S&&(d!==_r||h!==_r)){var E=parseFloat(h)*Kr,x=Math.sin(E),b=Math.cos(E),P;E=parseFloat(d)*Kr,P=Math.cos(E),o=nf(v,o,x*P*-S),a=nf(v,a,-Math.sin(E)*-S),l=nf(v,l,b*P*-S+S)}m!==ca&&(y+="perspective("+m+xr),(i||r)&&(y+="translate("+i+"%, "+r+"%) "),(T||o!==ca||a!==ca||l!==ca)&&(y+=l!==ca||T?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+xr),c!==_r&&(y+="rotate("+c+xr),h!==_r&&(y+="rotateY("+h+xr),d!==_r&&(y+="rotateX("+d+xr),(u!==_r||f!==_r)&&(y+="skew("+u+", "+f+xr),(p!==1||g!==1)&&(y+="scale("+p+", "+g+xr),v.style[$e]=y||"translate(0, 0)"},fv=function(t,e){var n=e||this,i=n.xPercent,r=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,d=n.scaleX,u=n.scaleY,f=n.target,p=n.xOrigin,g=n.yOrigin,m=n.xOffset,_=n.yOffset,v=n.forceCSS,S=parseFloat(o),y=parseFloat(a),T,E,x,b,P;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Kr,c*=Kr,T=Math.cos(l)*d,E=Math.sin(l)*d,x=Math.sin(l-c)*-u,b=Math.cos(l-c)*u,c&&(h*=Kr,P=Math.tan(c-h),P=Math.sqrt(1+P*P),x*=P,b*=P,h&&(P=Math.tan(h),P=Math.sqrt(1+P*P),T*=P,E*=P)),T=tn(T),E=tn(E),x=tn(x),b=tn(b)):(T=d,b=u,E=x=0),(S&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(S=Gs(f,"x",o,"px"),y=Gs(f,"y",a,"px")),(p||g||m||_)&&(S=tn(S+p-(p*T+g*x)+m),y=tn(y+g-(p*E+g*b)+_)),(i||r)&&(P=f.getBBox(),S=tn(S+i/100*P.width),y=tn(y+r/100*P.height)),P="matrix("+T+","+E+","+x+","+b+","+S+","+y+")",f.setAttribute("transform",P),v&&(f.style[$e]=P)},dv=function(t,e,n,i,r){var o=360,a=ln(r),l=parseFloat(r)*(a&&~r.indexOf("rad")?vr:1),c=l-i,h=i+c+"deg",d,u;return a&&(d=r.split("_")[1],d==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),d==="cw"&&c<0?c=(c+o*tm)%o-~~(c/o)*o:d==="ccw"&&c>0&&(c=(c-o*tm)%o-~~(c/o)*o)),t._pt=u=new kn(t._pt,e,n,i,c,Jx),u.e=h,u.u="deg",t._props.push(n),u},am=function(t,e){for(var n in e)t[n]=e[n];return t},pv=function(t,e,n){var i=am({},n._gsap),r="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,d,u,f,p;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[$e]=e,a=ua(n,1),Vs(n,$e),n.setAttribute("transform",c)):(c=getComputedStyle(n)[$e],o[$e]=e,a=ua(n,1),o[$e]=c);for(l in ms)c=i[l],h=a[l],c!==h&&r.indexOf(l)<0&&(f=Mn(c),p=Mn(h),d=f!==p?Gs(n,l,c,p):parseFloat(c),u=parseFloat(h),t._pt=new kn(t._pt,a,l,d,u-d,sf),t._pt.u=p||0,t._props.push(l));am(a,i)};zn("padding,margin,Width,Radius",function(s,t){var e="Top",n="Right",i="Bottom",r="Left",o=(t<3?[e,n,i,r]:[e+r,e+n,i+n,i+r]).map(function(a){return t<2?s+a:"border"+a+s});Vl[t>1?"border"+s:s]=function(a,l,c,h,d){var u,f;if(arguments.length<4)return u=o.map(function(p){return ps(a,p,c)}),f=u.join(" "),f.split(u[0]).length===5?u[0]:f;u=(h+"").split(" "),f={},o.forEach(function(p,g){return f[p]=u[g]=u[g]||u[(g-1)/2|0]}),a.init(l,f,d)}});var ff={name:"css",register:of,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,r){var o=this._props,a=t.style,l=n.vars.startAt,c,h,d,u,f,p,g,m,_,v,S,y,T,E,x,b,P;lf||of(),this.styles=this.styles||um(t),b=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(h=e[g],!(ti[g]&&$u(g,e,n,i,t,r)))){if(f=typeof h,p=Vl[g],f==="function"&&(h=h.call(n,i,t,r),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=Zr(h)),p)p(this,t,g,h,n)&&(x=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",fs.lastIndex=0,fs.test(c)||(m=Mn(c),_=Mn(h),_?m!==_&&(c=Gs(t,g,c,_)+_):m&&(h+=m)),this.add(a,"setProperty",c,h,i,r,0,0,g),o.push(g),b.push(g,0,a[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,r):l[g],ln(c)&&~c.indexOf("random(")&&(c=Zr(c)),Mn(c+"")||c==="auto"||(c+=ii.units[g]||Mn(ps(t,g))||""),(c+"").charAt(1)==="="&&(c=ps(t,g))):c=ps(t,g),u=parseFloat(c),v=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),v&&(h=h.substr(2)),d=parseFloat(h),g in Ji&&(g==="autoAlpha"&&(u===1&&ps(t,"visibility")==="hidden"&&d&&(u=0),b.push("visibility",0,a.visibility),ks(this,a,"visibility",u?"inherit":"hidden",d?"inherit":"hidden",!d)),g!=="scale"&&g!=="transform"&&(g=Ji[g],~g.indexOf(",")&&(g=g.split(",")[0]))),S=g in ms,S){if(this.styles.save(g),P=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=hi(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var C=t.style.perspective;t.style.perspective=h,h=hi(t,"perspective"),C?t.style.perspective=C:Vs(t,"perspective")}d=parseFloat(h)}if(y||(T=t._gsap,T.renderTransform&&!e.parseTransform||ua(t,e.parseTransform),E=e.smoothOrigin!==!1&&T.smooth,y=this._pt=new kn(this._pt,a,$e,0,1,T.renderTransform,T,0,-1),y.dep=1),g==="scale")this._pt=new kn(this._pt,T,"scaleY",T.scaleY,(v?mr(T.scaleY,v+d):d)-T.scaleY||0,sf),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){b.push(si,0,a[si]),h=cv(h),T.svg?af(t,h,0,E,0,this):(_=parseFloat(h.split(" ")[2])||0,_!==T.zOrigin&&ks(this,T,"zOrigin",T.zOrigin,_),ks(this,a,g,Gl(c),Gl(h)));continue}else if(g==="svgOrigin"){af(t,h,1,E,0,this);continue}else if(g in mm){dv(this,T,g,u,v?mr(u,v+h):h);continue}else if(g==="smoothOrigin"){ks(this,T,"smooth",T.smooth,h);continue}else if(g==="force3D"){T[g]=h;continue}else if(g==="transform"){pv(this,h,t);continue}}else g in a||(g=Qr(g)||g);if(S||(d||d===0)&&(u||u===0)&&!Zx.test(h)&&g in a)m=(c+"").substr((u+"").length),d||(d=0),_=Mn(h)||(g in ii.units?ii.units[g]:m),m!==_&&(u=Gs(t,g,c,_)),this._pt=new kn(this._pt,S?T:a,g,u,(v?mr(u,v+d):d)-u,!S&&(_==="px"||g==="zIndex")&&e.autoRound!==!1?Qx:sf),this._pt.u=_||0,S&&P!==h?(this._pt.b=c,this._pt.e=P,this._pt.r=Kx):m!==_&&_!=="%"&&(this._pt.b=c,this._pt.r=$x);else if(g in a)lv.call(this,t,g,c,v?v+h:h);else if(g in t)this.add(t,g,c||t[g],v?v+h:h,i,r);else if(g!=="parseTransform"){Ol(g,h);continue}S||(g in a?b.push(g,0,a[g]):typeof t[g]=="function"?b.push(g,2,t[g]()):b.push(g,1,c||t[g])),o.push(g)}}x&&ef(this)},render:function(t,e){if(e.tween._time||!cf())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:ps,aliases:Ji,getSetter:function(t,e,n){var i=Ji[e];return i&&i.indexOf(",")<0&&(e=i),e in ms&&e!==si&&(t._gsap.x||ps(t,"x"))?n&&jp===n?e==="scale"?nv:ev:(jp=n||{})&&(e==="scale"?iv:sv):t.style&&!Ul(t.style[e])?jx:~e.indexOf("-")?tv:kl(t,e)},core:{_removeProperty:Vs,_getMatrix:uf}};Cn.utils.checkPrefix=Qr;Cn.core.getStyleSaver=um;(function(s,t,e,n){var i=zn(s+","+t+","+e,function(r){ms[r]=1});zn(t,function(r){ii.units[r]="deg",mm[r]=1}),Ji[i[13]]=s+","+t,zn(n,function(r){var o=r.split(":");Ji[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");zn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(s){ii.units[s]="px"});Cn.registerPlugin(ff);var $i=Cn.registerPlugin(ff)||Cn,PT=$i.core.Tween;function xm(s,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(s,n.key,n)}}function mv(s,t,e){return t&&xm(s.prototype,t),e&&xm(s,e),s}var bn,Xl,gv,ri,Hs,Ws,to,ym,Sr,eo,Sm,gs,Di,Mm,bm=function(){return bn||typeof window<"u"&&(bn=window.gsap)&&bn.registerPlugin&&bn},wm=1,jr=[],ie=[],Ni=[],da=Date.now,df=function(t,e){return e},_v=function(){var t=eo.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,ie),i.push.apply(i,Ni),ie=n,Ni=i,df=function(o,a){return e[o](a)}},xs=function(t,e){return~Ni.indexOf(t)&&Ni[Ni.indexOf(t)+1][e]},pa=function(t){return!!~Sm.indexOf(t)},Gn=function(t,e,n,i,r){return t.addEventListener(e,n,{passive:i!==!1,capture:!!r})},Vn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Hl="scrollLeft",Wl="scrollTop",pf=function(){return gs&&gs.isPressed||ie.cache++},ql=function(t,e){var n=function i(r){if(r||r===0){wm&&ri.history.scrollRestoration!=="manual"&&(ri.history.scrollRestoration="manual");var o=gs&&gs.isPressed;r=i.v=Math.round(r)||(gs&&gs.iOS?1:0),t(r),i.cacheID=ie.cache,o&&df("ss",r)}else(e||ie.cache!==i.cacheID||df("ref"))&&(i.cacheID=ie.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},Rn={s:Hl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:ql(function(s){return arguments.length?ri.scrollTo(s,sn.sc()):ri.pageXOffset||Hs[Hl]||Ws[Hl]||to[Hl]||0})},sn={s:Wl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Rn,sc:ql(function(s){return arguments.length?ri.scrollTo(Rn.sc(),s):ri.pageYOffset||Hs[Wl]||Ws[Wl]||to[Wl]||0})},Hn=function(t,e){return(e&&e._ctx&&e._ctx.selector||bn.utils.toArray)(t)[0]||(typeof t=="string"&&bn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},xv=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},_s=function(t,e){var n=e.s,i=e.sc;pa(t)&&(t=Hs.scrollingElement||Ws);var r=ie.indexOf(t),o=i===sn.sc?1:2;!~r&&(r=ie.push(t)-1),ie[r+o]||Gn(t,"scroll",pf);var a=ie[r+o],l=a||(ie[r+o]=ql(xs(t,n),!0)||(pa(t)?i:ql(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=bn.getProperty(t,"scrollBehavior")==="smooth"),l},Yl=function(t,e,n){var i=t,r=t,o=da(),a=o,l=e||50,c=Math.max(500,l*3),h=function(p,g){var m=da();g||m-o>l?(r=i,i=p,a=o,o=m):n?i+=p:i=r+(p-r)/(m-a)*(o-a)},d=function(){r=i=n?0:i,a=o=0},u=function(p){var g=a,m=r,_=da();return(p||p===0)&&p!==i&&h(p),o===a||_-a>c?0:(i+(n?m:-m))/((n?_:o)-g)*1e3};return{update:h,reset:d,getVelocity:u}},fa=function(t,e){return e&&!t._gsapAllow&&t.cancelable!==!1&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},vm=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},Tm=function(){eo=bn.core.globals().ScrollTrigger,eo&&eo.core&&_v()},Em=function(t){return bn=t||bm(),!Xl&&bn&&typeof document<"u"&&document.body&&(ri=window,Hs=document,Ws=Hs.documentElement,to=Hs.body,Sm=[ri,Hs,Ws,to],gv=bn.utils.clamp,Mm=bn.core.context||function(){},Sr="onpointerenter"in to?"pointer":"mouse",ym=en.isTouch=ri.matchMedia&&ri.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in ri||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Di=en.eventTypes=("ontouchstart"in Ws?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Ws?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return wm=0},500),Xl=1),eo||Tm(),Xl};Rn.op=sn;ie.cache=0;var en=(function(){function s(e){this.init(e)}var t=s.prototype;return t.init=function(n){Xl||Em(bn)||console.warn("Please gsap.registerPlugin(Observer)"),eo||Tm();var i=n.tolerance,r=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,d=n.onStop,u=n.onStopDelay,f=n.ignore,p=n.wheelSpeed,g=n.event,m=n.onDragStart,_=n.onDragEnd,v=n.onDrag,S=n.onPress,y=n.onRelease,T=n.onRight,E=n.onLeft,x=n.onUp,b=n.onDown,P=n.onChangeX,C=n.onChangeY,N=n.onChange,D=n.onToggleX,V=n.onToggleY,I=n.onHover,z=n.onHoverEnd,H=n.onMove,O=n.ignoreCheck,et=n.isNormalizer,W=n.onGestureStart,A=n.onGestureEnd,Y=n.onWheel,St=n.onEnable,Dt=n.onDisable,J=n.onClick,at=n.scrollSpeed,ut=n.capture,Et=n.allowClicks,yt=n.lockAxis,Bt=n.onLockAxis;this.target=a=Hn(a)||Ws,this.vars=n,f&&(f=bn.utils.toArray(f)),i=i||1e-9,r=r||0,p=p||1,at=at||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(ri.getComputedStyle(to).lineHeight)||22);var Me,Lt,Yt,Ut,kt,ce,pe,$=this,ee=0,We=0,Te=n.passive||!h&&n.passive!==!1,he=_s(a,Rn),ke=_s(a,sn),Ve=he(),F=ke(),_e=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Di[0]==="pointerdown",xe=pa(a),Wt=a.ownerDocument||Hs,gt=[0,0,0],re=[0,0,0],Nt=0,Ht=function(){return Nt=da()},R=function(xt,tt){return($.event=xt)&&f&&xv(xt.target,f)||tt&&_e&&xt.pointerType!=="touch"||O&&O(xt,tt)},M=function(){$._vx.reset(),$._vy.reset(),Lt.pause(),d&&d($)},G=function(){var xt=$.deltaX=vm(gt),tt=$.deltaY=vm(re),st=Math.abs(xt)>=i,vt=Math.abs(tt)>=i;N&&(st||vt)&&N($,xt,tt,gt,re),st&&(T&&$.deltaX>0&&T($),E&&$.deltaX<0&&E($),P&&P($),D&&$.deltaX<0!=ee<0&&D($),ee=$.deltaX,gt[0]=gt[1]=gt[2]=0),vt&&(b&&$.deltaY>0&&b($),x&&$.deltaY<0&&x($),C&&C($),V&&$.deltaY<0!=We<0&&V($),We=$.deltaY,re[0]=re[1]=re[2]=0),(Ut||Yt)&&(H&&H($),Yt&&(m&&Yt===1&&m($),v&&v($),Yt=0),Ut=!1),ce&&!(ce=!1)&&Bt&&Bt($),kt&&(Y($),kt=!1),Me=0},lt=function(xt,tt,st){gt[st]+=xt,re[st]+=tt,$._vx.update(xt),$._vy.update(tt),c?Me||(Me=requestAnimationFrame(G)):G()},rt=function(xt,tt){yt&&!pe&&($.axis=pe=Math.abs(xt)>Math.abs(tt)?"x":"y",ce=!0),pe!=="y"&&(gt[2]+=xt,$._vx.update(xt,!0)),pe!=="x"&&(re[2]+=tt,$._vy.update(tt,!0)),c?Me||(Me=requestAnimationFrame(G)):G()},pt=function(xt){if(!R(xt,1)){xt=fa(xt,h);var tt=xt.clientX,st=xt.clientY,vt=tt-$.x,Q=st-$.y,At=$.isDragging;$.x=tt,$.y=st,(At||(vt||Q)&&(Math.abs($.startX-tt)>=r||Math.abs($.startY-st)>=r))&&(Yt||(Yt=At?2:1),At||($.isDragging=!0),rt(vt,Q))}},Mt=$.onPress=function(ht){R(ht,1)||ht&&ht.button||($.axis=pe=null,Lt.pause(),$.isPressed=!0,ht=fa(ht),ee=We=0,$.startX=$.x=ht.clientX,$.startY=$.y=ht.clientY,$._vx.reset(),$._vy.reset(),Gn(et?a:Wt,Di[1],pt,Te,!0),$.deltaX=$.deltaY=0,S&&S($))},X=$.onRelease=function(ht){if(!R(ht,1)){Vn(et?a:Wt,Di[1],pt,!0);var xt=!isNaN($.y-$.startY),tt=$.isDragging,st=tt&&(Math.abs($.x-$.startX)>3||Math.abs($.y-$.startY)>3),vt=fa(ht);!st&&xt&&($._vx.reset(),$._vy.reset(),h&&Et&&bn.delayedCall(.08,function(){if(da()-Nt>300&&!ht.defaultPrevented){if(ht.target.click)ht.target.click();else if(Wt.createEvent){var Q=Wt.createEvent("MouseEvents");Q.initMouseEvent("click",!0,!0,ri,1,vt.screenX,vt.screenY,vt.clientX,vt.clientY,!1,!1,!1,!1,0,null),ht.target.dispatchEvent(Q)}}})),$.isDragging=$.isGesturing=$.isPressed=!1,d&&tt&&!et&&Lt.restart(!0),Yt&&G(),_&&tt&&_($),y&&y($,st)}},nt=function(xt){return xt.touches&&xt.touches.length>1&&($.isGesturing=!0)&&W(xt,$.isDragging)},dt=function(){return($.isGesturing=!1)||A($)},L=function(xt){if(!R(xt)){var tt=he(),st=ke();lt((tt-Ve)*at,(st-F)*at,1),Ve=tt,F=st,d&&Lt.restart(!0)}},j=function(xt){if(!R(xt)){xt=fa(xt,h),Y&&(kt=!0);var tt=(xt.deltaMode===1?l:xt.deltaMode===2?ri.innerHeight:1)*p;lt(xt.deltaX*tt,xt.deltaY*tt,0),d&&!et&&Lt.restart(!0)}},K=function(xt){if(!R(xt)){var tt=xt.clientX,st=xt.clientY,vt=tt-$.x,Q=st-$.y;$.x=tt,$.y=st,Ut=!0,d&&Lt.restart(!0),(vt||Q)&&rt(vt,Q)}},mt=function(xt){$.event=xt,I($)},ct=function(xt){$.event=xt,z($)},_t=function(xt){return R(xt)||fa(xt,h)&&J($)};Lt=$._dc=bn.delayedCall(u||.25,M).pause(),$.deltaX=$.deltaY=0,$._vx=Yl(0,50,!0),$._vy=Yl(0,50,!0),$.scrollX=he,$.scrollY=ke,$.isDragging=$.isGesturing=$.isPressed=!1,Mm(this),$.enable=function(ht){return $.isEnabled||(Gn(xe?Wt:a,"scroll",pf),o.indexOf("scroll")>=0&&Gn(xe?Wt:a,"scroll",L,Te,ut),o.indexOf("wheel")>=0&&Gn(a,"wheel",j,Te,ut),(o.indexOf("touch")>=0&&ym||o.indexOf("pointer")>=0)&&(Gn(a,Di[0],Mt,Te,ut),Gn(Wt,Di[2],X),Gn(Wt,Di[3],X),Et&&Gn(a,"click",Ht,!0,!0),J&&Gn(a,"click",_t),W&&Gn(Wt,"gesturestart",nt),A&&Gn(Wt,"gestureend",dt),I&&Gn(a,Sr+"enter",mt),z&&Gn(a,Sr+"leave",ct),H&&Gn(a,Sr+"move",K)),$.isEnabled=!0,$.isDragging=$.isGesturing=$.isPressed=Ut=Yt=!1,$._vx.reset(),$._vy.reset(),Ve=he(),F=ke(),ht&&ht.type&&Mt(ht),St&&St($)),$},$.disable=function(){$.isEnabled&&(jr.filter(function(ht){return ht!==$&&pa(ht.target)}).length||Vn(xe?Wt:a,"scroll",pf),$.isPressed&&($._vx.reset(),$._vy.reset(),Vn(et?a:Wt,Di[1],pt,!0)),Vn(xe?Wt:a,"scroll",L,ut),Vn(a,"wheel",j,ut),Vn(a,Di[0],Mt,ut),Vn(Wt,Di[2],X),Vn(Wt,Di[3],X),Vn(a,"click",Ht,!0),Vn(a,"click",_t),Vn(Wt,"gesturestart",nt),Vn(Wt,"gestureend",dt),Vn(a,Sr+"enter",mt),Vn(a,Sr+"leave",ct),Vn(a,Sr+"move",K),$.isEnabled=$.isPressed=$.isDragging=!1,Dt&&Dt($))},$.kill=$.revert=function(){$.disable();var ht=jr.indexOf($);ht>=0&&jr.splice(ht,1),gs===$&&(gs=0)},jr.push($),et&&pa(a)&&(gs=$),$.enable(g)},mv(s,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),s})();en.version="3.15.1";en.create=function(s){return new en(s)};en.register=Em;en.getAll=function(){return jr.slice()};en.getById=function(s){return jr.filter(function(t){return t.vars.id===s})[0]};bm()&&bn.registerPlugin(en);var Ft,ro,le,Re,di,Ae,Cf,cc,Aa,Sa,ga,Zl,Pn,fc,Sf,Xn,Am,Cm,oo,Wm,mf,Xm,Wn,Mf,qm,Ym,Xs,bf,Rf,ao,Pf,qs,wf,gf,Jl=1,In=Date.now,_f=In(),Ti=0,_a=0,Rm=function(t,e,n){var i=fi(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},Pm=function(t,e){return e&&(!fi(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},vv=function s(){return _a&&requestAnimationFrame(s)},Im=function(){return fc=1},Lm=function(){return fc=0},Ki=function(t){return t},xa=function(t){return Math.round(t*1e5)/1e5||0},Zm=function(){return typeof window<"u"},Jm=function(){return Ft||Zm()&&(Ft=window.gsap)&&Ft.registerPlugin&&Ft},Ar=function(t){return!!~Cf.indexOf(t)},$m=function(t){return(t==="Height"?Pf:le["inner"+t])||di["client"+t]||Ae["client"+t]},Km=function(t){return xs(t,"getBoundingClientRect")||(Ar(t)?function(){return lc.width=le.innerWidth,lc.height=Pf,lc}:function(){return vs(t)})},yv=function(t,e,n){var i=n.d,r=n.d2,o=n.a;return(o=xs(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?$m(r):t["client"+r])||0}},Sv=function(t,e){return!e||~Ni.indexOf(t)?Km(t):function(){return lc}},Qi=function(t,e){var n=e.s,i=e.d2,r=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=xs(t,n))?o()-Km(t)()[r]:Ar(t)?(di[n]||Ae[n])-$m(i):t[n]-t["offset"+i])},$l=function(t,e){for(var n=0;n<oo.length;n+=3)(!e||~e.indexOf(oo[n+1]))&&t(oo[n],oo[n+1],oo[n+2])},fi=function(t){return typeof t=="string"},Ln=function(t){return typeof t=="function"},va=function(t){return typeof t=="number"},Mr=function(t){return typeof t=="object"},ma=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},no=function(t,e,n){if(t.enabled){var i=t._ctx?t._ctx.add(function(){return e(t,n)}):e(t,n);i&&i.totalTime&&(t.callbackAnimation=i)}},io=Math.abs,Qm="left",jm="top",If="right",Lf="bottom",wr="width",Tr="height",Ma="Right",ba="Left",wa="Top",Ta="Bottom",rn="padding",bi="margin",co="Width",Df="Height",cn="px",wi=function(t){return le.getComputedStyle(t.nodeType===Node.DOCUMENT_NODE?t.scrollingElement:t)},Mv=function(t){var e=wi(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Dm=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},vs=function(t,e){var n=e&&wi(t)[Sf]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ft.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect?t.getBoundingClientRect():t.scrollingElement.getBoundingClientRect();return n&&n.progress(0).kill(),i},hc=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},tg=function(t){var e=[],n=t.labels,i=t.duration(),r;for(r in n)e.push(n[r]/i);return e},bv=function(t){return function(e){return Ft.utils.snap(tg(t),e)}},Nf=function(t){var e=Ft.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,r){return i-r});return n?function(i,r,o){o===void 0&&(o=.001);var a;if(!r)return e(i);if(r>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,r,o){o===void 0&&(o=.001);var a=e(i);return!r||Math.abs(a-i)<o||a-i<0==r<0?a:e(r<0?i-t:i+t)}},wv=function(t){return function(e,n){return Nf(tg(t))(e,n.direction)}},Kl=function(t,e,n,i){return n.split(",").forEach(function(r){return t(e,r,i)})},mn=function(t,e,n,i,r){return t.addEventListener(e,n,{passive:!i,capture:!!r})},pn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Ql=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},Nm={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},jl={toggleActions:"play",anticipatePin:0},uc={top:0,left:0,center:.5,bottom:1,right:1},sc=function(t,e){if(fi(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in uc?uc[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},tc=function(t,e,n,i,r,o,a,l){var c=r.startColor,h=r.endColor,d=r.fontSize,u=r.indent,f=r.fontWeight,p=Re.createElement("div"),g=Ar(n)||xs(n,"pinType")==="fixed",m=t.indexOf("scroller")!==-1,_=g?Ae:n.tagName==="IFRAME"?n.contentDocument.body:n,v=t.indexOf("start")!==-1,S=v?c:h,y="border-color:"+S+";font-size:"+d+";color:"+S+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((m||l)&&g?"fixed;":"absolute;"),(m||l||!g)&&(y+=(i===sn?If:Lf)+":"+(o+parseFloat(u))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),p._isStart=v,p.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),p.style.cssText=y,p.innerText=e||e===0?t+"-"+e:t,_.children[0]?_.insertBefore(p,_.children[0]):_.appendChild(p),p._offset=p["offset"+i.op.d2],rc(p,0,i,v),p},rc=function(t,e,n,i){var r={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,r[n.a+"Percent"]=i?-100:0,r[n.a]=i?"1px":0,r["border"+o+co]=1,r["border"+a+co]=0,r[n.p]=e+"px",Ft.set(t,r)},ae=[],Tf={},Ca,Um=function(){return In()-Ti>34&&(Ca||(Ca=requestAnimationFrame(ys)))},so=function(){(!Wn||!Wn.isPressed||Wn.startX>Ae.clientWidth)&&(ie.cache++,Wn?Ca||(Ca=requestAnimationFrame(ys)):ys(),Ti||Rr("scrollStart"),Ti=In())},xf=function(){Ym=le.innerWidth,qm=le.innerHeight},ya=function(t){ie.cache++,(t===!0||!Pn&&!Xm&&!Re.fullscreenElement&&!Re.webkitFullscreenElement&&(!Mf||Ym!==le.innerWidth||Math.abs(le.innerHeight-qm)>le.innerHeight*.25))&&cc.restart(!0)},Cr={},Tv=[],eg=function s(){return pn(jt,"scrollEnd",s)||br(!0)},Rr=function(t){return Cr[t]&&Cr[t].map(function(e){return e()})||Tv},ui=[],ng=function(t){for(var e=0;e<ui.length;e+=5)(!t||ui[e+4]&&ui[e+4].query===t)&&(ui[e].style.cssText=ui[e+1],ui[e].getBBox&&ui[e].setAttribute("transform",ui[e+2]||""),ui[e+3].uncache=1)},ig=function(){ie.cache++,ie.forEach(function(t){return Ln(t)&&(t.rec=t())})},Uf=function(t,e){var n;for(Xn=0;Xn<ae.length;Xn++)n=ae[Xn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));qs=!0,e&&ng(e),e||Rr("revert")},sg=function(t,e){ie.cache++,(e||!qn)&&ie.forEach(function(n){return Ln(n)&&n.cacheID++&&(n.rec=0)}),fi(t)&&(Rf=t,le.history.scrollRestoration!==t&&(le.history.scrollRestoration=t))},qn,Er=0,Om,Ev=function(){if(Om!==Er){var t=Om=Er;requestAnimationFrame(function(){return t===Er&&br(!0)})}},rg=function(){Ae.appendChild(ao),Pf=!Wn&&ao.offsetHeight||le.innerHeight,Ae.removeChild(ao)},Fm=function(t){return Aa(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},br=function(t,e){if(di=Re.documentElement,Ae=Re.body,Cf=[le,Re,di,Ae],Ti&&!t&&!qs){mn(jt,"scrollEnd",eg);return}rg(),qn=jt.isRefreshing=!0,qs||ig();var n=Rr("refreshInit");Wm&&jt.sort(),e||Uf(),ie.forEach(function(i){Ln(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),ae.slice(0).forEach(function(i){return i.refresh()}),qs=!1,ae.forEach(function(i){if(i._subPinOffset&&i.pin){var r=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[r];i.revert(!0,1),i.adjustPinSpacing(i.pin[r]-o),i.refresh()}}),wf=1,Fm(!0),ae.forEach(function(i){var r=Qi(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>r,a=i._startClamp&&i.start>=r;(o||a)&&i.setPositions(a?r-1:i.start,o?Math.max(a?r:i.start+1,r):i.end,!0)}),Fm(!1),wf=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ie.forEach(function(i){Ln(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),sg(Rf,1),cc.pause(),Er++,qn=2,ys(2),ae.forEach(function(i){return Ln(i.vars.onRefresh)&&i.vars.onRefresh(i)}),qn=jt.isRefreshing=!1,Rr("refresh")},Ef=0,oc=1,Ea,ys=function(t){if(t===2||!qn&&!qs){jt.isUpdating=!0,Ea&&Ea.update(0);var e=ae.length,n=In(),i=n-_f>=50,r=e&&ae[0].scroll();if(oc=Ef>r?-1:1,qn||(Ef=r),i&&(Ti&&!fc&&n-Ti>200&&(Ti=0,Rr("scrollEnd")),ga=_f,_f=n),oc<0){for(Xn=e;Xn-- >0;)ae[Xn]&&ae[Xn].update(0,i);oc=1}else for(Xn=0;Xn<e;Xn++)ae[Xn]&&ae[Xn].update(0,i);jt.isUpdating=!1}Ca=0},Af=[Qm,jm,Lf,If,bi+Ta,bi+Ma,bi+wa,bi+ba,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],ac=Af.concat([wr,Tr,"boxSizing","max"+co,"max"+Df,"position",bi,rn,rn+wa,rn+Ma,rn+Ta,rn+ba]),Av=function(t,e,n){lo(n);var i=t._gsap;if(i.spacerIsNative)lo(i.spacerState);else if(t._gsap.swappedIn){var r=e.parentNode;r&&(r.insertBefore(t,e),r.removeChild(e))}t._gsap.swappedIn=!1},vf=function(t,e,n,i){if(!t._gsap.swappedIn){for(var r=Af.length,o=e.style,a=t.style,l;r--;)l=Af[r],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Lf]=a[If]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[wr]=hc(t,Rn)+cn,o[Tr]=hc(t,sn)+cn,o[rn]=a[bi]=a[jm]=a[Qm]="0",lo(i),a[wr]=a["max"+co]=n[wr],a[Tr]=a["max"+Df]=n[Tr],a[rn]=n[rn],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},Cv=/([A-Z])/g,lo=function(t){if(t){var e=t.t.style,n=t.length,i=0,r,o;for((t.t._gsap||Ft.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],r=t[i],o?e[r]=o:e[r]&&e.removeProperty(r.replace(Cv,"-$1").toLowerCase())}},ec=function(t){for(var e=ac.length,n=t.style,i=[],r=0;r<e;r++)i.push(ac[r],n[ac[r]]);return i.t=t,i},Rv=function(t,e,n){for(var i=[],r=t.length,o=n?8:0,a;o<r;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},lc={left:0,top:0},Bm=function(t,e,n,i,r,o,a,l,c,h,d,u,f,p){Ln(t)&&(t=t(l)),fi(t)&&t.substr(0,3)==="max"&&(t=u+(t.charAt(4)==="="?sc("0"+t.substr(3),n):0));var g=f?f.time():0,m,_,v;if(f&&f.seek(0),isNaN(t)||(t=+t),va(t))f&&(t=Ft.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,u,t)),a&&rc(a,n,i,!0);else{Ln(e)&&(e=e(l));var S=(t||"0").split(" "),y,T,E,x;v=Hn(e,l)||Ae,y=vs(v)||{},(!y||!y.left&&!y.top)&&wi(v).display==="none"&&(x=v.style.display,v.style.display="block",y=vs(v),x?v.style.display=x:v.style.removeProperty("display")),T=sc(S[0],y[i.d]),E=sc(S[1]||"0",n),t=y[i.p]-c[i.p]-h+T+r-E,a&&rc(a,E,i,n-E<20||a._isStart&&E>20),n-=n-E}if(p&&(l[p]=t||-.001,t<0&&(t=0)),o){var b=t+n,P=o._isStart;m="scroll"+i.d2,rc(o,b,i,P&&b>20||!P&&(d?Math.max(Ae[m],di[m]):o.parentNode[m])<=b+1),d&&(c=vs(a),d&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+cn))}return f&&v&&(m=vs(v),f.seek(u),_=vs(v),f._caScrollDist=m[i.p]-_[i.p],t=t/f._caScrollDist*u),f&&f.seek(g),f?t:Math.round(t)},Pv=/(webkit|moz|length|cssText|inset)/i,zm=function(t,e,n,i){if(t.parentNode!==e){var r=t.style,o,a;if(e===Ae){t._stOrig=r.cssText,a=wi(t);for(o in a)!+o&&!Pv.test(o)&&a[o]&&typeof r[o]=="string"&&o!=="0"&&(r[o]=a[o]);r.top=n,r.left=i}else r.cssText=t._stOrig;Ft.core.getCache(t).uncache=1,e.appendChild(t)}},og=function(t,e,n){var i=e,r=i;return function(o){var a=Math.round(t());return a!==i&&a!==r&&Math.abs(a-i)>3&&Math.abs(a-r)>3&&(o=a,n&&n()),r=i,i=Math.round(o),i}},nc=function(t,e,n){var i={};i[e.p]="+="+n,Ft.set(t,i)},km=function(t,e){var n=_s(t,e),i="_scroll"+e.p2,r=function o(a,l,c,h,d){var u=o.tween,f=l.onComplete,p={};c=c||n();var g=og(n,c,function(){u.kill(),o.tween=0});return d=h&&d||0,h=h||a-c,u&&u.kill(),l[i]=a,l.inherit=!1,l.modifiers=p,p[i]=function(){return g(c+h*u.ratio+d*u.ratio*u.ratio)},l.onUpdate=function(){ie.cache++,o.tween&&ys()},l.onComplete=function(){o.tween=0,f&&f.call(u)},u=o.tween=Ft.to(t,l),u};return t[i]=n,n.wheelHandler=function(){return r.tween&&r.tween.kill()&&(r.tween=0)},mn(t,"wheel",n.wheelHandler),jt.isTouch&&mn(t,"touchmove",n.wheelHandler),r},jt=(function(){function s(e,n){ro||s.register(Ft)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),bf(this),this.init(e,n)}var t=s.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!_a){this.update=this.refresh=this.kill=Ki;return}n=Dm(fi(n)||va(n)||n.nodeType?{trigger:n}:n,jl);var r=n,o=r.onUpdate,a=r.toggleClass,l=r.id,c=r.onToggle,h=r.onRefresh,d=r.scrub,u=r.trigger,f=r.pin,p=r.pinSpacing,g=r.invalidateOnRefresh,m=r.anticipatePin,_=r.onScrubComplete,v=r.onSnapComplete,S=r.once,y=r.snap,T=r.pinReparent,E=r.pinSpacer,x=r.containerAnimation,b=r.fastScrollEnd,P=r.preventOverlaps,C=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Rn:sn,N=!d&&d!==0,D=Hn(n.scroller||le),V=Ft.core.getCache(D),I=Ar(D),z=("pinType"in n?n.pinType:xs(D,"pinType")||I&&"fixed")==="fixed",H=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],O=N&&n.toggleActions.split(" "),et="markers"in n?n.markers:jl.markers,W=I?0:parseFloat(wi(D)["border"+C.p2+co])||0,A=this,Y=n.onRefreshInit&&function(){return n.onRefreshInit(A)},St=yv(D,I,C),Dt=Sv(D,I),J=0,at=0,ut=0,Et=_s(D,C),yt,Bt,Me,Lt,Yt,Ut,kt,ce,pe,$,ee,We,Te,he,ke,Ve,F,_e,xe,Wt,gt,re,Nt,Ht,R,M,G,lt,rt,pt,Mt,X,nt,dt,L,j,K,mt,ct;if(A._startClamp=A._endClamp=!1,A._dir=C,m*=45,A.scroller=D,A.scroll=x?x.time.bind(x):Et,Lt=Et(),qs&&Et.rec==null&&(Et.rec=Lt),A.vars=n,i=i||n.animation,"refreshPriority"in n&&(Wm=1,n.refreshPriority===-9999&&(Ea=A)),V.tweenScroll=V.tweenScroll||{top:km(D,sn),left:km(D,Rn)},A.tweenTo=yt=V.tweenScroll[C.p],A.scrubDuration=function(st){nt=va(st)&&st,nt?X?X.duration(st):X=Ft.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:nt,paused:!0,onComplete:function(){return _&&_(A)}}):(X&&X.progress(1).kill(),X=0)},i&&(i.vars.lazy=!1,i._initted&&!A.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),A.animation=i.pause(),i.scrollTrigger=A,A.scrubDuration(d),pt=0,l||(l=i.vars.id)),y&&((!Mr(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in Ae.style&&Ft.set(I?[Ae,di]:D,{scrollBehavior:"auto"}),ie.forEach(function(st){return Ln(st)&&st.target===(I?Re.scrollingElement||di:D)&&(st.smooth=!1)}),Me=Ln(y.snapTo)?y.snapTo:y.snapTo==="labels"?bv(i):y.snapTo==="labelsDirectional"?wv(i):y.directional!==!1?function(st,vt){return Nf(y.snapTo)(st,In()-at<500?0:vt.direction)}:Ft.utils.snap(y.snapTo),dt=y.duration||{min:.1,max:2},dt=Mr(dt)?Sa(dt.min,dt.max):Sa(dt,dt),L=Ft.delayedCall(y.delay||nt/2||.1,function(){var st=Et(),vt=In()-at<500,Q=yt.tween;if((vt||Math.abs(A.getVelocity())<10)&&!Q&&!fc&&J!==st){var At=(st-Ut)/he,ne=i&&!N?i.totalProgress():At,Jt=vt?0:(ne-Mt)/(In()-ga)*1e3||0,Pe=Ft.utils.clamp(-At,1-At,io(Jt/2)*Jt/.185),Xe=At+(y.inertia===!1?0:Pe),Ne,be,ye=y,qe=ye.onStart,Ee=ye.onInterrupt,it=ye.onComplete;if(Ne=Me(Xe,A),va(Ne)||(Ne=Xe),be=Math.max(0,Math.round(Ut+Ne*he)),st<=kt&&st>=Ut&&be!==st){if(Q&&!Q._initted&&Q.data<=io(be-st))return;y.inertia===!1&&(Pe=Ne-At),yt(be,{duration:dt(io(Math.max(io(Xe-ne),io(Ne-ne))*.185/Jt/.05||0)),ease:y.ease||"power3",data:io(be-st),onInterrupt:function(){return L.restart(!0)&&Ee&&no(A,Ee)},onComplete:function(){A.update(),J=Et(),i&&!N&&(X?X.resetTo("totalProgress",Ne,i._tTime/i._tDur):i.progress(Ne)),pt=Mt=i&&!N?i.totalProgress():A.progress,v&&v(A),it&&no(A,it)}},st,Pe*he,be-st-Pe*he),qe&&no(A,qe,yt.tween)}}else A.isActive&&J!==st&&L.restart(!0)}).pause()),l&&(Tf[l]=A),u=A.trigger=Hn(u||f!==!0&&f),ct=u&&u._gsap&&u._gsap.stRevert,ct&&(ct=ct(A)),f=f===!0?u:Hn(f),fi(a)&&(a={targets:u,className:a}),f&&(p===!1||p===bi||(p=!p&&f.parentNode&&f.parentNode.style&&wi(f.parentNode).display==="flex"?!1:rn),A.pin=f,Bt=Ft.core.getCache(f),Bt.spacer?ke=Bt.pinState:(E&&(E=Hn(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),Bt.spacerIsNative=!!E,E&&(Bt.spacerState=ec(E))),Bt.spacer=_e=E||Re.createElement("div"),_e.classList.add("pin-spacer"),l&&_e.classList.add("pin-spacer-"+l),Bt.pinState=ke=ec(f)),n.force3D!==!1&&Ft.set(f,{force3D:!0}),A.spacer=_e=Bt.spacer,rt=wi(f),Ht=rt[p+C.os2],Wt=Ft.getProperty(f),gt=Ft.quickSetter(f,C.a,cn),vf(f,_e,rt),F=ec(f)),et){We=Mr(et)?Dm(et,Nm):Nm,$=tc("scroller-start",l,D,C,We,0),ee=tc("scroller-end",l,D,C,We,0,$),xe=$["offset"+C.op.d2];var _t=Hn(xs(D,"content")||D);ce=this.markerStart=tc("start",l,_t,C,We,xe,0,x),pe=this.markerEnd=tc("end",l,_t,C,We,xe,0,x),x&&(mt=Ft.quickSetter([ce,pe],C.a,cn)),!z&&!(Ni.length&&xs(D,"fixedMarkers")===!0)&&(Mv(I?Ae:D),Ft.set([$,ee],{force3D:!0}),M=Ft.quickSetter($,C.a,cn),lt=Ft.quickSetter(ee,C.a,cn))}if(x){var ht=x.vars.onUpdate,xt=x.vars.onUpdateParams;x.eventCallback("onUpdate",function(){A.update(0,0,1),ht&&ht.apply(x,xt||[])})}if(A.previous=function(){return ae[ae.indexOf(A)-1]},A.next=function(){return ae[ae.indexOf(A)+1]},A.revert=function(st,vt){if(!vt)return A.kill(!0);var Q=st!==!1||!A.enabled,At=Pn;Q!==A.isReverted&&(Q&&(j=Math.max(Et(),A.scroll.rec||0),ut=A.progress,K=i&&i.progress()),ce&&[ce,pe,$,ee].forEach(function(ne){return ne.style.display=Q?"none":"block"}),Q&&(Pn=A,A.update(Q)),f&&(!T||!A.isActive)&&(Q?Av(f,_e,ke):vf(f,_e,wi(f),R)),Q||A.update(Q),Pn=At,A.isReverted=Q)},A.refresh=function(st,vt,Q,At){if(!((Pn||!A.enabled)&&!vt)){if(f&&st&&Ti){mn(s,"scrollEnd",eg);return}!qn&&Y&&Y(A),Pn=A,yt.tween&&!Q&&(yt.tween.kill(),yt.tween=0),X&&X.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(k){return k.vars.immediateRender&&k.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),A.isReverted||A.revert(!0,!0),A._subPinOffset=!1;var ne=St(),Jt=Dt(),Pe=x?x.duration():Qi(D,C),Xe=he<=.01||!he,Ne=0,be=At||0,ye=Mr(Q)?Q.end:n.end,qe=n.endTrigger||u,Ee=Mr(Q)?Q.start:n.start||(n.start===0||!u?0:f?"0 0":"0 100%"),it=A.pinnedContainer=n.pinnedContainer&&Hn(n.pinnedContainer,A),ot=u&&Math.max(0,ae.indexOf(A))||0,bt=ot,Pt,Vt,Qt,Be,me,oe,Ue,jn,Fn,fn,w,U,Z;for(et&&Mr(Q)&&(U=Ft.getProperty($,C.p),Z=Ft.getProperty(ee,C.p));bt-- >0;)oe=ae[bt],oe.end||oe.refresh(0,1)||(Pn=A),Ue=oe.pin,Ue&&(Ue===u||Ue===f||Ue===it)&&!oe.isReverted&&(fn||(fn=[]),fn.unshift(oe),oe.revert(!0,!0)),oe!==ae[bt]&&(ot--,bt--);for(Ln(Ee)&&(Ee=Ee(A)),Ee=Rm(Ee,"start",A),Ut=Bm(Ee,u,ne,C,Et(),ce,$,A,Jt,W,z,Pe,x,A._startClamp&&"_startClamp")||(f?-.001:0),Ln(ye)&&(ye=ye(A)),fi(ye)&&!ye.indexOf("+=")&&(~ye.indexOf(" ")?ye=(fi(Ee)?Ee.split(" ")[0]:"")+ye:(Ne=sc(ye.substr(2),ne),ye=fi(Ee)?Ee:(x?Ft.utils.mapRange(0,x.duration(),x.scrollTrigger.start,x.scrollTrigger.end,Ut):Ut)+Ne,qe=u)),ye=Rm(ye,"end",A),kt=Math.max(Ut,Bm(ye||(qe?"100% 0":Pe),qe,ne,C,Et()+Ne,pe,ee,A,Jt,W,z,Pe,x,A._endClamp&&"_endClamp"))||-.001,Ne=0,bt=ot;bt--;)oe=ae[bt]||{},Ue=oe.pin,Ue&&oe.start-oe._pinPush<=Ut&&!x&&oe.end>0&&(Pt=oe.end-(A._startClamp?Math.max(0,oe.start):oe.start),(Ue===u&&oe.start-oe._pinPush<Ut||Ue===it)&&isNaN(Ee)&&(Ne+=Pt*(1-oe.progress)),Ue===f&&(be+=Pt));if(Ut+=Ne,kt+=Ne,A._startClamp&&(A._startClamp+=Ne),A._endClamp&&!qn&&(A._endClamp=kt||-.001,kt=Math.min(kt,Qi(D,C))),he=kt-Ut||(Ut-=.01)&&.001,Xe&&(ut=Ft.utils.clamp(0,1,Ft.utils.normalize(Ut,kt,j))),A._pinPush=be,ce&&Ne&&(Pt={},Pt[C.a]="+="+Ne,it&&(Pt[C.p]="-="+Et()),Ft.set([ce,pe],Pt)),f&&!(wf&&A.end>=Qi(D,C)))Pt=wi(f),Be=C===sn,Qt=Et(),re=parseFloat(Wt(C.a))+be,!Pe&&kt>1&&(w=(I?Re.scrollingElement||di:D).style,w={style:w,value:w["overflow"+C.a.toUpperCase()]},I&&wi(Ae)["overflow"+C.a.toUpperCase()]!=="scroll"&&(w.style["overflow"+C.a.toUpperCase()]="scroll")),vf(f,_e,Pt),F=ec(f),Vt=vs(f,!0),jn=z&&_s(D,Be?Rn:sn)(),p?(R=[p+C.os2,he+be+cn],R.t=_e,bt=p===rn?hc(f,C)+he+be:0,bt&&(R.push(C.d,bt+cn),_e.style.flexBasis!=="auto"&&(_e.style.flexBasis=bt+cn)),lo(R),it&&ae.forEach(function(k){k.pin===it&&k.vars.pinSpacing!==!1&&(k._subPinOffset=!0)}),z&&Et(j)):(bt=hc(f,C),bt&&_e.style.flexBasis!=="auto"&&(_e.style.flexBasis=bt+cn)),z&&(me={top:Vt.top+(Be?Qt-Ut:jn)+cn,left:Vt.left+(Be?jn:Qt-Ut)+cn,boxSizing:"border-box",position:"fixed"},me[wr]=me["max"+co]=Math.ceil(Vt.width)+cn,me[Tr]=me["max"+Df]=Math.ceil(Vt.height)+cn,me[bi]=me[bi+wa]=me[bi+Ma]=me[bi+Ta]=me[bi+ba]="0",me[rn]=Pt[rn],me[rn+wa]=Pt[rn+wa],me[rn+Ma]=Pt[rn+Ma],me[rn+Ta]=Pt[rn+Ta],me[rn+ba]=Pt[rn+ba],Ve=Rv(ke,me,T),qn&&Et(0)),i?(Fn=i._initted,mf(1),i.render(i.duration(),!0,!0),Nt=Wt(C.a)-re+he+be,G=Math.abs(he-Nt)>1,z&&G&&Ve.splice(Ve.length-2,2),i.render(0,!0,!0),Fn||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),mf(0)):Nt=he,w&&(w.value?w.style["overflow"+C.a.toUpperCase()]=w.value:w.style.removeProperty("overflow-"+C.a));else if(u&&Et()&&!x)for(Vt=u.parentNode;Vt&&Vt!==Ae;)Vt._pinOffset&&(Ut-=Vt._pinOffset,kt-=Vt._pinOffset),Vt=Vt.parentNode;fn&&fn.forEach(function(k){return k.revert(!1,!0)}),A.start=Ut,A.end=kt,Lt=Yt=qn?j:Et(),!x&&!qn&&!qs&&(Lt<j&&Et(j),A.scroll.rec=0),A.revert(!1,!0),at=In(),L&&(J=-1,L.restart(!0)),Pn=0,i&&N&&(i._initted||K)&&i.progress()!==K&&i.progress(K||0,!0).render(i.time(),!0,!0),(Xe||ut!==A.progress||x||g||i&&!i._initted)&&(i&&!N&&(i._initted||ut||i.vars.immediateRender!==!1)&&i.totalProgress(x&&Ut<-.001&&!ut?Ft.utils.normalize(Ut,kt,0):ut,!0),A.progress=Xe||(Lt-Ut)/he===ut?0:ut),f&&p&&(_e._pinOffset=Math.round(A.progress*Nt)),X&&X.invalidate(),isNaN(U)||(U-=Ft.getProperty($,C.p),Z-=Ft.getProperty(ee,C.p),nc($,C,U),nc(ce,C,U-(At||0)),nc(ee,C,Z),nc(pe,C,Z-(At||0))),Xe&&!qn&&A.update(),h&&!qn&&!Te&&(Te=!0,h(A),Te=!1)}},A.getVelocity=function(){return(Et()-Yt)/(In()-ga)*1e3||0},A.endAnimation=function(){ma(A.callbackAnimation),i&&(X?X.progress(1):i.paused()?N||ma(i,A.direction<0,1):ma(i,i.reversed()))},A.labelToScroll=function(st){return i&&i.labels&&(Ut||A.refresh()||Ut)+i.labels[st]/i.duration()*he||0},A.getTrailing=function(st){var vt=ae.indexOf(A),Q=A.direction>0?ae.slice(0,vt).reverse():ae.slice(vt+1);return(fi(st)?Q.filter(function(At){return At.vars.preventOverlaps===st}):Q).filter(function(At){return A.direction>0?At.end<=Ut:At.start>=kt})},A.update=function(st,vt,Q){if(!(x&&!Q&&!st)){var At=qn===!0?j:A.scroll(),ne=st?0:(At-Ut)/he,Jt=ne<0?0:ne>1?1:ne||0,Pe=A.progress,Xe,Ne,be,ye,qe,Ee,it,ot;if(vt&&(Yt=Lt,Lt=x?Et():At,y&&(Mt=pt,pt=i&&!N?i.totalProgress():Jt)),m&&f&&!Pn&&!Jl&&Ti&&(!Jt&&Ut<At+(At-Yt)/(In()-ga)*m?Jt=1e-4:Jt===1&&kt>At+(At-Yt)/(In()-ga)*m&&(Jt=.9999)),Jt!==Pe&&A.enabled){if(Xe=A.isActive=!!Jt&&Jt<1,Ne=!!Pe&&Pe<1,Ee=Xe!==Ne,qe=Ee||!!Jt!=!!Pe,A.direction=Jt>Pe?1:-1,A.progress=Jt,qe&&!Pn&&(be=Jt&&!Pe?0:Jt===1?1:Pe===1?2:3,N&&(ye=!Ee&&O[be+1]!=="none"&&O[be+1]||O[be],ot=i&&(ye==="complete"||ye==="reset"||ye in i))),P&&(Ee||ot)&&(ot||d||!i)&&(Ln(P)?P(A):A.getTrailing(P).forEach(function(Qt){return Qt.endAnimation()})),N||(X&&!Pn&&!Jl?(X._dp._time-X._start!==X._time&&X.render(X._dp._time-X._start),X.resetTo?X.resetTo("totalProgress",Jt,i._tTime/i._tDur):(X.vars.totalProgress=Jt,X.invalidate().restart())):i&&i.totalProgress(Jt,!!(Pn&&(at||st)))),f){if(st&&p&&(_e.style[p+C.os2]=Ht),!z)gt(xa(re+Nt*Jt));else if(qe){if(it=!st&&Jt>Pe&&kt+1>At&&At+1>=Qi(D,C),T)if(!st&&(Xe||it)){var bt=vs(f,!0),Pt=At-Ut;zm(f,Ae,bt.top+(C===sn?Pt:0)+cn,bt.left+(C===sn?0:Pt)+cn)}else zm(f,_e);lo(Xe||it?Ve:F),G&&Jt<1&&Xe||gt(re+(Jt===1&&!it?Nt:0))}}y&&!yt.tween&&!Pn&&!Jl&&L.restart(!0),a&&(Ee||S&&Jt&&(Jt<1||!gf))&&Aa(a.targets).forEach(function(Qt){return Qt.classList[Xe||S?"add":"remove"](a.className)}),o&&!N&&!st&&o(A),qe&&!Pn?(N&&(ot&&(ye==="complete"?i.pause().totalProgress(1):ye==="reset"?i.restart(!0).pause():ye==="restart"?i.restart(!0):i[ye]()),o&&o(A)),(Ee||!gf)&&(c&&Ee&&no(A,c),H[be]&&no(A,H[be]),S&&(Jt===1?A.kill(!1,1):H[be]=0),Ee||(be=Jt===1?1:3,H[be]&&no(A,H[be]))),b&&!Xe&&Math.abs(A.getVelocity())>(va(b)?b:2500)&&(ma(A.callbackAnimation),X?X.progress(1):ma(i,ye==="reverse"?1:!Jt,1))):N&&o&&!Pn&&o(A)}if(lt){var Vt=x?At/x.duration()*(x._caScrollDist||0):At;M(Vt+($._isFlipped?1:0)),lt(Vt)}mt&&mt(-At/x.duration()*(x._caScrollDist||0))}},A.enable=function(st,vt){A.enabled||(A.enabled=!0,mn(D,"resize",ya),I||mn(D,"scroll",so),Y&&mn(s,"refreshInit",Y),st!==!1&&(A.progress=ut=0,Lt=Yt=J=Et()),vt!==!1&&A.refresh())},A.getTween=function(st){return st&&yt?yt.tween:X},A.setPositions=function(st,vt,Q,At){if(x){var ne=x.scrollTrigger,Jt=x.duration(),Pe=ne.end-ne.start;st=ne.start+Pe*st/Jt,vt=ne.start+Pe*vt/Jt}A.refresh(!1,!1,{start:Pm(st,Q&&!!A._startClamp),end:Pm(vt,Q&&!!A._endClamp)},At),A.update()},A.adjustPinSpacing=function(st){if(R&&st){var vt=R.indexOf(C.d)+1;R[vt]=parseFloat(R[vt])+st+cn,R[1]=parseFloat(R[1])+st+cn,lo(R)}},A.disable=function(st,vt){if(st!==!1&&A.revert(!0,!0),A.enabled&&(A.enabled=A.isActive=!1,vt||X&&X.pause(),j=0,Bt&&(Bt.uncache=1),Y&&pn(s,"refreshInit",Y),L&&(L.pause(),yt.tween&&yt.tween.kill()&&(yt.tween=0)),!I)){for(var Q=ae.length;Q--;)if(ae[Q].scroller===D&&ae[Q]!==A)return;pn(D,"resize",ya),I||pn(D,"scroll",so)}},A.kill=function(st,vt){A.disable(st,vt),X&&!vt&&X.kill(),l&&delete Tf[l];var Q=ae.indexOf(A);Q>=0&&ae.splice(Q,1),Q===Xn&&oc>0&&Xn--,Q=0,ae.forEach(function(At){return At.scroller===A.scroller&&(Q=1)}),Q||qn||qs||(A.scroll.rec=0),i&&(i.scrollTrigger=null,st&&i.revert({kill:!1}),vt||i.kill()),ce&&[ce,pe,$,ee].forEach(function(At){return At.parentNode&&At.parentNode.removeChild(At)}),Ea===A&&(Ea=0),f&&(Bt&&(Bt.uncache=1),Q=0,ae.forEach(function(At){return At.pin===f&&Q++}),Q||(Bt.spacer=0)),n.onKill&&n.onKill(A)},ae.push(A),A.enable(!1,!1),ct&&ct(A),i&&i.add&&!he){var tt=A.update;A.update=function(){A.update=tt,ie.cache++,Ut||kt||A.refresh()},Ft.delayedCall(.01,A.update),he=.01,Ut=kt=0}else A.refresh();f&&Ev()},s.register=function(n){return ro||(Ft=n||Jm(),Zm()&&window.document&&s.enable(),ro=_a),ro},s.defaults=function(n){if(n)for(var i in n)jl[i]=n[i];return jl},s.disable=function(n,i){_a=0,ae.forEach(function(o){return o[i?"kill":"disable"](n)}),pn(le,"wheel",so),pn(Re,"scroll",so),clearInterval(Zl),pn(Re,"touchcancel",Ki),pn(Ae,"touchstart",Ki),Kl(pn,Re,"pointerdown,touchstart,mousedown",Im),Kl(pn,Re,"pointerup,touchend,mouseup",Lm),cc.kill(),$l(pn);for(var r=0;r<ie.length;r+=3)Ql(pn,ie[r],ie[r+1]),Ql(pn,ie[r],ie[r+2])},s.enable=function(){if(le=window,Re=document,di=Re.documentElement,Ae=Re.body,Ft){if(Aa=Ft.utils.toArray,Sa=Ft.utils.clamp,bf=Ft.core.context||Ki,mf=Ft.core.suppressOverwrites||Ki,Rf=le.history.scrollRestoration||"auto",Ef=le.pageYOffset||0,Ft.core.globals("ScrollTrigger",s),Ae){_a=1,ao=document.createElement("div"),ao.style.height="100vh",ao.style.position="absolute",rg(),vv(),en.register(Ft),s.isTouch=en.isTouch,Xs=en.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Mf=en.isTouch===1,mn(le,"wheel",so),Cf=[le,Re,di,Ae],Ft.matchMedia?(s.matchMedia=function(h){var d=Ft.matchMedia(),u;for(u in h)d.add(u,h[u]);return d},Ft.addEventListener("matchMediaInit",function(){ig(),Uf()}),Ft.addEventListener("matchMediaRevert",function(){return ng()}),Ft.addEventListener("matchMedia",function(){br(0,1),Rr("matchMedia")}),Ft.matchMedia().add("(orientation: portrait)",function(){return xf(),xf})):console.warn("Requires GSAP 3.11.0 or later"),xf(),mn(Re,"scroll",so);var n=Ae.hasAttribute("style"),i=Ae.style,r=i.borderTopStyle,o=Ft.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=vs(Ae),sn.m=Math.round(a.top+sn.sc())||0,Rn.m=Math.round(a.left+Rn.sc())||0,r?i.borderTopStyle=r:i.removeProperty("border-top-style"),n||(Ae.setAttribute("style",""),Ae.removeAttribute("style")),Zl=setInterval(Um,250),Ft.delayedCall(.5,function(){return Jl=0}),mn(Re,"touchcancel",Ki),mn(Ae,"touchstart",Ki),Kl(mn,Re,"pointerdown,touchstart,mousedown",Im),Kl(mn,Re,"pointerup,touchend,mouseup",Lm),Sf=Ft.utils.checkPrefix("transform"),ac.push(Sf),ro=In(),cc=Ft.delayedCall(.2,br).pause(),oo=[Re,"visibilitychange",function(){var h=le.innerWidth,d=le.innerHeight;Re.hidden?(Am=h,Cm=d):(Am!==h||Cm!==d)&&ya()},Re,"DOMContentLoaded",br,le,"load",br,le,"resize",ya],$l(mn),ae.forEach(function(h){return h.enable(0,1)}),l=0;l<ie.length;l+=3)Ql(pn,ie[l],ie[l+1]),Ql(pn,ie[l],ie[l+2])}else if(Re){var c=function h(){s.enable(),Re.removeEventListener("DOMContentLoaded",h)};Re.addEventListener("DOMContentLoaded",c)}}},s.config=function(n){"limitCallbacks"in n&&(gf=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(Zl)||(Zl=i)&&setInterval(Um,i),"ignoreMobileResize"in n&&(Mf=s.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&($l(pn)||$l(mn,n.autoRefreshEvents||"none"),Xm=(n.autoRefreshEvents+"").indexOf("resize")===-1)},s.scrollerProxy=function(n,i){var r=Hn(n),o=ie.indexOf(r),a=Ar(r);~o&&ie.splice(o,a?6:2),i&&(a?Ni.unshift(le,i,Ae,i,di,i):Ni.unshift(r,i))},s.clearMatchMedia=function(n){ae.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},s.isInViewport=function(n,i,r){var o=(fi(n)?Hn(n):n).getBoundingClientRect(),a=o[r?wr:Tr]*i||0;return r?o.right-a>0&&o.left+a<le.innerWidth:o.bottom-a>0&&o.top+a<le.innerHeight},s.positionInViewport=function(n,i,r){fi(n)&&(n=Hn(n));var o=n.getBoundingClientRect(),a=o[r?wr:Tr],l=i==null?a/2:i in uc?uc[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return r?(o.left+l)/le.innerWidth:(o.top+l)/le.innerHeight},s.killAll=function(n){if(ae.slice(0).forEach(function(r){return r.vars.id!=="ScrollSmoother"&&r.kill()}),n!==!0){var i=Cr.killAll||[];Cr={},i.forEach(function(r){return r()})}},s})();jt.version="3.15.1";jt.saveStyles=function(s){return s?Aa(s).forEach(function(t){if(t&&t.style){var e=ui.indexOf(t);e>=0&&ui.splice(e,5),ui.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Ft.core.getCache(t),bf())}}):ui};jt.revert=function(s,t){return Uf(!s,t)};jt.create=function(s,t){return new jt(s,t)};jt.refresh=function(s){return s?ya(!0):(ro||jt.register())&&br(!0)};jt.update=function(s){return++ie.cache&&ys(s===!0?2:0)};jt.clearScrollMemory=sg;jt.maxScroll=function(s,t){return Qi(s,t?Rn:sn)};jt.getScrollFunc=function(s,t){return _s(Hn(s),t?Rn:sn)};jt.getById=function(s){return Tf[s]};jt.getAll=function(){return ae.filter(function(s){return s.vars.id!=="ScrollSmoother"})};jt.isScrolling=function(){return!!Ti};jt.snapDirectional=Nf;jt.addEventListener=function(s,t){var e=Cr[s]||(Cr[s]=[]);~e.indexOf(t)||e.push(t)};jt.removeEventListener=function(s,t){var e=Cr[s],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};jt.batch=function(s,t){var e=[],n={},i=t.interval||.016,r=t.batchMax||1e9,o=function(c,h){var d=[],u=[],f=Ft.delayedCall(i,function(){h(d,u),d=[],u=[]}).pause();return function(p){d.length||f.restart(!0),d.push(p.trigger),u.push(p),r<=d.length&&f.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&Ln(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return Ln(r)&&(r=r(),mn(jt,"refresh",function(){return r=t.batchMax()})),Aa(s).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(jt.create(c))}),e};var Vm=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},yf=function s(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(en.isTouch?" pinch-zoom":""):"none",t===di&&s(Ae,e)},ic={auto:1,scroll:1},Iv=function(t){var e=t.event,n=t.target,i=t.axis,r=(e.changedTouches?e.changedTouches[0]:e).target,o=r._gsap||Ft.core.getCache(r),a=In(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;r&&r!==Ae&&(r.scrollHeight<=r.clientHeight&&r.scrollWidth<=r.clientWidth||!(ic[(l=wi(r)).overflowY]||ic[l.overflowX]));)r=r.parentNode;o._isScroll=r&&r!==n&&!Ar(r)&&(ic[(l=wi(r)).overflowY]||ic[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},ag=function(t,e,n,i){return en.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&Iv,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&mn(Re,en.eventTypes[0],Hm,!1,!0)},onDisable:function(){return pn(Re,en.eventTypes[0],Hm,!0)}})},Lv=/(input|label|select|textarea)/i,Gm,Hm=function(t){var e=Lv.test(t.target.tagName);(e||Gm)&&(t._gsapAllow=!0,Gm=e)},Dv=function(t){Mr(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,r=e.allowNestedScroll,o=e.onRelease,a,l,c=Hn(t.target)||di,h=Ft.core.globals().ScrollSmoother,d=h&&h.get(),u=Xs&&(t.content&&Hn(t.content)||d&&t.content!==!1&&!d.smooth()&&d.content()),f=_s(c,sn),p=_s(c,Rn),g=1,m=(en.isTouch&&le.visualViewport?le.visualViewport.scale*le.visualViewport.width:le.outerWidth)/le.innerWidth,_=0,v=Ln(i)?function(){return i(a)}:function(){return i||2.8},S,y,T=ag(c,t.type,!0,r),E=function(){return y=!1},x=Ki,b=Ki,P=function(){l=Qi(c,sn),b=Sa(Xs?1:0,l),n&&(x=Sa(0,Qi(c,Rn))),S=Er},C=function(){u._gsap.y=xa(parseFloat(u._gsap.y)+f.offset)+"px",u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(u._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},N=function(){if(y){requestAnimationFrame(E);var et=xa(a.deltaY/2),W=b(f.v-et);if(u&&W!==f.v+f.offset){f.offset=W-f.v;var A=xa((parseFloat(u&&u._gsap.y)||0)-f.offset);u.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+A+", 0, 1)",u._gsap.y=A+"px",f.cacheID=ie.cache,ys()}return!0}f.offset&&C(),y=!0},D,V,I,z,H=function(){P(),D.isActive()&&D.vars.scrollY>l&&(f()>l?D.progress(1)&&f(l):D.resetTo("scrollY",l))};return u&&Ft.set(u,{y:"+=0"}),t.ignoreCheck=function(O){return Xs&&O.type==="touchmove"&&N(O)||g>1.05&&O.type!=="touchstart"||a.isGesturing||O.touches&&O.touches.length>1},t.onPress=function(){y=!1;var O=g;g=xa((le.visualViewport&&le.visualViewport.scale||1)/m),D.pause(),O!==g&&yf(c,g>1.01?!0:n?!1:"x"),V=p(),I=f(),P(),S=Er},t.onRelease=t.onGestureStart=function(O,et){if(f.offset&&C(),!et)z.restart(!0);else{ie.cache++;var W=v(),A,Y;n&&(A=p(),Y=A+W*.05*-O.velocityX/.227,W*=Vm(p,A,Y,Qi(c,Rn)),D.vars.scrollX=x(Y)),A=f(),Y=A+W*.05*-O.velocityY/.227,W*=Vm(f,A,Y,Qi(c,sn)),D.vars.scrollY=b(Y),D.invalidate().duration(W).play(.01),(Xs&&D.vars.scrollY>=l||A>=l-1)&&Ft.to({},{onUpdate:H,duration:W})}o&&o(O)},t.onWheel=function(){D._ts&&D.pause(),In()-_>1e3&&(S=0,_=In())},t.onChange=function(O,et,W,A,Y){if(Er!==S&&P(),et&&n&&p(x(A[2]===et?V+(O.startX-O.x):p()+et-A[1])),W){f.offset&&C();var St=Y[2]===W,Dt=St?I+O.startY-O.y:f()+W-Y[1],J=b(Dt);St&&Dt!==J&&(I+=J-Dt),f(J)}(W||et)&&ys()},t.onEnable=function(){yf(c,n?!1:"x"),jt.addEventListener("refresh",H),mn(le,"resize",H),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=p.smooth=!1),T.enable()},t.onDisable=function(){yf(c,!0),pn(le,"resize",H),jt.removeEventListener("refresh",H),T.kill()},t.lockAxis=t.lockAxis!==!1,a=new en(t),a.iOS=Xs,Xs&&!f()&&f(1),Xs&&Ft.ticker.add(Ki),z=a._dc,D=Ft.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:og(f,f(),function(){return D.pause()})},onUpdate:ys,onComplete:z.vars.onComplete}),a};jt.sort=function(s){if(Ln(s))return ae.sort(s);var t=le.pageYOffset||0;return jt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+le.innerHeight}),ae.sort(s||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};jt.observe=function(s){return new en(s)};jt.normalizeScroll=function(s){if(typeof s>"u")return Wn;if(s===!0&&Wn)return Wn.enable();if(s===!1){Wn&&Wn.kill(),Wn=s;return}var t=s instanceof en?s:Dv(s);return Wn&&Wn.target===t.target&&Wn.kill(),Ar(t.target)&&(Wn=t),t};jt.core={_getVelocityProp:Yl,_inputObserver:ag,_scrollers:ie,_proxies:Ni,bridge:{ss:function(){Ti||Rr("scrollStart"),Ti=In()},ref:function(){return Pn}}};Jm()&&Ft.registerPlugin(jt);var lg="1.3.27";function ug(s,t,e){return Math.max(s,Math.min(t,e))}function Nv(s,t,e){return(1-e)*s+e*t}function Uv(s,t,e,n){return Nv(s,t,1-Math.exp(-e*n))}function Ov(s,t){return(s%t+t)%t}var Fv=class{constructor(){Gt(this,"isRunning",!1);Gt(this,"value",0);Gt(this,"from",0);Gt(this,"to",0);Gt(this,"currentTime",0);Gt(this,"lerp");Gt(this,"duration");Gt(this,"easing");Gt(this,"onUpdate")}advance(s){if(!this.isRunning)return;let t=!1;if(this.duration&&this.easing){this.currentTime+=s;let e=ug(0,this.currentTime/this.duration,1);t=e>=1;let n=t?1:this.easing(e);this.value=this.from+(this.to-this.from)*n}else this.lerp?(this.value=Uv(this.value,this.to,this.lerp*60,s),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,t=!0)):(this.value=this.to,t=!0);t&&this.stop(),this.onUpdate?.(this.value,t)}stop(){this.isRunning=!1}fromTo(s,t,{lerp:e,duration:n,easing:i,onStart:r,onUpdate:o}){this.from=this.value=s,this.to=t,this.lerp=e,this.duration=n,this.easing=i,this.currentTime=0,this.isRunning=!0,r?.(),this.onUpdate=o}};function Bv(s,t){let e;return function(...n){clearTimeout(e),e=setTimeout(()=>{e=void 0,s.apply(this,n)},t)}}var zv=class{constructor(s,t,{autoResize:e=!0,debounce:n=250}={}){Gt(this,"width",0);Gt(this,"height",0);Gt(this,"scrollHeight",0);Gt(this,"scrollWidth",0);Gt(this,"debouncedResize");Gt(this,"wrapperResizeObserver");Gt(this,"contentResizeObserver");Gt(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Gt(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Gt(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=s,this.content=t,e&&(this.debouncedResize=Bv(this.resize,n),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){this.wrapperResizeObserver?.disconnect(),this.contentResizeObserver?.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},fg=class{constructor(){Gt(this,"events",{})}emit(s,...t){let e=this.events[s]||[];for(let n=0,i=e.length;n<i;n++)e[n]?.(...t)}on(s,t){return this.events[s]?this.events[s].push(t):this.events[s]=[t],()=>{this.events[s]=this.events[s]?.filter(e=>t!==e)}}off(s,t){this.events[s]=this.events[s]?.filter(e=>t!==e)}destroy(){this.events={}}},kv=100/6,Ys={passive:!1};function cg(s,t){return s===1?kv:s===2?t:1}var Vv=class{constructor(s,t={wheelMultiplier:1,touchMultiplier:1}){Gt(this,"touchStart",{x:0,y:0});Gt(this,"lastDelta",{x:0,y:0});Gt(this,"window",{width:0,height:0});Gt(this,"emitter",new fg);Gt(this,"onTouchStart",s=>{let{clientX:t,clientY:e}=s.targetTouches?s.targetTouches[0]:s;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:s})});Gt(this,"onTouchMove",s=>{let{clientX:t,clientY:e}=s.targetTouches?s.targetTouches[0]:s,n=-(t-this.touchStart.x)*this.options.touchMultiplier,i=-(e-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=t,this.touchStart.y=e,this.lastDelta={x:n,y:i},this.emitter.emit("scroll",{deltaX:n,deltaY:i,event:s})});Gt(this,"onTouchEnd",s=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:s})});Gt(this,"onWheel",s=>{let{deltaX:t,deltaY:e,deltaMode:n}=s,i=cg(n,this.window.width),r=cg(n,this.window.height);t*=i,e*=r,t*=this.options.wheelMultiplier,e*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:t,deltaY:e,event:s})});Gt(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=s,this.options=t,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,Ys),this.element.addEventListener("touchstart",this.onTouchStart,Ys),this.element.addEventListener("touchmove",this.onTouchMove,Ys),this.element.addEventListener("touchend",this.onTouchEnd,Ys)}on(s,t){return this.emitter.on(s,t)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,Ys),this.element.removeEventListener("touchstart",this.onTouchStart,Ys),this.element.removeEventListener("touchmove",this.onTouchMove,Ys),this.element.removeEventListener("touchend",this.onTouchEnd,Ys)}},hg=s=>Math.min(1,1.001-2**(-10*s)),dg=class{constructor({wrapper:s=window,content:t=document.documentElement,eventsTarget:e=s,smoothWheel:n=!0,syncTouch:i=!1,syncTouchLerp:r=.075,touchInertiaExponent:o=1.7,duration:a,easing:l,lerp:c=.1,infinite:h=!1,orientation:d="vertical",gestureOrientation:u=d==="horizontal"?"both":"vertical",touchMultiplier:f=1,wheelMultiplier:p=1,autoResize:g=!0,prevent:m,virtualScroll:_,overscroll:v=!0,autoRaf:S=!1,anchors:y=!1,autoToggle:T=!1,allowNestedScroll:E=!1,__experimental__naiveDimensions:x=!1,naiveDimensions:b=x,stopInertiaOnNavigate:P=!1,respectReducedMotion:C=!0}={}){Gt(this,"_isScrolling",!1);Gt(this,"_isStopped",!1);Gt(this,"_isLocked",!1);Gt(this,"_preventNextNativeScrollEvent",!1);Gt(this,"_resetVelocityTimeout",null);Gt(this,"_rafId",null);Gt(this,"_isDraggingSelection",!1);Gt(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Gt(this,"isTouching");Gt(this,"isIos");Gt(this,"time",0);Gt(this,"userData",{});Gt(this,"lastVelocity",0);Gt(this,"velocity",0);Gt(this,"direction",0);Gt(this,"options");Gt(this,"targetScroll");Gt(this,"animatedScroll");Gt(this,"animate",new Fv);Gt(this,"emitter",new fg);Gt(this,"dimensions");Gt(this,"virtualScroll");Gt(this,"onScrollEnd",s=>{s instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&s.stopPropagation()});Gt(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Gt(this,"onTransitionEnd",s=>{s.propertyName?.includes("overflow")&&s.target===this.rootElement&&this.checkOverflow()});Gt(this,"onClick",s=>{let t=s.composedPath().filter(n=>n instanceof HTMLAnchorElement&&n.href).map(n=>new URL(n.href)),e=new URL(window.location.href);if(this.options.anchors){let n=t.find(i=>e.host===i.host&&e.pathname===i.pathname&&i.hash);if(n){let i=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,r=decodeURIComponent(n.hash);this.scrollTo(r,i);return}}if(this.options.stopInertiaOnNavigate&&t.some(n=>e.host===n.host&&e.pathname!==n.pathname)){this.reset();return}});Gt(this,"onPointerDown",s=>{s.button===1&&this.reset()});Gt(this,"onVirtualScroll",s=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(s)===!1)return;let{deltaX:t,deltaY:e,event:n}=s;if(this.emitter.emit("virtual-scroll",{deltaX:t,deltaY:e,event:n}),n.ctrlKey||n.lenisStopPropagation)return;let i=n.type.includes("touch"),r=n.type.includes("wheel");if(i&&this.isIos&&(n.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(n)),this._isDraggingSelection)){n.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=n.type==="touchstart"||n.type==="touchmove";let o=t===0&&e===0;if(this.options.syncTouch&&i&&n.type==="touchstart"&&o&&!this.isStopped&&!this.isLocked){this.reset();return}let a=this.options.gestureOrientation==="vertical"&&e===0||this.options.gestureOrientation==="horizontal"&&t===0;if(o||a)return;let l=n.composedPath();l=l.slice(0,l.indexOf(this.rootElement));let c=this.options.prevent,h=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical";if(l.find(p=>p instanceof HTMLElement&&(typeof c=="function"&&c?.(p)||p.hasAttribute?.("data-lenis-prevent")||h==="vertical"&&p.hasAttribute?.("data-lenis-prevent-vertical")||h==="horizontal"&&p.hasAttribute?.("data-lenis-prevent-horizontal")||i&&p.hasAttribute?.("data-lenis-prevent-touch")||r&&p.hasAttribute?.("data-lenis-prevent-wheel")||this.options.allowNestedScroll&&this.hasNestedScroll(p,{deltaX:t,deltaY:e}))))return;if(this.isStopped||this.isLocked){n.cancelable&&n.preventDefault();return}if(!(this.options.syncTouch&&i||this.options.smoothWheel&&r)){this.isScrolling="native",this.animate.stop(),n.lenisStopPropagation=!0;return}let d=e;this.options.gestureOrientation==="both"?d=Math.abs(e)>Math.abs(t)?e:t:this.options.gestureOrientation==="horizontal"&&(d=t),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&e>0||this.animatedScroll===this.limit&&e<0))&&(n.lenisStopPropagation=!0),n.cancelable&&n.preventDefault();let u=i&&this.options.syncTouch,f=i&&n.type==="touchend";f&&(d=Math.sign(d)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+d,{programmatic:!1,...u?{lerp:f?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Gt(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){let s=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-s,this.direction=Math.sign(this.animatedScroll-s),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Gt(this,"raf",s=>{let t=s-(this.time||s);this.time=s,this.animate.advance(t*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=lg,window.lenis||(window.lenis={}),window.lenis.version=lg,d==="horizontal"&&(window.lenis.horizontal=!0),i===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!s||s===document.documentElement)&&(s=window),typeof a=="number"&&typeof l!="function"?l=hg:typeof l=="function"&&typeof a!="number"&&(a=1),this.options={wrapper:s,content:t,eventsTarget:e,smoothWheel:n,syncTouch:i,syncTouchLerp:r,touchInertiaExponent:o,duration:a,easing:l,lerp:c,infinite:h,gestureOrientation:u,orientation:d,touchMultiplier:f,wheelMultiplier:p,autoResize:g,prevent:m,virtualScroll:_,overscroll:v,autoRaf:S,anchors:y,autoToggle:T,allowNestedScroll:E,naiveDimensions:b,stopInertiaOnNavigate:P,respectReducedMotion:C},this.dimensions=new zv(s,t,{autoResize:g}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Vv(e,{touchMultiplier:f,wheelMultiplier:p}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(s,t){return this.emitter.on(s,t)}off(s,t){return this.emitter.off(s,t)}get overflow(){let s=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[s]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(s){this.isHorizontal?this.options.wrapper.scrollTo({left:s,behavior:"instant"}):this.options.wrapper.scrollTo({top:s,behavior:"instant"})}isTouchOnSelectionHandle(s){let t=window.getSelection();if(!t||t.isCollapsed||t.rangeCount===0)return!1;let e=s.targetTouches[0]??s.changedTouches[0];if(!e)return!1;let n=t.getRangeAt(0).getClientRects();if(n.length===0)return!1;let i=n[0],r=n[n.length-1],o=40,a=Math.hypot(e.clientX-i.left,e.clientY-i.top)<=o,l=Math.hypot(e.clientX-r.right,e.clientY-r.bottom)<=o;return a||l}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(s,{offset:t=0,immediate:e=!1,lock:n=!1,programmatic:i=!0,lerp:r=i?this.options.lerp:void 0,duration:o=i?this.options.duration:void 0,easing:a=i?this.options.easing:void 0,onStart:l,onComplete:c,force:h=!1,userData:d}={}){if(this.prefersReducedMotion&&(i?e=!0:(r=1,o=void 0,a=void 0)),(this.isStopped||this.isLocked)&&!h)return;let u=s,f=t;if(typeof u=="string"&&["top","left","start","#"].includes(u))u=0;else if(typeof u=="string"&&["bottom","right","end"].includes(u))u=this.limit;else{let p=null;if(typeof u=="string"?(p=u.startsWith("#")?document.getElementById(u.slice(1)):document.querySelector(u),p||(u==="#top"?u=0:console.warn("Lenis: Target not found",u))):u instanceof Element&&(p=u),p){if(this.options.wrapper!==window){let y=this.rootElement.getBoundingClientRect();f-=this.isHorizontal?y.left:y.top}let g=p.getBoundingClientRect(),m=getComputedStyle(p),_=this.isHorizontal?Number.parseFloat(m.scrollMarginLeft):Number.parseFloat(m.scrollMarginTop),v=getComputedStyle(this.rootElement),S=this.isHorizontal?Number.parseFloat(v.scrollPaddingLeft):Number.parseFloat(v.scrollPaddingTop);u=(this.isHorizontal?g.left:g.top)+this.animatedScroll-(Number.isNaN(_)?0:_)-(Number.isNaN(S)?0:S)}}if(typeof u=="number"){if(u+=f,this.options.infinite){if(i){this.targetScroll=this.animatedScroll=this.scroll;let p=u-this.animatedScroll;p>this.limit/2?u-=this.limit:p<-this.limit/2&&(u+=this.limit)}}else u=ug(0,u,this.limit);if(u===this.targetScroll){l?.(this),c?.(this);return}if(this.userData=d??{},e){this.animatedScroll=this.targetScroll=u,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}i||(this.targetScroll=u),typeof o=="number"&&typeof a!="function"?a=hg:typeof a=="function"&&typeof o!="number"&&(o=1),this.animate.fromTo(this.animatedScroll,u,{duration:o,easing:a,lerp:r,onStart:()=>{n&&(this.isLocked=!0),this.isScrolling="smooth",l?.(this)},onUpdate:(p,g)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=p-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=p,this.setScroll(this.scroll),i&&(this.targetScroll=p),g||this.emit(),g&&(this.reset(),this.emit(),c?.(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(s,{deltaX:t,deltaY:e}){let n=Date.now();s._lenis||(s._lenis={});let i=s._lenis,r,o,a,l,c,h,d,u,f,p;if(n-(i.time??0)>2e3){i.time=Date.now();let E=window.getComputedStyle(s);if(i.computedStyle=E,r=["auto","overlay","scroll"].includes(E.overflowX),o=["auto","overlay","scroll"].includes(E.overflowY),c=["auto"].includes(E.overscrollBehaviorX),h=["auto"].includes(E.overscrollBehaviorY),i.hasOverflowX=r,i.hasOverflowY=o,!(r||o))return!1;d=s.scrollWidth,u=s.scrollHeight,f=s.clientWidth,p=s.clientHeight,a=d>f,l=u>p,i.isScrollableX=a,i.isScrollableY=l,i.scrollWidth=d,i.scrollHeight=u,i.clientWidth=f,i.clientHeight=p,i.hasOverscrollBehaviorX=c,i.hasOverscrollBehaviorY=h}else a=i.isScrollableX,l=i.isScrollableY,r=i.hasOverflowX,o=i.hasOverflowY,d=i.scrollWidth,u=i.scrollHeight,f=i.clientWidth,p=i.clientHeight,c=i.hasOverscrollBehaviorX,h=i.hasOverscrollBehaviorY;if(!(r&&a||o&&l))return!1;let g=Math.abs(t)>=Math.abs(e)?"horizontal":"vertical",m,_,v,S,y,T;if(g==="horizontal")m=Math.round(s.scrollLeft),_=d-f,v=t,S=r,y=a,T=c;else if(g==="vertical")m=Math.round(s.scrollTop),_=u-p,v=e,S=o,y=l,T=h;else return!1;return!T&&(m>=_||m<=0)?!0:(v>0?m<_:m>0)&&S&&y}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){let s=this.options.wrapper;return this.isHorizontal?s.scrollX??s.scrollLeft:s.scrollY??s.scrollTop}get scroll(){return this.options.infinite?Ov(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(s){this._isScrolling!==s&&(this._isScrolling=s,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(s){this._isStopped!==s&&(this._isStopped=s,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(s){this._isLocked!==s&&(this._isLocked=s,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let s="lenis";return this.options.autoToggle&&(s+=" lenis-autoToggle"),this.isStopped&&(s+=" lenis-stopped"),this.isLocked&&(s+=" lenis-locked"),this.isScrolling&&(s+=" lenis-scrolling"),this.isScrolling==="smooth"&&(s+=" lenis-smooth"),s}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(s=>{this.rootElement.classList.add(s)})}cleanUpClassName(){for(let s of Array.from(this.rootElement.classList))(s==="lenis"||s.startsWith("lenis-"))&&this.rootElement.classList.remove(s)}};function Gv(s){let t=new Uint8Array(512),e=Array.from({length:256},(c,h)=>h),n=s>>>0,i=()=>(n=n*1664525+1013904223>>>0)/4294967296;for(let c=255;c>0;c--){let h=Math.floor(i()*(c+1));[e[c],e[h]]=[e[h],e[c]]}for(let c=0;c<512;c++)t[c]=e[c&255];let r=(c,h,d)=>{let u=c&7,f=u<4?h:d,p=u<4?d:h;return(u&1?-f:f)+(u&2?-2*p:2*p)},o=c=>c*c*c*(c*(c*6-15)+10),a=(c,h,d)=>c+(h-c)*d,l=(c,h)=>{let d=Math.floor(c)&255,u=Math.floor(h)&255;c-=Math.floor(c),h-=Math.floor(h);let f=o(c),p=o(h),g=t[d]+u,m=t[d+1]+u;return a(a(r(t[g],c,h),r(t[m],c-1,h),f),a(r(t[g+1],c,h-1),r(t[m+1],c-1,h-1),f),p)*.5};return(c,h)=>l(c,h)+.5*l(c*2.03+11.7,h*2.03-3.1)+.25*l(c*4.1-7.3,h*4.1+5.9)}function pg(s,{seed:t=90,levels:e=16,stroke:n="rgba(169,180,196,0.14)",accent:i="rgba(243,215,10,0.22)",scale:r=.0021}={}){let o=Math.min(window.devicePixelRatio||1,2),a=s.clientWidth,l=s.clientHeight;if(!a||!l)return;s.width=Math.round(a*o),s.height=Math.round(l*o);let c=s.getContext("2d");c.setTransform(o,0,0,o,0,0),c.clearRect(0,0,a,l);let h=Gv(t),d=a<700?6:8,u=Math.ceil(a/d)+1,f=Math.ceil(l/d)+1,p=new Float32Array(u*f),g=1/0,m=-1/0,_=r*(a<700?1.6:1);for(let v=0;v<f;v++)for(let S=0;S<u;S++){let y=h(S*d*_+3.3,v*d*_+1.7);p[v*u+S]=y,y<g&&(g=y),y>m&&(m=y)}c.lineWidth=1;for(let v=0;v<e;v++){let S=g+(v+.5)/e*(m-g);c.strokeStyle=v===Math.floor(e*.62)?i:n,c.beginPath();for(let y=0;y<f-1;y++)for(let T=0;T<u-1;T++){let E=p[y*u+T],x=p[y*u+T+1],b=p[(y+1)*u+T+1],P=p[(y+1)*u+T],C=(E>S?8:0)|(x>S?4:0)|(b>S?2:0)|(P>S?1:0);if(C===0||C===15)continue;let N=T*d,D=y*d,V=[N+d*((S-E)/(x-E)),D],I=[N+d,D+d*((S-x)/(b-x))],z=[N+d*((S-P)/(b-P)),D+d],H=[N,D+d*((S-E)/(P-E))],O=(et,W)=>{c.moveTo(et[0],et[1]),c.lineTo(W[0],W[1])};switch(C){case 1:case 14:O(H,z);break;case 2:case 13:O(z,I);break;case 3:case 12:O(H,I);break;case 4:case 11:O(V,I);break;case 5:O(H,V),O(z,I);break;case 6:case 9:O(V,z);break;case 7:case 8:O(H,V);break;case 10:O(H,z),O(V,I);break}}c.stroke()}}var Jg=0,md=1,$g=2;var ll=1,Kg=2,Go=3,ar=0,Kn=1,oi=2,Or=0,Ho=1,cl=2,gd=3,_d=4,Qg=5;var Fr=100,jg=101,t_=102,e_=103,n_=104,i_=200,s_=201,r_=202,o_=203,xd=204,vd=205,a_=206,l_=207,c_=208,h_=209,u_=210,f_=211,d_=212,p_=213,m_=214,Yc=0,Zc=1,Jc=2,Po=3,$c=4,Kc=5,Qc=6,jc=7,yd=0,g_=1,__=2,os=0,Sd=1,Md=2,bd=3,wd=4,Td=5,Ed=6,Ad=7;var Cd=300,Br=301,Wo=302,Ch=303,Rh=304,th=1e3,es=1001,eh=1002,_n=1003,x_=1004;var hl=1005;var xn=1006,Ph=1007;var Ps=1008;var vi=1009,Rd=1010,Pd=1011,Xo=1012,Ih=1013,Vi=1014,Gi=1015,Hi=1016,Lh=1017,Dh=1018,zr=1020,Id=35902,Ld=35899,Dd=1021,Nd=1022,Wi=1023,As=1026,Is=1027,Ud=1028,Nh=1029,lr=1030,Uh=1031;var Oh=1033,ul=33776,fl=33777,dl=33778,pl=33779,Fh=35840,Bh=35841,zh=35842,kh=35843,Vh=36196,Gh=37492,Hh=37496,Wh=37488,Xh=37489,ml=37490,qh=37491,Yh=37808,Zh=37809,Jh=37810,$h=37811,Kh=37812,Qh=37813,jh=37814,tu=37815,eu=37816,nu=37817,iu=37818,su=37819,ru=37820,ou=37821,au=36492,lu=36494,cu=36495,hu=36283,uu=36284,gl=36285,fu=36286;var Ba=2300,nh=2301,Hc=2302,ld=2303,cd=2400,hd=2401,ud=2402;var v_=3200;var Od=0,y_=1,Xi="",gi="srgb",za="srgb-linear",ka="linear",Ce="srgb";var Wc=7680;var S_=519,M_=512,b_=513,w_=514,Fd=515,T_=516,E_=517,Bd=518,zd=519,kd=35044;var Vd="300 es",Ai=2e3,Va=2001;function Hv(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function Wv(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function Io(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function A_(){let s=Io("canvas");return s.style.display="block",s}var mg={},Lo=null;function Ga(...s){let t="THREE."+s.shift();Lo?Lo("log",t,...s):console.log(t,...s)}function C_(s){let t=s[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=s[1];e&&e.isStackTrace?s[0]+=" "+e.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Xt(...s){s=C_(s);let t="THREE."+s.shift();if(Lo)Lo("warn",t,...s);else{let e=s[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...s)}}function Zt(...s){s=C_(s);let t="THREE."+s.shift();if(Lo)Lo("error",t,...s);else{let e=s[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...s)}}function Fa(...s){let t=s.join(" ");t in mg||(mg[t]=!0,Xt(...s))}function R_(s,t,e){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(t,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}var P_={[Yc]:Yc,[Jc]:Qc,[$c]:$c,[Po]:Kc,[Zc]:Zc,[Qc]:Jc,[jc]:jc,[Kc]:Po},ns=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}},Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Xc=Math.PI/180,ih=180/Math.PI;function kr(){let s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dn[s&255]+Dn[s>>8&255]+Dn[s>>16&255]+Dn[s>>24&255]+"-"+Dn[t&255]+Dn[t>>8&255]+"-"+Dn[t>>16&15|64]+Dn[t>>24&255]+"-"+Dn[e&63|128]+Dn[e>>8&255]+"-"+Dn[e>>16&255]+Dn[e>>24&255]+Dn[n&255]+Dn[n>>8&255]+Dn[n>>16&255]+Dn[n>>24&255]).toLowerCase()}function de(s,t,e){return Math.max(t,Math.min(e,s))}function Xv(s,t){return(s%t+t)%t}function Of(s,t,e){return(1-e)*s+e*t}function I_(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function du(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function L_(s,t){if(t.constructor===Float32Array)return s;let e=du(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/e,-1)}function D_(s,t){if(t.constructor===Float32Array)return s;let e=du(t);if(e===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*e)}var Yd=class Yd{constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(de(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Yd.prototype.isVector2=!0;var te=Yd,is=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],d=n[i+3],u=r[o+0],f=r[o+1],p=r[o+2],g=r[o+3];if(d!==g||l!==u||c!==f||h!==p){let m=l*u+c*f+h*p+d*g;m<0&&(u=-u,f=-f,p=-p,g=-g,m=-m);let _=1-a;if(m<.9995){let v=Math.acos(m),S=Math.sin(v);_=Math.sin(_*v)/S,a=Math.sin(a*v)/S,l=l*_+u*a,c=c*_+f*a,h=h*_+p*a,d=d*_+g*a}else{l=l*_+u*a,c=c*_+f*a,h=h*_+p*a,d=d*_+g*a;let v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,n,i,r,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],d=r[o],u=r[o+1],f=r[o+2],p=r[o+3];return t[e]=a*p+h*d+l*f-c*u,t[e+1]=l*p+h*u+c*d-a*f,t[e+2]=c*p+h*f+a*u-l*d,t[e+3]=h*p-a*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),d=a(r/2),u=l(n/2),f=l(i/2),p=l(r/2);switch(o){case"XYZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"YXZ":this._x=u*h*d+c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"ZXY":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d-u*f*p;break;case"ZYX":this._x=u*h*d-c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d+u*f*p;break;case"YZX":this._x=u*h*d+c*f*p,this._y=c*f*d+u*h*p,this._z=c*h*p-u*f*d,this._w=c*h*d-u*f*p;break;case"XZY":this._x=u*h*d-c*f*p,this._y=c*f*d-u*h*p,this._z=c*h*p+u*f*d,this._w=c*h*d+u*f*p;break;default:Xt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=n+a+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>d){let f=2*Math.sqrt(1+n-a-d);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>d){let f=2*Math.sqrt(1+a-n-d);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(de(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(t,e){let n=t._x,i=t._y,r=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,r=-r,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+r*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Zd=class Zd{constructor(t=0,e=0,n=0){this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(gg.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(gg.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-r*i),d=2*(r*n-o*e);return this.x=e+l*c+o*d-a*h,this.y=n+l*h+a*c-r*d,this.z=i+l*d+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this.z=de(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this.z=de(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Ff.copy(this).projectOnVector(t),this.sub(Ff)}reflect(t){return this.sub(Ff.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(de(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Zd.prototype.isVector3=!0;var B=Zd,Ff=new B,gg=new is,Jd=class Jd{constructor(t,e,n,i,r,o,a,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c)}set(t,e,n,i,r,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],p=n[8],g=i[0],m=i[3],_=i[6],v=i[1],S=i[4],y=i[7],T=i[2],E=i[5],x=i[8];return r[0]=o*g+a*v+l*T,r[3]=o*m+a*S+l*E,r[6]=o*_+a*y+l*x,r[1]=c*g+h*v+d*T,r[4]=c*m+h*S+d*E,r[7]=c*_+h*y+d*x,r[2]=u*g+f*v+p*T,r[5]=u*m+f*S+p*E,r[8]=u*_+f*y+p*x,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=h*o-a*c,u=a*l-h*r,f=c*r-o*l,p=e*d+n*u+i*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/p;return t[0]=d*g,t[1]=(i*c-h*n)*g,t[2]=(a*n-i*o)*g,t[3]=u*g,t[4]=(h*e-i*l)*g,t[5]=(i*r-a*e)*g,t[6]=f*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*r)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return Fa("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Bf.makeScale(t,e)),this}rotate(t){return Fa("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Bf.makeRotation(-t)),this}translate(t,e){return Fa("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Bf.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}};Jd.prototype.isMatrix3=!0;var $t=Jd,Bf=new $t,_g=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),xg=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function qv(){let s={enabled:!0,workingColorSpace:za,spaces:{},convert:function(i,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Ce&&(i.r=Es(i.r),i.g=Es(i.g),i.b=Es(i.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Ce&&(i.r=Ro(i.r),i.g=Ro(i.g),i.b=Ro(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Xi?ka:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,o){return i.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return s.define({[za]:{primaries:t,whitePoint:n,transfer:ka,toXYZ:_g,fromXYZ:xg,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:gi},outputColorSpaceConfig:{drawingBufferColorSpace:gi}},[gi]:{primaries:t,whitePoint:n,transfer:Ce,toXYZ:_g,fromXYZ:xg,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:gi}}}),s}var ge=qv();function Es(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Ro(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var ho,sh=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{ho===void 0&&(ho=Io("canvas")),ho.width=t.width,ho.height=t.height;let i=ho.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=ho}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Io("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Es(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Es(e[n]/255)*255):e[n]=Es(e[n]);return{data:e,width:t.width,height:t.height}}else return Xt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},Yv=0,Do=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Yv++}),this.uuid=kr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width||0,e.height||0,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(zf(i[o].image)):r.push(zf(i[o]))}else r=zf(i);n.url=r}return e||(t.images[this.uuid]=n),n}};function zf(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?sh.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Xt("Texture: Unable to serialize Texture."),{})}var Zv=0,kf=new B,Un=class s extends ns{constructor(t=s.DEFAULT_IMAGE,e=s.DEFAULT_MAPPING,n=es,i=es,r=xn,o=Ps,a=Wi,l=vi,c=s.DEFAULT_ANISOTROPY,h=Xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zv++}),this.uuid=kr(),this.name="",this.source=new Do(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new te(0,0),this.repeat=new te(1,1),this.center=new te(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(kf).x}get height(){return this.source.getSize(kf).y}get depth(){return this.source.getSize(kf).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.mipmapsAutoUpdate=t.mipmapsAutoUpdate,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isPMREMTexture=t.isPMREMTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Xt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Xt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Cd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case th:t.x=t.x-Math.floor(t.x);break;case es:t.x=t.x<0?0:1;break;case eh:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case th:t.y=t.y-Math.floor(t.y);break;case es:t.y=t.y<0?0:1;break;case eh:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=Cd;Un.DEFAULT_ANISOTROPY=1;var $d=class $d{constructor(t=0,e=0,n=0,i=1){this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],p=l[9],g=l[2],m=l[6],_=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-g)<.01&&Math.abs(p-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+g)<.1&&Math.abs(p+m)<.1&&Math.abs(c+f+_-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let S=(c+1)/2,y=(f+1)/2,T=(_+1)/2,E=(h+u)/4,x=(d+g)/4,b=(p+m)/4;return S>y&&S>T?S<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(S),i=E/n,r=x/n):y>T?y<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(y),n=E/i,r=b/i):T<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(T),n=x/r,i=b/r),this.set(n,i,r,e),this}let v=Math.sqrt((m-p)*(m-p)+(d-g)*(d-g)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(m-p)/v,this.y=(d-g)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+_-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=de(this.x,t.x,e.x),this.y=de(this.y,t.y,e.y),this.z=de(this.z,t.z,e.z),this.w=de(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=de(this.x,t,e),this.y=de(this.y,t,e),this.z=de(this.z,t,e),this.w=de(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(de(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};$d.prototype.isVector4=!0;var Ke=$d,rh=class extends ns{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:xn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ke(0,0,t,e),this.scissorTest=!1,this.viewport=new Ke(0,0,t,e),this.textures=[];let i=n.count;for(let r=0;r<i;r++)this.textures[r]=new Un({width:t,height:e,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:xn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.mipmapsAutoUpdate!==void 0&&(e.mipmapsAutoUpdate=t.mipmapsAutoUpdate),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Do(i)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;else this.depthTexture=null;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},_i=class extends rh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ha=class extends Un{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=_n,this.minFilter=_n,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var oh=class extends Un{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=_n,this.minFilter=_n,this.wrapR=es,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}};var Ah=class Ah{constructor(t,e,n,i,r,o,a,l,c,h,d,u,f,p,g,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,r,o,a,l,c,h,d,u,f,p,g,m)}set(t,e,n,i,r,o,a,l,c,h,d,u,f,p,g,m){let _=this.elements;return _[0]=t,_[4]=e,_[8]=n,_[12]=i,_[1]=r,_[5]=o,_[9]=a,_[13]=l,_[2]=c,_[6]=h,_[10]=d,_[14]=u,_[3]=f,_[7]=p,_[11]=g,_[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ah().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,n=t.elements,i=1/uo.setFromMatrixColumn(t,0).length(),r=1/uo.setFromMatrixColumn(t,1).length(),o=1/uo.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=o*h,f=o*d,p=a*h,g=a*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+p*c,e[5]=u-g*c,e[9]=-a*l,e[2]=g-u*c,e[6]=p+f*c,e[10]=o*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,p=c*h,g=c*d;e[0]=u+g*a,e[4]=p*a-f,e[8]=o*c,e[1]=o*d,e[5]=o*h,e[9]=-a,e[2]=f*a-p,e[6]=g+u*a,e[10]=o*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,p=c*h,g=c*d;e[0]=u-g*a,e[4]=-o*d,e[8]=p+f*a,e[1]=f+p*a,e[5]=o*h,e[9]=g-u*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let u=o*h,f=o*d,p=a*h,g=a*d;e[0]=l*h,e[4]=p*c-f,e[8]=u*c+g,e[1]=l*d,e[5]=g*c+u,e[9]=f*c-p,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let u=o*l,f=o*c,p=a*l,g=a*c;e[0]=l*h,e[4]=g-u*d,e[8]=p*d+f,e[1]=d,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*d+p,e[10]=u-g*d}else if(t.order==="XZY"){let u=o*l,f=o*c,p=a*l,g=a*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+g,e[5]=o*h,e[9]=f*d-p,e[2]=p*d-f,e[6]=a*h,e[10]=g*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Jv,t,$v)}lookAt(t,e,n){let i=this.elements;return pi.subVectors(t,e),pi.lengthSq()===0&&(pi.z=1),pi.normalize(),Zs.crossVectors(n,pi),Zs.lengthSq()===0&&(Math.abs(n.z)===1?pi.x+=1e-4:pi.z+=1e-4,pi.normalize(),Zs.crossVectors(n,pi)),Zs.normalize(),dc.crossVectors(pi,Zs),i[0]=Zs.x,i[4]=dc.x,i[8]=pi.x,i[1]=Zs.y,i[5]=dc.y,i[9]=pi.y,i[2]=Zs.z,i[6]=dc.z,i[10]=pi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],p=n[2],g=n[6],m=n[10],_=n[14],v=n[3],S=n[7],y=n[11],T=n[15],E=i[0],x=i[4],b=i[8],P=i[12],C=i[1],N=i[5],D=i[9],V=i[13],I=i[2],z=i[6],H=i[10],O=i[14],et=i[3],W=i[7],A=i[11],Y=i[15];return r[0]=o*E+a*C+l*I+c*et,r[4]=o*x+a*N+l*z+c*W,r[8]=o*b+a*D+l*H+c*A,r[12]=o*P+a*V+l*O+c*Y,r[1]=h*E+d*C+u*I+f*et,r[5]=h*x+d*N+u*z+f*W,r[9]=h*b+d*D+u*H+f*A,r[13]=h*P+d*V+u*O+f*Y,r[2]=p*E+g*C+m*I+_*et,r[6]=p*x+g*N+m*z+_*W,r[10]=p*b+g*D+m*H+_*A,r[14]=p*P+g*V+m*O+_*Y,r[3]=v*E+S*C+y*I+T*et,r[7]=v*x+S*N+y*z+T*W,r[11]=v*b+S*D+y*H+T*A,r[15]=v*P+S*V+y*O+T*Y,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],p=t[3],g=t[7],m=t[11],_=t[15],v=l*f-c*u,S=a*f-c*d,y=a*u-l*d,T=o*f-c*h,E=o*u-l*h,x=o*d-a*h;return e*(g*v-m*S+_*y)-n*(p*v-m*T+_*E)+i*(p*S-g*T+_*x)-r*(p*y-g*E+m*x)}determinantAffine(){let t=this.elements,e=t[0],n=t[4],i=t[8],r=t[1],o=t[5],a=t[9],l=t[2],c=t[6],h=t[10];return e*(o*h-a*c)-n*(r*h-a*l)+i*(r*c-o*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],p=t[12],g=t[13],m=t[14],_=t[15],v=e*a-n*o,S=e*l-i*o,y=e*c-r*o,T=n*l-i*a,E=n*c-r*a,x=i*c-r*l,b=h*g-d*p,P=h*m-u*p,C=h*_-f*p,N=d*m-u*g,D=d*_-f*g,V=u*_-f*m,I=v*V-S*D+y*N+T*C-E*P+x*b;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/I;return t[0]=(a*V-l*D+c*N)*z,t[1]=(i*D-n*V-r*N)*z,t[2]=(g*x-m*E+_*T)*z,t[3]=(u*E-d*x-f*T)*z,t[4]=(l*C-o*V-c*P)*z,t[5]=(e*V-i*C+r*P)*z,t[6]=(m*y-p*x-_*S)*z,t[7]=(h*x-u*y+f*S)*z,t[8]=(o*D-a*C+c*b)*z,t[9]=(n*C-e*D-r*b)*z,t[10]=(p*E-g*y+_*v)*z,t[11]=(d*y-h*E-f*v)*z,t[12]=(a*P-o*N-l*b)*z,t[13]=(e*N-n*P+i*b)*z,t[14]=(g*S-p*T-m*v)*z,t[15]=(h*T-d*S+u*v)*z,this}scale(t){let e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,d=a+a,u=r*c,f=r*h,p=r*d,g=o*h,m=o*d,_=a*d,v=l*c,S=l*h,y=l*d,T=n.x,E=n.y,x=n.z;return i[0]=(1-(g+_))*T,i[1]=(f+y)*T,i[2]=(p-S)*T,i[3]=0,i[4]=(f-y)*E,i[5]=(1-(u+_))*E,i[6]=(m+v)*E,i[7]=0,i[8]=(p+S)*x,i[9]=(m-v)*x,i[10]=(1-(u+g))*x,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;t.x=i[12],t.y=i[13],t.z=i[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),e.identity(),this;let o=uo.set(i[0],i[1],i[2]).length(),a=uo.set(i[4],i[5],i[6]).length(),l=uo.set(i[8],i[9],i[10]).length();r<0&&(o=-o),Ui.copy(this);let c=1/o,h=1/a,d=1/l;return Ui.elements[0]*=c,Ui.elements[1]*=c,Ui.elements[2]*=c,Ui.elements[4]*=h,Ui.elements[5]*=h,Ui.elements[6]*=h,Ui.elements[8]*=d,Ui.elements[9]*=d,Ui.elements[10]*=d,e.setFromRotationMatrix(Ui),n.x=o,n.y=a,n.z=l,this}makePerspective(t,e,n,i,r,o,a=Ai,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),p,g;if(l)p=r/(o-r),g=o*r/(o-r);else if(a===Ai)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Va)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,r,o,a=Ai,l=!1){let c=this.elements,h=2/(e-t),d=2/(n-i),u=-(e+t)/(e-t),f=-(n+i)/(n-i),p,g;if(l)p=1/(o-r),g=o/(o-r);else if(a===Ai)p=-2/(o-r),g=-(o+r)/(o-r);else if(a===Va)p=-1/(o-r),g=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=p,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}};Ah.prototype.isMatrix4=!0;var ze=Ah,uo=new B,Ui=new ze,Jv=new B(0,0,0),$v=new B(1,1,1),Zs=new B,dc=new B,pi=new B,vg=new ze,yg=new is,js=class s{constructor(t=0,e=0,n=0,i=s.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],d=i[2],u=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(de(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-de(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(de(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-de(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(de(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-de(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Xt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return vg.makeRotationFromQuaternion(t),this.setFromRotationMatrix(vg,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return yg.setFromEuler(this),this.setFromQuaternion(yg,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};js.DEFAULT_ORDER="XYZ";var Wa=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Kv=0,Sg=new B,fo=new is,Ss=new ze,pc=new B,Ra=new B,Qv=new B,jv=new is,Mg=new B(1,0,0),bg=new B(0,1,0),wg=new B(0,0,1),Tg={type:"added"},ty={type:"removed"},po={type:"childadded",child:null},Vf={type:"childremoved",child:null},Jn=class s extends ns{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Kv++}),this.uuid=kr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let t=new B,e=new js,n=new is,i=new B(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ze},normalMatrix:{value:new $t}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return fo.setFromAxisAngle(t,e),this.quaternion.multiply(fo),this}rotateOnWorldAxis(t,e){return fo.setFromAxisAngle(t,e),this.quaternion.premultiply(fo),this}rotateX(t){return this.rotateOnAxis(Mg,t)}rotateY(t){return this.rotateOnAxis(bg,t)}rotateZ(t){return this.rotateOnAxis(wg,t)}translateOnAxis(t,e){return Sg.copy(t).applyQuaternion(this.quaternion),this.position.add(Sg.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Mg,t)}translateY(t){return this.translateOnAxis(bg,t)}translateZ(t){return this.translateOnAxis(wg,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ss.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?pc.copy(t):pc.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ra.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ss.lookAt(Ra,pc,this.up):Ss.lookAt(pc,Ra,this.up),this.quaternion.setFromRotationMatrix(Ss),i&&(Ss.extractRotation(i.matrixWorld),fo.setFromRotationMatrix(Ss),this.quaternion.premultiply(fo.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Zt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Tg),po.child=t,this.dispatchEvent(po),po.child=null):Zt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ty),Vf.child=t,this.dispatchEvent(Vf),Vf.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ss.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ss.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ss),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Tg),po.child=t,this.dispatchEvent(po),po.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,t,Qv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ra,jv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,n=t.y,i=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*n-r[8]*i,r[13]+=n-r[1]*e-r[5]*n-r[9]*i,r[14]+=i-r[2]*e-r[6]*n-r[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e,n=!1){let i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),e===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),d=o(t.shapes),u=o(t.skeletons),f=o(t.animations),p=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Jn.DEFAULT_UP=new B(0,1,0);Jn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Jn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var zi=class extends Jn{constructor(){super(),this.isGroup=!0,this.type="Group"}},ey={type:"move"},No=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let g of t.hand.values()){let m=e.getJointPose(g,n),_=this._getHandJoint(c,g);m!==null&&(_.matrix.fromArray(m.transform.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=m.radius),_.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,p=.005;c.inputState.pinching&&u>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ey)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new zi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}},N_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Js={h:0,s:0,l:0},mc={h:0,s:0,l:0};function Gf(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}var Kt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=gi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ge.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ge.workingColorSpace){return this.r=t,this.g=e,this.b=n,ge.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ge.workingColorSpace){if(t=Xv(t,1),e=de(e,0,1),n=de(n,0,1),e===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Gf(o,r,t+1/3),this.g=Gf(o,r,t),this.b=Gf(o,r,t-1/3)}return ge.colorSpaceToWorking(this,i),this}setStyle(t,e=gi){function n(r){r!==void 0&&parseFloat(r)<1&&Xt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,e);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:Xt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);Xt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=gi){let n=N_[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Xt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Es(t.r),this.g=Es(t.g),this.b=Es(t.b),this}copyLinearToSRGB(t){return this.r=Ro(t.r),this.g=Ro(t.g),this.b=Ro(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=gi){return ge.workingToColorSpace(Nn.copy(this),t),Math.round(de(Nn.r*255,0,255))*65536+Math.round(de(Nn.g*255,0,255))*256+Math.round(de(Nn.b*255,0,255))}getHexString(t=gi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ge.workingColorSpace){ge.workingToColorSpace(Nn.copy(this),e);let n=Nn.r,i=Nn.g,r=Nn.b,o=Math.max(n,i,r),a=Math.min(n,i,r),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let d=o-a;switch(c=h<=.5?d/(o+a):d/(2-o-a),o){case n:l=(i-r)/d+(i<r?6:0);break;case i:l=(r-n)/d+2;break;case r:l=(n-i)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=ge.workingColorSpace){return ge.workingToColorSpace(Nn.copy(this),e),t.r=Nn.r,t.g=Nn.g,t.b=Nn.b,t}getStyle(t=gi){ge.workingToColorSpace(Nn.copy(this),t);let e=Nn.r,n=Nn.g,i=Nn.b;return t!==gi?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(Js),this.setHSL(Js.h+t,Js.s+e,Js.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Js),t.getHSL(mc);let n=Of(Js.h,mc.h,e),i=Of(Js.s,mc.s,e),r=Of(Js.l,mc.l,e);return this.setHSL(n,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*i,this.g=r[1]*e+r[4]*n+r[7]*i,this.b=r[2]*e+r[5]*n+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Nn=new Kt;Kt.NAMES=N_;var Xa=class s{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Kt(t),this.near=e,this.far=n}clone(){return new s(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Nr=class extends Jn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new js,this.environmentIntensity=1,this.environmentRotation=new js,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),this.background=t.background!==null?t.background.clone():null,this.environment=t.environment!==null?t.environment.clone():null,this.fog=t.fog!==null?t.fog.clone():null,this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),this.overrideMaterial=t.overrideMaterial!==null?t.overrideMaterial.clone():null,this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},Oi=new B,Ms=new B,Hf=new B,bs=new B,mo=new B,go=new B,Eg=new B,Wf=new B,Xf=new B,qf=new B,Yf=new Ke,Zf=new Ke,Jf=new Ke,ts=class s{constructor(t=new B,e=new B,n=new B){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Oi.subVectors(t,e),i.cross(Oi);let r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Oi.subVectors(i,e),Ms.subVectors(n,e),Hf.subVectors(t,e);let o=Oi.dot(Oi),a=Oi.dot(Ms),l=Oi.dot(Hf),c=Ms.dot(Ms),h=Ms.dot(Hf),d=o*c-a*a;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-a*h)*u,p=(o*h-a*l)*u;return r.set(1-f-p,p,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,bs)===null?!1:bs.x>=0&&bs.y>=0&&bs.x+bs.y<=1}static getInterpolation(t,e,n,i,r,o,a,l){return this.getBarycoord(t,e,n,i,bs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,bs.x),l.addScaledVector(o,bs.y),l.addScaledVector(a,bs.z),l)}static getInterpolatedAttribute(t,e,n,i,r,o){return Yf.setScalar(0),Zf.setScalar(0),Jf.setScalar(0),Yf.fromBufferAttribute(t,e),Zf.fromBufferAttribute(t,n),Jf.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(Yf,r.x),o.addScaledVector(Zf,r.y),o.addScaledVector(Jf,r.z),o}static isFrontFacing(t,e,n,i){return Oi.subVectors(n,e),Ms.subVectors(t,e),Oi.cross(Ms).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Oi.subVectors(this.c,this.b),Ms.subVectors(this.a,this.b),Oi.cross(Ms).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return s.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return s.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,r){return s.getInterpolation(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return s.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return s.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,r=this.c,o,a;mo.subVectors(i,n),go.subVectors(r,n),Wf.subVectors(t,n);let l=mo.dot(Wf),c=go.dot(Wf);if(l<=0&&c<=0)return e.copy(n);Xf.subVectors(t,i);let h=mo.dot(Xf),d=go.dot(Xf);if(h>=0&&d<=h)return e.copy(i);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return o=l/(l-h),e.copy(n).addScaledVector(mo,o);qf.subVectors(t,r);let f=mo.dot(qf),p=go.dot(qf);if(p>=0&&f<=p)return e.copy(r);let g=f*c-l*p;if(g<=0&&c>=0&&p<=0)return a=c/(c-p),e.copy(n).addScaledVector(go,a);let m=h*p-f*d;if(m<=0&&d-h>=0&&f-p>=0)return Eg.subVectors(r,i),a=(d-h)/(d-h+(f-p)),e.copy(i).addScaledVector(Eg,a);let _=1/(m+g+u);return o=g*_,a=u*_,e.copy(n).addScaledVector(mo,o).addScaledVector(go,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},tr=class{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Fi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Fi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Fi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0&&t.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Fi):Fi.fromBufferAttribute(r,o),Fi.applyMatrix4(t.matrixWorld),this.expandByPoint(Fi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),gc.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),gc.copy(n.boundingBox)),gc.applyMatrix4(t.matrixWorld),this.union(gc)}let i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Fi),Fi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Pa),_c.subVectors(this.max,Pa),_o.subVectors(t.a,Pa),xo.subVectors(t.b,Pa),vo.subVectors(t.c,Pa),$s.subVectors(xo,_o),Ks.subVectors(vo,xo),Pr.subVectors(_o,vo);let e=[0,-$s.z,$s.y,0,-Ks.z,Ks.y,0,-Pr.z,Pr.y,$s.z,0,-$s.x,Ks.z,0,-Ks.x,Pr.z,0,-Pr.x,-$s.y,$s.x,0,-Ks.y,Ks.x,0,-Pr.y,Pr.x,0];return!$f(e,_o,xo,vo,_c)||(e=[1,0,0,0,1,0,0,0,1],!$f(e,_o,xo,vo,_c))?!1:(xc.crossVectors($s,Ks),e=[xc.x,xc.y,xc.z],$f(e,_o,xo,vo,_c))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Fi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Fi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ws[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ws[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ws[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ws[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ws[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ws[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ws[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ws[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ws),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ws=[new B,new B,new B,new B,new B,new B,new B,new B],Fi=new B,gc=new tr,_o=new B,xo=new B,vo=new B,$s=new B,Ks=new B,Pr=new B,Pa=new B,_c=new B,xc=new B,Ir=new B;function $f(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){Ir.fromArray(s,r);let a=i.x*Math.abs(Ir.x)+i.y*Math.abs(Ir.y)+i.z*Math.abs(Ir.z),l=t.dot(Ir),c=e.dot(Ir),h=n.dot(Ir);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var on=new B,vc=new te,ny=0,ki=class extends ns{constructor(t,e,n=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ny++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=kd,this.updateRanges=[],this.gpuType=Gi,this.version=0,this._normalizationScale=t!==void 0?du(t):void 0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this._normalizationScale=t._normalizationScale,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)vc.fromBufferAttribute(this,e),vc.applyMatrix3(t),this.setXY(e,vc.x,vc.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)on.fromBufferAttribute(this,e),on.applyMatrix3(t),this.setXYZ(e,on.x,on.y,on.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)on.fromBufferAttribute(this,e),on.applyMatrix4(t),this.setXYZ(e,on.x,on.y,on.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)on.fromBufferAttribute(this,e),on.applyNormalMatrix(t),this.setXYZ(e,on.x,on.y,on.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)on.fromBufferAttribute(this,e),on.transformDirection(t),this.setXYZ(e,on.x,on.y,on.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=this._denormalize(e)),e}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=this._denormalize(e)),e}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=this._denormalize(e)),e}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=this._denormalize(e)),e}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):L_(t,this.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):D_(t,this.array)}};var qa=class extends ki{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ya=class extends ki{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var De=class extends ki{constructor(t,e,n){super(new Float32Array(t),e,n)}},iy=new tr,Ia=new B,Kf=new B,er=class{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):iy.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ia.subVectors(t,this.center);let e=Ia.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(Ia,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Kf.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ia.copy(t.center).add(Kf)),this.expandByPoint(Ia.copy(t.center).sub(Kf))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},sy=0,Ei=new ze,Qf=new Jn,yo=new B,mi=new tr,La=new tr,gn=new B,an=class s extends ns{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:sy++}),this.uuid=kr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hv(t)?Ya:qa)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new $t().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return Ei.makeRotationFromQuaternion(t),this.applyMatrix4(Ei),this}rotateX(t){return Ei.makeRotationX(t),this.applyMatrix4(Ei),this}rotateY(t){return Ei.makeRotationY(t),this.applyMatrix4(Ei),this}rotateZ(t){return Ei.makeRotationZ(t),this.applyMatrix4(Ei),this}translate(t,e,n){return Ei.makeTranslation(t,e,n),this.applyMatrix4(Ei),this}scale(t,e,n){return Ei.makeScale(t,e,n),this.applyMatrix4(Ei),this}lookAt(t){return Qf.lookAt(t),Qf.updateMatrix(),this.applyMatrix4(Qf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yo).negate(),this.translate(yo.x,yo.y,yo.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,r=t.length;i<r;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new De(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&Xt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new tr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let r=e[n];mi.setFromBufferAttribute(r),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,mi.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,mi.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(mi.min),this.boundingBox.expandByPoint(mi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new er);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){let n=this.boundingSphere.center;if(mi.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){let a=e[r];La.setFromBufferAttribute(a),this.morphTargetsRelative?(gn.addVectors(mi.min,La.min),mi.expandByPoint(gn),gn.addVectors(mi.max,La.max),mi.expandByPoint(gn)):(mi.expandByPoint(La.min),mi.expandByPoint(La.max))}mi.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)gn.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(gn));if(e)for(let r=0,o=e.length;r<o;r++){let a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)gn.fromBufferAttribute(a,c),l&&(yo.fromBufferAttribute(t,c),gn.add(yo)),i=Math.max(i,n.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,r=e.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new ki(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],l=[],c=new Uint8Array(n.count);for(let P=0;P<n.count;P++)a[P]=new B,l[P]=new B;let h=new B,d=new B,u=new B,f=new te,p=new te,g=new te,m=new B,_=new B;function v(P,C,N){c[P]=c[C]=c[N]=1,h.fromBufferAttribute(n,P),d.fromBufferAttribute(n,C),u.fromBufferAttribute(n,N),f.fromBufferAttribute(r,P),p.fromBufferAttribute(r,C),g.fromBufferAttribute(r,N),d.sub(h),u.sub(h),p.sub(f),g.sub(f);let D=1/(p.x*g.y-g.x*p.y);isFinite(D)&&(m.copy(d).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(D),_.copy(u).multiplyScalar(p.x).addScaledVector(d,-g.x).multiplyScalar(D),a[P].add(m),a[C].add(m),a[N].add(m),l[P].add(_),l[C].add(_),l[N].add(_))}let S=this.groups;S.length===0&&(S=[{start:0,count:t.count}]);for(let P=0,C=S.length;P<C;++P){let N=S[P],D=N.start,V=N.count;for(let I=D,z=D+V;I<z;I+=3)v(t.getX(I+0),t.getX(I+1),t.getX(I+2))}let y=new B,T=new B,E=new B,x=new B;function b(P){E.fromBufferAttribute(i,P),x.copy(E);let C=a[P];y.copy(C),y.sub(E.multiplyScalar(E.dot(C))).normalize(),T.crossVectors(x,C);let D=T.dot(l[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,D)}for(let P=0,C=n.count;P<C;++P)c[P]&&b(P);this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==e.count)n=new ki(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let i=new B,r=new B,o=new B,a=new B,l=new B,c=new B,h=new B,d=new B;if(t)for(let u=0,f=t.count;u<f;u+=3){let p=t.getX(u+0),g=t.getX(u+1),m=t.getX(u+2);i.fromBufferAttribute(e,p),r.fromBufferAttribute(e,g),o.fromBufferAttribute(e,m),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),a.fromBufferAttribute(n,p),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(p,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)i.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),o.fromBufferAttribute(e,u+2),h.subVectors(o,r),d.subVectors(i,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)gn.fromBufferAttribute(t,e),gn.normalize(),t.setXYZ(e,gn.x,gn.y,gn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,d=a.normalized,u=new c.constructor(l.length*h),f=0,p=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*h;for(let _=0;_<h;_++)u[p++]=c[f++]}return new ki(u,h,d)}if(this.index===null)return Xt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new s,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let r=this.morphAttributes;for(let a in r){let l=[],c=r[a];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let d=o[c];this.addGroup(d.start,d.count,d.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ah=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=kd,this.updateRanges=[],this.version=0,this.uuid=kr()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,r=this.stride;i<r;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Ag(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=this.array.slice(0).buffer);let n=new this.array.constructor(t.arrayBuffers[e]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={});let e=Ag(this.array);t.arrayBuffers[e]===void 0&&(t.arrayBuffers[e]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:e,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function Ag(s){return s.buffer._uuid===void 0&&(s.buffer._uuid=kr()),s.byteOffset===0&&s.byteLength===s.buffer.byteLength?s.buffer._uuid:s.buffer._uuid+":"+s.byteOffset+":"+s.byteLength}var Yn=new B,Za=class s{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i,this._normalizationScale=t!==void 0?du(t.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Yn.fromBufferAttribute(this,e),Yn.applyMatrix4(t),this.setXYZ(e,Yn.x,Yn.y,Yn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Yn.fromBufferAttribute(this,e),Yn.applyNormalMatrix(t),this.setXYZ(e,Yn.x,Yn.y,Yn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Yn.fromBufferAttribute(this,e),Yn.transformDirection(t),this.setXYZ(e,Yn.x,Yn.y,Yn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=this._denormalize(n)),n}setComponent(t,e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=this._normalize(e)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=this._denormalize(e)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=this._denormalize(e)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=this._denormalize(e)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=this._denormalize(e)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=this._normalize(e),n=this._normalize(n),i=this._normalize(i),r=this._normalize(r)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=r,this}clone(t){if(t===void 0){Ga("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return new ki(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new s(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Ga("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(t){let e=this._normalizationScale;return e!==void 0?Math.max(t/e,-1):L_(t,this.data.array)}_normalize(t){let e=this._normalizationScale;return e!==void 0?Math.round(t*e):D_(t,this.data.array)}},jf=new B,ry=new B,oy=new $t,Bi=class{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=jf.subVectors(n,e).cross(ry.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,n=!0){let i=t.delta(jf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let o=-(t.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||oy.getNormalMatrix(t),i=this.coplanarPoint(jf).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},ay=0,ss=class extends ns{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ay++}),this.uuid=kr(),this.name="",this.type="Material",this.blending=Ho,this.side=ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=xd,this.blendDst=vd,this.blendEquation=Fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Kt(0,0,0),this.blendAlpha=0,this.depthFunc=Po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=S_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Wc,this.stencilZFail=Wc,this.stencilZPass=Wc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Xt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Xt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(t).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){let o=[];for(let a in r){let l=r[a];delete l.metadata,o.push(l)}return o}if(e){let r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new Kt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.diffuseRoughness!==void 0&&(this.diffuseRoughness=t.diffuseRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessMinimum),t.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=t.iridescenceThicknessMaximum),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=t.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=t.iridescenceThicknessRange[1]),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(n=>new Bi().fromJSON(n))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let n=t.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new te().fromArray(n)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new te().fromArray(t.clearcoatNormalScale)),t.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=e[t.diffuseRoughnessMap]||null),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Uo=class extends ss{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Kt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},So,Da=new B,Mo=new B,bo=new B,wo=new te,Na=new te,U_=new ze,yc=new B,Ua=new B,Sc=new B,Cg=new te,td=new te,Rg=new te,Ja=class extends Jn{constructor(t=new Uo){if(super(),this.isSprite=!0,this.type="Sprite",So===void 0){So=new an;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ah(e,5);So.setIndex([0,1,2,0,2,3]),So.setAttribute("position",new Za(n,3,0,!1)),So.setAttribute("uv",new Za(n,2,3,!1))}this.geometry=So,this.material=t,this.center=new te(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&Zt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Mo.setFromMatrixScale(this.matrixWorld),U_.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),bo.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Mo.multiplyScalar(-bo.z);let n=this.material.rotation,i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));let o=this.center;Mc(yc.set(-.5,-.5,0),bo,o,Mo,i,r),Mc(Ua.set(.5,-.5,0),bo,o,Mo,i,r),Mc(Sc.set(.5,.5,0),bo,o,Mo,i,r),Cg.set(0,0),td.set(1,0),Rg.set(1,1);let a=t.ray.intersectTriangle(yc,Ua,Sc,!1,Da);if(a===null&&(Mc(Ua.set(-.5,.5,0),bo,o,Mo,i,r),td.set(0,1),a=t.ray.intersectTriangle(yc,Sc,Ua,!1,Da),a===null))return;let l=t.ray.origin.distanceTo(Da);l<t.near||l>t.far||e.push({distance:l,point:Da.clone(),uv:ts.getInterpolation(Da,yc,Ua,Sc,Cg,td,Rg,new te),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}toJSON(t){let e=super.toJSON(t);return e.object.center=this.center.toArray(),e}};function Mc(s,t,e,n,i,r){wo.subVectors(s,e).addScalar(.5).multiply(n),i!==void 0?(Na.x=r*wo.x-i*wo.y,Na.y=i*wo.x+r*wo.y):Na.copy(wo),s.copy(t),s.x+=Na.x,s.y+=Na.y,s.applyMatrix4(U_)}var Ts=new B,ed=new B,bc=new B,wc=new B,Oo=class{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ts)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Ts.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ts.copy(this.origin).addScaledVector(this.direction,e),Ts.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){ed.copy(t).add(e).multiplyScalar(.5),bc.copy(e).sub(t).normalize(),wc.copy(this.origin).sub(ed);let r=t.distanceTo(e)*.5,o=-this.direction.dot(bc),a=wc.dot(this.direction),l=-wc.dot(bc),c=wc.lengthSq(),h=Math.abs(1-o*o),d,u,f,p;if(h>0)if(d=o*l-a,u=o*a-l,p=r*h,d>=0)if(u>=-p)if(u<=p){let g=1/h;d*=g,u*=g,f=d*(d+o*u+2*a)+u*(o*d+u+2*l)+c}else u=r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;else u<=-p?(d=Math.max(0,-(-o*r+a)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=p?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(o*r+a)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=o>0?-r:r,d=Math.max(0,-(o*u+a)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(ed).addScaledVector(bc,u),f}intersectSphere(t,e){if(t.radius<0)return null;Ts.subVectors(t.center,this.origin);let n=Ts.dot(this.direction),i=Ts.dot(Ts)-n*n,r=t.radius*t.radius;if(i>r)return null;let o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(t.min.x-u.x)*c,i=(t.max.x-u.x)*c):(n=(t.max.x-u.x)*c,i=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,o=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,o=(t.min.y-u.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),d>=0?(a=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(a=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,Ts)!==null}intersectTriangle(t,e,n,i,r){let o=this.origin,a=this.direction,l=a.x,c=a.y,h=a.z,d=t.x-o.x,u=t.y-o.y,f=t.z-o.z,p=e.x-o.x,g=e.y-o.y,m=e.z-o.z,_=n.x-o.x,v=n.y-o.y,S=n.z-o.z,y=Math.abs(l),T=Math.abs(c),E=Math.abs(h),x,b,P,C,N,D,V,I,z,H,O,et;if(y>=T&&y>=E?(P=l,D=d,z=p,et=_,l>=0?(x=c,b=h,C=u,N=f,V=g,I=m,H=v,O=S):(x=h,b=c,C=f,N=u,V=m,I=g,H=S,O=v)):T>=E?(P=c,D=u,z=g,et=v,c>=0?(x=h,b=l,C=f,N=d,V=m,I=p,H=S,O=_):(x=l,b=h,C=d,N=f,V=p,I=m,H=_,O=S)):(P=h,D=f,z=m,et=S,h>=0?(x=l,b=c,C=d,N=u,V=p,I=g,H=_,O=v):(x=c,b=l,C=u,N=d,V=g,I=p,H=v,O=_)),P===0)return null;let W=x/P,A=b/P,Y=1/P,St=C-W*D,Dt=N-A*D,J=V-W*z,at=I-A*z,ut=H-W*et,Et=O-A*et,yt=ut*at-Et*J,Bt=St*Et-Dt*ut,Me=J*Dt-at*St;if(i){if(yt<0||Bt<0||Me<0)return null}else if((yt<0||Bt<0||Me<0)&&(yt>0||Bt>0||Me>0))return null;let Lt=yt+Bt+Me;if(Lt===0)return null;let Yt=Y*(yt*D+Bt*z+Me*et);return(Lt>0?Yt<0:Yt>0)?null:this.at(Yt/Lt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},rs=class extends ss{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Kt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new js,this.combine=yd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Pg=new ze,Lr=new Oo,Tc=new er,Ig=new B,Ec=new B,Ac=new B,Cc=new B,nd=new B,Rc=new B,Lg=new B,Pc=new B,vn=class extends Jn{constructor(t=new an,e=new rs){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(r&&a){Rc.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=a[l],d=r[l];h!==0&&(nd.fromBufferAttribute(d,t),o?Rc.addScaledVector(nd,h):Rc.addScaledVector(nd.sub(e),h))}e.add(Rc)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Tc.copy(n.boundingSphere),Tc.applyMatrix4(r),Lr.copy(t.ray).recast(t.near),!(Tc.containsPoint(Lr.origin)===!1&&(Lr.intersectSphere(Tc,Ig)===null||Lr.origin.distanceToSquared(Ig)>(t.far-t.near)**2))&&(Pg.copy(r).invert(),Lr.copy(t.ray).applyMatrix4(Pg),!(n.boundingBox!==null&&Lr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Lr)))}_computeIntersections(t,e,n){let i,r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,g=u.length;p<g;p++){let m=u[p],_=o[m.materialIndex],v=Math.max(m.start,f.start),S=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,T=S;y<T;y+=3){let E=a.getX(y),x=a.getX(y+1),b=a.getX(y+2);i=Ic(this,_,t,n,c,h,d,E,x,b),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let m=p,_=g;m<_;m+=3){let v=a.getX(m),S=a.getX(m+1),y=a.getX(m+2);i=Ic(this,o,t,n,c,h,d,v,S,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,g=u.length;p<g;p++){let m=u[p],_=o[m.materialIndex],v=Math.max(m.start,f.start),S=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let y=v,T=S;y<T;y+=3){let E=y,x=y+1,b=y+2;i=Ic(this,_,t,n,c,h,d,E,x,b),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=m.materialIndex,e.push(i))}}else{let p=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=p,_=g;m<_;m+=3){let v=m,S=m+1,y=m+2;i=Ic(this,o,t,n,c,h,d,v,S,y),i&&(i.faceIndex=Math.floor(m/3),e.push(i))}}}};function ly(s,t,e,n,i,r,o,a){let l;if(t.side===Kn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,t.side===ar,a),l===null)return null;Pc.copy(a),Pc.applyMatrix4(s.matrixWorld);let c=e.ray.origin.distanceTo(Pc);return c<e.near||c>e.far?null:{distance:c,point:Pc.clone(),object:s}}function Ic(s,t,e,n,i,r,o,a,l,c){s.getVertexPosition(a,Ec),s.getVertexPosition(l,Ac),s.getVertexPosition(c,Cc);let h=ly(s,t,e,n,Ec,Ac,Cc,Lg);if(h){let d=new B;ts.getBarycoord(Lg,Ec,Ac,Cc,d),i&&(h.uv=ts.getInterpolatedAttribute(i,a,l,c,d,new te)),r&&(h.uv1=ts.getInterpolatedAttribute(r,a,l,c,d,new te)),o&&(h.normal=ts.getInterpolatedAttribute(o,a,l,c,d,new B),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:l,c,normal:new B,materialIndex:0};ts.getNormal(Ec,Ac,Cc,u.normal),h.face=u,h.barycoord=d}return h}var lh=class extends Un{constructor(t=null,e=1,n=1,i,r,o,a,l,c=_n,h=_n,d,u){super(null,o,a,l,c,h,i,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Dr=new er,cy=new te(.5,.5),Lc=new B,Ur=class{constructor(t=new Bi,e=new Bi,n=new Bi,i=new Bi,r=new Bi,o=new Bi){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Ai,n=!1){let i=this.planes,r=t.elements,o=r[0],a=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],p=r[8],g=r[9],m=r[10],_=r[11],v=r[12],S=r[13],y=r[14],T=r[15];if(i[0].setComponents(c-o,f-h,_-p,T-v).normalize(),i[1].setComponents(c+o,f+h,_+p,T+v).normalize(),i[2].setComponents(c+a,f+d,_+g,T+S).normalize(),i[3].setComponents(c-a,f-d,_-g,T-S).normalize(),n)i[4].setComponents(l,u,m,y).normalize(),i[5].setComponents(c-l,f-u,_-m,T-y).normalize();else if(i[4].setComponents(c-l,f-u,_-m,T-y).normalize(),e===Ai)i[5].setComponents(c+l,f+u,_+m,T+y).normalize();else if(e===Va)i[5].setComponents(l,u,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Dr.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Dr.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Dr)}intersectsSprite(t){Dr.center.set(0,0,0);let e=cy.distanceTo(t.center);return Dr.radius=.7071067811865476+e,Dr.applyMatrix4(t.matrixWorld),this.intersectsSphere(Dr)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Lc.x=i.normal.x>0?t.max.x:t.min.x,Lc.y=i.normal.y>0?t.max.y:t.min.y,Lc.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Lc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Dg=new ze,ch=class s{constructor(){this.coordinateSystem=Ai,this._frustums=[],this._count=0}setFromArrayCamera(t){let e=t.cameras,n=this._frustums;for(let i=0;i<e.length;i++){let r=e[i];Dg.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[i]===void 0&&(n[i]=new Ur),n[i].setFromProjectionMatrix(Dg,r.coordinateSystem,r.reversedDepth)}return this._count=e.length,this}getFrustum(t){return this._frustums[t]}intersectsObject(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsObject(t))return!0;return!1}intersectsSprite(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSprite(t))return!0;return!1}intersectsSphere(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsSphere(t))return!0;return!1}intersectsBox(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].intersectsBox(t))return!0;return!1}containsPoint(t){let e=this._frustums;for(let n=0;n<this._count;n++)if(e[n].containsPoint(t))return!0;return!1}copy(t){this.coordinateSystem=t.coordinateSystem;let e=this._frustums,n=t._frustums;for(let i=0;i<t._count;i++)e[i]===void 0&&(e[i]=new Ur),e[i].copy(n[i]);return this._count=t._count,this}clone(){return new s().copy(this)}};var $n=class extends ss{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Kt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},hh=new B,uh=new B,Ng=new ze,Oa=new Oo,Dc=new er,id=new B,Ug=new B,Ci=class extends Jn{constructor(t=new an,e=new $n){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)hh.fromBufferAttribute(e,i-1),uh.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=hh.distanceTo(uh);t.setAttribute("lineDistance",new De(n,1))}else Xt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Dc.copy(n.boundingSphere),Dc.applyMatrix4(i),Dc.radius+=r,t.ray.intersectsSphere(Dc)===!1)return;Ng.copy(i).invert(),Oa.copy(t.ray).applyMatrix4(Ng);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=f,m=p-1;g<m;g+=c){let _=h.getX(g),v=h.getX(g+1),S=Nc(this,t,Oa,l,_,v,g);S&&e.push(S)}if(this.isLineLoop){let g=h.getX(p-1),m=h.getX(f),_=Nc(this,t,Oa,l,g,m,p-1);_&&e.push(_)}}else{let f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=f,m=p-1;g<m;g+=c){let _=Nc(this,t,Oa,l,g,g+1,g);_&&e.push(_)}if(this.isLineLoop){let g=Nc(this,t,Oa,l,p-1,f,p-1);g&&e.push(g)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Nc(s,t,e,n,i,r,o){let a=s.geometry.attributes.position;if(hh.fromBufferAttribute(a,i),uh.fromBufferAttribute(a,r),e.distanceSqToSegment(hh,uh,id,Ug)>n)return;id.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(id);if(!(c<t.near||c>t.far))return{distance:c,point:Ug.clone().applyMatrix4(s.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:s}}var Og=new B,Fg=new B,nr=class extends Ci{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)Og.fromBufferAttribute(e,i),Fg.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Og.distanceTo(Fg);t.setAttribute("lineDistance",new De(n,1))}else Xt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var Fo=class extends ss{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Kt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},Bg=new ze,fd=new Oo,Uc=new er,Oc=new B,$a=class extends Jn{constructor(t=new an,e=new Fo){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0?this.morphTargetInfluences=t.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,t.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let n=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Uc.copy(n.boundingSphere),Uc.applyMatrix4(i),Uc.radius+=r,t.ray.intersectsSphere(Uc)===!1)return;Bg.copy(i).invert(),fd.copy(t.ray).applyMatrix4(Bg);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let p=u,g=f;p<g;p++){let m=c.getX(p);Oc.fromBufferAttribute(d,m),zg(Oc,m,l,i,t,e,this)}}else{let u=Math.max(0,o.start),f=Math.min(d.count,o.start+o.count);for(let p=u,g=f;p<g;p++)Oc.fromBufferAttribute(d,p),zg(Oc,p,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){let a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function zg(s,t,e,n,i,r,o){let a=fd.distanceSqToPoint(s);if(a<e){let l=new B;fd.closestPointToPoint(s,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Ka=class extends Un{constructor(t=[],e=Br,n,i,r,o,a,l,c,h){super(t,e,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Qa=class extends Un{constructor(t,e,n,i,r,o,a,l,c){super(t,e,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Cs=class extends Un{constructor(t,e,n=Vi,i,r,o,a=_n,l=_n,c,h=As,d=1){if(h!==As&&h!==Is)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Do(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},ja=class extends Cs{constructor(t,e=Vi,n=Br,i,r,o=_n,a=_n,l,c=As){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,n,i,r,o,a,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},tl=class extends Un{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},ir=class s extends an{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};let a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);let l=[],c=[],h=[],d=[],u=0,f=0;p("z","y","x",-1,-1,n,e,t,o,r,0),p("z","y","x",1,-1,n,e,-t,o,r,1),p("x","z","y",1,1,t,n,e,i,o,2),p("x","z","y",1,-1,t,n,-e,i,o,3),p("x","y","z",1,-1,t,e,n,i,r,4),p("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new De(c,3)),this.setAttribute("normal",new De(h,3)),this.setAttribute("uv",new De(d,2));function p(g,m,_,v,S,y,T,E,x,b,P){let C=y/x,N=T/b,D=y/2,V=T/2,I=E/2,z=x+1,H=b+1,O=0,et=0,W=new B;for(let A=0;A<H;A++){let Y=A*N-V;for(let St=0;St<z;St++){let Dt=St*C-D;W[g]=Dt*v,W[m]=Y*S,W[_]=I,c.push(W.x,W.y,W.z),W[g]=0,W[m]=0,W[_]=E>0?1:-1,h.push(W.x,W.y,W.z),d.push(St/x),d.push(1-A/b),O+=1}}for(let A=0;A<b;A++)for(let Y=0;Y<x;Y++){let St=u+Y+z*A,Dt=u+Y+z*(A+1),J=u+(Y+1)+z*(A+1),at=u+(Y+1)+z*A;l.push(St,Dt,at),l.push(Dt,J,at),et+=6}a.addGroup(f,et,P),f+=et,u+=O}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};var Fc=new B,Bc=new B,sd=new B,zc=new ts,el=class extends an{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){let i=Math.pow(10,4),r=Math.cos(Xc*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],d=new Array(3),u=new Map,f=[];for(let p=0;p<l;p+=3){o?(c[0]=o.getX(p),c[1]=o.getX(p+1),c[2]=o.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);let{a:g,b:m,c:_}=zc;if(g.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),_.fromBufferAttribute(a,c[2]),zc.getNormal(sd),d[0]=`${Math.round(g.x*i)},${Math.round(g.y*i)},${Math.round(g.z*i)}`,d[1]=`${Math.round(m.x*i)},${Math.round(m.y*i)},${Math.round(m.z*i)}`,d[2]=`${Math.round(_.x*i)},${Math.round(_.y*i)},${Math.round(_.z*i)}`,!(d[0]===d[1]||d[1]===d[2]||d[2]===d[0]))for(let v=0;v<3;v++){let S=(v+1)%3,y=d[v],T=d[S],E=zc[h[v]],x=zc[h[S]],b=`${y}_${T}`,P=`${T}_${y}`,C=u.get(P);C?(sd.dot(C.normal)<=r&&(f.push(E.x,E.y,E.z),f.push(x.x,x.y,x.z)),u.set(P,null)):u.has(b)||u.set(b,{index0:c[v],index1:c[S],normal:sd.clone()})}}for(let p of u.values())if(p){let{index0:g,index1:m}=p;Fc.fromBufferAttribute(a,g),Bc.fromBufferAttribute(a,m),f.push(Fc.x,Fc.y,Fc.z),f.push(Bc.x,Bc.y,Bc.z)}this.setAttribute("position",new De(f,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}},fh=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Xt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),r=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),r+=n.distanceTo(i),e.push(r),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,r=n.length,o;e?o=e:o=t*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);let h=n[i],u=n[i+1]-h,f=(o-h)/u;return(i+f)/(r-1)}getTangent(t,e){let i=t-1e-4,r=t+1e-4;i<0&&(i=0),r>1&&(r=1);let o=this.getPoint(i),a=this.getPoint(r),l=e||(o.isVector2?new te:new B);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new B,i=[],r=[],o=[],a=new B,l=new ze;for(let f=0;f<=t;f++){let p=f/t;i[f]=this.getTangentAt(p,new B)}r[0]=new B,o[0]=new B;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),d=Math.abs(i[0].y),u=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let p=Math.acos(de(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,p))}o[f].crossVectors(i[f],r[f])}if(e===!0){let f=Math.acos(de(r[0].dot(r[t]),-1,1));f/=t,i[0].dot(a.crossVectors(r[0],r[t]))>0&&(f=-f);for(let p=1;p<=t;p++)r[p].applyMatrix4(l.makeRotationAxis(i[p],f*p)),o[p].crossVectors(i[p],r[p])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this.cacheArcLengths=null,this}};function Gd(){let s=0,t=0,e=0,n=0;function i(r,o,a,l){s=r,t=a,e=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,d){let u=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+d)+(l-a)/d;u*=h,f*=h,i(o,a,u,f)},calc:function(r){let o=r*r,a=o*r;return s+t*r+e*o+n*a}}}var kg=new B,Vg=new B,rd=new Gd,od=new Gd,ad=new Gd,nl=class extends fh{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new B){let n=e,i=this.points,r=i.length,o=(r-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(Vg.subVectors(i[0],i[1]).add(i[0]),c=Vg);let d=i[a%r],u=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(kg.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=kg),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,p=Math.pow(c.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);g<1e-4&&(g=1),p<1e-4&&(p=g),m<1e-4&&(m=g),rd.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,p,g,m),od.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,p,g,m),ad.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,p,g,m)}else this.curveType==="catmullrom"&&(rd.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),od.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),ad.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(rd.calc(l),od.calc(l),ad.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new B().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};var Rs=class s extends an{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,d=t/a,u=e/l,f=[],p=[],g=[],m=[];for(let _=0;_<h;_++){let v=_*u-o;for(let S=0;S<c;S++){let y=S*d-r;p.push(y,-v,0),g.push(0,0,1),m.push(S/a),m.push(1-_/l)}}for(let _=0;_<l;_++)for(let v=0;v<a;v++){let S=v+c*_,y=v+c*(_+1),T=v+1+c*(_+1),E=v+1+c*_;f.push(S,y,E),f.push(y,T,E)}this.setIndex(f),this.setAttribute("position",new De(p,3)),this.setAttribute("normal",new De(g,3)),this.setAttribute("uv",new De(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.width,t.height,t.widthSegments,t.heightSegments)}};var Bo=class s extends an{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],d=new B,u=new B,f=[],p=[],g=[],m=[];for(let _=0;_<=n;_++){let v=[],S=_/n,y=o+S*a,T=t*Math.cos(y),E=Math.sqrt(t*t-T*T),x=0;_===0&&o===0?x=.5/e:_===n&&l===Math.PI&&(x=-.5/e);for(let b=0;b<=e;b++){let P=b/e,C=i+P*r;d.x=-E*Math.cos(C),d.y=T,d.z=E*Math.sin(C),p.push(d.x,d.y,d.z),u.copy(d).normalize(),g.push(u.x,u.y,u.z),m.push(P+x,1-S),v.push(c++)}h.push(v)}for(let _=0;_<n;_++)for(let v=0;v<e;v++){let S=h[_][v+1],y=h[_][v],T=h[_+1][v],E=h[_+1][v+1];(_!==0||o>0)&&f.push(S,y,E),(_!==n-1||l<Math.PI)&&f.push(y,T,E)}this.setIndex(f),this.setAttribute("position",new De(p,3)),this.setAttribute("normal",new De(g,3)),this.setAttribute("uv",new De(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new s(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var il=class extends an{constructor(t=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:t},t!==null){let e=[],n=new Set,i=new B,r=new B;if(t.index!==null){let o=t.attributes.position,a=t.index,l=t.groups;l.length===0&&(l=[{start:0,count:a.count,materialIndex:0}]);for(let c=0,h=l.length;c<h;++c){let d=l[c],u=d.start,f=d.count;for(let p=u,g=u+f;p<g;p+=3)for(let m=0;m<3;m++){let _=a.getX(p+m),v=a.getX(p+(m+1)%3);i.fromBufferAttribute(o,_),r.fromBufferAttribute(o,v),Gg(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}}else{let o=t.attributes.position;for(let a=0,l=o.count/3;a<l;a++)for(let c=0;c<3;c++){let h=3*a+c,d=3*a+(c+1)%3;i.fromBufferAttribute(o,h),r.fromBufferAttribute(o,d),Gg(i,r,n)===!0&&(e.push(i.x,i.y,i.z),e.push(r.x,r.y,r.z))}}this.setAttribute("position",new De(e,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}};function Gg(s,t,e){let n=`${s.x},${s.y},${s.z}-${t.x},${t.y},${t.z}`,i=`${t.x},${t.y},${t.z}-${s.x},${s.y},${s.z}`;return e.has(n)===!0||e.has(i)===!0?!1:(e.add(n),e.add(i),!0)}function Vr(s){let t={};for(let e in s){t[e]={};for(let n in s[e]){let i=s[e][n];if(Hg(i))i.isRenderTargetTexture?(Xt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone();else if(Array.isArray(i))if(Hg(i[0])){let r=[];for(let o=0,a=i.length;o<a;o++)r[o]=i[o].clone();t[e][n]=r}else t[e][n]=i.slice();else t[e][n]=i}}return t}function On(s){let t={};for(let e=0;e<s.length;e++){let n=Vr(s[e]);for(let i in n)t[i]=n[i]}return t}function Hg(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function hy(s){let t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Hd(s){let t=s.getRenderTarget();return t===null?s.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ge.workingColorSpace}var O_={clone:Vr,merge:On},uy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,fy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ri=class extends ss{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=uy,this.fragmentShader=fy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Vr(t.uniforms),this.uniformsGroups=hy(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let n in t.uniforms){let i=t.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=e[i.value]||null;break;case"c":this.uniforms[n].value=new Kt().setHex(i.value);break;case"v2":this.uniforms[n].value=new te().fromArray(i.value);break;case"v3":this.uniforms[n].value=new B().fromArray(i.value);break;case"v4":this.uniforms[n].value=new Ke().fromArray(i.value);break;case"m3":this.uniforms[n].value=new $t().fromArray(i.value);break;case"m4":this.uniforms[n].value=new ze().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let n in t.extensions)this.extensions[n]=t.extensions[n];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},dh=class extends Ri{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}};var ph=class extends ss{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=v_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},mh=class extends ss{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};var sl=class extends $n{constructor(t){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(t)}copy(t){return super.copy(t),this.scale=t.scale,this.dashSize=t.dashSize,this.gapSize=t.gapSize,this}};function To(s,t){return!s||s.constructor===t?s:typeof t.BYTES_PER_ELEMENT=="number"?new t(s):Array.prototype.slice.call(s)}function kc(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var sr=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],r=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<r)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=r)){let a=e[1];t<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=e[--n-1],t>=r)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],r=e[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=t*i;for(let o=0;o!==i;++o)e[o]=n[r+o];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},gh=class extends sr{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:cd,endingEnd:cd}}intervalChanged_(t,e,n){let i=this.parameterPositions,r=t-2,o=t+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case hd:r=t,a=2*e-n;break;case ud:r=i.length-2,a=e+i[r]-i[r+1];break;default:r=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case hd:o=t,l=2*n-e;break;case ud:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,p=(n-e)/(i-e),g=p*p,m=g*p,_=-u*m+2*u*g-u*p,v=(1+u)*m+(-1.5-2*u)*g+(-.5+u)*p+1,S=(-1-f)*m+(1.5+f)*g+.5*p,y=f*m-f*g;for(let T=0;T!==a;++T)r[T]=_*o[h+T]+v*o[c+T]+S*o[l+T]+y*o[d+T];return r}},_h=class extends sr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),d=1-h;for(let u=0;u!==a;++u)r[u]=o[c+u]*d+o[l+u]*h;return r}},xh=class extends sr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},vh=class extends sr{interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this.inTangents,d=this.outTangents;if(!h||!d){let p=(n-e)/(i-e),g=1-p;for(let m=0;m!==a;++m)r[m]=o[c+m]*g+o[l+m]*p;return r}let u=a*2,f=t-1;for(let p=0;p!==a;++p){let g=o[c+p],m=o[l+p],_=f*u+p*2,v=d[_],S=d[_+1],y=t*u+p*2,T=h[y],E=h[y+1],x=py(n,e,v,T,i);r[p]=F_(x,g,S,E,m)}return r}};function F_(s,t,e,n,i){let r=1-s;return r*r*r*t+3*r*r*s*e+3*r*s*s*n+s*s*s*i}function dy(s,t,e,n,i){let r=1-s;return 3*r*r*(e-t)+6*r*s*(n-e)+3*s*s*(i-n)}function py(s,t,e,n,i){let r=(s-t)/(i-t);for(let o=0;o<8;o++){let a=F_(r,t,e,n,i)-s;if(Math.abs(a)<1e-10)break;let l=dy(r,t,e,n,i);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-a/l))}return r}var xi=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=To(e,this.TimeBufferType),this.values=To(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:To(t.times,Array),values:To(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i),kc(t.settings)&&(n.settings={inTangents:To(t.settings.inTangents,Array),outTangents:To(t.settings.outTangents,Array)})}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new xh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new _h(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new gh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new vh(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case Ba:e=this.InterpolantFactoryMethodDiscrete;break;case nh:e=this.InterpolantFactoryMethodLinear;break;case Hc:e=this.InterpolantFactoryMethodSmooth;break;case ld:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Xt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ba;case this.InterpolantFactoryMethodLinear:return nh;case this.InterpolantFactoryMethodSmooth:return Hc;case this.InterpolantFactoryMethodBezier:return ld}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t;kc(this.settings)&&(Wg(this.settings.inTangents,t),Wg(this.settings.outTangents,t))}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t;kc(this.settings)&&(Xg(this.settings.inTangents,t),Xg(this.settings.outTangents,t))}return this}trim(t,e){let n=this.times,i=n.length,r=0,o=i-1;for(;r!==i&&n[r]<t;)++r;for(;o!==-1&&n[o]>e;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Zt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,r=n.length;r===0&&(Zt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==r;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Zt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Zt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&Wv(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){Zt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Hc,r=t.length-1,o=1;for(let a=1;a<r;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let d=a*n,u=d-n,f=d+n;for(let p=0;p!==n;++p){let g=e[d+p];if(g!==e[u+p]||g!==e[f+p]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let d=a*n,u=o*n;for(let f=0;f!==n;++f)e[u+f]=e[d+f]}++o}}if(r>0){t[o]=t[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,kc(this.settings)&&(i.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),i}};function Wg(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]+=t}function Xg(s,t){for(let e=0,n=s.length;e!==n;e+=2)s[e]*=t}xi.prototype.ValueTypeName="";xi.prototype.TimeBufferType=Float32Array;xi.prototype.ValueBufferType=Float32Array;xi.prototype.DefaultInterpolation=nh;var rr=class extends xi{constructor(t,e,n){super(t,e,n)}};rr.prototype.ValueTypeName="bool";rr.prototype.ValueBufferType=Array;rr.prototype.DefaultInterpolation=Ba;rr.prototype.InterpolantFactoryMethodLinear=void 0;rr.prototype.InterpolantFactoryMethodSmooth=void 0;var yh=class extends xi{constructor(t,e,n,i){super(t,e,n,i)}};yh.prototype.ValueTypeName="color";var Sh=class extends xi{constructor(t,e,n,i){super(t,e,n,i)}};Sh.prototype.ValueTypeName="number";var Mh=class extends sr{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)is.slerpFlat(r,0,o,c-a,o,c,l);return r}},rl=class extends xi{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new Mh(this.times,this.values,this.getValueSize(),t)}};rl.prototype.ValueTypeName="quaternion";rl.prototype.InterpolantFactoryMethodSmooth=void 0;var or=class extends xi{constructor(t,e,n){super(t,e,n)}};or.prototype.ValueTypeName="string";or.prototype.ValueBufferType=Array;or.prototype.DefaultInterpolation=Ba;or.prototype.InterpolantFactoryMethodLinear=void 0;or.prototype.InterpolantFactoryMethodSmooth=void 0;var bh=class extends xi{constructor(t,e,n,i){super(t,e,n,i)}};bh.prototype.ValueTypeName="vector";var qc={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(qg(s)||(this.files[s]=t))},get:function(s){if(this.enabled!==!1&&!qg(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function qg(s){try{let t=s.slice(s.indexOf(":")+1);return new URL(t).protocol==="blob:"}catch{return!1}}var wh=class{constructor(t,e,n){let i=this,r=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],p=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return p}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},B_=new wh,zo=class{constructor(t){this.manager=t!==void 0?t:B_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}setPriority(t){return this.priority=t,this}setCache(t){return this.cache=t,this}abort(){return this}};zo.DEFAULT_MATERIAL_NAME="__DEFAULT";var Eo=new WeakMap,Th=class extends zo{constructor(t){super(t)}load(t,e,n,i){this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);let r=this,o=qc.get(`image:${t}`);if(o!==void 0){if(o.complete===!0)r.manager.itemStart(t),setTimeout(function(){e&&e(o),r.manager.itemEnd(t)},0);else{let d=Eo.get(o);d===void 0&&(d=[],Eo.set(o,d)),d.push({onLoad:e,onError:i})}return o}let a=Io("img");function l(){h(),e&&e(this);let d=Eo.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onLoad&&f.onLoad(this)}Eo.delete(this),r.manager.itemEnd(t)}function c(d){h(),i&&i(d),qc.remove(`image:${t}`);let u=Eo.get(this)||[];for(let f=0;f<u.length;f++){let p=u[f];p.onError&&p.onError(d)}Eo.delete(this),r.manager.itemError(t),r.manager.itemEnd(t)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),t.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),qc.add(`image:${t}`,a),r.manager.itemStart(t),a.fetchPriority=this.priority,a.src=t,a}};var ol=class extends zo{constructor(t){super(t)}load(t,e,n,i){let r=new Un,o=new Th(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(t,function(a){r.image=a,r.needsUpdate=!0,e!==void 0&&e(r)},n,i),r}};var Vc=new B,Gc=new is,ji=new B,al=class extends Jn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=Ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Vc,Gc,ji),ji.x===1&&ji.y===1&&ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vc,Gc,ji.set(1,1,1)).invert()}updateWorldMatrix(t,e,n=!1){super.updateWorldMatrix(t,e,n),this.matrixWorld.decompose(Vc,Gc,ji),ji.x===1&&ji.y===1&&ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Vc,Gc,ji.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Qs=new B,Yg=new te,Zg=new te,Zn=class extends al{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=ih*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Xc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return ih*2*Math.atan(Math.tan(Xc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Qs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Qs.x,Qs.y).multiplyScalar(-t/Qs.z),Qs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Qs.x,Qs.y).multiplyScalar(-t/Qs.z)}getViewSize(t,e){return this.getViewBounds(t,Yg,Zg),e.subVectors(Zg,Yg)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Xc*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}};var ko=class extends al{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,r=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}};var Ao=-90,Co=1,Vo=class extends Jn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Zn(Ao,Co,t,e);i.layers=this.layers,this.add(i);let r=new Zn(Ao,Co,t,e);r.layers=this.layers,this.add(r);let o=new Zn(Ao,Co,t,e);o.layers=this.layers,this.add(o);let a=new Zn(Ao,Co,t,e);a.layers=this.layers,this.add(a);let l=new Zn(Ao,Co,t,e);l.layers=this.layers,this.add(l);let c=new Zn(Ao,Co,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,r,o,a,l]=e;for(let c of e)this.remove(c);if(t===Ai)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Va)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(n,0,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(n,1,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(n,2,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(n,3,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(n,4,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),n.texture.mipmapsAutoUpdate=g,t.setRenderTarget(n,5,i),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=p,n.texture.needsPMREMUpdate=!0}},Eh=class extends Zn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t,this.perCameraFrustumCulled=!1}};var Wd="\\[\\]\\.:\\/",my=new RegExp("["+Wd+"]","g"),Xd="[^"+Wd+"]",gy="[^"+Wd.replace("\\.","")+"]",_y=/((?:WC+[\/:])*)/.source.replace("WC",Xd),xy=/(WCOD+)?/.source.replace("WCOD",gy),vy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xd),yy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xd),Sy=new RegExp("^"+_y+xy+vy+yy+"$"),My=["material","materials","bones","map"],dd=class{constructor(t,e,n){let i=n||Ge.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Ge=class s{constructor(t,e,n){this.path=e,this.parsedPath=n||s.parseTrackName(e),this.node=s.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new s.Composite(t,e,n):new s(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(my,"")}static parseTrackName(t){let e=Sy.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let r=n.nodeName.substring(i+1);My.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,r=e.propertyIndex;if(t||(t=s.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Xt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Zt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Zt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Zt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Zt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Zt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Zt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;Zt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Zt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ge.Composite=dd;Ge.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ge.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ge.prototype.GetterByBindingType=[Ge.prototype._getValue_direct,Ge.prototype._getValue_array,Ge.prototype._getValue_arrayElement,Ge.prototype._getValue_toArray];Ge.prototype.SetterByBindingTypeAndVersioning=[[Ge.prototype._setValue_direct,Ge.prototype._setValue_direct_setNeedsUpdate,Ge.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_array,Ge.prototype._setValue_array_setNeedsUpdate,Ge.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_arrayElement,Ge.prototype._setValue_arrayElement_setNeedsUpdate,Ge.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ge.prototype._setValue_fromArray,Ge.prototype._setValue_fromArray_setNeedsUpdate,Ge.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var HT=new Float32Array(1);var Kd=class Kd{constructor(t,e,n,i){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let n=0;n<4;n++)this.elements[n]=t[n+e];return this}set(t,e,n,i){let r=this.elements;return r[0]=t,r[2]=e,r[1]=n,r[3]=i,this}};Kd.prototype.isMatrix2=!0;var pd=Kd;function qd(s,t,e,n){let i=by(n);switch(e){case Dd:return s*t;case Ud:return s*t/i.components*i.byteLength;case Nh:return s*t/i.components*i.byteLength;case lr:return s*t*2/i.components*i.byteLength;case Uh:return s*t*2/i.components*i.byteLength;case Nd:return s*t*3/i.components*i.byteLength;case Wi:return s*t*4/i.components*i.byteLength;case Oh:return s*t*4/i.components*i.byteLength;case ul:case fl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case dl:case pl:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Bh:case kh:return Math.max(s,16)*Math.max(t,8)/4;case Fh:case zh:return Math.max(s,8)*Math.max(t,8)/2;case Vh:case Gh:case Wh:case Xh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*8;case Hh:case ml:case qh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Yh:return Math.floor((s+3)/4)*Math.floor((t+3)/4)*16;case Zh:return Math.floor((s+4)/5)*Math.floor((t+3)/4)*16;case Jh:return Math.floor((s+4)/5)*Math.floor((t+4)/5)*16;case $h:return Math.floor((s+5)/6)*Math.floor((t+4)/5)*16;case Kh:return Math.floor((s+5)/6)*Math.floor((t+5)/6)*16;case Qh:return Math.floor((s+7)/8)*Math.floor((t+4)/5)*16;case jh:return Math.floor((s+7)/8)*Math.floor((t+5)/6)*16;case tu:return Math.floor((s+7)/8)*Math.floor((t+7)/8)*16;case eu:return Math.floor((s+9)/10)*Math.floor((t+4)/5)*16;case nu:return Math.floor((s+9)/10)*Math.floor((t+5)/6)*16;case iu:return Math.floor((s+9)/10)*Math.floor((t+7)/8)*16;case su:return Math.floor((s+9)/10)*Math.floor((t+9)/10)*16;case ru:return Math.floor((s+11)/12)*Math.floor((t+9)/10)*16;case ou:return Math.floor((s+11)/12)*Math.floor((t+11)/12)*16;case au:case lu:case cu:return Math.ceil(s/4)*Math.ceil(t/4)*16;case hu:case uu:return Math.ceil(s/4)*Math.ceil(t/4)*8;case gl:case fu:return Math.ceil(s/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function by(s){switch(s){case vi:case Rd:return{byteLength:1,components:1};case Xo:case Pd:case Hi:return{byteLength:2,components:1};case Lh:case Dh:return{byteLength:2,components:4};case Vi:case Ih:case Gi:return{byteLength:4,components:1};case Id:case Ld:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Xt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function o0(){let s=null,t=!1,e=null,n=null;function i(r,o){n=s.requestAnimationFrame(i),e(r,o)}return{start:function(){t!==!0&&e!==null&&s!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Ty(s){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:d}}function n(a,l,c){let h=l.array,d=l.updateRanges;if(s.bindBuffer(c,a),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,p)=>f.start-p.start);let u=0;for(let f=1;f<d.length;f++){let p=d[u],g=d[f];g.start<=p.start+p.count+1?p.count=Math.max(p.count,g.start+g.count-p.start):(++u,d[u]=g)}d.length=u+1;for(let f=0,p=d.length;f<p;f++){let g=d[f];s.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(s.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}var Ey=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ay=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Cy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ry=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Py=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Iy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ly=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Dy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ny=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Uy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Oy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,By=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,ky=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Vy=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Gy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Hy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Wy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Xy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,qy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Yy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Zy=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Jy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$y=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Ky=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Qy=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jy=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,tS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eS="gl_FragColor = linearToOutputTexel( gl_FragColor );",nS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,iS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,sS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,rS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,oS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,aS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,fS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,dS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,_S=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,xS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,SS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,MS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,bS=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,wS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,TS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ES=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,AS=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,CS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,RS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,LS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,DS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,NS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,US=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,OS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,FS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,BS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zS=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,VS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,GS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,HS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,WS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,XS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,ZS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,JS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$S=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,KS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,QS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,jS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,eM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,iM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,oM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,aM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,lM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,hM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,uM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,dM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,mM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,_M=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,vM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,SM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,MM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,wM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,TM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,EM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,AM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CM=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,RM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,PM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,LM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,DM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,NM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,UM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,OM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,BM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,kM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VM=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,HM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,WM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,XM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,qM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,YM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ZM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$M=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,KM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,tb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,ib=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,se={alphahash_fragment:Ey,alphahash_pars_fragment:Ay,alphamap_fragment:Cy,alphamap_pars_fragment:Ry,alphatest_fragment:Py,alphatest_pars_fragment:Iy,aomap_fragment:Ly,aomap_pars_fragment:Dy,batching_pars_vertex:Ny,batching_vertex:Uy,begin_vertex:Oy,beginnormal_vertex:Fy,bsdfs:By,iridescence_fragment:zy,bumpmap_pars_fragment:ky,clipping_planes_fragment:Vy,clipping_planes_pars_fragment:Gy,clipping_planes_pars_vertex:Hy,clipping_planes_vertex:Wy,color_fragment:Xy,color_pars_fragment:qy,color_pars_vertex:Yy,color_vertex:Zy,common:Jy,defaultnormal_vertex:$y,displacementmap_pars_vertex:Ky,displacementmap_vertex:Qy,emissivemap_fragment:jy,emissivemap_pars_fragment:tS,colorspace_fragment:eS,colorspace_pars_fragment:nS,envmap_fragment:iS,envmap_common_pars_fragment:sS,envmap_pars_fragment:rS,envmap_pars_vertex:oS,envmap_physical_pars_fragment:_S,envmap_vertex:aS,fog_vertex:lS,fog_pars_vertex:cS,fog_fragment:hS,fog_pars_fragment:uS,gradientmap_pars_fragment:fS,lightmap_pars_fragment:dS,lights_lambert_fragment:pS,lights_lambert_pars_fragment:mS,lights_pars_begin:gS,lights_toon_fragment:xS,lights_toon_pars_fragment:vS,lights_phong_fragment:yS,lights_phong_pars_fragment:SS,lights_physical_fragment:MS,lights_physical_pars_fragment:bS,lights_fragment_begin:wS,lights_fragment_maps:TS,lights_fragment_end:ES,lightprobes_pars_fragment:AS,logdepthbuf_fragment:CS,logdepthbuf_pars_fragment:RS,logdepthbuf_pars_vertex:PS,logdepthbuf_vertex:IS,map_fragment:LS,map_pars_fragment:DS,map_particle_fragment:NS,map_particle_pars_fragment:US,metalnessmap_fragment:OS,metalnessmap_pars_fragment:FS,morphinstance_vertex:BS,morphcolor_vertex:zS,morphnormal_vertex:kS,morphtarget_pars_vertex:VS,morphtarget_vertex:GS,normal_fragment_begin:HS,normal_fragment_maps:WS,normal_pars_fragment:XS,normal_pars_vertex:qS,normal_vertex:YS,normalmap_pars_fragment:ZS,clearcoat_normal_fragment_begin:JS,clearcoat_normal_fragment_maps:$S,clearcoat_pars_fragment:KS,iridescence_pars_fragment:QS,opaque_fragment:jS,packing:tM,premultiplied_alpha_fragment:eM,project_vertex:nM,dithering_fragment:iM,dithering_pars_fragment:sM,roughnessmap_fragment:rM,roughnessmap_pars_fragment:oM,shadowmap_pars_fragment:aM,shadowmap_pars_vertex:lM,shadowmap_vertex:cM,shadowmask_pars_fragment:hM,skinbase_vertex:uM,skinning_pars_vertex:fM,skinning_vertex:dM,skinnormal_vertex:pM,specularmap_fragment:mM,specularmap_pars_fragment:gM,tonemapping_fragment:_M,tonemapping_pars_fragment:xM,transmission_fragment:vM,transmission_pars_fragment:yM,uv_pars_fragment:SM,uv_pars_vertex:MM,uv_vertex:bM,worldpos_vertex:wM,background_vert:TM,background_frag:EM,backgroundCube_vert:AM,backgroundCube_frag:CM,cube_vert:RM,cube_frag:PM,depth_vert:IM,depth_frag:LM,distance_vert:DM,distance_frag:NM,equirect_vert:UM,equirect_frag:OM,linedashed_vert:FM,linedashed_frag:BM,meshbasic_vert:zM,meshbasic_frag:kM,meshlambert_vert:VM,meshlambert_frag:GM,meshmatcap_vert:HM,meshmatcap_frag:WM,meshnormal_vert:XM,meshnormal_frag:qM,meshphong_vert:YM,meshphong_frag:ZM,meshphysical_vert:JM,meshphysical_frag:$M,meshtoon_vert:KM,meshtoon_frag:QM,points_vert:jM,points_frag:tb,shadow_vert:eb,shadow_frag:nb,sprite_vert:ib,sprite_frag:sb},Rt={common:{diffuse:{value:new Kt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new te(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Kt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Kt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new Kt(16777215)},opacity:{value:1},center:{value:new te(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},ls={basic:{uniforms:On([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:On([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Kt(0)},envMapIntensity:{value:1}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:On([Rt.common,Rt.specularmap,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,Rt.lights,{emissive:{value:new Kt(0)},specular:{value:new Kt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:On([Rt.common,Rt.envmap,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.roughnessmap,Rt.metalnessmap,Rt.fog,Rt.lights,{emissive:{value:new Kt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:On([Rt.common,Rt.aomap,Rt.lightmap,Rt.emissivemap,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.gradientmap,Rt.fog,Rt.lights,{emissive:{value:new Kt(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:On([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,Rt.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:On([Rt.points,Rt.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:On([Rt.common,Rt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:On([Rt.common,Rt.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:On([Rt.common,Rt.bumpmap,Rt.normalmap,Rt.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:On([Rt.sprite,Rt.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distance:{uniforms:On([Rt.common,Rt.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distance_vert,fragmentShader:se.distance_frag},shadow:{uniforms:On([Rt.lights,Rt.fog,{color:{value:new Kt(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};ls.physical={uniforms:On([ls.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new te(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new $t},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new Kt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new te},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new Kt(0)},specularColor:{value:new Kt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new te},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};var pu={r:0,b:0,g:0},rb=new ze,a0=new $t;a0.set(-1,0,0,0,1,0,0,0,1);function ob(s,t,e,n,i,r){let o=new Kt(0),a=i===!0?0:1,l,c,h=null,d=0,u=null;function f(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){let y=v.backgroundBlurriness>0;S=t.get(S,y)}return S}function p(v){let S=!1,y=f(v);y===null?m(o,a):y&&y.isColor&&(m(y,1),S=!0);let T=s.xr.getEnvironmentBlendMode();T==="additive"?e.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(s.autoClear||S)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function g(v,S){let y=f(S);y&&y.isCubeTexture?(c===void 0&&(c=new vn(new ir(1,1,1),new Ri({name:"BackgroundCubeMaterial",uniforms:Vr(ls.backgroundCube.uniforms),vertexShader:ls.backgroundCube.vertexShader,fragmentShader:ls.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,E,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(rb.makeRotationFromEuler(S.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(a0),c.material.toneMapped=ge.getTransfer(y.colorSpace)!==Ce,(h!==y||d!==y.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new vn(new Rs(2,2),new Ri({name:"BackgroundMaterial",uniforms:Vr(ls.background.uniforms),vertexShader:ls.background.vertexShader,fragmentShader:ls.background.fragmentShader,side:ar,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ge.getTransfer(y.colorSpace)!==Ce,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function m(v,S){v.getRGB(pu,Hd(s)),e.buffers.color.setClear(pu.r,pu.g,pu.b,S,r)}function _(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return o},setClearColor:function(v,S=1){o.set(v),a=S,m(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(v){a=v,m(o,a)},render:p,addToRenderList:g,dispose:_}}function ab(s,t){let e=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=u(null),r=i,o=!1;function a(N,D,V,I,z){let H=!1,O=d(N,I,V,D);r!==O&&(r=O,c(r.object)),H=f(N,I,V,z),H&&p(N,I,V,z),z!==null&&t.update(z,s.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,y(N,D,V,I),z!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return s.createVertexArray()}function c(N){return s.bindVertexArray(N)}function h(N){return s.deleteVertexArray(N)}function d(N,D,V,I){let z=I.wireframe===!0,H=n[D.id];H===void 0&&(H={},n[D.id]=H);let O=N.isInstancedMesh===!0?N.id:0,et=H[O];et===void 0&&(et={},H[O]=et);let W=et[V.id];W===void 0&&(W={},et[V.id]=W);let A=W[z];return A===void 0&&(A=u(l()),W[z]=A),A}function u(N){let D=[],V=[],I=[];for(let z=0;z<e;z++)D[z]=0,V[z]=0,I[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:V,attributeDivisors:I,object:N,attributes:{},index:null}}function f(N,D,V,I){let z=r.attributes,H=D.attributes,O=0,et=V.getAttributes();for(let W in et)if(et[W].location>=0){let Y=z[W],St=H[W];if(St===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(St=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(St=N.instanceColor)),Y===void 0||Y.attribute!==St||St&&Y.data!==St.data)return!0;O++}return r.attributesNum!==O||r.index!==I}function p(N,D,V,I){let z={},H=D.attributes,O=0,et=V.getAttributes();for(let W in et)if(et[W].location>=0){let Y=H[W];Y===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(Y=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(Y=N.instanceColor));let St={};St.attribute=Y,Y&&Y.data&&(St.data=Y.data),z[W]=St,O++}r.attributes=z,r.attributesNum=O,r.index=I}function g(){let N=r.newAttributes;for(let D=0,V=N.length;D<V;D++)N[D]=0}function m(N){_(N,0)}function _(N,D){let V=r.newAttributes,I=r.enabledAttributes,z=r.attributeDivisors;V[N]=1,I[N]===0&&(s.enableVertexAttribArray(N),I[N]=1),z[N]!==D&&(s.vertexAttribDivisor(N,D),z[N]=D)}function v(){let N=r.newAttributes,D=r.enabledAttributes;for(let V=0,I=D.length;V<I;V++)D[V]!==N[V]&&(s.disableVertexAttribArray(V),D[V]=0)}function S(N,D,V,I,z,H,O){O===!0?s.vertexAttribIPointer(N,D,V,z,H):s.vertexAttribPointer(N,D,V,I,z,H)}function y(N,D,V,I){g();let z=I.attributes,H=V.getAttributes(),O=D.defaultAttributeValues;for(let et in H){let W=H[et];if(W.location>=0){let A=z[et];if(A===void 0&&(et==="instanceMatrix"&&N.instanceMatrix&&(A=N.instanceMatrix),et==="instanceColor"&&N.instanceColor&&(A=N.instanceColor)),A!==void 0){let Y=A.normalized,St=A.itemSize,Dt=t.get(A);if(Dt===void 0)continue;let J=Dt.buffer,at=Dt.type,ut=Dt.bytesPerElement,Et=at===s.INT||at===s.UNSIGNED_INT||A.gpuType===Ih;if(A.isInterleavedBufferAttribute){let yt=A.data,Bt=yt.isInterleavedBuffer===!0?yt.stride:yt.itemSize,Me=A.offset;if(yt.isInstancedInterleavedBuffer||yt.isInstancedBufferAttribute){for(let Lt=0;Lt<W.locationSize;Lt++)_(W.location+Lt,yt.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=yt.meshPerAttribute*yt.count)}else for(let Lt=0;Lt<W.locationSize;Lt++)m(W.location+Lt);s.bindBuffer(s.ARRAY_BUFFER,J);for(let Lt=0;Lt<W.locationSize;Lt++)S(W.location+Lt,St/W.locationSize,at,Y,Bt*ut,(Me+St/W.locationSize*Lt)*ut,Et)}else{if(A.isInstancedBufferAttribute){for(let yt=0;yt<W.locationSize;yt++)_(W.location+yt,A.meshPerAttribute);N.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=A.meshPerAttribute*A.count)}else for(let yt=0;yt<W.locationSize;yt++)m(W.location+yt);s.bindBuffer(s.ARRAY_BUFFER,J);for(let yt=0;yt<W.locationSize;yt++)S(W.location+yt,St/W.locationSize,at,Y,St*ut,St/W.locationSize*yt*ut,Et)}}else if(O!==void 0){let Y=O[et];if(Y!==void 0)switch(Y.length){case 2:s.vertexAttrib2fv(W.location,Y);break;case 3:s.vertexAttrib3fv(W.location,Y);break;case 4:s.vertexAttrib4fv(W.location,Y);break;default:s.vertexAttrib1fv(W.location,Y)}}}}v()}function T(){P();for(let N in n){let D=n[N];for(let V in D){let I=D[V];for(let z in I){let H=I[z];for(let O in H)h(H[O].object),delete H[O];delete I[z]}}delete n[N]}}function E(N){if(n[N.id]===void 0)return;let D=n[N.id];for(let V in D){let I=D[V];for(let z in I){let H=I[z];for(let O in H)h(H[O].object),delete H[O];delete I[z]}}delete n[N.id]}function x(N){for(let D in n){let V=n[D];for(let I in V){let z=V[I];if(z[N.id]===void 0)continue;let H=z[N.id];for(let O in H)h(H[O].object),delete H[O];delete z[N.id]}}}function b(N){for(let D in n){let V=n[D],I=N.isInstancedMesh===!0?N.id:0,z=V[I];if(z!==void 0){for(let H in z){let O=z[H];for(let et in O)h(O[et].object),delete O[et];delete z[H]}delete V[I],Object.keys(V).length===0&&delete n[D]}}}function P(){C(),o=!0,r!==i&&(r=i,c(r.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:C,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfObject:b,releaseStatesOfProgram:x,initAttributes:g,enableAttribute:m,disableUnusedAttributes:v}}function lb(s,t,e){let n;function i(l){n=l}function r(l,c){s.drawArrays(n,l,c),e.update(c,n,1)}function o(l,c,h){h!==0&&(s.drawArraysInstanced(n,l,c,h),e.update(c,n,h))}function a(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,n,1)}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function cb(s,t,e,n){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let x=t.get("EXT_texture_filter_anisotropic");i=s.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(x){return!(x!==Wi&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(x){let b=x===Hi&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(x!==vi&&x!==Gi&&!b&&n.convert(x)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Xt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),u=e.logarithmicDepthBuffer===!0&&d===!1;e.reversedDepthBuffer===!0&&d===!1&&Xt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),e.logarithmicDepthBuffer===!0&&d===!0&&Xt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),p=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),_=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),T=s.getParameter(s.MAX_SAMPLES),E=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:p,maxTextureSize:g,maxCubemapSize:m,maxAttributes:_,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:y,maxSamples:T,samples:E}}function hb(s){let t=this,e=null,n=0,i=!1,r=!1,o=new Bi,a=new $t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||i;return i=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let p=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,_=s.get(d);if(!i||p===null||p.length===0||r&&!m)r?h(null):c();else{let v=r?0:n,S=v*4,y=_.clippingState||null;l.value=y,y=h(p,u,S,f);for(let T=0;T!==S;++T)y[T]=e[T];_.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(d,u,f,p){let g=d!==null?d.length:0,m=null;if(g!==0){if(m=l.value,p!==!0||m===null){let _=f+g*4,v=u.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<_)&&(m=new Float32Array(_));for(let S=0,y=f;S!==g;++S,y+=4)o.copy(d[S]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,m}}var vl=class extends _i{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Ka(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ir(5,5,5),r=new Ri({name:"CubemapFromEquirect",uniforms:Vr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Kn,blending:Or});r.uniforms.tEquirect.value=e;let o=new vn(i,r),a=e.minFilter;return e.minFilter===Ps&&(e.minFilter=xn),new Vo(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}},z_=256,ub=3,fb=20,l0=256,c0=16,db=3,pb=new B,mb=new Kt,gu=class s{constructor(t){this._renderer=t,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Vo(1,10,null),this._boxMesh=new vn(new ir(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(t,e=0,n=.1,i=100,r={}){let{size:o=256,position:a=pb}=r,l=this._renderer;this._setSize(o);let c=this._allocateTarget(),h=this._getSourceTarget(!0);e>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,p=l.autoClearStencil,g=t.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,g===null&&(t.background=l.getClearColor(mb));let m=new Vo(n,i,h);return m.position.copy(a),m.update(l,t),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=p,t.background=g,e>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,e)),this._applyPMREM(c),c}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=G_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=V_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(t,e){return e>0?1-Math.sqrt(1-t/e):0}_setSize(t){this._cubeSize=Math.max(z_,I_(t))}_fromTexture(t,e){t.mapping===Br||t.mapping===Wo?this._setSize(t.image.length===0?z_:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4);let n=e||this._allocateTarget();return this._textureToCubemap(t),this._applyPMREM(n),n}_allocateTarget(){let t=this._cubeSize,e=k_(t,!1,!1),n=Math.log2(t)-ub;for(let i=0;i<=n;i++)e.texture.mipmaps.push({width:t>>i,height:t>>i});return e.texture.name="PMREM",e.texture.isPMREMTexture=!0,e}_getSourceTarget(t=!1){let e=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==e||t&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=k_(e,!0,t)),this._sourceTarget}_compileMaterial(t){this._boxMesh.material=t,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(t,e,n){let i=this._boxMesh,r=this._cubeCamera;i.material=n,r.renderTarget=t,r.activeMipmapLevel=e;let o=t.width>>e;t.viewport.set(0,0,o,o),r.update(this._renderer,i),t.viewport.set(0,0,t.width,t.height)}_textureToCubemap(t){let e;t.mapping===Br||t.mapping===Wo?(this._cubemapMaterial===null&&(this._cubemapMaterial=G_()),e=this._cubemapMaterial,e.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=V_()),e=this._equirectMaterial),e.uniforms.envMap.value=t,this._renderCube(this._getSourceTarget(),0,e)}_applyPMREM(t){this._ggxMaterial===null&&(this._ggxMaterial=gb(),this._integrationMaterial=_b());let e=this._cubeSize,n=t.texture.mipmaps.length-1,i=this._ggxMaterial.uniforms;i.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(e/c0);for(let o=0;o<=n;o++){let a=s.lodToRoughness(o,n);if(o>n-db)r.roughness.value=a,this._renderCube(t,o,this._integrationMaterial);else{let l=a>0?Math.log2(e)+.5*Math.log2(6/(l0*Math.pow(a,4)))+.5:0;i.roughness.value=a,i.lodBias.value=l,this._renderCube(t,o,this._ggxMaterial)}}}_blur(t,e){this._blurMaterial===null&&(this._blurMaterial=xb());let n=this._blurMaterial,i=n.uniforms,r=this._sourceTarget;i.sigma.value=Math.min(e,Math.PI)/Math.SQRT2,i.envMap.value=r.texture,this._renderCube(t,0,n),i.envMap.value=t.texture,this._renderCube(r,0,n)}};function k_(s,t,e){return new vl(s,{minFilter:Ps,generateMipmaps:t,type:Hi,colorSpace:za,depthBuffer:e})}function yl(s,t,e){return new Ri({name:s,uniforms:t,vertexShader:se.cube_vert,fragmentShader:e,side:Kn,blending:Or,depthTest:!1,depthWrite:!1})}function gb(){return yl("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${l0}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function _b(){return yl("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:c0}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function xb(){return yl("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${fb}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function V_(){return yl("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function G_(){return yl("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function vb(s){let t=new WeakMap,e=new WeakMap,n=null;function i(u,f=!1){return u==null?null:f?o(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Ch||f===Rh)if(t.has(u)){let p=t.get(u).texture;return a(p,u.mapping)}else{let p=u.image;if(p&&p.height>0){let g=new vl(p.height);return g.fromEquirectangularTexture(s,u),t.set(u,g),u.addEventListener("dispose",c),a(g.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,p=f===Ch||f===Rh,g=f===Br||f===Wo;if(p||g){let m=e.get(u),_=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==_)return n===null&&(n=new gu(s)),m=p?n.fromEquirectangular(u,m):n.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let v=u.image;return p&&v&&v.height>0||g&&v&&l(v)?(n===null&&(n=new gu(s)),m=p?n.fromEquirectangular(u):n.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function a(u,f){return f===Ch?u.mapping=Br:f===Rh&&(u.mapping=Wo),u}function l(u){let f=0,p=6;for(let g=0;g<p;g++)u[g]!==void 0&&f++;return f===p}function c(u){let f=u.target;f.removeEventListener("dispose",c);let p=t.get(f);p!==void 0&&(t.delete(f),p.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let p=e.get(f);p!==void 0&&(e.delete(f),p.dispose())}function d(){t=new WeakMap,e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function yb(s){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=s.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Fa("WebGLRenderer: "+n+" extension not supported."),i}}}function Sb(s,t,e,n){let i={},r=new WeakMap,o=new FinalizationRegistry(p=>delete i[p]);function a(p){l(p.target)}function l(p){p.index!==null&&t.remove(p.index);for(let m in p.attributes)t.remove(p.attributes[m]);p.removeEventListener("dispose",a),delete i[p.id],o.unregister(p);let g=r.get(p);g&&(t.remove(g),r.delete(p)),n.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,e.memory.geometries--}function c(p,g){return i[g.id]!==void 0||(g.addEventListener("dispose",a),i[g.id]=new WeakRef(g),o.register(g,g.id,g),e.memory.geometries++),g}function h(p){let g=p.attributes;for(let m in g)t.update(g[m],s.ARRAY_BUFFER)}function d(p){let g=p.index,m=p.attributes.position,_=0;if(m===void 0)return;let v=g!==null?g.array.length:m.array.length/3-1,S=m.count>=65535?Ya:qa,y=new S(Math.ceil(v/3)*6,1),T=y.array;if(g!==null){let x=g.array;_=g.version;for(let b=0,P=0;b<v;b+=3){let C=x[b+0],N=x[b+1],D=x[b+2];T[P++]=C,T[P++]=N,T[P++]=N,T[P++]=D,T[P++]=D,T[P++]=C}}else{_=m.version;for(let x=0,b=0;x<v;x+=3){let P=x+0,C=x+1,N=x+2;T[b++]=P,T[b++]=C,T[b++]=C,T[b++]=N,T[b++]=N,T[b++]=P}}y.version=_;let E=r.get(p);E&&t.remove(E),r.set(p,y)}function u(p){let g=r.get(p);if(g){let m=p.index;m!==null&&g.version<m.version&&d(p)}else d(p);return r.get(p)}function f(){for(let p in i){let g=i[p].deref();g!==void 0&&l(g)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function Mb(s,t,e){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,u){s.drawElements(n,u,r,d*o),e.update(u,n,1)}function c(d,u,f){f!==0&&(s.drawElementsInstanced(n,u,r,d*o,f),e.update(u,n,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let g=0;for(let m=0;m<f;m++)g+=u[m];e.update(g,n,1)}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function bb(s){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case s.TRIANGLES:e.triangles+=a*(r/3);break;case s.LINES:e.lines+=a*(r/2);break;case s.LINE_STRIP:e.lines+=a*(r-1);break;case s.LINE_LOOP:e.lines+=a*r;break;case s.POINTS:e.points+=a*r;break;default:Zt("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function wb(s,t,e){let n=new WeakMap,i=new Ke;function r(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==d){let P=function(){x.dispose(),n.delete(a),a.removeEventListener("dispose",P)};u!==void 0&&u.texture.dispose();let f=a.morphAttributes.position!==void 0,p=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],S=0;f===!0&&(S=1),p===!0&&(S=2),g===!0&&(S=3);let y=a.attributes.position.count*S,T=1;y>t.maxTextureSize&&(T=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let E=new Float32Array(y*T*4*d),x=new Ha(E,y,T,d);x.type=Gi,x.needsUpdate=!0;let b=S*4;for(let C=0;C<d;C++){let N=m[C],D=_[C],V=v[C],I=y*T*4*C;for(let z=0;z<N.count;z++){let H=z*b;f===!0&&(i.fromBufferAttribute(N,z),E[I+H+0]=i.x,E[I+H+1]=i.y,E[I+H+2]=i.z,E[I+H+3]=0),p===!0&&(i.fromBufferAttribute(D,z),E[I+H+4]=i.x,E[I+H+5]=i.y,E[I+H+6]=i.z,E[I+H+7]=0),g===!0&&(i.fromBufferAttribute(V,z),E[I+H+8]=i.x,E[I+H+9]=i.y,E[I+H+10]=i.z,E[I+H+11]=V.itemSize===4?i.w:1)}}u={count:d,texture:x,size:new te(y,T)},n.set(a,u),a.addEventListener("dispose",P)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,e);else{let f=0;for(let g=0;g<c.length;g++)f+=c[g];let p=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",p),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:r}}function Tb(s,t,e,n,i){let r=new WeakMap;function o(c){let h=i.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,s.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function a(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}var Eb={[Sd]:"LINEAR_TONE_MAPPING",[Md]:"REINHARD_TONE_MAPPING",[bd]:"CINEON_TONE_MAPPING",[wd]:"ACES_FILMIC_TONE_MAPPING",[Ed]:"AGX_TONE_MAPPING",[Ad]:"NEUTRAL_TONE_MAPPING",[Td]:"CUSTOM_TONE_MAPPING"};function Ab(s,t,e,n,i,r){let o=new _i(t,e,{type:s,depthBuffer:i,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,l=null,c=null,h=new an;h.setAttribute("position",new De([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new De([0,2,0,0,2,0],2));let d=new dh({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new vn(h,d),f=new ko(-1,1,1,-1,0,1),p=null,g=null,m=!1,_,v=null,S=[],y=!1;this.setSize=function(T,E){o.setSize(T,E),a!==null&&a.setSize(T,E),l!==null&&l.setSize(T,E);for(let x=0;x<S.length;x++){let b=S[x];b.setSize&&b.setSize(T,E)}},this.setEffects=function(T){S=T,y=S.length>0&&S[0].isRenderPass===!0;let E=o.width,x=o.height;S.length>0&&a===null&&(a=new _i(E,x,{type:Hi,depthBuffer:!1,stencilBuffer:!1}),l=new _i(E,x,{type:Hi,depthBuffer:!1,stencilBuffer:!1}));let b=i===!0&&S.some(P=>P.needsDepthTexture===!0);b!==(o.depthTexture!==null)&&(b===!0&&c===null&&(c=new Cs(E,x),r===!0&&(c.format=Is,c.type=zr)),o.dispose(),o.depthTexture=b?c:null,o.resolveDepthBuffer=b,o.storeMultisampledDepthBuffer=b);for(let P=0;P<S.length;P++){let C=S[P];C.setSize&&C.setSize(E,x),b&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(T,E){if(m||T.toneMapping===os&&S.length===0)return!1;if(v=E,E!==null){let x=E.width,b=E.height;(o.width!==x||o.height!==b)&&this.setSize(x,b)}return y===!1&&T.setRenderTarget(o),_=T.toneMapping,T.toneMapping=os,!0},this.hasRenderPass=function(){return y},this.end=function(T,E){T.toneMapping=_,m=!0;let x=o,b=a;for(let P=0;P<S.length;P++){let C=S[P];C.enabled!==!1&&(C.render(T,b,x,E),C.needsSwap!==!1&&(x=b,b=b===a?l:a))}if(p!==T.outputColorSpace||g!==T.toneMapping){p=T.outputColorSpace,g=T.toneMapping,d.defines={},ge.getTransfer(p)===Ce&&(d.defines.SRGB_TRANSFER="");let P=Eb[g];P&&(d.defines[P]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,T.setRenderTarget(v),T.render(u,f),v=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var h0=new Un,u0=new Cs(1,1),f0=new ja(1),d0=new Ha,p0=new oh,m0=new Ka,H_=[],W_=[],X_=new Float32Array(16),q_=new Float32Array(9),Y_=new Float32Array(4);function Zo(s,t,e){let n=s[0];if(n<=0||n>0)return s;let i=t*e,r=H_[i];if(r===void 0&&(r=new Float32Array(i),H_[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function hn(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function un(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function _u(s,t){let e=W_[t];e===void 0&&(e=new Int32Array(t),W_[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function Cb(s,t){let e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Rb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(hn(e,t))return;s.uniform2fv(this.addr,t),un(e,t)}}function Pb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(hn(e,t))return;s.uniform3fv(this.addr,t),un(e,t)}}function Ib(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(hn(e,t))return;s.uniform4fv(this.addr,t),un(e,t)}}function Lb(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(hn(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),un(e,t)}else{if(hn(e,n))return;Y_.set(n),s.uniformMatrix2fv(this.addr,!1,Y_),un(e,n)}}function Db(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(hn(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),un(e,t)}else{if(hn(e,n))return;q_.set(n),s.uniformMatrix3fv(this.addr,!1,q_),un(e,n)}}function Nb(s,t){let e=this.cache,n=t.elements;if(n===void 0){if(hn(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),un(e,t)}else{if(hn(e,n))return;X_.set(n),s.uniformMatrix4fv(this.addr,!1,X_),un(e,n)}}function Ub(s,t){let e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Ob(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(hn(e,t))return;s.uniform2iv(this.addr,t),un(e,t)}}function Fb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(hn(e,t))return;s.uniform3iv(this.addr,t),un(e,t)}}function Bb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(hn(e,t))return;s.uniform4iv(this.addr,t),un(e,t)}}function zb(s,t){let e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function kb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(hn(e,t))return;s.uniform2uiv(this.addr,t),un(e,t)}}function Vb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(hn(e,t))return;s.uniform3uiv(this.addr,t),un(e,t)}}function Gb(s,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(hn(e,t))return;s.uniform4uiv(this.addr,t),un(e,t)}}function xu(s){return s.version===0&&(s.compareFunction=zd,s.needsUpdate=!0),s}function Hb(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?r=xu(u0):r=h0,e.setTexture2D(t||r,i)}function Wb(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||p0,i)}function Xb(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_CUBE_SHADOW?r=xu(f0):r=m0,e.setTextureCube(t||r,i)}function qb(s,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||d0,i)}function Yb(s){switch(s){case 5126:return Cb;case 35664:return Rb;case 35665:return Pb;case 35666:return Ib;case 35674:return Lb;case 35675:return Db;case 35676:return Nb;case 5124:case 35670:return Ub;case 35667:case 35671:return Ob;case 35668:case 35672:return Fb;case 35669:case 35673:return Bb;case 5125:return zb;case 36294:return kb;case 36295:return Vb;case 36296:return Gb;case 35678:case 36198:case 36298:case 36306:case 35682:return Hb;case 35679:case 36299:case 36307:return Wb;case 35680:case 36300:case 36308:case 36293:return Xb;case 36289:case 36303:case 36311:case 36292:return qb}}function Zb(s,t){s.uniform1fv(this.addr,t)}function Jb(s,t){let e=Zo(t,this.size,2);s.uniform2fv(this.addr,e)}function $b(s,t){let e=Zo(t,this.size,3);s.uniform3fv(this.addr,e)}function Kb(s,t){let e=Zo(t,this.size,4);s.uniform4fv(this.addr,e)}function Qb(s,t){let e=Zo(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function jb(s,t){let e=Zo(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function tw(s,t){let e=Zo(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function ew(s,t){s.uniform1iv(this.addr,t)}function nw(s,t){s.uniform2iv(this.addr,t)}function iw(s,t){s.uniform3iv(this.addr,t)}function sw(s,t){s.uniform4iv(this.addr,t)}function rw(s,t){s.uniform1uiv(this.addr,t)}function ow(s,t){s.uniform2uiv(this.addr,t)}function aw(s,t){s.uniform3uiv(this.addr,t)}function lw(s,t){s.uniform4uiv(this.addr,t)}function cw(s,t,e){let n=this.cache,i=t.length,r=_u(e,i);hn(n,r)||(s.uniform1iv(this.addr,r),un(n,r));let o;this.type===s.SAMPLER_2D_SHADOW?o=xu(u0):o=h0;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,r[a])}function hw(s,t,e){let n=this.cache,i=t.length,r=_u(e,i);hn(n,r)||(s.uniform1iv(this.addr,r),un(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||p0,r[o])}function uw(s,t,e){let n=this.cache,i=t.length,r=_u(e,i);hn(n,r)||(s.uniform1iv(this.addr,r),un(n,r));let o;this.type===s.SAMPLER_CUBE_SHADOW?o=xu(f0):o=m0;for(let a=0;a!==i;++a)e.setTextureCube(t[a]||o,r[a])}function fw(s,t,e){let n=this.cache,i=t.length,r=_u(e,i);hn(n,r)||(s.uniform1iv(this.addr,r),un(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||d0,r[o])}function dw(s){switch(s){case 5126:return Zb;case 35664:return Jb;case 35665:return $b;case 35666:return Kb;case 35674:return Qb;case 35675:return jb;case 35676:return tw;case 5124:case 35670:return ew;case 35667:case 35671:return nw;case 35668:case 35672:return iw;case 35669:case 35673:return sw;case 5125:return rw;case 36294:return ow;case 36295:return aw;case 36296:return lw;case 35678:case 36198:case 36298:case 36306:case 35682:return cw;case 35679:case 36299:case 36307:return hw;case 35680:case 36300:case 36308:case 36293:return uw;case 36289:case 36303:case 36311:case 36292:return fw}}var tp=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Yb(e.type)}},ep=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=dw(e.type)}},np=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let r=0,o=i.length;r!==o;++r){let a=i[r];a.setValue(t,e[a.id],n)}}},Qd=/(\w+)(\])?(\[|\.)?/g;function Z_(s,t){s.seq.push(t),s.map[t.id]=t}function pw(s,t,e){let n=s.name,i=n.length;for(Qd.lastIndex=0;;){let r=Qd.exec(n),o=Qd.lastIndex,a=r[1],l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Z_(e,c===void 0?new tp(a,s,t):new ep(a,s,t));break}else{let d=e.map[a];d===void 0&&(d=new np(a),Z_(e,d)),e=d}}}var qo=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);pw(a,l,this)}let i=[],r=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):r.push(o);i.length>0&&(this.seq=i.concat(r))}setValue(t,e,n,i){let r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){let a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,r=t.length;i!==r;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function J_(s,t,e){let n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}var mw=37297,gw=0;function _w(s,t){let e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var $_=new $t;function xw(s){ge._getMatrix($_,ge.workingColorSpace,s);let t=`mat3( ${$_.elements.map(e=>e.toFixed(4))} )`;switch(ge.getTransfer(s)){case ka:return[t,"LinearTransferOETF"];case Ce:return[t,"sRGBTransferOETF"];default:return Xt("WebGLProgram: Unsupported color space: ",s),[t,"LinearTransferOETF"]}}function K_(s,t,e){let n=s.getShaderParameter(t,s.COMPILE_STATUS),r=(s.getShaderInfoLog(t)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+r+`

`+_w(s.getShaderSource(t),a)}else return r}function vw(s,t){let e=xw(t);return[`vec4 ${s}( vec4 value ) {`,`	return ${e[1]}( vec4( ${e[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var yw={[Sd]:"Linear",[Md]:"Reinhard",[bd]:"Cineon",[wd]:"ACESFilmic",[Ed]:"AgX",[Ad]:"Neutral",[Td]:"Custom"};function Sw(s,t){let e=yw[t];return e===void 0?(Xt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var mu=new B;function Mw(){ge.getLuminanceCoefficients(mu);let s=mu.x.toFixed(4),t=mu.y.toFixed(4),e=mu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bw(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(xl).join(`
`)}function ww(s){let t=[];for(let e in s){let n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Tw(s,t){let e={},n=s.getProgramParameter(t,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let r=s.getActiveAttrib(t,i),o=r.name,a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function xl(s){return s!==""}function Q_(s,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,t.numLightProbeGrids)}function j_(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var Ew=/^[ \t]*#include +<([\w\d./]+)>/gm;function ip(s){return s.replace(Ew,Aw)}function Aw(s,t){let e=se[t];if(e===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">");return ip(e)}var Cw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function t0(s){return s.replace(Cw,Rw)}function Rw(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function e0(s){let t=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var Pw={[ll]:"SHADOWMAP_TYPE_PCF",[Go]:"SHADOWMAP_TYPE_VSM"};function Iw(s){return Pw[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Lw={[Wo]:"ENVMAP_MODE_REFRACTION"};function Dw(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Lw[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Nw={[yd]:"ENVMAP_BLENDING_MULTIPLY",[g_]:"ENVMAP_BLENDING_MIX",[__]:"ENVMAP_BLENDING_ADD"};function Uw(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Nw[s.combine]||"ENVMAP_BLENDING_NONE"}function Ow(s,t,e,n){let i=s.getContext(),r=e.defines,o=e.vertexShader,a=e.fragmentShader,l=Iw(e),c=e.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=Dw(e),d=Uw(e),u=bw(e),f=ww(r),p=i.createProgram(),g,m,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(xl).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f].filter(xl).join(`
`),m.length>0&&(m+=`
`)):(g=[e0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+e.diffuseRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(xl).join(`
`),m=[e0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,f,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMapPMREM?"#define ENVMAP_MAX_LOD "+e.envMapMaxLod+".0":"",e.envMapPMREM?"#define ENVMAP_SIZE "+e.envMapSize+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",e.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==os?"#define TONE_MAPPING":"",e.toneMapping!==os?se.tonemapping_pars_fragment:"",e.toneMapping!==os?Sw("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,vw("linearToOutputTexel",e.outputColorSpace),Mw(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(xl).join(`
`)),o=ip(o),o=Q_(o,e),o=j_(o,e),a=ip(a),a=Q_(a,e),a=j_(a,e),o=t0(o),a=t0(a),e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,g=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Vd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Vd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=_+g+o,S=_+m+a,y=J_(i,i.VERTEX_SHADER,v),T=J_(i,i.FRAGMENT_SHADER,S);i.attachShader(p,y),i.attachShader(p,T),e.index0AttributeName!==void 0?i.bindAttribLocation(p,0,e.index0AttributeName):e.hasPositionAttribute===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function E(C){if(s.debug.checkShaderErrors){let N=i.getProgramInfoLog(p)||"",D=i.getShaderInfoLog(y)||"",V=i.getShaderInfoLog(T)||"",I=N.trim(),z=D.trim(),H=V.trim(),O=!0,et=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(O=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,p,y,T);else{let W=K_(i,y,"vertex"),A=K_(i,T,"fragment");Zt("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+I+`
`+W+`
`+A)}else I!==""?Xt("WebGLProgram: Program Info Log:",I):(z===""||H==="")&&(et=!1);et&&(C.diagnostics={runnable:O,programLog:I,vertexShader:{log:z,prefix:g},fragmentShader:{log:H,prefix:m}})}i.deleteShader(y),i.deleteShader(T),x=new qo(i,p),b=Tw(i,p)}let x;this.getUniforms=function(){return x===void 0&&E(this),x};let b;this.getAttributes=function(){return b===void 0&&E(this),b};let P=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=i.getProgramParameter(p,mw)),P},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=gw++,this.cacheKey=t,this.usedTimes=1,this.program=p,this.vertexShader=y,this.fragmentShader=T,this}var Fw=0,sp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,n){let i=this._getShaderCacheForMaterial(t);return i.has(e)===!1&&(i.add(e),e.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new rp(t),e.set(t,n)),n}},rp=class{constructor(t){this.id=Fw++,this.code=t,this.usedTimes=0}};function Bw(s){return s===lr||s===ml||s===gl}function zw(s,t,e,n,i,r){let o=new Wa,a=new sp,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function p(x,b,P,C,N,D){let V=C.fog,I=N.geometry,z=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,H=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,O=t.get(x.envMap||z,H),et=u[x.type],W=n.precision;x.precision!==null&&(W=n.getMaxPrecision(x.precision),W!==x.precision&&Xt("WebGLProgram.getParameters:",x.precision,"not supported, using",W,"instead."));let A=I.morphAttributes.position||I.morphAttributes.normal||I.morphAttributes.color,Y=A!==void 0?A.length:0,St=0;I.morphAttributes.position!==void 0&&(St=1),I.morphAttributes.normal!==void 0&&(St=2),I.morphAttributes.color!==void 0&&(St=3);let Dt,J,at,ut;if(et){let Q=ls[et];Dt=Q.vertexShader,J=Q.fragmentShader}else{Dt=x.vertexShader,J=x.fragmentShader;let Q=a.getVertexShaderStage(x),At=a.getFragmentShaderStage(x);a.update(x,Q,At),at=Q.id,ut=At.id}let Et=s.getRenderTarget(),yt=s.state.buffers.depth.getReversed(),Bt=N.isInstancedMesh===!0,Me=N.isBatchedMesh===!0,Lt=!!x.map,Yt=!!x.matcap,Ut=!!O,kt=Ut&&O.isPMREMTexture===!0,ce=!!x.aoMap,pe=!!x.lightMap,$=!!x.bumpMap&&x.wireframe===!1,ee=!!x.normalMap,We=!!x.displacementMap,Te=!!x.emissiveMap,he=!!x.metalnessMap,ke=!!x.roughnessMap,Ve=x.anisotropy>0,F=x.clearcoat>0,_e=x.diffuseRoughness>0,xe=x.dispersion>0,Wt=x.retroreflectivity>0,gt=x.iridescence>0,re=x.sheen>0,Nt=x.transmission>0,Ht=Ve&&!!x.anisotropyMap,R=F&&!!x.clearcoatMap,M=F&&!!x.clearcoatNormalMap,G=F&&!!x.clearcoatRoughnessMap,lt=_e&&!!x.diffuseRoughnessMap,rt=gt&&!!x.iridescenceMap,pt=gt&&!!x.iridescenceThicknessMap,Mt=re&&!!x.sheenColorMap,X=re&&!!x.sheenRoughnessMap,nt=!!x.specularMap,dt=!!x.specularColorMap,L=!!x.specularIntensityMap,j=Nt&&!!x.transmissionMap,K=Nt&&!!x.thicknessMap,mt=!!x.gradientMap,ct=!!x.alphaMap,_t=x.alphaTest>0,ht=!!x.alphaHash,xt=!!x.extensions,tt=os;x.toneMapped&&(Et===null||Et.isXRRenderTarget===!0)&&(tt=s.toneMapping);let st=kt?O.isCompressedCubeTexture?O.image[0].mipmaps:O.mipmaps:null,vt={shaderID:et,shaderType:x.type,shaderName:x.name,vertexShader:Dt,fragmentShader:J,defines:x.defines,customVertexShaderID:at,customFragmentShaderID:ut,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:W,batching:Me,batchingColor:Me&&N._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&N.instanceColor!==null,instancingMorph:Bt&&N.morphTexture!==null,outputColorSpace:Et===null?s.outputColorSpace:Et.isXRRenderTarget===!0?Et.texture.colorSpace:ge.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Lt,matcap:Yt,envMap:Ut,envMapMode:Ut&&O.mapping,envMapPMREM:kt,envMapMaxLod:kt?st.length-1:null,envMapSize:kt?st[0].width:null,aoMap:ce,lightMap:pe,bumpMap:$,normalMap:ee,displacementMap:We,emissiveMap:Te,normalMapObjectSpace:ee&&x.normalMapType===y_,normalMapTangentSpace:ee&&x.normalMapType===Od,packedNormalMap:ee&&x.normalMapType===Od&&Bw(x.normalMap.format),metalnessMap:he,roughnessMap:ke,anisotropy:Ve,anisotropyMap:Ht,clearcoat:F,clearcoatMap:R,clearcoatNormalMap:M,clearcoatRoughnessMap:G,diffuseRoughness:_e,diffuseRoughnessMap:lt,dispersion:xe,retroreflection:Wt,iridescence:gt,iridescenceMap:rt,iridescenceThicknessMap:pt,sheen:re,sheenColorMap:Mt,sheenRoughnessMap:X,specularMap:nt,specularColorMap:dt,specularIntensityMap:L,transmission:Nt,transmissionMap:j,thicknessMap:K,gradientMap:mt,opaque:x.transparent===!1&&x.blending===Ho&&x.alphaToCoverage===!1,alphaMap:ct,alphaTest:_t,alphaHash:ht,combine:x.combine,mapUv:Lt&&f(x.map.channel),aoMapUv:ce&&f(x.aoMap.channel),lightMapUv:pe&&f(x.lightMap.channel),bumpMapUv:$&&f(x.bumpMap.channel),normalMapUv:ee&&f(x.normalMap.channel),displacementMapUv:We&&f(x.displacementMap.channel),emissiveMapUv:Te&&f(x.emissiveMap.channel),metalnessMapUv:he&&f(x.metalnessMap.channel),roughnessMapUv:ke&&f(x.roughnessMap.channel),anisotropyMapUv:Ht&&f(x.anisotropyMap.channel),clearcoatMapUv:R&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:M&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:G&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:lt&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:rt&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:pt&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:Mt&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:X&&f(x.sheenRoughnessMap.channel),specularMapUv:nt&&f(x.specularMap.channel),specularColorMapUv:dt&&f(x.specularColorMap.channel),specularIntensityMapUv:L&&f(x.specularIntensityMap.channel),transmissionMapUv:j&&f(x.transmissionMap.channel),thicknessMapUv:K&&f(x.thicknessMap.channel),alphaMapUv:ct&&f(x.alphaMap.channel),vertexTangents:!!I.attributes.tangent&&(ee||Ve),vertexNormals:!!I.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!I.attributes.color&&I.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!I.attributes.uv&&(Lt||ct),fog:!!V,useFog:x.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||I.attributes.normal===void 0&&ee===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:yt,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:I.attributes.position!==void 0,morphTargets:I.morphAttributes.position!==void 0,morphNormals:I.morphAttributes.normal!==void 0,morphColors:I.morphAttributes.color!==void 0,morphTargetsCount:Y,morphTextureStride:St,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:D.filter(Q=>Q.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:tt,decodeVideoTexture:Lt&&x.map.isVideoTexture===!0&&ge.getTransfer(x.map.colorSpace)===Ce,decodeVideoTextureEmissive:Te&&x.emissiveMap.isVideoTexture===!0&&ge.getTransfer(x.emissiveMap.colorSpace)===Ce,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===oi,flipSided:x.side===Kn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:xt&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xt&&x.extensions.multiDraw===!0||Me)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return vt.vertexUv1s=l.has(1),vt.vertexUv2s=l.has(2),vt.vertexUv3s=l.has(3),l.clear(),vt}function g(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)b.push(P),b.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(m(b,x),_(b,x),b.push(s.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function m(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapPMREM),x.push(b.envMapMaxLod),x.push(b.envMapSize),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.diffuseRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.numLightProbeGrids),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function _(x,b){o.disableAll(),b.instancing&&o.enable(0),b.instancingColor&&o.enable(1),b.instancingMorph&&o.enable(2),b.matcap&&o.enable(3),b.envMap&&o.enable(4),b.normalMapObjectSpace&&o.enable(5),b.normalMapTangentSpace&&o.enable(6),b.clearcoat&&o.enable(7),b.iridescence&&o.enable(8),b.alphaTest&&o.enable(9),b.vertexColors&&o.enable(10),b.vertexAlphas&&o.enable(11),b.vertexUv1s&&o.enable(12),b.vertexUv2s&&o.enable(13),b.vertexUv3s&&o.enable(14),b.vertexTangents&&o.enable(15),b.anisotropy&&o.enable(16),b.alphaHash&&o.enable(17),b.batching&&o.enable(18),b.dispersion&&o.enable(19),b.retroreflection&&o.enable(24),b.diffuseRoughness&&o.enable(25),b.batchingColor&&o.enable(20),b.gradientMap&&o.enable(21),b.packedNormalMap&&o.enable(22),b.vertexNormals&&o.enable(23),x.push(o.mask),o.disableAll(),b.fog&&o.enable(0),b.useFog&&o.enable(1),b.flatShading&&o.enable(2),b.logarithmicDepthBuffer&&o.enable(3),b.reversedDepthBuffer&&o.enable(4),b.skinning&&o.enable(5),b.morphTargets&&o.enable(6),b.morphNormals&&o.enable(7),b.morphColors&&o.enable(8),b.premultipliedAlpha&&o.enable(9),b.shadowMapEnabled&&o.enable(10),b.doubleSided&&o.enable(11),b.flipSided&&o.enable(12),b.useDepthPacking&&o.enable(13),b.dithering&&o.enable(14),b.transmission&&o.enable(15),b.sheen&&o.enable(16),b.opaque&&o.enable(17),b.pointsUvs&&o.enable(18),b.decodeVideoTexture&&o.enable(19),b.decodeVideoTextureEmissive&&o.enable(20),b.alphaToCoverage&&o.enable(21),b.numLightProbeGrids>0&&o.enable(22),b.hasPositionAttribute&&o.enable(23),x.push(o.mask)}function v(x){let b=u[x.type],P;if(b){let C=ls[b];P=O_.clone(C.uniforms)}else P=x.uniforms;return P}function S(x,b){let P=h.get(b);return P!==void 0?++P.usedTimes:(P=new Ow(s,b,x,i),c.push(P),h.set(b,P)),P}function y(x){if(--x.usedTimes===0){let b=c.indexOf(x);c[b]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function T(x){a.remove(x)}function E(){a.dispose()}return{getParameters:p,getProgramCacheKey:g,getUniforms:v,acquireProgram:S,releaseProgram:y,releaseShaderCache:T,programs:c,dispose:E}}function kw(){let s=new WeakMap;function t(o){return s.has(o)}function e(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:r}}function Vw(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.materialVariant!==t.materialVariant?s.materialVariant-t.materialVariant:s.z!==t.z?s.z-t.z:s.id-t.id}function n0(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function i0(){let s=[],t=0,e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function a(u,f,p,g,m,_){let v=s[t];return v===void 0?(v={id:u.id,object:u,geometry:f,material:p,materialVariant:o(u),groupOrder:g,renderOrder:u.renderOrder,z:m,group:_},s[t]=v):(v.id=u.id,v.object=u,v.geometry=f,v.material=p,v.materialVariant=o(u),v.groupOrder=g,v.renderOrder=u.renderOrder,v.z=m,v.group=_),t++,v}function l(u,f,p,g,m,_,v){v.reversedDepth===!0&&(m=-m);let S=a(u,f,p,g,m,_);p.transmission>0?n.push(S):p.transparent===!0?i.push(S):e.push(S)}function c(u,f,p,g,m,_){let v=a(u,f,p,g,m,_);p.transmission>0?n.unshift(v):p.transparent===!0?i.unshift(v):e.unshift(v)}function h(u,f){e.length>1&&e.sort(u||Vw),n.length>1&&n.sort(f||n0),i.length>1&&i.sort(f||n0)}function d(){for(let u=t,f=s.length;u<f;u++){let p=s[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:l,unshift:c,finish:d,sort:h}}function Gw(){let s=new WeakMap;function t(n,i){let r=s.get(n),o;return r===void 0?(o=new i0,s.set(n,[o])):i>=r.length?(o=new i0,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Hw(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new B,color:new Kt};break;case"SpotLight":e={position:new B,direction:new B,color:new Kt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new Kt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new Kt,groundColor:new Kt};break;case"RectAreaLight":e={color:new Kt,position:new B,halfWidth:new B,halfHeight:new B};break}return s[t.id]=e,e}}}function Ww(){let s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new te,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}var Xw=0;function qw(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Yw(s){let t=new Hw,e=Ww(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new B);let i=new B,r=new ze,o=new ze;function a(c){let h=0,d=0,u=0;for(let D=0;D<9;D++)n.probe[D].set(0,0,0);let f=0,p=0,g=0,m=0,_=0,v=0,S=0,y=0,T=0,E=0,x=0,b=0,P=0,C=0;c.sort(qw);for(let D=0,V=c.length;D<V;D++){let I=c[D],z=I.color,H=I.intensity,O=I.distance,et=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===lr?et=I.shadow.map.texture:et=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)h+=z.r*H,d+=z.g*H,u+=z.b*H;else if(I.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(I.sh.coefficients[W],H);C++}else if(I.isSunLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let A=I.shadow,Y=e.get(I);Y.shadowIntensity=A.intensity,Y.shadowBias=A.bias,Y.shadowNormalBias=A.normalBias,Y.shadowRadius=A.radius,Y.shadowMapSize.copy(A.mapSize).multiply(A.getFrameExtents()),n.sunShadow[p]=Y,n.sunShadowMap[p]=et;let St=A.getViewportCount();for(let Dt=0;Dt<St;Dt++)n.sunShadowMatrix[g+Dt]=A.getMatrix(Dt),n.sunShadowCascade[g+Dt]=A._cascadeData[Dt];g+=St,p++}n.sun[f]=W,f++}else if(I.isDirectionalLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){let A=I.shadow,Y=e.get(I);Y.shadowIntensity=A.intensity,Y.shadowBias=A.bias,Y.shadowNormalBias=A.normalBias,Y.shadowRadius=A.radius,Y.shadowMapSize=A.mapSize,n.directionalShadow[m]=Y,n.directionalShadowMap[m]=et,n.directionalShadowMatrix[m]=I.shadow.matrix,T++}n.directional[m]=W,m++}else if(I.isSpotLight){let W=t.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(z).multiplyScalar(H),W.distance=O,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,n.spot[v]=W;let A=I.shadow;if(I.map&&(n.spotLightMap[b]=I.map,b++,A.updateMatrices(I),I.castShadow&&P++),n.spotLightMatrix[v]=A.matrix,I.castShadow){let Y=e.get(I);Y.shadowIntensity=A.intensity,Y.shadowBias=A.bias,Y.shadowNormalBias=A.normalBias,Y.shadowRadius=A.radius,Y.shadowMapSize=A.mapSize,n.spotShadow[v]=Y,n.spotShadowMap[v]=et,x++}v++}else if(I.isRectAreaLight){let W=t.get(I);W.color.copy(z).multiplyScalar(H),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),n.rectArea[S]=W,S++}else if(I.isPointLight){let W=t.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){let A=I.shadow,Y=e.get(I);Y.shadowIntensity=A.intensity,Y.shadowBias=A.bias,Y.shadowNormalBias=A.normalBias,Y.shadowRadius=A.radius,Y.shadowMapSize=A.mapSize,Y.shadowCameraNear=A.camera.near,Y.shadowCameraFar=A.camera.far,n.pointShadow[_]=Y,n.pointShadowMap[_]=et,n.pointShadowMatrix[_]=I.shadow.matrix,E++}n.point[_]=W,_++}else if(I.isHemisphereLight){let W=t.get(I);W.skyColor.copy(I.color).multiplyScalar(H),W.groundColor.copy(I.groundColor).multiplyScalar(H),n.hemi[y]=W,y++}}S>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Rt.LTC_FLOAT_1,n.rectAreaLTC2=Rt.LTC_FLOAT_2):(n.rectAreaLTC1=Rt.LTC_HALF_1,n.rectAreaLTC2=Rt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let N=n.hash;(N.sunLength!==f||N.directionalLength!==m||N.pointLength!==_||N.spotLength!==v||N.rectAreaLength!==S||N.hemiLength!==y||N.numSunShadows!==p||N.numDirectionalShadows!==T||N.numPointShadows!==E||N.numSpotShadows!==x||N.numSpotMaps!==b||N.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=m,n.spot.length=v,n.rectArea.length=S,n.point.length=_,n.hemi.length=y,n.sunShadow.length=p,n.sunShadowMap.length=p,n.sunShadowMatrix.length=g,n.sunShadowCascade.length=g,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=E,n.pointShadowMap.length=E,n.pointShadowMatrix.length=E,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+b-P,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=P,n.numLightProbes=C,N.sunLength=f,N.directionalLength=m,N.pointLength=_,N.spotLength=v,N.rectAreaLength=S,N.hemiLength=y,N.numSunShadows=p,N.numDirectionalShadows=T,N.numPointShadows=E,N.numSpotShadows=x,N.numSpotMaps=b,N.numLightProbes=C,n.version=Xw++)}function l(c,h){let d=0,u=0,f=0,p=0,g=0,m=0,_=h.matrixWorldInverse;for(let v=0,S=c.length;v<S;v++){let y=c[v];if(y.isSunLight){let T=n.sun[d];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(_),d++}else if(y.isDirectionalLight){let T=n.directional[u];T.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(_),u++}else if(y.isSpotLight){let T=n.spot[p];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(_),T.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),T.direction.sub(i),T.direction.transformDirection(_),p++}else if(y.isRectAreaLight){let T=n.rectArea[g];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(_),o.identity(),r.copy(y.matrixWorld),r.premultiply(_),o.extractRotation(r),T.halfWidth.set(y.width*.5,0,0),T.halfHeight.set(0,y.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){let T=n.point[f];T.position.setFromMatrixPosition(y.matrixWorld),T.position.applyMatrix4(_),f++}else if(y.isHemisphereLight){let T=n.hemi[m];T.direction.setFromMatrixPosition(y.matrixWorld),T.direction.transformDirection(_),m++}}}return{setup:a,setupView:l,state:n}}function s0(s){let t=new Yw(s),e=[],n=[],i=[];function r(d){h.camera=d,e.length=0,n.length=0,i.length=0}function o(d){d.isLightProbeGrid?i.push(d):e.push(d)}function a(d){n.push(d)}function l(){t.setup(e),i.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){t.setupView(e,d)}let h={lightsArray:e,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function Zw(s){let t=new WeakMap;function e(i,r=0){let o=t.get(i),a;return o===void 0?(a=new s0(s),t.set(i,[a])):r>=o.length?(a=new s0(s),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var Jw=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,$w=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Kw=[new B(1,0,0),new B(-1,0,0),new B(0,1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1)],Qw=[new B(0,-1,0),new B(0,-1,0),new B(0,0,1),new B(0,0,-1),new B(0,-1,0),new B(0,-1,0)],r0=new ze,_l=new B,jd=new B;function jw(s,t,e){let n=new Ur,i=new te,r=new te,o=new Ke,a=new ph,l=new mh,c={},h=e.maxTextureSize,d={[ar]:Kn,[Kn]:ar,[oi]:oi},u=new Ri({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new te},radius:{value:4}},vertexShader:Jw,fragmentShader:$w}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let p=new an;p.setAttribute("position",new ki(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new vn(p,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ll;let _=this.type;this.render=function(E,x,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===Kg&&(Xt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ll);let P=s.getRenderTarget(),C=s.getActiveCubeFace(),N=s.getActiveMipmapLevel(),D=s.state;D.setBlending(Or),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let V=_!==this.type;V&&x.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(z=>z.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,z=E.length;I<z;I++){let H=E[I],O=H.shadow;if(O===void 0){Xt("WebGLShadowMap:",H,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;i.copy(O.mapSize);let et=O.getFrameExtents();i.multiply(et),r.copy(O.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/et.x),i.x=r.x*et.x,O.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/et.y),i.y=r.y*et.y,O.mapSize.y=r.y));let W=s.state.buffers.depth.getReversed();if(O.camera._reversedDepth=W,O.map===null||V===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===Go){if(H.isPointLight){Xt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new _i(i.x,i.y,{format:lr,type:Hi,minFilter:xn,magFilter:xn,generateMipmaps:!1}),O.map.texture.name=H.name+".shadowMap",O.map.depthTexture=new Cs(i.x,i.y,Gi),O.map.depthTexture.name=H.name+".shadowMapDepth",O.map.depthTexture.format=As,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=_n,O.map.depthTexture.magFilter=_n}else H.isPointLight?(O.map=new vl(i.x),O.map.depthTexture=new ja(i.x,Vi)):(O.map=new _i(i.x,i.y),O.map.depthTexture=new Cs(i.x,i.y,Vi)),O.map.depthTexture.name=H.name+".shadowMap",O.map.depthTexture.format=As,this.type===ll?(O.map.depthTexture.compareFunction=W?Bd:Fd,O.map.depthTexture.minFilter=xn,O.map.depthTexture.magFilter=xn):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=_n,O.map.depthTexture.magFilter=_n);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==i.x||O.map.height!==i.y)&&O.map.setSize(i.x,i.y);let A=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();H.isPointLight!==!0&&O.updateMatrices(H,b);let Y=(O.camera.layers.mask&4294967294)!==0?O.camera.layers:b.layers;for(let St=0;St<A;St++){let Dt=O.getCamera(St);if(H.isPointLight){let J=O.camera,at=O.matrix,ut=H.distance||J.far;ut!==J.far&&(J.far=ut,J.updateProjectionMatrix()),_l.setFromMatrixPosition(H.matrixWorld),J.position.copy(_l),jd.copy(J.position),jd.add(Kw[St]),J.up.copy(Qw[St]),J.lookAt(jd),J.updateMatrixWorld(),at.makeTranslation(-_l.x,-_l.y,-_l.z),r0.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),O._frustum.setFromProjectionMatrix(r0,J.coordinateSystem,J.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)s.setRenderTarget(O.map,St),s.clear();else{St===0&&(s.setRenderTarget(O.map),s.clear());let J=O.getViewport(St);o.set(r.x*J.x,r.y*J.y,r.x*J.z,r.y*J.w),D.viewport(o)}n=O.getFrustum(St),y(x,b,Dt,H,Y,this.type)}O.isPointLightShadow!==!0&&this.type===Go&&v(O,b),O.needsUpdate=!1}_=this.type,m.needsUpdate=!1,s.setRenderTarget(P,C,N)};function v(E,x){let b=t.update(g);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new _i(i.x,i.y,{format:lr,type:Hi}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(x,null,b,u,g,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(x,null,b,f,g,null)}function S(E,x,b,P){let C=null,N=b.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)C=N;else if(C=b.isPointLight===!0?l:a,s.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let D=C.uuid,V=x.uuid,I=c[D];I===void 0&&(I={},c[D]=I);let z=I[V];z===void 0&&(z=C.clone(),I[V]=z,x.addEventListener("dispose",T)),C=z}if(C.visible=x.visible,C.wireframe=x.wireframe,P===Go?C.side=x.shadowSide!==null?x.shadowSide:x.side:C.side=x.shadowSide!==null?x.shadowSide:d[x.side],C.alphaMap=x.alphaMap,C.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,C.map=x.map,C.clipShadows=x.clipShadows,C.clippingPlanes=x.clippingPlanes,C.clipIntersection=x.clipIntersection,C.displacementMap=x.displacementMap,C.displacementScale=x.displacementScale,C.displacementBias=x.displacementBias,C.wireframeLinewidth=x.wireframeLinewidth,C.linewidth=x.linewidth,b.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let D=s.properties.get(C);D.light=b}return C}function y(E,x,b,P,C,N){if(E.visible===!1)return;if(E.layers.test(C)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&N===Go)&&(!E.frustumCulled||E.intersectsFrustum(n))){E.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,E.matrixWorld);let I=t.update(E),z=E.material;if(Array.isArray(z)){let H=I.groups;for(let O=0,et=H.length;O<et;O++){let W=H[O],A=z[W.materialIndex];if(A&&A.visible){let Y=S(E,A,P,N);E.onBeforeShadow(s,E,x,b,I,Y,W),s.renderBufferDirect(b,null,I,Y,E,W),E.onAfterShadow(s,E,x,b,I,Y,W)}}}else if(z.visible){let H=S(E,z,P,N);E.onBeforeShadow(s,E,x,b,I,H,null),s.renderBufferDirect(b,null,I,H,E,null),E.onAfterShadow(s,E,x,b,I,H,null)}}let V=E.children;for(let I=0,z=V.length;I<z;I++)y(V[I],x,b,P,C,N)}function T(E){E.target.removeEventListener("dispose",T);for(let b in c){let P=c[b],C=E.target.uuid;C in P&&(P[C].dispose(),delete P[C])}}}function tT(s,t){function e(){let L=!1,j=new Ke,K=null,mt=new Ke(0,0,0,0);return{setMask:function(ct){K!==ct&&!L&&(s.colorMask(ct,ct,ct,ct),K=ct)},setLocked:function(ct){L=ct},setClear:function(ct,_t,ht,xt,tt){tt===!0&&(ct*=xt,_t*=xt,ht*=xt),j.set(ct,_t,ht,xt),mt.equals(j)===!1&&(s.clearColor(ct,_t,ht,xt),mt.copy(j))},reset:function(){L=!1,K=null,mt.set(-1,0,0,0)}}}function n(){let L=!1,j=!1,K=null,mt=null,ct=null;return{setReversed:function(_t){if(j!==_t){let ht=t.get("EXT_clip_control");_t?ht.clipControlEXT(ht.LOWER_LEFT_EXT,ht.ZERO_TO_ONE_EXT):ht.clipControlEXT(ht.LOWER_LEFT_EXT,ht.NEGATIVE_ONE_TO_ONE_EXT),j=_t;let xt=ct;ct=null,this.setClear(xt)}},getReversed:function(){return j},setTest:function(_t){_t?yt(s.DEPTH_TEST):Bt(s.DEPTH_TEST)},setMask:function(_t){K!==_t&&!L&&(s.depthMask(_t),K=_t)},setFunc:function(_t){if(j&&(_t=P_[_t]),mt!==_t){switch(_t){case Yc:s.depthFunc(s.NEVER);break;case Zc:s.depthFunc(s.ALWAYS);break;case Jc:s.depthFunc(s.LESS);break;case Po:s.depthFunc(s.LEQUAL);break;case $c:s.depthFunc(s.EQUAL);break;case Kc:s.depthFunc(s.GEQUAL);break;case Qc:s.depthFunc(s.GREATER);break;case jc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}mt=_t}},setLocked:function(_t){L=_t},setClear:function(_t){ct!==_t&&(ct=_t,j&&(_t=1-_t),s.clearDepth(_t))},reset:function(){L=!1,K=null,mt=null,ct=null,j=!1}}}function i(){let L=!1,j=null,K=null,mt=null,ct=null,_t=null,ht=null,xt=null,tt=null;return{setTest:function(st){L||(st?yt(s.STENCIL_TEST):Bt(s.STENCIL_TEST))},setMask:function(st){j!==st&&!L&&(s.stencilMask(st),j=st)},setFunc:function(st,vt,Q){(K!==st||mt!==vt||ct!==Q)&&(s.stencilFunc(st,vt,Q),K=st,mt=vt,ct=Q)},setOp:function(st,vt,Q){(_t!==st||ht!==vt||xt!==Q)&&(s.stencilOp(st,vt,Q),_t=st,ht=vt,xt=Q)},setLocked:function(st){L=st},setClear:function(st){tt!==st&&(s.clearStencil(st),tt=st)},reset:function(){L=!1,j=null,K=null,mt=null,ct=null,_t=null,ht=null,xt=null,tt=null}}}let r=new e,o=new n,a=new i,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,p=[],g=null,m=!1,_=null,v=null,S=null,y=null,T=null,E=null,x=null,b=new Kt(0,0,0),P=0,C=!1,N=null,D=null,V=null,I=null,z=null,H=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),O=!1,et=0,W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(W)[1]),O=et>=1):W.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),O=et>=2);let A=null,Y={},St=s.getParameter(s.SCISSOR_BOX),Dt=s.getParameter(s.VIEWPORT),J=new Ke().fromArray(St),at=new Ke().fromArray(Dt);function ut(L,j,K,mt){let ct=new Uint8Array(4),_t=s.createTexture();s.bindTexture(L,_t),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ht=0;ht<K;ht++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(j,0,s.RGBA,1,1,mt,0,s.RGBA,s.UNSIGNED_BYTE,ct):s.texImage2D(j+ht,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ct);return _t}let Et={};Et[s.TEXTURE_2D]=ut(s.TEXTURE_2D,s.TEXTURE_2D,1),Et[s.TEXTURE_CUBE_MAP]=ut(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[s.TEXTURE_2D_ARRAY]=ut(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Et[s.TEXTURE_3D]=ut(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),yt(s.DEPTH_TEST),o.setFunc(Po),$(!1),ee(md),yt(s.CULL_FACE),ce(Or);function yt(L){h[L]!==!0&&(s.enable(L),h[L]=!0)}function Bt(L){h[L]!==!1&&(s.disable(L),h[L]=!1)}function Me(L,j){return u[L]!==j?(s.bindFramebuffer(L,j),u[L]=j,L===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=j),L===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=j),!0):!1}function Lt(L,j){let K=p,mt=!1;if(L){K=f.get(j),K===void 0&&(K=[],f.set(j,K));let ct=L.textures;if(K.length!==ct.length||K[0]!==s.COLOR_ATTACHMENT0){for(let _t=0,ht=ct.length;_t<ht;_t++)K[_t]=s.COLOR_ATTACHMENT0+_t;K.length=ct.length,mt=!0}}else K[0]!==s.BACK&&(K[0]=s.BACK,mt=!0);mt&&s.drawBuffers(K)}function Yt(L){return g!==L?(s.useProgram(L),g=L,!0):!1}let Ut={[Fr]:s.FUNC_ADD,[jg]:s.FUNC_SUBTRACT,[t_]:s.FUNC_REVERSE_SUBTRACT};Ut[e_]=s.MIN,Ut[n_]=s.MAX;let kt={[i_]:s.ZERO,[s_]:s.ONE,[r_]:s.SRC_COLOR,[xd]:s.SRC_ALPHA,[u_]:s.SRC_ALPHA_SATURATE,[c_]:s.DST_COLOR,[a_]:s.DST_ALPHA,[o_]:s.ONE_MINUS_SRC_COLOR,[vd]:s.ONE_MINUS_SRC_ALPHA,[h_]:s.ONE_MINUS_DST_COLOR,[l_]:s.ONE_MINUS_DST_ALPHA,[f_]:s.CONSTANT_COLOR,[d_]:s.ONE_MINUS_CONSTANT_COLOR,[p_]:s.CONSTANT_ALPHA,[m_]:s.ONE_MINUS_CONSTANT_ALPHA};function ce(L,j,K,mt,ct,_t,ht,xt,tt,st){if(L===Or){m===!0&&(Bt(s.BLEND),m=!1);return}if(m===!1&&(yt(s.BLEND),m=!0),L!==Qg){if(L!==_||st!==C){if((v!==Fr||T!==Fr)&&(s.blendEquation(s.FUNC_ADD),v=Fr,T=Fr),st)switch(L){case Ho:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case cl:s.blendFunc(s.ONE,s.ONE);break;case gd:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case _d:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Zt("WebGLState: Invalid blending: ",L);break}else switch(L){case Ho:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case cl:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case gd:Zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case _d:Zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Zt("WebGLState: Invalid blending: ",L);break}S=null,y=null,E=null,x=null,b.set(0,0,0),P=0,_=L,C=st}return}ct=ct||j,_t=_t||K,ht=ht||mt,(j!==v||ct!==T)&&(s.blendEquationSeparate(Ut[j],Ut[ct]),v=j,T=ct),(K!==S||mt!==y||_t!==E||ht!==x)&&(s.blendFuncSeparate(kt[K],kt[mt],kt[_t],kt[ht]),S=K,y=mt,E=_t,x=ht),(xt.equals(b)===!1||tt!==P)&&(s.blendColor(xt.r,xt.g,xt.b,tt),b.copy(xt),P=tt),_=L,C=!1}function pe(L,j){L.side===oi?Bt(s.CULL_FACE):yt(s.CULL_FACE);let K=L.side===Kn;j&&(K=!K),$(K),L.blending===Ho&&L.transparent===!1?ce(Or):ce(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let mt=L.stencilWrite;a.setTest(mt),mt&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Te(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?yt(s.SAMPLE_ALPHA_TO_COVERAGE):Bt(s.SAMPLE_ALPHA_TO_COVERAGE)}function $(L){N!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),N=L)}function ee(L){L!==Jg?(yt(s.CULL_FACE),L!==D&&(L===md?s.cullFace(s.BACK):L===$g?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Bt(s.CULL_FACE),D=L}function We(L){L!==V&&(O&&s.lineWidth(L),V=L)}function Te(L,j,K){L?(yt(s.POLYGON_OFFSET_FILL),(I!==j||z!==K)&&(I=j,z=K,o.getReversed()&&(j=-j,K=-K),s.polygonOffset(j,K))):Bt(s.POLYGON_OFFSET_FILL)}function he(L){L?yt(s.SCISSOR_TEST):Bt(s.SCISSOR_TEST)}function ke(L){L===void 0&&(L=s.TEXTURE0+H-1),A!==L&&(s.activeTexture(L),A=L)}function Ve(L,j,K){K===void 0&&(A===null?K=s.TEXTURE0+H-1:K=A);let mt=Y[K];mt===void 0&&(mt={type:void 0,texture:void 0},Y[K]=mt),(mt.type!==L||mt.texture!==j)&&(A!==K&&(s.activeTexture(K),A=K),s.bindTexture(L,j||Et[L]),mt.type=L,mt.texture=j)}function F(){let L=Y[A];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function _e(){try{s.compressedTexImage2D(...arguments)}catch(L){Zt("WebGLState:",L)}}function xe(){try{s.compressedTexImage3D(...arguments)}catch(L){Zt("WebGLState:",L)}}function Wt(){try{s.texSubImage2D(...arguments)}catch(L){Zt("WebGLState:",L)}}function gt(){try{s.texSubImage3D(...arguments)}catch(L){Zt("WebGLState:",L)}}function re(){try{s.compressedTexSubImage2D(...arguments)}catch(L){Zt("WebGLState:",L)}}function Nt(){try{s.compressedTexSubImage3D(...arguments)}catch(L){Zt("WebGLState:",L)}}function Ht(){try{s.texStorage2D(...arguments)}catch(L){Zt("WebGLState:",L)}}function R(){try{s.texStorage3D(...arguments)}catch(L){Zt("WebGLState:",L)}}function M(){try{s.texImage2D(...arguments)}catch(L){Zt("WebGLState:",L)}}function G(){try{s.texImage3D(...arguments)}catch(L){Zt("WebGLState:",L)}}function lt(L){return d[L]!==void 0?d[L]:s.getParameter(L)}function rt(L,j){d[L]!==j&&(s.pixelStorei(L,j),d[L]=j)}function pt(L){J.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),J.copy(L))}function Mt(L){at.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),at.copy(L))}function X(L,j){let K=c.get(j);K===void 0&&(K=new WeakMap,c.set(j,K));let mt=K.get(L);mt===void 0&&(mt=s.getUniformBlockIndex(j,L.name),s.uniformBlockBinding(j,mt,mt),K.set(L,mt))}function nt(L,j,K){let ct=c.get(j).get(L);l[ct]!==K&&(s.bindBufferBase(s.UNIFORM_BUFFER,ct,K),l[ct]=K)}function dt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},A=null,Y={},u={},l={},f=new WeakMap,p=[],g=null,m=!1,_=null,v=null,S=null,y=null,T=null,E=null,x=null,b=new Kt(0,0,0),P=0,C=!1,N=null,D=null,V=null,I=null,z=null,J.set(0,0,s.canvas.width,s.canvas.height),at.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:yt,disable:Bt,bindFramebuffer:Me,drawBuffers:Lt,useProgram:Yt,setBlending:ce,setMaterial:pe,setFlipSided:$,setCullFace:ee,setLineWidth:We,setPolygonOffset:Te,setScissorTest:he,activeTexture:ke,bindTexture:Ve,unbindTexture:F,compressedTexImage2D:_e,compressedTexImage3D:xe,texImage2D:M,texImage3D:G,pixelStorei:rt,getParameter:lt,updateUBOMapping:X,uniformBlockBinding:nt,texStorage2D:Ht,texStorage3D:R,texSubImage2D:Wt,texSubImage3D:gt,compressedTexSubImage2D:re,compressedTexSubImage3D:Nt,scissor:pt,viewport:Mt,reset:dt}}function eT(s,t,e,n,i,r,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new te,h=new WeakMap,d=new Set,u,f=new WeakMap,p=new Set,g=new FinalizationRegistry(R=>p.delete(R)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,M){return m?new OffscreenCanvas(R,M):Io("canvas")}function v(R,M,G){let lt=1,rt=Ht(R);if((rt.width>G||rt.height>G)&&(lt=G/Math.max(rt.width,rt.height)),lt<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let pt=Math.floor(lt*rt.width),Mt=Math.floor(lt*rt.height);u===void 0&&(u=_(pt,Mt));let X=M?_(pt,Mt):u;return X.width=pt,X.height=Mt,X.getContext("2d").drawImage(R,0,0,pt,Mt),Xt("WebGLRenderer: Texture has been resized from ("+rt.width+"x"+rt.height+") to ("+pt+"x"+Mt+")."),X}else return"data"in R&&Xt("WebGLRenderer: Image in DataTexture is too big ("+rt.width+"x"+rt.height+")."),R;return R}function S(R){return R.generateMipmaps}function y(R){s.generateMipmap(R)}function T(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function E(R,M,G,lt,rt,pt=!1){if(R!==null){if(s[R]!==void 0)return s[R];Xt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Mt;lt&&(Mt=t.get("EXT_texture_norm16"),Mt||Xt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let X=M;if(M===s.RED&&(G===s.FLOAT&&(X=s.R32F),G===s.HALF_FLOAT&&(X=s.R16F),G===s.UNSIGNED_BYTE&&(X=s.R8),G===s.UNSIGNED_SHORT&&Mt&&(X=Mt.R16_EXT),G===s.SHORT&&Mt&&(X=Mt.R16_SNORM_EXT)),M===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(X=s.R8UI),G===s.UNSIGNED_SHORT&&(X=s.R16UI),G===s.UNSIGNED_INT&&(X=s.R32UI),G===s.BYTE&&(X=s.R8I),G===s.SHORT&&(X=s.R16I),G===s.INT&&(X=s.R32I)),M===s.RG&&(G===s.FLOAT&&(X=s.RG32F),G===s.HALF_FLOAT&&(X=s.RG16F),G===s.UNSIGNED_BYTE&&(X=s.RG8),G===s.UNSIGNED_SHORT&&Mt&&(X=Mt.RG16_EXT),G===s.SHORT&&Mt&&(X=Mt.RG16_SNORM_EXT)),M===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(X=s.RG8UI),G===s.UNSIGNED_SHORT&&(X=s.RG16UI),G===s.UNSIGNED_INT&&(X=s.RG32UI),G===s.BYTE&&(X=s.RG8I),G===s.SHORT&&(X=s.RG16I),G===s.INT&&(X=s.RG32I)),M===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(X=s.RGB8UI),G===s.UNSIGNED_SHORT&&(X=s.RGB16UI),G===s.UNSIGNED_INT&&(X=s.RGB32UI),G===s.BYTE&&(X=s.RGB8I),G===s.SHORT&&(X=s.RGB16I),G===s.INT&&(X=s.RGB32I)),M===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(X=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(X=s.RGBA16UI),G===s.UNSIGNED_INT&&(X=s.RGBA32UI),G===s.BYTE&&(X=s.RGBA8I),G===s.SHORT&&(X=s.RGBA16I),G===s.INT&&(X=s.RGBA32I)),M===s.RGB&&(G===s.UNSIGNED_SHORT&&Mt&&(X=Mt.RGB16_EXT),G===s.SHORT&&Mt&&(X=Mt.RGB16_SNORM_EXT),G===s.UNSIGNED_INT_5_9_9_9_REV&&(X=s.RGB9_E5),G===s.UNSIGNED_INT_10F_11F_11F_REV&&(X=s.R11F_G11F_B10F)),M===s.RGBA){let nt=pt?ka:ge.getTransfer(rt);G===s.FLOAT&&(X=s.RGBA32F),G===s.HALF_FLOAT&&(X=s.RGBA16F),G===s.UNSIGNED_BYTE&&(X=nt===Ce?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT&&Mt&&(X=Mt.RGBA16_EXT),G===s.SHORT&&Mt&&(X=Mt.RGBA16_SNORM_EXT),G===s.UNSIGNED_SHORT_4_4_4_4&&(X=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(X=s.RGB5_A1)}return(X===s.R16F||X===s.R32F||X===s.RG16F||X===s.RG32F||X===s.RGBA16F||X===s.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function x(R,M){let G;return R?M===null||M===Vi||M===zr?G=s.DEPTH24_STENCIL8:M===Gi?G=s.DEPTH32F_STENCIL8:M===Xo&&(G=s.DEPTH24_STENCIL8,Xt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Vi||M===zr?G=s.DEPTH_COMPONENT24:M===Gi?G=s.DEPTH_COMPONENT32F:M===Xo&&(G=s.DEPTH_COMPONENT16),G}function b(R,M){return S(R)===!0||R.isFramebufferTexture&&R.minFilter!==_n&&R.minFilter!==xn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function P(R){let M=new WeakRef(R);n.get(R).__ref=M,p.add(M),g.register(R,M,M)}function C(R){let M=n.get(R).__ref;M!==void 0&&(p.delete(M),g.unregister(M))}function N(R){V(R.target)}function D(R){I(R.target)}function V(R){R.removeEventListener("dispose",N),C(R),H(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&d.delete(R)}function I(R){R.removeEventListener("dispose",D),C(R),et(R)}function z(){for(let R of p){let M=R.deref();M!==void 0&&(M.isRenderTarget===!0?I(M):V(M))}p.clear(),d.clear()}function H(R){let M=n.get(R);if(M.__webglInit===void 0)return;let G=R.source,lt=f.get(G);if(lt){let rt=lt[M.__cacheKey];rt.usedTimes--,rt.usedTimes===0&&O(R),Object.keys(lt).length===0&&f.delete(G)}n.remove(R)}function O(R){let M=n.get(R);s.deleteTexture(M.__webglTexture);let G=R.source,lt=f.get(G);delete lt[M.__cacheKey],o.memory.textures--}function et(R){let M=n.get(R);M.__depthDisposeCallback&&M.__depthDisposeCallback();let G=R.depthTexture;if(G&&G.renderTarget===R&&V(G),R.isWebGLCubeRenderTarget)for(let rt=0;rt<6;rt++){if(Array.isArray(M.__webglFramebuffer[rt]))for(let pt=0;pt<M.__webglFramebuffer[rt].length;pt++)s.deleteFramebuffer(M.__webglFramebuffer[rt][pt]);else s.deleteFramebuffer(M.__webglFramebuffer[rt]);M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer[rt])}else{if(Array.isArray(M.__webglFramebuffer))for(let rt=0;rt<M.__webglFramebuffer.length;rt++)s.deleteFramebuffer(M.__webglFramebuffer[rt]);else s.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&s.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&s.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let rt=0;rt<M.__webglColorRenderbuffer.length;rt++)M.__webglColorRenderbuffer[rt]&&s.deleteRenderbuffer(M.__webglColorRenderbuffer[rt]);M.__webglDepthRenderbuffer&&s.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let lt=R.textures;for(let rt=0,pt=lt.length;rt<pt;rt++){let Mt=n.get(lt[rt]);Mt.__webglTexture&&(s.deleteTexture(Mt.__webglTexture),o.memory.textures--),n.remove(lt[rt])}n.remove(R)}let W=0;function A(){W=0}function Y(){return W}function St(R){W=R}function Dt(){let R=W;return R>=i.maxTextures&&Xt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+i.maxTextures),W+=1,R}function J(R){let M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.mipmapsAutoUpdate),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function at(R,M){let G=n.get(R);if(R.isVideoTexture&&re(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&G.__version!==R.version){let lt=R.image;if(lt===null)Xt("WebGLRenderer: Texture marked for update but no image data found.");else if(lt.complete===!1)Xt("WebGLRenderer: Texture marked for update but image is incomplete");else{pe(G,R,M);return}}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+M)}function ut(R,M){let G=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){pe(G,R,M);return}else R.isExternalTexture&&(G.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+M)}function Et(R,M){let G=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){pe(G,R,M);return}e.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+M)}function yt(R,M){let G=n.get(R);if(R.version>0&&G.__version!==R.version){$(G,R,M);return}e.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+M)}let Bt={[th]:s.REPEAT,[es]:s.CLAMP_TO_EDGE,[eh]:s.MIRRORED_REPEAT},Me={[_n]:s.NEAREST,[x_]:s.NEAREST_MIPMAP_NEAREST,[hl]:s.NEAREST_MIPMAP_LINEAR,[xn]:s.LINEAR,[Ph]:s.LINEAR_MIPMAP_NEAREST,[Ps]:s.LINEAR_MIPMAP_LINEAR},Lt={[M_]:s.NEVER,[zd]:s.ALWAYS,[b_]:s.LESS,[Fd]:s.LEQUAL,[w_]:s.EQUAL,[Bd]:s.GEQUAL,[T_]:s.GREATER,[E_]:s.NOTEQUAL};function Yt(R,M){if(M.type===Gi&&t.has("OES_texture_float_linear")===!1&&(M.magFilter===xn||M.magFilter===Ph||M.magFilter===hl||M.magFilter===Ps||M.minFilter===xn||M.minFilter===Ph||M.minFilter===hl||M.minFilter===Ps)&&Xt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,Bt[M.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,Bt[M.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,Bt[M.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,Me[M.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,Me[M.minFilter]),M.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,Lt[M.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===_n||M.minFilter!==hl&&M.minFilter!==Ps||M.type===Gi&&t.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let G=t.get("EXT_texture_filter_anisotropic");s.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,i.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function Ut(R,M){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",N),P(M));let lt=M.source,rt=f.get(lt);rt===void 0&&(rt={},f.set(lt,rt));let pt=J(M);if(pt!==R.__cacheKey){rt[pt]===void 0&&(rt[pt]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,G=!0),rt[pt].usedTimes++;let Mt=rt[R.__cacheKey];Mt!==void 0&&(rt[R.__cacheKey].usedTimes--,Mt.usedTimes===0&&O(M)),R.__cacheKey=pt,R.__webglTexture=rt[pt].texture}return G}function kt(R,M,G){return Math.floor(Math.floor(R/G)/M)}function ce(R,M,G,lt){let pt=R.updateRanges;if(pt.length===0)e.texSubImage2D(s.TEXTURE_2D,0,0,0,M.width,M.height,G,lt,M.data);else{pt.sort((L,j)=>L.start-j.start);let Mt=0;for(let L=1;L<pt.length;L++){let j=pt[Mt],K=pt[L],mt=j.start+j.count,ct=kt(K.start,M.width,4),_t=kt(j.start,M.width,4);K.start<=mt+1&&ct===_t&&kt(K.start+K.count-1,M.width,4)===ct?j.count=Math.max(j.count,K.start+K.count-j.start):(++Mt,pt[Mt]=K)}pt.length=Mt+1;let X=e.getParameter(s.UNPACK_ROW_LENGTH),nt=e.getParameter(s.UNPACK_SKIP_PIXELS),dt=e.getParameter(s.UNPACK_SKIP_ROWS);e.pixelStorei(s.UNPACK_ROW_LENGTH,M.width);for(let L=0,j=pt.length;L<j;L++){let K=pt[L],mt=Math.floor(K.start/4),ct=Math.ceil(K.count/4),_t=mt%M.width,ht=Math.floor(mt/M.width),xt=ct,tt=1;e.pixelStorei(s.UNPACK_SKIP_PIXELS,_t),e.pixelStorei(s.UNPACK_SKIP_ROWS,ht),e.texSubImage2D(s.TEXTURE_2D,0,_t,ht,xt,tt,G,lt,M.data)}R.clearUpdateRanges(),e.pixelStorei(s.UNPACK_ROW_LENGTH,X),e.pixelStorei(s.UNPACK_SKIP_PIXELS,nt),e.pixelStorei(s.UNPACK_SKIP_ROWS,dt)}}function pe(R,M,G){let lt=s.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(lt=s.TEXTURE_2D_ARRAY),M.isData3DTexture&&(lt=s.TEXTURE_3D);let rt=Ut(R,M),pt=M.source;e.bindTexture(lt,R.__webglTexture,s.TEXTURE0+G);let Mt=n.get(pt);if(pt.version!==Mt.__version||rt===!0){if(e.activeTexture(s.TEXTURE0+G),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let tt=ge.getPrimaries(ge.workingColorSpace),st=M.colorSpace===Xi?null:ge.getPrimaries(M.colorSpace),vt=M.colorSpace===Xi||tt===st?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt)}e.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment);let nt=v(M.image,!1,i.maxTextureSize);nt=Nt(M,nt);let dt=r.convert(M.format,M.colorSpace),L=r.convert(M.type),j=E(M.internalFormat,dt,L,M.normalized,M.colorSpace,M.isVideoTexture);Yt(lt,M);let K,mt=M.mipmaps,ct=M.isVideoTexture!==!0,_t=Mt.__version===void 0||rt===!0,ht=pt.dataReady,xt=b(M,nt);if(M.isDepthTexture)j=x(M.format===Is,M.type),_t&&(ct?e.texStorage2D(s.TEXTURE_2D,1,j,nt.width,nt.height):e.texImage2D(s.TEXTURE_2D,0,j,nt.width,nt.height,0,dt,L,null));else if(M.isDataTexture)if(mt.length>0){ct&&_t&&e.texStorage2D(s.TEXTURE_2D,xt,j,mt[0].width,mt[0].height);for(let tt=0,st=mt.length;tt<st;tt++)K=mt[tt],ct?ht&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,K.width,K.height,dt,L,K.data):e.texImage2D(s.TEXTURE_2D,tt,j,K.width,K.height,0,dt,L,K.data);M.generateMipmaps=!1}else ct?(_t&&e.texStorage2D(s.TEXTURE_2D,xt,j,nt.width,nt.height),ht&&ce(M,nt,dt,L)):e.texImage2D(s.TEXTURE_2D,0,j,nt.width,nt.height,0,dt,L,nt.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ct&&_t&&e.texStorage3D(s.TEXTURE_2D_ARRAY,xt,j,mt[0].width,mt[0].height,nt.depth);for(let tt=0,st=mt.length;tt<st;tt++)if(K=mt[tt],M.format!==Wi)if(dt!==null)if(ct){if(ht)if(M.layerUpdates.size>0){let vt=qd(K.width,K.height,M.format,M.type);for(let Q of M.layerUpdates){let At=K.data.subarray(Q*vt/K.data.BYTES_PER_ELEMENT,(Q+1)*vt/K.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,Q,K.width,K.height,1,dt,At)}}else e.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,0,K.width,K.height,nt.depth,dt,K.data)}else e.compressedTexImage3D(s.TEXTURE_2D_ARRAY,tt,j,K.width,K.height,nt.depth,0,K.data,0,0);else Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ct?ht&&e.texSubImage3D(s.TEXTURE_2D_ARRAY,tt,0,0,0,K.width,K.height,nt.depth,dt,L,K.data):e.texImage3D(s.TEXTURE_2D_ARRAY,tt,j,K.width,K.height,nt.depth,0,dt,L,K.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{ct&&_t&&e.texStorage2D(s.TEXTURE_2D,xt,j,mt[0].width,mt[0].height);for(let tt=0,st=mt.length;tt<st;tt++)K=mt[tt],M.format!==Wi?dt!==null?ct?ht&&e.compressedTexSubImage2D(s.TEXTURE_2D,tt,0,0,K.width,K.height,dt,K.data):e.compressedTexImage2D(s.TEXTURE_2D,tt,j,K.width,K.height,0,K.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?ht&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,K.width,K.height,dt,L,K.data):e.texImage2D(s.TEXTURE_2D,tt,j,K.width,K.height,0,dt,L,K.data)}else if(M.isDataArrayTexture)if(ct){if(_t&&e.texStorage3D(s.TEXTURE_2D_ARRAY,xt,j,nt.width,nt.height,nt.depth),ht)if(M.layerUpdates.size>0){let tt=qd(nt.width,nt.height,M.format,M.type);for(let st of M.layerUpdates){let vt=nt.data.subarray(st*tt/nt.data.BYTES_PER_ELEMENT,(st+1)*tt/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,st,nt.width,nt.height,1,dt,L,vt)}M.clearLayerUpdates()}else e.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,dt,L,nt.data)}else e.texImage3D(s.TEXTURE_2D_ARRAY,0,j,nt.width,nt.height,nt.depth,0,dt,L,nt.data);else if(M.isData3DTexture)ct?(_t&&e.texStorage3D(s.TEXTURE_3D,xt,j,nt.width,nt.height,nt.depth),ht&&e.texSubImage3D(s.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,dt,L,nt.data)):e.texImage3D(s.TEXTURE_3D,0,j,nt.width,nt.height,nt.depth,0,dt,L,nt.data);else if(M.isFramebufferTexture){if(_t)if(ct)e.texStorage2D(s.TEXTURE_2D,xt,j,nt.width,nt.height);else{let tt=nt.width,st=nt.height;for(let vt=0;vt<xt;vt++)e.texImage2D(s.TEXTURE_2D,vt,j,tt,st,0,dt,L,null),tt>>=1,st>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in s){let tt=s.canvas;if(tt.hasAttribute("layoutsubtree")||tt.setAttribute("layoutsubtree","true"),nt.parentNode!==tt){tt.appendChild(nt),d.add(M),tt.onpaint=st=>{let vt=st.changedElements;for(let Q of d)vt.includes(Q.image)&&(Q.needsUpdate=!0)},tt.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,nt);else{let vt=s.RGBA,Q=s.RGBA,At=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,vt,Q,At,nt)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(mt.length>0){if(ct&&_t){let tt=Ht(mt[0]);e.texStorage2D(s.TEXTURE_2D,xt,j,tt.width,tt.height)}for(let tt=0,st=mt.length;tt<st;tt++)K=mt[tt],ct?ht&&e.texSubImage2D(s.TEXTURE_2D,tt,0,0,dt,L,K):e.texImage2D(s.TEXTURE_2D,tt,j,dt,L,K);M.generateMipmaps=!1}else if(ct){if(_t){let tt=Ht(nt);e.texStorage2D(s.TEXTURE_2D,xt,j,tt.width,tt.height)}ht&&e.texSubImage2D(s.TEXTURE_2D,0,0,0,dt,L,nt)}else e.texImage2D(s.TEXTURE_2D,0,j,dt,L,nt);S(M)&&M.mipmapsAutoUpdate===!0&&y(lt),Mt.__version=pt.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function $(R,M,G){if(M.image.length!==6)return;let lt=Ut(R,M),rt=M.source;e.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+G);let pt=n.get(rt);if(rt.version!==pt.__version||lt===!0){e.activeTexture(s.TEXTURE0+G);let Mt=ge.getPrimaries(ge.workingColorSpace),X=M.colorSpace===Xi?null:ge.getPrimaries(M.colorSpace),nt=M.colorSpace===Xi||Mt===X?s.NONE:s.BROWSER_DEFAULT_WEBGL;e.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,M.flipY),e.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),e.pixelStorei(s.UNPACK_ALIGNMENT,M.unpackAlignment),e.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,nt);let dt=M.isCompressedTexture||M.image[0].isCompressedTexture,L=M.image[0]&&M.image[0].isDataTexture,j=[];for(let Q=0;Q<6;Q++)!dt&&!L?j[Q]=v(M.image[Q],!0,i.maxCubemapSize):j[Q]=L?M.image[Q].image:M.image[Q],j[Q]=Nt(M,j[Q]);let K=j[0],mt=r.convert(M.format,M.colorSpace),ct=r.convert(M.type),_t=E(M.internalFormat,mt,ct,M.normalized,M.colorSpace),ht=M.isVideoTexture!==!0,xt=pt.__version===void 0||lt===!0,tt=rt.dataReady,st=b(M,K);Yt(s.TEXTURE_CUBE_MAP,M);let vt;if(M.isDepthTexture){if(_t=x(M.format===Is,M.type),xt)if(ht)e.texStorage2D(s.TEXTURE_CUBE_MAP,1,_t,K.width,K.height);else for(let Q=0;Q<6;Q++)e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,_t,K.width,K.height,0,mt,ct,null)}else if(dt){ht&&xt&&e.texStorage2D(s.TEXTURE_CUBE_MAP,st,_t,K.width,K.height);for(let Q=0;Q<6;Q++){vt=j[Q].mipmaps;for(let At=0;At<vt.length;At++){let ne=vt[At];M.format!==Wi?mt!==null?ht?tt&&e.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,At,0,0,ne.width,ne.height,mt,ne.data):e.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,At,_t,ne.width,ne.height,0,ne.data):Xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ht?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,At,0,0,ne.width,ne.height,mt,ct,ne.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,At,_t,ne.width,ne.height,0,mt,ct,ne.data)}}}else{if(vt=M.mipmaps,ht&&xt){vt.length>0&&st++;let Q=Ht(j[0]);e.texStorage2D(s.TEXTURE_CUBE_MAP,st,_t,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(L){ht?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,j[Q].width,j[Q].height,mt,ct,j[Q].data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,_t,j[Q].width,j[Q].height,0,mt,ct,j[Q].data);for(let At=0;At<vt.length;At++){let Jt=vt[At].image[Q].image;ht?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,At+1,0,0,Jt.width,Jt.height,mt,ct,Jt.data):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,At+1,_t,Jt.width,Jt.height,0,mt,ct,Jt.data)}}else{ht?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,mt,ct,j[Q]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,_t,mt,ct,j[Q]);for(let At=0;At<vt.length;At++){let ne=vt[At];ht?tt&&e.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,At+1,0,0,mt,ct,ne.image[Q]):e.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Q,At+1,_t,mt,ct,ne.image[Q])}}}S(M)&&M.mipmapsAutoUpdate===!0&&y(s.TEXTURE_CUBE_MAP),pt.__version=rt.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function ee(R,M,G,lt,rt,pt){let Mt=r.convert(G.format,G.colorSpace),X=r.convert(G.type),nt=E(G.internalFormat,Mt,X,G.normalized,G.colorSpace),dt=n.get(M),L=n.get(G);if(L.__renderTarget=M,!dt.__hasExternalTextures){let j=Math.max(1,M.width>>pt),K=Math.max(1,M.height>>pt);rt===s.TEXTURE_3D||rt===s.TEXTURE_2D_ARRAY?e.texImage3D(rt,pt,nt,j,K,M.depth,0,Mt,X,null):e.texImage2D(rt,pt,nt,j,K,0,Mt,X,null)}e.bindFramebuffer(s.FRAMEBUFFER,R),gt(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,lt,rt,L.__webglTexture,0,Wt(M)):(rt===s.TEXTURE_2D||rt>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&rt<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,lt,rt,L.__webglTexture,pt),e.bindFramebuffer(s.FRAMEBUFFER,null)}function We(R,M,G){if(s.bindRenderbuffer(s.RENDERBUFFER,R),M.depthBuffer){let lt=M.depthTexture,rt=lt&&lt.isDepthTexture?lt.type:null,pt=x(M.stencilBuffer,rt),Mt=M.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;gt(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Wt(M),pt,M.width,M.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt(M),pt,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,pt,M.width,M.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Mt,s.RENDERBUFFER,R)}else{let lt=M.textures;for(let rt=0;rt<lt.length;rt++){let pt=lt[rt],Mt=r.convert(pt.format,pt.colorSpace),X=r.convert(pt.type),nt=E(pt.internalFormat,Mt,X,pt.normalized,pt.colorSpace);gt(M)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Wt(M),nt,M.width,M.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,Wt(M),nt,M.width,M.height):s.renderbufferStorage(s.RENDERBUFFER,nt,M.width,M.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Te(R,M,G){let lt=M.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(s.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let rt=n.get(M.depthTexture);rt.__renderTarget=M;let pt=lt?M.depthTexture.image[0]:M.depthTexture.image;(!rt.__webglTexture||pt.width!==M.width||pt.height!==M.height)&&(pt.width=M.width,pt.height=M.height,M.depthTexture.needsUpdate=!0),lt?yt(M.depthTexture,0):at(M.depthTexture,0);let Mt=rt.__webglTexture,X=Wt(M),nt=lt?s.TEXTURE_CUBE_MAP_POSITIVE_X+G:s.TEXTURE_2D,dt=M.depthTexture.format===Is?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(M.depthTexture.format===As)gt(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,dt,nt,Mt,0,X):s.framebufferTexture2D(s.FRAMEBUFFER,dt,nt,Mt,0);else if(M.depthTexture.format===Is)gt(M)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,dt,nt,Mt,0,X):s.framebufferTexture2D(s.FRAMEBUFFER,dt,nt,Mt,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function he(R){let M=n.get(R),G=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){let lt=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),lt){let rt=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,lt.removeEventListener("dispose",rt)};lt.addEventListener("dispose",rt),M.__depthDisposeCallback=rt}M.__boundDepthTexture=lt}if(R.depthTexture&&!M.__autoAllocateDepthBuffer)if(G)for(let lt=0;lt<6;lt++)Te(M.__webglFramebuffer[lt],R,lt);else R.texture.mipmaps.length>0?Te(M.__webglFramebuffer[0],R,0):Te(M.__webglFramebuffer,R,0);else if(G){M.__webglDepthbuffer=[];for(let lt=0;lt<6;lt++)if(e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[lt]),M.__webglDepthbuffer[lt]===void 0)M.__webglDepthbuffer[lt]=s.createRenderbuffer(),We(M.__webglDepthbuffer[lt],R,!1);else{let rt=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pt=M.__webglDepthbuffer[lt];s.bindRenderbuffer(s.RENDERBUFFER,pt),s.framebufferRenderbuffer(s.FRAMEBUFFER,rt,s.RENDERBUFFER,pt)}}else if(R.texture.mipmaps.length>0?e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer[0]):e.bindFramebuffer(s.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=s.createRenderbuffer(),We(M.__webglDepthbuffer,R,!1);else{let rt=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,pt=M.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,pt),s.framebufferRenderbuffer(s.FRAMEBUFFER,rt,s.RENDERBUFFER,pt)}e.bindFramebuffer(s.FRAMEBUFFER,null)}function ke(R,M,G){let lt=n.get(R);M!==void 0&&ee(lt.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&he(R)}function Ve(R){let M=R.texture,G=n.get(R),lt=n.get(M);R.addEventListener("dispose",D),P(R);let rt=R.textures,pt=R.isWebGLCubeRenderTarget===!0,Mt=rt.length>1;if(Mt||(lt.__webglTexture===void 0&&(lt.__webglTexture=s.createTexture()),lt.__version=M.version,o.memory.textures++),pt){G.__webglFramebuffer=[];for(let X=0;X<6;X++)if(M.mipmaps.length>0){G.__webglFramebuffer[X]=[];for(let nt=0;nt<M.mipmaps.length;nt++)G.__webglFramebuffer[X][nt]=s.createFramebuffer()}else G.__webglFramebuffer[X]=s.createFramebuffer()}else{if(M.mipmaps.length>0){G.__webglFramebuffer=[];for(let X=0;X<M.mipmaps.length;X++)G.__webglFramebuffer[X]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(Mt)for(let X=0,nt=rt.length;X<nt;X++){let dt=n.get(rt[X]);dt.__webglTexture===void 0&&(dt.__webglTexture=s.createTexture(),o.memory.textures++)}if(R.samples>0&&gt(R)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let X=0;X<rt.length;X++){let nt=rt[X];G.__webglColorRenderbuffer[X]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[X]);let dt=r.convert(nt.format,nt.colorSpace),L=r.convert(nt.type),j=E(nt.internalFormat,dt,L,nt.normalized,nt.colorSpace,R.isXRRenderTarget===!0),K=Wt(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,K,j,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+X,s.RENDERBUFFER,G.__webglColorRenderbuffer[X])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),We(G.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(s.FRAMEBUFFER,null)}}if(pt){e.bindTexture(s.TEXTURE_CUBE_MAP,lt.__webglTexture),Yt(s.TEXTURE_CUBE_MAP,M);for(let X=0;X<6;X++)if(M.mipmaps.length>0)for(let nt=0;nt<M.mipmaps.length;nt++)ee(G.__webglFramebuffer[X][nt],R,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+X,nt);else ee(G.__webglFramebuffer[X],R,M,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);S(M)?y(s.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}else if(Mt){for(let X=0,nt=rt.length;X<nt;X++){let dt=rt[X],L=n.get(dt),j=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(j=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(j,L.__webglTexture),Yt(j,dt),ee(G.__webglFramebuffer,R,dt,s.COLOR_ATTACHMENT0+X,j,0),S(dt)&&y(j)}e.unbindTexture()}else{let X=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(X=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),e.bindTexture(X,lt.__webglTexture),Yt(X,M),M.mipmaps.length>0)for(let nt=0;nt<M.mipmaps.length;nt++)ee(G.__webglFramebuffer[nt],R,M,s.COLOR_ATTACHMENT0,X,nt);else ee(G.__webglFramebuffer,R,M,s.COLOR_ATTACHMENT0,X,0);S(M)?y(X):M.mipmaps.length>0&&s.texParameteri(X,s.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),e.unbindTexture()}R.depthBuffer&&he(R)}function F(R){let M=R.textures;for(let G=0,lt=M.length;G<lt;G++){let rt=M[G];if(S(rt)&&rt.mipmapsAutoUpdate===!0){let pt=T(R),Mt=n.get(rt).__webglTexture;e.bindTexture(pt,Mt),y(pt),e.unbindTexture()}}}let _e=[];function xe(R){if(R.samples>0){if(gt(R)===!1){let M=R.textures,G=R.width,lt=R.height,rt=s.COLOR_BUFFER_BIT,pt=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Mt=n.get(R),X=M.length>1;if(X)for(let dt=0;dt<M.length;dt++)e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,null),e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,null,0);e.bindFramebuffer(s.READ_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer[0]):e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Mt.__webglFramebuffer);for(let dt=0;dt<M.length;dt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(rt|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(rt|=s.STENCIL_BUFFER_BIT)),X){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Mt.__webglColorRenderbuffer[dt]);let L=n.get(M[dt]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,L,0)}s.blitFramebuffer(0,0,G,lt,0,0,G,lt,rt,s.NEAREST),l===!0&&(_e.length=0,_e.push(s.COLOR_ATTACHMENT0+dt),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&_e.push(pt),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,_e))}if(e.bindFramebuffer(s.READ_FRAMEBUFFER,null),e.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),X)for(let dt=0;dt<M.length;dt++){e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.RENDERBUFFER,Mt.__webglColorRenderbuffer[dt]);let L=n.get(M[dt]).__webglTexture;e.bindFramebuffer(s.FRAMEBUFFER,Mt.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+dt,s.TEXTURE_2D,L,0)}e.bindFramebuffer(s.DRAW_FRAMEBUFFER,Mt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let M=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[M])}}}function Wt(R){return Math.min(i.maxSamples,R.samples)}function gt(R){let M=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function re(R){let M=o.render.frame;h.get(R)!==M&&(h.set(R,M),R.update())}function Nt(R,M){let G=R.colorSpace,lt=R.format,rt=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==za&&G!==Xi&&(ge.getTransfer(G)===Ce?(lt!==Wi||rt!==vi)&&Xt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Zt("WebGLTextures: Unsupported texture color space:",G)),M}function Ht(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Dt,this.resetTextureUnits=A,this.getTextureUnits=Y,this.setTextureUnits=St,this.setTexture2D=at,this.setTexture2DArray=ut,this.setTexture3D=Et,this.setTextureCube=yt,this.rebindTextures=ke,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=F,this.updateMultisampleRenderTarget=xe,this.setupDepthRenderbuffer=he,this.setupFrameBufferTexture=ee,this.useMultisampledRTT=gt,this.dispose=z}function nT(s,t){function e(n,i=Xi){let r,o=ge.getTransfer(i);if(n===vi)return s.UNSIGNED_BYTE;if(n===Lh)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Dh)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Id)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Ld)return s.UNSIGNED_INT_10F_11F_11F_REV;if(n===Rd)return s.BYTE;if(n===Pd)return s.SHORT;if(n===Xo)return s.UNSIGNED_SHORT;if(n===Ih)return s.INT;if(n===Vi)return s.UNSIGNED_INT;if(n===Gi)return s.FLOAT;if(n===Hi)return s.HALF_FLOAT;if(n===Dd)return s.ALPHA;if(n===Nd)return s.RGB;if(n===Wi)return s.RGBA;if(n===As)return s.DEPTH_COMPONENT;if(n===Is)return s.DEPTH_STENCIL;if(n===Ud)return s.RED;if(n===Nh)return s.RED_INTEGER;if(n===lr)return s.RG;if(n===Uh)return s.RG_INTEGER;if(n===Oh)return s.RGBA_INTEGER;if(n===ul||n===fl||n===dl||n===pl)if(o===Ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===ul)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===fl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===dl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===pl)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===ul)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===fl)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===dl)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===pl)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Fh||n===Bh||n===zh||n===kh)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Fh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Bh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===kh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Vh||n===Gh||n===Hh||n===Wh||n===Xh||n===ml||n===qh)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Vh||n===Gh)return o===Ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Hh)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Wh)return r.COMPRESSED_R11_EAC;if(n===Xh)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ml)return r.COMPRESSED_RG11_EAC;if(n===qh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Yh||n===Zh||n===Jh||n===$h||n===Kh||n===Qh||n===jh||n===tu||n===eu||n===nu||n===iu||n===su||n===ru||n===ou)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Yh)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Zh)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Jh)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===$h)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Kh)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Qh)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===jh)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===tu)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===eu)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===nu)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===iu)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===su)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ru)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ou)return o===Ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===au||n===lu||n===cu)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===au)return o===Ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===lu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===cu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===hu||n===uu||n===gl||n===fu)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===hu)return r.COMPRESSED_RED_RGTC1_EXT;if(n===uu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===gl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===fu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===zr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:e}}var iT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,op=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new tl(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Ri({vertexShader:iT,fragmentShader:sT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new vn(new Rs(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ap=class extends ns{constructor(t,e){super();let n=this,i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,p=null,g=typeof XRWebGLBinding<"u",m=new op,_={},v=e.getContextAttributes(),S=null,y=null,T=[],E=[],x=new te,b=null,P=null,C=new Zn;C.viewport=new Ke;let N=new Zn;N.viewport=new Ke;let D=[C,N],V=new Eh,I=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let at=T[J];return at===void 0&&(at=new No,T[J]=at),at.getTargetRaySpace()},this.getControllerGrip=function(J){let at=T[J];return at===void 0&&(at=new No,T[J]=at),at.getGripSpace()},this.getHand=function(J){let at=T[J];return at===void 0&&(at=new No,T[J]=at),at.getHandSpace()};function H(J){let at=E.indexOf(J.inputSource);if(at===-1)return;let ut=T[at];ut!==void 0&&(ut.update(J.inputSource,J.frame,c||o),ut.dispatchEvent({type:J.type,data:J.inputSource}))}function O(){i.removeEventListener("select",H),i.removeEventListener("selectstart",H),i.removeEventListener("selectend",H),i.removeEventListener("squeeze",H),i.removeEventListener("squeezestart",H),i.removeEventListener("squeezeend",H),i.removeEventListener("end",O),i.removeEventListener("inputsourceschange",et);for(let J=0;J<T.length;J++){let at=E[J];at!==null&&(E[J]=null,T[J].disconnect(at))}I=null,z=null,m.reset();for(let J in _)delete _[J];if(t.setRenderTarget(S),f=null,u=null,d=null,i=null,y=null,Dt.stop(),n.isPresenting=!1,t.setPixelRatio(b),t.setSize(x.width,x.height,!1),P!==null){let J=P.camera;J.fov=P.fov,J.zoom=P.zoom,J.updateProjectionMatrix(),P=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,n.isPresenting===!0&&Xt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&Xt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&g&&(d=new XRWebGLBinding(i,e)),d},this.getFrame=function(){return p},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(S=t.getRenderTarget(),i.addEventListener("select",H),i.addEventListener("selectstart",H),i.addEventListener("selectend",H),i.addEventListener("squeeze",H),i.addEventListener("squeezestart",H),i.addEventListener("squeezeend",H),i.addEventListener("end",O),i.addEventListener("inputsourceschange",et),v.xrCompatible!==!0&&await e.makeXRCompatible(),b=t.getPixelRatio(),t.getSize(x),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let ut=null,Et=null,yt=null;v.depth&&(yt=v.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=v.stencil?Is:As,Et=v.stencil?zr:Vi);let Bt={colorFormat:e.RGBA8,depthFormat:yt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(Bt),i.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new _i(u.textureWidth,u.textureHeight,{format:Wi,type:vi,depthTexture:new Cs(u.textureWidth,u.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:v.stencil,colorSpace:t.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let ut={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,ut),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new _i(f.framebufferWidth,f.framebufferHeight,{format:Wi,type:vi,colorSpace:t.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Dt.setContext(i),Dt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function et(J){for(let at=0;at<J.removed.length;at++){let ut=J.removed[at],Et=E.indexOf(ut);Et>=0&&(E[Et]=null,T[Et].disconnect(ut))}for(let at=0;at<J.added.length;at++){let ut=J.added[at],Et=E.indexOf(ut);if(Et===-1){for(let Bt=0;Bt<T.length;Bt++)if(Bt>=E.length){E.push(ut),Et=Bt;break}else if(E[Bt]===null){E[Bt]=ut,Et=Bt;break}if(Et===-1)break}let yt=T[Et];yt&&yt.connect(ut)}}function W(J,at){at===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(at.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let at=J.near,ut=J.far;m.texture!==null&&(m.depthNear>0&&(at=m.depthNear),m.depthFar>0&&(ut=m.depthFar)),V.near=N.near=C.near=at,V.far=N.far=C.far=ut,(I!==V.near||z!==V.far)&&(i.updateRenderState({depthNear:V.near,depthFar:V.far}),I=V.near,z=V.far),V.layers.mask=J.layers.mask|6,C.layers.mask=V.layers.mask&-5,N.layers.mask=V.layers.mask&-3;let Et=J.parent,yt=V.cameras;W(V,Et);for(let Bt=0;Bt<yt.length;Bt++)W(yt[Bt],Et);V.projectionMatrix.copy(C.projectionMatrix),V.projectionMatrixInverse.copy(C.projectionMatrixInverse),P===null&&J.isPerspectiveCamera&&(P={camera:J,fov:J.fov,zoom:J.zoom}),A(J,V,Et)};function A(J,at,ut){ut===null?J.matrix.copy(at.matrixWorld):(J.matrix.copy(ut.matrixWorld),J.matrix.invert(),J.matrix.multiply(at.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(at.projectionMatrix),J.projectionMatrixInverse.copy(at.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=ih*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(J){l=J,u!==null&&(u.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(J){return _[J]};let Y=null;function St(J,at){if(h=at.getViewerPose(c||o),p=at,h!==null){let ut=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let Et=!1;ut.length!==V.cameras.length&&(V.cameras.length=0,Et=!0);for(let Lt=0;Lt<ut.length;Lt++){let Yt=ut[Lt],Ut=null;if(f!==null)Ut=f.getViewport(Yt);else{let ce=d.getViewSubImage(u,Yt);Ut=ce.viewport,Lt===0&&(t.setRenderTargetTextures(y,ce.colorTexture,ce.depthStencilTexture),t.setRenderTarget(y))}let kt=D[Lt];kt===void 0&&(kt=new Zn,kt.layers.enable(Lt),kt.viewport=new Ke,D[Lt]=kt),kt.matrix.fromArray(Yt.transform.matrix),kt.matrix.decompose(kt.position,kt.quaternion,kt.scale),kt.projectionMatrix.fromArray(Yt.projectionMatrix),kt.projectionMatrixInverse.copy(kt.projectionMatrix).invert(),kt.viewport.set(Ut.x,Ut.y,Ut.width,Ut.height),Lt===0&&(V.matrix.copy(kt.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Et===!0&&V.cameras.push(kt)}let yt=i.enabledFeatures;if(yt&&yt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){d=n.getBinding();let Lt=d.getDepthInformation(ut[0]);Lt&&Lt.isValid&&Lt.texture&&m.init(Lt,i.renderState)}if(yt&&yt.includes("camera-access")&&g){t.state.unbindTexture(),d=n.getBinding();for(let Lt=0;Lt<ut.length;Lt++){let Yt=ut[Lt].camera;if(Yt){let Ut=_[Yt];Ut||(Ut=new tl,_[Yt]=Ut);let kt=d.getCameraImage(Yt);Ut.sourceTexture=kt}}}}for(let ut=0;ut<T.length;ut++){let Et=E[ut],yt=T[ut];Et!==null&&yt!==void 0&&yt.update(Et,at,c||o)}Y&&Y(J,at),at.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:at}),p=null}let Dt=new o0;Dt.setAnimationLoop(St),this.setAnimationLoop=function(J){Y=J},this.dispose=function(){}}},rT=new ze,g0=new $t;g0.set(-1,0,0,0,1,0,0,0,1);function oT(s,t){function e(m,_){m.matrixAutoUpdate===!0&&m.updateMatrix(),_.value.copy(m.matrix)}function n(m,_){_.color.getRGB(m.fogColor.value,Hd(s)),_.isFog?(m.fogNear.value=_.near,m.fogFar.value=_.far):_.isFogExp2&&(m.fogDensity.value=_.density)}function i(m,_,v,S,y){_.isNodeMaterial?_.uniformsNeedUpdate=!1:_.isMeshBasicMaterial?r(m,_):_.isMeshLambertMaterial?(r(m,_),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)):_.isMeshToonMaterial?(r(m,_),d(m,_)):_.isMeshPhongMaterial?(r(m,_),h(m,_),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)):_.isMeshStandardMaterial?(r(m,_),u(m,_),_.isMeshPhysicalMaterial&&f(m,_,y)):_.isMeshMatcapMaterial?(r(m,_),p(m,_)):_.isMeshDepthMaterial?r(m,_):_.isMeshDistanceMaterial?(r(m,_),g(m,_)):_.isMeshNormalMaterial?r(m,_):_.isLineBasicMaterial?(o(m,_),_.isLineDashedMaterial&&a(m,_)):_.isPointsMaterial?l(m,_,v,S):_.isSpriteMaterial?c(m,_):_.isShadowMaterial?(m.color.value.copy(_.color),m.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function r(m,_){m.opacity.value=_.opacity,_.color&&m.diffuse.value.copy(_.color),_.emissive&&m.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(m.map.value=_.map,e(_.map,m.mapTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,e(_.alphaMap,m.alphaMapTransform)),_.bumpMap&&(m.bumpMap.value=_.bumpMap,e(_.bumpMap,m.bumpMapTransform),m.bumpScale.value=_.bumpScale,_.side===Kn&&(m.bumpScale.value*=-1)),_.normalMap&&(m.normalMap.value=_.normalMap,e(_.normalMap,m.normalMapTransform),m.normalScale.value.copy(_.normalScale),_.side===Kn&&m.normalScale.value.negate()),_.displacementMap&&(m.displacementMap.value=_.displacementMap,e(_.displacementMap,m.displacementMapTransform),m.displacementScale.value=_.displacementScale,m.displacementBias.value=_.displacementBias),_.emissiveMap&&(m.emissiveMap.value=_.emissiveMap,e(_.emissiveMap,m.emissiveMapTransform)),_.specularMap&&(m.specularMap.value=_.specularMap,e(_.specularMap,m.specularMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest);let v=t.get(_),S=v.envMap,y=v.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(rT.makeRotationFromEuler(y)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(g0),m.reflectivity.value=_.reflectivity,m.ior.value=_.ior,m.refractionRatio.value=_.refractionRatio),_.lightMap&&(m.lightMap.value=_.lightMap,m.lightMapIntensity.value=_.lightMapIntensity,e(_.lightMap,m.lightMapTransform)),_.aoMap&&(m.aoMap.value=_.aoMap,m.aoMapIntensity.value=_.aoMapIntensity,e(_.aoMap,m.aoMapTransform))}function o(m,_){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,_.map&&(m.map.value=_.map,e(_.map,m.mapTransform))}function a(m,_){m.dashSize.value=_.dashSize,m.totalSize.value=_.dashSize+_.gapSize,m.scale.value=_.scale}function l(m,_,v,S){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,m.size.value=_.size*v,m.scale.value=S*.5,_.map&&(m.map.value=_.map,e(_.map,m.uvTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,e(_.alphaMap,m.alphaMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest)}function c(m,_){m.diffuse.value.copy(_.color),m.opacity.value=_.opacity,m.rotation.value=_.rotation,_.map&&(m.map.value=_.map,e(_.map,m.mapTransform)),_.alphaMap&&(m.alphaMap.value=_.alphaMap,e(_.alphaMap,m.alphaMapTransform)),_.alphaTest>0&&(m.alphaTest.value=_.alphaTest)}function h(m,_){m.specular.value.copy(_.specular),m.shininess.value=Math.max(_.shininess,1e-4)}function d(m,_){_.gradientMap&&(m.gradientMap.value=_.gradientMap)}function u(m,_){m.metalness.value=_.metalness,_.metalnessMap&&(m.metalnessMap.value=_.metalnessMap,e(_.metalnessMap,m.metalnessMapTransform)),m.roughness.value=_.roughness,_.roughnessMap&&(m.roughnessMap.value=_.roughnessMap,e(_.roughnessMap,m.roughnessMapTransform)),_.envMap&&(m.envMapIntensity.value=_.envMapIntensity)}function f(m,_,v){m.ior.value=_.ior,_.diffuseRoughness>0&&(m.diffuseRoughness.value=_.diffuseRoughness,_.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=_.diffuseRoughnessMap,e(_.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),_.sheen>0&&(m.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),m.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(m.sheenColorMap.value=_.sheenColorMap,e(_.sheenColorMap,m.sheenColorMapTransform)),_.sheenRoughnessMap&&(m.sheenRoughnessMap.value=_.sheenRoughnessMap,e(_.sheenRoughnessMap,m.sheenRoughnessMapTransform))),_.clearcoat>0&&(m.clearcoat.value=_.clearcoat,m.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(m.clearcoatMap.value=_.clearcoatMap,e(_.clearcoatMap,m.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,e(_.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(m.clearcoatNormalMap.value=_.clearcoatNormalMap,e(_.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===Kn&&m.clearcoatNormalScale.value.negate())),_.dispersion>0&&(m.dispersion.value=_.dispersion),_.retroreflectivity>0&&(m.retroreflectivity.value=_.retroreflectivity),_.iridescence>0&&(m.iridescence.value=_.iridescence,m.iridescenceIOR.value=_.iridescenceIOR,m.iridescenceThicknessMinimum.value=_.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=_.iridescenceThicknessMaximum,_.iridescenceMap&&(m.iridescenceMap.value=_.iridescenceMap,e(_.iridescenceMap,m.iridescenceMapTransform)),_.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=_.iridescenceThicknessMap,e(_.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),_.transmission>0&&(m.transmission.value=_.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),_.transmissionMap&&(m.transmissionMap.value=_.transmissionMap,e(_.transmissionMap,m.transmissionMapTransform)),m.thickness.value=_.thickness,_.thicknessMap&&(m.thicknessMap.value=_.thicknessMap,e(_.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=_.attenuationDistance,m.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(m.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(m.anisotropyMap.value=_.anisotropyMap,e(_.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=_.specularIntensity,m.specularColor.value.copy(_.specularColor),_.specularColorMap&&(m.specularColorMap.value=_.specularColorMap,e(_.specularColorMap,m.specularColorMapTransform)),_.specularIntensityMap&&(m.specularIntensityMap.value=_.specularIntensityMap,e(_.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,_){_.matcap&&(m.matcap.value=_.matcap)}function g(m,_){let v=t.get(_).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function aT(s,t,e,n){let i={},r={};function o(v,S){let y=S.program;n.uniformBlockBinding(v,y,i[v.id])}function a(v,S){let y=i[v.id];y===void 0&&(p(v),y=l(v),i[v.id]=y,v.addEventListener("dispose",m));let T=S.program;n.updateUBOMapping(v,T);let E=t.render.frame;r[v.id]!==E&&(c(v),r[v.id]=E)}function l(v){let S=s.createBuffer(),y=v.__size,T=v.usage;return s.bindBuffer(s.UNIFORM_BUFFER,S),s.bufferData(s.UNIFORM_BUFFER,y,T),s.bindBuffer(s.UNIFORM_BUFFER,null),S}function c(v){let S=i[v.id],y=v.uniforms,T=v.__cache;s.bindBuffer(s.UNIFORM_BUFFER,S);for(let E=0,x=y.length;E<x;E++){let b=y[E];if(Array.isArray(b))for(let P=0,C=b.length;P<C;P++)h(b[P],E,P,T);else h(b,E,0,T)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function h(v,S,y,T){if(u(v,S,y,T)===!0){let E=v.__offset,x=v.value;if(Array.isArray(x)){let b=0;for(let P=0;P<x.length;P++){let C=x[P],N=g(C,!0);d(C,v.__data,b),b+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,v.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,E,v.__data)}}function d(v,S,y){typeof v=="number"||typeof v=="boolean"?S[y]=v:v.isMatrix3?(S[y]=v.elements[0],S[y+1]=v.elements[1],S[y+2]=v.elements[2],S[y+3]=0,S[y+4]=v.elements[3],S[y+5]=v.elements[4],S[y+6]=v.elements[5],S[y+7]=0,S[y+8]=v.elements[6],S[y+9]=v.elements[7],S[y+10]=v.elements[8],S[y+11]=0):ArrayBuffer.isView(v)?S.set(v.subarray(0,S.length-y),y):v.toArray(S,y)}function u(v,S,y,T){let E=v.value,x=S+"_"+y;if(Array.isArray(E)){T[x]===void 0&&(T[x]=[]);let b=T[x],P=!1;for(let C=0;C<E.length;C++)f(E[C],b,C)===!0&&(P=!0);return P}return f(E,T,x)}function f(v,S,y){if(S[y]===void 0)return typeof v=="number"||typeof v=="boolean"?S[y]=v:ArrayBuffer.isView(v)?S[y]=v.slice():S[y]=v.clone(),!0;{let T=S[y];if(typeof v=="number"||typeof v=="boolean"){if(T!==v)return S[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(T.equals(v)===!1)return T.copy(v),!0}}return!1}function p(v){let S=v.uniforms,y=0,T=16;for(let x=0,b=S.length;x<b;x++){let P=Array.isArray(S[x])?S[x]:[S[x]];for(let C=0,N=P.length;C<N;C++){let D=P[C],V=Array.isArray(D.value)?D.value:[D.value],I=Array.isArray(S[x])||Array.isArray(D.value),z=y;for(let O=0,et=V.length;O<et;O++){let W=V[O],A=g(W,I),Y=y%T,St=Y%A.boundary,Dt=Y+St;y+=St,Dt!==0&&T-Dt<A.storage&&(y+=T-Dt),O===0&&(z=y),y+=A.storage}let H=D.type==="int"?Int32Array:D.type==="uint"?Uint32Array:Float32Array;D.__data=new H((y-z)/Float32Array.BYTES_PER_ELEMENT),D.__offset=z}}let E=y%T;return E>0&&(y+=T-E),v.__size=y,v.__cache={},this}function g(v,S){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?Xt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):Xt("WebGLRenderer: Unsupported uniform value type.",v),S===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function m(v){let S=v.target;S.removeEventListener("dispose",m),s.deleteBuffer(i[S.id]),delete i[S.id],delete r[S.id]}function _(){for(let v in i)s.deleteBuffer(i[v]);i={},r={}}return{bind:o,update:a,dispose:_}}var lT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),as=null;function cT(){return as===null&&(as=new lh(lT,16,16,lr,Hi),as.name="DFG_LUT",as.minFilter=xn,as.magFilter=xn,as.wrapS=es,as.wrapT=es,as.generateMipmaps=!1,as.needsUpdate=!0),as}var Yo=class{constructor(t={}){let{canvas:e=A_(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=vi}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;let g=f,m=new Set([Oh,Uh,Nh]),_=new Set([vi,Vi,Xo,zr,Lh,Dh]),v=new Uint32Array(4),S=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},T=null,E=null,x=[],b=[],P=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=os,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,N=!1,D=null,V=null,I=null,z=null;this._outputColorSpace=gi;let H=0,O=0,et=null,W=-1,A=null,Y=new Ke,St=new Ke,Dt=null,J=new Kt(0),at=0,ut=e.width,Et=e.height,yt=1,Bt=null,Me=null,Lt=new Ke(0,0,ut,Et),Yt=new Ke(0,0,ut,Et),Ut=!1,kt=new Ur,ce=new ch,pe=!1,$=!1,ee=new ze,We=new B,Te=new Ke,he={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},ke=!1;function Ve(){return et===null?yt:1}let F=n;function _e(w,U){return e.getContext(w,U)}let xe,Wt,gt,re,Nt,Ht,R,M,G,lt,rt,pt,Mt,X,nt,dt,L,j,K,mt,ct,_t,ht;try{let w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"187"}`),e.addEventListener("webglcontextlost",st,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",Q,!1),F===null){let U="webgl2";if(F=_e(U,w),F===null)throw _e(U)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}xt()}catch(w){throw e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",Q,!1),Zt("WebGLRenderer: "+w.message),w}function xt(){xe=new yb(F),xe.init(),ct=new nT(F,xe),Wt=new cb(F,xe,t,ct),gt=new tT(F,xe),Wt.reversedDepthBuffer&&u&&gt.buffers.depth.setReversed(!0),V=F.createFramebuffer(),I=F.createFramebuffer(),z=F.createFramebuffer(),re=new bb(F),Nt=new kw,Ht=new eT(F,xe,gt,Nt,Wt,ct,re),R=new vb(C),M=new Ty(F),_t=new ab(F,M),G=new Sb(F,M,re,_t),lt=new Tb(F,G,M,_t,re),j=new wb(F,Wt,Ht),nt=new hb(Nt),rt=new zw(C,R,xe,Wt,_t,nt),pt=new oT(C,Nt),Mt=new Gw,X=new Zw(xe),L=new ob(C,R,gt,lt,p,l),dt=new jw(C,lt,Wt),ht=new aT(F,re,Wt,gt),K=new lb(F,xe,re),mt=new Mb(F,xe,re),re.programs=rt.programs,C.capabilities=Wt,C.extensions=xe,C.properties=Nt,C.renderLists=Mt,C.shadowMap=dt,C.state=gt,C.info=re}g!==vi&&(P=new Ab(g,e.width,e.height,a,i,r));let tt=new ap(C,F);this.xr=tt,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let w=xe.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=xe.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return yt},this.setPixelRatio=function(w){w!==void 0&&(yt=w,this.setSize(ut,Et,!1))},this.getSize=function(w){return w.set(ut,Et)},this.setSize=function(w,U,Z=!0){if(tt.isPresenting){Xt("WebGLRenderer: Can't change size while VR device is presenting.");return}ut=w,Et=U,e.width=Math.floor(w*yt),e.height=Math.floor(U*yt),Z===!0&&(e.style.width=w+"px",e.style.height=U+"px"),P!==null&&P.setSize(e.width,e.height),this.setViewport(0,0,w,U)},this.getDrawingBufferSize=function(w){return w.set(ut*yt,Et*yt).floor()},this.setDrawingBufferSize=function(w,U,Z){ut=w,Et=U,yt=Z,e.width=Math.floor(w*Z),e.height=Math.floor(U*Z),this.setViewport(0,0,w,U)},this.setEffects=function(w){if(g===vi){Zt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let U=0;U<w.length;U++)if(w[U].isOutputPass===!0){Xt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(Y)},this.getViewport=function(w){return w.copy(Lt)},this.setViewport=function(w,U,Z,k){w.isVector4?Lt.set(w.x,w.y,w.z,w.w):Lt.set(w,U,Z,k),gt.viewport(Y.copy(Lt).multiplyScalar(Ve()).round())},this.getScissor=function(w){return w.copy(Yt)},this.setScissor=function(w,U,Z,k){w.isVector4?Yt.set(w.x,w.y,w.z,w.w):Yt.set(w,U,Z,k),gt.scissor(St.copy(Yt).multiplyScalar(Ve()).round())},this.getScissorTest=function(){return Ut},this.setScissorTest=function(w){gt.setScissorTest(Ut=w)},this.setOpaqueSort=function(w){Bt=w},this.setTransparentSort=function(w){Me=w},this.getClearColor=function(w){return w.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(w=!0,U=!0,Z=!0){let k=0;if(w){let q=!1;if(et!==null){let Tt=et.texture.format;q=m.has(Tt)}if(q){let Tt=et.texture.type,It=_.has(Tt),wt=L.getClearColor(),ft=L.getClearAlpha(),Ct=wt.r,qt=wt.g,ue=wt.b;It?(v[0]=Ct,v[1]=qt,v[2]=ue,v[3]=ft,F.clearBufferuiv(F.COLOR,0,v)):(S[0]=Ct,S[1]=qt,S[2]=ue,S[3]=ft,F.clearBufferiv(F.COLOR,0,S))}else k|=F.COLOR_BUFFER_BIT}U&&(k|=F.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),Z&&(k|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k!==0&&F.clear(k)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),D=w},this.dispose=function(){e.removeEventListener("webglcontextlost",st,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",Q,!1),L.dispose(),Mt.dispose(),X.dispose(),Ht.dispose(),Nt.dispose(),R.dispose(),lt.dispose(),G.dispose(),_t.dispose(),ht.dispose(),rt.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",be),tt.removeEventListener("sessionend",ye),qe.stop()};function st(w){w.preventDefault(),Ga("WebGLRenderer: Context Lost."),N=!0}function vt(){Ga("WebGLRenderer: Context Restored."),N=!1;let w=re.autoReset,U=dt.enabled,Z=dt.autoUpdate,k=dt.needsUpdate,q=dt.type;xt(),re.autoReset=w,dt.enabled=U,dt.autoUpdate=Z,dt.needsUpdate=k,dt.type=q}function Q(w){Zt("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function At(w){let U=w.target;U.removeEventListener("dispose",At),ne(U)}function ne(w){Jt(w),Nt.remove(w)}function Jt(w){let U=Nt.get(w).programs;U!==void 0&&(U.forEach(function(Z){rt.releaseProgram(Z)}),w.isShaderMaterial&&rt.releaseShaderCache(w))}this.renderBufferDirect=function(w,U,Z,k,q,Tt){U===null&&(U=he);let It=q.isMesh&&q.matrixWorld.determinantAffine()<0,wt=Ue(w,U,Z,k,q);gt.setMaterial(k,It);let ft=Z.index,Ct=1;if(k.wireframe===!0){if(ft=G.getWireframeAttribute(Z),ft===void 0)return;Ct=2}let qt=Z.drawRange,ue=Z.attributes.position,Ot=qt.start*Ct,fe=(qt.start+qt.count)*Ct;Tt!==null&&(Ot=Math.max(Ot,Tt.start*Ct),fe=Math.min(fe,(Tt.start+Tt.count)*Ct)),ft!==null?(Ot=Math.max(Ot,0),fe=Math.min(fe,ft.count)):ue!=null&&(Ot=Math.max(Ot,0),fe=Math.min(fe,ue.count));let Qe=fe-Ot;if(Qe<0||Qe===1/0)return;_t.setup(q,k,wt,Z,ft);let Ie,Oe=K;if(ft!==null&&(Ie=M.get(ft),Oe=mt,Oe.setIndex(Ie)),q.isMesh)k.wireframe===!0?(gt.setLineWidth(k.wireframeLinewidth*Ve()),Oe.setMode(F.LINES)):Oe.setMode(F.TRIANGLES);else if(q.isLine){let wn=k.linewidth;wn===void 0&&(wn=1),gt.setLineWidth(wn*Ve()),q.isLineSegments?Oe.setMode(F.LINES):q.isLineLoop?Oe.setMode(F.LINE_LOOP):Oe.setMode(F.LINE_STRIP)}else q.isPoints?Oe.setMode(F.POINTS):q.isSprite&&Oe.setMode(F.TRIANGLES);if(q.isBatchedMesh)if(xe.get("WEBGL_multi_draw"))Oe.renderMultiDraw(q._multiDrawStarts,q._multiDrawCounts,q._multiDrawCount);else{let wn=q._multiDrawStarts,zt=q._multiDrawCounts,Bn=q._multiDrawCount,we=ft?M.get(ft).bytesPerElement:1,cr=Nt.get(k).currentProgram.getUniforms();for(let Tn=0;Tn<Bn;Tn++)cr.setValue(F,"_gl_DrawID",Tn),Oe.render(wn[Tn]/we,zt[Tn])}else if(q.isInstancedMesh)Oe.renderInstances(Ot,Qe,q.count);else if(Z.isInstancedBufferGeometry){let wn=Z._maxInstanceCount!==void 0?Z._maxInstanceCount:1/0,zt=Math.min(Z.instanceCount,wn);Oe.renderInstances(Ot,Qe,zt)}else Oe.render(Ot,Qe)};function Pe(w,U,Z,k){D!==null&&w.isNodeMaterial&&D.setObject(k,w),pe===!0&&nt.setState(w,Z,!1),w.transparent===!0&&w.side===oi&&w.forceSinglePass===!1?(w.side=Kn,w.needsUpdate=!0,Qt(w,U,k),w.side=ar,w.needsUpdate=!0,Qt(w,U,k),w.side=oi):Qt(w,U,k)}this.compile=function(w,U,Z=null){Z===null&&(Z=w),D!==null&&D.renderStart(w,U,Z),E=X.get(Z),E.init(U),b.push(E),Z.traverseVisible(function(q){q.isLight&&q.layers.test(U.layers)&&(E.pushLight(q),q.castShadow&&E.pushShadow(q))}),w!==Z&&w.traverseVisible(function(q){q.isLight&&q.layers.test(U.layers)&&(E.pushLight(q),q.castShadow&&E.pushShadow(q))}),E.setupLights(),D!==null&&D.updateLights(E.state.lightsArray),$=this.localClippingEnabled,pe=nt.init(this.clippingPlanes,$),pe===!0&&nt.setGlobalState(this.clippingPlanes,U),D!==null&&dt.render(E.state.shadowsArray,Z,U);let k=new Set;return w.traverse(function(q){if(!(q.isMesh||q.isPoints||q.isLine||q.isSprite))return;let Tt=q.material;if(Tt)if(Array.isArray(Tt))for(let It=0;It<Tt.length;It++){let wt=Tt[It];Pe(wt,Z,U,q),k.add(wt)}else Pe(Tt,Z,U,q),k.add(Tt)}),E=b.pop(),D!==null&&D.renderEnd(),k},this.compileAsync=function(w,U,Z=null){let k=this.compile(w,U,Z);return new Promise(q=>{function Tt(){if(k.forEach(function(It){let ft=Nt.get(It).currentProgram;(ft===void 0||ft.isReady())&&k.delete(It)}),k.size===0){q(w);return}setTimeout(Tt,10)}xe.get("KHR_parallel_shader_compile")!==null?Tt():setTimeout(Tt,10)})};let Xe=null;function Ne(w){Xe&&Xe(w)}function be(){qe.stop()}function ye(){qe.start()}let qe=new o0;qe.setAnimationLoop(Ne),typeof self<"u"&&qe.setContext(self),this.setAnimationLoop=function(w){Xe=w,tt.setAnimationLoop(w),w===null?qe.stop():qe.start()},tt.addEventListener("sessionstart",be),tt.addEventListener("sessionend",ye),this.render=function(w,U){if(U!==void 0&&U.isCamera!==!0){Zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;D!==null&&D.renderStart(w,U);let Z=tt.enabled===!0&&tt.isPresenting===!0,k=P!==null&&(et===null||Z)&&P.begin(C,et);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(U),U=tt.getCamera()),w.isScene===!0&&w.onBeforeRender(C,w,U,et),E=X.get(w,b.length),E.init(U),E.state.textureUnits=Ht.getTextureUnits(),b.push(E),ee.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),U.isArrayCamera?ce.setFromArrayCamera(U):kt.setFromProjectionMatrix(ee,Ai,U.reversedDepth),$=this.localClippingEnabled,pe=nt.init(this.clippingPlanes,$),T=Mt.get(w,x.length),T.init(),x.push(T),this.info.render.frame++,tt.enabled===!0&&tt.isPresenting===!0){let It=C.xr.getDepthSensingMesh();It!==null&&Ee(It,U,-1/0,C.sortObjects)}Ee(w,U,0,C.sortObjects),T.finish(),D!==null&&D.updateLights(E.state.lightsArray),C.sortObjects===!0&&T.sort(Bt,Me),ke=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,ke&&L.addToRenderList(T,w),this.info.autoReset===!0&&this.info.reset(),pe===!0&&nt.beginShadows();let q=E.state.shadowsArray;if(dt.render(q,w,U),pe===!0&&nt.endShadows(),(k&&P.hasRenderPass())===!1){let It=T.opaque,wt=T.transmissive;if(E.setupLights(),U.isArrayCamera){let ft=U.cameras;if(wt.length>0)for(let Ct=0,qt=ft.length;Ct<qt;Ct++){let ue=ft[Ct];ot(It,wt,w,ue)}ke&&L.render(w);for(let Ct=0,qt=ft.length;Ct<qt;Ct++){let ue=ft[Ct];it(T,w,ue,ue.viewport)}}else wt.length>0&&ot(It,wt,w,U),ke&&L.render(w),it(T,w,U)}et!==null&&O===0&&(Ht.updateMultisampleRenderTarget(et),Ht.updateRenderTargetMipmap(et)),k&&P.end(C),w.isScene===!0&&w.onAfterRender(C,w,U),_t.resetDefaultState(),W=-1,A=null,b.pop(),b.length>0?(E=b[b.length-1],Ht.setTextureUnits(E.state.textureUnits),pe===!0&&nt.setGlobalState(C.clippingPlanes,E.state.camera)):E=null,x.pop(),x.length>0?T=x[x.length-1]:T=null,D!==null&&D.renderEnd()};function Ee(w,U,Z,k){if(w.visible===!1)return;if(w.layers.test(U.layers)){if(w.isGroup)Z=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(U);else if(w.isLight)E.pushLight(w),w.castShadow&&E.pushShadow(w);else if(w.isSprite){let It=U.isArrayCamera?ce:kt;if(!w.frustumCulled||w.intersectsFrustum(It)){k&&Te.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ee);let wt=lt.update(w),ft=w.material;ft.visible&&T.push(w,wt,ft,Z,Te.z,null,U)}}else if(w.isMesh||w.isLine||w.isPoints){let It=U.isArrayCamera?ce:kt;if(!w.frustumCulled||w.intersectsFrustum(It)){let wt=lt.update(w),ft=w.material;if(k&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Te.copy(w.boundingSphere.center)):(wt.boundingSphere===null&&wt.computeBoundingSphere(),Te.copy(wt.boundingSphere.center)),Te.applyMatrix4(w.matrixWorld).applyMatrix4(ee)),Array.isArray(ft)){let Ct=wt.groups;for(let qt=0,ue=Ct.length;qt<ue;qt++){let Ot=Ct[qt],fe=ft[Ot.materialIndex];fe&&fe.visible&&T.push(w,wt,fe,Z,Te.z,Ot,U)}}else ft.visible&&T.push(w,wt,ft,Z,Te.z,null,U)}}}let Tt=w.children;for(let It=0,wt=Tt.length;It<wt;It++)Ee(Tt[It],U,Z,k)}function it(w,U,Z,k){let{opaque:q,transmissive:Tt,transparent:It}=w;E.setupLightsView(Z),pe===!0&&nt.setGlobalState(C.clippingPlanes,Z),k&&gt.viewport(Y.copy(k)),q.length>0&&bt(q,U,Z),Tt.length>0&&bt(Tt,U,Z),It.length>0&&bt(It,U,Z),gt.buffers.depth.setTest(!0),gt.buffers.depth.setMask(!0),gt.buffers.color.setMask(!0),gt.setPolygonOffset(!1)}function ot(w,U,Z,k){if((Z.isScene===!0?Z.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[k.id]===void 0){let Ot=xe.has("EXT_color_buffer_half_float")||xe.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[k.id]=new _i(1,1,{generateMipmaps:!0,type:Ot?Hi:vi,minFilter:Ps,samples:Math.max(4,Wt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ge.workingColorSpace})}let Tt=E.state.transmissionRenderTarget[k.id],It=k.viewport||Y;Tt.setSize(It.z*C.transmissionResolutionScale,It.w*C.transmissionResolutionScale);let wt=C.getRenderTarget(),ft=C.getActiveCubeFace(),Ct=C.getActiveMipmapLevel();C.setRenderTarget(Tt),C.getClearColor(J),at=C.getClearAlpha(),at<1&&C.setClearColor(16777215,.5),C.clear(),ke&&L.render(Z);let qt=C.toneMapping;C.toneMapping=os;let ue=k.viewport;if(k.viewport!==void 0&&(k.viewport=void 0),E.setupLightsView(k),pe===!0&&nt.setGlobalState(C.clippingPlanes,k),bt(w,Z,k),Ht.updateMultisampleRenderTarget(Tt),Ht.updateRenderTargetMipmap(Tt),xe.has("WEBGL_multisampled_render_to_texture")===!1){let Ot=!1;for(let fe=0,Qe=U.length;fe<Qe;fe++){let Ie=U[fe],{object:Oe,geometry:wn,material:zt,group:Bn}=Ie;if(zt.side===oi&&Oe.layers.test(k.layers)){let we=zt.side;zt.side=Kn,zt.needsUpdate=!0,Pt(Oe,Z,k,wn,zt,Bn),zt.side=we,zt.needsUpdate=!0,Ot=!0}}Ot===!0&&(Ht.updateMultisampleRenderTarget(Tt),Ht.updateRenderTargetMipmap(Tt))}C.setRenderTarget(wt,ft,Ct),C.setClearColor(J,at),ue!==void 0&&(k.viewport=ue),C.toneMapping=qt}function bt(w,U,Z){let k=U.isScene===!0?U.overrideMaterial:null;for(let q=0,Tt=w.length;q<Tt;q++){let It=w[q],{object:wt,geometry:ft,group:Ct}=It,qt=It.material;qt.allowOverride===!0&&k!==null&&(qt=k),wt.layers.test(Z.layers)&&Pt(wt,U,Z,ft,qt,Ct)}}function Pt(w,U,Z,k,q,Tt){D!==null&&q.isNodeMaterial&&D.setObject(w,q),w.onBeforeRender(C,U,Z,k,q,Tt),w.modelViewMatrix.multiplyMatrices(Z.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),q.onBeforeRender(C,U,Z,k,w,Tt),q.transparent===!0&&q.side===oi&&q.forceSinglePass===!1?(q.side=Kn,q.needsUpdate=!0,C.renderBufferDirect(Z,U,k,q,w,Tt),q.side=ar,q.needsUpdate=!0,C.renderBufferDirect(Z,U,k,q,w,Tt),q.side=oi):C.renderBufferDirect(Z,U,k,q,w,Tt),w.onAfterRender(C,U,Z,k,q,Tt)}function Vt(w){let U=0;for(let Z of w)Z.texture!==null&&U++;return U}function Qt(w,U,Z){U.isScene!==!0&&(U=he);let k=Nt.get(w),q=E.state.lights,Tt=E.state.shadowsArray,It=q.state.version,wt=rt.getParameters(w,q.state,Tt,U,Z,E.state.lightProbeGridArray),ft=rt.getProgramCacheKey(wt),Ct=k.programs;k.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?U.environment:null,k.fog=U.fog;let qt=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;k.envMap=R.get(w.envMap||k.environment,qt),k.envMapRotation=k.environment!==null&&w.envMap===null?U.environmentRotation:w.envMapRotation,Ct===void 0&&(w.addEventListener("dispose",At),Ct=new Map,k.programs=Ct,k.programVariants=new Map);let ue=Ct.get(ft);if(ue!==void 0){if(k.currentProgram===ue&&k.lightsStateVersion===It)return oe(w,wt),ue}else wt.uniforms=rt.getUniforms(w),D!==null&&w.isNodeMaterial&&D.build(w,Z,wt),w.onBeforeCompile(wt,C),ue=rt.acquireProgram(wt,ft),Ct.set(ft,ue),k.uniforms=wt.uniforms;let Ot=k.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ot.clippingPlanes=nt.uniform),oe(w,wt),k.needsLights=Fn(w),k.lightsStateVersion=It,k.needsLights&&(Ot.ambientLightColor.value=q.state.ambient,Ot.lightProbe.value=q.state.probe,Ot.sunLights.value=q.state.sun,Ot.sunLightShadows.value=q.state.sunShadow,Ot.directionalLights.value=q.state.directional,Ot.directionalLightShadows.value=q.state.directionalShadow,Ot.spotLights.value=q.state.spot,Ot.spotLightShadows.value=q.state.spotShadow,Ot.rectAreaLights.value=q.state.rectArea,Ot.ltc_1.value=q.state.rectAreaLTC1,Ot.ltc_2.value=q.state.rectAreaLTC2,Ot.pointLights.value=q.state.point,Ot.pointLightShadows.value=q.state.pointShadow,Ot.hemisphereLights.value=q.state.hemi,Ot.sunShadowMatrix.value=q.state.sunShadowMatrix,Ot.sunShadowCascade.value=q.state.sunShadowCascade,Ot.directionalShadowMatrix.value=q.state.directionalShadowMatrix,Ot.spotLightMatrix.value=q.state.spotLightMatrix,Ot.spotLightMap.value=q.state.spotLightMap,Ot.pointShadowMatrix.value=q.state.pointShadowMatrix),k.numLightProbeGrids=Vt(E.state.lightProbeGridArray),k.currentProgram=ue,k.uniformsList=null,ue}function Be(w,U,Z,k,q){let Tt=Nt.get(w),It=Tt.currentProgram.id+","+k+","+q,wt=Tt.programVariants.get(It);return wt===void 0?(wt=Qt(w,U,Z),Tt.programVariants.set(It,wt)):(Tt.currentProgram=wt,Tt.uniformsList=null,Tt.outputColorSpace=k,Tt.toneMapping=q),wt}function me(w){if(w.uniformsList===null){let U=w.currentProgram.getUniforms();w.uniformsList=qo.seqWithValue(U.seq,w.uniforms)}return w.uniformsList}function oe(w,U){let Z=Nt.get(w);Z.outputColorSpace=U.outputColorSpace,Z.batching=U.batching,Z.batchingColor=U.batchingColor,Z.instancing=U.instancing,Z.instancingColor=U.instancingColor,Z.instancingMorph=U.instancingMorph,Z.skinning=U.skinning,Z.morphTargets=U.morphTargets,Z.morphNormals=U.morphNormals,Z.morphColors=U.morphColors,Z.morphTargetsCount=U.morphTargetsCount,Z.numClippingPlanes=U.numClippingPlanes,Z.numIntersection=U.numClipIntersection,Z.vertexAlphas=U.vertexAlphas,Z.vertexTangents=U.vertexTangents,Z.toneMapping=U.toneMapping}function Ue(w,U,Z,k,q){U.isScene!==!0&&(U=he),Ht.resetTextureUnits();let Tt=U.fog,It=k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial?U.environment:null,wt=et===null?C.outputColorSpace:et.isXRRenderTarget===!0?et.texture.colorSpace:ge.workingColorSpace,ft=k.isMeshStandardMaterial||k.isMeshLambertMaterial&&!k.envMap||k.isMeshPhongMaterial&&!k.envMap,Ct=R.get(k.envMap||It,ft),qt=k.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,ue=!!Z.attributes.tangent&&(!!k.normalMap||k.anisotropy>0),Ot=!!Z.morphAttributes.position,fe=!!Z.morphAttributes.normal,Qe=!!Z.morphAttributes.color,Ie=os;k.toneMapped&&(et===null||et.isXRRenderTarget===!0)&&(Ie=C.toneMapping);let Oe=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,wn=Oe!==void 0?Oe.length:0,zt=Nt.get(k),Bn=E.state.lights;if(pe===!0&&($===!0||w!==A)){let Ye=w===A&&k.id===W;nt.setState(k,w,Ye)}let we=!1,cr=!1;k.version===zt.__version?zt.needsLights&&zt.lightsStateVersion!==Bn.state.version||q.isBatchedMesh&&zt.batching===!1||!q.isBatchedMesh&&zt.batching===!0||q.isBatchedMesh&&zt.batchingColor===!0&&q._colorsTexture===null||q.isBatchedMesh&&zt.batchingColor===!1&&q._colorsTexture!==null||q.isInstancedMesh&&zt.instancing===!1||!q.isInstancedMesh&&zt.instancing===!0||q.isSkinnedMesh&&zt.skinning===!1||!q.isSkinnedMesh&&zt.skinning===!0||q.isInstancedMesh&&zt.instancingColor===!0&&q.instanceColor===null||q.isInstancedMesh&&zt.instancingColor===!1&&q.instanceColor!==null||q.isInstancedMesh&&zt.instancingMorph===!0&&q.morphTexture===null||q.isInstancedMesh&&zt.instancingMorph===!1&&q.morphTexture!==null||zt.envMap!==Ct||k.fog===!0&&zt.fog!==Tt||zt.numClippingPlanes!==void 0&&(zt.numClippingPlanes!==nt.numPlanes||zt.numIntersection!==nt.numIntersection)||zt.vertexAlphas!==qt||zt.vertexTangents!==ue||zt.morphTargets!==Ot||zt.morphNormals!==fe||zt.morphColors!==Qe||zt.morphTargetsCount!==wn||zt.numLightProbeGrids!==Vt(E.state.lightProbeGridArray)?we=!0:(zt.outputColorSpace!==wt||zt.toneMapping!==Ie)&&(cr=!0):(we=!0,zt.__version=k.version);let Tn=zt.currentProgram;(we===!0||cr===!0)&&(Tn=cr===!0?Be(k,U,q,wt,Ie):Qt(k,U,q),D&&k.isNodeMaterial&&D.onUpdateProgram(k,Tn,zt));let bl=!1,Ds=!1,hr=!1,Se=Tn.getUniforms(),yn=zt.uniforms;if(gt.useProgram(Tn.program)&&(bl=!0,Ds=!0,hr=!0),k.id!==W&&(W=k.id,Ds=!0),bl||A!==w){gt.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Se.setValue(F,"projectionMatrix",w.projectionMatrix),Se.setValue(F,"viewMatrix",w.matrixWorldInverse);let dn=Se.map.cameraPosition;dn!==void 0&&dn.setValue(F,We.setFromMatrixPosition(w.matrixWorld)),Wt.logarithmicDepthBuffer&&Se.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(k.isMeshPhongMaterial||k.isMeshToonMaterial||k.isMeshLambertMaterial||k.isMeshBasicMaterial||k.isMeshStandardMaterial||k.isShaderMaterial)&&Se.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),A!==w&&(A=w,Ds=!0,hr=!0)}if(zt.needsLights&&(Bn.state.sunShadowMap.length>0&&Se.setValue(F,"sunShadowMap",Bn.state.sunShadowMap,Ht),Bn.state.directionalShadowMap.length>0&&Se.setValue(F,"directionalShadowMap",Bn.state.directionalShadowMap,Ht),Bn.state.spotShadowMap.length>0&&Se.setValue(F,"spotShadowMap",Bn.state.spotShadowMap,Ht),Bn.state.pointShadowMap.length>0&&Se.setValue(F,"pointShadowMap",Bn.state.pointShadowMap,Ht)),q.isSkinnedMesh){Se.setOptional(F,q,"bindMatrix"),Se.setOptional(F,q,"bindMatrixInverse");let Ye=q.skeleton;Ye&&(Ye.boneTexture===null&&Ye.computeBoneTexture(),Se.setValue(F,"boneTexture",Ye.boneTexture,Ht))}q.isBatchedMesh&&(Se.setOptional(F,q,"batchingTexture"),Se.setValue(F,"batchingTexture",q._matricesTexture,Ht),Se.setOptional(F,q,"batchingIdTexture"),Se.setValue(F,"batchingIdTexture",q._indirectTexture,Ht),Se.setOptional(F,q,"batchingColorTexture"),q._colorsTexture!==null&&Se.setValue(F,"batchingColorTexture",q._colorsTexture,Ht));let Li=Z.morphAttributes;if((Li.position!==void 0||Li.normal!==void 0||Li.color!==void 0)&&j.update(q,Z,Tn),(Ds||zt.receiveShadow!==q.receiveShadow)&&(zt.receiveShadow=q.receiveShadow,Se.setValue(F,"receiveShadow",q.receiveShadow)),(k.isMeshStandardMaterial||k.isMeshLambertMaterial||k.isMeshPhongMaterial)&&k.envMap===null&&U.environment!==null&&(yn.envMapIntensity.value=U.environmentIntensity),yn.dfgLUT!==void 0&&(yn.dfgLUT.value=cT()),Ds){if(Se.setValue(F,"toneMappingExposure",C.toneMappingExposure),zt.needsLights&&jn(yn,hr),Tt&&k.fog===!0&&pt.refreshFogUniforms(yn,Tt),pt.refreshMaterialUniforms(yn,k,yt,Et,E.state.transmissionRenderTarget[w.id]),zt.needsLights&&zt.numLightProbeGrids>0){let Ye=y,dn=0;for(let hs of E.state.lightProbeGridArray)hs.texture!==null&&(Ye.textures[dn]=hs.texture,Ye.min[dn]=hs.boundingBox.min,Ye.max[dn]=hs.boundingBox.max,Ye.resolution[dn]=hs.resolution,dn++);for(let hs in Ye)Ye[hs].length=dn;yn.probesSH.value=Ye.textures,yn.probesMin.value=Ye.min,yn.probesMax.value=Ye.max,yn.probesResolution.value=Ye.resolution}qo.upload(F,me(zt),yn,Ht)}if(k.isShaderMaterial&&k.uniformsNeedUpdate===!0&&(qo.upload(F,me(zt),yn,Ht),k.uniformsNeedUpdate=!1),k.isSpriteMaterial&&Se.setValue(F,"center",q.center),Se.setValue(F,"modelViewMatrix",q.modelViewMatrix),Se.setValue(F,"normalMatrix",q.normalMatrix),Se.setValue(F,"modelMatrix",q.matrixWorld),k.uniformsGroups!==void 0){let Ye=k.uniformsGroups;for(let dn=0,hs=Ye.length;dn<hs;dn++){let dp=Ye[dn];ht.update(dp,Tn),ht.bind(dp,Tn)}}return Tn}function jn(w,U){w.ambientLightColor.needsUpdate=U,w.lightProbe.needsUpdate=U,w.sunLights.needsUpdate=U,w.sunLightShadows.needsUpdate=U,w.directionalLights.needsUpdate=U,w.directionalLightShadows.needsUpdate=U,w.pointLights.needsUpdate=U,w.pointLightShadows.needsUpdate=U,w.spotLights.needsUpdate=U,w.spotLightShadows.needsUpdate=U,w.rectAreaLights.needsUpdate=U,w.hemisphereLights.needsUpdate=U}function Fn(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return et},this.setRenderTargetTextures=function(w,U,Z){let k=Nt.get(w);k.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,k.__autoAllocateDepthBuffer===!1&&(k.__useRenderToTexture=!1),Nt.get(w.texture).__webglTexture=U,Nt.get(w.depthTexture).__webglTexture=k.__autoAllocateDepthBuffer?void 0:Z,k.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,U){let Z=Nt.get(w);Z.__webglFramebuffer=U,Z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(w,U=0,Z=0){et=w,H=U,O=Z;let k=null,q=!1,Tt=!1;if(w){let wt=Nt.get(w);if(wt.__useDefaultFramebuffer!==void 0){gt.bindFramebuffer(F.FRAMEBUFFER,wt.__webglFramebuffer),Y.copy(w.viewport),St.copy(w.scissor),Dt=w.scissorTest,gt.viewport(Y),gt.scissor(St),gt.setScissorTest(Dt),W=-1;return}else if(wt.__webglFramebuffer===void 0)Ht.setupRenderTarget(w);else if(wt.__hasExternalTextures)Ht.rebindTextures(w,Nt.get(w.texture).__webglTexture,Nt.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let qt=w.depthTexture;if(wt.__boundDepthTexture!==qt){if(qt!==null&&Nt.has(qt)&&(w.width!==qt.image.width||w.height!==qt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ht.setupDepthRenderbuffer(w)}}let ft=w.texture;(ft.isData3DTexture||ft.isDataArrayTexture||ft.isCompressedArrayTexture)&&(Tt=!0);let Ct=Nt.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(Ct[U])?k=Ct[U][Z]:k=Ct[U],q=!0):w.samples>0&&Ht.useMultisampledRTT(w)===!1?k=Nt.get(w).__webglMultisampledFramebuffer:Array.isArray(Ct)?k=Ct[Z]:k=Ct,Y.copy(w.viewport),St.copy(w.scissor),Dt=w.scissorTest}else Y.copy(Lt).multiplyScalar(yt).floor(),St.copy(Yt).multiplyScalar(yt).floor(),Dt=Ut;if(Z!==0&&(k=V),gt.bindFramebuffer(F.FRAMEBUFFER,k)&&gt.drawBuffers(w,k),gt.viewport(Y),gt.scissor(St),gt.setScissorTest(Dt),q){let wt=Nt.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+U,wt.__webglTexture,Z)}else if(Tt){let wt=U;for(let ft=0;ft<w.textures.length;ft++){let Ct=Nt.get(w.textures[ft]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+ft,Ct.__webglTexture,Z,wt)}}else if(w!==null&&Z!==0){let wt=Nt.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,wt.__webglTexture,Z)}W=-1};function fn(w){let U=Nt.get(w);return(U.__readFormat!==w.format||U.__readType!==w.type)&&(U.__readFormat=w.format,U.__readType=w.type,U.__formatReadable=Wt.textureFormatReadable(w.format),U.__typeReadable=Wt.textureTypeReadable(w.type)),U}this.readRenderTargetPixels=function(w,U,Z,k,q,Tt,It,wt=0){if(!(w&&w.isWebGLRenderTarget)){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ft=Nt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&It!==void 0&&(ft=ft[It],Array.isArray(ft)&&(ft=ft[0])),ft){gt.bindFramebuffer(F.FRAMEBUFFER,ft);try{let Ct=w.textures[wt],qt=Ct.format,ue=Ct.type;w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+wt);let Ot=fn(Ct);if(Ot.__formatReadable===!1){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ot.__typeReadable===!1){Zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=w.width-k&&Z>=0&&Z<=w.height-q&&F.readPixels(U,Z,k,q,ct.convert(qt),ct.convert(ue),Tt)}finally{let Ct=et!==null?Nt.get(et).__webglFramebuffer:null;gt.bindFramebuffer(F.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(w,U,Z,k,q,Tt,It,wt=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ft=Nt.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&It!==void 0&&(ft=ft[It],Array.isArray(ft)&&(ft=ft[0])),ft)if(U>=0&&U<=w.width-k&&Z>=0&&Z<=w.height-q){gt.bindFramebuffer(F.FRAMEBUFFER,ft);let Ct=w.textures[wt],qt=Ct.format,ue=Ct.type;w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+wt);let Ot=fn(Ct);if(Ot.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ot.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let fe=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,fe),F.bufferData(F.PIXEL_PACK_BUFFER,Tt.byteLength,F.STREAM_READ),F.readPixels(U,Z,k,q,ct.convert(qt),ct.convert(ue),0),F.bindBuffer(F.PIXEL_PACK_BUFFER,null);let Qe=et!==null?Nt.get(et).__webglFramebuffer:null;gt.bindFramebuffer(F.FRAMEBUFFER,Qe);let Ie=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await R_(F,Ie,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,fe),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,Tt),F.bindBuffer(F.PIXEL_PACK_BUFFER,null),F.deleteBuffer(fe),F.deleteSync(Ie),Tt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,U=null,Z=0){let k=Math.pow(2,-Z),q=Math.floor(w.image.width*k),Tt=Math.floor(w.image.height*k),It=U!==null?U.x:0,wt=U!==null?U.y:0;Ht.setTexture2D(w,0),F.copyTexSubImage2D(F.TEXTURE_2D,Z,0,0,It,wt,q,Tt),gt.unbindTexture()},this.copyTextureToTexture=function(w,U,Z=null,k=null,q=0,Tt=0){let It,wt,ft,Ct,qt,ue,Ot,fe,Qe,Ie=w.isCompressedTexture?w.mipmaps[Tt]:w.image;if(Z!==null)It=Z.max.x-Z.min.x,wt=Z.max.y-Z.min.y,ft=Z.isBox3?Z.max.z-Z.min.z:1,Ct=Z.min.x,qt=Z.min.y,ue=Z.isBox3?Z.min.z:0;else{let Se=Math.pow(2,-q);It=Math.floor(Ie.width*Se),wt=Math.floor(Ie.height*Se),w.isDataArrayTexture?ft=Ie.depth:w.isData3DTexture?ft=Math.floor(Ie.depth*Se):ft=1,Ct=0,qt=0,ue=0}k!==null?(Ot=k.x,fe=k.y,Qe=k.z):(Ot=0,fe=0,Qe=0);let Oe=ct.convert(U.format),wn=ct.convert(U.type),zt;U.isData3DTexture?(Ht.setTexture3D(U,0),zt=F.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(Ht.setTexture2DArray(U,0),zt=F.TEXTURE_2D_ARRAY):(Ht.setTexture2D(U,0),zt=F.TEXTURE_2D),gt.activeTexture(F.TEXTURE0),gt.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,U.flipY),gt.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),gt.pixelStorei(F.UNPACK_ALIGNMENT,U.unpackAlignment);let Bn=gt.getParameter(F.UNPACK_ROW_LENGTH),we=gt.getParameter(F.UNPACK_IMAGE_HEIGHT),cr=gt.getParameter(F.UNPACK_SKIP_PIXELS),Tn=gt.getParameter(F.UNPACK_SKIP_ROWS),bl=gt.getParameter(F.UNPACK_SKIP_IMAGES);gt.pixelStorei(F.UNPACK_ROW_LENGTH,Ie.width),gt.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ie.height),gt.pixelStorei(F.UNPACK_SKIP_PIXELS,Ct),gt.pixelStorei(F.UNPACK_SKIP_ROWS,qt),gt.pixelStorei(F.UNPACK_SKIP_IMAGES,ue);let Ds=w.isDataArrayTexture||w.isData3DTexture,hr=U.isDataArrayTexture||U.isData3DTexture;if(w.isDepthTexture){let Se=Nt.get(w),yn=Nt.get(U),Li=Nt.get(Se.__renderTarget),Ye=Nt.get(yn.__renderTarget);gt.bindFramebuffer(F.READ_FRAMEBUFFER,Li.__webglFramebuffer),gt.bindFramebuffer(F.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer);for(let dn=0;dn<ft;dn++)Ds&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Nt.get(w).__webglTexture,q,ue+dn),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Nt.get(U).__webglTexture,Tt,Qe+dn)),F.blitFramebuffer(Ct,qt,Ct+It,qt+wt,Ot,fe,Ot+It,fe+wt,F.DEPTH_BUFFER_BIT,F.NEAREST);gt.bindFramebuffer(F.READ_FRAMEBUFFER,null),gt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(q!==0||w.isRenderTargetTexture||Nt.has(w)){let Se=Nt.get(w),yn=Nt.get(U);gt.bindFramebuffer(F.READ_FRAMEBUFFER,I),gt.bindFramebuffer(F.DRAW_FRAMEBUFFER,z);for(let Li=0;Li<ft;Li++)Ds?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Se.__webglTexture,q,ue+Li):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Se.__webglTexture,q),hr?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,yn.__webglTexture,Tt,Qe+Li):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,yn.__webglTexture,Tt),q!==0?F.blitFramebuffer(Ct,qt,Ct+It,qt+wt,Ot,fe,Ot+It,fe+wt,F.COLOR_BUFFER_BIT,F.NEAREST):hr?F.copyTexSubImage3D(zt,Tt,Ot,fe,Qe+Li,Ct,qt,It,wt):F.copyTexSubImage2D(zt,Tt,Ot,fe,Ct,qt,It,wt);gt.bindFramebuffer(F.READ_FRAMEBUFFER,null),gt.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else hr?w.isDataTexture||w.isData3DTexture?F.texSubImage3D(zt,Tt,Ot,fe,Qe,It,wt,ft,Oe,wn,Ie.data):U.isCompressedArrayTexture?F.compressedTexSubImage3D(zt,Tt,Ot,fe,Qe,It,wt,ft,Oe,Ie.data):F.texSubImage3D(zt,Tt,Ot,fe,Qe,It,wt,ft,Oe,wn,Ie):w.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,Tt,Ot,fe,It,wt,Oe,wn,Ie.data):w.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,Tt,Ot,fe,Ie.width,Ie.height,Oe,Ie.data):F.texSubImage2D(F.TEXTURE_2D,Tt,Ot,fe,It,wt,Oe,wn,Ie);gt.pixelStorei(F.UNPACK_ROW_LENGTH,Bn),gt.pixelStorei(F.UNPACK_IMAGE_HEIGHT,we),gt.pixelStorei(F.UNPACK_SKIP_PIXELS,cr),gt.pixelStorei(F.UNPACK_SKIP_ROWS,Tn),gt.pixelStorei(F.UNPACK_SKIP_IMAGES,bl),Tt===0&&U.generateMipmaps===!0&&U.mipmapsAutoUpdate===!0&&F.generateMipmap(zt),gt.unbindTexture()},this.initRenderTarget=function(w){Nt.get(w).__webglFramebuffer===void 0&&Ht.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?Ht.setTextureCube(w,0):w.isData3DTexture?Ht.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?Ht.setTexture2DArray(w,0):Ht.setTexture2D(w,0),gt.unbindTexture()},this.resetState=function(){H=0,O=0,et=null,gt.reset(),_t.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ge._getDrawingBufferColorSpace(t),e.unpackColorSpace=ge._getUnpackColorSpace()}};var Jo=16,hT=`
varying vec2 vUv;
void main() { vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }
`,uT=`
precision highp float;
varying vec2 vUv;
uniform sampler2D tDesk;
uniform sampler2D tTrack;
uniform vec2 uBox;
uniform float uImgAspect;
uniform float uScale;
uniform float uTime;
uniform float uIntro;
uniform vec3 uPts[${Jo}];

vec2 imgUv(vec2 uv) {
  float A = uBox.x / uBox.y;
  return vec2((uv.x - 0.5) * A / (uScale * uImgAspect) + 0.5, uv.y / uScale);
}

void main() {
  vec2 p = imgUv(vUv);
  float ins = step(0.0, p.x) * step(p.x, 1.0) * step(0.0, p.y) * step(p.y, 1.0);
  vec4 d = texture2D(tDesk, p) * ins;
  vec4 t = texture2D(tTrack, p) * ins;

  vec2 q = vec2(vUv.x * uBox.x / uBox.y, vUv.y);
  float f = 0.0;
  for (int i = 0; i < ${Jo}; i++) {
    vec3 b = uPts[i];
    vec2 dd = q - b.xy;
    f += (b.z * b.z) / (dot(dd, dd) + 1e-5);
  }
  float m = smoothstep(0.94, 1.06, f);
  float rim = smoothstep(0.80, 0.94, f) * (1.0 - smoothstep(0.94, 1.10, f));

  vec3 livery = vec3(0.953, 0.843, 0.039);
  vec4 dP = vec4(d.rgb * d.a, d.a);
  vec4 tP = vec4(t.rgb * t.a, t.a);
  vec4 col = mix(dP, tP, m);

  // inside a window but no rider: faint hatch in livery
  float empty = m * (1.0 - t.a);
  float hatch = step(0.62, fract((q.x * 0.55 + q.y) * 110.0));
  col += vec4(livery, 1.0) * empty * hatch * 0.10;
  col += vec4(livery * 0.0, 0.0);

  // rim line
  col = col * (1.0 - rim * 0.9) + vec4(livery, 1.0) * rim * 0.9;

  col *= uIntro;
  gl_FragColor = col;
}
`;function _0(s,{textureWidth:t=1800,onReady:e}={}){let n=document.createElement("canvas"),i;try{i=new Yo({canvas:n,alpha:!0,antialias:!1,premultipliedAlpha:!0,powerPreference:"high-performance"})}catch{return null}s.appendChild(n),i.setClearColor(0,0);let r=new ol,o=A=>new Promise((Y,St)=>r.load(A,Dt=>{Dt.colorSpace=Xi,Dt.minFilter=xn,Dt.magFilter=xn,Dt.generateMipmaps=!1,Y(Dt)},void 0,St)),a=Array.from({length:Jo},()=>new B(0,0,0)),l={tDesk:{value:null},tTrack:{value:null},uBox:{value:new te(1,1)},uImgAspect:{value:1.2},uScale:{value:.94},uTime:{value:0},uIntro:{value:0},uPts:{value:a}},c=new Ri({vertexShader:hT,fragmentShader:uT,uniforms:l,transparent:!0,depthTest:!1,depthWrite:!1,premultipliedAlpha:!0}),h=new Nr;h.add(new vn(new Rs(2,2),c));let d=new ko(-1,1,1,-1,0,1),u=1,f=1,p=1;function g(){u=s.clientWidth,f=s.clientHeight,p=u/f,i.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),i.setSize(u,f,!1),l.uBox.value.set(u,f),l.uScale.value=u<700?.86:.94}let m=()=>({cx:p/2,head:1-(1-l.uScale.value*(1-733/2e3))}),_=[{ph:0,sp:.23,rx:.1,ry:.07,oy:0,r:.052},{ph:2.1,sp:.17,rx:.13,ry:.1,oy:-.22,r:.06},{ph:4.2,sp:.29,rx:.08,ry:.06,oy:-.42,r:.045}],v=[],S={x:0,y:0,tx:0,ty:0,r:0,tr:0,active:!1},y=0;function T(A){let Y=n.getBoundingClientRect();return{x:(A.clientX-Y.left)/Y.width*p,y:1-(A.clientY-Y.top)/Y.height}}function E(A){let Y=T(A);S.tx=Y.x,S.ty=Y.y,S.active||(S.x=Y.x,S.y=Y.y),S.active=!0,S.tr=u<700?.09:.075;let St=performance.now();St-y>34&&(v.push({x:Y.x,y:Y.y,r:u<700?.07:.058}),v.length>Jo-4&&v.shift(),y=St)}function x(){S.active=!1,S.tr=0}let b=s.closest("[data-hero-card]")||s;b.addEventListener("pointermove",E,{passive:!0}),b.addEventListener("pointerdown",E,{passive:!0}),b.addEventListener("pointerleave",x),b.addEventListener("pointercancel",x);let P=1;function C(A,Y){let{cx:St,head:Dt}=m(),J=0;for(let ut of _){let Et=ut.r*P*(.85+.15*Math.sin(A*1.3+ut.ph));a[J++].set(St+Math.sin(A*ut.sp*2+ut.ph)*ut.rx,Dt+ut.oy+Math.cos(A*ut.sp*1.6+ut.ph)*ut.ry,Et)}let at=1-Math.pow(8e-4,Y);S.x+=(S.tx-S.x)*at,S.y+=(S.ty-S.y)*at,S.r+=(S.tr-S.r)*(1-Math.pow(.002,Y)),a[J++].set(S.x,S.y,S.r);for(let ut=v.length-1;ut>=0;ut--)v[ut].r*=Math.pow(.12,Y),v[ut].r<.004&&v.splice(ut,1);for(let ut of v){if(J>=Jo)break;a[J++].set(ut.x,ut.y,ut.r)}for(;J<Jo;)a[J++].set(-10,-10,0);P+=((S.active?.55:1)-P)*(1-Math.pow(.1,Y))}let N=!0,D=0,V=performance.now(),I=V,z=0,H=0;function O(A){let Y=Math.min(.05,(A-V)/1e3);V=A;let St=(A-I)/1e3;z+=(H-z)*(1-Math.pow(.02,Y)),l.uIntro.value=z,l.uTime.value=St,C(St,Y),i.render(h,d),D=N?requestAnimationFrame(O):0}return new IntersectionObserver(([A])=>{N=A.isIntersecting,N&&!D&&(V=performance.now(),D=requestAnimationFrame(O))}).observe(s),new ResizeObserver(g).observe(s),g(),{ready:Promise.all([o(`assets/img/hero-desk-${t}.webp`),o(`assets/img/hero-track-${t}.webp`)]).then(([A,Y])=>{l.tDesk.value=A,l.tTrack.value=Y,l.uImgAspect.value=A.image.width/A.image.height,i.compile(h,d),D||(D=requestAnimationFrame(O)),e&&e()}),show(){H=1,document.documentElement.classList.add("gl-ready")},setIdle(A){P=A?1:0}}}var Sl=[[-30,0],[10,0],[45,0],[60,-4],[66,-14],[60,-24],[48,-24],[40,-18],[30,-20],[22,-30],[24,-42],[36,-50],[58,-52],[80,-50],[96,-42],[100,-28],[94,-14],[92,2],[98,16],[96,30],[82,38],[60,40],[30,40],[0,38],[-28,34],[-46,24],[-52,10],[-46,2]],Gr=[{key:"start",idx:0,label:"Start",tag:"Millennium, now",hud:"Now"},{key:"t1",idx:4,label:"T1",tag:"Hackathon win, 2025",hud:"2025"},{key:"t2",idx:10,label:"T2",tag:"Goldman Sachs, 2022\u201324",hud:"2023"},{key:"t3",idx:15,label:"T3",tag:"London Business School, 2022",hud:"2022"},{key:"t4",idx:18,label:"T4",tag:"Trexquant, 2022",hud:"2022"},{key:"t5",idx:20,label:"T5",tag:"Warwick, 2021",hud:"2021"},{key:"t6",idx:26,label:"T6",tag:"BITS Pilani, 2019",hud:"2019"},{key:"finish",idx:0,label:"Flag",tag:"Next lap",hud:"Next",finish:!0}],x0=.11,cs=.13,v0=.93,y0=(s,t=0,e=1)=>Math.min(e,Math.max(t,s)),Qn=(s,t,e)=>{let n=y0((e-s)/(t-s));return n*n*(3-2*n)};function S0(s,{mobile:t=!1}={}){let e=s.querySelector("[data-lap-canvas]"),n;try{n=new Yo({canvas:e,antialias:!0,alpha:!1,powerPreference:"high-performance"})}catch{return null}let i=858926;n.setClearColor(i,1);let r=new Nr;r.fog=new Xa(i,90,t?520:330);let o=new Zn(t?55:42,1,.5,700),a=new Kt("#E8EDF4"),l=new Kt("#A9B4C4"),c=new Kt("#F3D70A"),h=new Kt("#3DB5E6"),d=0,u=0;Sl.forEach(([it,ot])=>{d+=it,u+=ot}),d/=Sl.length,u/=Sl.length;let f=Sl.map(([it,ot],bt)=>{let Pt=bt/Sl.length,Vt=2.4*Math.sin(Pt*Math.PI*4+.6)+1.2*Math.sin(Pt*Math.PI*6);return new B(it-d,Vt+2.8,ot-u)}),p=new nl(f,!0,"centripetal"),g=t?900:1400,m=p.getSpacedPoints(g),_=m.map((it,ot)=>m[(ot+1)%g].clone().sub(m[(ot-1+g)%g]).normalize()),v=new B(0,1,0),S=_.map(it=>new B().crossVectors(v,it).normalize()),y=2.3,T=it=>{let ot=0,bt=1/0;for(let Pt=0;Pt<g;Pt++){let Vt=m[Pt].distanceToSquared(f[it]);Vt<bt&&(bt=Vt,ot=Pt)}return ot/g};Gr.forEach(it=>{it.u=it.finish?1:T(it.idx)}),Gr[0].u=0;let E=it=>{let ot=new an;return ot.setAttribute("position",new De(it.flatMap(bt=>[bt.x,bt.y,bt.z]),3)),ot},x=m.map((it,ot)=>it.clone().addScaledVector(S[ot],y)),b=m.map((it,ot)=>it.clone().addScaledVector(S[ot],-y)),P=new $n({color:a,transparent:!0,opacity:.9}),C=new Ci(E(x),P),N=new Ci(E(b),P);r.add(C,N);let D=new Ci(E(m),new sl({color:l,dashSize:1.1,gapSize:1.9,transparent:!0,opacity:.35}));D.computeLineDistances(),r.add(D);let V=[],I=t?10:7;for(let it=0;it<g;it+=I)V.push(x[it],b[it]);let z=new nr(E(V),new $n({color:l,transparent:!0,opacity:.16}));r.add(z);let H=[];for(let it=0;it<g;it++){let ot=x[it],bt=b[it],Pt=x[it+1],Vt=b[it+1];H.push(ot,bt,Pt,bt,Vt,Pt)}let O=new vn(E(H),new rs({color:a,transparent:!0,opacity:.035,side:oi,depthWrite:!1}));r.add(O);let et=[],W=[],A=Gr.filter(it=>!it.finish&&it.key!=="start").map(it=>{let ot=Math.round(it.u*g),bt=new B().crossVectors(_[(ot-8+g)%g],_[(ot+8)%g]).y;return{c:ot,inside:bt>0?1:-1}}),Y=Math.round(g/1400*26),St=(it,ot,bt)=>{for(let Pt=it;Pt<ot;Pt++){let Vt=(Pt%g+g)%g,Qt=(Vt+1)%g,Be=y*bt,me=(y+.9)*bt,oe=m[Vt].clone().addScaledVector(S[Vt],Be),Ue=m[Vt].clone().addScaledVector(S[Vt],me),jn=m[Qt].clone().addScaledVector(S[Qt],Be),Fn=m[Qt].clone().addScaledVector(S[Qt],me),fn=Math.floor((Pt-it)/3)%2?a:c;[oe,Ue,jn,Ue,Fn,jn].forEach(w=>{et.push(w.x,w.y+.02,w.z),W.push(fn.r,fn.g,fn.b)})}},Dt=Math.round(Y*1.9),J=Math.round(Y*1.9);A.forEach(({c:it,inside:ot})=>{St(it-Dt-Y,it-Dt+Math.round(Y*.4),-ot),St(it-Math.round(Y*.55),it+Math.round(Y*.55),ot),St(it+J-Math.round(Y*.4),it+J+Y,-ot)});let at=[];A.forEach(({c:it,inside:ot})=>{at.push([it-Dt,-ot*y*.72],[it,ot*y*.82],[it+J,-ot*y*.72])}),at.sort((it,ot)=>it[0]-ot[0]);let ut=new Float32Array(g+1);for(let it=0;it<=g;it++){let ot=at.findIndex(oe=>oe[0]>it);ot<0&&(ot=0);let bt=(ot-1+at.length)%at.length,Pt=at[bt][0],Vt=at[ot][0],Qt=it;Vt<=Pt&&(Vt+=g,Qt<Pt&&(Qt+=g));let Be=Math.min(1,Math.max(0,(Qt-Pt)/Math.max(1,Vt-Pt))),me=Be*Be*(3-2*Be);ut[it]=at[bt][1]+(at[ot][1]-at[bt][1])*me}let Et=m.map((it,ot)=>it.clone().addScaledVector(S[ot%g],ut[ot%g])),yt=(it,ot)=>{let bt=(it%1+1)%1*g,Pt=Math.floor(bt),Vt=bt-Pt;return ot.copy(Et[Pt]).lerp(Et[(Pt+1)%(g+1)],Vt)},Bt=new an;Bt.setAttribute("position",new De(et,3)),Bt.setAttribute("color",new De(W,3));let Me=new vn(Bt,new rs({vertexColors:!0,transparent:!0,opacity:0,side:oi,depthWrite:!1}));r.add(Me);let Lt=[],Yt=[];{let ot=_[0],bt=S[0],Pt=m[0],Vt=8,Qt=2,Be=y*2/Vt,me=.55;for(let oe=0;oe<Qt;oe++)for(let Ue=0;Ue<Vt;Ue++){let jn=Pt.clone().addScaledVector(bt,-y+Ue*Be).addScaledVector(ot,(oe-1)*me),Fn=jn,fn=jn.clone().addScaledVector(bt,Be),w=jn.clone().addScaledVector(ot,me),U=fn.clone().addScaledVector(ot,me),Z=(oe+Ue)%2?a:new Kt("#0B1522");[Fn,fn,w,fn,U,w].forEach(k=>{Lt.push(k.x,k.y+.03,k.z),Yt.push(Z.r,Z.g,Z.b)})}}let Ut=new an;Ut.setAttribute("position",new De(Lt,3)),Ut.setAttribute("color",new De(Yt,3));let kt=new vn(Ut,new rs({vertexColors:!0,side:oi,transparent:!0,opacity:0}));r.add(kt);let ce=new zi;{let it=m[0],ot=S[0],bt=7.5,Pt=y+1.6,Vt=it.clone().addScaledVector(ot,Pt),Qt=it.clone().addScaledVector(ot,-Pt),Be=E([Vt,Vt.clone().setY(Vt.y+bt),Qt,Qt.clone().setY(Qt.y+bt),Vt.clone().setY(Vt.y+bt),Qt.clone().setY(Qt.y+bt)]);ce.add(new nr(Be,new $n({color:a,transparent:!0,opacity:.7})))}let pe=[];{let it=m[0],ot=S[0];for(let bt=0;bt<5;bt++){let Pt=it.clone().addScaledVector(ot,(bt-2)*.95).setY(it.y+6.6),Vt=new nr(new el(new ir(.7,1.1,.4)),new $n({color:l,transparent:!0,opacity:.7}));Vt.position.copy(Pt),Vt.lookAt(Pt.clone().add(_[0])),ce.add(Vt);let Qt=new vn(new Bo(.22,12,8),new rs({color:new Kt("#FF3B30"),transparent:!0,opacity:0}));Qt.position.copy(Pt).addScaledVector(_[0],-.25),ce.add(Qt),pe.push(Qt)}}r.add(ce);let $=[],ee=t?3.4:2.6,We=150,Te=110;for(let it=-We;it<=We;it+=ee)for(let ot=-Te;ot<=Te;ot+=ee)$.push(it,0,ot);let he=new an;he.setAttribute("position",new De($,3));let ke=new $a(he,new Fo({color:l,size:t?.26:.2,transparent:!0,opacity:0,depthWrite:!1}));r.add(ke);let Ve=new Rs(560,440,t?40:64,t?32:50);Ve.rotateX(-Math.PI/2);{let it=Ve.attributes.position;for(let ot=0;ot<it.count;ot++){let bt=it.getX(ot),Pt=it.getZ(ot),Vt=Math.hypot(bt/1.25,Pt),Qt=Qn(95,200,Vt),Be=Math.sin(bt*.045)*Math.cos(Pt*.05)+.6*Math.sin(bt*.11+Pt*.07)+.35*Math.cos(bt*.21-Pt*.17);it.setY(ot,-.3+Qt*(10+Be*9))}}let F=new nr(new il(Ve),new $n({color:l,transparent:!0,opacity:0}));r.add(F);let _e=Gr.filter(it=>!it.finish).map(it=>{let ot=Math.round(it.u*g)%g,bt=m[ot].clone(),Pt=bt.clone().setY(bt.y+(it.key==="start"?10.5:8)),Vt=new zi,Qt=new Ci(E([bt,Pt]),new $n({color:a,transparent:!0,opacity:0})),Be=[];for(let oe=0;oe<=40;oe++){let Ue=oe/40*Math.PI*2;Be.push(new B(bt.x+Math.cos(Ue)*3.4,bt.y+.05,bt.z+Math.sin(Ue)*3.4))}let me=new Ci(E(Be),new $n({color:c,transparent:!0,opacity:0}));return Vt.add(Qt,me),r.add(Vt),{m:it,i:ot,top:Pt,stem:Qt,ring:me}}),xe=(()=>{let it=document.createElement("canvas");it.width=it.height=128;let ot=it.getContext("2d"),bt=ot.createRadialGradient(64,64,0,64,64,64);return bt.addColorStop(0,"rgba(255,240,140,1)"),bt.addColorStop(.25,"rgba(243,215,10,0.55)"),bt.addColorStop(1,"rgba(243,215,10,0)"),ot.fillStyle=bt,ot.fillRect(0,0,128,128),new Qa(it)})(),Wt=new zi;Wt.add(new vn(new Bo(.34,16,12),new rs({color:c})));let gt=new Ja(new Uo({map:xe,blending:cl,depthWrite:!1,transparent:!0}));gt.scale.set(3.6,3.6,1),Wt.add(gt),r.add(Wt);let re=90,Nt=new an;Nt.setAttribute("position",new De(new Float32Array(re*3),3));let Ht=new Float32Array(re*3),R=new Kt(i);for(let it=0;it<re;it++){let ot=R.clone().lerp(c,(it/(re-1))**1.6);Ht.set([ot.r,ot.g,ot.b],it*3)}Nt.setAttribute("color",new De(Ht,3));let M=new Ci(Nt,new $n({vertexColors:!0}));r.add(M);let G=new Ci(E(Et),new $n({color:h,transparent:!0,opacity:.6}));G.position.y=.06,r.add(G);let lt=s.querySelector("[data-lap-labels]"),rt=_e.map(it=>{let ot=document.createElement("div");return ot.className="tl",ot.innerHTML=`<b>${it.m.label}</b><span>${it.m.tag}</span>`,lt.appendChild(ot),ot}),pt=[...s.querySelectorAll(".panel")],Mt=it=>pt.find(ot=>ot.dataset.u===it),X=s.querySelector("[data-lap-intro]"),nt=s.querySelector("[data-hud]"),dt=s.querySelector("[data-hud-year]"),L=s.querySelector("[data-hud-fill]"),j=L.parentElement;Gr.filter(it=>!it.finish&&it.key!=="start").forEach(it=>{let ot=document.createElement("span");ot.className="hud-tick",ot.style.left=(it.u*100).toFixed(2)+"%",j.appendChild(ot)});let K=0,mt=1,ct=1,_t=new B,ht=new B,xt=!0,tt={x:0,y:0,tx:0,ty:0};window.addEventListener("pointermove",it=>{tt.tx=it.clientX/innerWidth-.5,tt.ty=it.clientY/innerHeight-.5},{passive:!0});function st(){mt=s.clientWidth,ct=s.clientHeight,n.setPixelRatio(Math.min(window.devicePixelRatio||1,t?1.5:1.75)),n.setSize(mt,ct,!1),o.aspect=mt/ct,o.updateProjectionMatrix()}let vt=new B,Q=new B,At=new B,ne=new B,Jt=new B,Pe=new B,Xe=null;function Ne(it){let ot=K,bt=Qn(0,x0,ot),Pt=y0((ot-cs)/(v0-cs)),Vt=Math.max(2,Math.floor(bt*(g+1)));C.geometry.setDrawRange(0,Vt),N.geometry.setDrawRange(0,Vt),D.geometry.setDrawRange(0,Vt),z.geometry.setDrawRange(0,Math.floor(bt*V.length/2)*2),O.material.opacity=.035*bt,ke.material.opacity=.42*Qn(0,.6,bt),F.material.opacity=.09*Qn(.3,1,bt),Me.material.opacity=.85*Qn(.7,1,bt),kt.material.opacity=.9*Qn(.05,.3,bt),ce.children[0].material.opacity=.7*Qn(0,.25,bt),_e.forEach(ft=>{let Ct=Qn(ft.m.u-.02,ft.m.u+.06,bt);ft.stem.material.opacity=.65*Ct,ft.ring.material.opacity=(Pt>=ft.m.u&&ot>cs?.95:.35)*Ct,ft.visible=Ct}),pe.forEach((ft,Ct)=>{let qt=ot>.07+Ct*.011&&ot<cs-.006;ft.material.opacity+=((qt?1:0)-ft.material.opacity)*Math.min(1,it*18)}),G.geometry.setDrawRange(0,Math.max(0,Math.floor(Pt*g)+1)),yt(Pt,vt),Wt.position.copy(vt).setY(vt.y+.45),Wt.visible=ot>cs-.01,M.visible=Wt.visible;let Qt=Nt.attributes.position;for(let ft=0;ft<re;ft++){let Ct=Pt-(re-1-ft)*6e-4;yt(Ct,Q),Qt.setXYZ(ft,Q.x,Q.y+.45,Q.z)}Qt.needsUpdate=!0,gt.material.opacity=.85+.15*Math.sin(performance.now()/180);let Be=.55+Math.sin(ot*Math.PI)*.9,me=Qn(.9,1,ot),oe=(t?205:175)*(mt/ct<1.2&&!t?1.2:1)*(1+me*(t?.22:.32)),Ue=.98+me*.22;At.set(Math.sin(Be)*Math.cos(Ue)*oe,Math.sin(Ue)*oe,Math.cos(Be)*Math.cos(Ue)*oe),ne.set(t?0:-18*me,0,t?18*me:0);let jn=Math.floor(Pt*g)%g,Fn=Q.set(0,0,0);for(let ft=-18;ft<=18;ft+=6)Fn.add(_[(jn+ft+g)%g]);Fn.normalize();let fn=new B().crossVectors(v,Fn).normalize(),w=t?30:25,U=t?19:14;Jt.copy(vt).addScaledVector(Fn,-w).addScaledVector(v,U).addScaledVector(fn,4+tt.x*6),t?Pe.copy(vt).addScaledVector(Fn,3).addScaledVector(v,-9):Pe.copy(vt).addScaledVector(Fn,16).addScaledVector(v,-1-tt.y*3);let Z=Qn(x0-.02,cs+.035,ot)*(1-Qn(v0-.005,.985,ot)),k=At.clone().lerp(Jt,Z),q=ne.clone().lerp(Pe,Z);xt&&(_t.copy(k),ht.copy(q),xt=!1);let Tt=1-Math.pow(5e-4,it);_t.lerp(k,Tt),ht.lerp(q,Tt),o.position.copy(_t),o.lookAt(ht),tt.x+=(tt.tx-tt.x)*.05,tt.y+=(tt.ty-tt.y)*.05,X.style.opacity=String(1-Qn(.035,.085,ot)),nt.style.opacity=String(Qn(cs-.02,cs+.01,ot)*(1-Qn(.985,1,ot)*0)),L.style.transform=`scaleX(${Pt})`;let It=null;if(ot>=cs-.008){It="start";for(let ft of Gr)Pt>=ft.u-.012&&(It=ft.key);Pt>=.995&&(It="finish")}if(It!==Xe){pt.forEach(Ct=>Ct.classList.toggle("is-active",Ct.dataset.u===It));let ft=Gr.find(Ct=>Ct.key===(It||"start"));dt.textContent=ft.hud,dt.classList.remove("flip"),dt.offsetWidth,dt.classList.add("flip"),Xe=It}let wt=new B;o.getWorldDirection(wt),_e.forEach((ft,Ct)=>{let qt=rt[Ct];Q.copy(ft.top).project(o);let ue=Q.z>1||wt.dot(vt.copy(ft.top).sub(o.position))<0,Ot=(Q.x*.5+.5)*mt,fe=(-Q.y*.5+.5)*ct,Qe=o.position.distanceTo(ft.top),Ie=ue?0:(ft.visible||0)*(1-Qn(t?150:190,t?230:280,Qe));qt.style.opacity=Ie.toFixed(3),qt.style.transform=`translate3d(${Ot.toFixed(1)}px, ${(fe-14).toFixed(1)}px, 0) translate(-50%, -100%)`,qt.classList.toggle("is-on",ot>cs&&Pt>=ft.m.u-.012)})}let be=!1,ye=0,qe=performance.now();function Ee(it){let ot=Math.min(.05,(it-qe)/1e3);qe=it,Ne(ot),n.render(r,o),ye=be?requestAnimationFrame(Ee):0}return new IntersectionObserver(([it])=>{be=it.isIntersecting,be&&!ye&&(qe=performance.now(),xt=!0,ye=requestAnimationFrame(Ee))},{rootMargin:"10% 0px"}).observe(s),new ResizeObserver(st).observe(s),st(),Ne(.016),n.render(r,o),{setProgress(it){K=it}}}$i.registerPlugin(jt);var Ii=(s,t=document)=>t.querySelector(s),Ml=(s,t=document)=>[...t.querySelectorAll(s)],$o=document.documentElement,Ls=matchMedia("(prefers-reduced-motion: reduce)").matches,yu=matchMedia("(max-width: 760px)").matches,wC=matchMedia("(hover: none)").matches,Pi=null;Ls||(Pi=new dg({lerp:.095,wheelMultiplier:.95,touchMultiplier:1.2}),Pi.on("scroll",jt.update),$i.ticker.add(s=>Pi.raf(s*1e3)),$i.ticker.lagSmoothing(0),Pi.stop());var fT=s=>{let t=s==="#top"?0:Ii(s);t!==null&&(Pi?Pi.scrollTo(t,{duration:1.6,easing:e=>1-Math.pow(1-e,4)}):t===0?window.scrollTo(0,0):t.scrollIntoView())};Ml('a[href^="#"]').forEach(s=>s.addEventListener("click",t=>{let e=s.getAttribute("href");e.length<2||(t.preventDefault(),fp(),fT(e),history.replaceState(null,"",e))}));var dT=Ii("[data-nav]"),w0=()=>dT.classList.toggle("is-scrolled",window.scrollY>innerHeight*.5);window.addEventListener("scroll",w0,{passive:!0});w0();var T0=Ii("[data-menu]"),up=Ii("[data-menu-btn]");function pT(){T0.hidden=!1,requestAnimationFrame(()=>$o.classList.add("menu-open")),up.setAttribute("aria-expanded","true"),Pi&&Pi.stop()}function fp(){$o.classList.contains("menu-open")&&($o.classList.remove("menu-open"),up.setAttribute("aria-expanded","false"),Pi&&Pi.start(),setTimeout(()=>{$o.classList.contains("menu-open")||(T0.hidden=!0)},700))}up.addEventListener("click",()=>$o.classList.contains("menu-open")?fp():pT());document.addEventListener("keydown",s=>{s.key==="Escape"&&fp()});var mT=Ii("[data-contours]"),E0=()=>pg(mT);E0();var M0;window.addEventListener("resize",()=>{clearTimeout(M0),M0=setTimeout(E0,200)});var Su=_0(Ii("[data-reveal]"),{textureWidth:innerWidth<700?1100:1800}),lp=Ii("[data-loader]"),gT=Ml(".pod",lp),_T=Ii("[data-loader-pct]"),A0=sessionStorage.getItem("vng-seen")==="1",cp=[document.fonts?document.fonts.ready:Promise.resolve(),Su?Su.ready.catch(()=>{}):Promise.resolve()],hp=0;cp.forEach(s=>s.then(()=>{hp++}));var xT=Ls?0:A0?110:260;function vT(){return new Promise(s=>{let t=0,e=()=>{let n=hp===cp.length?5:Math.min(4,1+Math.floor(hp/cp.length*4));if(t<n&&(gT[t].classList.add("is-lit"),t++),_T.textContent=String(Math.round(t/5*100)).padStart(2,"0"),t>=5)return setTimeout(s,Ls?0:A0?180:520);setTimeout(e,xT)};e()})}var yT=new Promise(s=>setTimeout(s,7e3));Promise.race([vT(),yT]).then(()=>{lp.classList.add("is-out"),setTimeout(()=>{lp.classList.add("is-done"),sessionStorage.setItem("vng-seen","1"),Pi&&Pi.start(),ST()},Ls?0:260)});function ST(){if(Su&&Su.show(),Ls)return;$i.timeline({defaults:{ease:"expo.out"}}).from(".hero-name-a",{yPercent:60,opacity:0,duration:1.4},.05).from(".hero-name-b",{yPercent:80,opacity:0,duration:1.4},.15).from(".hero-figure",{y:80,opacity:0,duration:1.6},0).from(".hero-meta > *",{y:24,opacity:0,duration:1,stagger:.08},.5).from(".nav > *",{y:-20,opacity:0,duration:1,stagger:.08},.35)}if(!Ls){let s=Ii("[data-hero-card]"),t=yu?.8:.6;$i.timeline({scrollTrigger:{trigger:"[data-hero]",start:"top top",end:"bottom bottom",scrub:!0}}).to(s,{scale:t,borderRadius:yu?34:46,ease:"none"},0).to(".hero-meta",{opacity:0,y:30,ease:"none",duration:.35},0).fromTo(".marquee-a .marquee-track",{xPercent:-6},{xPercent:-32,ease:"none"},0).fromTo(".marquee-b .marquee-track",{xPercent:-34},{xPercent:-8,ease:"none"},0)}var vu=Ii("[data-words]");if(vu){let s=e=>{[...e.childNodes].forEach(n=>{if(n.nodeType===3){let i=document.createDocumentFragment();n.textContent.split(/(\s+)/).forEach(r=>{if(r)if(/^\s+$/.test(r))i.appendChild(document.createTextNode(r));else{let o=document.createElement("span");o.className="w",o.textContent=r,i.appendChild(o)}}),e.replaceChild(i,n)}else n.nodeType===1&&s(n)})};s(vu);let t=Ml(".w",vu);Ls?t.forEach(e=>e.style.opacity=1):jt.create({trigger:vu,start:"top 85%",end:"bottom 45%",scrub:!0,onUpdate:e=>{let n=e.progress*t.length;t.forEach((i,r)=>{i.style.opacity=String(.14+.86*Math.min(1,Math.max(0,n-r)))})}}),$i.from(".proof-row li",{opacity:0,y:16,stagger:.05,duration:.8,ease:"power3.out",scrollTrigger:{trigger:".proof",start:"top 85%"}})}var C0=Ii("[data-lap]"),b0=Ls?null:S0(Ii(".lap-pin",C0),{mobile:yu});b0?jt.create({trigger:C0,start:"top top",end:"bottom bottom",onUpdate:s=>b0.setProgress(s.progress)}):$o.classList.add("no-webgl");Ls||(Ml(".big-title").forEach(s=>{$i.from(s.children,{yPercent:50,opacity:0,duration:1.2,ease:"expo.out",stagger:.08,scrollTrigger:{trigger:s,start:"top 88%"}})}),Ml("[data-speed]").forEach(s=>{let t=parseFloat(s.dataset.speed)*(yu?.5:1);$i.fromTo(s,{yPercent:t*60},{yPercent:-t*60,ease:"none",scrollTrigger:{trigger:s,start:"top bottom",end:"bottom top",scrub:!0}})}));window.addEventListener("load",()=>jt.refresh());
/*! Bundled license information:

gsap/gsap-core.js:
  (*!
   * GSAP 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.15.1
   * https://gsap.com
   *
   * Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.15.1
   * https://gsap.com
   *
   * @license Copyright 2008-2026, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
