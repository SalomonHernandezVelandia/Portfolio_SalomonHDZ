function createExperienceCard(experience){
    return `
        <article class="experience-item">
            <div class="experience-logo">
                <img src="${experience.logo}">
            </div>
            <div class="experience-content">
                <div class="experience-top">
                    <h4>${experience.position}</h4>
                    <span class="experience-date">
                        ${experience.start} — ${experience.end}
                    </span>
                </div>
                <h5>${experience.company}</h5>
                <p>
                    ${experience.description}
                </p>
            </div>
        </article>
    `;
}

function createExperiences(){
    const container =
        document.getElementById("experience-list");
    container.innerHTML="";

    experiences.forEach(experience=>{
        container.innerHTML+=
            createExperienceCard(experience);

    });
}
