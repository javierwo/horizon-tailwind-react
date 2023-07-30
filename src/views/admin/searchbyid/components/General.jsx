import Card from "components/card";
import React from "react";

const General = () => {
  return (
    <Card extra={"w-full h-full p-3"}>
      {/* Header */}
      <div className="mt-2 mb-4 w-full">
        <h4 className="px-2 text-xl font-bold text-navy-700 dark:text-white">
          Información Personal
        </h4>
        <p className="mt-2 px-2 text-base text-gray-600">
          Datos actualizados a Abril de 2023.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-4 px-2"> {/*md:grid md:grid-cols-2*/}
        <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Sexo</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            Masculino
          </p>
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Condición de ciudadanía</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            Ciudadano
          </p>
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Nivel de Estudios</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            Básica
          </p>
        </div>

        
        <div className="flex flex-col items-start justify-center rounded-2xl bg-white bg-clip-border px-3 py-4 shadow-3xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
          <p className="text-sm text-gray-600">Descripción de Profesión</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            Empleado Privado
          </p>
        </div>
        {/** */}

      </div>
    </Card>
  );
};

export default General;
