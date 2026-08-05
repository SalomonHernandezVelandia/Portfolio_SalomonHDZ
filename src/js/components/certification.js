function createCertificationCard(certification){

    return `

        <article
            class="certification-item"
            data-resource="${certification.resource}"
            data-type="${certification.resourceType}"
            data-verify="${certification.verify || ""}">

            <div class="certification-preview">

                <img
                    src="${certification.preview}"
                    alt="${certification.title}">

            </div>

            <div class="certification-content">

                <div class="certification-top">

                    <div class="certification-logo">

                        <img
                            src="${certification.logo}"
                            alt="${certification.organization}">

                    </div>

                    <span class="certification-badge certification-${certification.type}">

                        ${certification.badge}

                    </span>

                </div>

                <div class="certification-title">

                    ${certification.title}

                </div>

                <div class="certification-company">

                    ${certification.organization}

                </div>

                <div class="certification-date">

                    ${certification.date}

                </div>

            </div>

        </article>

    `;

}


function createCertifications(){

    const container =
        document.getElementById("certifications-grid");

    if(!container) return;

    container.innerHTML="";

    certifications.forEach(certification=>{

        container.innerHTML+=
            createCertificationCard(certification);

    });

    attachCertificationEvents();

}

function attachCertificationEvents(){

    const cards =
        document.querySelectorAll(".certification-item");

    cards.forEach(card=>{

        card.addEventListener("click",()=>{

            const type =
                card.dataset.type;

            const resource =
                card.dataset.resource;

            const verify =
                card.dataset.verify;

            if(type==="pdf"){

                window.open(resource,"_blank");

                return;

            }

            if(type==="image"){

                window.open(resource,"_blank");

                return;

            }

            if(type==="link"){

                window.open(resource,"_blank");

                return;

            }

        });

    });

}