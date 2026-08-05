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
                        <a href="${project.github}" target="_blank" class="btn-github-main">
                            ${githubIcon()}
                            <span>GitHub</span>
                        </a>
                        <a href="${project.demo}" target="_blank" class="btn-demo">
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






// function visualizationRepo(){
//     return `
//         <div class="card-project-container">
//             <div class="card-project">
//                 <div class="header-project">
//                     <div class="top-header-project">
//                         ${menuIcon()}
//                         <a class="gh-icon-project" href="#">
//                             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
//                                 <path
//                                 d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
//                                 ></path>
//                             </svg>
//                         </a>
//                         <div class="repo">
//                             <a class="repo-owner" href="#">sms</a>
//                                 <span class="repo-slash">/</span>
//                             <a class="repo-name" href="#">my-api</a>
//                         </div>
//                         <div class="space"></div>
//                         ${branchIcon()}
//                         ${packageIcon()}
//                         <div class="pfp"></div>
//                     </div>
//                     <div class="btm-header-project">
//                         <div class="tab">
//                             ${tabCode()}                 
//                             <div class="tab-text">Code</div>
//                         </div>
//                         <div class="tab">
//                             ${tabIssues()}      
//                             <div class="tab-text">Issues</div>
//                         </div>
//                         <div class="tab active">
//                             ${tabPulls()}
//                             <div class="tab-text">Pull Requests</div>
//                         </div>
//                     </div>
//                 </div>
//                 <div class="content-project">
//                     <div class="prs">
//                         <div class="pr">
//                             ${branchIconGreen()}
//                             <div class="pr-text">
//                                 <div class="pr-title">Feature request: Document analysis</div>
//                                 <div class="pr-desc">#5054 opened 1 minute ago by yourmom69</div>
//                             </div>
//                         </div>
//                         <div class="pr">
//                             ${branchIconGreen()}
//                             <div class="pr-text">
//                                 <div class="pr-title">Store markup as JSON</div>
//                                 <div class="pr-desc">#5038 opened 3 hours ago by gaylord</div>
//                             </div>
//                         </div>
//                         <div class="pr">
//                             ${branchIconGreen()}
//                             <div class="pr-text">
//                                 <div class="pr-title">[Bug fix]: Various improvements</div>
//                                 <div class="pr-desc">
//                                 #4969 opened 3 days ago by xX_Iam14YearsOld_Xx
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     `;
// }

