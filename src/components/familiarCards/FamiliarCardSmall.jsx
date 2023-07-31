import avatar_male from "assets/img/avatars/avatar_male.png";

import React from 'react'

const FamiliarCardSmall = (props) => {

  const { parentezco, nombre, edad, ci, ciudadania, grupo } = props;

  let colorParentezco;

  if ((parentezco.includes("ABUELA")) || (parentezco.includes("ABUELO"))) {
    colorParentezco = 'bg-yellow-100 text-yellow-600 border-2 border-yellow-200';
  } else if ((parentezco == "MAMÁ") || (parentezco == "PAPÁ")) {
    colorParentezco = 'bg-cyan-100 text-cyan-600 border-2 border-cyan-200';
  } else if (parentezco.includes("HIJO")) {
    colorParentezco = 'bg-teal-100 text-teal-600 border-2 border-teal-200';
  } else if (parentezco.includes("HERMANO")) {
    colorParentezco = 'bg-indigo-100 text-indigo-600 border-2 border-indigo-200';
  } else {
    colorParentezco = 'bg-green-100 text-green-600 border-2 border-green-200';
  }

  let colorCiudadania;

  if (ciudadania === "Ciudadano") {
    colorCiudadania = 'border-[#f5f5f5]';
  } else {
    colorCiudadania = 'text-red-600 border-red-200';
  }
  
  return (
    <div className='w-full rounded-xl border-2 border-[#f5f5f5] p-4'>
      <div className="flex items-start flex-col">
        <div className="flex gap-2 items-center">
          <div className={`text-xs ${colorParentezco} rounded-md px-2 py-1 font-semibold`}>
            {parentezco}
          </div>
          <div className={`text-xs rounded-md px-2 py-1 h-full flex-1 border-2 ${colorCiudadania} font-semibold  `}>
            {ciudadania}
          </div>
        </div>
        <div className='dark:text-white font-semibold text-base'>
          {nombre}
        </div>
      </div>
      <div className="w-full">
        <div className='w-full my-2'>
          <hr />
        </div>
      </div>
      <div className="flex items-start flex-col">
        <div className='dark:text-white font-medium text-sm'>
          {edad} Años
        </div>
        <div className='dark:text-white font-thin text-sm text-[#86868b]'>
          CI: {ci}
        </div>
      </div>
    </div>
  )
}
 
export default FamiliarCardSmall