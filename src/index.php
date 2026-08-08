<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Salomón Hernández</title>
    <script>
        if (localStorage.getItem("theme") === "light") {
            document.documentElement.classList.add("light-theme");
        }
    </script>
    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@200..800&display=swap" rel="stylesheet">
</head>

<body>
    <header>
        <?php include 'navbar.php'; ?>
    </header>

    <main>
        <?php include 'hero.php'; ?>
        <?php include 'projects.php'; ?>
        <?php include 'experience.php'; ?>
        <?php include 'certifications.php'; ?>
    </main>

    <?php include 'footer.php'; ?>
    <?php include 'mobilepanels.php'; ?>


    <script src="js/svgIcons.js"></script>
    <script src="js/data/projectData.js"></script>
    <script src="js/data/experienceData.js"></script>
    <script src="js/data/certificationData.js"></script>

    <script src="js/components/projects.js"></script>
    <script src="js/components/experience.js"></script>
    <script src="js/components/certification.js"></script>
    <script src="js/components/panels.js"></script>

    <script src="js/theme.js"></script>
    <script src="js/main.js"></script>

</body>

</html>