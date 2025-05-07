// import "./App.css";
// import "animate.css";
// import ProfilePhoto from "./assets/profile_photo.jpg";

// const experience = [
//   {
//     charge: "Acompañante Terapéutico - Niño con TEA",
//     place: "Instituto Canossiano San José",
//     period: "Marzo 2025 - Actualidad",
//   },
//   {
//     charge: "Acompañante Terapéutico - Niño con Síndrome de Down",
//     place: "Colonia 'Los Tilos'",
//     period: "Enero 2025 - Febrero 2025",
//   },
//   {
//     charge: "Acompañante Terapéutico - Niño con TEA",
//     place: "Domicilio",
//     period: "Febrero 2023 - Diciembre 2024",
//   },
//   {
//     charge: "Acompañante Terapéutico - Niño con TEA",
//     place: "Institución Educativa, Jardín 'Arco Iris'",
//     period: "Febrero 2023 - Diciembre 2024",
//   },
// ];

// const aboutMe = `
// Responsable, puntual, comprometida y organizada, con capacidad para trabajar en equipo y adaptarme a diferentes situaciones. Experiencia en:
// Brindar apoyo emocional y acompañamiento en eventuales momentos de crisis.
// Fomentar la colaboración en entornos interdisciplinarios.
// Desarrollar habilidades en busca de una mayor independencia.
// Mi enfoque está en ofrecer un trato cordial y respetuoso, destacando la creatividad y la proactividad para responder a las necesidades de las personas con las que trabajo. Aspiro a contribuir al bienestar integral de quienes acompaño, promoviendo un ambiente de confianza y crecimiento mutuo.
// `;

// const academicBackground = {
//   basicSchoolGoal: "Escuela Enseñanza Media N°1, Berisso, Buenos Aires",
//   firstAcademicPlace: "Instituto CIAT-IFSA, La Plata",
//   firstAcademicGoal: "ACOMPAÑAMIENTO TERAPÉUTICO (Res. Min. 1014/14)",
//   secondAcademicPlace: "Instituto CIAT-IFSA, La Plata",
//   secondAcademicGoal: "TÉCNICATURA SUPERIOR EN A.T. (Res. Min. 1221/15)",
// };

// const personalInfo = {
//   name: "Jacqueline",
//   lastName: "Retamar",
//   profession: "Técnica Superior en Acompañamiento Terapéutico",
//   matriculationNumber: "MP 254256",
//   birthDate: "17 de Junio de 1995",
//   birthPlace: "Villaguay, Entre Ríos",
//   birthCountry: "Argentina",
//   cellPhone: "+54 9 221 558-5782",
//   email: "jackeretamar95@gmail.com",
//   address: "27 N° 3586, Berisso, Buenos Aires",
// };

// function App() {
//   const handleDownloadCV = () => {
//     // Create a temporary anchor element
//     const link = document.createElement("a");
//     link.href = "/retamar-cv.pdf"; // Path to the PDF in the public folder
//     link.download = "retamar-cv.pdf"; // Name of the downloaded file
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };

