const THEME="theme",DARK="dark",LIGHT="light",isSomeThemeSaved=()=>{const e=localStorage.getItem(THEME);return null!==e&&e!==undefined},isDark=()=>localStorage.getItem(THEME)===DARK||!isSomeThemeSaved()&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,saveTheme=e=>{localStorage.setItem(THEME,e),setTheme()},setTheme=()=>{isDark()?(document.documentElement.classList.add(DARK),document.getElementById("sun").style.display="block",document.getElementById("moon").style.display="none"):(document.documentElement.classList.remove(DARK),document.getElementById("sun").style.display="none",document.getElementById("moon").style.display="block")};document.addEventListener("keydown",e=>{(e.ctrlKey||e.metaKey)&&e.shiftKey&&76===e.keyCode&&saveTheme(isDark()?LIGHT:DARK)});const playVideo=e=>{modal=document.getElementById("modal"),modalIframe=document.getElementById("modal-iframe"),modalIframe.src=`https://www.youtube.com/embed/${e}`,modal.style.display="flex";const t=()=>{modal.style.display="none",modalIframe.src="",m()},m=()=>{document.removeEventListener("click",t)};return setTimeout(()=>{document.addEventListener("click",t)},100),!1};