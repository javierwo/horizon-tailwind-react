import React from 'react'
import Card from "components/card";
import CardHeader from 'components/cardHeader/CardHeader';
import CardPill from 'components/cardPill/CardPill';

import { MdEmail } from "react-icons/md";

const CorreosTable = () => {
  return (
    <Card extra={"h-full p-[16px] bg-cover"} > { /** justify-center */}
      <div className="flex flex-col h-full">
        <CardHeader
          titulo="Correos Electrónicos"
          tooltip="6 fuentes de informacion"
        />
        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
          <CardPill
            titulo="Correo Verificado"
            descripcion="edwinqs@hotmail.com"
            icon={<MdEmail className="h-6 w-6"/>}
          />
          <CardPill
            titulo="Correo MSP"
            descripcion="edwinqs@hotmail.com"
            icon={<MdEmail className="h-6 w-6"/>}
          />          
          <CardPill
            titulo="Correo ANT"
            descripcion="edwinqs@hotmail.com"
            icon={<MdEmail className="h-6 w-6"/>}
          />
        </div>
      </div>
    </Card>
    )
}

export default CorreosTable