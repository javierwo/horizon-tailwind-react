import React from 'react'

const CoopCard = (props) => {

  const { diasmora, entidad, cuota } = props;

  return (
    <div className="flex flex-col items-start justify-center rounded-2xl bg-gray-50 bg-clip-border px-3 py-4 dark:!bg-navy-700 dark:shadow-none">
      <div className='flex flex-row w-full items-center'>
        <div className='flex flex-col items-center gap-1 w-[100px]'>
          <div className='text-5xl text-green-400'>
            { diasmora }
          </div>
          <div className='bg-green-100 text-green-500 rounded-xl text-sm w-full py-1 font-medium dark:text-navy-700 text-center'>
            días en mora
          </div>
        </div>
        <div className='ml-4'>
          <p className="text-lg font-medium w-full text-navy-700 dark:text-white border-b-2">
            { entidad }
          </p>
          <p className="text-sm mt-2 text-gray-600">Cuota de Crédito</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            { cuota }
          </p>
        </div>
      </div>
    </div>
  )
}

export default CoopCard