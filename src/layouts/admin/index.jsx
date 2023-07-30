import React, { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import axios from 'axios';

import Navbar from "components/navbar";
import Sidebar from "components/sidebar";
import Footer from "components/footer/Footer";
import routes from "routes.js";

import SearchById from "views/admin/searchbyid";

export default function Admin(props) {

  // El componente Admin es una función que recibe props como parámetro. Estas props se capturan usando el operador de desestructuración { ...rest }
  const { ...rest } = props;

  //  Se utiliza el hook useLocation para obtener la ubicación actual de la ruta.
  const location = useLocation();

  // Controla si la barra lateral está abierta o cerrada.
  const [open, setOpen] = React.useState(true);

  // Almacena el nombre de la ruta actual.
  const [currentRoute, setCurrentRoute] = React.useState("Main Dashboard");

  /**
   * Se utiliza para agregar un evento de escucha del evento resize en la ventana. 
   * Cuando el ancho de la ventana es menor a 1200 píxeles, se establece open en false; 
   * de lo contrario, se establece en true. Esto controla el comportamiento de la barra 
   * lateral en función del tamaño de la ventana.
  */
  React.useEffect(() => {
    window.addEventListener("resize", () =>
      window.innerWidth < 1200 ? setOpen(false) : setOpen(true)
    );
  }, []);

  /**
   * Se ejecuta cada vez que cambia la ubicación de la ruta (location.pathname). 
   * En este efecto, se llama a la función getActiveRoute(routes), que busca la ruta activa actual  
   * comparando la URL actual con las rutas definidas en el archivo routes.js.
   */
  React.useEffect(() => {
    getActiveRoute(routes);
  }, [location.pathname]);

  /**
   * Las funciones getActiveRoute y getActiveNavbar se utilizan para determinar la ruta 
   * y el estado del navbar activos. Estas funciones recorren las rutas definidas 
   * y verifican si la URL actual coincide con alguna de las rutas.
   */

  /**
   * getActiveRoute se encarga de determinar la ruta activa actual comparando la URL actual con las rutas definidas en el archivo routes.js
   */
  const getActiveRoute = (routes) => {
    let activeRoute = "Main Dashboard";                 // Valor predeterminado.
    for (let i = 0; i < routes.length; i++) {           // Se itera sobre el array de rutas (routes)
      if (                                              // Se verifica si la URL actual (window.location.href) contiene la combinación de la ubicación de diseño y la ruta de la ruta actual.
        window.location.href.indexOf(                   
          routes[i].layout + "/" + routes[i].path
        ) !== -1
      ) {
        setCurrentRoute(routes[i].name);                // Si se encuentra una coincidencia, se actualiza la variable currentRoute con el nombre de la ruta correspondiente (routes[i].name).
      }
    }
    return activeRoute;
  };

  /**
   * getActiveNavbar se utiliza para determinar el estado del navbar activo.
   */
  const getActiveNavbar = (routes) => {
    let activeNavbar = false;                            // Valor predeterminado.
    for (let i = 0; i < routes.length; i++) {
      if (                                               // Se verifica si la URL actual (window.location.href) contiene la combinación de la ubicación de diseño y la ruta de la ruta actual. 
        window.location.href.indexOf(
          routes[i].layout + routes[i].path
        ) !== -1
      ) {
        return routes[i].secondary;                      // Si se encuentra una coincidencia, se retorna el valor de la propiedad secondary de la ruta correspondiente (routes[i].secondary), que indica si el navbar debe ser secundario o no.
      }
    }
    return activeNavbar;                                 // Si no se encuentra ninguna coincidencia, se retorna el valor de activeNavbar, que sigue siendo false en ese caso.
  };

  /**
   * Generar las rutas definidas en el archivo routes.js y retornar los componentes correspondientes.
   */
  const getRoutes = (routes) => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route path={`/${prop.path}`} element={prop.component} key={key} />
        );
      } else {
        return null;
      }
    });
  };

  // Se establece la dirección del documento como "ltr" (de izquierda a derecha).
  document.documentElement.dir = "ltr";


  return (
    // "flex h-full w-full" se utilizan para asegurarse de que el componente ocupe todo el espacio disponible en altura y ancho.
    <div className="flex h-full w-full">

      {
      /**
       * Barra lateral. Se le pasa la prop open que indica si la barra lateral está abierta o cerrada, 
       * y la prop onClose que se ejecuta cuando se cierra la barra lateral.
      */
      }
      <Sidebar open={open} onClose={() => setOpen(false)} />

      {
      /**
       * Navbar & Main Content
       * Contenedor para el contenido principal.
      */
      }
      <div className="h-full w-full bg-lightPrimary dark:!bg-navy-900">

        {
        /* Main Content 
         * "mx-[12px]": margen horizontal de 12 píxeles
         * "h-full flex-none" establece la altura como el 100% y evita que el contenido se expanda
         * "transition-all" aplica una transición animada a todas las propiedades CSS cuando hay cambios
         * "md:pr-2" y "xl:ml-[313px]": modificadores condicionales basados en breakpoints para establecer los márgenes y los desplazamientos laterales en pantallas de tamaño mediano y grande.
        */
        }
        <main
          className={`mx-[12px] h-full flex-none transition-all md:pr-2 ${open ? 'md:pr-2 xl:ml-[313px]' : ''}`}
        >

          {/* Routes: se utiliza como contenedor para las rutas y se ajusta a la altura completa. */}
          <div className="h-full">

            {
            /* Barra de navegación 
             * onOpenSidenav(): se ejecuta cuando se abre la barra lateral
             * logoText: establece el texto del logotipo
             * brandText: establece el texto de la marca como el nombre de la ruta actual (currentRoute)
             * secondary: indica si el navbar debe ser secundario o no
             * las props restantes ({...rest}) que se pasan directamente al componente.
            */
            }
            <Navbar
              onOpenSidenav={() => setOpen(true)}
              logoText={"FINSOLRED"}
              brandText={currentRoute}
              secondary={getActiveNavbar(routes)}
              {...rest}
            />

            {
            /**
             * Contenido principal 
             * El componente Routes de React Router renderiza las rutas definidas en el archivo routes.js mediante la función getRoutes(routes).
            */
            }
            <div className="pt-5 mx-auto mb-auto h-full min-h-[84vh] p-2 md:pr-2">

              {/**
              {
                dataResults && <SearchById results={JSON.stringify(dataResults)}/>
              }
              */}
              <Routes>
                {getRoutes(routes)}
                <Route
                  path="/"
                  element={<Navigate to="/admin/searchbyid" replace />}
                />
              </Routes>
            </div>
            {/* Pie de página. */}
            <div className="p-3">
              <Footer />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}