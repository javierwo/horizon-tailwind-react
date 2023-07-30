import React from 'react'
import Card from "components/card";
import CardHeader from 'components/cardHeader/CardHeader';
import CardPill from 'components/cardPill/CardPill';

import { MdCall } from "react-icons/md";

const NumsTable = () => {
  return (
    <Card extra={"h-full p-[16px] bg-cover"} > { /** justify-center */}
      <div className="flex flex-col h-full">
        <CardHeader
          titulo="Números de Contacto"
          tooltip="6 fuentes de informacion"
        />
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          <CardPill
            titulo="Número Verificado"
            descripcion="0990803640"
            icon={<MdCall className="h-6 w-6"/>}
          />
          <CardPill
            titulo="Número MSP"
            descripcion="0990803640"
            icon={<MdCall className="h-6 w-6"/>}
          />
          <CardPill
            titulo="Número ANT"
            descripcion="0990803640"
            icon={<MdCall className="h-6 w-6"/>}
          />
        </div>
      </div>
    </Card>
  )
}

export default NumsTable