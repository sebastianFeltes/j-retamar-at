import "./App.css";
import "animate.css";
import ProfilePhoto from "./assets/profile_photo.jpg";
import { useRef } from "react";
import generatePDF, { Resolution, Margin } from "react-to-pdf";

const options = {
  // default is `save`
  method: "open",
  // default is Resolution.MEDIUM = 3, which should be enough, higher values
  // increases the image quality but also the size of the PDF, so be careful
  // using values higher than 10 when having multiple pages generated, it
  // might cause the page to crash or hang.
  resolution: Resolution.EXTREME,
  page: {
    // margin is in MM, default is Margin.NONE = 0
    margin: Margin.SMALL,
    // default is 'A4'
    format: "default",
    // default is 'portrait'
    orientation: "portrait",
  },
  canvas: {
    // default is 'image/jpeg' for better size performance
    mimeType: "image/png",
    qualityRatio: 1,
  },
  // Customize any value passed to the jsPDF instance and html2canvas
  // function. You probably will not need this and things can break,
  // so use with caution.
  overrides: {
    // see https://artskydj.github.io/jsPDF/docs/jsPDF.html for more options
    pdf: {
      compress: true,
    },
    // see https://html2canvas.hertzen.com/configuration for more options
    canvas: {
      useCORS: true,
    },
  },
};

const experience = [
  {
    charge: "Acompañante Terapéutico - Niño con TEA",
    place: "Domicilio",
    period: "Febrero 2023 - Actualidad",
  },
  {
    charge: "Acompañante Terapéutico - Niño con TEA",
    place: "Institución Educativa",
    period: "Febrero 2023 - Actualidad",
  },
  {
    charge: "Coordinadora Acompañantes Terapéuticos (pasantías)",
    place: "Casa de Abrigo de Mujeres de La Plata",
    period: "Septiembre 2022 - Diciembre 2022",
  },
  {
    charge: "Acompañante Terapéutico (pasantías)",
    place: "Hogar Convivencial Raúl Pérez Carreño",
    period: "Septiembre 2018 - Diciembre 2018",
  },
];

