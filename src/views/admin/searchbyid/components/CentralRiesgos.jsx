import React from 'react'

import Card from "components/card";
import CardHeader from "components/cardHeader/CardHeader";
import CentralBancos from './CentralBancos';
import CentralCooperativas from './CentralCooperativas';

const CentralRiesgos = () => {

  return (
    <Card extra={"h-full p-[16px] bg-cover"}>
      <CardHeader
        titulo="Central de Riesgos"
        tooltip="Información actualizada a Marzo de 2023"
      />
      <div className="grid gap-4 md:grid md:grid-cols-1 h-full">
        <CentralBancos/>
        <CentralCooperativas/>
      </div>
    </Card>
  )
}

export default CentralRiesgos