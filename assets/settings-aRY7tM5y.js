const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/debugOverlay-BC2hYfAU.js","assets/rolldown-runtime-DQNNOcW4.js","assets/vendor-Bz4s8oZC.js","assets/perfWindow-DmPz53yi.js","assets/asset-base-BZqtjgEU.js","assets/panelLayout-Dkizz3yk.js","assets/viewportAnchor-Dvmzxlcd.js","assets/cross-scene-cards-DO4pYujZ.js","assets/state-CiGplzoU.js"])))=>i.map(i=>d[i]);
import"./modulepreload-polyfill-BZX172cq.js";import{d as e}from"./vendor-Bz4s8oZC.js";import{t}from"./asset-base-BZqtjgEU.js";import{c as n,d as r,i,l as a,n as o,o as s,r as c,t as l,u}from"./state-CiGplzoU.js";import{t as d}from"./preload-helper-DJ1cPJE1.js";import{t as f}from"./defineProperty-LIdGOy3t.js";import{n as p}from"./protocol-CxwdG1dX.js";import{c as m,l as h,n as g,s as _}from"./feature-flags-CAkhZFaz.js";import{t as ee}from"./default-image-Cf7g3WLa.js";import{i as v,r as y,t as te}from"./preferences-CL1EJntr.js";import{s as ne}from"./localContent-DfR9Vqgp.js";import{n as re}from"./i18n-C848ggUy.js";import{t as b}from"./icons-C1wiNtux.js";var x=new URLSearchParams(location.search).get(`workbench`)===`1`,S=new URLSearchParams(location.search).get(`section`)===`features`,ie=e=>e.replace(/<[^>]*>/g,``).replace(/"/g,`&quot;`).trim(),ae=`full-suite/ui-night`,oe=()=>{try{return localStorage.getItem(ae)===`1`}catch{return!1}},C=(e,t,n,r)=>`<div class="row"><span class="lbl">${e}</span><button class="tog ${n?`on`:``}" data-key="${t}" aria-label="${e}" aria-pressed="${n}" ${r?``:`disabled`}></button></div>`,se={hpBar:`生命条组件`,inventory:`背包与公共仓库`};function ce(e,t){let n=document.createElement(`div`);return n.innerHTML=e,[...n.querySelectorAll(t.join(`,`))].map(e=>e.outerHTML).join(``)}function w(e,t){let n=document.createElement(`div`);n.innerHTML=e;let r=n.querySelector(`p`);r&&(r.innerHTML=r.innerHTML.replace(`所有代码开源于 GitHub`,`当前版本附带对应源码`).replace(`with all code open-sourced on GitHub`,`with corresponding source provided alongside this version`));let i=n.querySelector(`.note`);return i&&(i.innerHTML=t?`The character-card web app uses the project non-commercial share-alike license. The original Owlbear suite and third-party components retain their respective licenses. <a href="../workbench/LICENSING.md" target="_blank">License details</a>`:`角色卡网页采用项目非商用共享许可；原枭熊套件和第三方组件保留各自许可证。<a href="../workbench/LICENSING.md" target="_blank">许可说明</a>`),n.innerHTML}function le(e){let t=e.filter(e=>e.moduleId&&e.id!==`follow`&&e.id!==`fogEditor`).map(e=>({id:e.moduleId,zh:e.id===`search`?`规则资料 / Wiki`:e.zh,en:e.id===`search`?`Rules / Wiki`:e.en}));for(let[e,n]of Object.entries(se))t.some(t=>t.id===e)||t.push({id:e,zh:n,en:n});return S?[{id:`features`,zh:`功能开关`,en:`Features`,dynamicBody:(e,n)=>`<div class="feature-toggle-grid">`+t.map(t=>`<div class="row feature-toggle-row"><span class="lbl">${e===`zh`?t.zh:t.en}</span><button class="tog ${o().enabled[t.id]?`on`:``}" data-feature="${t.id}" aria-label="${ie(e===`zh`?t.zh:t.en)}" aria-pressed="${!!o().enabled[t.id]}" ${n?``:`disabled`}></button></div>`).join(``)+`</div>`,afterRender:(e,t)=>e.querySelectorAll(`[data-feature]`).forEach(e=>e.addEventListener(`click`,async()=>{if(t){e.disabled=!0;try{await u({enabled:{[e.dataset.feature]:!o().enabled[e.dataset.feature]}})}finally{e.disabled=!1}}}))}]:[{id:`appearance`,zh:`界面`,en:`Appearance`,dynamicBody:()=>`<label class="night-mode"><input id="ui-night" type="checkbox" ${oe()?`checked`:``}>黑夜模式</label>`,afterRender:e=>{e.querySelector(`#ui-night`).addEventListener(`change`,e=>{let t=e.target.checked;document.documentElement.dataset.suiteNight=String(t),localStorage.setItem(ae,t?`1`:`0`),parent.postMessage({channel:`workbench-panel-frame/v1`,night:t},location.origin)})}},{id:`scope`,zh:`同步`,en:`Sync`,dynamicBody:(e,t)=>C(e===`zh`?`房间内共享功能设置和规则`:`Share settings and rules across scenes`,`crossSceneSyncSettings`,o().crossSceneSyncSettings,t),afterRender:(e,t)=>e.querySelector(`[data-key]`)?.addEventListener(`click`,async()=>{t&&await u({crossSceneSyncSettings:!o().crossSceneSyncSettings})})},...[`search`,`initiative`,`dice`,`portals`,`bossBar`,`bubbles`,`dynamicFog`,`support`].map(t=>e.find(e=>e.id===t)).filter(Boolean).map(e=>({...e,moduleId:void 0,body:e.id===`support`&&e.body?{zh:w(e.body.zh,!1),en:w(e.body.en,!0)}:void 0,dynamicBody:e.dynamicBody?((t,n)=>{let r=e.dynamicBody(t,n);return e.id===`search`?C(t===`zh`?`玩家可查看怪物图鉴`:`Players can view the bestiary`,`allowPlayerMonsters`,o().allowPlayerMonsters,n)+C(t===`zh`?`Wiki 仅 DM 可见`:`Wiki visible to GM only`,`searchGmOnly`,o().searchGmOnly,n):e.id===`portals`?`<div id="portal-default-host"></div>`:[`initiative`,`dice`,`bossBar`,`bubbles`,`search`].includes(e.id)?ce(r,[`.row:not(:has([data-key="bubblesRepairLegacyHide"]))`]):r}):void 0}))]}var ue=class{constructor(e){f(this,`previous`,void 0),f(this,`composing`,!1),f(this,`pending`,void 0),f(this,`saveErrors`,new Map),this.root=e,e.addEventListener(`compositionstart`,()=>{this.composing=!0}),e.addEventListener(`compositionend`,()=>{setTimeout(()=>{this.composing=!1;let e=this.pending;this.pending=void 0,e&&this.render(e)})})}field(e){return this.fields().find(t=>t.dataset.settingsDraft===e)}fields(){return Array.from(this.root.querySelectorAll(`input[data-settings-draft], textarea[data-settings-draft]`))}render(e){let t=this.previous,n=t?.scope===e.scope,r=t?.editable===e.editable;if(n&&r&&t?.language===e.language&&t.html===e.html)return this.pending=void 0,!1;if(this.composing&&n&&r)return this.pending=e,!1;this.pending=void 0,this.composing=!1,n||this.saveErrors.clear();let i=new Map,a=this.root.ownerDocument.activeElement,o=n&&a&&this.root.contains(a)?a.dataset.settingsDraft:void 0;if(n)for(let e of this.fields())i.set(e.dataset.settingsDraft,{value:e.value,dirty:e.value!==e.defaultValue,start:e.selectionStart,end:e.selectionEnd,direction:e.selectionDirection});let s=this.root.scrollTop,c=this.root.scrollLeft,l=new Map(Array.from(this.root.querySelectorAll(`details[class]`)).map(e=>[e.className,e.open]));this.root.innerHTML=e.html,this.previous=e,e.afterRender?.();for(let t of this.fields()){let n=t.dataset.settingsDraft,r=i.get(n);if(!r)continue;if(r.dirty&&r.value!==t.value){let n=t.value;t.value=r.value;let i=e.language===`zh`?`（空）`:`(empty)`,a=t.hasAttribute(`data-settings-local`)?e.language===`zh`?`未提交的输入已保留。`:`Your unsaved input is preserved.`:e.language===`zh`?`未提交的输入已保留。当前已保存值：${n||i}`:`Your unsaved input is preserved. Current saved value: ${n||i}`;this.note(t,a)}let a=this.saveErrors.get(n);a&&t.value!==t.defaultValue?this.showSaveError(n,a):this.saveErrors.delete(n),n===o&&!t.disabled&&(t.focus({preventScroll:!0}),r.start!==null&&r.end!==null&&t.setSelectionRange(r.start,r.end,r.direction??`none`))}if(n){for(let e of this.root.querySelectorAll(`details[class]`)){let t=l.get(e.className);t!==void 0&&(e.open=t)}this.root.scrollTop=s,this.root.scrollLeft=c}return!0}showSaveError(e,t){let n=this.field(e);if(!n)return;this.saveErrors.set(e,t);let r=this.previous?.language!==`en`,i=n.defaultValue||(r?`（空）`:`(empty)`),a=this.note(n,r?`保存失败，输入已保留。当前已保存值：${i}`:`Save failed. Your input is preserved. Current saved value: ${i}`),o=document.createElement(`button`);o.type=`button`,o.textContent=r?`重试`:`Retry`,o.style.marginInlineStart=`6px`,o.disabled=n.disabled||n.readOnly,o.addEventListener(`click`,t),a.append(o)}clearNote(e){this.saveErrors.delete(e);let t=this.field(e);t&&this.removeNote(t)}removeNote(e){for(let t of this.root.querySelectorAll(`[data-settings-note]`))t.dataset.settingsNote===e.dataset.settingsDraft&&t.remove()}note(e,t){this.removeNote(e);let n=document.createElement(`span`);return n.dataset.settingsNote=e.dataset.settingsDraft,n.setAttribute(`role`,`status`),n.style.cssText=`display:block;font-size:11px;color:var(--text-dim);overflow-wrap:anywhere`,n.textContent=t,(e.closest(`[data-settings-line]`)??e).insertAdjacentElement(`afterend`,n),n}};function de(e,t,n,r){let i=JSON.stringify([t?.id,t?.status,t?.desired,t?.slow,t?.error,n]);if(e.dataset.statusSignature===i||(e.dataset.statusSignature=i,e.replaceChildren(),!t||t.status===`off`&&!t.desired||t.status===`on`))return;let a=n===`zh`,o=document.createElement(`span`);if(o.textContent=t.status===`off`?a?`等待启动`:`Waiting to start`:t.status===`starting`?a?t.slow?`仍在启动…`:`启动中…`:t.slow?`Still starting…`:`Starting…`:t.status===`stopping`?a?`停止中…`:`Stopping…`:a?`此设备运行异常`:`Error on this device`,t.error&&(o.title=t.error),e.append(o),t.status!==`error`)return;let s=document.createElement(`button`);s.type=`button`,s.textContent=a?`重试`:`Retry`,s.title=a?`仅重试此设备，不修改房间开关`:`Retry on this device without changing the room setting`,s.style.marginInlineStart=`6px`,s.addEventListener(`click`,async()=>{s.disabled=!0;try{await r(t.id)}catch{o.textContent=a?`重试请求未送达，请再试一次`:`Retry request failed. Please try again.`}finally{s.disabled=!1}}),e.append(s)}function fe(e,t,n,r){let i=t===`zh`,a=(e,t,r,i)=>`<div class="row"><div class="lbl">${t}<div class="desc">${r}</div></div><button class="tog ${i?`on`:``}" data-key="${e}" type="button" ${n?``:`disabled`} aria-label="${t}" aria-pressed="${i}"></button></div>`;return`<h3>${i?`玩家视野`:`Player vision`}</h3>
    ${a(`fogShareVision`,i?`玩家共享视野`:`Share party vision`,i?`关闭：各自使用自己的视野。开启：共享队伍成员已授权的视野，隐藏单位与 NPC 不会自动加入。`:`Off: use your own vision. On: share authorized party vision. Hidden units and NPCs are not automatically included.`,e.fogShareVision)}
    ${a(`fogFilled`,i?`填充地图迷雾`:`Fill map with fog`,i?`需要打开地图的迷雾填充，视野范围和墙壁遮挡才会显现。`:`Enable the scene's fog fill to see vision ranges and wall occlusion.`,!1)}
    <p>${i?`DM 右键单位 → <b>添加光源 / 光源设置</b>，设置范围和视野归属。已分配玩家的角色卡可自动识别；普通玩家自行创建的角色也可加入队伍视野。`:`GM: right-click a token → <b>Add Light / Light Settings</b> for range and vision ownership. Assigned character cards and ordinary player-created characters are recognized automatically.`}</p>
    <details class="fog-light-options"><summary>${i?`照明与高级选项`:`Lighting and advanced options`}</summary>
      ${a(`fogLightOcclusion`,i?`遮挡视线外的照明`:`Occlude lights beyond sight`,i?`没有无遮挡视线时隐藏其他灯光。关闭只改变照明显示，不会把 NPC 的视野共享给玩家。自动归属的环境光保留公开照明与视野；明确归属和私密角色设置优先。`:`Hide other lights without an unobstructed sight line. Turning this off does not grant NPC vision. Automatic ambient lights retain public lighting and vision; explicit ownership and private-card settings take precedence.`,e.fogLightOcclusion)}
      <p>${i?`主光源和辅助光源需要视野授权；次光源只照亮已经可见的区域。视野归属可选：全部玩家（明确的全体授权，没有角色卡的光源也可见）、自动归属（按已绑定角色卡或创建者识别，开启共享视野后全队可用）、指定玩家、仅主持人。角色卡详情的私密设置不影响共享视野。离线成员的普通视野暂不共享，重连后恢复。`:`Primary and auxiliary lights require vision permission. Secondary lights illuminate already visible areas. Vision owner can be set to All players (an explicit grant that also covers lights with no card), Automatic (the bound card owner or the character creator; shared vision lets the party use such sources), one player, or GM only. Private card details stay private when vision is shared. Offline-player vision leaves the pool until they reconnect.`}</p>
      ${r?a(`fogPlayerDoors`,i?`玩家可以开关普通门`:`Players can operate doors`,i?`允许玩家开关普通门；窗户和密门由 DM 管理。`:`Allow players to open and close ordinary doors. Windows and secret doors are controlled by the GM.`,e.fogPlayerDoors)+a(`fogDoorOverlayAlways`,i?`DM 常显门窗标记`:`Always show GM opening markers`,i?`不选迷雾工具时也显示。`:`Keep markers visible without selecting the fog tool.`,e.fogDoorOverlayAlways):``}
    </details>
    <details class="fog-authoring-help"><summary>${i?`墙壁与使用帮助`:`Walls and setup help`}</summary>
      <p>${i?`FOG 图层的图形和地图迷雾编辑器保存的轮廓会生成原生墙壁，遮挡视线并阻挡单位移动。`:`FOG-layer drawings and map-fog-editor outlines become native walls that block vision and token movement.`}</p>
      <p>${i?`窗户始终可以看穿：关闭时阻挡单位移动，打开后允许通过。由 DM 点击窗户切换开关。`:`Windows always let vision through. Closed windows block token movement; open windows allow passage. The GM clicks a window to open or close it.`}</p>
      <p>${r?i?`迷雾工具中可画直线墙和门窗：O 普通门、I 窗户、U 密门；沿墙拖动放置，点击开关，Alt+点击或双击删除。`:`Use the fog tool to draw straight walls and openings: O for doors, I for windows, U for secret doors. Drag along a wall to place, click to toggle, Alt-click or double-click to remove.`:i?`本频道可使用地图迷雾编辑器、墙壁遮挡和光源。额外的门窗绘制与操作工具目前由测试频道提供。`:`This channel supports the map fog editor, walls and lights. Additional opening-authoring tools are currently available in the dev channel.`}</p>
      <p>${i?`同一房间只启用一份迷雾引擎：套件与官方 Dynamic Fog 同时运行会重复生成墙和灯。稳定版与测试版也不要同时安装；两者共用房间设置和场景数据。`:`Use one fog engine per room. Running the suite alongside official Dynamic Fog duplicates walls and lights. Install either the stable or dev suite in a room; both use the same scene data and settings.`}</p>
    </details>${n?``:`<p class="role-notice">${i?`房间规则由 DM 设置`:`Room rules are set by the GM`}</p>`}`}var pe=`https://ko-fi.com/fullpeople`,T=`1538519473@qq.com`,me=`https://github.com/FullPeople`,E=`com.obr-suite/bubbles/settings`,D=25,O=-20,k=`canvas`,A=x?S?`features`:`appearance`:`support`,j=!1,M=!x,N=D,P=!1,F=O,I=!1,L=!1,R=k;function z(e){let t=e[E],n=Number(t?.playerThreshold);return Number.isFinite(n)&&n>=0&&n<=100?n:D}function B(e){return!!e[E]?.autoScaleText}function V(e){let t=e[E],n=Number(t?.verticalOffset);return Number.isFinite(n)?n:O}function he(e){return!!e[E]?.offsetByText}function ge(e){return!!e[E]?.overheadMode}function _e(e){return e[E]?.anchorMode===`box`?`box`:k}async function ve(){try{let t=await e.scene.getMetadata();N=z(t),P=B(t),F=V(t),I=he(t),L=ge(t),R=_e(t)}catch{N=D,P=!1,F=O,I=!1,L=!1,R=k}}async function H(){j&&await e.scene.setMetadata({[E]:{playerThreshold:N,autoScaleText:P,verticalOffset:F,offsetByText:I,overheadMode:L,anchorMode:R}})}async function ye(e){N=Math.max(0,Math.min(100,Math.round(e))),await H()}async function be(e){P=!!e,await H()}async function xe(e){F=Math.max(-200,Math.min(200,Math.round(e))),await H()}async function Se(e){I=!!e,await H()}async function Ce(e){L=!!e,await H()}async function we(e){R=e===`box`?`box`:k,await H()}var Te={zh:`
    <p>这套插件由 <b>弗人 FullPeople</b> 利用业余时间开发，所有代码开源于 GitHub。如果这个插件真的让你感到惊喜，欢迎以下方式支持作者：</p>
    <div class="support-row">
      <a class="support-btn kofi" href="${pe}" target="_blank" rel="noopener"><span class="ic">${b.coffee}</span> Support on Ko-fi</a>
      <span class="qr-pair" title="微信 / 支付宝">
        <img class="qr-thumb" src="${t(`wx.png`)}" alt="微信" loading="lazy">
        <img class="qr-thumb" src="${t(`zfb.jpg`)}" alt="支付宝" loading="lazy">
      </span>
    </div>
    <h3>${b.heart} 改编与鸣谢</h3>
    <div class="thanks-call-to-action">
      <p>本插件由 <b>瑞依</b> 基于原版 Full Suite 改编为 <b>PF1E</b> 规则版本。</p>
      <p>原版作者：<b>FullPeople</b>（<a href="${me}" target="_blank">GitHub</a>，GPL-3.0）。感谢原作者的辛勤付出。修改说明与完整源码：<a href="https://github.com/tieor/suite-source" target="_blank">tieor/suite-source</a>。</p>
      <p>如有侵权，请联系 <a href="mailto:${T}"><code>${T}</code></a> 删除。</p>
    </div>
  `,en:`
    <p>This plugin suite is built by <b>FullPeople</b> in spare time, with all code open-sourced on GitHub. If this plugin genuinely surprised you, here are ways to support the author:</p>
    <div class="support-row">
      <a class="support-btn kofi" href="${pe}" target="_blank" rel="noopener"><span class="ic">${b.coffee}</span> Support on Ko-fi</a>
      <span class="qr-pair" title="WeChat / Alipay (CN)">
        <img class="qr-thumb" src="${t(`wx.png`)}" alt="WeChat Pay" loading="lazy">
        <img class="qr-thumb" src="${t(`zfb.jpg`)}" alt="Alipay" loading="lazy">
      </span>
    </div>
    <h3>${b.heart} Adaptation & credits</h3>
    <div class="thanks-call-to-action">
      <p>This build is adapted for <b>PF1E</b> by <b>Ruiyi</b> from the original Full Suite.</p>
      <p>Original author: <b>FullPeople</b> (<a href="${me}" target="_blank">GitHub</a>, GPL-3.0). Thanks to the original author. Source: <a href="https://github.com/tieor/suite-source" target="_blank">tieor/suite-source</a>.</p>
      <p>For infringement removal, contact <a href="mailto:${T}"><code>${T}</code></a>.</p>
    </div>
  `},Ee={zh:`<p><b>用法</b>：右键画布或角色 → <em>开启时停</em>。</p>
<ul>
  <li>屏幕上下淡入<b>电影黑边</b>，提醒玩家暂停</li>
  <li>玩家<b>无法操作画布</b>（拖动 / 删除 / 选中）</li>
  <li><b>DM 不受影响</b>，可继续摆放怪物 / 修改地图</li>
  <li>时停期间加入的玩家也自动进入时停状态</li>
</ul>`,en:`<p><b>Usage</b>: right-click canvas or token → <em>Start Time Stop</em>.</p>
<ul>
  <li><b>Cinema black bars</b> fade in top and bottom</li>
  <li>Players <b>can't interact</b> with the canvas</li>
  <li><b>DM keeps full control</b> — keep editing the map freely</li>
  <li>Players who join mid-stop also see the frozen state</li>
</ul>`},De={zh:`<p><b>用法</b>：右键画布 → <em>全员聚焦到此处</em>，或点 cluster 的「<b>同步视口</b>」。</p>
<ul>
  <li><b>所有玩家</b>的摄像头瞬移到指定位置</li>
  <li>cluster 按钮：选中 token 时聚焦该 token，未选中时聚焦<b>当前视口中心</b></li>
</ul>`,en:`<p><b>Usage</b>: right-click canvas → <em>Focus everyone here</em>, or press cluster's <b>Sync Viewport</b>.</p>
<ul>
  <li>Every player's camera pans to the target instantly</li>
  <li>Cluster button: focuses the selected token, falling back to <b>current viewport centre</b></li>
</ul>`};`${b.dragon}`,`${b.dragon}`;var Oe={zh:`<p>在车卡网站编辑角色，导出<b>完整 JSON 备份</b>，再上传到插件。网站与枭熊共用一种 JSON，旧枭熊 JSON 仍可导入。</p><ul><li>通过「角色卡界面」或 CapsLock 打开五页阅读器。</li><li>拖入 JSON / XLSX 或点击上传；卡旁 ↻ 可用新文件更新。</li><li>旧插件提供角色阅读与棋子绑定；编辑角色请前往车卡网站。</li><li>暂时恢复原 2014 / 2024 悲灵角色卡 XLSX 导入；不支持 .xls。</li></ul>`,en:`<p>Create and edit a character on the website, then upload its <b>complete JSON backup</b>. The website and Owlbear share one format; legacy Owlbear JSON is still accepted.</p><ul><li>Open the five-page reader from Character Cards or CapsLock.</li><li>Drop or upload JSON / XLSX; use ↻ to update it from a new file.</li><li>Edit characters on the website. XLSX import is temporarily restored for the supported 2014 / 2024 Chinese sheet templates; .xls is not supported.</li></ul>`},ke={zh:`<p>顶部居中的横向先攻条，覆盖完整 D&amp;D 战斗流程。</p>
<ul>
  <li><b>加入</b>：右键角色 → <em>加入先攻</em>（支持框选多个）</li>
  
  <li><b>切换回合</b>：所有人摄像头自动聚焦到当前角色</li>
  <li><b>集结</b>：右键空白处 → <em>集结先攻角色</em>（螺旋排列）</li>
  <li><b>owner 玩家</b>可投自己的先攻、改加值、点结束按钮自动进入下一回合</li>
  <li>卡片<b>顶部</b>显示血条遮罩（与 bubbles 一致），底部数字 = 骰值 / 最终值 双模切换</li>
</ul>`,en:`<p>Top-center horizontal initiative strip — full D&amp;D combat flow.</p>
<ul>
  <li><b>Add</b>: right-click a token → <em>Add to initiative</em> (box-select supported)</li>
  
  <li><b>Turn change</b>: every camera auto-focuses on the active token</li>
  <li><b>Gather</b>: right-click empty space → <em>Gather initiative tokens</em> (spiral layout)</li>
  <li><b>Owner-players</b> can roll their own initiative, edit modifier, and end their own turn</li>
  <li>Each card has an <b>HP fill bar</b> on top (matches bubbles) + raw / final-value toggle for the count footer</li>
</ul>`},Ae={zh:`<p>完整的骰子系统：表达式 / 多目标 / 历史 / 回放 / 音效。点击屏幕左上角的 OBR 动作按钮（<b>d20 图标</b>）打开主面板。</p>

<details class="rules-collapse">
  <summary><b>表达式语法</b>（点击展开 · 在面板里输入或保存为组合）</summary>
  <ul>
    <li><code>2d6 + 1d20 + 5</code> — 标准混合表达式</li>
    <li><code>1d20-1d6</code> — 减骰（被减项半透明显示，仍参与动画）</li>
    <li><code>adv(1d20)</code> / <code>dis(1d20)</code> — 优势 / 劣势（败方淡出）</li>
    <li><code>adv(1d20, 2)</code> — 精灵之准（投 3 组取最高）</li>
    <li><code>max(1d20, 10)</code> / <code>min(1d20, 15)</code> — 保底 / 封顶</li>
    <li><code>reset(1d20, 12)</code> — 等于 12 时重投一次</li>
    <li><code>resetmin(1d20, 5)</code> — ≤5 时重投一次</li>
    <li><code>resetmax(1d20, 18)</code> — ≥18 时重投一次</li>
    <li><code>burst(2d6)</code> — 术法爆发：每个最大点追加一颗，链长上限 5</li>
    <li><code>same(2d20)</code> — 重复值高亮</li>
    <li><code>repeat(3, 1d20+5)</code> — 重复 3 次，每行独立总和</li>
    <li>嵌套自由：<code>adv(max(1d20, 10) + 5)</code>。中文括号/逗号自动识别</li>
    <li><kbd>Enter</kbd> 直接发送；输入 <code>(</code> 自动补 <code>)</code></li>
  </ul>
</details>

<p><b>多目标 / 集体掷骰</b></p>
<ul>
  <li>多选 token 后投掷 → 自动给每个 token 各掷一次（独立的骰子值），摄像头框选所有目标的包围盒</li>
  <li>历史里集体骰合并为一行，绿色"集体 N"标签</li>
  <li>玩家只选 1 个或没选时：自动用其唯一拥有的角色 token；DM 必须显式选中</li>
</ul>

<p><b>暗骰</b>（DM 专属）</p>
<ul>
  <li>面板下方紫色"暗骰"按钮 / 怪物面板左键 / 组合卡的暗骰</li>
  <li>仅 DM 自己的客户端可见；玩家不接收任何信号</li>
  <li>无选中 token 时也可投，结果飘在屏幕中央，DM 自己的历史记录会显示"暗"标签</li>
</ul>

<p><b>历史浮窗</b>（左下角，集群"投骰记录"开关控制）</p>
<ul>
  <li>每个玩家一行，显示其最后一次投骰</li>
  <li>点击行 → 平滑滑入该玩家的全部历史；返回按钮回主列表</li>
  <li>详情里点条目 → 在所有相关 token 头顶显示气泡（骰子图标 + 总和 + 标签 + 投骰人颜色）；点空白处关闭气泡</li>
  <li>暗骰条目只在 DM 自己客户端可见</li>
</ul>

<p><b>5etools 联动 / 角色卡联动</b></p>
<ul>
  <li>搜索 / 怪物图鉴里的所有 <code>{@dice}</code>、<code>{@damage}</code>、<code>{@hit}</code> 等标签都可点击直接投</li>
  <li>角色卡六维的属性缩写 = 豁免，修正 = 检定；技能和武器整行都可点</li>
  <li>怪物面板：左键暗骰 / 右键明骰</li>
  <li>玩家小卡底部的"特性 / 专长 / 法术"小盒 → 点击自动填入搜索框</li>
</ul>

<p><b>音效</b>：用 Web Audio API 实时合成（无需下载素材）。 抛物线 / 缩放冲击 / 数字飞行 / 旋转 / 爆炸 / 同值钟铃 / 大成功大失败闪光 / 同步视野 / 切换回合"登"声。可在 <b>基础设置</b> 里关闭，本地保存（每个玩家独立）。</p>

<p style="font-size:11px;color:#9aa0b3;margin-top:10px">骰子图标来源：<a href="https://www.flaticon.com/" target="_blank" rel="noopener">flaticon</a> · 作者 <a href="https://www.flaticon.com/authors/freepik" target="_blank" rel="noopener">Freepik</a></p>
<p style="font-size:11px;color:#9aa0b3;margin-top:4px">骰子音效：Sound Effect by <a href="https://pixabay.com/users/freesound_community-46691455/" target="_blank" rel="noopener">freesound_community</a> and ksjsbwuil from <a href="https://pixabay.com/" target="_blank" rel="noopener">Pixabay</a></p>`,en:`<p>Full tactical-dice system: expressions / multi-target / history / replay / SFX. Click the OBR action button at the top-left (<b>d20 icon</b>) to open the main panel.</p>

<details class="rules-collapse">
  <summary><b>Expression syntax</b> (click to expand · type into the panel or save as combos)</summary>
  <ul>
    <li><code>2d6 + 1d20 + 5</code> — standard mixed expression</li>
    <li><code>1d20-1d6</code> — subtraction dice (subtracted die rendered semi-transparent)</li>
    <li><code>adv(1d20)</code> / <code>dis(1d20)</code> — advantage / disadvantage</li>
    <li><code>adv(1d20, 2)</code> — Elven Accuracy (roll 3 sets, take highest)</li>
    <li><code>max(1d20, 10)</code> / <code>min(1d20, 15)</code> — floor / ceiling</li>
    <li><code>reset(1d20, 12)</code> — reroll once when result equals 12</li>
    <li><code>resetmin(1d20, 5)</code> — reroll once when value ≤ 5</li>
    <li><code>resetmax(1d20, 18)</code> — reroll once when value ≥ 18</li>
    <li><code>burst(2d6)</code> — spell-burst (each max face adds another die, chain ≤ 5)</li>
    <li><code>same(2d20)</code> — duplicate-value highlight</li>
    <li><code>repeat(3, 1d20+5)</code> — N independent rows, each with its own total</li>
    <li>Nests freely: <code>adv(max(1d20, 10) + 5)</code>. CN parens / commas auto-recognized</li>
    <li><kbd>Enter</kbd> rolls; <code>(</code> auto-closes to <code>()</code></li>
  </ul>
</details>

<p><b>Multi-target / collective rolls</b></p>
<ul>
  <li>Select multiple tokens, then roll → each token gets its own independent dice values; camera fits a bounding box around all targets</li>
  <li>History collapses the batch into one row tagged "集体 N" (Collective N)</li>
  <li>Player auto-fallback: when nothing is selected and the player owns exactly one visible token, that token is used. DM must always explicitly select.</li>
</ul>

<p><b>Dark roll</b> (DM only)</p>
<ul>
  <li>Purple 暗骰 button at the panel bottom / left-click on monster panel / dark-roll button on combo cards</li>
  <li>Only the DM's own client receives — players see nothing</li>
  <li>Works without a selected token (dice float at viewport center). DM's history shows the 暗 tag</li>
</ul>

<p><b>History popover</b> (bottom-left, toggled via the cluster's "投骰记录" button)</p>
<ul>
  <li>One row per player, showing their most recent roll</li>
  <li>Click row → slide-in detail of that player's full history; back button returns</li>
  <li>Click an entry inside detail → speech-bubbles appear above every involved token (dice icons + total + label + roller's color); click empty area to dismiss</li>
  <li>Dark-roll entries appear only in the DM's local view</li>
</ul>

<p><b>5etools / character card integration</b></p>
<ul>
  <li>All <code>{@dice}</code> / <code>{@damage}</code> / <code>{@hit}</code> tags in search results + bestiary entries are click-to-roll</li>
  <li>Character card abilities: ability abbr = save, modifier = check; skill + weapon rows fully clickable</li>
  <li>Monster panel: left-click = dark roll / right-click = open roll</li>
  <li>Card bottom's "Features / Feats / Spells" chips → click fills the cluster search input</li>
</ul>

<p><b>Sound effects</b>: synthesized live via Web Audio API (no asset downloads). Parabola / scale punch / number fly / spin / burst / same chime / crit-fail flashes / sync-viewport / next-turn 登. Toggle in <b>Basics</b> tab; saved locally (per-player).</p>

<p style="font-size:11px;color:#9aa0b3;margin-top:10px">Dice icon: <a href="https://www.flaticon.com/" target="_blank" rel="noopener">flaticon</a> · by <a href="https://www.flaticon.com/authors/freepik" target="_blank" rel="noopener">Freepik</a></p>
<p style="font-size:11px;color:#9aa0b3;margin-top:4px">Dice SFX: Sound Effect by <a href="https://pixabay.com/users/freesound_community-46691455/" target="_blank" rel="noopener">freesound_community</a> and ksjsbwuil from <a href="https://pixabay.com/" target="_blank" rel="noopener">Pixabay</a></p>`},je={zh:`<p>左侧 tool 栏的「<b>圆形图片 / 去底</b>」是个<b>本地图片处理 + 上传到 OBR 资源库</b>的小工具，做<b>圆形头像 / 临时 token / 去白底立绘</b>等场景标记很方便。</p>
<p><b>两种处理模式</b>（顶部标签切换）：</p>
<ul>
  <li><b>圆形裁剪</b>：拖图进去 → 画面里 <b>拖动 = 平移、滚轮 = 缩放</b>（也有滑块）→ 可加自定义颜色 + 宽度的<b>外环</b>（宽度 0 = 不画环）→ 输出方形 PNG，圆外是透明</li>
  <li><b>白底黑底剔除</b>：自动把纯白 / 纯黑背景变透明，<b>容差</b>调多大算"接近背景色"，<b>羽化</b>让边缘平滑过渡（避免锯齿）。适合从立绘 / 怪物素描里抠掉白底</li>
</ul>
<p><b>导入</b>：弹窗里 <b>拖图 / 点击选择 / Ctrl+V 粘贴</b>，支持 JPG / PNG / WebP / SVG，最大 10 MB。</p>
<p><b>用法</b>：调好后点底部绿色「<b>添加到资源库</b>」按钮 → 图片自动上传到你的 OBR 资源库 → 之后从 OBR 自带的资源库面板<b>拖到场景</b>使用（跟你导入任何其他图片到 OBR 是同一个流程）。<b>不会出现在玩家的资源库里</b>——是你账号下的私人资源。</p>
<p style="font-size:11px;color:#9aa0b3;margin-top:8px"><em>为什么不直接拖到场景？因为 OBR 的 Image item 不收 data URL，本地图片只能走 OBR 资源库这一条路。如果以后 OBR 开放直拖 API 了，会改回原来的"拖到指定位置"的体验。</em></p>`,en:`<p>The <b>Circle Image / BG Remove</b> tool on the left rail is a tiny <b>local image processor that uploads to your OBR asset library</b>. Useful for making circular avatars, ad-hoc tokens, or stripping white backgrounds off character portraits.</p>
<p><b>Two modes</b> (switch via the tabs at the top):</p>
<ul>
  <li><b>Circle crop</b>: drop an image, <b>drag = pan</b> the source / <b>scroll = zoom</b> (or use sliders), add an optional coloured <b>rim ring</b> (width 0 = no ring). Output is a square PNG with transparent corners.</li>
  <li><b>BG remove</b>: zero out alpha on pixels close to pure white (or pure black). <b>Tolerance</b> = how far from the target colour still counts as "background"; <b>feather</b> smooths the alpha cut-off so edges aren't jagged. Great for stripping the white backing off character portraits.</li>
</ul>
<p><b>Import</b>: in the popover, <b>drop / click / paste</b> (Ctrl+V) an image. JPG / PNG / WebP / SVG up to 10 MB.</p>
<p><b>Use</b>: click the green <b>"Add to Library"</b> button at the bottom → the image uploads to your OBR asset library → drag from there to your scene with OBR's normal library-drag gesture (same flow as importing any other image to OBR). The asset is private to your account, not visible to players' libraries.</p>
<p style="font-size:11px;color:#9aa0b3;margin-top:8px"><em>Why not drop straight onto the canvas? OBR's Image items don't accept data URLs in <code>image.url</code>; locally-generated images have to go through the asset library. If OBR ever exposes a direct-blob spawn API we'll restore the original drag-to-position UX.</em></p>`},Me={zh:`<p>左侧 tool 栏的「<b>跟随</b>」工具用来给一个 token 绑定<b>自动跟随</b>另一个 token 的关系。<b>DM 限定</b>。</p>
<ul>
  <li><b>开始绑定</b>：在 tokenA 上右键 → 跟随 → 自动切到「跟随绑定」工具，tokenA 与鼠标之间画出蓝色虚线</li>
  <li><b>完成绑定</b>：左键点击想要跟随的 tokenB，立即生效。系统记录此时 tokenA / tokenB 的<b>相对偏移</b>，之后无论 tokenB 怎么走，tokenA 都保持这个相对位置（典型场景：宠物跟主人 / 队尾跟队首）</li>
  <li><b>解除绑定</b>：右键 tokenA → <b>取消跟随</b></li>
  <li><b>触发时机</b>：OBR 的 API 只在<b>松手提交</b>那一刻把新位置告诉我们，所以跟随是在 tokenB 每次拖拽完成后<b>立刻</b>同步——不是 token 拖拽过程中实时跟，但延迟一般 &lt; 100ms</li>
  <li><b>循环检测</b>：如果绑定会形成循环（A 跟 B、B 跟 A），系统会拒绝并弹通知</li>
  <li><b>多客户端</b>：所有客户端都能看到跟随效果，但只有 DM 能创建 / 删除绑定</li>
</ul>`,en:`<p>The <b>Follow</b> tool on the left rail binds a token to <b>auto-follow</b> another token. <b>GM only</b>.</p>
<ul>
  <li><b>Bind</b>: right-click tokenA → Follow → auto-switches to the "Follow Bind" tool; a dashed blue line tracks from tokenA to your cursor</li>
  <li><b>Confirm</b>: left-click the target tokenB. The plugin captures the current <b>relative offset</b> between them — from now on, whenever tokenB moves, tokenA snaps back to that same offset (pets following players, formation rear, etc.)</li>
  <li><b>Unbind</b>: right-click tokenA → <b>Stop Following</b></li>
  <li><b>Timing</b>: OBR only delivers a token's new position at <b>drag commit</b> (mouse release), not mid-drag. So the follower jumps the instant tokenB releases — typically &lt; 100ms latency, feels live</li>
  <li><b>Cycle detection</b>: bindings that would form a loop (A→B, B→A) are rejected with a notification</li>
  <li><b>Multi-client</b>: all clients see the follow movement, but only the GM can create / delete bindings</li>
</ul>`},Ne={zh:`<p><b>变身</b>为 CHARACTER 图层 token 增加右键菜单：选择怪物图鉴里的生物后，token 图片、尺寸、名称、怪物图鉴绑定、HP / AC 数据会一起切换；右键 <b>解除变身</b> 会回到上一个状态。</p>
<ul>
  <li><b>DM 使用</b>：DM 右键任何角色 token → <b>变身</b>，弹出怪物图鉴选择形态。</li>
  <li><b>玩家授权</b>：DM 在变身图鉴顶部开启「授权玩家」，并填写类型和 CR 范围。例如类型填「野兽」、最高 CR 填 6，则该 token 的 Owner 玩家只能选择 CR 6 及以下的野兽。</li>
  <li><b>默认关闭玩家入口</b>：未对 token 保存授权时，玩家端右键菜单不会显示「变身」。</li>
  <li><b>血量模式</b>：弹窗顶部可选「独立计算」或「角色卡为准」。独立计算会在变身期间使用怪物 HP，并在解除时恢复原角色卡 HP；角色卡为准会在绑定角色卡时保留角色卡 HP、忽略怪物 HP。</li>
  <li><b>解除变身</b>：变身后的 token 右键会出现「解除变身」，DM 和该 token 的 Owner 玩家都可以使用。</li>
  <li><b>嵌套变身</b>：连续变多次会压栈；解除一次只回退到上一个形态。</li>
</ul>`,en:`<p><b>Transform</b> adds a context-menu action to CHARACTER tokens. Pick a creature from the Bestiary and the token image, size, name, bestiary binding, and HP / AC metadata switch together. <b>Revert</b> restores the previous state.</p>
<ul>
  <li><b>GM use</b>: right-click any character token → <b>Transform</b>, then pick a form from the Bestiary.</li>
  <li><b>Player permission</b>: in the transform picker header, the GM can enable owner access and set type / CR limits. For example, type <code>beast</code> and max CR <code>6</code> lets the token owner pick beasts up to CR 6.</li>
  <li><b>Off by default</b>: until a token has permission saved, players do not see Transform in the context menu.</li>
  <li><b>HP mode</b>: the picker header can use independent monster HP while transformed, restoring the previous character-card HP on revert, or keep bound character-card HP and ignore monster HP.</li>
  <li><b>Revert</b>: transformed tokens get a Revert context-menu action usable by the GM and the token owner.</li>
  <li><b>Nested forms</b>: multiple transforms stack; each revert returns to the previous form.</li>
</ul>`},Pe={zh:`<p>左侧 tool 栏的「<b>陷阱</b>」用于在场景里画出隐藏的触发圆——指定的 token 一旦走进圆里，就会自动开启<b>时停</b>并把镜头聚焦到它身上，做<b>伏击触发器</b> / 暗门 / 陷阱很方便。</p>
<ul>
  <li><b>新建</b>：选中工具，地图上<b>拖拽画圆</b> → 松手即建。圆心放紫色 SVG 标记，半径为触发范围</li>
  <li>松手会弹出编辑面板：取名 / 选触发对象（所有 / 仅玩家 / 仅 NPC）/ 一次性 / 玩家可见 / 锁定。<b>取消</b>等于不创建，<b>保存</b>则提交</li>
  <li>编辑已有触发区时，点取消只是关面板，不会删除</li>
  <li><b>默认玩家不可见</b>：玩家完全看不到那个紫圈，DM 仍能看到半透明残影；这样才有"伏击"的味道</li>
  <li><b>仅触发一次</b>（默认开）：触发后自动锁定，玩家再走进去也不会重复触发，可在面板里"重置已触发"重新启用</li>
  <li><b>限制说明</b>：OBR 的 API 只在拖拽<b>松手提交</b>那一刻把新位置告诉我们，做不到"拖到一半就触发"——所以严格来说时停是<b>松手瞬间</b>触发的，不过延迟一般 &lt; 100ms，体感跟"边走边触发"差不多</li>
</ul>`,en:`<p>The <b>Trickster Marker</b> tool on the left rail places hidden trigger circles. When a target token drag-commits into the circle, the plugin auto-fires <b>Time Stop</b> + camera focus on the entering token — perfect for <b>ambush triggers</b>, hidden traps, scripted reveals.</p>
<ul>
  <li><b>Create</b>: activate the tool, <b>click-drag a circle</b> → release to commit. Magenta SVG marker at the centre, drag distance = trigger radius</li>
  <li>Release pops the edit panel: name / target group (all / players only / NPCs only) / one-shot / player-visible / locked. <b>Cancel</b> = don't create, <b>Save</b> = commit</li>
  <li>Editing an existing trickster, Cancel just closes the panel — doesn't delete the item</li>
  <li><b>Hidden from players by default</b>: players can't see the marker at all, DM still sees a translucent ghost. That's the whole point</li>
  <li><b>One-shot</b> (default on): after firing, the marker auto-locks; re-entering won't re-trigger. Use "Reset" in the panel to re-arm</li>
  <li><b>Caveat</b>: OBR's API only delivers a token's new position at <b>drag-commit</b> (mouse release), not mid-drag. So time stop fires the instant the player releases the drag — typically &lt; 100ms latency, feels like "fires while moving"</li>
</ul>`},Fe={zh:`<p>左侧 tool 栏的「<b>传送门</b>」用于在场景里画出可触发的传送圆。</p>
<ul>
  <li><b>新建</b>：选中工具，地图上<b>拖拽画圆</b> → 松手即建。圆心放 SVG 标记，半径为触发范围</li>
  <li><b>命名</b>：松手弹编辑面板。「名字」和「标签」均带预设；点 <em>+ 添加当前</em> 把当前输入存为预设</li>
  <li>面板<b>关闭即保存</b>，<em>取消</em>则还原原值</li>
  <li><b>同标签互联</b>：玩家拖 token 进入任一传送门 → 弹选项选同标签目的地；多选时所有 token 以六边形<b>集结</b>到目的地</li>
  <li>DM 点击已有传送门 → 编辑面板可改名 / 改标签（删除请用 OBR 自带的删除）</li>
  <li>把传送门设为<b>不可见</b>（OBR visible=false）→ 玩家看不见也无法触发，但<b>仍能作为目的地</b>，做单向传送很合用</li>
</ul>`,en:`<p>The <b>Portal</b> tool on the left rail draws teleport circles in your scene.</p>
<ul>
  <li><b>Create</b>: activate the tool, <b>click-drag a circle</b> on the map → release to commit. SVG marker at the centre, drag distance = trigger radius</li>
  <li><b>Name</b>: edit panel pops on release. Both "Name" and "Tag" support presets; click <em>+ Add current</em> to save the current input as a preset</li>
  <li>Panel <b>auto-saves on close</b>; <em>Cancel</em> reverts</li>
  <li><b>Same-tag portals link</b>: dragging a token into any visible portal lets the player pick a same-tag destination; multi-select gathers everyone in a hex spiral</li>
  <li>DM clicks an existing portal → edit panel rename / re-tag (use OBR's native delete to remove)</li>
  <li>Set a portal to <b>invisible</b> (OBR visible=false) → players can't see or enter it, but it <b>still works as a destination</b>. Perfect for one-way teleports</li>
</ul>`},Ie={zh:`<p>右上角搜索栏，<b>5etools 全分类</b>联想。</p>
<ul>
  <li><b>位置</b>：搜索栏在屏幕<em>哪一侧</em>就向反方向展开；上半屏详情向下，下半屏详情向上</li>
  <li><b>覆盖</b>：怪物 / 法术 / 物品 / 职业 / 子职业 / 子职能力 / 种族 / 子种族 / 背景 / 专长 / 灵能 / 状态 / 神祇 / 表格 / 整本书 …</li>
  <li><b>悬停</b>词条 → 右侧浮出详情；<b>点击</b>词条钉住</li>
  <li>结果受<em>基础设置 → 数据版本</em>过滤；玩家能否查怪物由本页下方开关控制</li>
  <li>角色卡 / 怪物面板的特性、法术、武器属性 chip 都能点击 → 自动填入本搜索栏</li>
</ul>
<p style="color:#f5c876;font-size:11.5px;margin-top:8px"><b>📱 手机端</b>：搜索栏不注册（5etools 全索引太占内存）。手机玩家请在桌面/平板上查。</p>`,en:`<p>Top-right search bar + <b>full 5etools</b> autocomplete.</p>
<ul>
  <li><b>Position</b>: the bar expands AWAY from whichever screen edge it sits on; top half pushes detail down, bottom half pushes it up</li>
  <li><b>Covers</b>: monsters / spells / items / classes / subclasses / subclass-features / races / subraces / backgrounds / feats / psionics / conditions / deities / tables / books …</li>
  <li><b>Hover</b> an entry → right pane shows details; <b>click</b> to pin</li>
  <li>Filtered by <em>Basics → Data version</em>; player monster-search gated by the toggle below</li>
  <li>Card / monster-panel feature, spell, and weapon-property chips are all click-to-search</li>
</ul>
<p style="color:#f5c876;font-size:11.5px;margin-top:8px"><b>📱 Mobile</b>: the search bar isn't registered (the 5etools dataset is too memory-heavy on phones). Use a desktop / tablet for lookups.</p>`},Le={zh:`你是一个 D&D 5E 数据格式工程师。请把我下面提供的怪物 / 法术 / 物品资料，转换为符合 5etools 数据规范的 JSON 文件，可直接通过"📁 本地内容"导入到枭熊插件（无需托管）。

输出要求：
1. 按以下顶层结构产出 JSON 文件（整个文件就是一个 JSON 对象，顶层只有一个键）：
   - 怪物：{ "monster": [ {...}, {...} ] }
   - 法术：{ "spell":   [ {...}, {...} ] }
   - 物品：{ "item":    [ {...}, {...} ] }
2. 每个条目至少包含字段：
   - "name": 中文名称
   - "ENG_name": 英文名称（无英文则用拼音）
   - "source": 来源缩写（自定义即可，例如 "HOMEBREW"）
   - "page": 页码（无则填 0）
3. 怪物条目额外需要：size (T/S/M/L/H/G), type, alignment, ac (数组，例 [{"ac":18,"from":["plate armor"]}]), hp ({"average":63,"formula":"7d10 + 21"}), speed (对象 例 {"walk":40,"fly":30}), str/dex/con/int/wis/cha 六个能力值（整数）, cr (字符串，例 "1/2"、"4"), trait/action/reaction/legendary 等数组（可选）。每条 trait/action 形如 {"name":"...","entries":["..."]}。entries 里可使用 5etools 行内标签如 {@dice 1d6}, {@damage 2d6+3}, {@hit 5}, {@dc 14}, {@atk mw}, {@h}。
4. 法术条目额外需要：level (整数), school (A/C/D/E/I/N/T/V), time, range, components ({v, s, m}), duration, classes, entries。
5. 物品条目额外需要：type, weight, value, rarity, entries；武器再加 dmg1, dmgType, property。
6. **不要**追加 search/index.json 那种 entry index 项 —— 本地导入会从顶层数组自动生成索引。
7. **不要**输出说明文字、Markdown 围栏或任何解释 —— 整个回复就是一个有效的 JSON 对象。

⚠ 兼容性硬规则（如果你将来要做"托管 URL 库"，必须遵守）：
A. 类目代码 \`c\` 在 search/index.json 里**必须是数字**（1=怪物，2=法术，3=背景，4=物品，6=状态，7=专长，10=种族，14=神祇 …），**禁止**写成 \`"c":"monster"\` / \`"c":"spell"\` 这种字符串形式 —— 字符串形式本插件无法识别，详情面板会显示 \`?monster\`。
B. 文件命名**必须是按来源切分**：\`data/bestiary/bestiary-<SOURCE>.json\` / \`data/spells/spells-<SOURCE>.json\` 等；**禁止**用 \`collection-XXX.json\` 这种把多类目塞一起 + 外层 \`_meta\` 包裹的合集格式 —— 本插件按"类目 → 来源 → 文件"映射查数据，合集文件找不到。
C. 条目的 \`p\` 字段是**页码（数字）**，不是文件路径字符串。

下面是我的资料：

`,en:`You are a D&D 5E data-format engineer. Convert the monster / spell / item content I paste below into a JSON file that conforms to the 5etools data spec, so it can be imported directly via "📁 Local content" in the OBR Suite plugin (no hosting required).

Output requirements:
1. Produce a single top-level JSON object with exactly one key:
   - Monster: { "monster": [ {...}, {...} ] }
   - Spell:   { "spell":   [ {...}, {...} ] }
   - Item:    { "item":    [ {...}, {...} ] }
2. Every entry must include at least:
   - "name": display name (English is fine)
   - "ENG_name": English name (use the same string as "name" if already English)
   - "source": source abbreviation (any string, e.g. "HOMEBREW")
   - "page": page number (use 0 if none)
3. Monster entries additionally need: size (T/S/M/L/H/G), type, alignment, ac (array, e.g. [{"ac":18,"from":["plate armor"]}]), hp ({"average":63,"formula":"7d10 + 21"}), speed (object, e.g. {"walk":40,"fly":30}), str/dex/con/int/wis/cha six ability scores (integers), cr (string, e.g. "1/2", "4"), and optional arrays trait/action/reaction/legendary. Each trait/action is shaped {"name":"...","entries":["..."]}. The entries strings may use 5etools inline tags like {@dice 1d6}, {@damage 2d6+3}, {@hit 5}, {@dc 14}, {@atk mw}, {@h}.
4. Spell entries additionally need: level (integer), school (A/C/D/E/I/N/T/V), time, range, components ({v, s, m}), duration, classes, entries.
5. Item entries additionally need: type, weight, value, rarity, entries; weapons also dmg1, dmgType, property.
6. **Do NOT** append search/index.json-style index records — local import auto-generates the index from the top-level array.
7. **Do NOT** output explanatory text, Markdown fences, or any commentary — your entire reply must be one valid JSON object.

⚠ Compatibility hard rules (mandatory if you ever ship this data as a hosted URL library):
A. The category code \`c\` in search/index.json **must be NUMERIC** (1=monster, 2=spell, 3=background, 4=item, 6=condition, 7=feat, 10=race, 14=deity, …). **Never** write \`"c":"monster"\` / \`"c":"spell"\` as strings — the plugin can't resolve string category codes and will display \`?monster\` in the details panel.
B. Files **must be split per-source**: \`data/bestiary/bestiary-<SOURCE>.json\` / \`data/spells/spells-<SOURCE>.json\` etc. **Do NOT** ship \`collection-XXX.json\` files that pack multiple categories together inside a top-level \`_meta\` wrapper — the plugin looks data up via category → source → file mapping and will never find collection files.
C. The \`p\` field on an entry is a **numeric page number**, not a file path string.

My content follows:

`},Re={zh:`你是一个 D&D 5E 数据格式工程师。请把我下面提供的怪物资料，转换为枭熊插件支持的 Markdown 格式（可直接通过"📁 本地内容 → 导入 MD 文件"导入，每个文件包含一个怪物）。

输出格式严格如下：

---
name: 中文名称
ENG_name: English Name
source: HOMEBREW
page: 0
size: M
type: monstrosity
alignment: U
ac: 14 (natural armor)
hp: 22 (5d4 + 10)
speed: walk 40, fly 30, hover
str: 6
dex: 16
con: 14
int: 8
wis: 12
cha: 10
cr: "1/2"
senses: darkvision 60 ft., passive Perception 13
languages: Common
---

## Traits
### 特性名 / Feature Name
特性描述。可用 {@damage 1d4} 等 5etools 行内标签。

## Actions
### 动作名 / Action Name
{@atk mw} {@hit 5} to hit, reach 5 ft., one target. {@h}{@damage 2d6+3} damage.

## Reactions
### 反应名（可选）
反应描述。

## Legendary Actions
### 传奇动作名（可选）
传奇动作描述。

要求：
1. frontmatter 在顶部 \`---\` 之间，用 YAML 风格的 \`key: value\`。cr 用字符串（"1/2" / "4" / "12"）。
2. ac 写成 "数字 (来源)" 或 "数字"。hp 写成 "average (formula)" 或 "average"。speed 用逗号分隔多种移动模式。
3. \`## Traits\` / \`## Actions\` / \`## Reactions\` / \`## Legendary Actions\` 是固定标题（中英文都可识别），下面用 \`### 名字\` 子标题分别描述每条特性 / 动作。
4. 不要输出额外解释文字 —— 整个回复就是这一个 .md 文件。

下面是我的资料：

`,en:`You are a D&D 5E data-format engineer. Convert the monster content I paste below into the Markdown format the OBR Suite plugin supports (imported directly via "📁 Local content → Import MD file"; one monster per file).

Output strictly in this shape:

---
name: Display Name
ENG_name: English Name
source: HOMEBREW
page: 0
size: M
type: monstrosity
alignment: U
ac: 14 (natural armor)
hp: 22 (5d4 + 10)
speed: walk 40, fly 30, hover
str: 6
dex: 16
con: 14
int: 8
wis: 12
cha: 10
cr: "1/2"
senses: darkvision 60 ft., passive Perception 13
languages: Common
---

## Traits
### Feature Name
Feature description. You may use 5etools inline tags like {@damage 1d4}.

## Actions
### Action Name
{@atk mw} {@hit 5} to hit, reach 5 ft., one target. {@h}{@damage 2d6+3} damage.

## Reactions
### Reaction Name (optional)
Reaction description.

## Legendary Actions
### Legendary Action Name (optional)
Legendary action description.

Rules:
1. Frontmatter goes between top-level \`---\` markers in YAML \`key: value\` style. \`cr\` is a STRING ("1/2" / "4" / "12").
2. \`ac\` is "number (source)" or just "number". \`hp\` is "average (formula)" or just "average". \`speed\` is comma-separated movement modes.
3. \`## Traits\` / \`## Actions\` / \`## Reactions\` / \`## Legendary Actions\` are fixed section headers (the importer accepts both English and Chinese names). Inside each, use \`### Name\` subheaders for individual features / actions.
4. Do NOT output any explanatory text — your entire reply must be the one .md file.

My content follows:

`};U(Le.zh),U(Le.en),U(Re.zh),U(Re.en);function U(e){return e.replaceAll(`&`,`&amp;`).replaceAll(`"`,`&quot;`).replaceAll(`<`,`&lt;`)}var ze=[{id:`support`,zh:`${b.heartSpark} 支持作者 / 反馈`,en:`${b.heartSpark} Support / Feedback`,body:Te},{id:`version`,zh:`${b.library} 基础设置`,en:`${b.library} Basics`,dynamicBody:e=>{let t=o(),n=!!t.crossSceneSyncSettings,r=!!t.crossSceneSyncCards;return`
        <div class="basics-block" style="margin-top:14px">
          <div class="basics-h">${e===`zh`?`跨场景同步`:`Cross-scene sync`}</div>
          <div class="row">
            <div class="lbl">
              ${e===`zh`?`同步插件设置`:`Sync suite settings`}
              <div class="desc"><em>${e===`zh`?`开启后，房间里所有场景共享同一份插件设置（数据版本、模块开关、库列表等）。开启时会询问是否以当前场景为基准。`:`When ON, every scene in the room shares one set of suite settings (data version, module toggles, libraries...). Enabling prompts whether to use the current scene as the source.`}</em></div>
            </div>
            <button class="tog ${n?`on`:``}" data-key="crossSceneSyncSettings" type="button" ${j?``:`disabled`} aria-pressed="${n}"></button>
          </div>
          <div class="row">
            <div class="lbl">
              ${e===`zh`?`同步角色卡列表`:`Sync character-card list`}
              <div class="desc"><em>${e===`zh`?`开启后，还没有自己角色卡列表的场景会采用房间共享的那一份（已有自己列表的场景不会被覆盖，删除过的卡也不会被同步回来）。卡片实际数据本来就以房间 ID 存在服务器上，所以同步只是同步「哪些卡可见」。`:`When ON, scenes that don't have a character-card list of their own adopt the room-wide one (scenes with their own list are never overwritten, and deleted cards are not synced back). Card content itself is already keyed by room ID server-side; this only syncs WHICH cards each scene shows.`}</em></div>
            </div>
            <button class="tog ${r?`on`:``}" data-key="crossSceneSyncCards" type="button" ${j?``:`disabled`} aria-pressed="${r}"></button>
          </div>
          ${j?``:`<p class="role-notice">${e===`zh`?`玩家端只读 · 由 DM 设置`:`Read-only · Set by DM`}</p>`}
        </div>

        <div class="basics-block" style="margin-top:14px">
          <div class="basics-h">${e===`zh`?`面板布局`:`Panel layout`}</div>
          <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:8px">
            <button class="layout-editor-btn" type="button">${e===`zh`?`调整面板布局`:`Edit panel layout`}</button>
            <button class="reset-panels-btn" type="button">${e===`zh`?`重置所有面板位置`:`Reset all panel positions`}</button>
          </div>
          <p style="margin:0;line-height:1.7">${e===`zh`?`悬浮按钮、投骰记录、先攻条、怪物图鉴、角色卡信息这几个面板都可以拖动它们左上角的⋮⋮把手来自定义位置。位置只在你自己的客户端记忆，不会同步给其他玩家。`:`The cluster, dice history, initiative bar, bestiary panel and character-card info popover can all be repositioned by dragging the ⋮⋮ grip in their top-left corner. Positions are stored per-client and never synced to other players.`}</p>
        </div>

        <div class="basics-block" style="margin-top:14px">
          <div class="basics-h">${e===`zh`?`调试模式`:`Debug mode`}</div>
          <div class="row">
            <div class="lbl">
              ${e===`zh`?`显示面板真实阻挡区域`:`Show real click-blocking areas`}
              <div class="desc"><em>${e===`zh`?`开启后所有插件 iframe 会显示<b>黄色透明遮罩</b>+虚线边框，方便排查「那块本应透明的区域却挡住了点击」的问题。<b>仅本地</b>，不影响其他玩家。`:`When ON, every suite iframe shows a <b>yellow tint + dashed outline</b> over its real popover footprint, useful for debugging "why is this transparent area still blocking clicks". <b>Local only</b>, never synced.`}</em></div>
            </div>
            <button class="tog" data-key="debugOverlay" type="button" aria-pressed="false"></button>
          </div>
          <div class="row">
            <div class="lbl">
              ${e===`zh`?`性能监视器（FPS / 绘制数）`:`Perf monitor (FPS / drawcall)`}
              <div class="desc"><em>${e===`zh`?`在屏幕左上角显示一个小窗口，实时显示 <b>FPS</b> 和 <b>绘制数</b>（场景里 item 总数 — OBR 没有真实 drawcall API，这是近似值）。<b>仅本地</b>，可拖拽。`:`Shows a tiny top-left window with live <b>FPS</b> and <b>drawcall</b> (= scene item count; OBR exposes no true drawcall counter, so this is an approximation). <b>Local only</b>, draggable.`}</em></div>
            </div>
            <button class="tog" data-key="perfWindow" type="button" aria-pressed="false"></button>
          </div>
        </div>
      `},afterRender:t=>{let n=t.querySelector(`.tog[data-key="debugOverlay"]`);if(n){let e=(()=>{try{return localStorage.getItem(`obr-suite/debug-overlay`)===`1`}catch{return!1}})();n.classList.toggle(`on`,e),n.setAttribute(`aria-pressed`,String(e)),n.addEventListener(`click`,async()=>{let e=!n.classList.contains(`on`);n.classList.toggle(`on`,e),n.setAttribute(`aria-pressed`,String(e)),(await d(()=>import(`./debugOverlay-BC2hYfAU.js`).then(e=>e.t),__vite__mapDeps([0,1,2]))).setDebugOverlay(e)})}let r=t.querySelector(`.tog[data-key="perfWindow"]`);if(r){let e=(()=>{try{return localStorage.getItem(`obr-suite/perf-window/visible`)===`1`}catch{return!1}})();r.classList.toggle(`on`,e),r.setAttribute(`aria-pressed`,String(e)),r.addEventListener(`click`,async()=>{let e=!r.classList.contains(`on`);r.classList.toggle(`on`,e),r.setAttribute(`aria-pressed`,String(e)),(await d(()=>import(`./perfWindow-DmPz53yi.js`).then(e=>e.t),__vite__mapDeps([3,1,2,4,5,6]))).setPerfWindowVisible(e)})}t.querySelector(`.tog[data-key="crossSceneSyncSettings"]`)?.addEventListener(`click`,async()=>{if(!j)return;let e=!!o().crossSceneSyncSettings;!e&&!window.confirm(l()===`zh`?`需要以当前场景的设置为基准，同步到本房间所有场景吗？

（其他场景之前的独立设置会被覆盖。）`:`Sync the current scene's settings as the source-of-truth across every scene in this room?

(Other scenes' previously-independent settings will be overwritten.)`)||await u({crossSceneSyncSettings:!e})}),t.querySelector(`.tog[data-key="crossSceneSyncCards"]`)?.addEventListener(`click`,async()=>{if(!j)return;let e=!!o().crossSceneSyncCards;if(e)try{await(await d(()=>import(`./cross-scene-cards-DO4pYujZ.js`).then(e=>e.t),__vite__mapDeps([7,1,2,8]))).clearRoomCardsMirror()}catch(e){console.warn(`[obr-suite/settings] clear cards mirror failed`,e)}else{if(!window.confirm(l()===`zh`?`把当前场景的角色卡列表设为房间基准，供还没有自己卡列表的场景采用吗？

（已有自己卡列表的场景保持原样；删除过的卡片不会再被同步回来。）`:`Use the current scene's character-card list as the room baseline for scenes that have no list of their own?

(Scenes with their own list stay as they are; deleted cards are not synced back.)`))return;try{await(await d(()=>import(`./cross-scene-cards-DO4pYujZ.js`).then(e=>e.t),__vite__mapDeps([7,1,2,8]))).seedRoomCardsFromCurrentScene()}catch(e){console.warn(`[obr-suite/settings] seed cards failed`,e)}}await u({crossSceneSyncCards:!e})}),t.querySelector(`.layout-editor-btn`)?.addEventListener(`click`,async()=>{try{let t=await d(()=>import(`./panelLayout-Dkizz3yk.js`).then(e=>e._),__vite__mapDeps([5,1]));await e.broadcast.sendMessage(t.BC_OPEN_LAYOUT_EDITOR,{},{destination:`LOCAL`})}catch(e){console.warn(`[obr-suite/settings] open layout editor failed`,e)}}),t.querySelector(`.reset-panels-btn`)?.addEventListener(`click`,async()=>{if(window.confirm(l()===`zh`?`重置悬浮按钮、投骰记录、先攻条、怪物图鉴、角色卡信息的位置到默认锚点？`:`Reset cluster, dice history, initiative bar, bestiary panel and character-card info to their default anchors?`))try{let t=await d(()=>import(`./panelLayout-Dkizz3yk.js`).then(e=>e._),__vite__mapDeps([5,1]));t.resetAllPanelOffsets(),await e.broadcast.sendMessage(t.BC_PANEL_RESET,{},{destination:`LOCAL`})}catch(e){console.warn(`[obr-suite/settings] reset panel offsets failed`,e)}})}},{id:`timeStop`,zh:`${b.clockPause} 时停模式`,en:`${b.clockPause} Time Stop`,moduleId:`timeStop`,body:Ee},{id:`focus`,zh:`${b.crosshair} 同步视口`,en:`${b.crosshair} Sync Viewport`,moduleId:`focus`,body:De},{id:`characterCards`,zh:`${b.idCard} 角色卡`,en:`${b.idCard} Character Cards`,moduleId:`characterCards`,dynamicBody:e=>`${e===`zh`?Oe.zh:Oe.en}${`<div class="dl-row"><a class="dl-btn" href="${t(`pf1e-card.html`)}" download="PF1E角色卡.html">${e===`zh`?`下载角色卡`:`Download character card`}</a></div>`}`},{id:`initiative`,zh:`${b.swords} 先攻追踪`,en:`${b.swords} Initiative Tracker`,moduleId:`initiative`,dynamicBody:e=>{let t=o(),n=t.initiativeFocusOnTurnChange!==!1,r=!!t.initiativeAutoSnapOnPrep,i=!!t.initiativeHidePercentHpBar,a=(()=>{try{let e=localStorage.getItem(`obr-suite/sfx-initiative`);return e===`0`?!1:e===`1`?!0:localStorage.getItem(`obr-suite/sfx-on`)!==`0`}catch{return!0}})();return`
        <h3>${e===`zh`?`选项`:`Options`}</h3>
        <div class="row">
          <div class="lbl">
            ${e===`zh`?`轮换时聚焦当前角色`:`Focus current character on turn change`}
            <div class="desc"><em>${e===`zh`?`下一回合时，所有客户端的镜头自动平移到当前行动角色身上。`:`When the turn advances, every client's camera pans to the active character.`}</em></div>
          </div>
          <button class="tog ${n?`on`:``}" data-key="initiativeFocusOnTurnChange" type="button" ${j?``:`disabled`} aria-pressed="${n}"></button>
        </div>
        <div class="row">
          <div class="lbl">
            ${e===`zh`?`战斗准备阶段自动对齐网格中心`:`Auto-snap to grid centre on combat prep`}
            <div class="desc"><em>${e===`zh`?`进入「战斗准备」时，把所有先攻条目里的 token 吸附到最近的网格格子中心。`:`When combat preparation starts, every initiative token snaps to the centre of its nearest grid cell.`}</em></div>
          </div>
          <button class="tog ${r?`on`:``}" data-key="initiativeAutoSnapOnPrep" type="button" ${j?``:`disabled`} aria-pressed="${r}"></button>
        </div>
        <div class="row">
          <div class="lbl">
            ${e===`zh`?`隐藏先攻条上的百分比血条`:`Hide percent HP bar in initiative strip`}
            <div class="desc"><em>${e===`zh`?`默认每个 token 头像下会显示一条按百分比变色的血条；勾选后隐藏，适合不想让玩家通过先攻条看到敌方血量进度的桌子。`:`By default each token's portrait shows a percent-coloured HP bar underneath; check to hide it for tables that don't want players inferring enemy HP from the strip.`}</em></div>
          </div>
          <button class="tog ${i?`on`:``}" data-key="initiativeHidePercentHpBar" type="button" ${j?``:`disabled`} aria-pressed="${i}"></button>
        </div>
        <div class="row">
          <div class="lbl">
            ${e===`zh`?`启用先攻 / 同步视口音效`:`Enable initiative + sync-viewport SFX`}
            <div class="desc"><em>${e===`zh`?`回合切换提示音、同步视口提示音。本地保存，只影响你自己的客户端。`:`Turn-change chime + sync-viewport chime. Saved locally — only affects your own client.`}</em></div>
          </div>
          <button class="tog ${a?`on`:``}" data-key="sfxInitiative" type="button" aria-pressed="${a}"></button>
        </div>
        ${j?``:`<p class="role-notice">${e===`zh`?`玩家端只读 · 由 DM 设置（音效开关除外）`:`Read-only · Set by DM (except SFX toggle)`}</p>`}
        ${ke[e]}
      `},afterRender:e=>{e.querySelector(`.tog[data-key="initiativeFocusOnTurnChange"]`)?.addEventListener(`click`,async()=>{j&&await u({initiativeFocusOnTurnChange:o().initiativeFocusOnTurnChange===!1})}),e.querySelector(`.tog[data-key="initiativeAutoSnapOnPrep"]`)?.addEventListener(`click`,async()=>{j&&await u({initiativeAutoSnapOnPrep:!o().initiativeAutoSnapOnPrep})}),e.querySelector(`.tog[data-key="initiativeHidePercentHpBar"]`)?.addEventListener(`click`,async()=>{j&&await u({initiativeHidePercentHpBar:!o().initiativeHidePercentHpBar})}),e.querySelector(`.tog[data-key="sfxInitiative"]`)?.addEventListener(`click`,e=>{let t=e.currentTarget,n=!t.classList.contains(`on`);try{localStorage.setItem(`obr-suite/sfx-initiative`,n?`1`:`0`),n===(()=>{let e=localStorage.getItem(`obr-suite/sfx-dice`);return e===`0`?!1:e===`1`?!0:localStorage.getItem(`obr-suite/sfx-on`)!==`0`})()&&localStorage.setItem(`obr-suite/sfx-on`,n?`1`:`0`)}catch{}t.classList.toggle(`on`,n),t.setAttribute(`aria-pressed`,String(n))})}},{id:`dice`,zh:`${b.d20} 定位骰子`,en:`${b.d20} Tactical Dice`,moduleId:`dice`,dynamicBody:e=>{let t=(()=>{try{let e=localStorage.getItem(`obr-suite/sfx-dice`);return e===`0`?!1:e===`1`?!0:localStorage.getItem(`obr-suite/sfx-on`)!==`0`}catch{return!0}})();return`
        <h3>${e===`zh`?`选项`:`Options`}</h3>
        <div class="row">
          <div class="lbl">
            ${e===`zh`?`启用骰子音效`:`Enable dice SFX`}
            <div class="desc"><em>${e===`zh`?`骰子翻滚、爆炸、命中音效。本地保存，只影响你自己的客户端。`:`Tumble, burst, crit/fail tones. Saved locally — only affects your own client.`}</em></div>
          </div>
          <button class="tog ${t?`on`:``}" data-key="sfxDice" type="button" aria-pressed="${t}"></button>
        </div>
        ${Ae[e]}
      `},afterRender:e=>{e.querySelector(`.tog[data-key="sfxDice"]`)?.addEventListener(`click`,e=>{let t=e.currentTarget,n=!t.classList.contains(`on`);try{localStorage.setItem(`obr-suite/sfx-dice`,n?`1`:`0`),n===(()=>{let e=localStorage.getItem(`obr-suite/sfx-initiative`);return e===`0`?!1:e===`1`?!0:localStorage.getItem(`obr-suite/sfx-on`)!==`0`})()&&localStorage.setItem(`obr-suite/sfx-on`,n?`1`:`0`)}catch{}t.classList.toggle(`on`,n),t.setAttribute(`aria-pressed`,String(n))})}},{id:`portals`,zh:`${b.portal} 传送门`,en:`${b.portal} Portals`,moduleId:`portals`,dynamicBody:e=>{let t=(()=>{try{let e=localStorage.getItem(`com.obr-suite/portals/blink-enabled`);if(e===`0`)return!1;if(e===`1`)return!0}catch{}return!0})();return`
        <h3>${e===`zh`?`选项`:`Options`}</h3>
        <div class="row">
          <div class="lbl">
            ${e===`zh`?`默认传送眨眼特效`:`Default teleport blink`}
            <div class="desc"><em>${e===`zh`?`本机偏好，供设置为「使用默认」的传送门使用。DM 可在每扇传送门的编辑窗口中单独选择无特效、眨眼或淡入淡出。`:`Your preference for portals set to Use default. The GM can choose no effect, blink or fade separately in each portal's editor.`}</em></div>
          </div>
          <button class="tog ${t?`on`:``}" data-key="portalBlinkEnabled" type="button" aria-pressed="${t}"></button>
        </div>
        <div id="portal-default-host"></div>
        ${Fe[e]}
      `},afterRender:e=>{let t=e.querySelector(`#portal-default-host`);t&&j&&ee(t,q),e.querySelector(`.tog[data-key="portalBlinkEnabled"]`)?.addEventListener(`click`,e=>{let t=e.currentTarget,n=!t.classList.contains(`on`);try{localStorage.setItem(`com.obr-suite/portals/blink-enabled`,n?`1`:`0`)}catch{}t.classList.toggle(`on`,n),t.setAttribute(`aria-pressed`,String(n))})}},{id:`transitions`,zh:`${b.sparkles} 转场`,en:`${b.sparkles} Transitions`,moduleId:`transitions`,dynamicBody:(e,t)=>`<h3>${e===`zh`?`休息与场景提示`:`Rest and scene cues`}</h3>
      <p>${e===`zh`?`打开转场面板，一键呈现短休、长休或自定义提示。也可直接使用常用栏的「转场」按钮。`:`Open the transition panel for short rests, long rests or a custom message. The quick bar also has a Transitions button.`}</p>
      <button id="openTransitions" class="layout-editor-btn" type="button" ${o().enabled.transitions?``:`disabled`}>${e===`zh`?`打开转场面板`:`Open transition panel`}</button>
      <p class="meta">${e===`zh`?t?`可选择全部玩家或指定玩家；预览只显示在自己的屏幕。转场不会修改角色卡的生命值或资源。`:`玩家可以在自己的屏幕预览。面向其他玩家的转场由 DM 发起，不会修改角色卡的生命值或资源。`:t?`Choose everyone or selected players; previews appear only on your screen. Cues do not change character HP or resources.`:`Players can preview on their own screen. The GM sends cues to other players. Cues do not change character HP or resources.`}</p>`,afterRender:t=>{t.querySelector(`#openTransitions`)?.addEventListener(`click`,async()=>{try{await e.broadcast.sendMessage(p,{},{destination:`LOCAL`})}catch(t){console.warn(`[settings] opening transitions failed`,t),e.notification.show(q===`zh`?`转场面板暂时无法打开，请重试。`:`Could not open transitions. Please try again.`,`ERROR`)}})}},{id:`trickster`,zh:`${b.trickster} 陷阱`,en:`${b.trickster} Trap`,moduleId:`trickster`,body:Pe},{id:`circleImage`,zh:`${b.circleImage} 圆形图片`,en:`${b.circleImage} Circle Image`,moduleId:`circleImage`,body:je},{id:`transform`,zh:`${b.sparkles} 变身`,en:`${b.sparkles} Transform`,moduleId:`transform`,body:Ne},{id:`follow`,zh:`${b.follow} 跟随`,en:`${b.follow} Follow`,moduleId:`follow`,body:Me},{id:`bossBar`,zh:`${b.heart} Boss 血条`,en:`${b.heart} Boss Health`,moduleId:`bossBar`,dynamicBody:e=>{let t=e===`zh`,n=y();return`<h3>${t?`个人显示`:`Your display`}</h3>
        ${((e,t,n)=>`<div class="row"><div class="lbl">${t}</div><button class="tog ${n?`on`:``}" data-boss-pref="${e}" type="button" aria-label="${t}" aria-pressed="${n}"></button></div>`)(`reducedMotion`,t?`减少血条动画`:`Reduce health bar motion`,n.reducedMotion)}
        <label class="row"><span>${t?`距离底部`:`Bottom spacing`}</span><input id="boss-bottom-inset" type="number" min="88" max="360" step="8" value="${n.bottomInset}" style="width:84px"> px</label>
        <p>${t?`透明血条显示在下方居中，自动避让本插件的已打开面板，鼠标可直接穿过。显示阈值沿用普通血条设置；开启后隐藏该单位的普通生命值条。关闭请右键该单位。`:`Transparent, click-through bars sit at the bottom center and avoid open suite panels. They follow normal health-bar thresholds and replace that token’s normal HP bar. Disable a bar from its token’s context menu.`}</p>
        <details><summary>${t?`DM 使用帮助`:`GM setup`}</summary><p>${t?`右键有生命值的角色单位 →「显示为 Boss」。名称优先使用 Accessibility 设置。在「Boss 显示选项」中设置阶段名称、分段和具体数值；选择「隐藏 Boss 血条」可关闭。`:`Right-click a character token with HP → Show as Boss. The Accessibility name takes precedence. Boss display options set the phase, segments and exact values; choose Hide Boss bar to disable it.`}</p></details>`},afterRender:t=>{t.querySelector(`#boss-bottom-inset`)?.addEventListener(`change`,async t=>{let n=t.currentTarget,r=Number(n.value);if(Number.isFinite(r)){n.value=String(Math.max(88,Math.min(360,r)));try{await v({bottomInset:Number(n.value)})}catch{e.notification.show(q===`zh`?`显示位置未能保存，请重试。`:`Could not save the position. Please retry.`,`ERROR`)}}}),t.querySelectorAll(`[data-boss-pref]`).forEach(t=>{t.addEventListener(`click`,async()=>{t.disabled=!0;let n=y();try{await v({reducedMotion:!n.reducedMotion})}catch(t){console.warn(`[settings] Boss preference update failed`,t),e.notification.show(q===`zh`?`Boss 显示设置未能同步，请重试。`:`Could not sync Boss display settings. Please try again.`,`ERROR`)}finally{t.disabled=!1,A===`bossBar`&&Z()}})})}},{id:`bubbles`,zh:`${b.heart} 血量气泡`,en:`${b.heart} HP Bubbles`,moduleId:`bubbles`,dynamicBody:e=>{let t=F,n=I,r=L,i=N,a=(()=>{try{let e=localStorage.getItem(`com.obr-suite/bubbles/scale`);if(e!=null&&e!==``){let t=Number(e);if(Number.isFinite(t)&&t>=.4&&t<=2.5)return t}}catch{}return 1})(),o=e===`zh`?`<p>每个 token 下方的<b>紧凑信息条</b>：HP 条（按比例填充）+ AC 盾牌。自动跟随<em>拖动 / 缩放 / 传送</em>，旋转时保持竖直。</p>
<ul>
  <li><b>设置可见性</b> → 通过血条最右侧的上锁按钮决定是否对玩家可见</li>
  <li><b>绑定怪物图鉴</b> → 自动写入 HP/AC，<em>非战斗状态下默认对玩家隐藏</em>（与图鉴一致）</li>
  <li><b>绑定角色卡</b> → 同步当前 / 最大 / 临时 HP 与 AC，所有人可见</li>
  <li>HP / Max HP / Temp HP / AC <b>编辑入口</b>在怪物 / 角色卡的悬浮窗里</li>
  <li><b>本地渲染</b>（OBR.scene.local），不同步给其他玩家</li>
</ul>
<h3 style="margin-top:14px">血条组件 (新)</h3>
<p>对于<b>没有绑定角色卡 / 怪物图鉴</b>但仍需要 HP / AC 的 token（房屋规则的 NPC、Boss 召唤物、阵法符等），右键菜单提供<b>添加血条组件 / 移除血条组件</b>，DM 和玩家都能用。</p>
<ul>
  <li>已经显示血量气泡的 token，<b>选中即弹出</b>编辑面板（自动判断、自动添加 flag）</li>
  <li>面板支持<b>就地编辑</b> HP / Max HP / 临时 HP / AC，DM 端额外有<b>锁定按钮</b>控制玩家可见性</li>
  <li>面板可拖动，参与统一的<b>面板布局</b>系统持久化位置</li>
  <li>取消选中即关闭</li>
</ul>`:`<p><b>Compact info row</b> over every token: HP bar + AC shield. Auto-follows <em>drag / scale / teleport</em>, stays upright on rotation.</p>
<ul>
  <li><b>Bestiary-bound</b> → HP/AC auto-written, <em>hidden from players by default</em> (matches bestiary)</li>
  <li><b>Card-bound</b> → syncs current / max / temp HP + AC, visible to everyone</li>
  <li>HP / Max HP / Temp HP / AC <b>edit entry points</b> live in the monster + card popups</li>
  <li><b>Local render</b> (OBR.scene.local) — does not sync to others</li>
</ul>
<h3 style="margin-top:14px">HP Bar Component (new)</h3>
<p>For tokens with <b>no character-card / bestiary binding</b> that still need HP / AC (house-rule NPCs, boss summons, glyph tokens…), the right-click menu offers <b>Add HP Bar / Remove HP Bar</b>. Both DM and players can use it.</p>
<ul>
  <li>Tokens that already show HP bubbles: <b>just select to pop</b> the editor (auto-detect, auto-add the component flag)</li>
  <li>Editor supports <b>in-place</b> HP / Max HP / Temp HP / AC editing; DM also gets a <b>lock button</b> controlling player visibility</li>
  <li>Drag the popover by its grip — position persists via the unified <b>panel layout</b> system</li>
  <li>Closes automatically on deselect</li>
</ul>`,s=e===`zh`?j?`DM 同步（全场一致）。`:`DM 同步（全场一致），由 DM 控制。`:j?`DM-synced (table-wide). `:`DM-synced (table-wide) — controlled by the DM. `,c=e===`zh`?`上下偏移`:`Vertical offset`,l=e===`zh`?`${s}负值向上偏移（远离 token），正值向下。默认 -20 让气泡不和角色名字标签重叠。开启「按字号偏移」后此项灰掉不生效。`:`${s}Negative shifts up (away from token), positive shifts down. Default -20 keeps bubbles clear of the OBR name label. Greyed out when 'offset by font size' is on.`,u=e===`zh`?`按字号上偏移`:`Offset by font size`,d=e===`zh`?`${s}开启后气泡向上偏移文字字号的像素数（即「字号随 token 自动缩放」中的字号，默认 20 px），自动随 token 缩放。开启时上方「上下偏移」灰掉。头顶模式下该开关强制关闭。`:`${s}When ON, bubbles offset upward by the font-size px (same number as 'auto-scale text with token', default 20). Scales naturally with token. The manual 'vertical offset' above is greyed out while this is on. Force-disabled when overhead mode is on.`,f=e===`zh`?`血条显示模式`:`HP bar mode`,p=e===`zh`?`${s}标准模式：血条贴在 token 底部，气泡浮在上方。头顶模式：血条悬浮在 token 头顶一小段距离上方，取消圆角并加上边框，护盾和临时血在血条尽头（最右侧）与血条同平面显示。头顶模式下「按字号上偏移」自动失效。`:`${s}Standard: HP bar sits below the token with stat bubbles floating above it. Overhead: bar hovers a short gap above the token's head, sharp corners + border, AC shield (+ Temp HP) appear inline at the bar's right end on the same plane. The 'Offset by font size' toggle is force-disabled in Overhead mode.`,m=e===`zh`?`血条锚定基准`:`Bar anchor basis`,h=e===`zh`?`${s}画布：血条按<b>整张 PNG 图片</b>（含透明留白）的底边定位。图片在画布里没居中时（图案上探、自带阴影、大画布小图案），血条会被推到离 token 很远的位置，同一排的两个 token 也对不齐。占格框：改按 token 在<b>格子上的占位</b>定位——摆正时吸附到格线，拖到交点或自由位置后记住它在格子里的位置继续跟随，放大缩小也跟着变宽。`:`${s}Canvas: the bar is anchored to the bottom of the <b>whole PNG</b> (transparent padding included). Art that isn't centred in its canvas — a silhouette reaching upward, a baked-in shadow, a small subject on a large sheet — drops the bar far below the token, and two tokens on the same row end up on different lines. Grid box: anchor to the token's <b>footprint on the grid</b> instead — snapped to the grid lines while the token is lined up, remembered (and followed) after it is dragged onto an intersection or a free position, and widened/shrunk together with the token.`,g=e===`zh`?`玩家进度阈值`:`Player threshold`,_=e===`zh`?`DM 同步（全场一致）。上锁角色对玩家显示的血条进度按这个百分比量化。默认 25：玩家只在血量降至 75% / 50% / 25% / 0% 时看到血条变化。设为 0 则连续显示真实比例，100 则始终显示满血（玩家看不到任何进度）。`:`DM-synced (table-wide). Locked tokens' HP ratio shown to players quantises to this percent. Default 25 → players see the bar change only at 75% / 50% / 25% / 0%. 0 = continuous, 100 = always full (progress hidden).`,ee=e===`zh`?`气泡大小`:`Bubble size`,v=e===`zh`?`本机偏好（每个客户端独立，不同步）。乘到 HP 条 / AC 盾 / 字号上的统一缩放。0.5 紧凑（小图小屏），2.0 放大（远观看牌或老花眼）。默认 1.0。`:`Per-client preference (each client independent, not synced). Multiplier applied to the HP bar / AC shield / font size. 0.5 = compact, 2.0 = chunky. Default 1.0.`,y=e===`zh`?`字号随 token 自动缩放`:`Auto-scale text with token`,te=e===`zh`?`DM 全局开关。开启后 token 名字标签的字号会跟着 token 大小缩放（小怪物小字、巨型生物大字）。关闭时字号在所有 token 上保持一致。该开关只影响字号，不影响气泡上下偏移（要用「按字号上偏移」单独控制）。`:`DM-wide toggle. When ON, the OBR-native token name label font-size scales with token size (small monster small font, big monster big font). When OFF, font size is constant across tokens. This setting only affects the font; bubble vertical offset is controlled separately by 'offset by font size'.`;return`
        <h3>${e===`zh`?`选项`:`Options`}</h3>
        <div class="row">
          <div class="lbl">
            ${ee}
            <div class="desc"><em>${v}</em></div>
          </div>
          <input type="range" min="0.5" max="2" step="0.05" value="${a}"
                 data-key="bubblesScale"
                 style="flex:1 1 auto;align-self:center;max-width:160px"/>
          <span data-key="bubblesScaleVal" style="flex:0 0 50px;text-align:right;color:#9aa0b3;font-size:11px;font-variant-numeric:tabular-nums">${a.toFixed(2)}×</span>
        </div>
        <div class="row" data-settings-line>
          <div class="lbl">
            ${c}
            <div class="desc"><em>${l}</em></div>
          </div>
          <input type="number" step="1" value="${t}"
                 data-key="bubblesVerticalOffset" data-settings-draft="bubblesVerticalOffset"
                 ${n||!j?`disabled`:``}
                 style="flex:0 0 80px;align-self:center;background:rgba(0,0,0,0.25);border:1px solid rgba(255,255,255,0.12);border-radius:4px;padding:3px 6px;color:#fff;font:inherit;text-align:right${n||!j?`;opacity:0.45`:``}"/>
          <span style="flex:0 0 28px;text-align:right;color:#9aa0b3;font-size:11px">px</span>
        </div>
        <div class="row">
          <div class="lbl">
            ${u}
            <div class="desc"><em>${d}</em></div>
          </div>
          <button type="button"
                  class="tog ${n&&!r?`on`:``}"
                  data-key="bubblesOffsetByText"
                  ${r||!j?`disabled`:``}
                  style="${r||!j?`opacity:0.45;cursor:not-allowed;`:``}"
                  aria-pressed="${n&&!r?`true`:`false`}"
                  title="${r?e===`zh`?`头顶模式下不可用`:`Not available in Overhead mode`:j?``:e===`zh`?`由 DM 控制`:`Controlled by the DM`}"></button>
        </div>
        <div class="row">
          <div class="lbl">
            ${f}
            <div class="desc"><em>${p}</em></div>
          </div>
          <div class="mode-switch" data-key="bubblesOverheadMode"
               role="radiogroup"
               aria-label="${f}"
               title="${j?``:e===`zh`?`由 DM 控制`:`Controlled by the DM`}"
               style="display:inline-flex;border:1px solid rgba(255,255,255,0.18);border-radius:6px;overflow:hidden;font-size:11px;font-weight:600;user-select:none;align-self:center${j?``:`;opacity:0.45;pointer-events:none`}">
            <button type="button" data-mode="standard"
                    class="${r?``:`on`}"
                    aria-pressed="${r?`false`:`true`}"
                    style="background:${r?`transparent`:`rgba(93,173,226,0.20)`};color:${r?`#9aa0b3`:`#7ec8f0`};border:none;padding:5px 12px;cursor:pointer;font:inherit;font-weight:600;">${e===`zh`?`标准模式`:`Standard`}</button>
            <button type="button" data-mode="overhead"
                    class="${r?`on`:``}"
                    aria-pressed="${r?`true`:`false`}"
                    style="background:${r?`rgba(93,173,226,0.20)`:`transparent`};color:${r?`#7ec8f0`:`#9aa0b3`};border:none;padding:5px 12px;cursor:pointer;font:inherit;font-weight:600;border-left:1px solid rgba(255,255,255,0.12);">${e===`zh`?`头顶模式`:`Overhead`}</button>
          </div>
        </div>
        <div class="row">
          <div class="lbl">
            ${m}
            <div class="desc"><em>${h}</em></div>
          </div>
          <div class="mode-switch" data-key="bubblesAnchorMode"
               role="radiogroup"
               aria-label="${m}"
               title="${j?``:e===`zh`?`由 DM 控制`:`Controlled by the DM`}"
               style="display:inline-flex;border:1px solid rgba(255,255,255,0.18);border-radius:6px;overflow:hidden;font-size:11px;font-weight:600;user-select:none;align-self:center${j?``:`;opacity:0.45;pointer-events:none`}">
            <button type="button" data-mode="canvas"
                    class="${R===`box`?``:`on`}"
                    aria-pressed="${R===`box`?`false`:`true`}"
                    style="background:${R===`box`?`transparent`:`rgba(93,173,226,0.20)`};color:${R===`box`?`#9aa0b3`:`#7ec8f0`};border:none;padding:5px 12px;cursor:pointer;font:inherit;font-weight:600;">${e===`zh`?`画布`:`Canvas`}</button>
            <button type="button" data-mode="box"
                    class="${R===`box`?`on`:``}"
                    aria-pressed="${R===`box`?`true`:`false`}"
                    style="background:${R===`box`?`rgba(93,173,226,0.20)`:`transparent`};color:${R===`box`?`#7ec8f0`:`#9aa0b3`};border:none;padding:5px 12px;cursor:pointer;font:inherit;font-weight:600;border-left:1px solid rgba(255,255,255,0.12);">${e===`zh`?`占格框`:`Grid box`}</button>
          </div>
        </div>
        <div class="row">
          <div class="lbl">
            ${y}
            <div class="desc"><em>${te}</em></div>
          </div>
          <button type="button"
                  class="tog ${P?`on`:``}"
                  data-key="bubblesAutoScaleText"
                  ${j?``:`disabled`}
                  aria-pressed="${P?`true`:`false`}"></button>
        </div>
        <div class="row" data-settings-line>
          <div class="lbl">
            ${g}
            <div class="desc"><em>${_}</em></div>
          </div>
          <input type="number" min="0" max="100" step="5" value="${i}"
                 data-key="bubblesPlayerThreshold" data-settings-draft="bubblesPlayerThreshold"
                 ${j?``:`disabled`}
                 style="flex:0 0 80px;align-self:center;background:rgba(0,0,0,0.25);border:1px solid rgba(255,255,255,0.12);border-radius:4px;padding:3px 6px;color:#fff;font:inherit;text-align:right"/>
          <span style="flex:0 0 28px;text-align:right;color:#9aa0b3;font-size:11px">%</span>
        </div>
        ${j?`
        <h3 style="margin-top:14px">${e===`zh`?`维护`:`Maintenance`}</h3>
        <div class="row">
          <div class="lbl">
            ${e===`zh`?`修复历史血条`:`Repair legacy hidden bars`}
            <div class="desc"><em>${e===`zh`?`因为<b>血量元数据迁移</b>，旧场景里很多 token 仍然带着 <code>hide=true</code>，导致玩家完全看不到血条。点击后会清除当前场景<b>所有 token</b> 的 hide 标志。修复后：<b>未上锁</b>的 token 血条对玩家常态可见；<b>上锁</b>的 token 仅在<b>战斗中</b>显示无数值剪影、非战斗状态隐藏。每个场景需要单独点一次。`:`Due to the <b>HP metadata migration</b>, many tokens in pre-migration scenes still carry <code>hide=true</code>, hiding the bar from players entirely. Clicking will clear the flag from <b>every token</b> in the current scene. After repair: <b>unlocked</b> tokens show their bar to all players full-time; <b>locked</b> tokens show a numberless silhouette during <b>combat</b> only and stay hidden out-of-combat. Run this once per scene.`}</em></div>
          </div>
          <button data-key="bubblesRepairLegacyHide" class="reset-panels-btn" type="button">${e===`zh`?`修复当前场景`:`Repair current scene`}</button>
        </div>
        `:``}
        ${o}
      `},afterRender:t=>{let n=t.querySelector(`input[data-key="bubblesVerticalOffset"]`);if(n){let e=()=>{if(!j)return;let e=n.value.trim();if(e===``){n.value=String(O),xe(O);return}let t=Number(e);if(!Number.isFinite(t))return;let r=Math.max(-200,Math.min(200,Math.round(t)));n.value=String(r),xe(r)};n.addEventListener(`change`,e),n.addEventListener(`blur`,e),n.addEventListener(`keydown`,e=>{e.key===`Enter`&&(e.preventDefault(),n.blur())})}let r=t.querySelector(`input[data-key="bubblesPlayerThreshold"]`);if(r){let e=()=>{if(!j)return;let e=r.value.trim();if(e===``){r.value=`25`,ye(25);return}let t=Number(e);if(!Number.isFinite(t))return;let n=Math.max(0,Math.min(100,Math.round(t)));r.value=String(n),ye(n)};r.addEventListener(`change`,e),r.addEventListener(`blur`,e),r.addEventListener(`keydown`,e=>{e.key===`Enter`&&(e.preventDefault(),r.blur())})}let i=t.querySelector(`input[data-key="bubblesScale"]`),a=t.querySelector(`[data-key="bubblesScaleVal"]`);if(i){let e=()=>{let e=Number(i.value);if(!Number.isFinite(e))return;let t=Math.max(.5,Math.min(2,Math.round(e*20)/20));a&&(a.textContent=`${t.toFixed(2)}×`);try{localStorage.setItem(`com.obr-suite/bubbles/scale`,String(t))}catch{}};i.addEventListener(`input`,e),i.addEventListener(`change`,e)}let o=t.querySelector(`button[data-key="bubblesAutoScaleText"]`);o&&j&&o.addEventListener(`click`,async()=>{o.disabled||(await be(!P),A===`bubbles`&&Z())});let s=t.querySelector(`button[data-key="bubblesOffsetByText"]`);s&&s.addEventListener(`click`,async()=>{s.disabled||!j||(await Se(!I),A===`bubbles`&&Z())});let c=t.querySelector(`.mode-switch[data-key="bubblesOverheadMode"]`);c&&c.querySelectorAll(`button[data-mode]`).forEach(e=>{e.addEventListener(`click`,async()=>{j&&(await Ce(e.dataset.mode===`overhead`),A===`bubbles`&&Z())})});let u=t.querySelector(`.mode-switch[data-key="bubblesAnchorMode"]`);u&&u.querySelectorAll(`button[data-mode]`).forEach(e=>{e.addEventListener(`click`,async()=>{j&&(await we(e.dataset.mode===`box`?`box`:`canvas`),A===`bubbles`&&Z())})});let d=t.querySelector(`button[data-key="bubblesRepairLegacyHide"]`);d&&j&&d.addEventListener(`click`,async()=>{if(d.disabled)return;let t=l(),n=t===`zh`?`确认修复当前场景的所有血条？

这会清除每个 token 的 hide=true 标志。修复后：
• 未上锁的 token 血条对玩家常态可见
• 上锁的 token 仅在战斗中显示无数值剪影`:`Repair all HP bars in the current scene?

This clears the hide=true flag from every token. After repair:
• Unlocked tokens show the bar to players full-time
• Locked tokens show a numberless silhouette only during combat`;if(!window.confirm(n))return;let r=d.textContent??``;d.disabled=!0,d.textContent=t===`zh`?`修复中…`:`Repairing…`;try{let{touched:n,total:r}=await g(),i=t===`zh`?`已修复 ${n} 个 token（共扫描 ${r}）。`:`Repaired ${n} token${n===1?``:`s`} (scanned ${r}).`;try{await e.notification.show(i,`SUCCESS`)}catch{window.alert(i)}}catch(n){console.warn(`[obr-suite/settings] repair failed`,n);let r=t===`zh`?`修复失败，请查看 DevTools 控制台。`:`Repair failed — see DevTools console.`;try{await e.notification.show(r,`ERROR`)}catch{window.alert(r)}}finally{d.disabled=!1,d.textContent=r}})}},{id:`statusTracker`,zh:`${b.statusWheel} 状态追踪`,en:`${b.statusWheel} Status Tracker`,moduleId:`statusTracker`,body:{zh:`<p><b>全屏追踪</b>：状态、buff 一站式管理。</p>
<ul>
  <li><b>打开</b>：Select 工具下按 <kbd>]</kbd>，或点击工具栏的状态追踪按钮</li>
  <li><b>右下调色板</b>：左键点状态 = 选中，再左键点角色 = 应用 / 切换；右键取消选中。状态文字会以弧形气泡浮在 token 头顶</li>
  <li>已应用的 buff <b>拖到别人</b> = 转移，<b>拖到空白</b> = 删除</li>
</ul>`,en:`<p><b>Full-screen tracker</b> for status effects + buffs — one place to manage them all.</p>
<ul>
  <li><b>Open</b>: press <kbd>]</kbd> while in the Select tool, or click the toolbar action</li>
  <li><b>Bottom-right palette</b>: left-click a status to select it, then left-click a character to apply / toggle it; right-click cancels selection. The buff label appears as an arc-style bubble above the token</li>
  <li>Applied buffs: <b>drag to another</b> = transfer, <b>drag to empty space</b> = remove</li>
</ul>`}},{id:`resourceTracker`,zh:`📊 资源追踪`,en:`📊 Resource Tracker`,moduleId:`resourceTracker`,body:{zh:`<p><b>资源追踪</b>：为 token 配置消耗品 / 进度 / 数值资源（法术位、生命骰、灵感…）。</p>
<ul>
  <li><b>配置</b>：在怪物图鉴 / 角色卡信息面板里给单个 token 添加资源</li>
  <li><b>全员总览</b>：DM 专属 —— 工具栏的「资源追踪」按钮打开全屏面板，一屏查看并修改所有玩家角色的资源</li>
</ul>`,en:`<p><b>Resource Tracker</b> — per-token consumable / progress / numeric resources (spell slots, hit dice, inspiration…).</p>
<ul>
  <li><b>Configure</b>: add resources to a single token from the bestiary / character-card info panels</li>
  <li><b>All-party overview</b>: DM-only — the "资源追踪" toolbar tool opens a full-screen panel to view and edit every player character's resources at once</li>
</ul>`}},{id:`search`,zh:`${b.search} 全局搜索`,en:`${b.search} Global Search`,moduleId:`search`,body:Ie,dynamicBody:e=>{let t=o();return`
        <h3>${e===`zh`?`选项`:`Options`}</h3>
        <div class="row">
          <div class="lbl">
            ${e===`zh`?`允许玩家查询怪物`:`Players Can Search Monsters`}
            <div class="desc">${e===`zh`?`默认关闭。仅 DM 可设。开启后玩家也能在搜索结果中看到怪物条目。`:`Off by default. DM-only setting. When on, players can also see monster entries in search results.`}</div>
          </div>
          <button class="tog ${t.allowPlayerMonsters?`on`:``}" data-key="allowPlayerMonsters" type="button" ${j?``:`disabled`} aria-pressed="${t.allowPlayerMonsters}"></button>
        </div>
        <div class="row">
          <div class="lbl">
            ${e===`zh`?`搜索栏仅 DM 可见`:`DM-Only Search Bar`}
            <div class="desc">${e===`zh`?`默认关闭。仅 DM 可设。开启后玩家端不再显示搜索栏（布局编辑器里的搜索栏代理框一并隐藏）；角色变化、切换场景、重连时都会重新检查。`:`Off by default. DM-only setting. When on, players no longer see the search bar (its layout-editor proxy box hides too); re-checked on role change, scene switch and reconnect.`}</div>
          </div>
          <button class="tog ${t.searchGmOnly?`on`:``}" data-key="searchGmOnly" type="button" ${j?``:`disabled`} aria-pressed="${t.searchGmOnly}"></button>
        </div>
        ${j?``:`<p class="role-notice">${e===`zh`?`玩家端只读 · 由 DM 设置`:`Read-only · Set by DM`}</p>`}
        ${Ie[e]}
      `},afterRender:e=>{e.querySelector(`.tog[data-key="allowPlayerMonsters"]`)?.addEventListener(`click`,async()=>{j&&await u({allowPlayerMonsters:!o().allowPlayerMonsters})}),e.querySelector(`.tog[data-key="searchGmOnly"]`)?.addEventListener(`click`,async()=>{j&&await u({searchGmOnly:!o().searchGmOnly})})}},{id:`metadataInspector`,zh:`${b.telescope} 元数据检查`,en:`${b.telescope} Metadata Inspector`,moduleId:`metadataInspector`,body:{zh:`<p><b>DM 专用调试工具</b>。开启后 OBR 工具栏会出现一个望远镜图标。激活该工具，<b>选中任何物体</b>都会在物体旁弹出一个气泡，列出该物体上所有 metadata（按命名空间分组）和 OBR 原生字段（位置 / 缩放 / 旋转 / layer / locked / visible 等）。</p>
<ul>
  <li><b>分组标签</b>：<span style="color:#c89251">枭熊</span>（套件自身的元数据，如 bestiary slug、portals 数据、character cards 列表等）/ <span style="color:#e088b6">外部</span>（Stat Bubbles for D&amp;D、Smoke! 等第三方插件）/ <span style="color:#6fdc94">原生</span>（OBR 原生 Item 字段）。</li>
  <li><b>实时刷新</b>：物体被改动时气泡内容自动更新。</li>
  <li><b>动态高度</b>：内容多就撑高（最高 85% 视口），少就缩小，支持滚动。</li>
  <li><b>用例</b>：排查"为什么这个 token 的血量条不正常显示"、"哪个插件给这个 token 加了 metadata"、"它的 attachedTo 指向哪个 item"。</li>
</ul>
<p style="color:var(--text-dim);font-size:11.5px">仅 DM 可见这个工具；玩家端开启此模块也不会出现工具图标，所以无副作用。</p>`,en:`<p><b>DM-only debug tool.</b> When enabled, a telescope icon appears in the OBR tool sidebar. Activate it and <b>select any item</b> — a bubble pops next to it listing every metadata key on the item (grouped by plugin namespace) plus the native OBR fields (position / scale / rotation / layer / locked / visible / etc).</p>
<ul>
  <li><b>Group badges:</b> <span style="color:#c89251">Suite</span> (this suite's own metadata — bestiary slug, portals data, character-cards list…) / <span style="color:#e088b6">External</span> (Stat Bubbles for D&amp;D, Smoke! and other third-party plugins) / <span style="color:#6fdc94">Built-in</span> (native OBR Item fields).</li>
  <li><b>Live refresh:</b> the bubble updates as the item changes.</li>
  <li><b>Dynamic height:</b> grows for verbose metadata (capped at 85% viewport), shrinks for short ones, scrolls when needed.</li>
  <li><b>Use cases:</b> "why is this token's HP bar acting weird?", "which plugin stamped this metadata?", "what is this item attached to?"</li>
</ul>
<p style="color:var(--text-dim);font-size:11.5px">DM-only tool; even with the module enabled, players don't get the icon — zero side effect on the player side.</p>`}},{id:`fogEditor`,zh:`${b.eye} 迷雾编辑器`,en:`${b.eye} Fog Editor`,moduleId:`fogEditor`,body:{zh:`<h3>地图迷雾编辑器</h3>
<p>右键 MAP 图层的地图图片 → <b>编辑地图迷雾</b> → 全屏编辑器，把地图上画出来的墙描成几何数据。工作流接近 Photoshop 的<b>阈值 + 选区 + 画笔</b>：六种自动算法起手（灰度阈值 / Otsu / 自适应 Gaussian / 颜色距离 / 颜色排除 HSV / 饱和度感知），画笔、套索、魔棒、油漆桶手工修补，开闭运算与面积过滤收尾。</p>
<p>保存后生成<b>单个 Path item</b>（多 subpath、evenodd、attached 到地图），跟随地图缩放 / 位移 / 旋转。每个工具的详细说明在编辑器里悬停即可看到。</p>
<p style="color:var(--text-dim);font-size:11.5px">本模块<b>只有编辑器本身</b>，没有任何常驻逻辑。关掉它不会让已经描好的迷雾失效 —— 让迷雾真正挡住视线的是「动态迷雾」模块。</p>`,en:`<h3>Map Fog Editor</h3>
<p>Right-click a MAP-layer image → <b>Edit Map Fog</b> → fullscreen editor, which traces the walls drawn on the map into geometry. The workflow is Photoshop's <b>threshold + selection + brush</b>: six auto algorithms to start (grayscale threshold / Otsu / adaptive Gaussian / colour distance / colour exclude HSV / saturation-aware), then brush, lasso, magic wand and paint bucket by hand, then open/close morphology and area filtering to clean up.</p>
<p>Saves as a <b>single Path item</b> (multi-subpath, evenodd, attached to the map) that follows the map's scale / translation / rotation. Every tool documents itself on hover inside the editor.</p>
<p style="color:var(--text-dim);font-size:11.5px">This module is the editor and nothing else — it has no runtime. Turning it off does not invalidate fog it already traced; what makes fog actually block vision is the <b>Dynamic Fog</b> module.</p>`}},{id:`dynamicFog`,zh:`${b.eye} 动态迷雾`,en:`${b.eye} Dynamic Fog`,moduleId:`dynamicFog`,dynamicBody:(e,t)=>fe(o(),e,t,!0),afterRender:t=>{let n=t.querySelector(`.tog[data-key="fogFilled"]`);if(n){let t=e=>{n.classList.toggle(`on`,e),n.setAttribute(`aria-pressed`,String(e))};e.scene.isReady().then(async r=>{if(!r){n.disabled=!0;return}t(await e.scene.fog.getFilled())}).catch(()=>{});let r=null;try{r=e.scene.fog.onChange(e=>{if(!n.isConnected){r?.(),r=null;return}t(e.filled)})}catch{}n.addEventListener(`click`,async()=>{if(j)try{let n=!await e.scene.fog.getFilled();await e.scene.fog.setFilled(n),t(n)}catch(e){console.warn(`[dynamicFog] toggle fog fill failed`,e)}})}let r=e=>{t.querySelector(`.tog[data-key="${e}"]`)?.addEventListener(`click`,async()=>{j&&await u({[e]:!o()[e]})})};r(`fogPlayerDoors`),r(`fogDoorOverlayAlways`),r(`fogLightOcclusion`),r(`fogShareVision`)}},{id:`musicBoard`,moduleId:`musicBoard`,zh:`${b.music} 音乐板`,en:`${b.music} Music Board`,dynamicBody:e=>{let t=e===`zh`,n=o().enabled.musicBoard;return`
        <p>${t?`和同桌玩家一起播放音乐。关闭或缩小控制面板后，音乐继续播放。`:`Play music with your table. Music continues when you close or minimize the controls.`}</p>
        <button id="openMusicBoard" class="layout-editor-btn" type="button" ${n?``:`disabled`}>${t?`打开音乐板`:`Open Music Board`}</button>
        ${n?``:`<p class="role-notice">${t?j?`先打开本页的模块开关。`:`请 DM 打开音乐板模块。`:j?`Enable this module above first.`:`Ask your GM to enable the Music Board module.`}</p>`}
        <p>${t?`首次使用时，每个人在音乐板点一次「启用声音」。默认全员可选曲、暂停和管理队列，DM 可改成仅 DM 控制。音量和静音只影响自己。`:`Each person clicks Enable sound on first use. Everyone can choose tracks, pause and manage the queue by default; the GM can limit shared controls to GMs. Volume and mute only affect you.`}</p>
        <details class="lib-tut"><summary>${t?`曲库与音乐工作室`:`Library and Music Studio`}</summary>
          <p>${t?`可以直接添加音频网址、导入分享码或从默认曲库选曲。整理更大的曲库、裁剪或转换本地音频时，可使用音乐工作室并输入配对码。共享播放需要所有玩家都能访问的音频网址，本地文件需先托管。`:`Add an audio URL, import a share code or choose tracks from the default library. Use Music Studio to organize a larger library or trim and convert local audio, then connect with a pairing code. Shared playback needs audio URLs accessible to everyone; host local files before sharing.`}</p>
          <a href="https://obr.dnd.center/studio/music-studio/" target="_blank" rel="noopener">${t?`打开音乐工作室 ↗`:`Open Music Studio ↗`}</a>
        </details>`},afterRender:t=>{t.querySelector(`#openMusicBoard`)?.addEventListener(`click`,()=>{o().enabled.musicBoard&&e.broadcast.sendMessage(`com.obr-suite/music-board:toggle`,{},{destination:`LOCAL`})})}}],Be=new Set([`follow`]),Ve=x?le(ze):ze.filter(e=>e.id!==`fogEditor`&&!Be.has(e.id)),He=document.getElementById(`title`),Ue=document.getElementById(`tabs`),W=document.getElementById(`topBar`),G=document.getElementById(`content`),We=document.getElementById(`langZh`),Ge=document.getElementById(`langEn`),Ke=new ue(G),qe=``,K=new Map,q=`zh`;function J(){return Ve.filter(e=>j||e.id!==`transitions`)}function Y(e){return J().find(t=>t.id===e)??J()[0]}function X(){J().some(e=>e.id===A)||(A=J()[0].id),Ue.innerHTML=J().map(e=>{let t=q===`zh`?e.zh:e.en;return`<button class="tab ${A===e.id?`on`:``}" data-tab="${e.id}" type="button">${t}</button>`}).join(``),Ue.querySelectorAll(`.tab`).forEach(e=>{e.addEventListener(`click`,()=>{A=e.dataset.tab,X(),Z()})})}function Z(){let e=Y(A),t=o(),n=`<h2>${q===`zh`?e.zh:e.en}</h2><span id="moduleStatus" role="status" style="flex:1;min-width:0;font-size:12px;color:var(--text-dim)"></span>`;if(e.moduleId){let r=!!t.enabled[e.moduleId];n+=`<button class="tog ${r?`on`:``}" data-mod="${e.moduleId}" type="button" ${j?``:`disabled`} title="${q===`zh`?`启用 / 关闭此功能`:`Enable / disable this module`}"></button>`}else n+=`<span class="meta"></span>`;qe!==n&&(qe=n,W.innerHTML=n,W.querySelector(`.tog[data-mod]`)?.addEventListener(`click`,async()=>{if(!j)return;let t=e.moduleId,n=o().enabled[t];await u({enabled:{[t]:!n}})})),Q();let r=[];e.body&&r.push(e.body[q]||``),e.dynamicBody&&r.push(e.dynamicBody(q,j)||``),Ke.render({scope:e.id,html:r.join(``),language:q,editable:j,afterRender:()=>e.afterRender?.(G,j)});let i=e.id===`appearance`||e.id===`support`;G.inert=x&&!M&&!i,G.classList.toggle(`settings-values-pending`,G.inert),G.setAttribute(`aria-busy`,String(G.inert))}function Q(){let t=W.querySelector(`#moduleStatus`);if(!t)return;let n=Y(A).moduleId;de(t,n?K.get(n):void 0,q,async t=>{await e.broadcast.sendMessage(_,{id:t},{destination:`LOCAL`})})}function $(e){q=e,re(e),We.classList.toggle(`on`,e===`zh`),Ge.classList.toggle(`on`,e===`en`),He.textContent=x?S?e===`zh`?`功能开关`:`Features`:e===`zh`?`设置`:`Settings`:e===`zh`?`设置 / 关于`:`Settings / About`,X(),Z()}We.addEventListener(`click`,()=>{a(`zh`),$(`zh`)}),Ge.addEventListener(`click`,()=>{a(`en`),$(`en`)}),x&&($(l()),s(()=>{M=!0,Z()})),e.onReady(async()=>{document.addEventListener(`click`,t=>{!(t.target instanceof Element)||!t.target.closest(`#recover-historical-three-dragon`)||e.broadcast.sendMessage(`com.obr-suite/three-dragon-ante/open`,{existingOnly:!0},{destination:`LOCAL`}).catch(e=>console.warn(`[three-dragon] recovery request failed`,e))});let t=x?n():Promise.resolve(),a=ve(),o=()=>{A===`bossBar`&&Z()};e.broadcast.onMessage(te,o),window.addEventListener(`storage`,e=>{(e.key===`obr-suite/boss-bar/preferences`||e.key===null)&&o()}),e.broadcast.onMessage(m,e=>{let t=e.data?.modules;if(Array.isArray(t)){K.clear();for(let e of t)e&&typeof e.id==`string`&&K.set(e.id,e);Q()}}),e.broadcast.sendMessage(h,{},{destination:`LOCAL`}).catch(e=>console.warn(`[settings] module status query failed`,e));try{j=await e.player.getRole()===`GM`}catch(e){console.warn(`[obr-suite/settings] getRole failed — rendering as PLAYER`,e)}e.player.onChange(e=>{let t=e.role===`GM`;t!==j&&(j=t,X(),Z())}),ne().then(()=>{A===`library`&&Z()}),await a;try{(await d(()=>import(`./debugOverlay-BC2hYfAU.js`).then(e=>e.t),__vite__mapDeps([0,1,2]))).installDebugOverlay()}catch{}await t,r(),e.scene.onMetadataChange(e=>{let t=e,n=z(t),r=B(t),i=V(t),a=he(t),o=ge(t);(n!==N||r!==P||i!==F||a!==I||o!==L)&&(N=n,P=r,F=i,I=a,L=o,A===`bubbles`&&Z())}),i(()=>Z()),c(e=>$(e)),$(l())});