import React from 'react'

const CardPillSmall = (props) => {

  const { titulo, descripcion, icon } = props;

  return (
    <div className="h-full flex flex-row items-center rounded-2xl">
      <div className="flex flex-col justify-center w-full">
        <p className="text-sm text-gray-600">{titulo}</p>
        <p className="text-base font-medium text-navy-700 dark:text-white">
          {descripcion}
        </p>
      </div>
    </div>
  )
}

export default CardPillSmall