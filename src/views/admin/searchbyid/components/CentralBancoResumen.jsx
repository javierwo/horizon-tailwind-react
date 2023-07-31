import React from 'react'

import Card from "components/card";
import CardPillSmall from 'components/cardPill/CardPillSmall';

import { useSelector } from 'react-redux/es/hooks/useSelector';
import { useGetCentralBancosQuery } from 'redux/services/centralBancosApi';

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const CentralBancoResumen = () => {

  const searchValueState = useSelector((state) => state.searchValueState)

  const { data: bancos, isLoading } = useGetCentralBancosQuery(searchValueState.value)

  if (isLoading) {
    return (
      <Card extra={"h-full p-[16px]"} > 
        <div className="flex flex-col h-full items-start ">
          <h4 className='text-base md:text-lg font-extrabold dark:text-white mt-1'>
            Central de Riesgos del Banco
          </h4>
          <div className='h-full w-full mt-2 rounded-xl border-2 border-[#f5f5f5] p-4'>
            <Skeleton className='h-full' />
          </div>
        </div>
    </Card>
    )
  }

  if (bancos.length === 0) {
    return (
      <Card extra={"h-full p-[16px]"} > 
        <div className="flex flex-col h-full items-start ">
          <h4 className='text-base md:text-lg font-extrabold dark:text-white mt-1'>
            Central de Riesgos del Banco
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
          Central de Riesgos del Banco
        </h4>
        <div className='h-full w-full mt-2 rounded-xl border-2 border-gray-100 p-4'>
          <div className='grid grid-cols-5 h-full gap-4'>
            <div className='col-span-2 bg-green-100 text-green-600 h-full w-full rounded-xl flex flex-col items-center justify-center'>
              <div className='text-4xl' >
                A1
              </div>
              <div className='text-sm font-thin mt-1'>
                Calificación
              </div>
            </div>
            <div className='col-span-3 flex flex-col justify-between gap-2'>
              <div className='col-span-1'>
                <CardPillSmall 
                  titulo={"Entidad"}
                  descripcion={"Pichincha"}
                />
              </div>
              <div className='col-span-1'>
                <CardPillSmall 
                  titulo={"Saldo"}
                  descripcion={"$ 5000"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default CentralBancoResumen