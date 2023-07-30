import avatar_male from "assets/img/avatars/avatar_male.png";

import React from 'react'

const FamiliarCardSmall = (props) => {

  const { parentezco, nombre, edad, ci, ciudadania } = props;

  return (
    <div className='w-full rounded-xl border-2 border-gray-100 p-4'>
      <div className="w-full flex flex-cols gap-2">
        <div className="flex flex-col items-center justify-center gap-1">
          <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full border-[4px] dark:!border-navy-700">
            <img className="h-full w-full rounded-full" src={avatar_male} alt="" />
          </div>
          <div className="text-xs bg-yellow-100 text-yellow-600 px-2 py-1 rounded-md mt-1 font-semibold">
            {parentezco}
          </div>
        </div>
        <div className='flex flex-col justify-between items-start w-full'>
          <div>
            <div className='text-navy-700 dark:text-white font-extrabold text-base'>
              {nombre}
            </div>
            <div className='w-full my-1'>
              <hr />
            </div>
          </div>
          <div>
            <div className='text-navy-700 dark:text-white font-medium text-sm'>
              {edad}
            </div>
            <div className='dark:text-white font-thin text-sm text-gray-600'>
              {ci}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FamiliarCardSmall