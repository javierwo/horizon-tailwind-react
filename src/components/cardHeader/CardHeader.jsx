import React from 'react'
import TooltipHorizon from 'components/tooltip';
import { MdInfo } from "react-icons/md";

const CardHeader = (props) => {

  const { titulo, tooltip, subtitulo } = props;

  return (
    <div className="mt-2 w-full mb-6">
      <div className='px-2 text-navy-700 dark:text-white flex flex-row justify-between mb-2 items-center'>
        <div>
          <h4 className="text-xl font-bold">
            {titulo}
          </h4>
          <div>
            {subtitulo}
          </div>
        </div>
        <TooltipHorizon 
          placement="top"
          content={tooltip}
          trigger={
            <div> <MdInfo className="h-6 w-6" /> </div>
          }
        />
      </div>
      <hr />
    </div>
  )
}

export default CardHeader