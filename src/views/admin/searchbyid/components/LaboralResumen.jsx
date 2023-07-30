import React from 'react'

import Card from "components/card";

const LaboralResumen = () => {
  return (
    <Card extra={"h-full p-[16px] bg-cover"} > 
      <div className="flex flex-col h-full items-start">
        <h4 className='text-base md:text-lg font-bold text-navy-700 dark:text-white mt-1'>
          Información Laboral
        </h4>
        <div className='h-full w-full mt-2 rounded-xl border-2 border-gray-100 p-4'>
          <div className="flex gap-2 items-center justify-center ">
            <div className='text-navy-700 dark:text-white font-extrabold text-base'>
              FINSOLRED S.A.
            </div>
          </div>
        <div className='w-full my-2'>
          <hr />
        </div>
        <div className='grid grid-cols-1 gap-2 mt-2'>
          <div className='col-span-1'>
            <p className="text-sm text-gray-600">Cargo</p>
            <p className="text-base font-medium text-navy-700 dark:text-white">
              Desarrollador de Software Junior
            </p>
          </div>
          <div className='col-span-1'>
            <p className="text-sm text-gray-600">Sueldo</p>
            <p className="text-base font-medium text-navy-700 dark:text-white">
              $ 500
            </p>
          </div>
        </div>
        </div>
      </div>
    </Card>
  )
}

export default LaboralResumen