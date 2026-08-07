const overlay=document.querySelector(".mobile-overlay");
const buttons=document.querySelectorAll("[data-open]");
const closes=document.querySelectorAll(".close-panel");

buttons.forEach(button=>{
    button.addEventListener("click",()=>{
        if(window.innerWidth>1024) return;
            const id=button.dataset.open;
            document.getElementById(id).classList.add("show");
            overlay.classList.add("show");
    });
});

closes.forEach(btn=>{
    btn.addEventListener("click",closePanels);
});

overlay.addEventListener("click",closePanels);

function closePanels(){
    document.querySelectorAll(".mobile-panel")
    .forEach(panel=>panel.classList.remove("show"));
    overlay.classList.remove("show");
}