let toggleTheme=e=>{setTheme("dark"==e?"light":"dark")},setTheme=e=>{if(transTheme(),setHighlight(e),setGiscusTheme(e),e){document.documentElement.setAttribute("data-theme",e);let t=document.getElementsByTagName("table");for(let m=0;m<t.length;m++)"dark"==e?t[m].classList.add("table-dark"):t[m].classList.remove("table-dark");let m=document.getElementsByClassName("jupyter-notebook-iframe-container");for(let t=0;t<m.length;t++){let a=m[t].getElementsByTagName("iframe")[0].contentWindow.document.body;"dark"==e?(a.setAttribute("data-jp-theme-light","false"),a.setAttribute("data-jp-theme-name","JupyterLab Dark")):(a.setAttribute("data-jp-theme-light","true"),a.setAttribute("data-jp-theme-name","JupyterLab Light"))}}else document.documentElement.removeAttribute("data-theme");localStorage.setItem("theme",e),"undefined"!=typeof medium_zoom&&medium_zoom.update({background:getComputedStyle(document.documentElement).getPropertyValue("--global-bg-color")+"ee"})},setHighlight=e=>{"dark"==e?(document.getElementById("highlight_theme_light").media="none",document.getElementById("highlight_theme_dark").media=""):(document.getElementById("highlight_theme_dark").media="none",document.getElementById("highlight_theme_light").media="")},setGiscusTheme=e=>{function t(e){const t=document.querySelector("iframe.giscus-frame");t&&t.contentWindow.postMessage({giscus:e},"https://giscus.app")}t({setConfig:{theme:e}})},transTheme=()=>{document.documentElement.classList.add("transition"),window.setTimeout(()=>{document.documentElement.classList.remove("transition")},500)},initTheme=e=>{if(null==e||"null"==e){const t=window.matchMedia;t&&t("(prefers-color-scheme: dark)").matches&&(e="dark")}setTheme(e="light")};initTheme(localStorage.getItem("theme"));