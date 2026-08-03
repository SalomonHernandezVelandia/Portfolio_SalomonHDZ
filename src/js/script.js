console.log("Portfolio Loaded");

const card = document.getElementById("glass-card");

const light = document.querySelector(".light");

card.addEventListener("mousemove",(event)=>{

    const rect = card.getBoundingClientRect();

    const x = event.clientX - rect.left;

    const y = event.clientY - rect.top;

    const centerX = rect.width / 2;

    const centerY = rect.height / 2;

    const rotateY = (x-centerX)/18;

    const rotateX = -(y-centerY)/18;

    card.style.transform = `

        perspective(1200px)

        rotateX(${rotateX}deg)

        rotateY(${rotateY}deg)

        scale(1.03)

    `;

    light.style.left = `${x}px`;

    light.style.top = `${y}px`;

});

card.addEventListener("mouseleave",()=>{

    card.style.transform = `

        perspective(1200px)

        rotateX(0deg)

        rotateY(0deg)

        scale(1)

    `;

});