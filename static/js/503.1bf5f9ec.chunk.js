"use strict";(self.webpackChunkoatsfx_btd6_tool=self.webpackChunkoatsfx_btd6_tool||[]).push([[503],{1589:(e,a,t)=>{t.d(a,{A:()=>s});const s=[{id:"m6h1l4xd",number:65},{id:"m5k2an8p",number:64},{id:"m4q6vtme",number:63},{id:"m4q6ddt7",number:62},{id:"m4adofkk",number:61},{id:"m3rvyepv",number:60},{id:"m34yd7qs",number:59},{id:"m2kwlt60",number:58},{id:"m22b3l2q",number:57},{id:"m18f2i05",number:56},{id:"m0n34q7z",number:55},{id:"m05t53n4",number:54},{id:"lzt9vnfv",number:53},{id:"lywiirac",number:52},{id:"lygltxgu",number:51},{id:"lxo2ds1k",number:50},{id:"lx9ho5f2",number:49},{id:"lwsgoq2e",number:48},{id:"lw3zptqw",number:47},{id:"lvk1it2j",number:46},{id:"luub1xz5",number:45},{id:"lug12fgd",number:44},{id:"lts2aqan",number:43},{id:"ltkys2el",number:42},{id:"lswkbyus",number:41},{id:"ls2jg6ct",number:40},{id:"lrlbwtxn",number:39},{id:"lr3uz1d8",number:38},{id:"lqa43ghl",number:37},{id:"lq63jr4t",number:36},{id:"lphkfmue",number:35},{id:"lorujl6k",number:34},{id:"lo3dbb57",number:33},{id:"lncmwv1g",number:32},{id:"lndqbo35",number:31},{id:"lmpnzhq6",number:30},{id:"lm77zack",number:29},{id:"lleh5fpm",number:28},{id:"ll1f7vl8",number:27},{id:"lkj6emus",number:26},{id:"ljxai1s8",number:25},{id:"ljetrjjf",number:24},{id:"lisaoa37",number:23},{id:"lhzbbljg",number:22},{id:"lhgt6hxj",number:21},{id:"lgzmgxif",number:20},{id:"lgli8qmt",number:19},{id:"lg1ioh3o",number:18},{id:"lfbp5rsx",number:17},{id:"lenh39dp",number:16},{id:"ledh1q44",number:15},{id:"ldkqe7g6",number:14},{id:"ld2c7egr",number:13},{id:"lcjmdijk",number:12},{id:"lbn286o5",number:11},{id:"lbei2nd1",number:10},{id:"lau3vdb5",number:9},{id:"labw9mm1",number:8},{id:"l9qakvod",number:7},{id:"l9dkq0ma",number:6},{id:"l8t9h7wa",number:5},{id:"l884uw8u",number:4},{id:"l7i90j39",number:3},{id:"l76rtr72",number:2},{id:"l6efnna0",number:1}]},4409:(e,a,t)=>{t.d(a,{P:()=>l});var s=t(5043);const l=function(e,a,t,l){let o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;const[r,i]=(0,s.useState)({}),[n,c]=(0,s.useState)([]),[d,m]=(0,s.useState)(!0),[b,p]=(0,s.useState)(!1);return(0,s.useMemo)((()=>{const s="https://data.ninjakiwi.com/btd6/bosses/",r="https://data.ninjakiwi.com/btd6/ct/",n={mode:"cors"};(async()=>{m(!0),p(!1),console.log("fetching leaderboards");try{let d="";if("Race"===e){const e=await fetch("https://data.ninjakiwi.com/btd6/races/"),t=await e.json();c(t.body),d=t.body[a].leaderboard}else if("Boss"===e){const e=await fetch(s),t=await e.json();c(t.body),d="Elite"===l?t.body[a].leaderboard_elite_players_1:t.body[a].leaderboard_standard_players_1}else if("Boss2"===e){const e=await fetch(s),t=await e.json();c(t.body),d="Elite"===l?t.body[a].leaderboard_elite_players_1.slice(0,-1)+"2":t.body[a].leaderboard_standard_players_1.slice(0,-1)+"2"}else if("Boss3"===e){const e=await fetch(s),t=await e.json();c(t.body),d="Elite"===l?t.body[a].leaderboard_elite_players_1.slice(0,-1)+"3":t.body[a].leaderboard_standard_players_1.slice(0,-1)+"3"}else if("Boss4"===e){const e=await fetch(s),t=await e.json();c(t.body),d="Elite"===l?t.body[a].leaderboard_elite_players_1.slice(0,-1)+"4":t.body[a].leaderboard_standard_players_1.slice(0,-1)+"4"}else if("CtTeam"===e){const e=await fetch(r),t=await e.json();c(t.body),d=t.body[a].leaderboard_team}else{const e=await fetch(r),t=await e.json();c(t.body),console.log(t),d=t.body[a].leaderboard_player}const m=await fetch(d+"?page="+t,n),b=await m.json();if(!b.success)throw new Error("Unsuccessful: "+b.error);console.log(o);for(let e=1;e<o;e++){const a=await fetch(d+"?page="+(t+e),n);if(!a.ok)throw new Error("Failed to fetch data");const s=await a.json();b.body=b.body.concat(s.body),console.log("got page: ",e)}if("Boss2"===e||"Boss3"===e||"Boss4"===e){let a=0;switch(e){case"Boss2":a=1;break;case"Boss3":a=2;break;case"Boss4":a=3}const t=[],s=[];for(let e=0;e<b.body.length;e++){const l=[],o=e;for(let r=o+1;r<=o+a&&!(r>=b.body.length);r++)b.body[e].scoreParts[0].score===b.body[r].scoreParts[0].score&&(l.push({displayName:b.body[r].displayName,profile:b.body[r].profile}),s.push(r),e++),t.push(l),b.body[o].otherPlayers=l}s.reverse().map((e=>{b.body.splice(e,1)}))}i(b)}catch(b){p(!0),console.log(b)}finally{m(!1)}})()}),[e,a,t,l]),{data:r,events:n,loading:d,error:b}}},1622:(e,a,t)=>{t.r(a),t.d(a,{default:()=>N});var s=t(9967);const l=t.p+"static/media/least_tiers_s.580e5fcabce61c87850b.webp",o=t.p+"static/media/ct_points_s.21c1fa829b0983778c2e.webp";var r=t(642),i=t(422);const n=[{profileUrl:"https://data.ninjakiwi.com/btd6/users/9fbf128f8cc5fcf61c14894f5a25e5259a521fbf9743d96e",badgeName:"Developer",badgeTip:"Developed this site."}],c=[{profileUrl:"https://data.ninjakiwi.com/btd6/users/9fbf128f8cc5fcf61c14894f5a25e5259a521fbf9743d96e",name:"OatsFX"},{profileUrl:"https://data.ninjakiwi.com/btd6/users/9cb91089ddc5fea31f468c195e70b426cc0d1abe9d44da69",name:"ISAB"}];var d=t(579);const m=e=>{let{name:a,profileUrl:t}=e;const s=c.find((e=>e.name.toLowerCase()===a.toLowerCase()));return(0,d.jsxs)("div",{className:"flex gap-1",children:[n.some((e=>e.profileUrl===t))?n.filter((e=>e.profileUrl===t)).map((e=>(0,d.jsx)("div",{className:"badge badge-neutral tooltip bg-opacity-50 badge-sm -mt-[0.3rem] pb-0.5 hover:text-accent","data-tip":e.badgeTip,children:(0,d.jsx)("p",{className:"pointer-events-none",children:e.badgeName})},e.badgeName))):(0,d.jsx)(d.Fragment,{}),s?(0,d.jsx)("div",{className:"badge badge-neutral tooltip bg-opacity-50 badge-sm -mt-[0.3rem] pb-0.5 hover:text-accent","data-tip":"This is ".concat(s.profileUrl!==t?"not":""," the real ").concat(s.name,"."),children:(0,d.jsx)("p",{className:"pointer-events-none",children:s.profileUrl!==t?"Impersonation":"Verified"})},"verify"):(0,d.jsx)(d.Fragment,{})]})},b=t.p+"static/media/rank.e7cf8836274d5f34b48d.webp",p=t.p+"static/media/rank_veteran.bcbd625b590fcba8958c.webp";var x=t(6229),h=t(5043);const f=e=>{const[a,t]=(0,h.useState)({}),[s,l]=(0,h.useState)(!1),[o,r]=(0,h.useState)(!1);return{data:a,loading:s,fetchData:async()=>{l(!0);try{const a=await fetch(e);if(!a.ok)throw new Error("Failed to fetch data");const s=await a.json();console.log(e),s.model.name,t(s.body)}catch(a){console.log(a)}finally{l(!1)}r(!0)},fetched:o}},u=e=>{let{profileUrl:a,fetched:t,profileData:s,profileLoading:l,isPlayer:o}=e;const n=s,c=s,{data:h,loading:g,fetchData:j,fetched:y}=f(n.owner);return(0,d.jsxs)("dialog",{id:"".concat(a),className:"modal",children:[(0,d.jsxs)("div",{className:"modal-box max-w-3xl bg-top bg-no-repeat bg-contain outline outline-1 outline-white/25",style:{backgroundImage:"linear-gradient(to bottom, rgba(17, 17, 23, 0), rgba(17, 17, 23, 0.5)), url(".concat(s.bannerURL,")")},children:[(0,d.jsx)("div",{className:"modal-action",children:(0,d.jsx)("form",{method:"dialog",children:(0,d.jsx)("button",{className:"btn bg-opacity-80 btn-circle btn-sm outline outline-1 absolute right-6 top-6 outline-error text-error",children:"X"})})}),t&&!l?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:"flex gap-4 items-end pt-8",children:[(0,d.jsx)("img",{src:o?c.avatarURL:n.frameURL,className:"w-[80px] h-[80px] rounded-xs"}),o?(0,d.jsx)(d.Fragment,{}):(0,d.jsx)("img",{src:n.iconURL,className:"w-[80px] h-[80px] rounded-xs absolute"}),(0,d.jsxs)("div",{className:"flex flex-col",children:[(0,d.jsxs)("div",{className:"flex gap-2 items-center",children:[(0,d.jsx)("p",{className:"font-bold font-btd6 text-2xl drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]",children:o?c.displayName:n.name}),(0,d.jsx)(m,{name:o?c.displayName:n.name,profileUrl:a})]}),o?(0,d.jsxs)("div",{className:"flex gap-2",children:[(0,d.jsxs)("div",{className:"flex gap-2 tooltip","data-tip":"Rank",children:[(0,d.jsx)("img",{src:b,className:"h-[32px] drop-shadow-xl"}),(0,d.jsx)("p",{className:"absolute pt-1 font-black drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-center w-[32px] pointer-events-none",children:c.rank})]}),0!==c.veteranRank?(0,d.jsxs)("div",{className:"flex gap-2 tooltip","data-tip":"Veteran Rank",children:[(0,d.jsx)("img",{src:p,className:"h-[32px] drop-shadow-xl"}),(0,d.jsx)("p",{className:"absolute pt-1 font-black drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-center w-[32px] pointer-events-none",children:c.veteranRank})]}):(0,d.jsx)("div",{className:"flex gap-2"})]}):(0,d.jsxs)("div",{className:"flex gap-2",children:[(0,d.jsx)("img",{className:"h-[32px] drop-shadow-xl"}),(0,d.jsx)("p",{className:"absolute pt-1 font-black drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] text-center w-[32px]",children:n.status})]})]})]}),o?(0,d.jsx)(d.Fragment,{}):(0,d.jsxs)("div",{className:"overflow-x-hidden w-full max-h-56 h-32 my-2 py-4 flex flex-col items-center bg-base-200 rounded-xl",children:[(0,d.jsxs)("p",{className:"font-semibold text-lg",children:["Players: ",n.numMembers]}),(0,d.jsx)(u,{profileUrl:n.owner,fetched:y,profileData:h,profileLoading:g,isPlayer:!0}),(0,d.jsx)("button",{className:"btn",onClick:()=>{document.getElementById("".concat(n.owner)).showModal(),j()},children:"View Owner"})]}),(0,d.jsxs)("div",{className:"overflow-x-hidden w-full max-h-56 h-56 my-2 py-4 flex flex-col items-center bg-base-200 rounded-xl",children:[(0,d.jsx)("p",{className:"font-semibold text-lg",children:"Medals"}),o?(0,d.jsxs)("div",{className:"indicator items-center w-full px-12 py-4 gap-2 flex-wrap",children:[Object.keys(i.R8).filter((e=>c._medalsRace[(0,r.fh)(e)]>0)).map((e=>{var a;return(0,d.jsxs)("div",{className:"flex flex-col items-center tooltip indicator hidden lg:block","data-tip":"".concat(i.kt[e]),children:[(0,d.jsx)("img",{src:i.R8[e],className:"h-[28px]"}),(0,d.jsx)("div",{className:"indicator-item indicator-bottom indicator-center badge badge-sm bg-opacity-90",children:null!==(a=c._medalsRace[(0,r.fh)(e)])&&void 0!==a?a:0})]})})),Object.keys(i.oD).filter((e=>c._medalsBoss[(0,r.fh)(e)]>0)).map((e=>{var a;return(0,d.jsxs)("div",{className:"flex flex-col items-center tooltip indicator hidden lg:block","data-tip":"".concat(i.kt[e]),children:[(0,d.jsx)("img",{src:i.oD[e],className:"h-[28px]"}),(0,d.jsx)("div",{className:"indicator-item indicator-bottom indicator-center badge badge-sm bg-opacity-90",children:null!==(a=c._medalsBoss[(0,r.fh)(e)])&&void 0!==a?a:0})]})})),Object.keys(i.o9).filter((e=>c._medalsBossElite[(0,r.fh)(e)]>0)).map((e=>{var a;return(0,d.jsxs)("div",{className:"flex flex-col items-center tooltip indicator hidden lg:block","data-tip":"".concat(i.kt[e]),children:[(0,d.jsx)("img",{src:i.o9[e],className:"h-[28px]"}),(0,d.jsx)("div",{className:"indicator-item indicator-bottom indicator-center badge badge-sm bg-opacity-90",children:null!==(a=c._medalsBossElite[(0,r.fh)(e)])&&void 0!==a?a:0})]})})),Object.keys(i.Ks).filter((e=>c._medalsCTGlobal[(0,r.fh)(e)]>0)).map((e=>{var a;return c._medalsCTGlobal[(0,r.fh)(e)]>0?(0,d.jsxs)("div",{className:"flex flex-col items-center tooltip indicator hidden lg:block","data-tip":"".concat(i.kt[e]),children:[(0,d.jsx)("img",{src:i.Ks[e],className:"h-[28px]"}),(0,d.jsx)("div",{className:"indicator-item indicator-bottom indicator-center badge badge-sm bg-opacity-90",children:null!==(a=c._medalsCTGlobal[(0,r.fh)(e)])&&void 0!==a?a:0})]}):(0,d.jsx)(d.Fragment,{})}))]}):(0,d.jsx)("i",{className:"text-xs",children:"Nothing to see here... Literally"})]})]}):(0,d.jsx)("div",{className:"flex justify-center",children:(0,d.jsx)(x.R,{})})]}),(0,d.jsx)("form",{method:"dialog",className:"modal-backdrop",children:(0,d.jsx)("button",{children:"close"})})]})},g=u,j=e=>{var a;let{entry:t,index:n,event:c,eventType:b,delta:p,showDelta:x,bossMode:h}=e;const u="CtTeam"!==b,{data:j,loading:y,fetchData:v,fetched:w}=f(t.profile),N=j,k=j,_=()=>{if(!x)return(0,d.jsx)(d.Fragment,{});let e="",a=!1;switch(b){case"Race":e=(0,r.xX)(p);break;case"Boss":case"Boss2":case"Boss3":case"Boss4":if("GameTime"===c.scoringType)e=(0,r.xX)(p);else e=p.toLocaleString();break;case"CtPlayer":case"CtTeam":a=!0,e=0!==p?(-1*p).toLocaleString():p.toLocaleString()}return(0,d.jsxs)("p",{className:"font-semibold text-sm drop-shadow-[0_1px_0px_rgba(0,0,0,0.4)]"+((a?p>=0:p<=0)?" text-success":" text-error"),children:[p<=0?"-":"+",e]})};return(0,d.jsxs)("div",{className:"flex flex-col gap-1 w-5/6 items-end",children:[(0,d.jsx)(g,{profileUrl:t.profile,fetched:w,profileData:j,profileLoading:y,isPlayer:u}),(0,d.jsxs)("div",{className:"indicator w-full flex outline outline-2 outline-white/30 hover:cursor-pointer justify-between px-5 py-1 bg-center bg-cover",style:{backgroundImage:w?"linear-gradient(to bottom, rgba(17, 17, 23, 0.2), rgba(17, 17, 23, 0.6)), url(".concat(j.bannerURL,")"):"linear-gradient(to bottom, rgba(17, 17, 23, 0.2), rgba(17, 17, 23, 0.6)), url(https://static-api.nkstatic.com/appdocs/4/assets/opendata/bbd8e1412f656b91db7df7aabbc1598b_TeamsBannerDeafult.png)"},onClick:()=>{document.getElementById("".concat(t.profile)).showModal(),v()},children:[(0,d.jsxs)("div",{className:"flex justify-start w-1/2",children:[(0,d.jsxs)("div",{className:"flex items-center gap-2 w-20",children:[(()=>{let e="";switch(b){case"Race":e=(0,r.be)(n+1,c.totalScores);break;case"Boss":case"Boss2":case"Boss3":case"Boss4":e="Standard"===h?(0,r.u3)(n+1,c.totalScores_standard):(0,r.Ei)(n+1,c.totalScores_standard);break;case"CtTeam":e=(0,r.YG)(n+1,c.totalScores_team);break;case"CtPlayer":e=(0,r.Us)(n+1,c.totalScores_player)}return(0,d.jsx)("img",{src:e,className:"w-[34px]"})})(),(0,d.jsx)("p",{className:"font-medium",children:(0,r.F$)(n+1)})]}),(0,d.jsxs)("div",{className:"flex items-center gap-2 w-1/4",children:[(0,d.jsx)("img",{src:w?u?k.avatarURL:N.frameURL:u?"https://static-api.nkstatic.com/appdocs/4/assets/opendata/db32af61df5646951a18c60fe0013a31_ProfileAvatar01.png":"https://static-api.nkstatic.com/appdocs/4/assets/opendata/4570fe44e0c89a609dd4853af7751bdb_TeamFrame1.png",className:"w-[38px]"}),u?(0,d.jsx)(d.Fragment,{}):(0,d.jsx)("img",{src:N.iconURL,className:"w-[38px] absolute"}),(0,d.jsxs)("div",{className:"flex flex-col flex-nowrap",children:[(0,d.jsx)("p",{className:"[text-shadow:_0_2px_0_rgb(0_0_0)] font-semibold tracking-wider font-btd6 text-lg text-nowrap",children:t.displayName}),(0,d.jsx)(m,{name:t.displayName,profileUrl:t.profile})]})]})]}),(0,d.jsxs)("div",{className:"flex justify-between w-1/2 gap-[1.2rem]",children:[(()=>{switch(b){case"Race":return w?(0,d.jsx)("div",{className:"flex h-full gap-3 items-center",children:Object.keys(i.R8).filter((e=>k._medalsRace[(0,r.fh)(e)]>0)).slice(0,5).map((e=>{var a;return k._medalsRace[(0,r.fh)(e)]>0?(0,d.jsxs)("div",{className:"flex flex-col items-center tooltip indicator hidden lg:block","data-tip":"".concat(i.kt[e]),children:[(0,d.jsx)("img",{src:i.R8[e],className:"h-[28px]"}),(0,d.jsx)("div",{className:"indicator-item indicator-bottom indicator-center badge bg-opacity-90",children:null!==(a=k._medalsRace[(0,r.fh)(e)])&&void 0!==a?a:0})]}):(0,d.jsx)(d.Fragment,{})}))}):(0,d.jsx)("div",{className:"flex h-full gap-3 items-center"});case"Boss":case"Boss2":case"Boss3":case"Boss4":return"Standard"===h?w?(0,d.jsx)("div",{className:"flex h-full gap-3 items-center",children:Object.keys(i.oD).filter((e=>k._medalsBoss[(0,r.fh)(e)]>0)).slice(0,5).map((e=>{var a;return k._medalsBoss[(0,r.fh)(e)]>0?(0,d.jsxs)("div",{className:"flex flex-col items-center tooltip indicator hidden lg:block","data-tip":"".concat(i.kt[e]),children:[(0,d.jsx)("img",{src:i.oD[e],className:"h-[28px]"}),(0,d.jsx)("div",{className:"indicator-item indicator-bottom indicator-center badge bg-opacity-90",children:null!==(a=k._medalsBoss[(0,r.fh)(e)])&&void 0!==a?a:0})]}):(0,d.jsx)(d.Fragment,{})}))}):(0,d.jsx)("div",{className:"flex h-full gap-3 items-center"}):w?(0,d.jsx)("div",{className:"flex h-full gap-3 items-center",children:Object.keys(i.o9).filter((e=>k._medalsBossElite[(0,r.fh)(e)]>0)).slice(0,5).map((e=>{var a;return k._medalsBossElite[(0,r.fh)(e)]>0?(0,d.jsxs)("div",{className:"flex flex-col items-center tooltip indicator hidden lg:block","data-tip":"".concat(i.kt[e]),children:[(0,d.jsx)("img",{src:i.o9[e],className:"h-[28px]"}),(0,d.jsx)("div",{className:"indicator-item indicator-bottom indicator-center badge bg-opacity-90",children:null!==(a=k._medalsBossElite[(0,r.fh)(e)])&&void 0!==a?a:0})]}):(0,d.jsx)(d.Fragment,{})}))}):(0,d.jsx)("div",{className:"flex h-full gap-3 items-center"});case"CtTeam":default:return(0,d.jsx)("div",{className:"flex h-full gap-3 items-center"});case"CtPlayer":return w?(0,d.jsx)("div",{className:"flex h-full gap-3 items-center",children:Object.keys(i.Ks).filter((e=>k._medalsCTGlobal[(0,r.fh)(e)]>0)).slice(0,5).map((e=>{var a;return k._medalsCTGlobal[(0,r.fh)(e)]>0?(0,d.jsxs)("div",{className:"flex flex-col items-center tooltip indicator hidden lg:block","data-tip":"".concat(i.kt[e]),children:[(0,d.jsx)("img",{src:i.Ks[e],className:"h-[28px]"}),(0,d.jsx)("div",{className:"indicator-item indicator-bottom indicator-center badge bg-opacity-90",children:null!==(a=k._medalsCTGlobal[(0,r.fh)(e)])&&void 0!==a?a:0})]}):(0,d.jsx)(d.Fragment,{})}))}):(0,d.jsx)("div",{className:"flex h-full gap-3 items-center"})}})(),(0,d.jsxs)("div",{className:"flex flex-col h-full w-1/4 justify-center items-end",children:[(()=>{let e="",a="";switch(b){case"Race":e=(0,r.xX)(t.score);break;case"Boss":case"Boss2":case"Boss3":case"Boss4":switch(t.scoreParts[0].name){case"Game Time":e=(0,r.xX)(t.score);break;case"Cash Spent":a=s,e=t.score.toLocaleString();break;case"Tiers":a=l,e=t.score.toLocaleString();break;default:e=t.score.toLocaleString()}break;case"CtPlayer":case"CtTeam":a=o,e=t.score.toLocaleString()}return(0,d.jsxs)("div",{className:"text-right text-lg flex gap-1 justify-end items-center font-semibold text-nowrap -mt-1 ",children:[(0,d.jsx)("img",{src:a,className:"w-[18px]"}),(0,d.jsx)("span",{className:"font-btd6 drop-shadow-[0_2px_0px_rgba(0,0,0,0.4)]",children:e}),_()]})})(),(()=>{let e="",a="";if(t.scoreParts){switch(c.scoringType){case void 0:case"GameTime":e=(0,r.fF)(c.start+t.scoreParts.filter((e=>"Time after event start"===e.name))[0].score),a=new Date(c.start+t.scoreParts.filter((e=>"Time after event start"===e.name))[0].score).toLocaleString();break;default:e=(0,r.xX)(t.scoreParts.filter((e=>"Game Time"===e.name))[0].score),a="Game Time"}return(0,d.jsx)("span",{className:"text-right text-sm tooltip font-normal text-nowrap -mt-1 drop-shadow-[0_1px_0px_rgba(0,0,0,0.3)]","data-tip":a,children:e})}})()]})]})]},t.profile),null===(a=t.otherPlayers)||void 0===a?void 0:a.map((e=>(0,d.jsxs)("div",{className:"indicator w-full flex outline outline-1 outline-white/30 hover:cursor-pointer justify-between px-6 py-1 bg-center bg-cover",style:{backgroundImage:w?"linear-gradient(to bottom, rgba(17, 17, 23, 0.4), rgba(17, 17, 23, 1)), url(".concat(j.bannerURL,")"):"linear-gradient(to bottom, rgba(17, 17, 23, 0.2), rgba(17, 17, 23, 0.6)), url(https://static-api.nkstatic.com/appdocs/4/assets/opendata/bbd8e1412f656b91db7df7aabbc1598b_TeamsBannerDeafult.png)"},onClick:()=>{console.log("clicked ".concat(e.profile))},children:[(0,d.jsxs)("div",{className:"flex justify-start w-1/2",children:[(0,d.jsx)("div",{className:"flex items-center gap-2 w-20"}),(0,d.jsxs)("div",{className:"flex items-center gap-2 w-1/4",children:[(0,d.jsx)("img",{src:w?k.avatarURL:"https://static-api.nkstatic.com/appdocs/4/assets/opendata/db32af61df5646951a18c60fe0013a31_ProfileAvatar01.png",className:"w-[38px]"}),(0,d.jsxs)("div",{className:"flex flex-col flex-nowrap",children:[(0,d.jsx)("p",{className:"font-semibold text-lg text-nowrap",children:e.displayName}),(0,d.jsx)(m,{name:e.displayName,profileUrl:e.profile})]})]})]}),(0,d.jsxs)("div",{className:"flex justify-start w-1/2 gap-[1.2rem]",children:[w?(0,d.jsx)("div",{className:"flex gap-3 items-center",children:Object.keys(i.R8).filter((e=>k._medalsRace[(0,r.fh)(e)]>0)).slice(0,5).map((e=>{var a;return k._medalsRace[(0,r.fh)(e)]>0?(0,d.jsxs)("div",{className:"flex flex-col items-center tooltip indicator hidden lg:block","data-tip":"".concat(i.kt[e]),children:[(0,d.jsx)("img",{src:i.R8[e],className:"h-[28px]"}),(0,d.jsx)("div",{className:"indicator-item indicator-bottom indicator-center badge bg-opacity-90",children:null!==(a=k._medalsRace[(0,r.fh)(e)])&&void 0!==a?a:0})]}):(0,d.jsx)(d.Fragment,{})}))}):(0,d.jsx)("div",{className:"flex h-full gap-3 items-center"}),(0,d.jsx)("div",{className:"flex flex-col h-full w-16 justify-center items-end"})]})]},e.profile)))]})},y=e=>{let{selectionName:a,selectionId:t,selections:s}=e;return(0,d.jsx)("div",{className:"flex gap-2",children:s.map((e=>(0,d.jsx)("a",{className:"py-2 px-2 transition ease-in-out border-b bg-black hover:bg-opacity-70 hover:cursor-pointer hover:text-accent hover:border-b-2"+(e.ids.includes(t)?" bg-black bg-opacity-30 text-primary border-b-2":" bg-opacity-0"),onClick:()=>{e.onClickFunction()},children:e.name},e.name)))})};var v=t(1589),w=t(4409);const N=()=>{const[e,a]=(0,h.useState)({alertType:"alert",message:""}),[t,s]=(0,h.useState)("Race"),[l,o]=(0,h.useState)(0),[i,n]=(0,h.useState)(1),[c,m]=(0,h.useState)("Standard"),[b,p]=(0,h.useState)(-1),[f,u]=(0,h.useState)(!1),{data:g,events:N,loading:k,error:_}=(0,w.P)(t,l,i,c),C=e=>{const a=e.target.value;if(""===a||/^[0-9\b]*$/.test(a)){const e=Number(a)<1?1:Number(a);n(e)}};return(0,h.useEffect)((()=>{k||_||1!==i||p(g.body[0].score)}),[k]),(0,d.jsxs)("div",{className:"flex w-full flex-col items-center gap-4",children:[(0,d.jsxs)("p",{className:"font-bold text-2xl py-2 font-display tracking-tighter text-accent",children:[r.vp[t]," Leaderboard"]}),(0,d.jsxs)("div",{className:"flex gap-4 w-full items-center justify-center",children:[(0,d.jsxs)("div",{className:"flex flex-col w-full gap-2 items-center",children:[(0,d.jsx)(y,{selectionId:t,selectionName:t,selections:[{ids:["Race"],name:"Race",onClickFunction:()=>{s("Race"),o(0),a({alertType:"alert",message:""}),n(1)}},{ids:["Boss","Boss2","Boss3","Boss4"],name:"Boss",onClickFunction:()=>{s("Boss"),o(0),a({alertType:"alert",message:""}),n(1)}},{ids:["CtTeam","CtPlayer"],name:"Contested Territory",onClickFunction:()=>{s("CtTeam"),o(0),a({alertType:"alert",message:""}),n(1)}}]}),"CtTeam"===t||"CtPlayer"===t?(0,d.jsx)(y,{selectionId:t,selectionName:t,selections:[{ids:["CtTeam"],name:"Team",onClickFunction:()=>{s("CtTeam"),n(1)}},{ids:["CtPlayer"],name:"Player",onClickFunction:()=>{s("CtPlayer"),n(1)}}]}):(0,d.jsx)(d.Fragment,{}),"Boss"===t||"Boss2"===t||"Boss3"===t||"Boss4"===t?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(y,{selectionId:c,selectionName:c,selections:[{ids:["Standard"],name:"Standard",onClickFunction:()=>{m("Standard"),n(1)}},{ids:["Elite"],name:"Elite",onClickFunction:()=>{m("Elite"),n(1)}}]}),(0,d.jsx)(y,{selectionId:t,selectionName:t,selections:[{ids:["Boss"],name:"Solo",onClickFunction:()=>{s("Boss"),a({alertType:"alert",message:""}),n(1)}},{ids:["Boss2"],name:"Duo",onClickFunction:()=>{s("Boss2"),a({alertType:"alert-warning",message:"Co-op leaderboards aren't offically supported by NinjaKiwi. Some values will be wrong, I can't fix that."}),n(1)}},{ids:["Boss3"],name:"Trio",onClickFunction:()=>{s("Boss3"),a({alertType:"alert-warning",message:"Co-op leaderboards aren't offically supported by NinjaKiwi. Some values will be wrong, I can't fix that."}),n(1)}},{ids:["Boss4"],name:"Quad",onClickFunction:()=>{s("Boss4"),a({alertType:"alert-warning",message:"Co-op leaderboards aren't offically supported yet. Some values will be wrong, I can't fix that."}),n(1)}}]})]}):(0,d.jsx)(d.Fragment,{})]}),(0,d.jsx)("div",{className:"divider divider-horizontal"}),(0,d.jsxs)("div",{className:"flex items-center w-full gap-4",children:[(0,d.jsxs)("p",{className:"text-nowrap",children:["Select a ",r.vp[t]," event:"]}),k?(0,d.jsx)("div",{className:"skeleton h-12 w-full max-w-xs"}):(0,d.jsx)("select",{id:"tile-select",className:"select select-bordered w-full max-w-xs",onChange:e=>{console.log(e.target.options.selectedIndex),o(e.target.options.selectedIndex)},value:N[l].name?N[l].name:"CtPlayer"===t||"CtTeam"===t?"".concat(v.A.filter((e=>e.id===N[l].id))[0].number," (").concat(v.A.filter((e=>e.id===N[l].id))[0].id,")"):N[l].id,children:N.map(((e,a)=>(0,d.jsx)("option",{children:e.name?e.name:"CtPlayer"===t||"CtTeam"===t?"".concat(v.A.filter((a=>a.id===e.id))[0].number," (").concat(v.A.filter((a=>a.id===e.id))[0].id,")"):N[l].id},a)))})]})]}),_?(0,d.jsx)(d.Fragment,{}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("div",{className:"join",children:[(0,d.jsx)("button",{className:"join-item btn"+(g.prev?"":" btn-disabled"),onClick:()=>n(1),children:"\xab"}),(0,d.jsx)("button",{className:"join-item btn"+(g.prev?"":" btn-disabled"),onClick:()=>n((e=>e-1)),children:"\u2039"}),(0,d.jsx)("label",{className:"input join-item bg-base-200 hover:bg-base-300 flex items-center gap-2 z-50",children:(0,d.jsx)("input",{className:"font-medium text-lg max-w-40 text-center",type:"text",inputMode:"numeric",placeholder:"Score",value:i,onChange:C})}),(0,d.jsx)("button",{className:"join-item btn"+(g.next?"":" btn-disabled"),onClick:()=>n((e=>e+1)),children:"\u203a"}),(0,d.jsx)("button",{className:"join-item btn btn-disabled tooltip"+(g.next?"":" btn-disabled"),onClick:()=>n(25),"data-tip":"I don't know the max pages for this event.",children:"\xbb"})]}),(0,d.jsxs)("label",{className:"flex gap-4 cursor-pointer items-center",children:[(0,d.jsx)("input",{type:"checkbox",checked:f,className:"checkbox",onChange:()=>u((e=>!e))}),(0,d.jsx)("span",{className:"label-text",children:"Show Delta"})]}),k?(0,d.jsx)(d.Fragment,{}):(0,d.jsxs)("p",{children:["Showing players"," ",(0,r.F$)((i-1)*g.body.length+1),"-",(0,r.F$)(i*g.body.length)," of"," ",(()=>{switch(t){case"Boss":return"Standard"===c?void 0!==N[l].totalScores_standard?N[l].totalScores_standard:0:void 0!==N[l].totalScores_elite?N[l].totalScores_elite:0;case"CtPlayer":return void 0!==N[l].totalScores_player?N[l].totalScores_player:0;case"CtTeam":return void 0!==N[l].totalScores_team?N[l].totalScores_team:0;default:return void 0!==N[l].totalScores?N[l].totalScores:0}})().toLocaleString()," entries."]})]}),e.message.length>0?(0,d.jsxs)("div",{role:"alert",className:"alert w-2/3 "+e.alertType,children:[(0,d.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"stroke-current shrink-0 h-6 w-6",fill:"none",viewBox:"0 0 24 24",children:(0,d.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"})}),(0,d.jsx)("span",{children:e.message})]}):(0,d.jsx)(d.Fragment,{}),_?(0,d.jsx)("p",{children:"Failed to grab data."}):(0,d.jsx)(d.Fragment,{children:k?(0,d.jsx)(x.R,{}):g.body.map(((e,a)=>(0,d.jsx)(j,{entry:e,index:a+(i-1)*g.body.length,event:N[l],eventType:t,delta:e.score-b,showDelta:f,bossMode:c},a)))}),_||k?(0,d.jsx)(d.Fragment,{}):(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{className:"join",children:[(0,d.jsx)("button",{className:"join-item btn"+(g.prev?"":" btn-disabled"),onClick:()=>n(1),children:"\xab"}),(0,d.jsx)("button",{className:"join-item btn"+(g.prev?"":" btn-disabled"),onClick:()=>n((e=>e-1)),children:"\u2039"}),(0,d.jsx)("label",{className:"input join-item bg-base-200 hover:bg-base-300 flex items-center gap-2 z-50",children:(0,d.jsx)("input",{className:"font-medium text-lg max-w-40 text-center",type:"text",inputMode:"numeric",placeholder:"Score",value:i,onChange:C})}),(0,d.jsx)("button",{className:"join-item btn"+(g.next?"":" btn-disabled"),onClick:()=>n((e=>e+1)),children:"\u203a"}),(0,d.jsx)("button",{className:"join-item btn btn-disabled tooltip"+(g.next?"":" btn-disabled"),onClick:()=>n(25),"data-tip":"I don't know the max pages for this event.",children:"\xbb"})]})})]})}},642:(e,a,t)=>{t.d(a,{Ei:()=>b,F$:()=>u,HK:()=>y,QC:()=>l,R$:()=>j,RO:()=>f,Us:()=>p,YG:()=>x,YY:()=>g,be:()=>d,fF:()=>r,fh:()=>c,iS:()=>i,le:()=>n,u3:()=>m,vp:()=>v,xX:()=>o,y9:()=>h});var s=t(422);const l=e=>e%5===2.5?5*Math.floor(e/5):5*Math.round(e/5),o=e=>{const a=Math.floor(e/36e5),t=Math.floor(e%36e5/6e4),s=Math.floor(e%6e4/1e3),l=Math.floor(e%1e3/10),o=a>0?a.toString().padStart(2,"0"):"",r=t.toString().padStart(2,"0"),i=s.toString().padStart(2,"0"),n=l.toString().padStart(2,"0");return o?"".concat(o,":").concat(r,":").concat(i,".").concat(n):"".concat(r,":").concat(i,".").concat(n)},r=e=>{const a=Date.now()-e,t=6e4,s=36e5,l=864e5;if(a<t){const e=Math.floor(a/1e3);return"".concat(e," second").concat(1!==e?"s":""," ago")}if(a<s){const e=Math.floor(a/t);return"".concat(e," minute").concat(1!==e?"s":""," ago")}if(a<l){const e=Math.floor(a/s);return"".concat(e," hour").concat(1!==e?"s":""," ago")}{const e=Math.floor(a/l);return"".concat(e," day").concat(1!==e?"s":""," ago")}},i=e=>e.replace(/([a-z])([A-Z])/g,"$1 $2").replace(/\b(Or|The|A|Of)\b/g,(e=>e.toLowerCase())),n=e=>":z_".concat(e,":"),c=e=>e.split("_").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(""),d=(e,a)=>{if(e<1)return"";const t=e/a*100;return 1===e?s.R8.black_diamond:2===e?s.R8.red_diamond:3===e?s.R8.diamond:e<=50?s.R8.gold_diamond:t<=1?s.R8.double_gold:t<=10?s.R8.gold_silver:t<=25?s.R8.double_silver:t<=50?s.R8.silver:t<=75?s.R8.bronze:""},m=(e,a)=>{if(e<1)return"";const t=e/a*100;return 1===e?s.oD.black_diamond:2===e?s.oD.red_diamond:3===e?s.oD.diamond:e<=50?s.oD.gold_diamond:t<=1?s.oD.double_gold:t<=10?s.oD.gold_silver:t<=25?s.oD.double_silver:t<=50?s.oD.silver:t<=75?s.oD.bronze:""},b=(e,a)=>{if(e<1)return"";const t=e/a*100;return 1===e?s.o9.black_diamond:2===e?s.o9.red_diamond:3===e?s.o9.diamond:e<=50?s.o9.gold_diamond:t<=1?s.o9.double_gold:t<=10?s.o9.gold_silver:t<=25?s.o9.double_silver:t<=50?s.o9.silver:t<=75?s.o9.bronze:""},p=(e,a)=>{if(e<1)return"";const t=e/a*100;return e<=25?s.Ks.diamond:e<=100?s.Ks.gold_diamond:t<=1?s.Ks.double_gold:t<=10?s.Ks.gold_silver:t<=25?s.Ks.double_silver:t<=50?s.Ks.silver:t<=75?s.Ks.bronze:""},x=(e,a)=>{if(e<1)return"";const t=e/a*100;return 1===e?s.oh.black_diamond:2===e?s.oh.red_diamond:3===e?s.oh.diamond:e<=25?s.oh.gold_diamond:e<=100?s.oh.double_gold:t<=1?s.oh.gold_silver:t<=10?s.oh.double_silver:t<=25?s.oh.silver:t<=75?s.oh.bronze:""},h=(e,a)=>1===e?":GT1:":2===e?":GT2:":3===e?":GT3:":e<=25?":GT25":e<=100?":GT100:":"",f=e=>{switch(e){case 1:return s.dd.diamond;case 2:return s.dd.double_gold;case 3:return s.dd.silver;case 4:return s.dd.bronze;default:return""}},u=e=>{const a=e%10,t=e%100;return 1===a&&11!==t?e+"st":2===a&&12!==t?e+"nd":3===a&&13!==t?e+"rd":e+"th"},g=e=>{switch(e){case 2:return"Race";case 4:return"Boss";case 8:return"LeastCash";case 9:return"LeastTiers";default:return""}},j=e=>{const a=new Date(e),t=a.getUTCDate(),s=a.toLocaleString("en-US",{month:"long",timeZone:"UTC"}),l=a.getUTCFullYear();return"".concat(u(t)," ").concat(s," ").concat(l)},y={Alchemist:"magic",BananaFarm:"support",BeastHandler:"support",BoomerangMonkey:"primary",BombShooter:"primary",DartMonkey:"primary",DartlingGunner:"military",Druid:"magic",EngineerMonkey:"support",GlueGunner:"primary",HeliPilot:"military",IceMonkey:"primary",Mermonkey:"magic",MonkeyAce:"military",MonkeyBuccaneer:"military",MonkeySub:"military",MonkeyVillage:"support",MortarMonkey:"military",NinjaMonkey:"magic",SniperMonkey:"military",SpikeFactory:"support",SuperMonkey:"magic",TackShooter:"primary",WizardMonkey:"magic",AdmiralBrickell:"hero",Adora:"hero",Benjamin:"hero",CaptainChurchill:"hero",Corvus:"hero",Etienne:"hero",Ezili:"hero",Geraldo:"hero",Gwendolin:"hero",ObynGreenfoot:"hero",PatFusty:"hero",Psi:"hero",Quincy:"hero",Rosalia:"hero",Sauda:"hero",StrikerJones:"hero",ChosenPrimaryHero:"hero"},v={Race:"Race",Boss:"Boss",Boss2:"Boss",Boss3:"Boss",Boss4:"Boss",CtPlayer:"Contested Territory",CtTeam:"Contested Territory"}},9967:(e,a,t)=>{e.exports=t.p+"static/media/least_cash_s.39058b7c9ad6a6632888.webp"}}]);
//# sourceMappingURL=503.1bf5f9ec.chunk.js.map