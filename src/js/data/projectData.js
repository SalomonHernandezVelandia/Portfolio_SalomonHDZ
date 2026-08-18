const TECHNOLOGY_COLORS = {
    // Lenguajes
    Python:"#3776AB",
    JavaScript:"#F7DF1E",
    TypeScript:"#3F51B5",
    Java:"#D35400",
    "C++":"#777BB4",
    C:"#7B1FA2",
    PHP:"#6C63FF",
    Go:"#00BCD4",
    Rust:"#8D6E63",
    R:"#4A90E2",
    // Inteligencia Artificial
    TensorFlow:"#FB8C00",
    PyTorch:"#F4511E",
    "Skit-Learn":"#FFA000",
    OpenCV:"#7E57C2",
    XGBoost:"#EF6C00",
    LightGBM:"#7CB342",
    CatBoost:"#FDD835",
    HuggingFace:"#FBC02D",
    LangChain:"#009688",
    OpenAI:"#00897B",
    // Ciencia de Datos
    Pandas:"#150458",
    NumPy:"#4F6BD9",
    Matplotlib:"#1E88E5",
    Seaborn:"#5C6BC0",
    Plotly:"#455A64",
    SciPy:"#5C6BC0",
    Polars:"#BF6D28",
    // Backend
    Django:"#092E20",
    Flask:"#424242",
    FastAPI:"#00897B",
    "Node.js":"#2E7D32",
    Express:"#616161",
    "Spring Boot":"#689F38",
    Laravel:"#E53935",
    CustomTkinter:"#007cf8",
    OOP:"#002953",
    // Desarrollo Web
    HTML:"#E34F26",
    CSS:"#1565C0",
    Sass:"#C2185B",
    React:"#26C6DA",
    Vue:"#43A047",
    Angular:"#DD0031",
    "Next.js":"#212121",
    Nuxt:"#00C853",
    Tailwind:"#00ACC1",
    Bootstrap:"#5E35B1",
    // Bases de Datos
    SQL:"#546E7A",
    PostgreSQL:"#1565C0",
    MySQL:"#0277BD",
    SQlite:"#006064",
    MongoDB:"#388E3C",
    Redis:"#C62828",
    // DevOps
    Docker:"#0288D1",
    Kubernetes:"#3949AB",
    Git:"#E64A19",
    GitHub:"#212121",
    GitLab:"#EF6C00",
    Bash:"#558B2F",
    Linux:"#FBC02D",
    // Power Bi
    "Power BI":"#F9A825",
    Excel:"#2E7D32",
    Tableau:"#FB8C00",
    // Cloud
    AWS:"#FF9800",
    Azure:"#1976D2",
    "Google Cloud":"#42A5F5",
    Firebase:"#FBC02D"
};


const projects = [
    {
        title:"Echocardiogram Image Generation using Generative Learning Strategies.",
        description:"This work was developed as a thesis project and extends previous research published at SIPAIM (IEEE), exploring multiple generative architectures for synthetic echocardiographic image generation using Generative Learning.",
        gif:"gifs/generated_stylegan.gif",
        github:"https://github.com/SalomonHernandezVelandia/EchocardiogramGenerator",
        githubAvailable: true,
        demo:"#",
        demoAvailable: false,        
        technologies:[
            { name:"Python", level:100, percentage:true},
            { name:"PyTorch"},
            { name:"TensorFlow"},
            { name:"Pandas"},
            { name:"NumPy"},
            { name:"Matplotlib"},
            { name:"Git"},
        ]
    },
    {
        title: "Crypto Trading Dashboard & Signal Engine",
        description: "This project is a cryptocurrency market analysis platform that combines historical data, real-time metrics, and quantitative logic to generate buy and sell signals.",
        gif: "img/projects/Crypto_platform.jpg",
        github: "https://github.com/SalomonHernandezVelandia/CRYPTO-platform",
        githubAvailable: true,
        demo: "#",
        demoAvailable: false,
        technologies:[
            { name:"Python", level:100, percentage:true},
            { name:"Pandas"},
            { name:"NumPy"},
            { name:"Matplotlib"},
            { name:"Git"},
        ]
    },
    {
        title: "English Vocabulary Learning",
        description: "The application allows users to practice English vocabulary through different languages, proficiency levels, categories, and learning modes. The project was originally developed as a Python desktop application and it was extended with a web version so that the application can be accessed directly from a browser",
        gif: "img/projects/Learning_English.jpg",
        github: "https://github.com/SalomonHernandezVelandia/LearningVocabularyEnglish_ConInterfaz",
        githubAvailable: true,
        demo: "https://learning-vocabulary-english-con-int.vercel.app/",
        demoAvailable: true,
        technologies:[
            { name:"Python", level:54, percentage:true},
            { name:"JavaScript", level:33, percentage:true},
            { name:"Sass", level:7, percentage:true},
            { name:"HTML", level:6, percentage:true},
            { name:"CustomTkinter"},
            { name:"OOP"},
            { name:"Git"},
        ]
    }
];