//   return (
//     <div className="w-full h-full">
//       <div className="flex flex-col justify-start w-full lg:p-4">
//         <div className="border-t border-x border-gray-200 bg-white">
//           <nav className="border-t border-x border-gray-200 flex items-center lg:flex-row flex-col justify-between w-full bg-white lg:p-4">
//             <div className="flex items-center justify-start gap-4 h-full py-4">
//               {/* profile image */}
//               <img src={ProfilePhoto} alt="" className="w-32 rounded-full " />
//               {/* name and profession */}
//               <div className="flex flex-col gap-1">
//                 <h2 className="lg:text-3xl text-3xl font-semibold font-serif ">
//                   JACQUELINE
//                 </h2>
//                 <h2 className="lg:text-3xl text-3xl font-bold font-serif">
//                   RETAMAR
//                 </h2>
//                 <h4 className="lg:text-lg italic">
//                   Técnica Superior en Acompañamiento Terapéutico
//                 </h4>
//                 <p className="lg:text-lg text-lg italic">
//                   M.P: <span className="font-semibold italic ">254256</span>
//                 </p>
//               </div>
//             </div>
//             {/* contact info */}
//             <div className="flex flex-col items-start justify-start py-4">
//               {/* address */}
//               <div className="flex font-medium items-center justify-center gap-4">
//                 <span className=" w-10 h-10 flex justify-center items-center">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="size-6"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
//                     />
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
//                     />
//                   </svg>
//                 </span>
//                 <span>
//                   <p>27 N° 3586, Berisso</p>
//                   <p>Buenos Aires</p>
//                   <p>Argentina</p>
//                 </span>
//               </div>
//               {/* phone */}
//               <div className="flex font-medium items-center justify-center gap-4">
//                 <span className=" w-10 h-10 flex justify-center items-center">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="size-6"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
//                     />
//                   </svg>
//                 </span>
//                 <a href="https://wa.link/vrpsc3" target="_blank">
//                   +54 9 221 558-5782
//                 </a>
//               </div>
//               {/* email */}
//               <div className="flex font-medium items-center justify-center gap-4">
//                 <span className=" w-10 h-10 flex justify-center items-center">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     strokeWidth={1.5}
//                     stroke="currentColor"
//                     className="size-6"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
//                     />
//                   </svg>
//                 </span>
//                 <a
//                   target="_blank"
//                   href="mailto:jackeretamar95@gmail.com?subject=Consulta sobre un acompañamiento"
//                 >
//                   jackeretamar95@gmail.com
//                 </a>
//               </div>
//             </div>
//           </nav>
//           <div className="border-b border-x h-[250vh] border-gray-200 flex flex-col lg:flex-row items-start justify-start px-4 bg-white ">
//             {/* education, skills, languajes, personal info */}
//             <ul className="lg:w-1/3 w-full h-full flex flex-col items-start justify-start">
//               {/* education */}
//               <li className="w-full h-72 border-l border-black">
//                 <h2 className="flex justify-start items-center text-lg font-semibold border-b border-black">
//                   <span className="flex justify-center items-center w-10 h-10">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       strokeWidth={1.5}
//                       stroke="currentColor"
//                       className="size-6"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
//                       />
//                     </svg>
//                   </span>
//                   <span className="">EDUCACIÓN</span>
//                 </h2>
//                 <ul className=" p-2 flex flex-col">
//                   <li>
//                     <p className="flex font-medium text-lg">
//                       SECUNDARIO COMPLETO
//                     </p>
//                     <p className="pl-8">
//                       Escuela Enseñanza Media N°1, Berisso, Buenos Aires
//                     </p>
//                   </li>
//                   <li>
//                     <p className="flex font-medium text-lg">
//                       ACOMPAÑAMIENTO TERAPÉUTICO (Res. Min. 1014/14)
//                     </p>
//                     <p className="pl-8">Instituto CIAT-IFSA, La Plata</p>
//                   </li>
//                   <li>
//                     <p className="flex font-medium text-lg">
//                       TÉCNICATURA SUPERIOR EN A.T. (Res. Min. 1221/15)
//                     </p>
//                     <p className="pl-8">Instituto CIAT-IFSA, La Plata</p>
//                   </li>
//                 </ul>
//               </li>
//               {/* personal info */}
//               <li className="w-full border-l border-black  h-96">
//                 <h2 className="flex justify-start items-center text-lg font-semibold border-b border-black">
//                   <span className="flex justify-center items-center w-10 h-10">
//                     <svg
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="none"
//                       viewBox="0 0 24 24"
//                       strokeWidth={1.5}
//                       stroke="currentColor"
//                       className="size-6"
//                     >
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
//                       />
//                     </svg>
//                   </span>
//                   <span>DATOS PERSONALES</span>
//                 </h2>
//                 <ul className="p-2 flex flex-col">
//                   <li>
//                     <p className="flex font-medium text-lg">
//                       FECHA DE NACIMIENTO
//                     </p>
//                     <p className="pl-8">17 de Junio de 1995</p>
//                   </li>
//                   <li>
//                     <p className="flex font-medium text-lg">
//                       LUGAR DE NACIMIENTO
//                     </p>
//                     <p className="pl-8">Villaguay, Entre Ríos</p>
//                   </li>
//                   <li>
//                     <p className="flex font-medium text-lg">NACIMIENTO</p>
//                     <p className="pl-8">Argentina</p>
//                   </li>
//                 </ul>
//               </li>
//             </ul>
//             {/* about me, experience */}
//             <div className="lg:w-2/3 w-full flex flex-col lg:flex-row items-start justify-start">
//               <ul className="w-full h-full flex flex-col items-start justify-start">
//                 {/* about me */}
//                 <li className="w-full h-72 border-l border-black">
//                   <h2 className="flex justify-start items-center text-lg font-semibold border-b border-black">
//                     <span className="flex justify-center items-center w-10 h-10">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth={1.5}
//                         stroke="currentColor"
//                         className="size-6"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
//                         />
//                       </svg>
//                     </span>
//                     <span>SOBRE MI</span>
//                   </h2>
//                   <p className="p-2 text-lg text-justify italic">
//                     Responsable, puntual, comprometida y organizada, con
//                     capacidad para trabajar en equipo y adaptarme a diferentes
//                     situaciones. Experiencia en:{" "}
//                     <ul>
//                       <li>
//                         Brindar apoyo emocional y acompañamiento en eventuales
//                         momentos de crisis.
//                       </li>
//                       <li>
//                         Fomentar la colaboración en entornos
//                         interdisciplinarios.
//                       </li>
//                       <li>
//                         Desarrollar habilidades en busca de una mayor
//                         independencia.
//                       </li>
//                     </ul>
//                     Mi enfoque está en ofrecer un trato cordial y respetuoso,
//                     destacando la creatividad y la proactividad para responder a
//                     las necesidades de las personas con las que trabajo. Aspiro
//                     a contribuir al bienestar integral de quienes acompaño,
//                     promoviendo un ambiente de confianza y crecimiento mutuo.
//                   </p>
//                 </li>
//                 {/* workin experience  */}
//                 <li className="w-full border-l border-black h-96">
//                   <h2 className="w-full flex justify-start items-center text-lg font-semibold border-b border-black">
//                     <span className="flex justify-center items-center w-10 h-10">
//                       <svg
//                         xmlns="http://www.w3.org/2000/svg"
//                         fill="none"
//                         viewBox="0 0 24 24"
//                         strokeWidth={1.5}
//                         stroke="currentColor"
//                         className="size-6"
//                       >
//                         <path
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                           d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
//                         />
//                       </svg>
//                     </span>
//                     <span>EXPERIENCIA LABORAL</span>
//                   </h2>
//                   <ul className=" p-2 flex flex-col">
//                     {experience
//                       ? experience.map((ex, i) => (
//                           <li key={i}>
//                             <p>
//                               <span className="font-medium text-lg">
//                                 Cargo:{" "}
//                               </span>
//                               {ex.charge}
//                             </p>
//                             <p>
//                               <span className="font-medium text-md">
//                                 Lugar:{" "}
//                               </span>
//                               {ex.place}
//                             </p>
//                             <p>
//                               <span className="font-medium text-md">
//                                 Período:{" "}
//                               </span>
//                               {ex.period}
//                             </p>
//                           </li>
//                         ))
//                       : null}
//                   </ul>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="flex justify-end w-full mb-4">
//         <button
//           onClick={handleDownloadCV}
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center gap-2"
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-5 w-5"
//             viewBox="0 0 20 20"
//             fill="currentColor"
//           >
//             <path
//               fillRule="evenodd"
//               d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
//               clipRule="evenodd"
//             />
//           </svg>
//           Descargar CV
//         </button>
//       </div>
//     </div>
//   );
// }

