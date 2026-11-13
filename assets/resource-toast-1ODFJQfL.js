import"./modulepreload-polyfill-BZX172cq.js";import{d as e}from"./vendor-Bz4s8oZC.js";import{t}from"./channel-CvEHhc9Y.js";import{f as n,s as r}from"./sfx-broadcast-Cp0S3aGm.js";import{n as i}from"./icons-Vzb7fGc5.js";var a=`full-suite/ui-tone`,o=`full-suite/ui-night`,s=`dnd-card/ui-palette:v1`;function c(e){let t=e&&/^#[0-9a-f]{6}$/i.test(e)?e:`#50525B`;document.documentElement.style.setProperty(`--suite-tone`,t)}function l(e){document.documentElement.dataset.suiteNight=String(e)}function u(){let e={};try{e=JSON.parse(localStorage.getItem(s)||`{}`).ui||{}}catch{}for(let[t,n]of Object.entries({bg:`surface`,bg1:`heading`,bg2:`surface`,text:`ink`,muted:`muted`,border:`line`,accent:`accent`,"suite-paper":`surface`,"suite-surface":`heading`,"suite-ink":`ink`,"suite-muted":`muted`,"suite-line":`line`,"suite-tone":`accent`})){let r=e[n];/^#[0-9a-f]{6}$/i.test(r||``)?document.documentElement.style.setProperty(`--`+t,r):document.documentElement.style.removeProperty(`--`+t)}c(e.accent||localStorage.getItem(a))}function d(){try{c(localStorage.getItem(a)),l(localStorage.getItem(o)===`1`),u()}catch{c(),l(!1)}}d(),window.addEventListener(`storage`,e=>{(e.key===a||e.key===o||e.key===s||e.key===null)&&d()});var f=`com.obr-suite/resources/changed`,p=5e3,m=280,h=6,g=document.getElementById(`stack`);if(t){let e=document.createElement(`style`);e.textContent=`.toast{background:color-mix(in srgb,var(--suite-tone,#50525B) 94%,transparent);border-color:#ffffff50;color:#fff}.toast .head,.toast .name,.toast .who{color:#fff}.toast .rt-num-widget{background:#ffffff12}`,document.head.append(e)}function _(e){return String(e??``).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#39;`)}function v(e){return e>0?`delta-up`:e<0?`delta-down`:`delta-zero`}function y(e){return e===0?``:e>0?`+${e}`:`${e}`}function b(e){let t=Math.min(40,Math.max(0,Math.floor(e.max))),n=Math.max(0,Math.min(t,Math.floor(e.current))),r=[];for(let a=1;a<=t;a++){let t=a<=n;r.push(`
      <span class="rt-pill-icon ${t?`full`:`spent`}">
        ${i[e.icon]??i.gem}
      </span>
    `)}return`<div class="rt-pills">${r.join(``)}</div>`}function x(e){let t=Math.max(1,e.max),n=Math.max(0,Math.min(t,e.current)),r=n/t*100;return`
    <div class="rt-bar-row">
      <div class="rt-bar-num">${n} / ${t}</div>
      <div class="rt-bar">
        <div class="rt-bar-fill" style="width:${r.toFixed(1)}%"></div>
        <span class="rt-bar-thumb" style="left:${r.toFixed(2)}%">
          ${i[e.icon]??i.gem}
        </span>
      </div>
    </div>
  `}function S(e){let t=Math.max(0,e.max),n=e.current;return`
    <div class="rt-num-bar">
      <span class="rt-num-end">0</span>
      <span class="rt-num-step">−</span>
      <span class="rt-num-orb">
        <span class="rt-num-orb-icon">${i[e.icon]??i.gem}</span>
        <span class="rt-num-orb-val">${n}</span>
      </span>
      <span class="rt-num-step">+</span>
      <span class="rt-num-end">${t}</span>
    </div>
  `}function C(e){return e.type===`count`?b(e):e.type===`bar`?x(e):e.type===`number`?S(e):``}function w(e){let t=v(e.delta),n=e.resource,r=document.createElement(`div`);for(r.className=`toast ${t}`,e.summary?r.innerHTML=`<div class="head"><span class="name">${_(e.summary)}</span></div>`:r.innerHTML=`
    <div class="head">
      <span class="name">${_(n.name||`(未命名)`)}</span>
      ${e.tokenName?`<span class="who">· ${_(e.tokenName)}</span>`:``}
      <span class="delta">${_(y(e.delta))}</span>
    </div>
    ${e.redacted?``:`<div class="widget">${C(n)}</div>`}
  `;g.children.length>=h;){let e=g.firstElementChild;if(!e)break;e.remove()}g.appendChild(r),r.offsetWidth,r.classList.add(`is-in`),setTimeout(()=>{r.classList.remove(`is-in`),r.classList.add(`is-out`),setTimeout(()=>{try{r.remove()}catch{}},m)},p)}e.onReady(async()=>{let i=`PLAYER`,a=!1;e.player.onChange(e=>{a=!0,i=e.role});let[o,s]=await Promise.all([e.player.getId().catch(()=>e.player.id),e.player.getRole().catch(()=>`PLAYER`)]);a||(i=s),n();let c=`com.obr-suite/resources/toast-seen:${e.room.id}`,l=new Map;if(t)try{for(let[e,t]of JSON.parse(sessionStorage.getItem(c)||`[]`))typeof e==`string`&&typeof t==`number`&&Date.now()-t<12e4&&l.set(e,t)}catch{}let u=e=>{if(!e||!e.resource||!Number.isFinite(e.delta))return!1;e.privateFor&&i!==`GM`&&!e.privateFor.includes(o)?w({...e,summary:void 0,redacted:!0,tokenName:``,delta:0,resource:{...e.resource,name:e.privateSummary||`有人调整了资源`}}):w(e);let n=()=>{try{r()}catch{}};return t?document.visibilityState===`visible`?requestAnimationFrame(()=>setTimeout(n,0)):setTimeout(n,0):n(),!0};if(t){let t=new URLSearchParams(location.search).get(`noticeInstance`)||``,n=()=>e.broadcast.sendMessage(`com.obr-suite/resources/toast-ready`,{instance:t},{destination:`LOCAL`}).catch(()=>{});e.broadcast.onMessage(`com.obr-suite/resources/toast-deliver`,n=>{let{id:r,data:i,instance:a}=n.data||{};if(!(typeof r!=`string`||t&&a!==t)){if(!l.has(r)){if(!u(i))return;l.set(r,Date.now()),l.size>256&&l.delete(l.keys().next().value);try{sessionStorage.setItem(c,JSON.stringify([...l]))}catch{}}e.broadcast.sendMessage(`com.obr-suite/resources/toast-ack`,{id:r,instance:t||a},{destination:`LOCAL`}).catch(()=>{})}}),e.broadcast.onMessage(`com.obr-suite/resources/toast-probe`,e=>{e.data?.instance===t&&n()}),await n()}else e.broadcast.onMessage(f,e=>u(e.data))});