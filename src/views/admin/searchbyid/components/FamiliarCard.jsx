import React from 'react'

import Card from "components/card";

import { MdPhone, MdEmail } from 'react-icons/md';
import CardPill from 'components/cardPill/CardPill';

const FamiliarCard = () => {
  return (
    <Card extra={"h-full w-full"}>
      <div className='p-4'>
        <div className="flex items-center justify-between">
          <div className="text-sm bg-yellow-100 text-yellow-600 px-4 py-1 rounded-md font-semibold">
            CLIENTE
          </div>
        </div>
        <h4 className="text-base font-bold text-navy-700 dark:text-white mt-3">
          Edwin Ozuna Suquisupa Nacipucha
        </h4>
        <h4 className="text-sm font-thin text-navy-700 dark:text-white mt-1 mb-2">
          CI: 0105241564
        </h4>
        <div className='flex flex-row gap-2'>
          <div className='text-sm bg-white rounded-xl py-1 px-2 text-navy-700 border-[1px] border-navy-700  dark:text-white '>
            Tercera Edad
          </div>
          <div className='text-sm bg-white rounded-xl py-1 px-2 text-navy-700 border-[1px] border-navy-700  dark:text-white '>
            Ciudadano
          </div>
        </div>
        <hr className='my-4'/>
        <div className='flex flex-col gap-2'>
          <div className='p-1 rounded-2xl  bg-clip-border border-2 border-gray-100'>
            <CardPill
              titulo="Número Verificado"
              descripcion="099098048965"
              icon={<MdPhone className="h-4 w-4"/>}
            />
          </div>
          <div className='p-1 rounded-2xl  bg-clip-border border-2 border-gray-100'>
            <CardPill
              titulo="Correo Verificado"
              descripcion="edwinqs@hotmail.com"
              icon={<MdEmail className="h-4 w-4"/>}
            />
          </div>
        </div>
      </div>
    </Card>
  )
}

export default FamiliarCard