// export default App;
import ProfilePhoto from "./assets/profile_photo.jpg";

const personalInfo = {
  name: "Jacqueline",
  lastName: "Retamar",
  profession: "Técnica Superior en Acompañamiento Terapéutico",
  matriculationNumber: "MP 254256",
  birthDate: "17 de Junio de 1995",
  birthPlace: "Villaguay, Entre Ríos, Argentina",
  cellPhone: "+54 9 221 558-5782",
  email: "jackeretamar95@gmail.com",
  address: "27 N° 3586, Berisso, Buenos Aires",
};

const aboutMe = `
Responsable, puntual, comprometida y organizada, con capacidad para trabajar en equipo y adaptarme a diferentes situaciones. Experiencia en:
- Brindar apoyo emocional y acompañamiento en eventuales momentos de crisis.
- Fomentar la colaboración en entornos interdisciplinarios.
- Desarrollar habilidades en busca de una mayor independencia.

Mi enfoque está en ofrecer un trato cordial y respetuoso, destacando la creatividad y la proactividad para responder a las necesidades de las personas con las que trabajo. Aspiro a contribuir al bienestar integral de quienes acompaño, promoviendo un ambiente de confianza y crecimiento mutuo.
`;

const experience = [
  {
    charge: "Acompañante Terapéutico - Niño con TEA",
    place: "Instituto Canossiano San José",
    period: "Marzo 2025 - Actualidad",
  },
  {
    charge: "Acompañante Terapéutico - Niño con Síndrome de Down",
    place: "Colonia 'Los Tilos'",
    period: "Enero 2025 - Febrero 2025",
  },
  {
    charge: "Acompañante Terapéutico - Niño con TEA",
    place: "Domicilio",
    period: "Febrero 2023 - Diciembre 2024",
  },
  {
    charge: "Acompañante Terapéutico - Niño con TEA",
    place: "Jardín 'Arco Iris'",
    period: "Febrero 2023 - Diciembre 2024",
  },
];

