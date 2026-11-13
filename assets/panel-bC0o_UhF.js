import{d as e}from"./vendor-Bz4s8oZC.js";import{r as t,t as n}from"./state-CiGplzoU.js";import{t as r}from"./types-BfoTPEQK.js";import{a as i,n as a,r as o}from"./storage-C8K9885r.js";import{r as s}from"./i18n-C848ggUy.js";import{n as c}from"./icons-Vzb7fGc5.js";function l(t,n,r=()=>{},i=()=>!0){let a=!0,o=0,s=0,c=0,l=!1,u=null,d=[],f=()=>{o++,r()};d.push(e.player.onChange(e=>{let t=e.role===`GM`?`GM`:`PLAYER`;t!==u&&(s++,u=t,f())})),d.push(e.scene.onReadyChange(e=>{c++,l=e,f()}));let p=s;e.player.getRole().then(e=>{!a||p!==s||(u=e===`GM`?`GM`:`PLAYER`,r())}).catch(()=>{});let m=c;e.scene.isReady().then(e=>{!a||m!==c||l!==e&&(l=e,f())}).catch(()=>{});function h(e=!1,r=!0){let s=t(),c=o,d=d=>a&&n()&&l&&u!==null&&o===c&&!!s&&t()===s&&(!d||d.id===s)&&(!e||u===`GM`)&&(!r||i(d));return s&&d()?{id:s,current:d}:null}function g(){if(a){a=!1,o++;for(let e of d.splice(0))e();window.removeEventListener(`pagehide`,g)}}return window.addEventListener(`pagehide`,g),{capture:h,dispose:g,isGM:()=>u===`GM`,alive:()=>a&&n(),invalidate:f}}var u=e=>s(n(),e);function d(e,t,n){let r=(e||``).trim();if(!r)return null;if(/^[+\-]\s*[\d.]+$/.test(r)){let e=Number(r);if(Number.isFinite(e))return t+e}let i=r.replace(/current/gi,`(${t})`).replace(/cur/gi,`(${t})`).replace(/max/gi,`(${n})`);if(!/^[\d.\s+\-*/()]+$/.test(i))return null;try{let e=Function(`return (${i})`)();if(typeof e==`number`&&Number.isFinite(e))return e}catch{}return null}var f=`${r}/edit-open`,p=`${r}/changed`,m=`com.character-cards/boundCardId`,h=`com.character-cards/list`,g=`com.owlbear-rodeo-bubbles-extension/name`;async function _(t){let n=null;try{n=(await e.scene.items.getItems([t]))[0]??null}catch{}if(!n)return``;let r=n.metadata??{},i=r[m];if(typeof i==`string`&&i)try{let t=(await e.scene.getMetadata())[h];if(Array.isArray(t)){let e=t.find(e=>e&&e.id===i);if(e&&typeof e.name==`string`&&e.name.trim())return String(e.name).trim()}}catch{}let a=r[g];return typeof a==`string`&&a.trim()?String(a).trim():typeof n.name==`string`&&n.name.trim()?String(n.name).trim():``}async function v(t,n,r,i,a=()=>!0){if(r===0)return;let o=await _(t);if(a())try{let a={tokenId:t,tokenName:o,resource:n,delta:r,prevValue:i};await Promise.all([e.broadcast.sendMessage(p,a,{destination:`LOCAL`}),e.broadcast.sendMessage(p,a,{destination:`REMOTE`})])}catch{}}function y(n){let{container:r,getItemId:s,onChange:p}=n,m=[],h=null,g=0,_=new Set,y=l(s,()=>r.isConnected,()=>{g++;for(let e of[..._])e();k()},n.canWrite),C=e=>{let t=y.capture();return t?.id===e?t:null},T=``,E=null;w();let D=e.scene.items.onChange(()=>{k()});function O(){for(let e of m)try{I(e,null)}catch{}}async function k(){let t=y.capture(!1,!1),n=++g,i=s();if(!y.alive())return;if(!i){h=null,r.innerHTML=`<div class="rt-empty">${u(`rpNoToken`)}</div>`,m=[],T=``;return}if(!t)return;let o=[];try{o=await e.scene.items.getItems([i])}catch{return}if(!t.current()||n!==g)return;h!==i&&(h=i,m=[],T=``,r.innerHTML=``);let c=a(o[0]??null),l=JSON.stringify(c);if(l===T){m=c;return}let d=r.querySelector(`.rt-list`),f=m.length===0,p=c.length===0;if(!d||f&&!p||!f&&p){m=c,T=l,j();return}let _=new Map(m.map(e=>[e.id,e])),v=new Map(c.map(e=>[e.id,e]));for(let e of _.keys())v.has(e)||d.querySelector(`.rt-row[data-id="${S(e)}"]`)?.remove();let b=[...c].sort((e,t)=>(e.order??2**53-1)-(t.order??2**53-1));for(let e of b){let t=d.querySelector(`.rt-row[data-id="${S(e.id)}"]`);if(!t){let n=document.createElement(`div`);n.innerHTML=M(e),t=n.firstElementChild,d.appendChild(t),R(t);continue}let n=_.get(e.id);if(n&&n.type!==e.type){let n=document.createElement(`div`);n.innerHTML=M(e);let r=n.firstElementChild;t.replaceWith(r),R(r)}}m=c,T=l,O()}function A(){if(n.canWrite&&!n.canWrite()){for(let e of r.querySelectorAll(`input,button`))e.disabled=!0;for(let e of r.querySelectorAll(`[draggable]`))e.draggable=!1}}function j(){if(!s()){r.innerHTML=`<div class="rt-empty">${u(`rpNoToken`)}</div>`;return}if(m.length===0){r.innerHTML=`
        <div class="rt-empty-state">
          <div class="rt-empty-msg">${u(`rpNoResources`)}</div>
          <button class="rt-add-first" type="button">${u(`rpCreate`)}</button>
        </div>
      `,r.querySelector(`.rt-add-first`)?.addEventListener(`click`,()=>X()),A();return}r.innerHTML=`
      <div class="rt-list">${[...m].sort((e,t)=>(e.order??2**53-1)-(t.order??2**53-1)).map(M).join(``)}</div>
      <button class="rt-add" type="button">${u(`rpAdd`)}</button>
    `,R(),A()}function M(e){let t=``;switch(e.type){case`count`:t=N(e);break;case`bar`:t=P(e);break;case`number`:t=F(e);break}return`
      <div class="rt-row" data-id="${x(e.id)}">
        <div class="rt-row-head">
          <span class="rt-row-grip"
                data-action="row-grip"
                data-rid="${x(e.id)}"
                draggable="true"
                title="${x(u(`rpReorder`))}">≡</span>
          <div class="rt-row-name" title="${x(e.name)}">${b(e.name||u(`rtUnnamed`))}</div>
          <div class="rt-row-meta" data-meta>${e.current} / ${e.max}</div>
          <button class="rt-row-edit" type="button" data-edit-id="${x(e.id)}" title="${x(u(`rpEdit`))}">⚙</button>
        </div>
        <div class="rt-pills">${t}</div>
      </div>
    `}function N(e){let t=Math.max(0,Math.floor(e.max)),n=Math.max(0,Math.min(t,Math.floor(e.current))),r=[];for(let i=1;i<=t;i++){let t=i<=n;r.push(`
        <span class="rt-pill rt-pill-icon ${t?`full`:`spent`}"
              data-action="count-toggle"
              data-rid="${x(e.id)}"
              data-pos="${i}"
              title="${x(u(`rpPipTitle`).replace(`{name}`,e.name).replace(/\{i\}/g,String(i)))}">
          ${c[e.icon]??c.gem}
        </span>
      `)}return t===0&&r.push(`<span class="rt-pill-empty">${u(`rpMaxZero`)}</span>`),r.join(``)}function P(e){let t=Math.max(1,e.max),n=Math.max(0,Math.min(t,e.current)),r=n/t*100;return`
      <div class="rt-bar-num"
           data-bar-num
           data-action="value-edit"
           data-rid="${x(e.id)}"
           title="${x(u(`rpEditExpr`))}">${n} / ${t}</div>
      <div class="rt-bar"
           data-action="bar-drag"
           data-rid="${x(e.id)}"
           title="${x(u(`rpBarTitle`).replace(`{name}`,e.name))}">
        <div class="rt-bar-fill" data-bar-fill style="width:${r.toFixed(1)}%"></div>
        <span class="rt-bar-thumb"
              data-bar-thumb
              style="left:${r.toFixed(2)}%">
          ${c[e.icon]??c.gem}
        </span>
      </div>
    `}function F(e){let t=Math.max(0,e.max),n=e.current;return`
      <div class="rt-num-bar">
        <button class="rt-num-end" data-num-end="min" type="button" title="${x(u(`rpJumpMin`).replace(`{min}`,`0`))}">0</button>
        <button class="rt-num-step rt-num-minus"
                data-action="num-step"
                data-rid="${x(e.id)}"
                data-dir="-1"
                type="button"
                title="${x(e.name)} −1">−</button>
        <span class="rt-num-orb"
              data-rid="${x(e.id)}"
              title="${x(e.name)} ${n}/${t}">
          <span class="rt-num-orb-icon">${c[e.icon]??c.gem}</span>
          <span class="rt-num-orb-val"
                data-num-val
                data-action="value-edit"
                data-rid="${x(e.id)}"
                title="${x(u(`rpEditExpr`))}">${n}</span>
        </span>
        <button class="rt-num-step rt-num-plus"
                data-action="num-step"
                data-rid="${x(e.id)}"
                data-dir="+1"
                type="button"
                title="${x(e.name)} +1">+</button>
        <button class="rt-num-end" data-num-end="max" type="button" title="${x(u(`rpJumpMax`).replace(`{max}`,String(t)))}">${t}</button>
      </div>
    `}function I(e,t){let n=r.querySelector(`.rt-row[data-id="${S(e.id)}"]`);if(!n)return;let i=n.querySelector(`[data-meta]`);if(i&&(i.textContent=`${e.current} / ${e.max}`),e.type===`count`){let t=Math.max(0,Math.floor(e.max)),r=Math.max(0,Math.min(t,Math.floor(e.current)));n.querySelectorAll(`[data-action="count-toggle"]`).forEach(e=>{let t=parseInt(e.dataset.pos??`0`,10)<=r;e.classList.toggle(`full`,t),e.classList.toggle(`spent`,!t)})}else if(e.type===`bar`){let t=Math.max(1,e.max),r=Math.max(0,Math.min(t,e.current)),i=r/t*100,a=n.querySelector(`[data-bar-fill]`),o=n.querySelector(`[data-bar-num]`),s=n.querySelector(`[data-bar-thumb]`);a&&(a.style.width=`${i.toFixed(1)}%`),o&&!o.querySelector(`input`)&&(o.textContent=`${r} / ${t}`),s&&(s.style.left=`${i.toFixed(2)}%`)}else if(e.type===`number`){let t=n.querySelector(`[data-num-val]`);t&&!t.querySelector(`input`)&&(t.textContent=String(e.current))}t&&L(t)}function L(e){e.classList.remove(`rt-pulse`),e.offsetWidth,e.classList.add(`rt-pulse`),setTimeout(()=>e.classList.remove(`rt-pulse`),280)}function R(e){let t=s();if(!t)return;let n=e??r;n.querySelectorAll(`[data-action="count-toggle"]`).forEach(e=>{e.addEventListener(`click`,()=>void z(t,e)),e.addEventListener(`contextmenu`,n=>{n.preventDefault(),B(t,e)})}),n.querySelectorAll(`[data-action="bar-drag"]`).forEach(e=>{e.addEventListener(`pointerdown`,n=>V(t,e,n)),e.addEventListener(`contextmenu`,n=>{n.preventDefault(),H(t,e)})}),n.querySelectorAll(`[data-action="num-step"]`).forEach(e=>{e.addEventListener(`click`,()=>{U(t,e,e.dataset.dir===`+1`?1:-1)})}),n.querySelectorAll(`[data-action="num-orb"]`).forEach(e=>{e.addEventListener(`click`,()=>void W(t,e)),e.addEventListener(`contextmenu`,n=>{n.preventDefault(),G(t,e)})}),n.querySelectorAll(`[data-num-end]`).forEach(e=>{e.addEventListener(`click`,()=>void K(t,e))}),n.querySelectorAll(`[data-action="value-edit"]`).forEach(e=>{e.addEventListener(`click`,n=>{n.stopPropagation(),q(t,e)})}),n.querySelectorAll(`.rt-row-edit`).forEach(e=>{e.addEventListener(`click`,()=>{let t=e.dataset.editId??``,n=m.find(e=>e.id===t);n&&Z(n)})}),n.querySelectorAll(`[data-action="row-grip"]`).forEach(e=>{e.addEventListener(`dragstart`,t=>{let n=t,r=e.dataset.rid||``,i=e.closest(`.rt-row`);if(!r||!i){n.preventDefault();return}E=r;try{n.dataTransfer?.setData(`text/plain`,r)}catch{}n.dataTransfer&&(n.dataTransfer.effectAllowed=`move`),i.classList.add(`rt-dragging`)}),e.addEventListener(`dragend`,()=>{e.closest(`.rt-row`)?.classList.remove(`rt-dragging`),r.querySelectorAll(`.rt-row`).forEach(e=>{e.classList.remove(`rt-drop-above`,`rt-drop-below`)}),E=null})}),n.querySelectorAll(`.rt-row`).forEach(e=>{e.addEventListener(`dragover`,t=>{if(!E)return;let n=t;if(n.preventDefault(),n.dataTransfer&&(n.dataTransfer.dropEffect=`move`),e.dataset.id===E){e.classList.remove(`rt-drop-above`,`rt-drop-below`);return}let r=e.getBoundingClientRect(),i=n.clientY-r.top<r.height/2;e.classList.toggle(`rt-drop-above`,i),e.classList.toggle(`rt-drop-below`,!i)}),e.addEventListener(`dragleave`,()=>{e.classList.remove(`rt-drop-above`,`rt-drop-below`)}),e.addEventListener(`drop`,n=>{let r=n;r.preventDefault();let i=(r.dataTransfer?.getData(`text/plain`)||E||``).trim(),a=e.dataset.id||``,o=e.classList.contains(`rt-drop-above`);e.classList.remove(`rt-drop-above`,`rt-drop-below`),E=null,!(!i||!a||i===a)&&J(t,i,a,o?`before`:`after`)})}),e||r.querySelector(`.rt-add`)?.addEventListener(`click`,()=>X())}async function z(e,t){let n=t.dataset.rid,r=parseInt(t.dataset.pos??`0`,10),i=m.find(e=>e.id===n);if(!i)return;let a=r===i.current?r-1:r;a!==i.current&&await Y(e,i,a,a-i.current,t)}async function B(e,t){let n=t.dataset.rid,r=m.find(e=>e.id===n);!r||r.current>=r.max||await Y(e,r,r.max,r.max-r.current,t)}function V(e,t,n){let r=C(e);if(n.button!==0||!r)return;let i=t.dataset.rid,a=m.find(e=>e.id===i);if(!a)return;n.preventDefault(),t.setPointerCapture(n.pointerId);let o=a.current,s=Math.max(1,a.max),c=e=>{let n=t.getBoundingClientRect(),r=Math.max(0,Math.min(1,(e-n.left)/n.width));return Math.round(r*s)},l=o,u=c(n.clientX);if(u!==o){let e=m.findIndex(e=>e.id===a.id);if(e>=0){let t={...a,current:u};m=m.map((n,r)=>r===e?t:n),I(t,null),l=u}}let d=e=>{if(!r.current()){f();return}let t=c(e.clientX);if(t===l)return;let n=m.findIndex(e=>e.id===a.id);if(n<0)return;let i={...a,current:t};m=m.map((e,t)=>t===n?i:e),I(i,null),l=t},f=()=>{t.removeEventListener(`pointermove`,d),t.removeEventListener(`pointerup`,h),t.removeEventListener(`pointercancel`,p);try{t.releasePointerCapture(n.pointerId)}catch{}_.delete(f)},p=()=>{f(),T=``,r.current()&&k()},h=()=>{f(),!(!r.current()||l===o)&&Y(e,a,l,l-o,t,r)};_.add(f),t.addEventListener(`pointermove`,d),t.addEventListener(`pointerup`,h),t.addEventListener(`pointercancel`,p)}async function H(e,t){let n=t.dataset.rid,r=m.find(e=>e.id===n);if(!r)return;let i=r.current>=r.max?r.max:r.current+1;i!==r.current&&await Y(e,r,i,i-r.current,t)}async function U(e,t,n){let r=t.dataset.rid,i=m.find(e=>e.id===r);if(!i)return;let a=n>0?Math.min(i.max,i.current+1):Math.max(0,i.current-1);a!==i.current&&await Y(e,i,a,a-i.current,t)}async function W(e,t){let n=t.dataset.rid,r=m.find(e=>e.id===n);if(!r)return;let i=r.current<=0?r.max:0;i!==r.current&&await Y(e,r,i,i-r.current,t)}async function G(e,t){let n=t.dataset.rid,r=m.find(e=>e.id===n);r&&(r.current>=r.max||await Y(e,r,r.max,r.max-r.current,t))}async function K(e,t){let n=t.dataset.numEnd,r=t.closest(`.rt-row`)?.dataset.id??``,i=m.find(e=>e.id===r);if(!i)return;let a=n===`max`?i.max:0;a!==i.current&&await Y(e,i,a,a-i.current,t)}async function q(e,t){let n=C(e);if(!n)return;let r=t.dataset.rid;if(!r)return;let i=m.find(e=>e.id===r);if(!i||t.querySelector(`input`))return;t.innerHTML;let a=t.textContent||``,o=document.createElement(`input`);o.type=`text`,o.className=`rt-value-input`,o.value=String(i.current),o.placeholder=`+5 / -3 / max/2 / 10`,o.spellcheck=!1,o.autocomplete=`off`,t.textContent=``,t.appendChild(o),o.focus(),o.select();let s=!1,c=()=>{t.textContent=a},l=async()=>{if(s||(s=!0,!n.current()||!t.isConnected||!t.contains(o)))return;let r=o.value,a=d(r,i.current,i.max);if(c(),a==null)return;let l=Math.max(0,Math.min(i.max,Math.round(a*100)/100));l!==i.current&&await Y(e,i,l,l-i.current,null,n)},u=()=>{s||(s=!0,c())};o.addEventListener(`keydown`,e=>{e.key===`Enter`?(e.preventDefault(),l()):e.key===`Escape`&&(e.preventDefault(),u())}),o.addEventListener(`blur`,()=>{l()})}async function J(e,t,n,i){let a=C(e);if(!a)return;let s=[...m].sort((e,t)=>(e.order??2**53-1)-(t.order??2**53-1)),c=s.findIndex(e=>e.id===t);if(c<0)return;let[l]=s.splice(c,1),u=s.findIndex(e=>e.id===n);u<0?s.push(l):(i===`after`&&(u+=1),s.splice(u,0,l));let d=s.map((e,t)=>({...e,order:t}));m=d,T=JSON.stringify(d),Date.now()+800;let f=r.querySelector(`.rt-list`);if(f)for(let e of d){let t=f.querySelector(`.rt-row[data-id="${S(e.id)}"]`);t&&f.appendChild(t)}try{await o(e,d.map(e=>e.id),a.current),a.current()&&k()}catch(e){console.error(`[obr-suite/resources] commitReorder failed`,e)}}async function Y(e,t,n,r,a,o=C(e)){if(!o?.current()||n===t.current)return;g++;let s=m.findIndex(e=>e.id===t.id);if(s<0)return;let c={...t,current:n};m=m.map((e,t)=>t===s?c:e),T=JSON.stringify(m),Date.now()+800,I(c,a);let l=t.current,d=await i(e,t.id,e=>(l=e.current,{...e,current:n}),o.current);if(o.current()){if(!d){k();return}p?.({resourceName:d.name||u(`rtUnnamed`),delta:d.current-l,current:d.current,max:d.max}),v(e,d,d.current-l,l,o.current)}}function X(){let t=y.capture();if(!t)return;let n=t.id;try{e.broadcast.sendMessage(f,{itemId:n},{destination:`LOCAL`})}catch(e){console.warn(`[resource-tracker] openCreate broadcast failed`,e)}}function Z(t){let n=y.capture();if(!n||h!==n.id)return;let r=n.id;try{e.broadcast.sendMessage(f,{itemId:r,resource:t},{destination:`LOCAL`})}catch(e){console.warn(`[resource-tracker] openEdit broadcast failed`,e)}}function Q(){if(!y.alive())return;let e=(e,t)=>{r.querySelector(e)?.replaceChildren(document.createTextNode(u(t)))};e(`.rt-empty`,`rpNoToken`),e(`.rt-empty-msg`,`rpNoResources`),e(`.rt-add-first`,`rpCreate`),e(`.rt-add`,`rpAdd`);for(let e of m){let t=r.querySelector(`.rt-row[data-id="${S(e.id)}"]`);if(!t)continue;let n=(e,n)=>t.querySelectorAll(e).forEach(e=>{e.title=n,e.setAttribute(`aria-label`,n)});n(`.rt-row-grip`,u(`rpReorder`)),n(`.rt-row-edit`,u(`rpEdit`)),n(`[data-action="value-edit"]`,u(`rpEditExpr`)),n(`[data-action="bar-drag"]`,u(`rpBarTitle`).replace(`{name}`,e.name)),n(`[data-num-end="min"]`,u(`rpJumpMin`).replace(`{min}`,`0`)),n(`[data-num-end="max"]`,u(`rpJumpMax`).replace(`{max}`,String(e.max))),t.querySelectorAll(`[data-action="count-toggle"]`).forEach(t=>{t.title=u(`rpPipTitle`).replace(`{name}`,e.name).replace(/\{i\}/g,t.dataset.pos??``)}),t.querySelector(`.rt-pill-empty`)?.replaceChildren(document.createTextNode(u(`rpMaxZero`))),e.name||t.querySelector(`.rt-row-name`)?.replaceChildren(document.createTextNode(u(`rtUnnamed`)))}}let $=t(Q);return{refresh:k,unmount:()=>{y.dispose(),g++;for(let e of[..._])e();try{D(),$()}catch{}r.innerHTML=``}}}function b(e){return e.replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e])}function x(e){return b(e)}function S(e){return typeof window.CSS?.escape==`function`?window.CSS.escape(e):e.replace(/([!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~])/g,`\\$1`)}var C=!1;function w(){if(C)return;C=!0;let e=document.createElement(`style`);e.id=`obr-suite-resource-tracker-styles`,e.textContent=`
    .rt-empty, .rt-empty-msg { font-size:11.5px; color:#9aa0b3; padding:10px 6px; text-align:center }
    .rt-empty-state { display:flex; flex-direction:column; align-items:center; gap:8px; padding:14px 6px }
    .rt-add, .rt-add-first {
      height:28px; padding:0 14px; border-radius:6px;
      background:rgba(46,204,113,0.18);
      border:1px solid rgba(46,204,113,0.5);
      color:#7eecaf; font-size:12px; cursor:pointer;
      font-family:inherit; font-weight:600;
    }
    .rt-add:hover, .rt-add-first:hover { background:rgba(46,204,113,0.3); border-color:rgba(46,204,113,0.7) }
    .rt-add { display:block; margin:8px auto 0 }
    .rt-list { display:flex; flex-direction:column; gap:8px }
    .rt-row {
      background:rgba(255,255,255,0.04);
      border:1px solid rgba(255,255,255,0.08);
      border-radius:6px;
      padding:8px 10px;
      transition:background .12s, border-color .12s, transform .12s, opacity .12s;
    }
    /* 2026-05-14 — drag-reorder visual feedback. */
    .rt-row.rt-dragging {
      opacity:0.35;
      background:rgba(93,173,226,0.08);
      border-color:rgba(93,173,226,0.45);
    }
    .rt-row.rt-drop-above {
      box-shadow:0 -3px 0 0 #5dade2 inset;
    }
    .rt-row.rt-drop-below {
      box-shadow:0 3px 0 0 #5dade2 inset;
    }
    .rt-row-grip {
      cursor:grab;
      color:#9aa0b3;
      font-size:14px;
      line-height:1;
      padding:2px 4px;
      border-radius:4px;
      user-select:none;
      transition:background .12s, color .12s;
    }
    .rt-row-grip:hover { background:rgba(255,255,255,0.08); color:#e6e8ee }
    .rt-row-grip:active { cursor:grabbing }
    .rt-row-head { display:flex; align-items:center; gap:8px; margin-bottom:6px }
    .rt-row-name { flex:1; font-size:12px; font-weight:600; color:#e6e8ee; overflow:hidden; text-overflow:ellipsis; white-space:nowrap }
    .rt-row-meta { font-size:11px; color:#9aa0b3; font-variant-numeric:tabular-nums; transition:color .18s }
    .rt-row-edit {
      background:none; border:none; cursor:pointer; color:#9aa0b3;
      font-size:14px; padding:2px 4px; border-radius:4px;
      transition:background .12s, color .12s;
    }
    .rt-row-edit:hover { background:rgba(255,255,255,0.08); color:#e6e8ee }
    .rt-pills { display:flex; flex-wrap:wrap; gap:5px; align-items:center }
    .rt-pill-icon {
      display:inline-flex; align-items:center; justify-content:center;
      width:28px; height:28px;
      cursor:pointer;
      transition:filter .25s ease, opacity .25s ease, transform .15s ease;
      user-select:none;
    }
    .rt-pill-icon.full { filter:saturate(1) brightness(1); opacity:1 }
    .rt-pill-icon.spent { filter:saturate(0.15) brightness(0.55); opacity:0.55 }
    .rt-pill-icon:hover { transform:scale(1.12) }
    .rt-pill-icon svg { width:24px; height:24px; pointer-events:none }
    /* One-shot scale pulse fired by JS on click. The transform
       animation runs in addition to the .full / .spent crossfade so
       the user gets unambiguous feedback even when the colour change
       is small. */
    .rt-pill-icon.rt-pulse {
      animation:rt-pulse 0.28s cubic-bezier(.34,1.56,.64,1);
    }
    @keyframes rt-pulse {
      0%   { transform:scale(1); }
      40%  { transform:scale(1.45); }
      100% { transform:scale(1); }
    }
    .rt-pill-empty { font-size:11px; color:#9aa0b3; font-style:italic }

    /* ===== 进度 (bar) — number-prefix label + draggable thumb ====== */
    .rt-bar-num {
      flex:0 0 auto;
      font-size:11px; font-weight:700; color:#e6e8ee;
      font-variant-numeric:tabular-nums;
      letter-spacing:0.3px;
      padding:2px 6px;
      min-width:54px;
      text-align:center;
      cursor:pointer;
      border-radius:4px;
      transition:background .12s, color .12s;
    }
    /* 2026-05-14 — click-to-edit hover state for bar number. */
    .rt-bar-num:hover { background:rgba(93,173,226,0.15); color:#a3d1ec }
    /* Inline expression input — replaces the static number when
       clicked. Sized to roughly the same width so the bar doesn't
       jump in layout. */
    .rt-value-input {
      width:100%;
      min-width:64px;
      box-sizing:border-box;
      background:#1a1c24;
      color:#e6e8ee;
      border:1px solid #5dade2;
      border-radius:4px;
      padding:2px 4px;
      font-family:inherit;
      font-size:11px;
      font-weight:700;
      text-align:center;
      outline:none;
    }
    .rt-value-input:focus { border-color:#7ec8f0; box-shadow:0 0 0 1px rgba(126,200,240,0.4) }
    .rt-bar {
      flex:1; min-width:80px;
      height:22px;
      background:rgba(255,255,255,0.06);
      border:1px solid rgba(255,255,255,0.10);
      border-radius:11px; position:relative;
      cursor:grab; user-select:none;
      touch-action:none;
    }
    .rt-bar:active{cursor:grabbing}
    .rt-bar-fill {
      position:absolute; inset:0 auto 0 0;
      border-radius:11px 0 0 11px;
      background:linear-gradient(90deg, #16a34a, #4ade80);
      pointer-events:none;
    }
    .rt-bar-thumb {
      position:absolute; top:50%;
      width:26px; height:26px;
      transform:translate(-50%, -50%);
      display:inline-flex; align-items:center; justify-content:center;
      background:#1f2230;
      border:2px solid #4ade80;
      border-radius:50%;
      box-shadow:0 2px 6px rgba(0,0,0,0.4);
      color:#e6e8ee;
      pointer-events:none;
      z-index:1;
    }
    .rt-bar-thumb svg { width:18px; height:18px }
    /* Click-scale pulse for the bar — fires when a drag commits.
       Same animation as count-mode .rt-pulse but applied to .rt-bar. */
    .rt-bar.rt-pulse { animation: rt-bar-pulse 0.18s ease-out }
    @keyframes rt-bar-pulse {
      0% { transform: scale(1); }
      45% { transform: scale(1.03); }
      100% { transform: scale(1); }
    }

    /* ===== 数字 (number) — bar layout: MIN [−] orb [+] MAX ====== */
    .rt-num-bar {
      flex:1;
      display:grid;
      grid-template-columns:auto auto 1fr auto auto;
      gap:6px;
      align-items:center;
      padding:0 4px;
    }
    /* 2026-05-14 — promoted from <span> to <button>; styled to look
       like a peer to the rt-num-step ± buttons. Jumps current to 0
       (min) or max on click. */
    .rt-num-end {
      min-width:28px; height:24px;
      background:rgba(255,255,255,0.04);
      border:1px solid rgba(255,255,255,0.10);
      border-radius:6px;
      color:#cbd5e1;
      font-size:11px; font-weight:700;
      font-family:inherit;
      font-variant-numeric:tabular-nums;
      cursor:pointer;
      padding:0 6px;
      display:inline-flex; align-items:center; justify-content:center;
      transition:background .12s, border-color .12s, color .12s, transform .12s;
    }
    .rt-num-end:hover {
      background:rgba(93,173,226,0.15);
      border-color:rgba(93,173,226,0.45);
      color:#7ec8f0;
    }
    .rt-num-end:active { transform:scale(0.94) }
    .rt-num-step {
      width:24px; height:24px;
      background:rgba(255,255,255,0.06);
      border:1px solid rgba(255,255,255,0.12);
      border-radius:6px;
      color:#e6e8ee;
      font-size:14px; font-weight:800; line-height:1;
      font-family:inherit;
      cursor:pointer;
      display:flex; align-items:center; justify-content:center;
      transition:background .12s, border-color .12s, transform .12s;
    }
    .rt-num-step:hover { background:rgba(93,173,226,0.15); border-color:rgba(93,173,226,0.45); color:#7ec8f0 }
    .rt-num-step:active { transform:scale(0.94) }
    .rt-num-step.rt-pulse { animation: rt-pulse 0.22s ease-out }
    /* 2026-05-12 — orb redesign per user feedback. The previous round
       wrapped the icon in a 48px circle; user wanted the icon plain.
       Now the orb is just a transparent square sized to the icon, with
       the number overlayed using a layered text-shadow stroke that
       reads cleanly on any icon (the previous -webkit-text-stroke
       approach displayed poorly because it stroked the FILL not the
       outside, blurring the digit edges). */
    .rt-num-orb {
      justify-self:center;
      position:relative;
      width:44px; height:44px;
      display:inline-flex; align-items:center; justify-content:center;
      cursor:pointer;
      transition:transform .12s ease, filter .15s;
    }
    .rt-num-orb:hover { filter:brightness(1.18) }
    .rt-num-orb:active { transform:scale(0.94) }
    .rt-num-orb-icon {
      position:absolute; inset:0;
      display:flex; align-items:center; justify-content:center;
      color:#cbd5e1;
    }
    .rt-num-orb-icon svg { width:38px; height:38px; filter:drop-shadow(0 1px 2px rgba(0,0,0,0.65)) }
    /* Number overlay — pure layered-shadow stroke. Eight 1-px solid
       black offsets form a clean outline around the white digit; a
       4-px soft halo behind that lifts it off coloured icons.
       (-webkit-text-stroke was tried earlier; it strokes from the
       inside out and clips the strokes against the glyph fill,
       producing a thin/uneven look. Layered text-shadow stays
       outside the fill and reads sharp.) */
    .rt-num-orb-val {
      position:absolute; inset:0;
      display:flex; align-items:center; justify-content:center;
      font-family:ui-monospace,Consolas,monospace;
      font-size:18px; font-weight:900;
      color:#fff;
      text-shadow:
        -1px -1px 0 #000, 1px -1px 0 #000,
        -1px  1px 0 #000, 1px  1px 0 #000,
        -1px  0   0 #000, 1px  0   0 #000,
         0  -1px 0 #000, 0   1px 0 #000,
         0 0 4px rgba(0,0,0,0.95);
      font-variant-numeric:tabular-nums;
      /* 2026-05-14 — was pointer-events:none. Removed so click on the
         orb (which the user perceives as clicking the icon, since val
         sits on top of the icon at inset:0) actually triggers the
         value-edit handler. Previously the click bypassed val into
         the orb wrapper which has no JS handler, only the CSS :active
         scale animation — producing the "anim but no input" bug. */
      cursor:text;
    }
    .rt-num-orb.rt-pulse { animation: rt-pulse 0.28s cubic-bezier(.34,1.56,.64,1) }
  `,document.head.appendChild(e)}export{_ as n,l as r,y as t};