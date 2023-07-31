import React from 'react'

import Card from "components/card";
import CardPillSmall from 'components/cardPill/CardPillSmall';

import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useGetIessQuery } from 'redux/services/iessApi'; 

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const LaboralResumen = () => {

  const searchValueState = useSelector((state) => state.searchValueState)

  const { data: iess, isLoading } = useGetIessQuery(searchValueState.value)

  if (isLoading) {
    return (
      <Card extra={"h-full p-[16px]"} > 
        <div className="flex flex-col h-full items-start ">
          <h4 className='text-base md:text-lg font-extrabold dark:text-white mt-1'>
            Información Laboral
          </h4>
          <div className='h-full w-full mt-2 rounded-xl border-2 border-[#f5f5f5] p-4'>
            <Skeleton className='h-full' />
          </div>
        </div>
    </Card>
    )
  }

  if (iess.length === 0) {
    return (
      <Card extra={"h-full p-[16px]"} > 
        <div className="flex flex-col h-full items-start ">
          <h4 className='text-base md:text-lg font-extrabold dark:text-white mt-1'>
            Información Laboral
          </h4>
          <div className='h-full w-full mt-2 rounded-xl border-2 border-[#f5f5f5] p-4'>
            Sin Información disponible.
          </div>
        </div>
      </Card>
    )
  }

  return (
    <Card extra={"h-full p-[16px] bg-cover"} > 
      <div className="flex flex-col h-full items-start">
        <h4 className='text-base md:text-lg font-extrabold dark:text-white mt-1'>
          Información Laboral
        </h4>
        <div className='h-full w-full mt-2 rounded-xl border-2 border-[#f5f5f5] p-4'>
          <div className="flex gap-2 items-center justify-center ">
            <div className='dark:text-white font-semibold text-base'>
              {iess[0].NOMEMP}
            </div>
          </div>
        <div className='w-full my-2'>
          <hr />
        </div>
        <div className='grid grid-cols-1 gap-2 mt-2'>
          <div className='col-span-1'>
            <CardPillSmall 
              titulo={"Cargo"}
              descripcion={iess[0].OCUAFI}
            />
          </div>
          <div className='col-span-1'>
            <CardPillSmall 
              titulo={"Sueldo"}
              descripcion={"$ "+iess[0].SALARIO}
            />
          </div>
        </div>
        </div>
      </div>
    </Card>
  )
}

export default LaboralResumen