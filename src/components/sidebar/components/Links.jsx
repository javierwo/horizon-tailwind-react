/* eslint-disable */
import React from "react";
import { Link, useLocation } from "react-router-dom";
import DashIcon from "components/icons/DashIcon";

export function SidebarLinks(props) {

  // Para obtener la ubicación actual de la página.
  let location = useLocation();

  const { routes } = props;
  // Verifica si la ruta actual coincide con el nombre de la ruta proporcionada como argumento. Devuelve true si es así.
  const activeRoute = (routeName) => {
    return location.pathname.includes(routeName);
  };
  /**
   * Recibe el array de rutas y las recorre utilizando el método map. 
   * Para cada ruta, se verifica si pertenece a uno de los tres diseños posibles (/admin, /auth, /rtl).
  */
  const createLinks = (routes) => {
    return routes.map((route, index) => {
      if (
        route.layout === "/admin" ||
        route.layout === "/auth" ||
        route.layout === "/rtl"
      ) {
        return (
          // Para las rutas válidas, se crea un elemento Link que apunta a la ruta correspondiente.
          <Link key={index} to={route.layout + "/" + route.path}>
            <div className="relative mb-3 flex hover:cursor-pointer">
              <li
                className="my-[3px] flex cursor-pointer items-center px-8"
                key={index}
              >
                { /* Se utiliza el componente DashIcon como ícono predeterminado si la ruta no proporciona un ícono personalizado. */ }
                <span
                  className={`${
                    activeRoute(route.path) === true
                      ? "font-bold text-navy-700 dark:text-white"
                      : "font-thin text-gray-600"
                  }`}
                >
                  {route.icon ? route.icon : <DashIcon />}{" "}
                </span>
                { /**El nombre de la ruta se muestra en negrita si es la ruta activa. */ }
                <p
                  className={`leading-1 ml-4 flex ${// transition-all ease-in duration-100 text-lg
                    activeRoute(route.path) === true
                      ? "font-bold text-navy-700 dark:text-white  "//
                      : "font-thin text-gray-600"
                  }`}
                >
                  {route.name}
                </p>
              </li>
              { 
              /** 
               * Si la ruta actual coincide con la ruta representada por el elemento de navegación, 
               * se muestra una línea vertical de color (bg-brand-500 dark:bg-brand-400) en el extremo derecho del elemento. 
              */}
              {activeRoute(route.path) ? (
                <div class="absolute right-0 h-full w-1 rounded-lg bg-navy-700 dark:bg-white" />
              ) : null}
            </div>
          </Link>
        );
      }
    });
  };
  // BRAND
  return createLinks(routes);
}

export default SidebarLinks;