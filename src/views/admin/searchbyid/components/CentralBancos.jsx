import React from 'react'

import BancoCard from 'components/bancoCard/BancoCard';

import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import { Pagination } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/pagination.css";

const CentralBancos = () => {

  const plugins = [new Pagination({ type: 'bullet' })];

  return (
    <div className='flex flex-col w-[300px] h-full md:w-full justify-between'>
      <p className="text-lg font-bold text-navy-700 dark:text-white">
        Bancos
      </p>
      <Flicking
        align="prev"
        circular={true}
        plugins={plugins}
      >
        <div className="card-panel w-full">
          <BancoCard 
            calificacion="A1"
            entidad="Pichincha"
            saldo="$ 15.155,65"
          />
        </div>
        <div className="card-panel w-full">
          <BancoCard 
            calificacion="A1"
            entidad="Pichincha"
            saldo="$ 15.155,65"
          />
        </div>
        <ViewportSlot>
          <div className="flicking-pagination mb-[-5px]"></div>
        </ViewportSlot>
      </Flicking>
    </div>
  )
}

export default CentralBancos