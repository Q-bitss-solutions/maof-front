import{_ as h,o as e,c as t,d as l,F as n,f as d,t as b,n as y,h as _}from"./index-f52e32f3.js";const f={name:"TableBase",props:{headers:{type:Array,default:()=>[{label:"Example Header",field:"example"}]},data:{type:Array,default:()=>[{example:"value 1"}]},options:{type:Array,default:[]},showOptions:{type:Boolean,default:!0}},setup(){return{dots:[1,2,3],openActions:o=>{document.getElementById(o).classList.toggle("hidden")}}}},m={class:"border border-solid border-black border-collapse text-gray-900 w-full"},k={key:0,class:"p-2 border border-solid border-gray-100 relative"},g={class:"flex justify-center"},v=["onClick"],x=["id","onMouseleave"],w={class:"flex flex-col"},A=["onClick"];function B(u,p,o,i,C,E){return e(),t("table",m,[l("tr",null,[(e(!0),t(n,null,d(o.headers,(c,r)=>(e(),t("th",{key:r,class:"p-2 border border-b-2 border-solid border-black"},b(c.label),1))),128))]),(e(!0),t(n,null,d(o.data,(c,r)=>(e(),t("tr",{id:"rows",class:y(["",{" bg-gray-100":r%2===0}]),key:r},[(e(!0),t(n,null,d(o.headers,(s,a)=>(e(),t("td",{key:a,class:"p-2 border border-solid border-black"},b(c[s.field]),1))),128)),o.showOptions&&o.options.length?(e(),t("td",k,[l("div",g,[l("div",{class:"p-1 cursor-pointer",onClick:s=>i.openActions(`table-actions-${r}`)},[(e(!0),t(n,null,d(i.dots,(s,a)=>(e(),t("span",{key:a,class:"rounded-full h-1 w-1 block bg-blue mb-1"}))),128))],8,v)]),l("div",{class:"hidden absolute right-4 top-8 bg-white z-10",style:{"box-shadow":"-3px 3px 6px #00000029"},id:`table-actions-${r}`,onMouseleave:s=>i.openActions(`table-actions-${r}`)},[l("div",w,[(e(!0),t(n,null,d(o.options,(s,a)=>(e(),t("div",{key:a,class:"h-8 flex justify-center items-center py-2 px-8"},[l("p",{class:"text-xs border-b border-solid border-gray-100 cursor-pointer hover:border-gray hover:font-medium",onClick:T=>s.action(c)},b(s.label),9,A)]))),128))])],40,x)])):_("",!0)],2))),128))])}const z=h(f,[["render",B]]);export{z as T};
