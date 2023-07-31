import React from "react";

import { useEffect } from "react";

import { FiAlignJustify } from "react-icons/fi";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { RiMoonFill, RiSunFill } from "react-icons/ri";

import { setSearchValue } from "redux/features/searchValueSlice";
import { useDispatch } from "react-redux";

const Navbar = (props) => {
  
  // Props destructuring para extraer las propiedades `onOpenSidenav` y `brandText` del objeto `props`
  const { onOpenSidenav, brandText } = props;

  // Declaración de un estado local `darkmode` con un valor inicial de `false`
  const [darkmode, setDarkmode] = React.useState(false);

  const dispatch = useDispatch();

  const handleEnterKeyPress = (e) => {
    if (e.key === 'Enter') {
      dispatch(setSearchValue(e.target.value))
    }
  };

  return (
    <nav className="sticky top-4 z-40 flex flex-row flex-wrap items-center justify-between rounded-xl bg-white/10 p-2 backdrop-blur-xl dark:bg-[#0b14374d]">
      
      {/* Contenido de la parte izquierda de la barra de navegación */}
      <div className="ml-[6px]">
        {/* Título y enlaces de navegación */}
        <div className="h-6 w-[224px] pt-1">
          <a
            className="text-sm font-normal text-navy-700 hover:underline dark:text-white dark:hover:text-white"
            href=" "
          >
            Páginas
            <span className="mx-1 text-sm text-navy-700 hover:text-navy-700 dark:text-white">
              {" "}
              /{" "}
            </span>
          </a>

          {/* Enlace del título principal */}
          <Link
            className="text-sm font-normal capitalize text-navy-700 hover:underline dark:text-white dark:hover:text-white"
            to="#"
          >
            {brandText}
          </Link>
        </div>

        {/* Título principal */}
        <p className="shrink text-[33px] capitalize text-navy-700 dark:text-white">
          <Link
            to="#"
            className="font-bold capitalize hover:text-navy-700 dark:hover:text-white"
          >
            {brandText}
          </Link>
        </p>
      </div>

      {/* Contenido de la parte derecha de la barra de navegación */}
      <div className="relative mt-[3px] flex h-[61px] w-[355px] flex-grow items-center justify-between gap-2 rounded-full bg-white px-5 py-2 shadow-xl shadow-shadow-500 dark:!bg-navy-800 dark:shadow-none md:w-[500px] md:flex-grow-0 md:gap-1 xl:w-[300px] xl:gap-2">

        <div className="h-[50px] flex items-center rounded-full bg-[#fbfbfb] text-navy-700 dark:bg-navy-900 dark:text-white xl:w-[225px]">
          <p className="pl-3 pr-2 text-xl">
            <FiSearch className="h-4 w-4 text-gray-400 dark:text-white" />
          </p>
          <input
            type="text"
            placeholder="Buscar..."
            onKeyDown={handleEnterKeyPress}
            class="block h-full w-full rounded-full bg-[#fbfbfb] text-sm font-medium text-navy-700 outline-none placeholder:!text-gray-400 dark:bg-navy-900 dark:text-white dark:placeholder:!text-white sm:w-fit"
          />
        </div>


        {/* Icono de menú desplegable en dispositivos móviles */}
        <span
          className="flex cursor-pointer text-xl text-[#86868b] dark:text-white "//xl:hidden
          onClick={onOpenSidenav}
        >
          <FiAlignJustify className="h-5 w-5" />
        </span>
        
        {/* Cambio de tema claro/oscuro */}
        <div
          className="cursor-pointer text-[#86868b]"
          onClick={() => {
            if (darkmode) {
              document.body.classList.remove("dark");
              setDarkmode(false);
            } else {
              document.body.classList.add("dark");
              setDarkmode(true);
            }
          }}
        >
          {darkmode ? (
            <RiSunFill className="h-4 w-4 text-[#86868b] dark:text-white" />
          ) : (
            <RiMoonFill className="h-4 w-4 text-[#86868b] dark:text-white" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;