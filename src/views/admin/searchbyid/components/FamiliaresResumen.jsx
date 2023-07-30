import React from 'react'

import Card from "components/card";
import FamiliarCardSmall from 'components/familiarCards/FamiliarCardSmall';

const FamiliaresResumen = () => {
  return (
    <Card extra={"h-full p-[16px] bg-cover"} > 
      <div className="flex flex-col h-full items-start">
        <h4 className='text-base md:text-lg font-bold text-navy-700 dark:text-white mt-1'>
          Contactos
        </h4>
        <div className='w-full mt-2 flex flex-col gap-4 md:h-[400px] md:overflow-auto'>
          <FamiliarCardSmall
            parentezco="Papá"
            nombre="Suquisupa Edwin"
            edad="25 Años"
            ci="0104847541"
            ciudadania="Ciudadano"
          />
          <FamiliarCardSmall
            parentezco="Mamá"
            nombre="Suquisupa Edwin"
            edad="25 Años"
            ci="0104847541"
            ciudadania="Ciudadano"
          />
          <FamiliarCardSmall
            parentezco="Hermano"
            nombre="Suquisupa Edwin"
            edad="25 Años"
            ci="0104847541"
            ciudadania="Ciudadano"
          />
        </div>
      </div>
    </Card>
  )
}

export default FamiliaresResumen