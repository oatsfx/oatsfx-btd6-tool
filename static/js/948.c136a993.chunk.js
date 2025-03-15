"use strict";(self.webpackChunkoatsfx_btd6_tool=self.webpackChunkoatsfx_btd6_tool||[]).push([[948],{1589:(e,l,s)=>{s.d(l,{A:()=>t});const t=[{id:"m83itkz6",number:68},{id:"m7ju46fy",number:67},{id:"m6y0a205",number:66},{id:"m6h1l4xd",number:65},{id:"m5k2an8p",number:64},{id:"m4q6vtme",number:63},{id:"m4q6ddt7",number:62},{id:"m4adofkk",number:61},{id:"m3rvyepv",number:60},{id:"m34yd7qs",number:59},{id:"m2kwlt60",number:58},{id:"m22b3l2q",number:57},{id:"m18f2i05",number:56},{id:"m0n34q7z",number:55},{id:"m05t53n4",number:54},{id:"lzt9vnfv",number:53},{id:"lywiirac",number:52},{id:"lygltxgu",number:51},{id:"lxo2ds1k",number:50},{id:"lx9ho5f2",number:49},{id:"lwsgoq2e",number:48},{id:"lw3zptqw",number:47},{id:"lvk1it2j",number:46},{id:"luub1xz5",number:45},{id:"lug12fgd",number:44},{id:"lts2aqan",number:43},{id:"ltkys2el",number:42},{id:"lswkbyus",number:41},{id:"ls2jg6ct",number:40},{id:"lrlbwtxn",number:39},{id:"lr3uz1d8",number:38},{id:"lqa43ghl",number:37},{id:"lq63jr4t",number:36},{id:"lphkfmue",number:35},{id:"lorujl6k",number:34},{id:"lo3dbb57",number:33},{id:"lncmwv1g",number:32},{id:"lndqbo35",number:31},{id:"lmpnzhq6",number:30},{id:"lm77zack",number:29},{id:"lleh5fpm",number:28},{id:"ll1f7vl8",number:27},{id:"lkj6emus",number:26},{id:"ljxai1s8",number:25},{id:"ljetrjjf",number:24},{id:"lisaoa37",number:23},{id:"lhzbbljg",number:22},{id:"lhgt6hxj",number:21},{id:"lgzmgxif",number:20},{id:"lgli8qmt",number:19},{id:"lg1ioh3o",number:18},{id:"lfbp5rsx",number:17},{id:"lenh39dp",number:16},{id:"ledh1q44",number:15},{id:"ldkqe7g6",number:14},{id:"ld2c7egr",number:13},{id:"lcjmdijk",number:12},{id:"lbn286o5",number:11},{id:"lbei2nd1",number:10},{id:"lau3vdb5",number:9},{id:"labw9mm1",number:8},{id:"l9qakvod",number:7},{id:"l9dkq0ma",number:6},{id:"l8t9h7wa",number:5},{id:"l884uw8u",number:4},{id:"l7i90j39",number:3},{id:"l76rtr72",number:2},{id:"l6efnna0",number:1}]},4699:(e,l,s)=>{s.d(l,{f:()=>a});var t=s(5043);const a=e=>{const l="https://storage.googleapis.com/btd6-ct-map/events/"+e+"/tiles.json",[s,a]=(0,t.useState)({}),[i,n]=(0,t.useState)(!0);return(0,t.useMemo)((()=>{(async()=>{try{const e=await fetch(l);if(!e.ok)throw new Error("Failed to fetch data");const s=await e.json();a(s),console.log(s)}catch(e){console.log(e)}finally{n(!1)}})()}),[e]),{data:s,loading:i}}},7080:(e,l,s)=>{s.d(l,{j:()=>a});var t=s(5043);const a=e=>{const l="https://storage.googleapis.com/btd6-ct-map/events/"+e+"/event_relics.json",[s,a]=(0,t.useState)([]),[i,n]=(0,t.useState)(!0);return(0,t.useMemo)((()=>{(async()=>{try{const e=await fetch(l);if(!e.ok)throw new Error("Failed to fetch data");const s=await e.json();a(s),console.log(s)}catch(e){console.log(e)}finally{n(!1)}})()}),[e]),{data:s,loading:i}}},6740:(e,l,s)=>{s.r(l),s.d(l,{default:()=>_});var t=s(9967),a=s(202),i=s(8817),n=s(8678),o=s(4811),r=s(550),c=s(7178),d=s(8638),m=s(5686),u=s(4618);const h=[{name:"Air and Sea",id:"AirAndSea",image:a,description:"Ace, Heli, Buccaneer and Sub have their placement and upgrade costs reduced by 5%, and their reload improved by 5% "},{name:"Box of Monkey",id:"BoxOfMonkey",image:i,description:"Start each game with one free Monkey costing $400 or less for unmodified initial placement."},{name:"Magic Monkeys",id:"MagicMonkeys",image:n,description:"Reduces cost of all Magic Monkeys by 8%."},{name:"Marching Boots",id:"MarchingBoots",image:o,description:"In restricted count games, give players +1 max count of each tower in their loadout or +4 total max count per game."},{name:"Military Monkeys",id:"MilitaryMonkeys",image:r,description:"Reduces cost of all Military Monkeys by 8%."},{name:"Monkey Tycoon",id:"MonkeyTycoon",image:c,description:"Get +1 of all Monkey Towers in your loadout and their base price is reduced by 4%."},{name:"Primary Primates",id:"PrimaryPrimates",image:d,description:"Reduces cost of all Primary Monkeys by 8%."},{name:"Support Simians",id:"SupportSimians",image:m,description:"Reduces cost of all Support Monkeys by 8%."},{name:"Starting Stash",id:"StartingStash",image:u,description:"Start each game with an extra 250 cash (stacks with More Cash on Regular Tiles)."}];var x=s(5043),p=s(579);const f=e=>{let{data:l,eventRelics:s,loading:t,relics:a,handleRelicFilterClick:i}=e;const[n,o]=(0,x.useState)([]),r=e=>{i(e.target.id)};return(0,x.useEffect)((()=>{let e=[];Object.entries(l).map((l=>{l[1].RelicType&&e.push(l[1].RelicType)})),o(e.concat(s))}),[l,s]),(0,p.jsxs)("div",{className:"w-2/3",children:[(0,p.jsx)("p",{className:"text-lg font-medium text-center",children:"Select some Relics"}),(0,p.jsx)("div",{className:"w-full",children:t?(0,p.jsxs)("div",{className:"flex flex-col gap-2 w-full py-2 items-center",children:[(0,p.jsx)("div",{className:"skeleton h-6 w-full"}),(0,p.jsx)("div",{className:"skeleton h-6 w-full"}),(0,p.jsx)("div",{className:"skeleton h-6 w-full"}),(0,p.jsx)("div",{className:"skeleton h-6 w-full"}),(0,p.jsx)("div",{className:"skeleton h-6 w-full"}),(0,p.jsx)("div",{className:"skeleton h-6 w-full"}),(0,p.jsx)("div",{className:"skeleton h-6 w-full"}),(0,p.jsx)("div",{className:"skeleton h-6 w-full"})]}):h.map((e=>(0,p.jsx)("div",{className:"tooltip flex","data-tip":n.includes(e.id)?e.description:"Not available this event.",children:(0,p.jsxs)("label",{className:"label w-full"+(n.includes(e.id)?" cursor-pointer":" cursor-not-allowed opacity-40"),children:[(0,p.jsx)("img",{src:e.image,className:"w-[28px]"}),(0,p.jsx)("span",{className:"label-text",children:e.name}),(0,p.jsx)("input",{type:"checkbox",checked:a.includes(e.id),className:"checkbox checkbox-sm",id:e.id,disabled:!n.includes(e.id),onChange:r})]})},e.id)))})]})};var g=s(9373);const b=s.p+"static/media/selling_disabled.b93aa85cb5afbb0dff98.webp",j=s.p+"static/media/monkey_knowledge_disabled.b3f9bea9fde617f36ea8.webp";var w=s(642);const y=e=>{let{name:l,image:s,indicator:t,boxOfMonkey:a}=e;return(0,p.jsxs)("div",{className:"tooltip before:z-50 before:content-[attr(data-tip)] ","data-tip":(0,w.iS)(l),children:[t?(0,p.jsx)("span",{className:"indicator-item indicator-bottom indicator-center badge px-2 outline outline-white/25 outline-1 rounded-[4px] font-medium shadow-lg",children:t}):(0,p.jsx)(p.Fragment,{}),a?(0,p.jsx)("span",{className:"indicator-item indicator-top font-medium shadow-lg",children:(0,p.jsx)("img",{src:i,className:"w-[24px]"})}):(0,p.jsx)(p.Fragment,{}),(0,p.jsx)("div",{className:"avatar",children:(0,p.jsx)("div",{className:"w-8 rounded-full shadow outline outline-1 outline-white/25",children:(0,p.jsx)("img",{src:s})})})]})},N=e=>{var l;let{tileCode:s,tile:t}=e;return(0,p.jsxs)("div",{className:"indicator w-full flex flex-col outline outline-1 outline-white/50 rounded-xl items-center my-8 py-4 pb-6 bg-no-repeat bg-top bg-cover bg-clip-border "+g.Di[t.GameData.selectedMap],children:[(0,p.jsxs)("div",{className:"indicator-item indicator-top indicator-center badge badge-ghost font-semibold gap-1 px-5 py-3 outline outline-1 outline-white/25",children:[(0,p.jsx)("img",{src:g.pi[t.GameData.subGameType],className:"w-[16px]"}),(0,w.iS)((0,w.YY)(t.GameData.subGameType))]}),(0,p.jsx)("p",{className:"font-bold text-2xl text-center",children:s}),(0,p.jsxs)("p",{className:"font-medium text-md text-center",children:[(0,w.iS)(t.GameData.selectedMap)," //"," ",(0,w.iS)(t.GameData.selectedDifficulty)]}),(0,p.jsxs)("p",{className:"text-md text-center",children:["$".concat(null===(l=t.GameData.dcModel.startRules.cash)||void 0===l?void 0:l.toLocaleString()," // ")," ","Round ".concat(t.GameData.dcModel.startRules.round,"-").concat(t.GameData.dcModel.startRules.endRound)]}),(0,p.jsxs)("div",{className:"flex flex-wrap gap-2 pt-2 justify-center items-center",children:[t.GameData.dcModel.disableSelling?(0,p.jsx)("div",{className:"tooltip indicator before:z-50","data-tip":"Selling Disabled",children:(0,p.jsx)("img",{src:b,className:"w-[34px]"})}):(0,p.jsx)(p.Fragment,{}),t.GameData.dcModel.disableMK?(0,p.jsx)("div",{className:"tooltip indicator before:z-50","data-tip":"Monkey Knowledge Disabled",children:(0,p.jsx)("img",{src:j,className:"w-[34px]"})}):(0,p.jsx)(p.Fragment,{}),"Relic"===t.TileType?(0,p.jsx)("div",{className:"tooltip indicator before:z-50","data-tip":(0,w.iS)(t.RelicType),children:(0,p.jsx)("img",{src:g.Gh[t.RelicType],className:"w-[34px]"})}):(0,p.jsx)("div",{className:"tooltip indicator before:z-50","data-tip":(0,w.iS)(t.TileType),children:(0,p.jsx)("img",{src:g.fO[t.TileType],className:"w-[34px]"})})]}),t.GameData.dcModel.towers._items.filter((e=>e.isHero&&0!==e.max)).length?(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)("div",{className:"divider px-4",children:t.GameData.dcModel.towers._items.filter((e=>e.isHero&&0!==e.max)).length>t.GameData.dcModel.towers._items.filter((e=>e.isHero)).length/2?"Heroes Excluded":"Heroes"}),(0,p.jsx)("div",{className:"flex flex-wrap gap-2 gap-y-3 justify-center",children:t.GameData.dcModel.towers._items.filter((e=>e.isHero&&0!==e.max)).length>t.GameData.dcModel.towers._items.filter((e=>e.isHero)).length/2?t.GameData.dcModel.towers._items.filter((e=>e.isHero&&0===e.max&&"ChosenPrimaryHero"!==e.tower)).map((e=>(0,p.jsx)(y,{name:e.tower,image:g.yc[e.tower]},e.tower))):t.GameData.dcModel.towers._items.filter((e=>e.isHero&&0!==e.max)).map((e=>(0,p.jsx)(y,{name:e.tower,image:g.yc[e.tower]},e.tower)))})]}):null,(0,p.jsx)("div",{className:"divider px-4",children:"Towers"}),(0,p.jsx)("div",{className:"flex flex-wrap gap-2 gap-y-3 justify-center",children:t.GameData.dcModel.towers._items.filter((e=>!e.isHero&&0!==e.max)).map((e=>(0,p.jsx)(y,{name:e.tower,image:g.yc[e.tower],indicator:e.max>0?e.max:"\u221e"},e.tower)))})]})};var v=s(5393),k=s(7294),M=s(2905);const S=e=>{let{data:l,loading:s,selectedTile:t,relics:a,changeTile:i}=e;const[n,o]=(0,x.useState)("All"),[r,c]=(0,x.useState)({}),d=e=>{o(e.target.value)};return(0,x.useEffect)((()=>{const e=Object.keys(l).sort().reduce(((e,s)=>(8!==l[s].GameData.subGameType||"All"!==n&&l[s].TileType!==n||(e[s]=l[s]),e)),{});Object.keys(e).includes(t)||""===t||i(Object.keys(e).at(0)),c(e)}),[n,l]),(0,p.jsx)("div",{className:"w-full",children:(0,p.jsxs)("div",{className:"w-full justify-center",children:[(0,p.jsx)("p",{className:"text-lg font-medium text-center",children:"Select a Tile"}),s?(0,p.jsxs)("div",{className:"flex flex-col gap-2 w-full py-2 items-center",children:[(0,p.jsx)("div",{className:"skeleton h-12 w-full"}),(0,p.jsx)("div",{className:"skeleton h-3 w-full"}),(0,p.jsxs)("div",{className:"flex gap-2",children:[(0,p.jsx)("div",{className:"skeleton w-8 h-8 rounded-full shrink-0"}),(0,p.jsx)("div",{className:"skeleton w-8 h-8 rounded-full shrink-0"}),(0,p.jsx)("div",{className:"skeleton w-8 h-8 rounded-full shrink-0"}),(0,p.jsx)("div",{className:"skeleton w-8 h-8 rounded-full shrink-0"}),(0,p.jsx)("div",{className:"skeleton w-8 h-8 rounded-full shrink-0"}),(0,p.jsx)("div",{className:"skeleton w-8 h-8 rounded-full shrink-0"})]})]}):(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)("div",{className:"flex gap-4 py-1 justify-center",children:[(0,p.jsxs)("label",{className:"label flex-col cursor-pointer",children:[(0,p.jsx)("input",{type:"radio",name:"radio-1",value:"Banner",className:"radio",checked:"Banner"===n,onChange:d}),(0,p.jsx)("img",{className:"w-[28px] py-2",src:v})]}),(0,p.jsxs)("label",{className:"label flex-col cursor-pointer",children:[(0,p.jsx)("input",{type:"radio",name:"radio-1",value:"Relic",className:"radio",checked:"Relic"===n,onChange:d}),(0,p.jsx)("img",{className:"w-[28px] py-2",src:k})]}),(0,p.jsxs)("label",{className:"label flex-col cursor-pointer",children:[(0,p.jsx)("input",{type:"radio",name:"radio-1",value:"Regular",className:"radio",checked:"Regular"===n||"TeamFirstCapture"===n,onChange:d}),(0,p.jsx)("img",{className:"w-[28px] py-2",src:M})]}),(0,p.jsxs)("label",{className:"label flex-col cursor-pointer",children:[(0,p.jsx)("input",{type:"radio",name:"radio-1",value:"All",className:"radio",checked:"All"===n,onChange:d}),(0,p.jsx)("p",{className:"text-sm py-3",children:"All"})]})]}),(0,p.jsxs)("div",{className:"flex items-center justify-center gap-6",children:[(0,p.jsxs)("select",{id:"tile-select",className:"select select-bordered w-full max-w-xs",onChange:e=>{const l=e.target.value;i(l)},defaultValue:"Select a tile",children:[(0,p.jsx)("option",{disabled:!0,children:"Select a tile"}),Object.entries(r).map((e=>(0,p.jsx)("option",{id:e[0],children:e[0]},e[0])))]}),(0,p.jsxs)("details",{className:"dropdown dropdown-right dropdown-center",children:[(0,p.jsx)("summary",{className:"btn w-24",children:"Quick Relic"}),(0,p.jsx)("ul",{className:"p-2 shadow-xl menu dropdown-content z-[1] bg-base-100 rounded-box w-52 outline outline-white/25 outline-1",children:Object.entries(l).map((e=>"Relic"===e[1].TileType&&8===e[1].GameData.subGameType?(0,p.jsx)("li",{children:(0,p.jsxs)("a",{id:e[0],onClick:l=>{((e,l)=>{o("Relic"),i(l),document.getElementById("tile-select").value=e.target.id})(l,e[0])},children:[(0,p.jsx)("img",{className:"w-[20px]",src:g.Gh[e[1].RelicType]}),(0,w.iS)(e[1].RelicType)]})},e[1].RelicType):null))})]})]}),t?(0,p.jsx)(N,{tileCode:t,tile:l[t]}):(0,p.jsx)("p",{className:"text-center",children:"No tile selected."})]})]})})};var T=s(4699);const C={Easy:.85,Medium:1,Hard:1.08},D=e=>{let{solution:l}=e;return(0,p.jsx)("div",{className:"indicator gap-3 items-center px-12 justify-center border-b border-white/25 py-4",children:l.sort(((e,l)=>l.cost-e.cost)).map(((e,l)=>(0,p.jsx)(y,{name:"".concat(e.name,": $").concat(e.cost.toLocaleString()).concat(e.boxOfMonkey?"*":""),image:g.yc[e.name],indicator:e.path,boxOfMonkey:e.boxOfMonkey},l)))})},G=e=>{let{solutions:l,solutionTile:s,solutionNum:t,disableClear:a,clearSolutions:i}=e;return(0,p.jsxs)("div",{className:"w-full",children:[(0,p.jsxs)("p",{className:"text-lg font-bold text-center",children:["Possible Solutions",s?" for ".concat(s," in CT").concat(t):""]}),l.length>0?(0,p.jsxs)("div",{className:"overflow-y-scroll max-h-96 h-96 my-4 py-4 px-12 flex flex-col items-center bg-base-200 rounded-xl",children:[(0,p.jsx)("p",{className:"font-semibold",children:"Solutions"}),(0,p.jsx)("div",{className:"flex flex-wrap w-full gap-x-2 px-2 items-center justify-center",children:l.map(((e,l)=>(0,p.jsx)(D,{solution:e},l)))})]}):(0,p.jsx)("p",{className:"text-center",children:"Solutions will appear here."}),(0,p.jsxs)("p",{className:"text-center italic",children:["Showing ",l.length," total solution",1===l.length?"":"s","."]}),(0,p.jsx)("div",{className:"flex gap-4 items-center justify-center py-2",children:(0,p.jsx)("button",{className:"btn min-w-24 outline outline-1 outline-error text-error",disabled:a,onClick:i,children:"Clear"})})]})};var R=s(1589),H=s(7080);var O=s(6229);const _=()=>{const[e,l]=(0,x.useState)(R.A[0].number),{data:s,loading:a}=(0,T.f)(e),{data:i,loading:n}=(0,H.j)(e),{data:o,loading:r}=(()=>{const e="https://raw.githubusercontent.com/hemisemidemipresent/cyberquincy/master/jsons/costs.json",[l,s]=(0,x.useState)({}),[t,a]=(0,x.useState)(!0);return(0,x.useEffect)((()=>{(async()=>{try{const l=await fetch(e);if(!l.ok)throw new Error("Failed to fetch data");const t=await l.json();Object.entries(t).forEach((e=>{t[e[0].replace("druid_monkey","Druid").replace("engineer","EngineerMonkey").replace(/(_\w)/g,(e=>e[1].toUpperCase())).replace(/^./,(e=>e.toUpperCase()))]=t[e[0]],delete t[e[0]]})),s(t)}catch(l){console.log(l)}finally{a(!1)}})()}),[e]),{data:l,loading:t}})(),{data:c,loading:d}=(()=>{const e="https://raw.githubusercontent.com/hemisemidemipresent/cyberquincy/master/jsons/heroes.json",[l,s]=(0,x.useState)({}),[t,a]=(0,x.useState)(!0);return(0,x.useEffect)((()=>{(async()=>{try{const l=await fetch(e);if(!l.ok)throw new Error("Failed to fetch data");const t=await l.json();Object.entries(t).forEach((e=>{t[e[0].replace("brickell","AdmiralBrickell").replace("churchill","CaptainChurchill").replace("gwen","Gwendolin").replace("jones","StrikerJones").replace("obyn","ObynGreenfoot").replace("pat","PatFusty").replace(/(_\w)/g,(e=>e[1].toUpperCase())).replace(/^./,(e=>e.toUpperCase()))]=t[e[0]],delete t[e[0]]})),s(t)}catch(l){console.log(l)}finally{a(!1)}})()}),[e]),{data:l,loading:t}})(),[m,u]=(0,x.useState)(""),[h,b]=(0,x.useState)([]),[j,N]=(0,x.useState)(0),[v,k]=(0,x.useState)(2),[M,D]=(0,x.useState)(!1),[_,A]=(0,x.useState)(!0),[q,z]=(0,x.useState)(!1),[E,L]=(0,x.useState)([]),[F,B]=(0,x.useState)(""),[P,I]=(0,x.useState)(0),[Q,U]=(0,x.useState)(!1),[V,Y]=(0,x.useState)([]),[$,K]=(0,x.useState)([]),[W,J]=(0,x.useState)([]),[X,Z]=(0,x.useState)([]),[ee,le]=(0,x.useState)([]),se=a||r||d||n;(0,x.useEffect)((()=>{Q&&setTimeout((()=>{te()}),1)}),[Q]);const te=()=>{const l=[],t=s[m].GameData.dcModel.towers._items.filter((e=>!e.isHero&&0!==e.max)),a=s[m].GameData.dcModel.towers._items.filter((e=>e.isHero&&0!==e.max));console.log(t);const i=h.includes("MonkeyTycoon")?1:0,n=h.includes("MarchingBoots")?1:0,r=h.includes("StartingStash")?250:0,d=i+n,u=[{towerType:"all",costMultipiler:C[s[m].GameData.selectedDifficulty]}];h.includes("AirAndSea")&&u.push({towerType:"military",costMultipiler:.95}),h.includes("MilitaryMonkeys")&&u.push({towerType:"military",costMultipiler:.92}),h.includes("MagicMonkeys")&&u.push({towerType:"magic",costMultipiler:.92}),h.includes("MonkeyTycoon")&&u.push({towerType:"all",costMultipiler:.96}),h.includes("PrimaryPrimates")&&u.push({towerType:"primary",costMultipiler:.92}),h.includes("SupportSimians")&&u.push({towerType:"support",costMultipiler:.92}),console.log(u),console.log(c);for(let e=0;e<6;e++)for(let s=0;s<6;s++)for(let t=0;t<6;t++)l.push([e,s,t]);const x=l.filter(((e,l,s)=>s.indexOf(e)===l)).filter((e=>e.filter((e=>e>2)).length<=1)).filter((e=>e.filter((e=>0===e)).length>0)).sort();if(""!==m){B(m),I(e);const l=x.flatMap((e=>Object.entries(o).flatMap((l=>{let[s,a]=l;if(!t.find((e=>s.includes(e.tower))))return{name:s,path:"",cost:-1};const i=w.HK[s],[n,o,r]=e,c=(0,w.QC)(a.cost*u[0].costMultipiler);let d=c+Array.from({length:n+1},((e,l)=>{let s=0;for(let t=0;t<u.length;t++)"all"!==u[t].towerType&&i!==u[t].towerType||(s+=(0,w.QC)(a.upgrades.top_path[l]*u[t].costMultipiler)||0);return s})).reduce(((e,l)=>e+l),0);return d+=Array.from({length:o+1},((e,l)=>{let s=0;for(let t=0;t<u.length;t++)"all"!==u[t].towerType&&i!==u[t].towerType||(s+=(0,w.QC)(a.upgrades.middle_path[l]*u[t].costMultipiler)||0);return s})).reduce(((e,l)=>e+l),0),d+=Array.from({length:r+1},((e,l)=>{let s=0;for(let t=0;t<u.length;t++)"all"!==u[t].towerType&&i!==u[t].towerType||(s+=(0,w.QC)(a.upgrades.bottom_path[l]*u[t].costMultipiler)||0);return s})).reduce(((e,l)=>e+l),0),h.includes("BoxOfMonkey")&&c<=400?[{name:s,path:e.join(""),cost:d},{name:s,path:e.join(""),cost:d-c,boxOfMonkey:!0}]:[{name:s,path:e.join(""),cost:d}]})))).concat(a.map((e=>({name:e.tower,path:"",cost:c[e.tower].cost,isHero:!0})))).filter((e=>e.cost>0&&e.cost<=j)).sort(((e,l)=>l.cost-e.cost));console.log(l);const i=[],n=[];ee.map((e=>{const s=l.find((l=>l.name===e.name&&l.path===e.path));s&&n.push(s)}));const p=n.reduce(((e,l)=>e+l.cost),0);ie({targetPrice:j-p,potentialTowers:l,towerLimit:v-(n.length>v?v:n.length),perTowerLimits:t.map((e=>({name:e.tower,remaining:e.max+d-n.filter((l=>l.name===e.tower)).length,isHero:!1}))).concat(a.map((e=>({name:e.tower,remaining:e.max,isHero:!0})))),block:e=>{e.length>=0&&i.push(n.concat(e))}}),console.log(i),L(_?i.filter((e=>0!==e.filter((e=>{var l,t,a;return(null!==(l=null===(t=o[e.name])||void 0===t?void 0:t.cost)&&void 0!==l?l:null===(a=c[e.name])||void 0===a?void 0:a.cost)<s[m].GameData.dcModel.startRules.cash+r})).length)).sort(((e,l)=>e.length-l.length)):i.sort(((e,l)=>e.length-l.length))),U(!1)}};let ae=0;const ie=e=>{let{targetPrice:l,potentialTowers:s,towerLimit:t,perTowerLimits:a,block:i}=e;if(!i)return;if(0===l){if(M&&0!==t)return;return ae++,void i([])}if(l<0)return;if(0===t)return;if(0===s.length)return;if(ae>=2e3)return;const[n,...o]=s,{name:r,cost:c,boxOfMonkey:d}=n,m=a.findIndex((e=>r.includes(e.name)));0===a[m].remaining||$.includes(r)||X.includes(r)||ie({targetPrice:l-c,potentialTowers:s.filter((e=>!d||!e.boxOfMonkey)),towerLimit:t-1,perTowerLimits:a.map((e=>e.isHero&&n.isHero?{...e,remaining:0}:e.name===r?{...e,remaining:e.remaining-1}:e)),block:e=>{i([n,...e])}}),ie({targetPrice:l,potentialTowers:o,towerLimit:t,perTowerLimits:a,block:e=>{i([...e])}})};return(0,p.jsxs)("div",{className:"flex w-full flex-col items-center",children:[(0,p.jsx)("p",{className:"font-bold text-2xl py-2 font-display tracking-tighter text-accent",children:"Least Cash Reverse Calculator"}),(0,p.jsxs)("div",{className:"flex flex-col gap-4 items-center",children:[(0,p.jsxs)("label",{className:"input input-bordered flex items-center gap-2",children:[(0,p.jsx)("img",{src:t,className:"w-[24px]"}),(0,p.jsx)("input",{className:"font-semibold text-2xl max-w-40",type:"text",inputMode:"numeric",placeholder:"Score",value:j,onChange:e=>{const l=e.target.value;(""===l||/^[0-9\b]*$/.test(l))&&N(Number(l))}})]}),(0,p.jsxs)("div",{className:"flex items-center gap-4",children:[(0,p.jsx)("p",{className:"text-nowrap",children:"Select a CT event:"}),(0,p.jsx)("select",{id:"ct-select",className:"select select-bordered w-full max-w-xs",onChange:e=>{console.log(e.target.options.selectedIndex)},value:e,children:R.A.map((e=>(0,p.jsxs)("option",{value:e.number,onClick:()=>l(e.number),children:[e.number," (",e.id,")"]},e.number)))})]}),(0,p.jsxs)("div",{className:"flex gap-4 items-center",children:[(0,p.jsx)("button",{className:"btn w-24"+(m?"":" btn-disabled"),onClick:()=>document.getElementById("hero-modal").showModal(),children:"Heroes"}),(0,p.jsxs)("dialog",{id:"hero-modal",className:"modal",children:[(0,p.jsxs)("div",{className:"modal-box max-w-3xl",children:[(0,p.jsx)("h3",{className:"font-bold text-lg text-primary",children:"Hero Filters"}),(0,p.jsxs)("p",{className:"py-4",children:["Add any heroes you want the calculation to ",(0,p.jsx)("u",{children:"ALWAYS"})," ","consider."," ",(0,p.jsx)("i",{children:"Note that bought hero levels are not calculated in this."})]}),(0,p.jsxs)("div",{className:"",children:[(0,p.jsxs)("div",{className:"flex w-full gap-4",children:[(0,p.jsxs)("div",{className:"overflow-x-hidden w-full max-h-56 h-56 my-2 py-4 flex flex-col items-center bg-base-200 rounded-xl",children:[(0,p.jsx)("p",{className:"font-semibold",children:"Included Heroes"}),(0,p.jsx)("div",{className:"indicator items-center w-full px-12 py-4 gap-6 flex-wrap",children:W.map(((e,l)=>(0,p.jsx)("a",{className:"btn hover:outline hover:outline-error hover:cursor-pointer",onClick:()=>(e=>{const l=[...W];console.log(e),e>=0&&l.splice(e,1),console.log(l),J(l)})(l),children:(0,p.jsx)(y,{name:"Delete",image:g.yc[e]},"".concat(e))})))})]}),(0,p.jsxs)("div",{className:"overflow-x-hidden w-full max-h-56 h-56 my-2 py-4 flex flex-col items-center bg-base-200 rounded-xl",children:[(0,p.jsx)("p",{className:"font-semibold",children:"Excluded Heroes"}),(0,p.jsx)("div",{className:"indicator items-center w-full px-12 py-4 gap-6 flex-wrap",children:X.map(((e,l)=>(0,p.jsx)("a",{className:"btn hover:outline hover:outline-error hover:cursor-pointer",onClick:()=>(e=>{const l=[...X];console.log(e),e>=0&&l.splice(e,1),console.log(l),Z(l)})(l),children:(0,p.jsx)(y,{name:"Delete",image:g.yc[e]},"".concat(e))})))})]})]}),(0,p.jsx)("div",{className:"gap-y-2 flex flex-wrap my-4 w-full",children:m?Object.entries(s[m].GameData.dcModel.towers._items.filter((e=>e.isHero&&0!==e.max))).map((e=>(0,p.jsx)("div",{className:"basis-1/2 px-4",children:(0,p.jsxs)("div",{className:"flex items-center gap-2",children:[(0,p.jsx)("img",{src:g.yc[e[1].tower],className:"w-[28px]"}),(0,p.jsx)("span",{className:"label-text grow",children:(0,w.iS)(e[1].tower)}),(0,p.jsx)("button",{className:"btn outline outline-1",onClick:()=>(e=>{const l=[...W];l.includes(e)||(l.push(e),console.log(l),J(l))})(e[1].tower),disabled:X.includes(e[1].tower),children:"+"}),(0,p.jsx)("button",{className:"btn outline outline-1 outline-error text-error",onClick:()=>(e=>{const l=[...X];l.includes(e)||(l.push(e),console.log(l),Z(l))})(e[1].tower),disabled:W.includes(e[1].tower),children:"x"})]})},e[0]))):null})]}),(0,p.jsx)("div",{className:"modal-action",children:(0,p.jsx)("form",{method:"dialog",children:(0,p.jsx)("button",{className:"btn outline outline-1 outline-error text-error",children:"Close"})})})]}),(0,p.jsx)("form",{method:"dialog",className:"modal-backdrop",children:(0,p.jsx)("button",{children:"close"})})]}),(0,p.jsx)("button",{className:"btn w-24"+(m?"":" btn-disabled"),onClick:()=>document.getElementById("tower-modal").showModal(),children:"Towers"}),(0,p.jsxs)("dialog",{id:"tower-modal",className:"modal",children:[(0,p.jsxs)("div",{className:"modal-box max-w-3xl",children:[(0,p.jsx)("h3",{className:"font-bold text-lg text-primary",children:"Tower Filters"}),(0,p.jsxs)("p",{className:"py-4",children:["Add any towers and paths you want the calculation to"," ",(0,p.jsx)("u",{children:"ALWAYS"})," consider."]}),(0,p.jsxs)("div",{className:"",children:[(0,p.jsxs)("div",{className:"flex w-full gap-4",children:[(0,p.jsxs)("div",{className:"overflow-x-hidden w-full max-h-56 h-56 my-2 py-4 flex flex-col items-center bg-base-200 rounded-xl",children:[(0,p.jsx)("p",{className:"font-semibold",children:"Included Towers"}),(0,p.jsxs)("div",{className:"indicator items-center w-full px-12 py-4 gap-6 flex-wrap",children:[V.map(((e,l)=>(0,p.jsx)("a",{className:"btn hover:outline hover:outline-error hover:cursor-pointer",onClick:()=>(e=>{const l=[...V];console.log(e),e>=0&&l.splice(e,1),console.log(l),Y(l)})(l),children:(0,p.jsx)(y,{name:"Delete",image:g.yc[e]},"".concat(e))}))),ee.map(((e,l)=>(0,p.jsx)("a",{className:"btn hover:outline hover:outline-error hover:cursor-pointer",onClick:()=>(e=>{const l=[...ee];console.log(e),e>=0&&l.splice(e,1),console.log(l),le(l)})(l),children:(0,p.jsx)(y,{name:"Delete",image:g.yc[e.name],indicator:e.path},"".concat(e.path," ").concat(e.name))})))]})]}),(0,p.jsxs)("div",{className:"overflow-x-hidden w-full max-h-56 h-56 my-2 py-4 flex flex-col items-center bg-base-200 rounded-xl",children:[(0,p.jsx)("p",{className:"font-semibold",children:"Excluded Towers"}),(0,p.jsx)("div",{className:"indicator items-center w-full px-12 py-4 gap-6 flex-wrap",children:$.map(((e,l)=>(0,p.jsx)("a",{className:"btn hover:outline hover:outline-error hover:cursor-pointer",onClick:()=>(e=>{const l=[...$];console.log(e),e>=0&&l.splice(e,1),console.log(l),K(l)})(l),children:(0,p.jsx)(y,{name:"Delete",image:g.yc[e]},"".concat(e))})))})]})]}),(0,p.jsx)("div",{className:"gap-y-2 flex flex-wrap my-4 w-full",children:m?Object.entries(s[m].GameData.dcModel.towers._items.filter((e=>!e.isHero&&0!==e.max))).map((e=>(0,p.jsx)("div",{className:"basis-1/2 px-4",children:(0,p.jsxs)("div",{className:"flex items-center gap-2",children:[(0,p.jsx)("img",{src:g.yc[e[1].tower],className:"w-[28px]"}),(0,p.jsx)("span",{className:"label-text grow",children:(0,w.iS)(e[1].tower)}),(0,p.jsx)("label",{className:"input input-bordered flex max-w-16",children:(0,p.jsx)("input",{className:"font-normal w-full",placeholder:"000",maxLength:3,id:"".concat(e[1].tower,"-path")})}),(0,p.jsx)("button",{className:"btn outline outline-1",onClick:()=>(e=>{const l=[...ee],s=document.getElementById("".concat(e,"-path")).value,t=s.split("").map(Number);if(!s){const l=[...V];if(l.includes(e))return;return l.push(e),console.log(l),void Y(l)}const a=[t].filter((e=>e.filter((e=>e>2)).length<=1)).filter((e=>e.filter((e=>0===e)).length>0)).filter((e=>0===e.filter((e=>e>5)).length)).flatMap((e=>e));console.log(a),0!==a.length?(l.push({name:e,path:s,cost:-1}),console.log(l),le(l)):console.log("INVALID PATH")})(e[1].tower),disabled:$.includes(e[1].tower),children:"+"}),(0,p.jsx)("button",{className:"btn outline outline-1 outline-error text-error",onClick:()=>(e=>{const l=[...$];l.includes(e)||(l.push(e),console.log(l),K(l))})(e[1].tower),disabled:V.includes(e[1].tower)||ee.some((l=>l.name===e[1].tower)),children:"x"})]})},e[0]))):null})]}),(0,p.jsx)("div",{className:"modal-action",children:(0,p.jsx)("form",{method:"dialog",children:(0,p.jsx)("button",{className:"btn outline outline-1 outline-error text-error",children:"Close"})})})]}),(0,p.jsx)("form",{method:"dialog",className:"modal-backdrop",children:(0,p.jsx)("button",{children:"close"})})]}),(0,p.jsxs)("details",{className:"dropdown",children:[(0,p.jsx)("summary",{className:"btn w-24"+(m?"":" btn-disabled"),children:"Filters"}),(0,p.jsxs)("ul",{className:"py-4 shadow-xl menu dropdown-content z-[51] bg-base-100 rounded-box w-64 outline outline-white/25 outline-1",children:[(0,p.jsx)("li",{className:"pointer-events-none",children:(0,p.jsx)("p",{className:"justify-center font-semibold text-lg text-primary",children:"Hero"})}),(0,p.jsx)("li",{children:(0,p.jsxs)("a",{onClick:()=>{z((e=>!e))},children:[(0,p.jsx)("p",{className:"font-medium text-sm",children:"Only show solutions with heroes."}),(0,p.jsx)("input",{type:"checkbox",checked:q,className:"checkbox checkbox-sm",readOnly:!0})]})}),(0,p.jsx)("li",{className:"pointer-events-none",children:(0,p.jsx)("p",{className:"justify-center font-semibold text-lg text-primary",children:"Tower"})}),(0,p.jsxs)("div",{className:"flex flex-col gap-2 items-center justify-center mx-4",children:[(0,p.jsxs)("div",{className:"flex gap-2 items-center justify-center mx-4 w-full",children:[(0,p.jsx)("p",{className:"font-medium whitespace-nowrap",children:"Max Towers:"}),(0,p.jsx)("input",{type:"range",min:1,max:10,value:v,onChange:e=>{const l=e.target.value;k(l)},className:"range range-xs"}),(0,p.jsx)("p",{className:"text-lg font-medium",children:v})]}),(0,p.jsx)("i",{className:"text-xs text-accent",children:"Requires recalculation"})]}),(0,p.jsx)("li",{children:(0,p.jsxs)("a",{onClick:()=>{D((e=>!e))},children:[(0,p.jsxs)("p",{className:"font-medium text-sm",children:["Show solutions with exactly ",v," towers."," ",(0,p.jsx)("i",{className:"text-xs text-accent",children:"Requires recalculation"})]}),(0,p.jsx)("input",{type:"checkbox",checked:M,className:"checkbox checkbox-sm",readOnly:!0})]})}),(0,p.jsx)("li",{className:"pointer-events-none",children:(0,p.jsx)("p",{className:"justify-center font-semibold text-lg text-primary",children:"Miscellaneous"})}),(0,p.jsx)("li",{children:(0,p.jsxs)("a",{onClick:()=>{A((e=>!e))},children:[(0,p.jsxs)("p",{className:"font-medium text-sm",children:["Hide initially unaffordable solutions."," ",(0,p.jsx)("i",{className:"text-xs text-accent",children:"Requires recalculation"})]}),(0,p.jsx)("input",{type:"checkbox",checked:_,className:"checkbox checkbox-sm",readOnly:!0})]})})]})]}),(0,p.jsx)("button",{className:"btn min-w-24 outline outline-1"+(Q?" outline-warning text-warning":" outline-success text-success"),disabled:""===m,onClick:()=>{U(!0),(async()=>{U(!0)})()},children:Q?"Loading...":"Calculate"})]})]}),se?(0,p.jsx)(O.R,{}):(0,p.jsxs)("div",{className:"flex gap-2 py-5 w-full",children:[(0,p.jsx)(S,{data:s,loading:se,selectedTile:m,changeTile:e=>{u(e),console.log(e),console.log(s[e]),s[e].GameData.dcModel.towers._items.filter((e=>!e.isHero&&0!==e.max)).find((e=>"MonkeyVillage"===e.tower))&&console.log("uh oh... a village tile! that'll cause issues with calculations"),s[e].GameData.dcModel.towers._items.filter((e=>e.isHero&&0!==e.max)).find((e=>"Geraldo"===e.tower))&&console.log("uh oh... a geraldo tile! that bozo has a bunch of items that cost cash! luckily all of his things cost the same at every level. HOWEVER, i am too lazy to implement that atm"),le([]),Y([]),K([]),J([]),Z([])},relics:h}),(0,p.jsx)("div",{className:"divider divider-horizontal",children:(0,p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10.605",height:"15.555",className:"fill-neutral-content overflow-visible",children:(0,p.jsx)("path",{d:"m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z"})})}),(0,p.jsx)(f,{data:s,eventRelics:i,loading:se,relics:h,handleRelicFilterClick:e=>{const l=[...h];l.includes(e)?l.splice(l.indexOf(e),1):l.push(e),console.log(l),b(l)}})]}),(0,p.jsx)("div",{className:"divider",children:(0,p.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"10.605",height:"15.555",className:"fill-neutral-content overflow-visible rotate-90",children:(0,p.jsx)("path",{d:"m2.828 15.555 7.777-7.779L2.828 0 0 2.828l4.949 4.948L0 12.727l2.828 2.828z"})})}),(0,p.jsx)(G,{solutions:E.filter((e=>e.some((e=>(0===V.length||V.includes(e.name))&&(0===ee.length||ee.some((l=>l.name===e.name&&l.path===e.path)))))&&e.every((e=>!$.includes(e.name)&&!X.includes(e.name)))&&e.some((e=>0===W.length||W.includes(e.name)))&&(!q||e.some((e=>e.isHero))))),solutionTile:F,solutionNum:P,disableClear:""===m,clearSolutions:()=>{B(""),L([])}}),(0,p.jsx)("div",{className:"divider font-display",children:"Notes"}),(0,p.jsxs)("p",{className:"text-center",children:["This calculator is experimental! It's not guaranteed to work and things could be broken.",(0,p.jsx)("br",{}),"Thanks Josh Cheek (Spike Factory) for the base algorithm. Originally written in Ruby, then converted to TypeScript by me.",(0,p.jsx)("br",{}),"It's possible that the site crashes while doing calculations. All I can say right now is be nice with your parameters.",(0,p.jsx)("br",{}),"There is a hard cap of 2000 solutions.",(0,p.jsx)("br",{})]}),(0,p.jsx)("div",{className:"divider font-display",children:"Nerdy Stuff"}),(0,p.jsx)("p",{className:"text-center"}),(0,p.jsx)("p",{className:"font-semibold",children:"The algorithm works as follows:"}),(0,p.jsxs)("ul",{children:[(0,p.jsx)("li",{children:"- Build data structure (an array) with all possible upgrade paths (000, 203, 051, etc.)"}),(0,p.jsx)("li",{children:"- Apply prices of available towers to possible upgrade paths, removing ones greater than the target score (user input)"}),(0,p.jsx)("li",{children:"- Apply any relic modifers and tower count restrictions"}),(0,p.jsx)("li",{children:"- Generate a ton of combinations (the computation heavy portion)"}),(0,p.jsx)("li",{children:"- Display solutions; hopefully ones with 1 or more high power towers (tiers 4-5; if applicable)"})]}),(0,p.jsx)("div",{className:"divider font-display"})]})}},9967:(e,l,s)=>{e.exports=s.p+"static/media/least_cash_s.39058b7c9ad6a6632888.webp"}}]);
//# sourceMappingURL=948.c136a993.chunk.js.map