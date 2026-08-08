<section id="hero" class="hero"> 
    <div class="hero-wrapper">
        <div class="left-panels">
            <div class="left-panel">
                <div class="left-expand">
                    <?php include 'php/panels/skillsPanel.php'; ?>
                </div>
                <div class="left-button tech-button" data-open="skillsPanel">
                    <span class="left-label">Skills</span>
                </div>
            </div>

            <div class="left-panel">
                <div class="left-button tools-button" data-open="toolsPanel">
                    <span class="left-label">TOOLS</span>
                </div>
                <div class="left-expand">
                    <?php include 'php/panels/toolsPanel.php'; ?>
                </div>
            </div>

        </div>
        <!-- CARD PRINCIPAL -->
        <div class="app">
            <div class="card">
                <div class="card-top">
                    <div class="glass"></div>
                    <div class="user">
                        <div class="info">
                            <div class="name">Salomón Hernández Velandia</div>
                            <div class="status">
                                <span class="dot"></span>
                                Available for work
                            </div>
                        </div>
                        <div class="avatar">
                            <img class="avatar-initial" src="img/Yo_Profesional.jpg">
                        </div>
                        <div class="meta">
                            <span> Python Developer | AI Researcher | Machine Learning Engineer </span>  
                        </div>
                    </div>
                    <div class="actions">
                        <a href="https://www.linkedin.com/in/salomon-hernandez-velandia-827417196/" class="btn btn-link"> 
                            <i class="fa-brands fa-linkedin-in"></i> 
                        </a>
                        <a href="https://github.com/SalomonHernandezVelandia" class="btn btn-github"> 
                            <i class="fa-brands fa-github"></i> 
                        </a>
                        <a
                            href="mailto:salomon.hdz.dev@gmail.com"
                            class="btn btn-gmail"
                            aria-label="Send me an email"
                            title="Send me an email"
                        >
                            <i class="fa-regular fa-envelope"></i>
                        </a>
                        <a href="tel:+573005943018" class="btn btn-phone" aria-label="Call me" title="Call +57 300 594 3018" > <i class="fa-solid fa-phone"></i> </a>
                    </div>
                </div>
            </div>

            <div class="about-panel">
                <div class="card-bottom" data-open="aboutPanel">➜</div>
                <div class="card-expand">
                    <?php include 'php/panels/aboutmePanel.php'; ?>
                </div>
            </div>
        </div>
    </div>
</section> 