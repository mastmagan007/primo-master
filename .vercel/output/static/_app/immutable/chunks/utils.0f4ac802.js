import{Z as c}from"./Page.svelte_svelte_type_style_lang.8d655cf0.js";function a(e){const t=n=>{e&&!e.contains(n.target)&&!n.defaultPrevented&&e.dispatchEvent(new CustomEvent("click_outside",e))};return document.addEventListener("click",t,!0),{destroy(){document.removeEventListener("click",t,!0)}}}function i(e){return e.replace(/\s+/g,"-").replace(/[^0-9a-z\-._]/gi,"").toLowerCase()}function o(e=5){return c("abcdefghijklmnopqrstuvwxyz",e)()}export{o as a,a as c,i as v};
//# sourceMappingURL=utils.0f4ac802.js.map