import React from 'react'

const BancoCard = (props) => {

  const { calificacion, entidad, saldo } = props;

  return (
    <div className="flex flex-col items-start justify-center rounded-2xl bg-clip-border px-3 py-4  dark:!bg-navy-700 dark:shadow-none bg-gray-50">
      <div className='flex flex-row w-full items-center'>
        <div className='w-[100px] h-full flex items-center justify-center'>
          <div className=' h-[60px] w-[60px] flex flex-row items-center justify-center dark:!bg-navy-700  rounded-full border-4 border-green-400 text-green-400 text-xl font-medium'>
            {calificacion}
          </div>
        </div>
        <div className='ml-4'>
          <p className="text-lg font-medium w-full  text-navy-700 dark:text-white border-b-2">
            {entidad}
          </p>
          <p className="text-sm mt-2 text-gray-600">Saldo</p>
          <p className="text-base font-medium text-navy-700 dark:text-white">
            {saldo}
          </p>
        </div>
      </div>
    </div>
  )
}

export default BancoCard