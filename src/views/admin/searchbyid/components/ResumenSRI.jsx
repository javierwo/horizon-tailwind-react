import React from 'react'

import Card from "components/card";

// Icon Imports
import { MdCheckCircle } from "react-icons/md";

const ResumenSRI = () => {
  return (
    <Card extra={"h-full p-[16px] bg-cover"} > 
      <div className="flex flex-col h-full items-start">
        <h4 className='text-base md:text-lg font-bold text-navy-700 dark:text-white mt-1'>
          SRI
        </h4>
        <div className='h-full w-full mt-2 rounded-xl border-2 border-gray-100 p-4 flex items-center'>
          <div className='flex flex-row gap-2 items-center'>
            <div className='bg-green-100 text-green-600 rounded-full flex items-center justify-center h-10 w-10'>
              <MdCheckCircle className='h-6 w-6' />
            </div>
            <div>
              <p className="text-sm text-gray-600">Estado del RUC</p>
              <p className="text-base font-medium text-navy-700 dark:text-white">
                Activo
              </p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default ResumenSRI