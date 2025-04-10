"use strict";(self.webpackChunkoatsfx_btd6_tool=self.webpackChunkoatsfx_btd6_tool||[]).push([[872],{4405:(e,a,s)=>{s.d(a,{B:()=>l});var t=s(579);const l=e=>{let{selectionName:a,selectionId:s,selections:l}=e;return(0,t.jsx)("div",{className:"flex gap-2",children:l.map((e=>(0,t.jsx)("a",{className:"py-2 px-2 transition ease-in-out border-b bg-black hover:bg-opacity-70 hover:cursor-pointer hover:text-accent hover:border-b-2"+(e.ids.includes(s)?" bg-black bg-opacity-30 text-primary border-b-2":" bg-opacity-0"),onClick:()=>{e.onClickFunction()},children:e.name},e.name)))})}},1589:(e,a,s)=>{s.d(a,{A:()=>t});const t=[{id:"m95j4jxz",number:70},{id:"m8hqi31i",number:69},{id:"m83itkz6",number:68},{id:"m7ju46fy",number:67},{id:"m6y0a205",number:66},{id:"m6h1l4xd",number:65},{id:"m5k2an8p",number:64},{id:"m4q6vtme",number:63},{id:"m4q6ddt7",number:62},{id:"m4adofkk",number:61},{id:"m3rvyepv",number:60},{id:"m34yd7qs",number:59},{id:"m2kwlt60",number:58},{id:"m22b3l2q",number:57},{id:"m18f2i05",number:56},{id:"m0n34q7z",number:55},{id:"m05t53n4",number:54},{id:"lzt9vnfv",number:53},{id:"lywiirac",number:52},{id:"lygltxgu",number:51},{id:"lxo2ds1k",number:50},{id:"lx9ho5f2",number:49},{id:"lwsgoq2e",number:48},{id:"lw3zptqw",number:47},{id:"lvk1it2j",number:46},{id:"luub1xz5",number:45},{id:"lug12fgd",number:44},{id:"lts2aqan",number:43},{id:"ltkys2el",number:42},{id:"lswkbyus",number:41},{id:"ls2jg6ct",number:40},{id:"lrlbwtxn",number:39},{id:"lr3uz1d8",number:38},{id:"lqa43ghl",number:37},{id:"lq63jr4t",number:36},{id:"lphkfmue",number:35},{id:"lorujl6k",number:34},{id:"lo3dbb57",number:33},{id:"lncmwv1g",number:32},{id:"lndqbo35",number:31},{id:"lmpnzhq6",number:30},{id:"lm77zack",number:29},{id:"lleh5fpm",number:28},{id:"ll1f7vl8",number:27},{id:"lkj6emus",number:26},{id:"ljxai1s8",number:25},{id:"ljetrjjf",number:24},{id:"lisaoa37",number:23},{id:"lhzbbljg",number:22},{id:"lhgt6hxj",number:21},{id:"lgzmgxif",number:20},{id:"lgli8qmt",number:19},{id:"lg1ioh3o",number:18},{id:"lfbp5rsx",number:17},{id:"lenh39dp",number:16},{id:"ledh1q44",number:15},{id:"ldkqe7g6",number:14},{id:"ld2c7egr",number:13},{id:"lcjmdijk",number:12},{id:"lbn286o5",number:11},{id:"lbei2nd1",number:10},{id:"lau3vdb5",number:9},{id:"labw9mm1",number:8},{id:"l9qakvod",number:7},{id:"l9dkq0ma",number:6},{id:"l8t9h7wa",number:5},{id:"l884uw8u",number:4},{id:"l7i90j39",number:3},{id:"l76rtr72",number:2},{id:"l6efnna0",number:1}]},4409:(e,a,s)=>{s.d(a,{P:()=>l});var t=s(5043);const l=function(e,a,s,l){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;const[r,n]=(0,t.useState)({}),[o,c]=(0,t.useState)([]),[d,m]=(0,t.useState)(!0),[b,x]=(0,t.useState)(!1);return(0,t.useMemo)((()=>{const t="https://data.ninjakiwi.com/btd6/bosses/",r="https://data.ninjakiwi.com/btd6/ct/",o={mode:"cors"};(async()=>{m(!0),x(!1),console.log("fetching leaderboards");try{let d="";if("Race"===e){const e=await fetch("https://data.ninjakiwi.com/btd6/races/"),s=await e.json();c(s.body),d=s.body[a].leaderboard}else if("Boss"===e){const e=await fetch(t),s=await e.json();c(s.body),d="Elite"===l?s.body[a].leaderboard_elite_players_1:s.body[a].leaderboard_standard_players_1}else if("Boss2"===e){const e=await fetch(t),s=await e.json();c(s.body),d="Elite"===l?s.body[a].leaderboard_elite_players_1.slice(0,-1)+"2":s.body[a].leaderboard_standard_players_1.slice(0,-1)+"2"}else if("Boss3"===e){const e=await fetch(t),s=await e.json();c(s.body),d="Elite"===l?s.body[a].leaderboard_elite_players_1.slice(0,-1)+"3":s.body[a].leaderboard_standard_players_1.slice(0,-1)+"3"}else if("Boss4"===e){const e=await fetch(t),s=await e.json();c(s.body),d="Elite"===l?s.body[a].leaderboard_elite_players_1.slice(0,-1)+"4":s.body[a].leaderboard_standard_players_1.slice(0,-1)+"4"}else if("CtTeam"===e){const e=await fetch(r),s=await e.json();c(s.body),d=s.body[a].leaderboard_team}else{const e=await fetch(r),s=await e.json();c(s.body),console.log(s),d=s.body[a].leaderboard_player}const m=await fetch(d+"?page="+s,o),b=await m.json();if(!b.success)throw new Error("Unsuccessful: "+b.error);console.log(i);for(let e=1;e<i;e++){const a=await fetch(d+"?page="+(s+e),o);if(!a.ok)throw new Error("Failed to fetch data");const t=await a.json();b.body=b.body.concat(t.body),console.log("got page: ",e)}if("Boss2"===e||"Boss3"===e||"Boss4"===e){let a=0;switch(e){case"Boss2":a=1;break;case"Boss3":a=2;break;case"Boss4":a=3}const s=[],t=[];for(let e=0;e<b.body.length;e++){const l=[],i=e;for(let r=i+1;r<=i+a&&!(r>=b.body.length);r++)b.body[e].scoreParts[0].score===b.body[r].scoreParts[0].score&&(l.push({displayName:b.body[r].displayName,profile:b.body[r].profile}),t.push(r),e++),s.push(l),b.body[i].otherPlayers=l}t.reverse().map((e=>{b.body.splice(e,1)}))}n(b)}catch(b){x(!0),console.log(b)}finally{m(!1)}})()}),[e,a,s,l]),{data:r,events:o,loading:d,error:b}}},5521:(e,a,s)=>{s.r(a),s.d(a,{default:()=>N});var t=s(9967);const l=s.p+"static/media/least_tiers_s.580e5fcabce61c87850b.webp",i=s.p+"static/media/ct_points_s.21c1fa829b0983778c2e.webp";var r=s(642),n=s(9373);const o=[{profileUrl:"https://data.ninjakiwi.com/btd6/users/9fbf128f8cc5fcf61c14894f5a25e5259a521fbf9743d96e",badgeName:"Developer",badgeTip:"Developed this site."}],c=[{profileUrl:"https://data.ninjakiwi.com/btd6/users/9fbf128f8cc5fcf61c14894f5a25e5259a521fbf9743d96e",name:"OatsFX"},{profileUrl:"https://data.ninjakiwi.com/btd6/users/9cb91089ddc5fea31f468c195e70b426cc0d1abe9d44da69",name:"ISAB"}];var d=s(579);const m=e=>{let{name:a,profileUrl:s}=e;const t=c.find((e=>e.name.toLowerCase()===a.toLowerCase()));return(0,d.jsxs)("div",{className:"flex gap-1",children:[o.some((e=>e.profileUrl===s))?o.filter((e=>e.profileUrl===s)).map((e=>(0,d.jsx)("div",{className:"badge badge-neutral tooltip bg-opacity-50 badge-sm -mt-[0.3rem] pb-0.5 hover:text-accent","data-tip":e.badgeTip,children:(0,d.jsx)("p",{className:"pointer-events-none",children:e.badgeName})},e.badgeName))):(0,d.jsx)(d.Fragment,{}),t?(0,d.jsx)("div",{className:"badge badge-neutral tooltip bg-opacity-50 badge-sm -mt-[0.3rem] pb-0.5 hover:text-accent","data-tip":"This is ".concat(t.profileUrl!==s?"not":""," the real ").concat(t.name,"."),children:(0,d.jsx)("p",{className:"pointer-events-none",children:t.profileUrl!==s?"Impersonation":"Verified"})},"verify"):(0,d.jsx)(d.Fragment,{})]})},b=s.p+"static/media/rank.e7cf8836274d5f34b48d.webp",x=s.p+"static/media/rank_veteran.bcbd625b590fcba8958c.webp";var p=s(6229),f=s(5043);const h=e=>{const[a,s]=(0,f.useState)({}),[t,l]=(0,f.useState)(!1),[i,r]=(0,f.useState)(!1);return{data:a,loading:t,fetchData:async()=>{l(!0);try{const a=await fetch(e);if(!a.ok)throw new Error("Failed to fetch data");const t=await a.json();console.log(e),t.model.name,s(t.body)}catch(a){console.log(a)}finally{l(!1)}r(!0)},fetched:i}},u=e=>{let{profileUrl:a,fetched:s,profileData:t,profileLoading:l,isPlayer:i}=e;const o=t,c=t,{data:f,loading:g,fetchData:j,fetched:v}=h(o.owner);return(0,d.jsxs)("dialog",{id:"".concat(a),className:"modal",children:[(0,d.jsxs)("div",{className:"modal-box max-w-3xl bg-top bg-no-repeat bg-contain outline outline-1 outline-white/25",style:{backgroundImage:"linear-gradient(to bottom, rgba(17, 17, 23, 0), rgba(17, 17, 23, 0.5)), url(".concat(t.bannerURL,")")},children:[(0,d.jsx)("div",{className:"modal-action",children:(0,d.jsx)("form",{method:"dialog",children:(0,d.jsx)("button",{className:"btn bg-opacity-80 btn-circle btn-sm outline outline-1 absolute right-6 top-6 outline-error text-error",children:"X"})})}),s&&!l?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:"flex gap-4 items-end pt-8",children:[(0,d.jsx)("img",{src:i?c.avatarURL:o.frameURL,className:"w-[80px] h-[80px] rounded-xs"}),i?(0,d.jsx)(d.Fragment,{}):(0,d.jsx)("img",{src:o.iconURL,className:"w-[80px] h-[80px] rounded-xs absolute"}),(0,d.jsxs)("div",{className:"flex flex-col",children:[(0,d.jsxs)("div",{className:"flex gap-2 items-center",children:[(0,d.jsx)("p",{className:"font-bold font-btd6 text-2xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]",children:i?c.displayName:o.name}),(0,d.jsx)(m,{name:i?c.displayName:o.name,profileUrl:a})]}),i?(0,d.jsxs)("div",{className:"flex gap-2",children:[(0,d.jsxs)("div",{className:"flex gap-2 tooltip","data-tip":"Rank",children:[(0,d.jsx)("img",{src:b,className:"h-[32px] drop-shadow-xl"}),(0,d.jsx)("p",{className:"absolute pt-1 font-black drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-center w-[32px] pointer-events-none",children:c.rank})]}),0!==c.veteranRank?(0,d.jsxs)("div",{className:"flex gap-2 tooltip","data-tip":"Veteran Rank",children:[(0,d.jsx)("img",{src:x,className:"h-[32px] drop-shadow-xl"}),(0,d.jsx)("p",{className:"absolute pt-1 font-black drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-center w-[32px] pointer-events-none",children:c.veteranRank})]}):(0,d.jsx)("div",{className:"flex gap-2"})]}):(0,d.jsxs)("div",{className:"flex gap-2",children:[(0,d.jsx)("img",{className:"h-[32px] drop-shadow-xl"}),(0,d.jsx)("p",{className:"absolute pt-1 font-black drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-center w-[32px]",children:o.status})]})]})]}),i?(0,d.jsx)(d.Fragment,{}):(0,d.jsxs)("div",{className:"overflow-x-hidden w-full max-h-56 h-32 my-2 py-4 flex flex-col items-center bg-base-200 rounded-xl",children:[(0,d.jsxs)("p",{className:"font-semibold text-lg",children:["Players: ",o.numMembers]}),(0,d.jsx)(u,{profileUrl:o.owner,fetched:v,profileData:f,profileLoading:g,isPlayer:!0}),(0,d.jsx)("button",{className:"btn",onClick:()=>{document.getElementById("".concat(o.owner)).showModal(),j()},children:"View Owner"})]}),(0,d.jsxs)("div",{className:"overflow-x-hidden w-full max-h-56 h-56 my-2 py-4 flex flex-col items-center bg-base-200 rounded-xl",children:[(0,d.jsx)("p",{className:"font-semibold text-lg",children:"Medals"}),i?(0,d.jsxs)("div",{className:"indicator items-center w-full px-12 py-4 gap-2 flex-wrap",children:[Object.keys(n.R8).filter((e=>c._medalsRace[(0,r.fh)(e)]>0)).map((e=>{var a;return(0,d.jsxs)("div",{className:"flex flex-col items-center tooltip indicator hidden lg:block","data-tip":"".concat(n.kt[e]),children:[(0,d.jsx)("img",{src:n.R8[e],className:"h-[28px]"}),(0,d.jsx)("div",{className:"indicator-item indicator-bottom indicator-center badge badge-sm bg-opacity-90",children:null!==(a=c._medalsRace[(0,r.fh)(e)])&&void 0!==a?a:0})]})})),Object.keys(n.oD).filter((e=>c._medalsBoss[(0,r.fh)(e)]>0)).map((e=>{var a;return(0,d.jsxs)("div",{className:"flex flex-col items-center tooltip indicator hidden lg:block","data-tip":"".concat(n.kt[e]),children:[(0,d.jsx)("img",{src:n.oD[e],className:"h-[28px]"}),(0,d.jsx)("div",{className:"indicator-item indicator-bottom indicator-center badge badge-sm bg-opacity-90",children:null!==(a=c._medalsBoss[(0,r.fh)(e)])&&void 0!==a?a:0})]})})),Object.keys(n.o9).filter((e=>c._medalsBossElite[(0,r.fh)(e)]>0)).map((e=>{var a;return(0,d.jsxs)("div",{className:"flex flex-col items-center tooltip indicator hidden lg:block","data-tip":"".concat(n.kt[e]),children:[(0,d.jsx)("img",{src:n.o9[e],className:"h-[28px]"}),(0,d.jsx)("div",{className:"indicator-item indicator-bottom indicator-center badge badge-sm bg-opacity-90",children:null!==(a=c._medalsBossElite[(0,r.fh)(e)])&&void 0!==a?a:0})]})})),Object.keys(n.Ks).filter((e=>c._medalsCTGlobal[(0,r.fh)(e)]>0)).map((e=>{var a;return c._medalsCTGlobal[(0,r.fh)(e)]>0?(0,d.jsxs)("div",{className:"flex flex-col items-center tooltip indicator hidden lg:block","data-tip":"".concat(n.kt[e]),children:[(0,d.jsx)("img",{src:n.Ks[e],className:"h-[28px]"}),(0,d.jsx)("div",{className:"indicator-item indicator-bottom indicator-center badge badge-sm bg-opacity-90",children:null!==(a=c._medalsCTGlobal[(0,r.fh)(e)])&&void 0!==a?a:0})]}):(0,d.jsx)(d.Fragment,{})}))]}):(0,d.jsx)("i",{className:"text-xs",children:"Nothing to see here... Literally"})]})]}):(0,d.jsx)("div",{className:"flex justify-center",children:(0,d.jsx)(p.R,{})})]}),(0,d.jsx)("form",{method:"dialog",className:"modal-backdrop",children:(0,d.jsx)("button",{children:"close"})})]})},g=u,j=e=>{var a;let{entry:s,index:o,event:c,eventType:b,delta:x,showDelta:p,bossMode:f}=e;const u="CtTeam"!==b,{data:j,loading:v,fetchData:y,fetched:w}=h(s.profile),N=j,k=j,_=()=>{if(!p)return(0,d.jsx)(d.Fragment,{});let e="",a=!1;switch(b){case"Race":e=(0,r.xX)(x);break;case"Boss":case"Boss2":case"Boss3":case"Boss4":if("GameTime"===c.scoringType)e=(0,r.xX)(x);else e=x.toLocaleString();break;case"CtPlayer":case"CtTeam":a=!0,e=0!==x?(-1*x).toLocaleString():x.toLocaleString()}return(0,d.jsxs)("p",{className:"font-semibold text-sm drop-shadow-[0_1px_0px_rgba(0,0,0,0.4)]"+((a?x>=0:x<=0)?" text-success":" text-error"),children:[x<=0?"-":"+",e]})};return(0,d.jsxs)("div",{className:"flex flex-col gap-1 w-5/6 items-end",children:[(0,d.jsx)(g,{profileUrl:s.profile,fetched:w,profileData:j,profileLoading:v,isPlayer:u}),(0,d.jsxs)("div",{className:"indicator w-full flex outline outline-2 outline-white/30 hover:cursor-pointer justify-between px-5 py-1 bg-center bg-cover",style:{backgroundImage:w?"linear-gradient(to bottom, rgba(17, 17, 23, 0.2), rgba(17, 17, 23, 0.6)), url(".concat(j.bannerURL,")"):"linear-gradient(to bottom, rgba(17, 17, 23, 0.2), rgba(17, 17, 23, 0.6)), url(https://static-api.nkstatic.com/appdocs/4/assets/opendata/bbd8e1412f656b91db7df7aabbc1598b_TeamsBannerDeafult.png)"},onClick:()=>{document.getElementById("".concat(s.profile)).showModal(),y()},children:[(0,d.jsxs)("div",{className:"flex justify-start w-1/2",children:[(0,d.jsxs)("div",{className:"flex items-center gap-2 w-20",children:[(()=>{let e="";switch(b){case"Race":e=(0,r.be)(o+1,c.totalScores);break;case"Boss":case"Boss2":case"Boss3":case"Boss4":e="Standard"===f?(0,r.u3)(o+1,c.totalScores_standard):(0,r.Ei)(o+1,c.totalScores_standard);break;case"CtTeam":e=(0,r.YG)(o+1,c.totalScores_team);break;case"CtPlayer":e=(0,r.Us)(o+1,c.totalScores_player)}return(0,d.jsx)("img",{src:e,className:"w-[34px]"})})(),(0,d.jsx)("p",{className:"font-medium",children:(0,r.F$)(o+1)})]}),(0,d.jsxs)("div",{className:"flex items-center gap-2 w-1/4",children:[(0,d.jsx)("img",{src:w?u?k.avatarURL:N.frameURL:u?"https://static-api.nkstatic.com/appdocs/4/assets/opendata/db32af61df5646951a18c60fe0013a31_ProfileAvatar01.png":"https://static-api.nkstatic.com/appdocs/4/assets/opendata/4570fe44e0c89a609dd4853af7751bdb_TeamFrame1.png",className:"w-[38px]"}),u?(0,d.jsx)(d.Fragment,{}):(0,d.jsx)("img",{src:N.iconURL,className:"w-[38px] absolute"}),(0,d.jsxs)("div",{className:"flex flex-col flex-nowrap",children:[(0,d.jsx)("p",{className:"[text-shadow:_0_2px_0_rgb(0_0_0)] font-semibold tracking-wider font-btd6 text-lg text-nowrap",children:s.displayName}),(0,d.jsx)(m,{name:s.displayName,profileUrl:s.profile})]})]})]}),(0,d.jsxs)("div",{className:"flex justify-between w-1/2 gap-[1.2rem]",children:[(()=>{switch(b){case"Race":return w?(0,d.jsx)("div",{className:"flex h-full gap-3 items-center",children:Object.keys(n.R8).filter((e=>k._medalsRace[(0,r.fh)(e)]>0)).slice(0,5).map((e=>{var a;return k._medalsRace[(0,r.fh)(e)]>0?(0,d.jsxs)("div",{className:"flex flex-col items-center tooltip indicator hidden lg:block","data-tip":"".concat(n.kt[e]),children:[(0,d.jsx)("img",{src:n.R8[e],className:"h-[28px]"}),(0,d.jsx)("div",{className:"indicator-item indicator-bottom indicator-center badge bg-opacity-90",children:null!==(a=k._medalsRace[(0,r.fh)(e)])&&void 0!==a?a:0})]}):(0,d.jsx)(d.Fragment,{})}))}):(0,d.jsx)("div",{className:"flex h-full gap-3 items-center"});case"Boss":case"Boss2":case"Boss3":case"Boss4":return"Standard"===f?w?(0,d.jsx)("div",{className:"flex h-full gap-3 items-center",children:Object.keys(n.oD).filter((e=>k._medalsBoss[(0,r.fh)(e)]>0)).slice(0,5).map((e=>{var a;return k._medalsBoss[(0,r.fh)(e)]>0?(0,d.jsxs)("div",{className:"flex flex-col items-center tooltip indicator hidden lg:block","data-tip":"".concat(n.kt[e]),children:[(0,d.jsx)("img",{src:n.oD[e],className:"h-[28px]"}),(0,d.jsx)("div",{className:"indicator-item indicator-bottom indicator-center badge bg-opacity-90",children:null!==(a=k._medalsBoss[(0,r.fh)(e)])&&void 0!==a?a:0})]}):(0,d.jsx)(d.Fragment,{})}))}):(0,d.jsx)("div",{className:"flex h-full gap-3 items-center"}):w?(0,d.jsx)("div",{className:"flex h-full gap-3 items-center",children:Object.keys(n.o9).filter((e=>k._medalsBossElite[(0,r.fh)(e)]>0)).slice(0,5).map((e=>{var a;return k._medalsBossElite[(0,r.fh)(e)]>0?(0,d.jsxs)("div",{className:"flex flex-col items-center tooltip indicator hidden lg:block","data-tip":"".concat(n.kt[e]),children:[(0,d.jsx)("img",{src:n.o9[e],className:"h-[28px]"}),(0,d.jsx)("div",{className:"indicator-item indicator-bottom indicator-center badge bg-opacity-90",children:null!==(a=k._medalsBossElite[(0,r.fh)(e)])&&void 0!==a?a:0})]}):(0,d.jsx)(d.Fragment,{})}))}):(0,d.jsx)("div",{className:"flex h-full gap-3 items-center"});case"CtTeam":default:return(0,d.jsx)("div",{className:"flex h-full gap-3 items-center"});case"CtPlayer":return w?(0,d.jsx)("div",{className:"flex h-full gap-3 items-center",children:Object.keys(n.Ks).filter((e=>k._medalsCTGlobal[(0,r.fh)(e)]>0)).slice(0,5).map((e=>{var a;return k._medalsCTGlobal[(0,r.fh)(e)]>0?(0,d.jsxs)("div",{className:"flex flex-col items-center tooltip indicator hidden lg:block","data-tip":"".concat(n.kt[e]),children:[(0,d.jsx)("img",{src:n.Ks[e],className:"h-[28px]"}),(0,d.jsx)("div",{className:"indicator-item indicator-bottom indicator-center badge bg-opacity-90",children:null!==(a=k._medalsCTGlobal[(0,r.fh)(e)])&&void 0!==a?a:0})]}):(0,d.jsx)(d.Fragment,{})}))}):(0,d.jsx)("div",{className:"flex h-full gap-3 items-center"})}})(),(0,d.jsxs)("div",{className:"flex flex-col h-full w-1/4 justify-center items-end",children:[(()=>{let e="",a="";switch(b){case"Race":e=(0,r.xX)(s.score);break;case"Boss":case"Boss2":case"Boss3":case"Boss4":switch(s.scoreParts[0].name){case"Game Time":e=(0,r.xX)(s.score);break;case"Cash Spent":a=t,e=s.score.toLocaleString();break;case"Tiers":a=l,e=s.score.toLocaleString();break;default:e=s.score.toLocaleString()}break;case"CtPlayer":case"CtTeam":a=i,e=s.score.toLocaleString()}return(0,d.jsxs)("div",{className:"text-right text-lg flex gap-1 justify-end items-center font-semibold text-nowrap -mt-1 ",children:[(0,d.jsx)("img",{src:a,className:"w-[18px]"}),(0,d.jsx)("span",{className:"font-btd6 drop-shadow-[0_2px_0px_rgba(0,0,0,0.4)]",children:e}),_()]})})(),(()=>{let e="",a="";if(s.scoreParts){switch(c.scoringType){case void 0:case"GameTime":e=(0,r.fF)(c.start+s.scoreParts.filter((e=>"Time after event start"===e.name))[0].score),a=new Date(c.start+s.scoreParts.filter((e=>"Time after event start"===e.name))[0].score).toLocaleString();break;default:e=(0,r.xX)(s.scoreParts.filter((e=>"Game Time"===e.name))[0].score),a="Game Time"}return(0,d.jsx)("span",{className:"text-right text-sm tooltip font-normal text-nowrap -mt-1 drop-shadow-[0_1px_0px_rgba(0,0,0,0.3)]","data-tip":a,children:e})}})()]})]})]},s.profile),null===(a=s.otherPlayers)||void 0===a?void 0:a.map((e=>(0,d.jsxs)("div",{className:"indicator w-full flex outline outline-1 outline-white/30 hover:cursor-pointer justify-between px-6 py-1 bg-center bg-cover",style:{backgroundImage:w?"linear-gradient(to bottom, rgba(17, 17, 23, 0.4), rgba(17, 17, 23, 1)), url(".concat(j.bannerURL,")"):"linear-gradient(to bottom, rgba(17, 17, 23, 0.2), rgba(17, 17, 23, 0.6)), url(https://static-api.nkstatic.com/appdocs/4/assets/opendata/bbd8e1412f656b91db7df7aabbc1598b_TeamsBannerDeafult.png)"},onClick:()=>{console.log("clicked ".concat(e.profile))},children:[(0,d.jsxs)("div",{className:"flex justify-start w-1/2",children:[(0,d.jsx)("div",{className:"flex items-center gap-2 w-20"}),(0,d.jsxs)("div",{className:"flex items-center gap-2 w-1/4",children:[(0,d.jsx)("img",{src:w?k.avatarURL:"https://static-api.nkstatic.com/appdocs/4/assets/opendata/db32af61df5646951a18c60fe0013a31_ProfileAvatar01.png",className:"w-[38px]"}),(0,d.jsxs)("div",{className:"flex flex-col flex-nowrap",children:[(0,d.jsx)("p",{className:"font-semibold text-lg text-nowrap",children:e.displayName}),(0,d.jsx)(m,{name:e.displayName,profileUrl:e.profile})]})]})]}),(0,d.jsxs)("div",{className:"flex justify-start w-1/2 gap-[1.2rem]",children:[w?(0,d.jsx)("div",{className:"flex gap-3 items-center",children:Object.keys(n.R8).filter((e=>k._medalsRace[(0,r.fh)(e)]>0)).slice(0,5).map((e=>{var a;return k._medalsRace[(0,r.fh)(e)]>0?(0,d.jsxs)("div",{className:"flex flex-col items-center tooltip indicator hidden lg:block","data-tip":"".concat(n.kt[e]),children:[(0,d.jsx)("img",{src:n.R8[e],className:"h-[28px]"}),(0,d.jsx)("div",{className:"indicator-item indicator-bottom indicator-center badge bg-opacity-90",children:null!==(a=k._medalsRace[(0,r.fh)(e)])&&void 0!==a?a:0})]}):(0,d.jsx)(d.Fragment,{})}))}):(0,d.jsx)("div",{className:"flex h-full gap-3 items-center"}),(0,d.jsx)("div",{className:"flex flex-col h-full w-16 justify-center items-end"})]})]},e.profile)))]})};var v=s(4405),y=s(1589),w=s(4409);const N=()=>{const[e,a]=(0,f.useState)({alertType:"alert",message:""}),[s,t]=(0,f.useState)("Race"),[l,i]=(0,f.useState)(0),[n,o]=(0,f.useState)(1),[c,m]=(0,f.useState)("Standard"),[b,x]=(0,f.useState)(-1),[h,u]=(0,f.useState)(!1),{data:g,events:N,loading:k,error:_}=(0,w.P)(s,l,n,c),C=e=>{const a=e.target.value;if(""===a||/^[0-9\b]*$/.test(a)){const e=Number(a)<1?1:Number(a);o(e)}};return(0,f.useEffect)((()=>{k||_||1!==n||x(g.body[0].score)}),[k]),(0,d.jsxs)("div",{className:"flex w-full flex-col items-center gap-4",children:[(0,d.jsxs)("p",{className:"font-bold text-2xl py-2 font-display tracking-tighter text-accent",children:[r.vp[s]," Leaderboard"]}),(0,d.jsxs)("div",{className:"flex gap-4 w-full items-center justify-center",children:[(0,d.jsxs)("div",{className:"flex flex-col w-full gap-2 items-center",children:[(0,d.jsx)(v.B,{selectionId:s,selectionName:s,selections:[{ids:["Race"],name:"Race",onClickFunction:()=>{t("Race"),i(0),a({alertType:"alert",message:""}),o(1)}},{ids:["Boss","Boss2","Boss3","Boss4"],name:"Boss",onClickFunction:()=>{t("Boss"),i(0),a({alertType:"alert",message:""}),o(1)}},{ids:["CtTeam","CtPlayer"],name:"Contested Territory",onClickFunction:()=>{t("CtTeam"),i(0),a({alertType:"alert",message:""}),o(1)}}]}),"CtTeam"===s||"CtPlayer"===s?(0,d.jsx)(v.B,{selectionId:s,selectionName:s,selections:[{ids:["CtTeam"],name:"Team",onClickFunction:()=>{t("CtTeam"),o(1)}},{ids:["CtPlayer"],name:"Player",onClickFunction:()=>{t("CtPlayer"),o(1)}}]}):(0,d.jsx)(d.Fragment,{}),"Boss"===s||"Boss2"===s||"Boss3"===s||"Boss4"===s?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(v.B,{selectionId:c,selectionName:c,selections:[{ids:["Standard"],name:"Standard",onClickFunction:()=>{m("Standard"),o(1)}},{ids:["Elite"],name:"Elite",onClickFunction:()=>{m("Elite"),o(1)}}]}),(0,d.jsx)(v.B,{selectionId:s,selectionName:s,selections:[{ids:["Boss"],name:"Solo",onClickFunction:()=>{t("Boss"),a({alertType:"alert",message:""}),o(1)}},{ids:["Boss2"],name:"Duo",onClickFunction:()=>{t("Boss2"),a({alertType:"alert-warning",message:"Co-op leaderboards aren't offically supported by NinjaKiwi. Some values will be wrong, I can't fix that."}),o(1)}},{ids:["Boss3"],name:"Trio",onClickFunction:()=>{t("Boss3"),a({alertType:"alert-warning",message:"Co-op leaderboards aren't offically supported by NinjaKiwi. Some values will be wrong, I can't fix that."}),o(1)}},{ids:["Boss4"],name:"Quad",onClickFunction:()=>{t("Boss4"),a({alertType:"alert-warning",message:"Co-op leaderboards aren't offically supported yet. Some values will be wrong, I can't fix that."}),o(1)}}]})]}):(0,d.jsx)(d.Fragment,{})]}),(0,d.jsx)("div",{className:"divider divider-horizontal"}),(0,d.jsxs)("div",{className:"flex items-center w-full gap-4",children:[(0,d.jsxs)("p",{className:"text-nowrap",children:["Select a ",r.vp[s]," event:"]}),k?(0,d.jsx)("div",{className:"skeleton h-12 w-full max-w-xs"}):(0,d.jsx)("select",{id:"tile-select",className:"select select-bordered w-full max-w-xs",onChange:e=>{console.log(e.target.options.selectedIndex),i(e.target.options.selectedIndex)},value:N[l].name?N[l].name:"CtPlayer"===s||"CtTeam"===s?"".concat(y.A.filter((e=>e.id===N[l].id))[0].number," (").concat(y.A.filter((e=>e.id===N[l].id))[0].id,")"):N[l].id,children:N.map(((e,a)=>(0,d.jsx)("option",{children:e.name?e.name:"CtPlayer"===s||"CtTeam"===s?"".concat(y.A.filter((a=>a.id===e.id))[0].number," (").concat(y.A.filter((a=>a.id===e.id))[0].id,")"):N[l].id},a)))})]})]}),_?(0,d.jsx)(d.Fragment,{}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:"join",children:[(0,d.jsx)("button",{className:"join-item btn"+(g.prev?"":" btn-disabled"),onClick:()=>o(1),children:"\xab"}),(0,d.jsx)("button",{className:"join-item btn"+(g.prev?"":" btn-disabled"),onClick:()=>o((e=>e-1)),children:"\u2039"}),(0,d.jsx)("label",{className:"input join-item bg-base-200 hover:bg-base-300 flex items-center gap-2 z-50",children:(0,d.jsx)("input",{className:"font-medium text-lg max-w-40 text-center",type:"text",inputMode:"numeric",placeholder:"Score",value:n,onChange:C})}),(0,d.jsx)("button",{className:"join-item btn"+(g.next?"":" btn-disabled"),onClick:()=>o((e=>e+1)),children:"\u203a"}),(0,d.jsx)("button",{className:"join-item btn btn-disabled tooltip"+(g.next?"":" btn-disabled"),onClick:()=>o(25),"data-tip":"I don't know the max pages for this event.",children:"\xbb"})]}),(0,d.jsxs)("label",{className:"flex gap-4 cursor-pointer items-center",children:[(0,d.jsx)("input",{type:"checkbox",checked:h,className:"checkbox",onChange:()=>u((e=>!e))}),(0,d.jsx)("span",{className:"label-text",children:"Show Delta"})]}),k?(0,d.jsx)(d.Fragment,{}):(0,d.jsxs)("p",{children:["Showing players"," ",(0,r.F$)((n-1)*g.body.length+1),"-",(0,r.F$)(n*g.body.length)," of"," ",(()=>{switch(s){case"Boss":return"Standard"===c?void 0!==N[l].totalScores_standard?N[l].totalScores_standard:0:void 0!==N[l].totalScores_elite?N[l].totalScores_elite:0;case"CtPlayer":return void 0!==N[l].totalScores_player?N[l].totalScores_player:0;case"CtTeam":return void 0!==N[l].totalScores_team?N[l].totalScores_team:0;default:return void 0!==N[l].totalScores?N[l].totalScores:0}})().toLocaleString()," entries."]})]}),e.message.length>0?(0,d.jsxs)("div",{role:"alert",className:"alert w-2/3 "+e.alertType,children:[(0,d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"stroke-current shrink-0 h-6 w-6",fill:"none",viewBox:"0 0 24 24",children:(0,d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})}),(0,d.jsx)("span",{children:e.message})]}):(0,d.jsx)(d.Fragment,{}),_?(0,d.jsx)("p",{children:"Failed to grab data."}):(0,d.jsx)(d.Fragment,{children:k?(0,d.jsx)(p.R,{}):g.body.map(((e,a)=>(0,d.jsx)(j,{entry:e,index:a+(n-1)*g.body.length,event:N[l],eventType:s,delta:e.score-b,showDelta:h,bossMode:c},a)))}),_||k?(0,d.jsx)(d.Fragment,{}):(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{className:"join",children:[(0,d.jsx)("button",{className:"join-item btn"+(g.prev?"":" btn-disabled"),onClick:()=>o(1),children:"\xab"}),(0,d.jsx)("button",{className:"join-item btn"+(g.prev?"":" btn-disabled"),onClick:()=>o((e=>e-1)),children:"\u2039"}),(0,d.jsx)("label",{className:"input join-item bg-base-200 hover:bg-base-300 flex items-center gap-2 z-50",children:(0,d.jsx)("input",{className:"font-medium text-lg max-w-40 text-center",type:"text",inputMode:"numeric",placeholder:"Score",value:n,onChange:C})}),(0,d.jsx)("button",{className:"join-item btn"+(g.next?"":" btn-disabled"),onClick:()=>o((e=>e+1)),children:"\u203a"}),(0,d.jsx)("button",{className:"join-item btn btn-disabled tooltip"+(g.next?"":" btn-disabled"),onClick:()=>o(25),"data-tip":"I don't know the max pages for this event.",children:"\xbb"})]})})]})}},9967:(e,a,s)=>{e.exports=s.p+"static/media/least_cash_s.39058b7c9ad6a6632888.webp"}}]);
//# sourceMappingURL=872.95dc229e.chunk.js.map