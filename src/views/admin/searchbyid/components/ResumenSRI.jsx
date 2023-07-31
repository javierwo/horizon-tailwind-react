import React from 'react'

import Card from "components/card";
import CardPillSmall from 'components/cardPill/CardPillSmall';

import { MdCheckCircle, MdCancel } from "react-icons/md";

import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useGetSriQuery } from 'redux/services/sriApi';

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const ResumenSRI = () => {

  const searchValueState = useSelector((state) => state.searchValueState)

  const { data: sri, isLoading } = useGetSriQuery(searchValueState.value)

  if (isLoading) {
    return (
      <Card extra={"h-full p-[16px]"} > 
        <div className="flex flex-col h-full items-start ">
          <h4 className='text-base md:text-lg font-extrabold dark:text-white mt-1'>
            SRI
          </h4>
          <div className='h-full w-full mt-2 rounded-xl border-2 border-[#f5f5f5] p-4'>
            <Skeleton className='h-full' />
          </div>
        </div>
      </Card>
    )
  }

  if (sri.length === 0) {
    return (
      <Card extra={"h-full p-[16px]"} > 
        <div className="flex flex-col h-full items-start ">
          <h4 className='text-base md:text-lg font-extrabold dark:text-white mt-1'>
            SRI
          </h4>
          <div className='h-full w-full mt-2 rounded-xl border-2 border-[#f5f5f5] p-4'>
            Sin Información disponible.
          </div>
        </div>
      </Card>
    )
  }

  const estadoPersona = sri[0].ESTADO_PERSONA_NATURAL;

  let colorEstado;
  let iconoEstado;

  if (estadoPersona==='Activo'){
    colorEstado = 'bg-green-100 text-green-600';
    iconoEstado = <MdCheckCircle className='h-6 w-6' />
  } else {
    colorEstado = 'bg-red-100 text-red-500';
    iconoEstado = <MdCancel className='h-6 w-6' />
  }

  return (
    <Card extra={"h-full p-[16px] bg-cover"} > 
      <div className="flex flex-col h-full items-start">
        <h4 className='text-base md:text-lg font-extrabold dark:text-white mt-1'>
          SRI
        </h4>
        <div className='h-full w-full mt-2 rounded-xl border-2 border-[#f5f5f5] p-4 flex items-center'>
          <div className='flex flex-row gap-2 items-center'>
            <div className={`${colorEstado} rounded-full flex items-center justify-center h-10 w-10`}>
              {iconoEstado}
            </div>
            <CardPillSmall 
              titulo={"Estado del RUC"}
              descripcion={sri[0].ESTADO_PERSONA_NATURAL}
            />
          </div>
        </div>
      </div>
    </Card>
  )
}

export default ResumenSRI