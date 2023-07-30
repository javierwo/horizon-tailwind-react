import React from 'react'

import Card from "components/card";

import { MdCheckCircle } from "react-icons/md";

const ResultsCol = () => {
  return (
    <Card extra={"h-full bg-cover text-navy-700 bg-white items-center justify-center"} > 
      <div className='py-2 flex flex-row items-center gap-2 justify-cente'>
        <MdCheckCircle className="h-6 w-6" />
        <h4 className='text-base md:text-lg font-bold text-navy-700 dark:text-white mt-1'>
          Resultados
        </h4>
      </div>
    </Card>
  )
}

export default ResultsCol