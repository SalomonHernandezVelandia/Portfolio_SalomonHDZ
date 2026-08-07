function createExperienceCard(experience){

    const images = experience.details?.images || [];

    const imagesHTML = images
        .slice(0, 2)
        .map(image => `
            <div class="experience-detail-image">
                <img
                    src="${image}"
                    alt="${experience.details.title}"
                >
            </div>
        `)
        .join("");

    return `
        <article class="experience-item">
            <div class="experience-main">
                <div class="experience-logo">
                    <img
                        src="${experience.logo}"
                        alt="${experience.company}"
                    >
                </div>

                <div class="experience-content">
                    <div class="experience-top">
                        <h4>
                            ${experience.position}
                        </h4>
                        <span class="experience-date">
                            ${experience.start} — ${experience.end}
                        </span>
                    </div>

                    <h5>
                        ${experience.company}
                    </h5>

                    <p>
                        ${experience.description}
                    </p>
                </div>
            </div>

            <button type="button" class="experience-more" aria-expanded="false">
                <span>¿Quieres saber más?</span>
                <i class="fa-solid fa-chevron-down"></i>
            </button>

            <div class="experience-details">
                <div class="experience-details-inner">
                    <h4 class="experience-details-title">
                        ${experience.details?.title || experience.position}
                    </h4>
                    ${
                        imagesHTML
                            ? `
                                <div class="experience-detail-images">
                                    ${imagesHTML}
                                </div>
                            `
                            : ""
                    }

                    <div class="experience-details-text">
                        ${
                            experience.details?.text || ""
                        }
                    </div>
                </div>
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


document.addEventListener("click", event => {
    const button =
        event.target.closest(".experience-more");

    if (!button) return;

    const experienceItem = button.closest(".experience-item");
    const details = experienceItem.querySelector(".experience-details");
    const isOpen = experienceItem.classList.contains("expanded");

    if (isOpen) {
        experienceItem.classList.remove("expanded");
        button.setAttribute(
            "aria-expanded",
            "false"
        );
    } else {
        experienceItem.classList.add("expanded");
        button.setAttribute(
            "aria-expanded",
            "true"
        );
    }
});