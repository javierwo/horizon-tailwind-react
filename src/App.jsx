import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Diseños (layouts) de la aplicación
import AdminLayout from "layouts/admin";
import RtlLayout from "layouts/rtl";
import AuthLayout from "layouts/auth";


const App = () => {
  return (
    <Routes>
      { /* auth/* hace referencia a cualquier ruta que comience con "/auth/". Cuando se accede a una ruta que coincide con este patrón, se renderiza el componente AuthLayout. */ }
      {/** <Route path="auth/*" element={<AuthLayout />} />*/}
      <Route path="admin/*" element={<AdminLayout />} />
      
      {/** <Route path="rtl/*" element={<RtlLayout />} />*/}

      { 
      /**
       * Es la ruta raíz de la aplicación. Cuando se accede a la raíz ("/"),
       * se redirige al usuario a la ruta "/admin" utilizando el componente Navigate. 
       * El atributo replace indica que se debe reemplazar la entrada del historial de 
       * navegación en lugar de agregar una nueva.
       */
      }
      <Route path="/" element={<Navigate to="/admin" replace />} />
    </Routes>
  );
};

export default App;