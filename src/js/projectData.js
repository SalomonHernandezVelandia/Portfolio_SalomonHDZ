const TECHNOLOGY_COLORS = {

    Python:"#3776AB",
    JavaScript:"#F7DF1E",
    TypeScript:"#3178C6",
    HTML:"#E34F26",
    CSS:"#1572B6",
    Sass:"#CC6699",

    TensorFlow:"#FF6F00",
    PyTorch:"#EE4C2C",

    Pandas:"#150458",
    NumPy:"#4DABCF",
    Matplotlib:"#11557C",
    Scikit:"#F7931E",

    Django:"#092E20",
    Flask:"#FFFFFF",
    FastAPI:"#009688",

    React:"#61DAFB",
    Vue:"#42B883",
    Angular:"#DD0031",

    Docker:"#2496ED",

    SQL:"#336791",
    PostgreSQL:"#4169E1",
    MySQL:"#4479A1",

    Git:"#F05032",
    Linux:"#FCC624",

    C:"#00599C",
    "C++":"#00599C",
    Java:"#ED8B00",

};


const projects = [
    {
        title:"Echocardiogram Image Generation using Generative Learning Strategies.",
        description:"This work was developed as a thesis project and extends previous research published at SIPAIM (IEEE), exploring multiple generative architectures for synthetic echocardiographic image generation using Generative Learning.",
        gif:"gifs/generated_stylegan.gif",
        github:"#",
        demo:"#",
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
        description: "Este proyecto es una plataforma de análisis de mercado cripto que combina datos históricos, métricas en tiempo real y lógica cuantitativa para generar señales de compra y venta.",
        gif: "gifs/crypto.gif",
        github: "#",
        demo: "#",
        technologies:[
            { name:"Python", level:100, percentage:true},
            { name:"Pandas"},
            { name:"NumPy"},
            { name:"Matplotlib"},
            { name:"Git"},
        ]
    },
    {
        title: "Proyecto aprendizaje del Vocabulario Ingles con Python",
        description: "Program designed to teach English through a small, interactive game with a graphical interface. The system allows the user to enter words, which are then automatically analyzed and scored, providing immediate feedback to support the learning process.",
        gif: "gifs/crypto.gif",
        github: "#",
        demo: "#",
        technologies:[
            { name:"Python", level:100, percentage:true},
            { name:"Git"},
        ]
    }
];