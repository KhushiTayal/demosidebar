import{j as a,r as d,a as u}from"./vendor.ddea6613.js";const m=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};m();const r=a.exports.jsx,c=a.exports.jsxs,f=()=>{const[o,i]=d.exports.useState(!0),n=[{title:"Dashboard",src:"Chart_fill"},{title:"Projects",src:"icons8-folder-16"},{title:"Clients",src:"User"},{title:"My Calendar",src:"Calendar"},{title:"Post-Recruitment",src:"icons8-flight-16"},{title:"Notification",src:"icons8-xbox-cross-16"},{title:"Setting",src:"Setting"},{title:"Logout",src:"icons8-logout-16"}];return c("div",{className:"flex",children:[c("div",{className:` ${o?"w-72":"w-20 "} bg-blue-500 h-screen p-5  pt-8 relative duration-300`,children:[r("img",{src:"./src/assets/control.png",className:`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!o&&"rotate-180"}`,onClick:()=>i(!o)}),r("div",{className:"flex gap-x-4 items-center"}),r("ul",{className:"pt-6",children:n.map((s,e)=>c("li",{className:`flex  rounded-md p-2 cursor-pointer hover:bg-orange-500 text-white text-sm items-center gap-x-4 
              ${s.gap?"mt-9":"mt-2"} ${e===0&&"bg-light-white"} `,children:[r("img",{src:`./src/assets/${s.src}.png`,alt:s.title}),r("span",{className:`${!o&&"hidden"} origin-left duration-200 font-bold`,children:s.title})]},e))})]}),r("div",{className:"h-screen flex-1 p-7",children:r("h1",{className:"text-2xl font-semibold",children:"Home Page"})})]})};u.render(r(f,{}),document.getElementById("root"));
