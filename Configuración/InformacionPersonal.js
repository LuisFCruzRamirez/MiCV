//*********************************************************** */
// Es importante llenar toda la información de la siguiente sección
//*********************************************************** */

const InformacionPersonal = {
  Nombre: "Luis",
  Apellidos: "Cruz",
  Cargo: "Desarrollador Full Stack Sr",
  Genero: "Masculino",
  WebSite: "",
  Nacionalidad: "Mexicana",
  FechaNacimiento: "Enero de 1988",
  Edad: "34",
  EstadoCivil: "Soltero",
  Email: "luis_cruzramirez88@outlook.com",
  Telefono: "-----",
  DescripcionCorta: `Desarrollador fullstack en C#, .net y sql`,
  DescripcionProfesional: `Desarrollador desde hace 6 años, trabajando planeaciónn de proyectos desde su creación, autodidacta y pasion por los nuevos retos. Entre otras actividades participe como freelancer enu proyecto llamado DITI, donde se desarrollaron aplicacion para administrar inventarios de farmacias hasta desarrollar aplicaciones en android para un proyecto de entregas a domicilio.`,
  AcercaDeMi: `Amante de la musica, videojuegos y la tecnologia. Disfruto de salir a conocer pueblos del pais.`,
};

//*********************************************************** */
// Deja en blanco la red social que no quieras que se muestre
//*********************************************************** */
const RedesSociales = {
  twitter: "",
  facebook: "/LuisCruzR",
  instagram: "/Luis_CruzR",
  linkedin: "/in/luis-fernando-cruz-ramirez-2aa74b172",
};

//*********************************************************** */
// Deja en blanco la red social que no quieras que se muestre
//Para agregar o quitar SKILLS solo reá necesario agregar o quitar las siguientes líneas:
/*

{
  Skill: "",
  Puntaje: 100,
  Experiencia: " Años",
},

*/
//Debes copiar las llaves y la ", (Coma)" del final
//*********************************************************** */

const Skills = [
  {
    Skill: "HTML5/Javascript/CSS3",
    Puntaje: 100,
    Experiencia: "5 Años",
  },
  {
    Skill: "Window Forms",
    Puntaje: 100,
    Experiencia: "3 Años",
  },
  {
    Skill: "C# .NET",
    Puntaje: 100,
    Experiencia: "6 Años",
  },
  {
    Skill: "API REST",
    Puntaje: 100,
    Experiencia: "5 Años",
  },
  {
    Skill: "Boostrap",
    Puntaje: 100,
    Experiencia: "4 Años",
  },
  {
    Skill: "React",
    Puntaje: 50,
    Experiencia: "1 Años",
  },
  {
    Skill: "SQL Server",
    Puntaje: 80,
    Experiencia: "6 Años",
  },
  {
    Skill: "Xamarin",
    Puntaje: 50,
    Experiencia: "1 Años",
  },
  {
    Skill: "Node JS",
    Puntaje: 50,
    Experiencia: "1 Años",
  },
];

//*********************************************************** */
//  Es importante llenar toda la información de la siguiente sección
// Para agregar otra sección de "Educación" o cupa el siguiente template
/*
  {
      Escuela: "",
      Periodo: "",
      Titulo: "", //Dejar en blanco si no hay titulo o diploma
      DescripcionCorta:"",
  },
*/
//*********************************************************** */

const Resumen = {
  DescripcionCorta: `En esta sección te contare un poco de mi, de mi educación y de mi experiencia laboral`,
  Mi_Resumen: `Autodidacta, me gustan los retos, apasionado de la tecnologia`,
  Puntos_A_Destacar: [
    "Experiencia en desarrollo de software",
  ],
  Educación: [
    {
      Escuela: "Universidad Latinoamericana (ULA)",
      Periodo: "2018 - 2020",
      Titulo: "Titulo y cedula profesional", //Dejar en blanco si no hay titulo o diploma
      DescripcionCorta:
        "Maestria en Administración de proyectos",
    },
    {
      Escuela: "Universidad del Valle de México (UVM)",
      Periodo: "2014 - 2016",
      Titulo: "Ing. en Sistemas Computacionales", //Dejar en blanco si no hay titulo o diploma
      DescripcionCorta:
        "",
    },
  ],
};

//*********************************************************** */
// EXPERIENCIA PROFESIONAL
//En caso de querer agregar más experiencia agregue las siguientes líneas:
/*
{
    Cargo: "",
    Fecha: "",
    Empresa: "",
    Funciones: [
      "",
      "",
      "",
      "",
    ], //Agregar una funcion encerrada en coma y agregar un coma (,) al final de cada función
  },
*/

//*********************************************************** */

const ExperienciaProfesional = [
  {
    Cargo: "Supervising Senior FullStack Developer",
    Fecha: "2022 - Actual",
    Empresa: "KPMG México",
    Funciones: [
      "Desarrollo de software",
      "Analisis de codigo para solucionar soportes",
      "Creación de Aplicaciones Web.",
    ], //Agregar una funcion encerrada en coma y agregar un coma (,) al final de cada función
  },
  {
    Cargo: "Desarrollador .Net",
    Fecha: "2017-2022",
    Empresa: "CENTRO CELULAR S.A. de CV.",
    Funciones: [
      `Analisis y desarrollo de software.`,
      "Creacion de bases de datos y stored procedures.",
      "Soporte a soluciones de software realizadas.",
      "Manuales de usuario y documentacion de codigo.",
    ], //Agregar una funcion encerrada en coma y agregar un coma (,) al final de cada función
  },
  {
    Cargo: "Desarrollador WEB",
    Fecha: "2020-2022",
    Empresa: "DITI",
    Funciones: [
      "Desarrollo de soluciones de software",
      "Aplicaciones moviles",
      "Creación de propuestas para cliente",
    ], //Agregar una funcion encerrada en coma y agregar un coma (,) al final de cada función
  },
  {
    Cargo: "Sistemas CBT",
    Fecha: "Enero 2017 - Junio 2017",
    Empresa: "DITI",
    Funciones: [
      "Analisis para solución de soportes en plataforma SAP",
      "Soporte tecnico en Success Factors (SAP)",
    ], //Agregar una funcion encerrada en coma y agregar un coma (,) al final de cada función
  },
];

//*********************************************************** */
//  SECCIÓN ¿PORQUE DEBES CONTACTARME?

/*
  {
      Titulo: "",
      Link:"", // Si no hay un link para redirigir, DEJALO VACÍO.
      DescripcionCorta:``,
  },
     */
//*********************************************************** */

const PorqueDebesContactarme = {
  Descripcion: ` `,
  Motivos: [
    {
      Titulo: "",
      Link: "", // Si no hay un link para redirigir, DEJALO VACÍO.
      DescripcionCorta: ``,
    },
  ],
};
