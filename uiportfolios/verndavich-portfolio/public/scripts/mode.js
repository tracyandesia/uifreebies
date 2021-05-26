const checkbox = document.querySelector("#toggle");
const html = document.querySelector("html");

const toggleDarkMode = function () {
    if(!html.classList.contains("dark")){
        html.classList.add("dark");
        localStorage.setItem("mode", "dark");
    }else{
        html.classList.remove("dark");
        localStorage.setItem("mode", "light");
    }    
}
//By default mode is dark - Toggling Mode if lastly it was not dark
if(localStorage.getItem("mode")!="dark"){    
    toggleDarkMode();    
}
checkbox.addEventListener("click", toggleDarkMode);