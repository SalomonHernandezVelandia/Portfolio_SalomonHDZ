function createProjects(){
    const container = document.getElementById("projects-grid");
    container.innerHTML = "";
    projects.forEach(project=>{
        container.innerHTML += createProjectCard(project);
    });
}


function generateTechStack(technologies){
    return technologies.map(tech=>{
        const color = TECHNOLOGY_COLORS[tech.name] || "#888";
        return `
            <div
                class="tech-pill"
                style="
                    --tech-color:${color};
                    --level:${tech.level || 0};
                ">
                <span>${tech.name}</span>
                ${tech.percentage ? `<small>${tech.level}%</small>` : ""}
            </div>
        `;
    }).join("");
}


function createProjectCard(project){
    const color1 = TECHNOLOGY_COLORS[project.technologies[0].name];
    const color2 = TECHNOLOGY_COLORS[project.technologies[1].name];

    return `
        <div class="project-main-card" 
            style="--primary:${color1}; 
            --secondary:${color2};
        ">
            <div class="glass-lab__card main-content">
                <div class="project-media">
                    <img src="${project.gif}">
                </div>

                <div class="project-content">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <div class="tech-stack">
                        ${generateTechStack(project.technologies)}
                    </div>
                    <div class="project-buttons">
                        <a href="${project.github}" target="_blank" class="btn-main btn-github-main">
                            ${githubIcon()}
                            <span>GitHub</span>
                        </a>
                        <a href="${project.demo}" target="_blank" class="btn-main">
                            ${playIcon()}
                            <span>Live Demo</span>
                        </a>
                    </div>
                    </div>
                </div>         
            </div>
        </div>
    `;
}


document.addEventListener("DOMContentLoaded",()=>{
    const menu=document.querySelector(".menu-toggle");
    const links=document.querySelector(".nav-links");
    menu.addEventListener("click",()=>{
        links.classList.toggle("active");
    });
});