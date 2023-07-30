import React from 'react'

const CardPill = (props) => {

  const { titulo, descripcion, icon, colorTexto, colorFondo } = props;
  //${colorTexto} ${colorFondo}

  return (
    <div className="h-full flex flex-row items-center px-2 py-1">
      <div className={`text-xl mr-4 dark:text-white text-navy-700 bg-white p-2 rounded-full shadow-md`}>
        {icon}
      </div>
      <div className="flex flex-col justify-center w-full">
        <p className="text-sm text-gray-600">{titulo}</p>
        <p className="text-base font-medium text-navy-700 dark:text-white">
          {descripcion}
        </p>
      </div>
    </div>
  )
}

export default CardPill