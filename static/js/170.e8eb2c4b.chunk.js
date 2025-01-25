"use strict";(self.webpackChunkoatsfx_btd6_tool=self.webpackChunkoatsfx_btd6_tool||[]).push([[170],{1309:(e,o,s)=>{s.d(o,{P:()=>l});var r=s(5043);const l=e=>{const[o,s]=(0,r.useState)({}),l=[{name:"Regular",path:"data/OriginalRounds.json",isComplete:!0},{name:"Alternate Bloons Rounds",path:"data/alternateRound140.json",isComplete:!0},{name:"Bloonarius",path:"data/bloonarius.json",isComplete:!0},{name:"Lych",path:"data/lych.json",isComplete:!0},{name:"Vortex",path:"data/vortex.json",isComplete:!0},{name:"Dreadbloon",path:"data/dreadbloon.json",isComplete:!0},{name:"Phayze",path:"data/phayze.json",isComplete:!0},{name:"Race #291: Density Insanity",path:"data/raceExperiment.json",isComplete:!0}],[t,a]=(0,r.useState)(!0);return(0,r.useEffect)((()=>{(async()=>{try{const o=await fetch(l[e].path);if(!o.ok)throw new Error("Failed to fetch data");const r=await o.json();r.rounds=r.rounds.filter((e=>0!==e.roundNumber));const t=[];for(let e of r.rounds)for(let o of e.bloonGroups)t.includes(o.bloon)||t.push(o.bloon);s(r)}catch(o){console.log(o)}finally{a(!1)}})()}),[e]),{data:o,roundSetsDefs:l,loading:t}}},9170:(e,o,s)=>{s.r(o),s.d(o,{default:()=>d});var r=s(1309),l=s(5043),t=s(5042),a=s(422),n=s(3204),i=s(6229),c=s(579);const d=()=>{const[e,o]=(0,l.useState)(0),[s,d]=(0,l.useState)([]),[m,u]=(0,l.useState)([]),[b,p]=(0,l.useState)(!1),{data:x,roundSetsDefs:h,loading:f}=(0,r.P)(e),g=e=>{const o=[...s],r=[...m];if(o.includes(e)){const s=o.indexOf(e);o.splice(s,1),r.push(e)}else if(r.includes(e)){const o=r.indexOf(e);r.splice(o,1)}else o.push(e);d(o),u(r)};return(0,l.useEffect)((()=>{const e=s.reduce(((e,o)=>(console.log(o),x.rounds.some((e=>e.bloonGroups.some((e=>e.bloon===o))))&&e.push(o),e)),[]),o=m.reduce(((e,o)=>(console.log(o),x.rounds.some((e=>e.bloonGroups.some((e=>e.bloon===o))))&&e.push(o),e)),[]);d(e),u(o)}),[x]),(0,c.jsxs)("div",{className:"flex flex-col items-center align-center justify-center",children:[(0,c.jsx)("p",{className:"font-bold text-2xl py-2 font-display tracking-tighter text-accent",children:"Rounds Utility"}),f?(0,c.jsx)(i.R,{}):(0,c.jsxs)("div",{className:"flex flex-col w-5/6 items-center justify-center align-center gap-2",children:[(0,c.jsxs)("div",{className:"flex items-center justify-center gap-6 w-full",children:[(0,c.jsxs)("div",{className:"flex items-center justify-center gap-6",children:[(0,c.jsx)("p",{children:"Round Set: "}),(0,c.jsx)("select",{id:"tile-select",className:"select select-bordered max-w-xs",onChange:e=>{o(e.target.options.selectedIndex)},value:h[e].name,children:h.map(((e,o)=>(0,c.jsx)("option",{children:e.name},o)))})]}),(0,c.jsxs)("button",{className:"btn",onClick:()=>document.getElementById("tower-modal").showModal(),children:[(0,c.jsx)(n.YsJ,{size:18}),"Filters"]})]}),(0,c.jsxs)("dialog",{id:"tower-modal",className:"modal",children:[(0,c.jsxs)("div",{className:"modal-box max-w-3xl",children:[(0,c.jsxs)("h3",{className:"font-bold text-lg flex gap-2 items-center",children:[(0,c.jsx)(n.YsJ,{size:14}),"Filters"]}),(0,c.jsx)("p",{className:"py-4",children:"Add or remove Bloon types when displaying Rounds."}),(0,c.jsxs)("div",{className:"flex items-center justify-center gap-6",children:[(0,c.jsx)("p",{children:"Show Missing Bloons: "}),(0,c.jsx)("input",{type:"checkbox",className:"checkbox",onClick:()=>p((e=>!e))}),(0,c.jsx)("button",{className:"btn btn-sm outline outline-1 outline-error text-error",onClick:()=>{u([]),d([])},children:"Reset Filters"})]}),(0,c.jsxs)("div",{className:"flex flex-col items-center",children:[(0,c.jsxs)("div",{className:"flex w-full gap-4",children:[(0,c.jsxs)("div",{className:"overflow-x-hidden w-full max-h-56 h-56 my-2 py-4 flex flex-col items-center bg-base-200",children:[(0,c.jsx)("p",{className:"font-semibold",children:"Included Bloons"}),(0,c.jsx)("div",{className:"flex w-full px-12 py-4 gap-2 flex-wrap items-center justify-center",children:s.map((e=>(0,c.jsx)("button",{className:"py-2 px-2 transition outline outline-0 ease-in-out bg-opacity-20 border-b"+(s.includes(e)?" bg-success bg-opacity-25 border-success outline-success":m.includes(e)?" bg-error bg-opacity-25 border-error outline-error":" bg-black")+(x.rounds.some((o=>o.bloonGroups.some((o=>o.bloon===e))))?" hover:cursor-pointer hover:bg-opacity-70 hover:outline-1":" cursor-not-allowed hover:outline-white/25 hover:border-b"),onClick:()=>{g(e)},disabled:!x.rounds.some((o=>o.bloonGroups.some((o=>o.bloon===e)))),children:(0,c.jsx)("img",{className:"h-7"+(x.rounds.some((o=>o.bloonGroups.some((o=>o.bloon===e))))?"":" opacity-25"),src:a.yb[e]})},e)))})]}),(0,c.jsxs)("div",{className:"overflow-x-hidden w-full max-h-56 h-56 my-2 py-4 flex flex-col items-center bg-base-200",children:[(0,c.jsx)("p",{className:"font-semibold",children:"Excluded Bloons"}),(0,c.jsx)("div",{className:"flex w-full px-12 py-4 gap-2 flex-wrap items-center justify-center",children:m.map((e=>(0,c.jsx)("button",{className:"py-2 px-2 transition outline outline-0 ease-in-out bg-opacity-20 border-b"+(s.includes(e)?" bg-success bg-opacity-25 border-success outline-success":m.includes(e)?" bg-error bg-opacity-25 border-error outline-error":" bg-black")+(x.rounds.some((o=>o.bloonGroups.some((o=>o.bloon===e))))?" hover:cursor-pointer hover:bg-opacity-70 hover:outline-1":" cursor-not-allowed hover:outline-white/25 hover:border-b"),onClick:o=>{g(e)},disabled:!x.rounds.some((o=>o.bloonGroups.some((o=>o.bloon===e)))),children:(0,c.jsx)("img",{className:"h-7"+(x.rounds.some((o=>o.bloonGroups.some((o=>o.bloon===e))))?"":" opacity-25"),src:a.yb[e]})},e)))})]})]}),(0,c.jsx)("div",{className:"flex flex-wrap items-center justify-center gap-2",children:t.ef.filter((e=>!!b||x.rounds.some((o=>o.bloonGroups.some((o=>o.bloon===e)))))).filter((e=>!s.includes(e)&&!m.includes(e))).map((e=>(0,c.jsx)("button",{className:"py-2 px-2 transition outline outline-0 ease-in-out bg-opacity-20 border-b"+(s.includes(e)?" bg-success bg-opacity-25 border-success outline-success":m.includes(e)?" bg-error bg-opacity-25 border-error outline-error":" bg-black")+(x.rounds.some((o=>o.bloonGroups.some((o=>o.bloon===e))))?" hover:cursor-pointer hover:bg-opacity-70 hover:outline-1":" cursor-not-allowed hover:outline-white/25 hover:border-b"),onClick:o=>{g(e)},disabled:!x.rounds.some((o=>o.bloonGroups.some((o=>o.bloon===e)))),children:(0,c.jsx)("img",{className:"h-7"+(x.rounds.some((o=>o.bloonGroups.some((o=>o.bloon===e))))?"":" opacity-25"),src:a.yb[e]})},e)))}),(0,c.jsx)("i",{children:"Clicking a bloon includes it. Click it again to exclude it."})]}),(0,c.jsx)("div",{className:"modal-action",children:(0,c.jsx)("form",{method:"dialog",children:(0,c.jsx)("button",{className:"btn outline outline-1 outline-error text-error",children:"Close"})})})]}),(0,c.jsx)("form",{method:"dialog",className:"modal-backdrop",children:(0,c.jsx)("button",{children:"close"})})]}),(0,c.jsxs)("p",{children:["Showing"," ",x.rounds.filter((e=>!m.some((o=>e.bloonGroups.some((e=>e.bloon===o))))&&(!!s.every((o=>e.bloonGroups.some((e=>e.bloon===o))))||void 0))).length," ","round",1===x.rounds.filter((e=>!m.some((o=>e.bloonGroups.some((e=>e.bloon===o))))&&(!!s.every((o=>e.bloonGroups.some((e=>e.bloon===o))))||void 0))).length?"":"s"," ","of ",x.rounds.length]}),x.rounds.filter((e=>!m.some((o=>e.bloonGroups.some((e=>e.bloon===o))))&&(!!s.every((o=>e.bloonGroups.some((e=>e.bloon===o))))||void 0))).map((e=>(0,c.jsxs)("div",{className:"flex flex-col bg-black/25 p-4 gap-2 w-full",id:"round-"+e.roundNumber,children:[(0,c.jsxs)("div",{className:"flex justify-between gap-4 bg-black/25 px-2",children:[(0,c.jsxs)("p",{className:"text-xl font-semibold",children:["Round ",e.roundNumber]}),(0,c.jsxs)("p",{className:"text-lg font-semibold",children:[(0,t.D9)(e)/1e3,"s"]})]}),(0,c.jsx)("div",{className:"flex flex-col gap-2",children:e.bloonGroups.sort(((e,o)=>e.start!==o.start?e.start-o.start:e.start+e.duration-(o.start+o.duration))).map(((o,s)=>(0,c.jsxs)("div",{className:"flex gap-4",children:[(0,c.jsxs)("div",{className:"flex items-center justify-center gap-2 text-nowrap w-[5rem] tooltip","data-tip":o.bloon,children:[(0,c.jsx)("img",{className:"h-6",style:{left:"".concat(1e3*o.start/(0,t.D9)(e)*100,"%")},src:a.yb[o.bloon]}),(0,c.jsxs)("p",{className:"text-sm",children:["x",o.count]})]}),(0,c.jsx)("div",{className:"flex w-full",children:(0,c.jsx)("div",{className:"flex rounded-sm items-center justify-center relative tooltip "+a.Iq[o.bloon],style:{width:"".concat(1e3*o.duration/(0,t.D9)(e)*100,"%"),left:"".concat(1e3*o.start/(0,t.D9)(e)*100,"%")},"data-tip":o.bloon,children:(0,c.jsxs)("p",{className:"text-nowrap text-sm text-white font-semibold drop-shadow-[0_1px_1px_rgba(0,0,0,1)]",children:[Math.round(100*o.start)/100,"s -"," ",Math.round(100*(o.start+o.duration))/100,"s"]})})})]},s)))})]},e.roundNumber)))]}),(0,c.jsx)("div",{className:"divider"})]})}},5042:(e,o,s)=>{s.d(o,{D9:()=>l,IC:()=>t,ef:()=>r});const r=["Red","RedCamo","RedRegrow","RedRegrowCamo","Blue","BlueCamo","BlueRegrow","BlueRegrowCamo","Green","GreenCamo","GreenRegrow","GreenRegrowCamo","Yellow","YellowCamo","YellowRegrow","YellowRegrowCamo","Pink","PinkCamo","PinkRegrow","PinkRegrowCamo","Black","BlackCamo","BlackRegrow","BlackRegrowCamo","White","WhiteCamo","WhiteRegrow","WhiteRegrowCamo","Purple","PurpleCamo","PurpleRegrow","PurpleRegrowCamo","Zebra","ZebraCamo","ZebraRegrow","ZebraRegrowCamo","Lead","LeadCamo","LeadFortified","LeadFortifiedCamo","LeadRegrow","LeadRegrowCamo","LeadRegrowFortified","LeadRegrowFortifiedCamo","Rainbow","RainbowCamo","RainbowRegrow","RainbowRegrowCamo","Ceramic","CeramicCamo","CeramicFortified","CeramicFortifiedCamo","CeramicRegrow","CeramicRegrowCamo","CeramicRegrowFortified","CeramicRegrowFortifiedCamo","Moab","MoabFortified","Bfb","BfbFortified","Zomg","ZomgFortified","DdtCamo","DdtFortifiedCamo","Bad","BadFortified"],l=e=>{const o=e.bloonGroups.reduce(((e,o)=>{const s=o.start+o.duration;return Math.max(e,s)}),0);return 10*Math.round(100*o)},t=e=>{const o=e.bloonGroups.reduce(((e,o)=>{const s=o.start+o.duration;return Math.max(e,s)}),0);return Math.ceil(60*o)/60*1e3}}}]);
//# sourceMappingURL=170.e8eb2c4b.chunk.js.map