const person = {};
function App() {
  const targetRef = useRef();
  return (
    <div className="w-full h-full">
      <div
        className="flex flex-col gap-4 justify-start w-full lg:px-24 lg:py-4 "
        ref={targetRef}
      >
        <nav className="flex items-center lg:flex-row flex-col justify-between w-full bg-white rounded-lg lg:p-4">
          <div className="flex items-center justify-start gap-4 h-full py-4">
            {/* profile image */}
            <img src={ProfilePhoto} alt="" className="w-32 rounded-full " />
            {/* name and profession */}
            <div className="flex flex-col gap-1">
              <h2 className="lg:text-3xl text-2xl font-semibold font-serif ">
                JACQUELINE
              </h2>
              <h2 className="lg:text-3xl text-2xl font-bold font-serif">
                RETAMAR
              </h2>
              <h4 className="lg:text-lg italic">
                Técnica Superior en Acompañamiento Terapéutico
              </h4>
              <p className="lg:text-md text-sm italic">
                M.P: <span className="font-semibold italic ">254256</span>
              </p>
            </div>
          </div>
          {/* contact info */}
          <div className="flex flex-col items-start justify-start gap-2 py-4">
            {/* address */}
            <div className="flex font-medium items-center justify-center gap-4">
              <span>
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
              </span>
              <span>
                <p>27 N° 3586, Berisso</p>
                <p>Buenos Aires</p>
                <p>Argentina</p>
              </span>
            </div>
            {/* phone */}
            <div className="flex font-medium items-center justify-center gap-4">
              <span>
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
              <a href="https://wa.link/vrpsc3" target="_blank">
                +54 9 221 558-5782
              </a>
            </div>
            {/* email */}
            <div className="flex font-medium items-center justify-center gap-4">
              <span>
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
              <a
                target="_blank"
                href="mailto:jackeretamar95@gmail.com?subject=Consulta sobre un acompañamiento"
              >
                jackeretamar95@gmail.com
              </a>
            </div>
          </div>
        </nav>
        <div className="flex flex-col lg:flex-row items-start justify-start gap-2 px-4 bg-white rounded-lg">
          {/* education, skills, languajes, personal info */}
          <ul className="lg:w-1/3 w-full h-full flex flex-col items-start justify-start">
            {/* education */}
            <li className="w-full flex justify-center items-center">
              <div className="w-3/4 lg:border-none  border-t"></div>
            </li>
            <li className="">
              <h2 className="flex justify-start items-center gap-2 text-lg font-semibold border-b border-black">
                <span className="flex justify-center items-center">
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
                      d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5"
                    />
                  </svg>
                </span>
                <span className="">EDUCACIÓN</span>
              </h2>
              <ul className="border-l border-black p-2 flex flex-col gap-2">
                <li>
                  <p className="flex font-medium text-md">
                    SECUNDARIO COMPLETO
                  </p>
                  <p className="pl-8">
                    Escuela Enseñanza Media N°1, Berisso, Buenos Aires
                  </p>
                </li>
                <li>
                  <p className="flex font-medium text-md">
                    ACOMPAÑAMIENTO TERAPÉUTICO (Res. Min. 1014/14)
                  </p>
                  <p className="pl-8">Instituto CIAT-IFSA, La Plata</p>
                </li>
                <li>
                  <p className="flex font-medium text-md">
                    TÉCNICATURA SUPERIOR EN A.T. (Res. Min. 1221/15)
                  </p>
                  <p className="pl-8">Instituto CIAT-IFSA, La Plata</p>
                </li>
              </ul>
            </li>
            <li className="w-full flex justify-center items-center">
              <div className="w-3/4 lg:border-none border-t"></div>
            </li>
            {/* personal info */}
            <li className="w-full">
              <h2 className="flex justify-start items-center gap-2 text-lg font-semibold border-b border-black">
                <span className="flex justify-center items-center">
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
                      d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                    />
                  </svg>
                </span>
                <span>DATOS PERSONALES</span>
              </h2>
              <ul className="border-l border-black p-2 flex flex-col gap-2">
                <li>
                  <p className="flex font-medium text-md">
                    FECHA DE NACIMIENTO
                  </p>
                  <p className="pl-8">17 de Junio de 1995</p>
                </li>
                <li>
                  <p className="flex font-medium text-md">
                    LUGAR DE NACIMIENTO
                  </p>
                  <p className="pl-8">Villaguay, Entre Ríos</p>
                </li>
                <li>
                  <p className="flex font-medium text-md">NACIMIENTO</p>
                  <p className="pl-8">Argentina</p>
                </li>
              </ul>
            </li>
            <li className="w-full flex justify-center items-center">
              <div className="w-3/4 lg:border-none border-t"></div>
            </li>
          </ul>
          {/* about me, experience */}
          <div className="lg:w-2/3 w-full flex flex-col lg:flex-row items-start justify-start">
            <ul className="w-full h-full flex flex-col gap-4 items-start justify-start">
              {/* about me */}
              <li className="w-full">
                <h2 className="flex justify-start items-center gap-2 text-lg font-semibold border-b border-black">
                  <span className="flex justify-center items-center">
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
                        d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
                      />
                    </svg>
                  </span>
                  <span>SOBRE MI</span>
                </h2>
                <p className="p-2 text-sm text-justify border-black border-l italic">
                  Responsable, puntual, comprometida y organizada, con capacidad
                  para trabajar en equipo y adaptarme a diferentes situaciones.
                  Experiencia en:{" "}
                  <ul>
                    <li>
                      Brindar apoyo emocional y acompañamiento en eventuales
                      momentos de crisis.
                    </li>
                    <li>
                      Fomentar la colaboración en entornos interdisciplinarios.
                    </li>
                    <li>
                      Desarrollar habilidades en busca de una mayor
                      independencia.
                    </li>
                  </ul>
                  Mi enfoque está en ofrecer un trato cordial y respetuoso,
                  destacando la creatividad y la proactividad para responder a
                  las necesidades de las personas con las que trabajo. Aspiro a
                  contribuir al bienestar integral de quienes acompaño,
                  promoviendo un ambiente de confianza y crecimiento mutuo.
                </p>
              </li>
              <li className="w-full flex justify-center items-center">
                <div className="w-3/4 lg:border-none border-t"></div>
              </li>
              {/* workin experience  */}
              <li className="w-full">
                <h2 className="w-full flex justify-start items-center gap-2 text-lg font-semibold border-b border-black">
                  <span className="flex justify-center items-center">
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
                        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                      />
                    </svg>
                  </span>
                  <span>EXPERIENCIA LABORAL</span>
                </h2>
                <ul className="border-l border-black p-2 flex flex-col gap-2">
                  <li>
                    <p>
                      <span className="font-medium text-md">Cargo: </span>
                      Acompañante Terapéutico – Niño con TEA
                    </p>
                    <p>
                      <span className="font-medium text-md">Lugar: </span>
                      Domicilio
                    </p>
                    <p>
                      <span className="font-medium text-md">Período: </span>
                      Febrero 2023 – Actualidad
                    </p>
                  </li>
                  {experience
                    ? experience.map((ex, i) => (
                        <li key={i}>
                          <p>
                            <span className="font-medium text-md">Cargo: </span>
                            {ex.charge}
                          </p>
                          <p>
                            <span className="font-medium text-md">Lugar: </span>
                            {ex.place}
                          </p>
                          <p>
                            <span className="font-medium text-md">
                              Período:{" "}
                            </span>
                            {ex.period}
                          </p>
                        </li>
                      ))
                    : null}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center items-center">
        <button
          className="border rounded-md px-2 py-1 bg-indigo-100 border-violet-400 italic hover:bg-indigo-200"
          onClick={() =>
            generatePDF(targetRef, { filename: "Retamar-J-CV.pdf" })
          }
        >
          Descargar PDF
        </button>
      </div>
    </div>
  );
}

export default App;
