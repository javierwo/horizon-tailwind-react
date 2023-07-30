import React from 'react'

import Card from "components/card";

const CentralBancoResumen = () => {
  return (
    <Card extra={"h-full p-[16px] bg-cover"} > 
      <div className="flex flex-col h-full items-start">
        <h4 className='text-base md:text-lg font-bold text-navy-700 dark:text-white mt-1'>
          Central de Riesgos del Banco
        </h4>
        <div className='h-full w-full mt-2 rounded-xl border-2 border-gray-100 p-4'>
          <div className='grid grid-cols-5 h-full gap-4'>
            <div className='col-span-2 bg-green-100 text-green-600 h-full w-full rounded-xl flex flex-col items-center justify-center'>
              <div className='text-4xl' >
                A1
              </div>
              <div className='text-sm font-thin mt-1'>
                Calificación
              </div>
            </div>
            <div className='col-span-3 flex flex-col justify-between gap-2'>
              <div>
                <p className="text-sm text-gray-600">Entidad</p>
                <p className="text-base font-medium text-navy-700 dark:text-white">
                  Pichincha
                </p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Saldo</p>
                <p className="text-base font-medium text-navy-700 dark:text-white">
                  $ 5000
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default CentralBancoResumen