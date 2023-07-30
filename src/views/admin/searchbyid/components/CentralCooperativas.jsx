import React from 'react'

import CoopCard from 'components/coopCard/CoopCard';

import Flicking, { ViewportSlot } from "@egjs/react-flicking";
import { Pagination } from "@egjs/flicking-plugins";
import "@egjs/flicking-plugins/dist/pagination.css";

const CentralCooperativas = () => {

  const plugins = [new Pagination({ type: 'bullet' })];

  return (
    <div className='flex flex-col w-[300px] h-full md:w-full justify-between'>
      <p className="text-lg font-bold text-navy-700 dark:text-white">
        Cooperativas
      </p>
      <Flicking
        align="prev"
        circular={true}
        plugins={plugins}
      >
        <div className="card-panel w-full">
          <CoopCard 
            diasmora="0"
            entidad="Mutualista Azuay"
            cuota="$ 503,75"
          />
        </div>
        <div className="card-panel w-full">
          <CoopCard 
            diasmora="0"
            entidad="Mutualista Azuay"
            cuota="$ 503,75"
          />
        </div>
        <div className="card-panel w-full">
          <CoopCard 
            diasmora="0"
            entidad="Mutualista Azuay"
            cuota="$ 503,75"
          />
        </div>
        <ViewportSlot>
          <div className="flicking-pagination mb-[-5px]"></div>
        </ViewportSlot>
      </Flicking>
    </div>
  )
}

export default CentralCooperativas