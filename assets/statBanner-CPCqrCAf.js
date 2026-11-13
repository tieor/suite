import{d as e}from"./vendor-Bz4s8oZC.js";import{r as t,t as n}from"./state-CiGplzoU.js";import{a as r,i,o as a,r as o}from"./statEdit-DzNDLbzE.js";import{r as s}from"./panel-bC0o_UhF.js";var c=()=>n()===`en`?`Supports 20 / +5 / -3 / 15+5`:`支持 20 / +5 / -3 / 15+5`,l=e=>({health:`当前生命值`,"max health":`总生命值`,"temporary health":`临时生命值`,"armor class":`AC`})[e]??c(),u=e=>n()===`en`?e?`Locked: players see the HP ratio without numbers or AC during combat`:`Unlocked: all players see full HP and AC`:e?`已上锁：玩家在战斗准备 / 战斗中只看到血条比例（无数值 / AC）`:`已解锁：所有玩家可见完整 HP / AC 数值`,d=e=>(n()===`en`?{health:`Hit points`,"max health":`Maximum hit points`,"temporary health":`Temporary hit points`,"armor class":`Armor Class`}:{health:`生命值`,"max health":`最大生命值`,"temporary health":`临时生命值`,"armor class":`护甲等级`})[e]??e;function f(e){return e.replace(/[&<>"']/g,e=>({"&":`&amp;`,"<":`&lt;`,">":`&gt;`,'"':`&quot;`,"'":`&#39;`})[e])}function p(e){let t=u(e);return`
    <button class="stat-lock" data-locked="${e?`true`:`false`}" title="${f(t)}" aria-label="${f(t)}" type="button">
      <svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
        <rect x="3" y="7" width="10" height="7" rx="1.5" fill="currentColor" stroke="none"/>
        <path class="lock-shackle" d="M5 7 V5 a3 3 0 0 1 6 0 V7"/>
      </svg>
    </button>
  `}function m(e,t,n,r){let i=typeof e.health==`number`?e.health:n.health??0,a=typeof e[`max health`]==`number`?e[`max health`]:n[`max health`]??0,o=typeof e[`temporary health`]==`number`?e[`temporary health`]:n[`temporary health`]??0,s=typeof e[`armor class`]==`number`?e[`armor class`]:n[`armor class`]??10;return`
    <div class="stat-banner">
      <div class="hp-pill" style="--hp-ratio: ${(a>0?Math.max(0,Math.min(1,i/a)):1).toFixed(3)}">
        <span class="stat-cell">
          <span class="prev-hint" data-prev></span>
          <input class="stat-input" type="text" inputmode="numeric"
                 data-field="health" value="${f(String(i))}"
                 title="当前生命值">
        </span>
        <span class="slash" title="输入+x或-x可自动计算">/</span>
        <span class="stat-cell">
          <span class="prev-hint" data-prev></span>
          <input class="stat-input" type="text" inputmode="numeric"
                 data-field="max health" value="${f(String(a))}"
                 title="总生命值">
        </span>
      </div>
      <div class="temp-pill stat-cell">
        <span class="prev-hint" data-prev></span>
        <input class="stat-input" type="text" inputmode="numeric"
               data-field="temporary health" value="${f(String(o))}"
               title="临时生命值">
      </div>
      <div class="ac-pill stat-cell">
        <span class="prev-hint" data-prev></span>
        <input class="stat-input" type="text" inputmode="numeric"
               data-field="armor class" value="${f(String(s))}"
               title="AC">
      </div>
      ${r&&r.length?`<button class="stat-more" type="button" title="接触 AC / 措手不及" aria-label="接触 AC / 措手不及"></button>`:``}
      ${t?p(e.locked!==!1):``}
    </div>
  `}var h=`
.stat-banner{
  display:flex;align-items:center;gap:8px;
  padding:4px 2px;
}
.stat-banner .hp-pill{
  flex:1;
  position:relative;isolation:isolate;overflow:hidden;
  display:flex;align-items:center;justify-content:center;gap:2px;
  min-height:34px;padding:0 12px;
  background:linear-gradient(135deg,#3a1a18,#4a221d);
  border:1px solid rgba(231,76,60,0.7);
  border-radius:18px;
  color:#fff;font-weight:800;font-size:17px;letter-spacing:0.3px;
  box-shadow:0 2px 6px rgba(231,76,60,0.32),0 0 0 1px rgba(0,0,0,0.18) inset;
}
.stat-banner .hp-pill::before{
  content:"";position:absolute;inset:0;z-index:0;pointer-events:none;
  background:linear-gradient(135deg,#c0392b,#e94560);
  width:calc(var(--hp-ratio, 1) * 100%);
  transition:width 0.18s ease-out;
}
.stat-banner .hp-pill > *{position:relative;z-index:1}
.stat-banner .hp-pill .slash{
  font-size:14px;font-weight:400;opacity:0.55;margin:0 1px;
  pointer-events:none;
}
.stat-banner .temp-pill{
  flex-shrink:0;width:36px;height:36px;border-radius:50%;
  background:linear-gradient(135deg,#f5a3c7,#ee7eaa);
  border:1px solid rgba(232,138,174,0.75);
  display:flex;align-items:center;justify-content:center;
  color:#fff;font-weight:800;font-size:13px;
  box-shadow:0 2px 6px rgba(232,138,174,0.30),0 0 0 1px rgba(0,0,0,0.18) inset;
}
.stat-banner .ac-pill{
  flex-shrink:0;width:38px;height:42px;
  background:linear-gradient(135deg,#7ec8f0,#3498db);
  border:1px solid rgba(52,152,219,0.7);
  clip-path:polygon(0% 8%,100% 8%,100% 60%,50% 100%,0% 60%);
  display:flex;align-items:center;justify-content:center;
  color:#fff;font-weight:800;font-size:14px;padding-bottom:8px;
  filter:drop-shadow(0 2px 4px rgba(52,152,219,0.40));
}
.stat-banner .stat-cell{
  position:relative;
  display:flex;align-items:center;justify-content:center;
  cursor:text;
}
.stat-banner .hp-pill .stat-cell{flex:1;align-self:stretch}
.stat-banner .temp-pill,.stat-banner .ac-pill{cursor:text}
.stat-banner .stat-cell .prev-hint{
  position:absolute;left:50%;bottom:calc(100% + 3px);
  transform:translateX(-50%);
  font-size:9.5px;font-weight:700;letter-spacing:0.3px;
  color:rgba(255,255,255,0.92);
  background:rgba(7,19,32,0.78);
  padding:1px 6px;border-radius:8px;
  pointer-events:none;white-space:nowrap;
  opacity:0;transition:opacity .12s, transform .12s;z-index:20;
}
.stat-banner .stat-cell.editing .prev-hint{
  opacity:1;transform:translateX(-50%) translateY(-2px);
}
.stat-banner .stat-input{
  background:transparent;border:none;color:inherit;
  font-family:inherit;font-weight:inherit;font-size:inherit;
  text-align:center;outline:none;padding:0;
  font-variant-numeric:tabular-nums;
  width:100%;height:100%;cursor:text;
  caret-color:rgba(255,255,255,0.9);
}
.stat-banner .stat-input:focus{
  text-decoration:underline;
  text-decoration-color:rgba(255,255,255,0.65);
  text-decoration-thickness:1px;text-underline-offset:2px;
}
.stat-banner .stat-lock{
  flex-shrink:0;width:28px;height:28px;
  display:flex;align-items:center;justify-content:center;
  background:rgba(190,24,24,0.38);
  border:1px solid rgba(248,113,113,0.95);
  border-radius:7px;cursor:pointer;color:#fecaca;
  box-shadow:0 0 0 2px rgba(127,29,29,0.28),0 0 12px rgba(248,113,113,0.35);
  margin-left:auto;padding:0;
  transition:filter .12s, background .12s, border-color .12s, color .12s;
}
.stat-banner .stat-lock:hover{filter:brightness(1.18)}
.stat-banner .stat-lock[data-locked="false"]{
  background:transparent;border-color:transparent;
  color:rgba(255,255,255,0.48);box-shadow:none;
}
.stat-banner .stat-lock[data-locked="false"] .lock-shackle{
  d:path("M5 7 V5 a3 3 0 0 1 6 0");
}
.stat-banner .stat-more{
  flex:none;width:26px;height:22px;border-radius:3px;margin-left:-8px;margin-top:3px;align-self:flex-start;
  background:#3498db;border:1px solid #5dade2;color:#fff;
  font-size:13px;font-weight:700;line-height:1;cursor:pointer;
  display:flex;align-items:center;justify-content:center;
  appearance:none;-webkit-appearance:none;padding:0;
}
.stat-banner .stat-more:hover{background:#4aa8e6}
.stat-banner .stat-more:active{transform:scale(0.94)}
.stat-banner .stat-more-tip{
  position:fixed;left:50%;top:2px;transform:translateX(-50%);z-index:9999;
  background:#111;color:#f2f2f2;border:1px solid rgba(255,255,255,0.25);
  border-radius:5px;padding:6px 10px;font-size:11.5px;white-space:nowrap;
  display:flex;flex-direction:column;gap:2px;
  box-shadow:0 4px 16px rgba(0,0,0,0.5);
}
.stat-banner .stat-more-tip b{color:#9ecbf0;margin-left:8px}
`,g=!1;function _(){if(g)return;g=!0;let e=document.createElement(`style`);e.textContent=h,document.head.appendChild(e)}function v(n){let{container:c,getItemId:f,isGM:p,fallback:h={},initialLive:g,secondary:v}=n;_();let y=0,b=0,x=0,S=f(),C=g??{},w=s(f,()=>c.isConnected,()=>{y++,b++,T(),A()},n.canWrite);function T(){if(!w.alive())return;c.querySelectorAll(`.stat-input`).forEach(e=>{e.title=l(e.dataset.field??``),e.setAttribute(`aria-label`,d(e.dataset.field??``)),e.disabled=!w.capture()});let e=c.querySelector(`.stat-lock`);e&&(e.hidden=!p||!w.isGM(),e.style.display=e.hidden?`none`:``,e.title=u(e.dataset.locked!==`false`),e.setAttribute(`aria-label`,e.title))}function E(e,t=!0){C=e;for(let n of[`health`,`max health`,`temporary health`,`armor class`]){let r=c.querySelector(`.stat-input[data-field="${n}"]`);!r||t&&document.activeElement===r||(r.value=String(e[n]??h[n]??(n===`armor class`?10:0)))}let n=e.health??h.health??0,r=e[`max health`]??h[`max health`]??0;c.querySelector(`.hp-pill`)?.style.setProperty(`--hp-ratio`,(r>0?Math.max(0,Math.min(1,n/r)):1).toFixed(3));let i=c.querySelector(`.stat-lock`);i&&(i.dataset.locked=String(e.locked!==!1)),T()}async function D(e,t){if(!e.current())return;y++;let n=++x,i=b,a=await r(e.id,t,e.current);!e.current()||n!==x||i!==b||(Object.keys(a).length?E(a):E(C))}function O(){c.querySelector(`.stat-more`)?.addEventListener(`click`,e=>{e.preventDefault(),e.stopPropagation();let t=c.querySelector(`.stat-banner`);if(!t)return;let n=t.querySelector(`.stat-more-tip`);if(n){n.remove();return}let r=document.createElement(`div`);r.className=`stat-more-tip`;for(let e of v||[]){let t=document.createElement(`span`);t.textContent=e.label;let n=document.createElement(`b`);n.textContent=String(e.value),t.appendChild(n),r.appendChild(t)}t.appendChild(r),setTimeout(()=>r.remove(),5e3)}),c.querySelector(`.stat-lock`)?.addEventListener(`click`,()=>{let e=w.capture(!0);e&&D(e,{locked:C.locked===!1})}),c.querySelectorAll(`.stat-input[data-field]`).forEach(e=>{let t=e.dataset.field,n=e.value,r=null,a=e.closest(`.stat-cell`),s=a?.querySelector(`.prev-hint`);e.addEventListener(`focus`,()=>{r=w.capture(),n=e.value,s&&(s.textContent=n),a?.classList.add(`editing`);let t=r;requestAnimationFrame(()=>{t?.current()&&r===t&&document.activeElement===e&&(e.value=``)})}),e.addEventListener(`blur`,()=>{a?.classList.remove(`editing`);let s=r;if(r=null,!s?.current())return;let c=e.value.trim();if(!c){e.value=n;return}let l=i(c,Number(n)||0);if(l===null){e.value=n;return}c!==n&&D(s,{[t]:o(t,l)})}),e.addEventListener(`keydown`,t=>{t.key===`Enter`?(t.preventDefault(),e.blur()):t.key===`Escape`&&(t.preventDefault(),r=null,e.value=n,e.blur())})})}function k(e){c.innerHTML=m(e,p,h,v),C=e,O(),T()}k(C);async function A(){let e=w.capture(!1,!1),t=++y;if(!e)return;let n=await a(e.id);!e.current()||t!==y||(b++,S===e.id?E(n):(S=e.id,k(n)))}let j=e.scene.items.onChange(()=>{A()}),M=t(T);return{refresh:A,unmount(){w.dispose(),y++,x++,j(),M(),c.innerHTML=``}}}export{v as t};