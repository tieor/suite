import{n as e}from"./rolldown-runtime-DQNNOcW4.js";import{d as t}from"./vendor-Bz4s8oZC.js";var n=e({BC_DEBUG_OVERLAY:()=>i,LS_DEBUG_OVERLAY:()=>r,installDebugOverlay:()=>d,isDebugOverlayOn:()=>a,setDebugOverlay:()=>o}),r=`obr-suite/debug-overlay`,i=`com.obr-suite/debug-overlay`;function a(){try{return localStorage.getItem(r)===`1`}catch{return!1}}function o(e){try{localStorage.setItem(r,e?`1`:`0`)}catch{}try{t.broadcast.sendMessage(i,{on:e},{destination:`LOCAL`})}catch{}}var s=!1;function c(){if(s)return;s=!0;let e=document.createElement(`style`);e.textContent=`
body.debug-overlay-on {
  background: rgba(245, 166, 35, 0.18) !important;
  outline: 2px dashed rgba(245, 166, 35, 0.55);
  outline-offset: -2px;
}
body.debug-overlay-on::before {
  content: "DEBUG";
  position: fixed;
  top: 2px; right: 4px;
  font: 700 9px ui-monospace, Consolas, monospace;
  letter-spacing: 0.3px;
  color: rgba(245, 166, 35, 0.9);
  background: rgba(0, 0, 0, 0.45);
  padding: 1px 4px;
  border-radius: 3px;
  pointer-events: none;
  z-index: 99999;
}
`,document.head.appendChild(e)}function l(e){document.body.classList.toggle(`debug-overlay-on`,e)}var u=!1;function d(){if(!u){u=!0,c(),l(a());try{t.broadcast.onMessage(i,e=>{let t=!!e.data?.on;try{localStorage.setItem(r,t?`1`:`0`)}catch{}l(t)})}catch{}}}export{d as n,n as t};