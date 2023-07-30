/* eslint-disable */

import { HiX } from "react-icons/hi";
import Links from "./components/Links";
import routes from "routes.js";

const Sidebar = ({ open, onClose }) => {
  return (

    // Contenedor principal
    <div
      className={`sm:none duration-175 linear fixed !z-50 flex min-h-full flex-col bg-white pb-10 shadow-2xl shadow-white/5 transition-all dark:!bg-navy-800 dark:text-white md:!z-50 lg:!z-50 xl:!z-0 ${
        open ? "translate-x-0" : "-translate-x-96"
      }`}
    >
      { /* Se agrega un ícono de cierre (HiX) en la esquina superior derecha de la barra lateral. */ }
      <span
        className="absolute top-4 right-4 block cursor-pointer" // xl:hidden
        onClick={onClose}
      >
        <HiX />
      </span>

      { /* Título de la barra lateral */}
      <div className={`mx-[56px] mt-[50px] flex items-center`}>
        <div className="mt-1 ml-1 h-2.5 font-poppins text-[26px] font-bold uppercase text-navy-700 dark:text-white">
          DATA <span class="font-medium">Service</span>
        </div>
      </div>

      { /* Línea horizontal debajo del título */}
      <div class="mt-[58px] mb-7 h-px bg-gray-300 dark:bg-white/30" />
      
      {/* Nav item: lista de elementos de navegación (<ul>) utilizando el componente Links*/}
      <ul className="mb-auto pt-1">
        <Links routes={routes} />
      </ul>

    </div>
  );
};

export default Sidebar;