const academicBackground = [
  {
    place: "Instituto CIAT-IFSA, La Plata",
    title: "TÉCNICATURA SUPERIOR EN A.T. (Res. Min. 1221/15)",
  },
  {
    place: "Instituto CIAT-IFSA, La Plata",
    title: "ACOMPAÑAMIENTO TERAPÉUTICO (Res. Min. 1014/14)",
  },
  {
    place: "Escuela Enseñanza Media N°1, Berisso, Buenos Aires",
    title: "Educación Secundaria",
  },
];

export default function ATProfile() {
  const handleDownloadCV = () => {
    // Create a temporary anchor element
    const link = document.createElement("a");
    link.href = "/retamar-cv.pdf"; // Path to the PDF in the public folder
    link.download = "retamar-cv.pdf"; // Name of the downloaded file
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="max-w-4xl mx-auto p-4 text-slate-800">
      {/* Cabecera con foto y datos principales */}
      <div className="flex flex-col md:flex-row items-center gap-4 bg-white p-4 rounded-lg shadow-md shadow-violet-100 mb-8">
        <img
          src={ProfilePhoto}
          alt="Foto de perfil"
          className="w-32 h-32 lg:w-40 lg:h-40 object-cover rounded-full border border-violet-600"
        />
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold font-serif">
            {personalInfo.name} {personalInfo.lastName}
          </h1>
          <p className="text-2xl text-violet-950 font-extralight">
            {personalInfo.profession}
          </p>
          <p className="text-xl mt-2 font-thin">
            {personalInfo.matriculationNumber}
          </p>
          <div className="mt-3 space-y-1 text-sm gap-2">
            <a
              target="_blank"
              href="https://wa.link/ja5eyk"
              className="flex items-center gap-2"
            >
              {/* <PhoneIcon className="h-5 w-5 text-rose-600" />{" "} */}
              <span className="text-violet-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                  />
                </svg>
              </span>

              {personalInfo.cellPhone}
            </a>
            <div className="w-full border-t border-violet-600/20"></div>
            <a
              target="_blank"
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-2"
            >
              {/* <MailIcon className="h-5 w-5 text-rose-600" />{" "} */}
              <span className="text-violet-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                  />
                </svg>
              </span>
              {personalInfo.email}
            </a>
            <div className="w-full border-t border-violet-600/20"></div>
            <p className="flex items-center gap-2">
              <span className="text-violet-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
              </span>{" "}
              {personalInfo.address}
            </p>
            <div className="w-full border-t border-violet-600/20"></div>

            <p className="flex items-center gap-2">
              {/* <CalendarIcon className="h-5 w-5 text-rose-600" />{" "} */}
              <span className="text-violet-900">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
                  />
                </svg>
              </span>
              {personalInfo.birthDate} - {personalInfo.birthPlace}
            </p>

          </div>
        </div>
      </div>

      {/* Sobre mí */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold border-b text-violet-950 border-violet-600 mb-2">
          Sobre mí
        </h2>
        <p className="whitespace-pre-line text-justify">{aboutMe}</p>
      </section>

      {/* Experiencia laboral */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold border-b text-violet-950 border-violet-600 mb-2">
          Experiencia
        </h2>
        <ul className="space-y-4">
          {experience.map((job, i) => (
            <li key={i} className=" p-4 rounded-lg shadow-sm shadow-violet-100">
              <p className="font-semibold text-violet-900">{job.charge}</p>
              <p className="text-sm text-slate-600">{job.place}</p>
              <p className="text-sm text-slate-500 italic">{job.period}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Formación académica */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold border-b text-violet-950 border-violet-600 mb-2">
          Formación Académica
        </h2>
        <ul className="space-y-4">
          {academicBackground.map((edu, i) => (
            <li key={i} className="p-4 rounded-lg shadow-sm shadow-violet-100">
              <p className="font-semibold text-violet-900">{edu.title}</p>
              <p className="text-sm">{edu.place}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="flex justify-center">
        <button
          onClick={handleDownloadCV}
          className="bg-violet-800 text-white p-2 rounded-lg hover:bg-violet-900"
        >
          Descargar CV
        </button>
      </section>
    </div>
  );
}
