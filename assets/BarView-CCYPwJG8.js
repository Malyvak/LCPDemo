import{s as l}from"./index-C_0IjRvO.js";import{d as i,u as c,r as o,o as d,w as p,c as u,a as r,b as f,e as g,F as m,f as b}from"./index-CHeCZoD_.js";const h={class:"flex justify-center mb-10 w-full"},v=i({__name:"BarView",setup(x){const e=c(),s=o({labels:["Clicks","Scrolls","Refreshes"],datasets:[{label:"User Interactions",backgroundColor:["rgb(59 130 246)","rgb(217 70 239)","rgb(239 68 68)"],data:[0,0,0]}]}),n=o({responsive:!0,maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{display:!1}},y:{grid:{}}}});function a(){s.value.datasets[0].data=[e.logs.clicks,e.logs.scrolls,e.logs.refreshes]}return d(()=>{e.initialiseLogs,a()}),p(()=>e.logs,()=>{a()},{deep:!0}),(_,t)=>(b(),u(m,null,[t[0]||(t[0]=r("h1",{class:"text-center text-2xl font-semibold tracking-wider text-indigo-700 font-roboto mb-6"},"Bar Graph",-1)),r("div",h,[f(g(l),{class:"w-3/4 h-48",type:"bar",data:s.value,options:n.value},null,8,["data","options"])])],64))}});export{v as default};
